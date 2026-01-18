import { getClient } from '../utils/api-client.js';
import type {
  SecurityEvent,
  AuditLog,
  PaginatedResponse,
} from '../types/lightspeed.js';

// Security Event Tools

export async function listSecurityEvents(params: {
  page_size?: number;
  after?: string;
  user_id?: string;
  event_type?: string;
  since?: string;
}): Promise<PaginatedResponse<SecurityEvent>> {
  const client = getClient();
  return client.list<SecurityEvent>('/security_events', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      user_id: params.user_id,
      event_type: params.event_type,
      since: params.since,
    },
  });
}

// Audit Log Tools (requires audit:read scope)

export async function listAuditLogs(params: {
  page_size?: number;
  after?: string;
  user_id?: string;
  entity_type?: string;
  entity_id?: string;
  action?: string;
  since?: string;
}): Promise<PaginatedResponse<AuditLog>> {
  const client = getClient();
  return client.list<AuditLog>('/auditlog_events', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      user_id: params.user_id,
      entity_type: params.entity_type,
      entity_id: params.entity_id,
      action: params.action,
      since: params.since,
    },
  });
}

// Tool definitions for MCP
export const securityToolDefinitions = [
  {
    name: 'lightspeed_list_security_events',
    description: 'List security events (login attempts, permission changes, etc.)',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        user_id: { type: 'string', description: 'Filter by user ID' },
        event_type: { type: 'string', description: 'Filter by event type' },
        since: { type: 'string', description: 'Filter by date (ISO 8601)' },
      },
    },
  },
  {
    name: 'lightspeed_list_audit_logs',
    description: 'List audit log events (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        user_id: { type: 'string', description: 'Filter by user ID' },
        entity_type: { type: 'string', description: 'Filter by entity type (product, customer, sale, etc.)' },
        entity_id: { type: 'string', description: 'Filter by entity ID' },
        action: { type: 'string', description: 'Filter by action (create, update, delete)' },
        since: { type: 'string', description: 'Filter by date (ISO 8601)' },
      },
    },
  },
];
