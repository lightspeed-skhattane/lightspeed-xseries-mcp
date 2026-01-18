import { getClient } from '../utils/api-client.js';
import type {
  PartnerSubscription,
  SubscriptionToken,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Partner Billing/Subscription Tools (requires partner account)

export async function listPartnerSubscriptions(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<PartnerSubscription>> {
  const client = getClient();
  return client.list<PartnerSubscription>('/partner/billing/subscriptions', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getPartnerSubscription(subscriptionId: string): Promise<SingleResponse<PartnerSubscription>> {
  const client = getClient();
  return client.getOne<PartnerSubscription>(`/partner/billing/subscriptions/${subscriptionId}`, { version: '2.0' });
}

export async function createSubscriptionToken(data: {
  retailer_id: string;
}): Promise<SingleResponse<SubscriptionToken>> {
  const client = getClient();
  return client.post<SingleResponse<SubscriptionToken>>('/partner/billing/token', data, { version: '2.0' });
}

export async function getSubscriptionByToken(token: string): Promise<SingleResponse<PartnerSubscription>> {
  const client = getClient();
  return client.getOne<PartnerSubscription>(`/partner/billing/token/${token}`, { version: '2.0' });
}

export async function createUpdateSubscriptionToken(data: {
  subscription_id: string;
}): Promise<SingleResponse<SubscriptionToken>> {
  const client = getClient();
  return client.post<SingleResponse<SubscriptionToken>>('/partner/billing/token/update', data, { version: '2.0' });
}

// Tool definitions for MCP
export const partnerToolDefinitions = [
  {
    name: 'lightspeed_list_partner_subscriptions',
    description: 'List partner subscriptions (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_get_partner_subscription',
    description: 'Get a partner subscription by ID (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        subscription_id: { type: 'string', description: 'The subscription ID' },
      },
      required: ['subscription_id'],
    },
  },
  {
    name: 'lightspeed_create_subscription_token',
    description: 'Create a subscription token for a retailer (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        retailer_id: { type: 'string', description: 'The retailer ID' },
      },
      required: ['retailer_id'],
    },
  },
  {
    name: 'lightspeed_get_subscription_by_token',
    description: 'Get subscription details by token (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        token: { type: 'string', description: 'The subscription token' },
      },
      required: ['token'],
    },
  },
  {
    name: 'lightspeed_create_update_subscription_token',
    description: 'Create a token to update an existing subscription (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        subscription_id: { type: 'string', description: 'The subscription ID to update' },
      },
      required: ['subscription_id'],
    },
  },
];
