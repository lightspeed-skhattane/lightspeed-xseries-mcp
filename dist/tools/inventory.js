import { getClient } from '../utils/api-client.js';
// Inventory Tools
export async function listInventory(params) {
    const client = getClient();
    return client.list('/inventory', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
            product_id: params.product_id,
            outlet_id: params.outlet_id,
        },
    });
}
export async function getInventory(inventoryId) {
    const client = getClient();
    // Note: There is no /inventory/{id} endpoint in the API.
    // We fetch from the list and filter by ID instead.
    const response = await client.list('/inventory', {
        version: '2.0',
        params: {},
    });
    // Find the inventory record by ID from the list
    const inventoryData = response.data || [];
    const inventory = inventoryData.find((inv) => inv.id === inventoryId);
    if (!inventory) {
        throw new Error(`Inventory record with ID ${inventoryId} not found`);
    }
    return { data: inventory, includes: null };
}
export async function updateInventory(inventoryId, data) {
    const client = getClient();
    return client.put(`/inventory/${inventoryId}`, data, { version: '2.0' });
}
// Consignment Tools
export async function listConsignments(params) {
    const client = getClient();
    return client.list('/consignments', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
            outlet_id: params.outlet_id,
            supplier_id: params.supplier_id,
            type: params.type,
            status: params.status,
            since: params.since,
        },
    });
}
export async function getConsignment(consignmentId) {
    const client = getClient();
    return client.getOne(`/consignments/${consignmentId}`, { version: '2.0' });
}
export async function createConsignment(data) {
    const client = getClient();
    return client.post('/consignments', data, { version: '2.0' });
}
export async function updateConsignment(consignmentId, data) {
    const client = getClient();
    return client.put(`/consignments/${consignmentId}`, data, { version: '2.0' });
}
export async function deleteConsignment(consignmentId) {
    const client = getClient();
    await client.delete(`/consignments/${consignmentId}`, { version: '2.0' });
}
// Consignment Product Tools
export async function listConsignmentProducts(consignmentId, params) {
    const client = getClient();
    return client.list(`/consignments/${consignmentId}/products`, {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
export async function addConsignmentProduct(consignmentId, data) {
    const client = getClient();
    return client.post(`/consignments/${consignmentId}/products`, data, { version: '2.0' });
}
export async function updateConsignmentProduct(consignmentId, productId, data) {
    const client = getClient();
    return client.put(`/consignments/${consignmentId}/products/${productId}`, data, { version: '2.0' });
}
export async function deleteConsignmentProduct(consignmentId, productId) {
    const client = getClient();
    await client.delete(`/consignments/${consignmentId}/products/${productId}`, { version: '2.0' });
}
export async function getConsignmentTotals(consignmentId) {
    const client = getClient();
    return client.getOne(`/consignments/${consignmentId}/totals`, { version: '2.0' });
}
export async function bulkUpdateConsignmentProducts(consignmentId, data) {
    const client = getClient();
    return client.put(`/consignments/${consignmentId}/products`, data, { version: '2.0' });
}
// Tool definitions for MCP
export const inventoryToolDefinitions = [
    {
        name: 'lightspeed_list_inventory',
        description: 'List inventory records with optional filtering',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
                product_id: { type: 'string', description: 'Filter by product ID' },
                outlet_id: { type: 'string', description: 'Filter by outlet ID' },
            },
        },
    },
    {
        name: 'lightspeed_get_inventory',
        description: 'Get a single inventory record by ID',
        inputSchema: {
            type: 'object',
            properties: {
                inventory_id: { type: 'string', description: 'The inventory record ID' },
            },
            required: ['inventory_id'],
        },
    },
    {
        name: 'lightspeed_update_inventory',
        description: 'Update inventory levels for a product at an outlet',
        inputSchema: {
            type: 'object',
            properties: {
                inventory_id: { type: 'string', description: 'The inventory record ID' },
                inventory_level: { type: 'number', description: 'New inventory level' },
                reorder_point: { type: 'number', description: 'Reorder point threshold' },
                restock_level: { type: 'number', description: 'Restock level target' },
            },
            required: ['inventory_id'],
        },
    },
    {
        name: 'lightspeed_list_consignments',
        description: 'List consignments (stock orders, transfers, stocktakes, returns)',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
                outlet_id: { type: 'string', description: 'Filter by destination outlet ID' },
                supplier_id: { type: 'string', description: 'Filter by supplier ID' },
                type: { type: 'string', description: 'Filter by type (SUPPLIER, OUTLET, STOCKTAKE, RETURN)' },
                status: { type: 'string', description: 'Filter by status (OPEN, SENT, RECEIVED, CANCELLED, etc.)' },
                since: { type: 'string', description: 'Filter by last updated date (ISO 8601)' },
            },
        },
    },
    {
        name: 'lightspeed_get_consignment',
        description: 'Get a single consignment by ID',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
            },
            required: ['consignment_id'],
        },
    },
    {
        name: 'lightspeed_create_consignment',
        description: 'Create a new consignment (supplier order, outlet transfer, stocktake, or return)',
        inputSchema: {
            type: 'object',
            properties: {
                outlet_id: { type: 'string', description: 'Destination outlet ID (required)' },
                type: { type: 'string', description: 'Consignment type: SUPPLIER, OUTLET, STOCKTAKE, RETURN (required)' },
                supplier_id: { type: 'string', description: 'Supplier ID (for SUPPLIER type)' },
                source_outlet_id: { type: 'string', description: 'Source outlet ID (for OUTLET transfers)' },
                name: { type: 'string', description: 'Consignment name' },
                status: { type: 'string', description: 'Initial status (OPEN, SENT)' },
                consignment_date: { type: 'string', description: 'Consignment date (ISO 8601)' },
                due_at: { type: 'string', description: 'Expected delivery date (ISO 8601)' },
                reference: { type: 'string', description: 'Reference number' },
                supplier_invoice: { type: 'string', description: 'Supplier invoice number' },
            },
            required: ['outlet_id', 'type'],
        },
    },
    {
        name: 'lightspeed_update_consignment',
        description: 'Update a consignment (e.g., change status to RECEIVED)',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
                status: { type: 'string', description: 'New status' },
                name: { type: 'string', description: 'Consignment name' },
                due_at: { type: 'string', description: 'Expected delivery date' },
                reference: { type: 'string', description: 'Reference number' },
                supplier_invoice: { type: 'string', description: 'Supplier invoice number' },
            },
            required: ['consignment_id'],
        },
    },
    {
        name: 'lightspeed_delete_consignment',
        description: 'Delete a consignment',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID to delete' },
            },
            required: ['consignment_id'],
        },
    },
    {
        name: 'lightspeed_list_consignment_products',
        description: 'List products in a consignment',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
            },
            required: ['consignment_id'],
        },
    },
    {
        name: 'lightspeed_add_consignment_product',
        description: 'Add a product to a consignment',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
                product_id: { type: 'string', description: 'Product ID to add' },
                count: { type: 'number', description: 'Quantity ordered/expected' },
                cost: { type: 'number', description: 'Unit cost price' },
            },
            required: ['consignment_id', 'product_id', 'count'],
        },
    },
    {
        name: 'lightspeed_update_consignment_product',
        description: 'Update a product in a consignment (e.g., update received quantity)',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
                product_id: { type: 'string', description: 'Product ID in the consignment' },
                count: { type: 'number', description: 'New quantity' },
                cost: { type: 'number', description: 'Unit cost' },
                received: { type: 'number', description: 'Quantity received' },
            },
            required: ['consignment_id', 'product_id'],
        },
    },
    {
        name: 'lightspeed_delete_consignment_product',
        description: 'Remove a product from a consignment',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
                product_id: { type: 'string', description: 'Product ID to remove' },
            },
            required: ['consignment_id', 'product_id'],
        },
    },
    {
        name: 'lightspeed_get_consignment_totals',
        description: 'Get totals (counts and costs) for a consignment',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
            },
            required: ['consignment_id'],
        },
    },
    {
        name: 'lightspeed_bulk_update_consignment_products',
        description: 'Bulk update multiple products in a consignment',
        inputSchema: {
            type: 'object',
            properties: {
                consignment_id: { type: 'string', description: 'The consignment ID' },
                products: {
                    type: 'array',
                    description: 'Array of products to update',
                    items: {
                        type: 'object',
                        properties: {
                            product_id: { type: 'string', description: 'Product ID' },
                            count: { type: 'number', description: 'Quantity' },
                            cost: { type: 'number', description: 'Unit cost' },
                            received: { type: 'number', description: 'Quantity received' },
                        },
                        required: ['product_id'],
                    },
                },
            },
            required: ['consignment_id', 'products'],
        },
    },
];
//# sourceMappingURL=inventory.js.map