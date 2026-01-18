import { getClient } from '../utils/api-client.js';
import type {
  CustomField,
  CustomFieldCreateInput,
  CustomFieldValue,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Custom Field Tools (API 2.0)

export async function listCustomFields(params: {
  page_size?: number;
  after?: string;
  entity_type: string;
}): Promise<PaginatedResponse<CustomField>> {
  const client = getClient();
  return client.list<CustomField>('/workflows/custom_fields', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      entity: params.entity_type, // API expects 'entity', tool uses 'entity_type'
    },
  });
}

export async function createCustomField(data: CustomFieldCreateInput): Promise<SingleResponse<CustomField>> {
  const client = getClient();
  return client.post<SingleResponse<CustomField>>('/workflows/custom_fields', data, { version: '2.0-beta' });
}

export async function updateCustomField(fieldId: string, data: Partial<CustomFieldCreateInput>): Promise<SingleResponse<CustomField>> {
  const client = getClient();
  return client.put<SingleResponse<CustomField>>(`/workflows/custom_fields/${fieldId}`, data, { version: '2.0-beta' });
}

export async function deleteCustomField(fieldId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/workflows/custom_fields/${fieldId}`, { version: '2.0-beta' });
}

// Custom Field Values

export async function listCustomFieldValues(params: {
  page_size?: number;
  after?: string;
  entity_type?: string;
  entity_id?: string;
  custom_field_id?: string;
}): Promise<PaginatedResponse<CustomFieldValue>> {
  const client = getClient();
  return client.list<CustomFieldValue>('/workflows/custom_field_values', {
    version: '2.0-beta',
    params: {
      page_size: params.page_size,
      after: params.after,
      entity_type: params.entity_type,
      entity_id: params.entity_id,
      custom_field_id: params.custom_field_id,
    },
  });
}

export async function setCustomFieldValues(data: {
  entity_type: string;
  entity_id: string;
  values: { custom_field_id: string; value: string }[];
}): Promise<void> {
  const client = getClient();
  await client.post('/workflows/custom_field_values', data, { version: '2.0-beta' });
}

// Tool definitions for MCP
export const customFieldToolDefinitions = [
  {
    name: 'lightspeed_list_custom_fields',
    description: 'List custom field definitions',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        entity_type: { type: 'string', description: 'Entity type (line_item, sale, customer, etc.) - required' },
      },
      required: ['entity_type'],
    },
  },
  {
    name: 'lightspeed_create_custom_field',
    description: 'Create a new custom field definition (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Field name' },
        entity_type: { type: 'string', description: 'Entity type (product, customer, sale)' },
        field_type: { type: 'string', description: 'Field type (TEXT, NUMBER, DATE, BOOLEAN, SELECT)' },
        options: { type: 'array', items: { type: 'string' }, description: 'Options for SELECT field type' },
        required: { type: 'boolean', description: 'Whether the field is required' },
      },
      required: ['name', 'entity_type', 'field_type'],
    },
  },
  {
    name: 'lightspeed_update_custom_field',
    description: 'Update a custom field definition (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        field_id: { type: 'string', description: 'The custom field ID' },
        name: { type: 'string', description: 'Field name' },
        options: { type: 'array', items: { type: 'string' }, description: 'Options for SELECT field type' },
        required: { type: 'boolean', description: 'Whether the field is required' },
      },
      required: ['field_id'],
    },
  },
  {
    name: 'lightspeed_delete_custom_field',
    description: 'Delete a custom field definition (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        field_id: { type: 'string', description: 'The custom field ID to delete' },
      },
      required: ['field_id'],
    },
  },
  {
    name: 'lightspeed_list_custom_field_values',
    description: 'List custom field values (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        entity_type: { type: 'string', description: 'Filter by entity type' },
        entity_id: { type: 'string', description: 'Filter by entity ID' },
        custom_field_id: { type: 'string', description: 'Filter by custom field ID' },
      },
    },
  },
  {
    name: 'lightspeed_set_custom_field_values',
    description: 'Set custom field values for an entity (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        entity_type: { type: 'string', description: 'Entity type (product, customer, sale)' },
        entity_id: { type: 'string', description: 'Entity ID' },
        values: {
          type: 'array',
          description: 'Array of field values',
          items: {
            type: 'object',
            properties: {
              custom_field_id: { type: 'string', description: 'Custom field ID' },
              value: { type: 'string', description: 'Field value' },
            },
            required: ['custom_field_id', 'value'],
          },
        },
      },
      required: ['entity_type', 'entity_id', 'values'],
    },
  },
];
