import { getClient } from '../utils/api-client.js';
// Service Order Tools
export async function listServices(params) {
    const client = getClient();
    return client.list('/services', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
export async function getService(serviceId) {
    const client = getClient();
    return client.getOne(`/services/${serviceId}`, { version: '2.0' });
}
export async function createService(data) {
    const client = getClient();
    return client.post('/services', data, { version: '2.0' });
}
export async function listCustomerServices(customerId, params) {
    const client = getClient();
    return client.list(`/services/customer/${customerId}`, {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
export async function getServicesAgenda(outletId, params) {
    const client = getClient();
    return client.list(`/services/agenda/${outletId}`, {
        version: '2.0',
        params: {
            date: params.date,
        },
    });
}
// Tool definitions for MCP
export const serviceToolDefinitions = [
    {
        name: 'lightspeed_list_services',
        description: 'List all service orders',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
            },
        },
    },
    {
        name: 'lightspeed_get_service',
        description: 'Get a single service order by ID',
        inputSchema: {
            type: 'object',
            properties: {
                service_id: { type: 'string', description: 'The service order ID' },
            },
            required: ['service_id'],
        },
    },
    {
        name: 'lightspeed_create_service',
        description: 'Create a new service order',
        inputSchema: {
            type: 'object',
            properties: {
                outlet_id: { type: 'string', description: 'Outlet ID (required)' },
                customer_id: { type: 'string', description: 'Customer ID' },
                description: { type: 'string', description: 'Service description' },
                status: { type: 'string', description: 'Service status' },
                scheduled_at: { type: 'string', description: 'Scheduled date/time (ISO 8601)' },
                assigned_user_id: { type: 'string', description: 'Assigned staff user ID' },
            },
            required: ['outlet_id'],
        },
    },
    {
        name: 'lightspeed_list_customer_services',
        description: 'List service orders for a specific customer',
        inputSchema: {
            type: 'object',
            properties: {
                customer_id: { type: 'string', description: 'The customer ID' },
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
            },
            required: ['customer_id'],
        },
    },
    {
        name: 'lightspeed_get_services_agenda',
        description: 'Get services agenda for an outlet',
        inputSchema: {
            type: 'object',
            properties: {
                outlet_id: { type: 'string', description: 'The outlet ID' },
                date: { type: 'string', description: 'Date to get agenda for (ISO 8601)' },
            },
            required: ['outlet_id'],
        },
    },
];
//# sourceMappingURL=services.js.map