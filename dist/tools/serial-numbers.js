import { getClient } from '../utils/api-client.js';
// Serial Number Tools (API 2.0-beta)
export async function listSerialNumbers(params) {
    const client = getClient();
    return client.list('/serialnumbers', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
            product_id: params.product_id,
            status: params.status,
        },
    });
}
export async function getSerialNumber(serialNumberId) {
    const client = getClient();
    return client.getOne(`/serial-numbers/${serialNumberId}`, { version: '2.0' });
}
export async function createSerialNumber(data) {
    const client = getClient();
    return client.post('/serialnumbers', data, { version: '2.0' });
}
export async function deleteSerialNumber(serialNumberId) {
    const client = getClient();
    await client.delete(`/serial-numbers/${serialNumberId}`, { version: '2.0' });
}
// Tool definitions for MCP
export const serialNumberToolDefinitions = [
    {
        name: 'lightspeed_list_serial_numbers',
        description: 'List serial numbers with optional filtering',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
                product_id: { type: 'string', description: 'Filter by product ID' },
                status: { type: 'string', description: 'Filter by status (AVAILABLE, SOLD, RETURNED)' },
            },
        },
    },
    {
        name: 'lightspeed_get_serial_number',
        description: 'Get a single serial number by ID',
        inputSchema: {
            type: 'object',
            properties: {
                serial_number_id: { type: 'string', description: 'The serial number ID' },
            },
            required: ['serial_number_id'],
        },
    },
    {
        name: 'lightspeed_create_serial_number',
        description: 'Create a new serial number',
        inputSchema: {
            type: 'object',
            properties: {
                product_id: { type: 'string', description: 'Product ID (required)' },
                serial: { type: 'string', description: 'Serial number value (required)' },
            },
            required: ['product_id', 'serial'],
        },
    },
    {
        name: 'lightspeed_delete_serial_number',
        description: 'Delete a serial number by ID',
        inputSchema: {
            type: 'object',
            properties: {
                serial_number_id: { type: 'string', description: 'The serial number ID to delete' },
            },
            required: ['serial_number_id'],
        },
    },
];
//# sourceMappingURL=serial-numbers.js.map