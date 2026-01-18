import { getClient } from '../utils/api-client.js';
// Webhook Tools (API 0.9)
export async function listWebhooks() {
    const client = getClient();
    return client.list('/webhooks', { version: '0.9' });
}
export async function getWebhook(webhookId) {
    const client = getClient();
    return client.getOne(`/webhooks/${webhookId}`, { version: '0.9' });
}
export async function createWebhook(data) {
    const client = getClient();
    return client.post('/webhooks', data, { version: '0.9' });
}
export async function updateWebhook(webhookId, data) {
    const client = getClient();
    return client.put(`/webhooks/${webhookId}`, data, { version: '0.9' });
}
export async function deleteWebhook(webhookId) {
    const client = getClient();
    await client.delete(`/webhooks/${webhookId}`, { version: '0.9' });
}
// Webhook Tools (API 2.0 BETA)
export async function listWebhooks2(params) {
    const client = getClient();
    return client.list('/webhooks', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
export async function createWebhook2(data) {
    const client = getClient();
    return client.post('/webhooks', data, { version: '2.0' });
}
// Webhook event types
export const WEBHOOK_TYPES = [
    'customer.update',
    'customer.delete',
    'product.update',
    'product.delete',
    'sale.update',
    'sale.delete',
    'inventory.update',
    'consignment.update',
    'consignment.delete',
    'brand.update',
    'brand.delete',
    'supplier.update',
    'supplier.delete',
    'outlet.update',
    'register.update',
    'user.update',
    'tag.update',
    'tag.delete',
    'price_book.update',
    'price_book.delete',
    'customer_group.update',
    'customer_group.delete',
];
// Tool definitions for MCP
export const webhookToolDefinitions = [
    {
        name: 'lightspeed_list_webhooks',
        description: 'List all registered webhooks',
        inputSchema: {
            type: 'object',
            properties: {},
        },
    },
    {
        name: 'lightspeed_get_webhook',
        description: 'Get a single webhook by ID',
        inputSchema: {
            type: 'object',
            properties: {
                webhook_id: { type: 'string', description: 'The webhook ID' },
            },
            required: ['webhook_id'],
        },
    },
    {
        name: 'lightspeed_create_webhook',
        description: 'Create a new webhook subscription',
        inputSchema: {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    description: 'Event type to subscribe to (e.g., customer.update, product.update, sale.update, inventory.update)',
                    enum: WEBHOOK_TYPES,
                },
                url: { type: 'string', description: 'Callback URL to receive webhook events' },
                active: { type: 'boolean', description: 'Whether the webhook is active (default: true)' },
            },
            required: ['type', 'url'],
        },
    },
    {
        name: 'lightspeed_update_webhook',
        description: 'Update a webhook configuration',
        inputSchema: {
            type: 'object',
            properties: {
                webhook_id: { type: 'string', description: 'The webhook ID' },
                url: { type: 'string', description: 'New callback URL' },
                active: { type: 'boolean', description: 'Whether the webhook is active' },
            },
            required: ['webhook_id'],
        },
    },
    {
        name: 'lightspeed_delete_webhook',
        description: 'Delete a webhook subscription',
        inputSchema: {
            type: 'object',
            properties: {
                webhook_id: { type: 'string', description: 'The webhook ID to delete' },
            },
            required: ['webhook_id'],
        },
    },
];
//# sourceMappingURL=webhooks.js.map