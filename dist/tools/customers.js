import { getClient } from '../utils/api-client.js';
// Customer Tools
export async function listCustomers(params) {
    const client = getClient();
    return client.list('/customers', {
        version: '0.9',
        params: {
            page_size: params.page_size,
            after: params.after,
            before: params.before,
            id: params.id,
            code: params.code,
            email: params.email,
            since: params.since,
            deleted: params.deleted,
        },
    });
}
export async function getCustomer(customerId) {
    const client = getClient();
    return client.getOne(`/customers/${customerId}`, { version: '2.0' });
}
export async function createCustomer(data) {
    const client = getClient();
    return client.post('/customers', data, { version: '0.9' });
}
export async function updateCustomer(customerId, data) {
    const client = getClient();
    return client.put(`/customers/${customerId}`, data, { version: '2.0' });
}
export async function deleteCustomer(customerId) {
    const client = getClient();
    await client.delete(`/customers/${customerId}`, { version: '2.0' });
}
// Customer Group Tools (API 2.0)
export async function listCustomerGroups(params) {
    const client = getClient();
    return client.list('/customer_groups', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
export async function getCustomerGroup(groupId) {
    const client = getClient();
    return client.getOne(`/customer_groups/${groupId}`, { version: '2.0' });
}
export async function createCustomerGroup(data) {
    const client = getClient();
    return client.post('/customer_groups', data, { version: '2.0' });
}
export async function updateCustomerGroup(groupId, data) {
    const client = getClient();
    return client.put(`/customer_groups/${groupId}`, data, { version: '2.0' });
}
export async function deleteCustomerGroup(groupId) {
    const client = getClient();
    await client.delete(`/customer_groups/${groupId}`, { version: '2.0' });
}
export async function addCustomersToGroup(groupId, customerIds) {
    const client = getClient();
    await client.post(`/customer_groups/${groupId}/customers`, { customer_ids: customerIds }, { version: '2.0' });
}
export async function removeCustomersFromGroup(groupId, customerIds) {
    const client = getClient();
    await client.delete(`/customer_groups/${groupId}/customers`, { version: '2.0' });
}
export async function getGroupCustomers(groupId, params) {
    const client = getClient();
    return client.list(`/customer_groups/${groupId}/customers`, {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
// Bulk update customer tax assignments
export async function bulkUpdateCustomerTaxes(data) {
    const client = getClient();
    await client.post('/customers/taxes', data, { version: '2.0' });
}
// Tool definitions for MCP
export const customerToolDefinitions = [
    {
        name: 'lightspeed_list_customers',
        description: 'List customers with optional filtering and pagination',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination (get next page)' },
                before: { type: 'string', description: 'Cursor for pagination (get previous page)' },
                id: { type: 'string', description: 'Filter by customer ID' },
                code: { type: 'string', description: 'Filter by customer code' },
                email: { type: 'string', description: 'Filter by customer email' },
                since: { type: 'string', description: 'Filter by last updated date (ISO 8601)' },
                deleted: { type: 'boolean', description: 'Include deleted customers' },
            },
        },
    },
    {
        name: 'lightspeed_get_customer',
        description: 'Get a single customer by ID',
        inputSchema: {
            type: 'object',
            properties: {
                customer_id: { type: 'string', description: 'The customer ID' },
            },
            required: ['customer_id'],
        },
    },
    {
        name: 'lightspeed_create_customer',
        description: 'Create a new customer',
        inputSchema: {
            type: 'object',
            properties: {
                customer_code: { type: 'string', description: 'Unique customer code' },
                first_name: { type: 'string', description: 'First name' },
                last_name: { type: 'string', description: 'Last name' },
                email: { type: 'string', description: 'Email address' },
                phone: { type: 'string', description: 'Phone number' },
                mobile: { type: 'string', description: 'Mobile number' },
                company_name: { type: 'string', description: 'Company name' },
                physical_address_1: { type: 'string', description: 'Physical address line 1' },
                physical_address_2: { type: 'string', description: 'Physical address line 2' },
                physical_city: { type: 'string', description: 'City' },
                physical_postcode: { type: 'string', description: 'Postal code' },
                physical_state: { type: 'string', description: 'State/Province' },
                physical_country_id: { type: 'string', description: 'Country ID' },
                customer_group_id: { type: 'string', description: 'Customer group ID' },
                enable_loyalty: { type: 'boolean', description: 'Enable loyalty program' },
                note: { type: 'string', description: 'Customer notes' },
                date_of_birth: { type: 'string', description: 'Date of birth (YYYY-MM-DD)' },
                sex: { type: 'string', description: 'Gender' },
                do_not_email: { type: 'boolean', description: 'Do not send marketing emails' },
            },
        },
    },
    {
        name: 'lightspeed_update_customer',
        description: 'Update an existing customer',
        inputSchema: {
            type: 'object',
            properties: {
                customer_id: { type: 'string', description: 'The customer ID to update' },
                customer_code: { type: 'string', description: 'Unique customer code' },
                first_name: { type: 'string', description: 'First name' },
                last_name: { type: 'string', description: 'Last name' },
                email: { type: 'string', description: 'Email address' },
                phone: { type: 'string', description: 'Phone number' },
                mobile: { type: 'string', description: 'Mobile number' },
                company_name: { type: 'string', description: 'Company name' },
                customer_group_id: { type: 'string', description: 'Customer group ID' },
                enable_loyalty: { type: 'boolean', description: 'Enable loyalty program' },
                note: { type: 'string', description: 'Customer notes' },
                do_not_email: { type: 'boolean', description: 'Do not send marketing emails' },
            },
            required: ['customer_id'],
        },
    },
    {
        name: 'lightspeed_delete_customer',
        description: 'Delete a customer by ID',
        inputSchema: {
            type: 'object',
            properties: {
                customer_id: { type: 'string', description: 'The customer ID to delete' },
            },
            required: ['customer_id'],
        },
    },
    {
        name: 'lightspeed_list_customer_groups',
        description: 'List all customer groups',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
            },
        },
    },
    {
        name: 'lightspeed_get_customer_group',
        description: 'Get a single customer group by ID',
        inputSchema: {
            type: 'object',
            properties: {
                group_id: { type: 'string', description: 'The customer group ID' },
            },
            required: ['group_id'],
        },
    },
    {
        name: 'lightspeed_create_customer_group',
        description: 'Create a new customer group',
        inputSchema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Customer group name' },
            },
            required: ['name'],
        },
    },
    {
        name: 'lightspeed_update_customer_group',
        description: 'Update an existing customer group',
        inputSchema: {
            type: 'object',
            properties: {
                group_id: { type: 'string', description: 'The customer group ID to update' },
                name: { type: 'string', description: 'Customer group name' },
            },
            required: ['group_id'],
        },
    },
    {
        name: 'lightspeed_delete_customer_group',
        description: 'Delete a customer group by ID',
        inputSchema: {
            type: 'object',
            properties: {
                group_id: { type: 'string', description: 'The customer group ID to delete' },
            },
            required: ['group_id'],
        },
    },
    {
        name: 'lightspeed_add_customers_to_group',
        description: 'Add customers to a customer group',
        inputSchema: {
            type: 'object',
            properties: {
                group_id: { type: 'string', description: 'The customer group ID' },
                customer_ids: { type: 'array', items: { type: 'string' }, description: 'Array of customer IDs to add' },
            },
            required: ['group_id', 'customer_ids'],
        },
    },
    {
        name: 'lightspeed_remove_customers_from_group',
        description: 'Remove customers from a customer group',
        inputSchema: {
            type: 'object',
            properties: {
                group_id: { type: 'string', description: 'The customer group ID' },
                customer_ids: { type: 'array', items: { type: 'string' }, description: 'Array of customer IDs to remove' },
            },
            required: ['group_id', 'customer_ids'],
        },
    },
    {
        name: 'lightspeed_get_group_customers',
        description: 'Get customers in a customer group',
        inputSchema: {
            type: 'object',
            properties: {
                group_id: { type: 'string', description: 'The customer group ID' },
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
            },
            required: ['group_id'],
        },
    },
    {
        name: 'lightspeed_bulk_update_customer_taxes',
        description: 'Bulk update tax assignments for multiple customers',
        inputSchema: {
            type: 'object',
            properties: {
                customer_ids: { type: 'array', items: { type: 'string' }, description: 'Array of customer IDs' },
                tax_id: { type: 'string', description: 'Tax ID to assign' },
            },
            required: ['customer_ids', 'tax_id'],
        },
    },
];
//# sourceMappingURL=customers.js.map