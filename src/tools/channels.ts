import { getClient } from '../utils/api-client.js';
import type {
  Channel,
  RequestLog,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Channel Tools

export async function listChannels(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<Channel>> {
  const client = getClient();
  return client.list<Channel>('/channels', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

// Request Log Tools

export async function listRequestLogs(params: {
  page_size?: number;
  after?: string;
  channel_id?: string;
}): Promise<PaginatedResponse<RequestLog>> {
  const client = getClient();
  return client.list<RequestLog>('/channel_requests', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      channel_id: params.channel_id,
    },
  });
}

export async function getRequestLog(requestId: string): Promise<SingleResponse<RequestLog>> {
  const client = getClient();
  return client.getOne<RequestLog>(`/requests/${requestId}`, { version: '2.0' });
}

export async function getRequestLogText(requestId: string): Promise<{ text: string }> {
  const client = getClient();
  return client.get<{ text: string }>(`/requests/${requestId}/text`, { version: '2.0' });
}

// Tool definitions for MCP
export const channelToolDefinitions = [
  {
    name: 'lightspeed_list_channels',
    description: 'List all integration channels',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_list_request_logs',
    description: 'List API request logs',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        channel_id: { type: 'string', description: 'Filter by channel ID' },
      },
    },
  },
  {
    name: 'lightspeed_get_request_log',
    description: 'Get a single request log by ID',
    inputSchema: {
      type: 'object',
      properties: {
        request_id: { type: 'string', description: 'The request log ID' },
      },
      required: ['request_id'],
    },
  },
  {
    name: 'lightspeed_get_request_log_text',
    description: 'Get request log as text',
    inputSchema: {
      type: 'object',
      properties: {
        request_id: { type: 'string', description: 'The request log ID' },
      },
      required: ['request_id'],
    },
  },
];
