import { getClient } from '../utils/api-client.js';
import type {
  Supplier,
  SupplierCreateInput,
  Brand,
  BrandCreateInput,
  Tag,
  TagCreateInput,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Supplier Tools

export async function listSuppliers(params: {
  page_size?: number;
  after?: string;
  since?: string;
}): Promise<PaginatedResponse<Supplier>> {
  const client = getClient();
  return client.list<Supplier>('/supplier', {
    version: '0.9',
    params: {
      page_size: params.page_size,
      after: params.after,
      since: params.since,
    },
  });
}

export async function getSupplier(supplierId: string): Promise<SingleResponse<Supplier>> {
  const client = getClient();
  return client.getOne<Supplier>(`/supplier/${supplierId}`, { version: '0.9' });
}

export async function createSupplier(data: SupplierCreateInput): Promise<SingleResponse<Supplier>> {
  const client = getClient();
  return client.post<SingleResponse<Supplier>>('/supplier', data, { version: '0.9' });
}

export async function updateSupplier(supplierId: string, data: Partial<SupplierCreateInput>): Promise<SingleResponse<Supplier>> {
  const client = getClient();
  return client.put<SingleResponse<Supplier>>(`/supplier/${supplierId}`, data, { version: '0.9' });
}

export async function deleteSupplier(supplierId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/supplier/${supplierId}`, { version: '0.9' });
}

// Brand Tools

export async function listBrands(params: {
  page_size?: number;
  after?: string;
  since?: string;
  deleted?: boolean;
}): Promise<PaginatedResponse<Brand>> {
  const client = getClient();
  return client.list<Brand>('/brands', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      since: params.since,
      deleted: params.deleted,
    },
  });
}

export async function getBrand(brandId: string): Promise<SingleResponse<Brand>> {
  const client = getClient();
  return client.getOne<Brand>(`/brands/${brandId}`, { version: '2.0' });
}

export async function createBrand(data: BrandCreateInput): Promise<SingleResponse<Brand>> {
  const client = getClient();
  return client.post<SingleResponse<Brand>>('/brands', data, { version: '2.0' });
}

export async function updateBrand(brandId: string, data: Partial<BrandCreateInput>): Promise<SingleResponse<Brand>> {
  const client = getClient();
  return client.put<SingleResponse<Brand>>(`/brands/${brandId}`, data, { version: '2.0' });
}

export async function deleteBrand(brandId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/brands/${brandId}`, { version: '2.0' });
}

// Tag Tools

export async function listTags(params: {
  page_size?: number;
  after?: string;
  since?: string;
  deleted?: boolean;
}): Promise<PaginatedResponse<Tag>> {
  const client = getClient();
  return client.list<Tag>('/tags', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      since: params.since,
      deleted: params.deleted,
    },
  });
}

export async function getTag(tagId: string): Promise<SingleResponse<Tag>> {
  const client = getClient();
  return client.getOne<Tag>(`/tags/${tagId}`, { version: '2.0' });
}

export async function createTag(data: TagCreateInput): Promise<SingleResponse<Tag>> {
  const client = getClient();
  return client.post<SingleResponse<Tag>>('/tags', data, { version: '2.0' });
}

export async function updateTag(tagId: string, data: Partial<TagCreateInput>): Promise<SingleResponse<Tag>> {
  const client = getClient();
  return client.put<SingleResponse<Tag>>(`/tags/${tagId}`, data, { version: '2.0' });
}

