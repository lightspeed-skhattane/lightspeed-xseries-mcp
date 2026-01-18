import { getClient } from '../utils/api-client.js';
import type {
  Webhook,
  WebhookCreateInput,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Webhook Tools (API 0.9)

export async function listWebhooks(): Promise<PaginatedResponse<Webhook>> {
  const client = getClient();
  return client.list<Webhook>('/webhooks', { version: '0.9' });
}

export async function getWebhook(webhookId: string): Promise<SingleResponse<Webhook>> {
  const client = getClient();
  return client.getOne<Webhook>(`/webhooks/${webhookId}`, { version: '0.9' });
}

export async function createWebhook(data: WebhookCreateInput): Promise<SingleResponse<Webhook>> {
  const client = getClient();
  return client.post<SingleResponse<Webhook>>('/webhooks', data, { version: '0.9' });
}

export async function updateWebhook(webhookId: string, data: Partial<WebhookCreateInput>): Promise<SingleResponse<Webhook>> {
  const client = getClient();
  return client.put<SingleResponse<Webhook>>(`/webhooks/${webhookId}`, data, { version: '0.9' });
}

export async function deleteWebhook(webhookId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/webhooks/${webhookId}`, { version: '0.9' });
}

// Webhook Tools (API 2.0 BETA)

export async function listWebhooks2(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<Webhook>> {
  const client = getClient();
  return client.list<Webhook>('/webhooks', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function createWebhook2(data: {
  type: string;
  url: string;
  active?: boolean;
  headers?: Record<string, string>;
}): Promise<SingleResponse<Webhook>> {
  const client = getClient();
  return client.post<SingleResponse<Webhook>>('/webhooks', data, { version: '2.0' });
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
] as const;

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
