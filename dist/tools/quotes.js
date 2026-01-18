import { getClient } from '../utils/api-client.js';
// Quote Tools
export async function listQuotes(params) {
    const client = getClient();
    return client.list('/quotes', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
            customer_id: params.customer_id,
            outlet_id: params.outlet_id,
            status: params.status,
        },
    });
}
export async function getQuote(quoteId) {
    const client = getClient();
    return client.getOne(`/quotes/${quoteId}`, { version: '2.0' });
}
export async function createQuote(data) {
    const client = getClient();
    return client.post('/quotes', data, { version: '2.0' });
}
export async function updateQuote(quoteId, data) {
    const client = getClient();
    return client.put(`/quotes/${quoteId}`, data, { version: '2.0' });
}
export async function deleteQuote(quoteId) {
    const client = getClient();
    await client.delete(`/quotes/${quoteId}`, { version: '2.0' });
}
export async function convertQuoteToSale(quoteId) {
    const client = getClient();
    return client.post(`/quotes/${quoteId}/convert`, {}, { version: '2.0' });
}
// Tool definitions for MCP
export const quoteToolDefinitions = [
    {
        name: 'lightspeed_list_quotes',
        description: 'List quotes with optional filtering',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
                customer_id: { type: 'string', description: 'Filter by customer ID' },
                outlet_id: { type: 'string', description: 'Filter by outlet ID' },
                status: { type: 'string', description: 'Filter by status' },
            },
        },
    },
    {
        name: 'lightspeed_get_quote',
        description: 'Get a single quote by ID',
        inputSchema: {
            type: 'object',
            properties: {
                quote_id: { type: 'string', description: 'The quote ID' },
            },
            required: ['quote_id'],
        },
    },
    {
        name: 'lightspeed_create_quote',
        description: 'Create a new quote',
        inputSchema: {
            type: 'object',
            properties: {
                outlet_id: { type: 'string', description: 'Outlet ID (required)' },
                customer_id: { type: 'string', description: 'Customer ID' },
                user_id: { type: 'string', description: 'Staff user ID' },
                note: { type: 'string', description: 'Quote note' },
                expiry_date: { type: 'string', description: 'Expiry date (ISO 8601)' },
                line_items: {
                    type: 'array',
                    description: 'Array of line items',
                    items: {
                        type: 'object',
                        properties: {
                            product_id: { type: 'string', description: 'Product ID' },
                            quantity: { type: 'number', description: 'Quantity' },
                            price: { type: 'number', description: 'Unit price' },
                        },
                        required: ['product_id', 'quantity'],
                    },
                },
            },
            required: ['outlet_id'],
        },
    },
    {
        name: 'lightspeed_update_quote',
        description: 'Update an existing quote',
        inputSchema: {
            type: 'object',
            properties: {
                quote_id: { type: 'string', description: 'The quote ID to update' },
                customer_id: { type: 'string', description: 'Customer ID' },
                status: { type: 'string', description: 'Quote status' },
                note: { type: 'string', description: 'Quote note' },
                expiry_date: { type: 'string', description: 'Expiry date (ISO 8601)' },
            },
            required: ['quote_id'],
        },
    },
    {
        name: 'lightspeed_delete_quote',
        description: 'Delete a quote',
        inputSchema: {
            type: 'object',
            properties: {
                quote_id: { type: 'string', description: 'The quote ID to delete' },
            },
            required: ['quote_id'],
        },
    },
    {
        name: 'lightspeed_convert_quote_to_sale',
        description: 'Convert a quote to a sale',
        inputSchema: {
            type: 'object',
            properties: {
                quote_id: { type: 'string', description: 'The quote ID to convert' },
            },
            required: ['quote_id'],
        },
    },
];
//# sourceMappingURL=quotes.js.map