export async function deleteTag(tagId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/tags/${tagId}`, { version: '2.0' });
}

// Tool definitions for MCP
export const supplierToolDefinitions = [
  {
    name: 'lightspeed_list_suppliers',
    description: 'List all suppliers',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        since: { type: 'string', description: 'Filter by last updated date (ISO 8601)' },
      },
    },
  },
  {
    name: 'lightspeed_get_supplier',
    description: 'Get a single supplier by ID',
    inputSchema: {
      type: 'object',
      properties: {
        supplier_id: { type: 'string', description: 'The supplier ID' },
      },
      required: ['supplier_id'],
    },
  },
  {
    name: 'lightspeed_create_supplier',
    description: 'Create a new supplier',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Supplier name (required)' },
        description: { type: 'string', description: 'Supplier description' },
        first_name: { type: 'string', description: 'Contact first name' },
        last_name: { type: 'string', description: 'Contact last name' },
        company_name: { type: 'string', description: 'Company name' },
        email: { type: 'string', description: 'Email address' },
        phone: { type: 'string', description: 'Phone number' },
        mobile: { type: 'string', description: 'Mobile number' },
        website: { type: 'string', description: 'Website URL' },
        physical_address_1: { type: 'string', description: 'Address line 1' },
        physical_address_2: { type: 'string', description: 'Address line 2' },
        physical_city: { type: 'string', description: 'City' },
        physical_postcode: { type: 'string', description: 'Postal code' },
        physical_state: { type: 'string', description: 'State/Province' },
        physical_country_id: { type: 'string', description: 'Country ID' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_update_supplier',
    description: 'Update an existing supplier',
    inputSchema: {
      type: 'object',
      properties: {
        supplier_id: { type: 'string', description: 'The supplier ID' },
        name: { type: 'string', description: 'Supplier name' },
        description: { type: 'string', description: 'Supplier description' },
        email: { type: 'string', description: 'Email address' },
        phone: { type: 'string', description: 'Phone number' },
      },
      required: ['supplier_id'],
    },
  },
  {
    name: 'lightspeed_delete_supplier',
    description: 'Delete a supplier',
    inputSchema: {
      type: 'object',
      properties: {
        supplier_id: { type: 'string', description: 'The supplier ID to delete' },
      },
      required: ['supplier_id'],
    },
  },
  {
    name: 'lightspeed_list_brands',
    description: 'List all product brands',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        since: { type: 'string', description: 'Filter by last updated date (ISO 8601)' },
        deleted: { type: 'boolean', description: 'Include deleted brands' },
      },
    },
  },
  {
    name: 'lightspeed_get_brand',
    description: 'Get a single brand by ID',
    inputSchema: {
      type: 'object',
      properties: {
        brand_id: { type: 'string', description: 'The brand ID' },
      },
      required: ['brand_id'],
    },
  },
  {
    name: 'lightspeed_create_brand',
    description: 'Create a new brand',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Brand name (required)' },
        description: { type: 'string', description: 'Brand description' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_update_brand',
    description: 'Update an existing brand',
    inputSchema: {
      type: 'object',
      properties: {
        brand_id: { type: 'string', description: 'The brand ID' },
        name: { type: 'string', description: 'Brand name' },
        description: { type: 'string', description: 'Brand description' },
      },
      required: ['brand_id'],
    },
  },
  {
    name: 'lightspeed_delete_brand',
    description: 'Delete a brand',
    inputSchema: {
      type: 'object',
      properties: {
        brand_id: { type: 'string', description: 'The brand ID to delete' },
      },
      required: ['brand_id'],
    },
  },
  {
    name: 'lightspeed_list_tags',
    description: 'List all product tags',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        since: { type: 'string', description: 'Filter by last updated date (ISO 8601)' },
        deleted: { type: 'boolean', description: 'Include deleted tags' },
      },
    },
  },
  {
    name: 'lightspeed_get_tag',
    description: 'Get a single tag by ID',
    inputSchema: {
      type: 'object',
      properties: {
        tag_id: { type: 'string', description: 'The tag ID' },
      },
      required: ['tag_id'],
    },
  },
  {
    name: 'lightspeed_create_tag',
    description: 'Create a new tag',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Tag name (required)' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_update_tag',
    description: 'Update an existing tag',
    inputSchema: {
      type: 'object',
      properties: {
        tag_id: { type: 'string', description: 'The tag ID' },
        name: { type: 'string', description: 'Tag name' },
      },
      required: ['tag_id'],
    },
  },
  {
    name: 'lightspeed_delete_tag',
    description: 'Delete a tag',
    inputSchema: {
      type: 'object',
      properties: {
        tag_id: { type: 'string', description: 'The tag ID to delete' },
      },
      required: ['tag_id'],
    },
  },
];
