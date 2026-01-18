import { getClient } from '../utils/api-client.js';
import type {
  ServiceOrder,
  ServiceOrderCreateInput,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Service Order Tools

export async function listServices(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<ServiceOrder>> {
  const client = getClient();
  return client.list<ServiceOrder>('/services', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getService(serviceId: string): Promise<SingleResponse<ServiceOrder>> {
  const client = getClient();
  return client.getOne<ServiceOrder>(`/services/${serviceId}`, { version: '2.0' });
}

export async function createService(data: ServiceOrderCreateInput): Promise<SingleResponse<ServiceOrder>> {
  const client = getClient();
  return client.post<SingleResponse<ServiceOrder>>('/services', data, { version: '2.0' });
}

export async function listCustomerServices(customerId: string, params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<ServiceOrder>> {
  const client = getClient();
  return client.list<ServiceOrder>(`/services/customer/${customerId}`, {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getServicesAgenda(outletId: string, params: {
  date?: string;
}): Promise<PaginatedResponse<ServiceOrder>> {
  const client = getClient();
  return client.list<ServiceOrder>(`/services/agenda/${outletId}`, {
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
