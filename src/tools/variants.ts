import { getClient } from '../utils/api-client.js';
import type {
  VariantAttribute,
  VariantAttributeCreateInput,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Variant Attribute Tools

export async function listVariantAttributes(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<VariantAttribute>> {
  const client = getClient();
  return client.list<VariantAttribute>('/variant_attributes', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getVariantAttribute(attributeId: string): Promise<SingleResponse<VariantAttribute>> {
  const client = getClient();
  return client.getOne<VariantAttribute>(`/variant_attributes/${attributeId}`, { version: '2.0' });
}

export async function createVariantAttribute(data: VariantAttributeCreateInput): Promise<SingleResponse<VariantAttribute>> {
  const client = getClient();
  return client.post<SingleResponse<VariantAttribute>>('/variant_attributes', data, { version: '2.0' });
}

export async function updateVariantAttribute(attributeId: string, data: Partial<VariantAttributeCreateInput>): Promise<SingleResponse<VariantAttribute>> {
  const client = getClient();
  return client.put<SingleResponse<VariantAttribute>>(`/variant_attributes/${attributeId}`, data, { version: '2.0' });
}

export async function deleteVariantAttribute(attributeId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/variant_attributes/${attributeId}`, { version: '2.0' });
}

// Add variant to product
export async function addProductVariant(productId: string, data: {
  variant_option_one_value?: string;
  variant_option_two_value?: string;
  variant_option_three_value?: string;
  sku?: string;
  supply_price?: number;
  price?: number;
}): Promise<SingleResponse<unknown>> {
  const client = getClient();
  return client.post<SingleResponse<unknown>>(`/products/${productId}/variants`, data, { version: '2.1' });
}

// Tool definitions for MCP
export const variantToolDefinitions = [
  {
    name: 'lightspeed_list_variant_attributes',
    description: 'List all variant attributes',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_get_variant_attribute',
    description: 'Get a single variant attribute by ID',
    inputSchema: {
      type: 'object',
      properties: {
        attribute_id: { type: 'string', description: 'The variant attribute ID' },
      },
      required: ['attribute_id'],
    },
  },
  {
    name: 'lightspeed_create_variant_attribute',
    description: 'Create a new variant attribute',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Variant attribute name (e.g., Size, Color)' },
        values: { type: 'array', items: { type: 'string' }, description: 'Array of possible values' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_update_variant_attribute',
    description: 'Update an existing variant attribute',
    inputSchema: {
      type: 'object',
      properties: {
        attribute_id: { type: 'string', description: 'The variant attribute ID to update' },
        name: { type: 'string', description: 'Variant attribute name' },
        values: { type: 'array', items: { type: 'string' }, description: 'Array of possible values' },
      },
      required: ['attribute_id'],
    },
  },
  {
    name: 'lightspeed_delete_variant_attribute',
    description: 'Delete a variant attribute by ID',
    inputSchema: {
      type: 'object',
      properties: {
        attribute_id: { type: 'string', description: 'The variant attribute ID to delete' },
      },
      required: ['attribute_id'],
    },
  },
  {
    name: 'lightspeed_add_product_variant',
    description: 'Add a new variant to an existing product',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
        variant_option_one_value: { type: 'string', description: 'First variant option value' },
        variant_option_two_value: { type: 'string', description: 'Second variant option value' },
        variant_option_three_value: { type: 'string', description: 'Third variant option value' },
        sku: { type: 'string', description: 'SKU for the variant' },
        supply_price: { type: 'number', description: 'Supply/cost price' },
        price: { type: 'number', description: 'Retail price' },
      },
      required: ['product_id'],
    },
  },
];
