import { getClient } from '../utils/api-client.js';
import type {
  SearchResult,
  PaginatedResponse,
} from '../types/lightspeed.js';

// Search Tools
// Note: Search API uses offset/page_size pagination, not cursor-based
// The search API requires specific attributes per resource type, not a generic query string

export async function search(params: {
  type: string;
  page_size?: number;
  after?: string;
  // Product search attributes
  sku?: string;
  supplier_id?: string;
  brand_id?: string;
  tag_id?: string;
  product_type_id?: string;
  variant_parent_id?: string;
  // Customer search attributes
  customer_code?: string;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  mobile?: string;
  phone?: string;
  email?: string;
  // Sale search attributes
  date_from?: string;
  date_to?: string;
  status?: string;
  state?: string;
  invoice_number?: string;
  customer_id?: string;
  user_id?: string;
  outlet_id?: string;
}): Promise<PaginatedResponse<SearchResult>> {
  const client = getClient();
  const searchParams: Record<string, string | number | boolean | undefined> = {
    page_size: params.page_size,
    after: params.after,
    type: params.type,
  };

  // Add type-specific search attributes
  // Product attributes
  if (params.sku) searchParams.sku = params.sku.toLowerCase();
  if (params.supplier_id) searchParams.supplier_id = params.supplier_id;
  if (params.brand_id) searchParams.brand_id = params.brand_id;
  if (params.tag_id) searchParams.tag_id = params.tag_id;
  if (params.product_type_id) searchParams.product_type_id = params.product_type_id;
  if (params.variant_parent_id) searchParams.variant_parent_id = params.variant_parent_id;

  // Customer attributes
  if (params.customer_code) searchParams.customer_code = params.customer_code;
  if (params.first_name) searchParams.first_name = params.first_name;
  if (params.last_name) searchParams.last_name = params.last_name;
  if (params.company_name) searchParams.company_name = params.company_name;
  if (params.mobile) searchParams.mobile = params.mobile;
  if (params.phone) searchParams.phone = params.phone;
  if (params.email) searchParams.email = params.email;

  // Sale attributes
  if (params.date_from) searchParams.date_from = params.date_from;
  if (params.date_to) searchParams.date_to = params.date_to;
  if (params.status) searchParams.status = params.status;
  if (params.state) searchParams.state = params.state;
  if (params.invoice_number) searchParams.invoice_number = params.invoice_number;
  if (params.customer_id) searchParams.customer_id = params.customer_id;
  if (params.user_id) searchParams.user_id = params.user_id;
  if (params.outlet_id) searchParams.outlet_id = params.outlet_id;

  return client.list<SearchResult>('/search', {
    version: '2.0',
    params: searchParams,
  });
}

// Tool definitions for MCP
export const searchToolDefinitions = [
  {
    name: 'lightspeed_search',
    description: 'Search for resources (products, customers, sales). Requires type and at least one type-specific search attribute.',
    inputSchema: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          description: 'Resource type to search: products, customers, or sales',
          enum: ['products', 'customers', 'sales'],
        },
        page_size: { type: 'number', description: 'Number of results per page (max 200)' },
        after: { type: 'string', description: 'Cursor for pagination' },
        // Product search attributes
        sku: { type: 'string', description: 'Product SKU to search (will be lowercased). For type=products' },
        supplier_id: { type: 'string', description: 'Filter by supplier ID. For type=products' },
        brand_id: { type: 'string', description: 'Filter by brand ID. For type=products' },
        tag_id: { type: 'string', description: 'Filter by tag ID. For type=products' },
        product_type_id: { type: 'string', description: 'Filter by product type ID. For type=products' },
        variant_parent_id: { type: 'string', description: 'Filter by variant parent ID. For type=products' },
        // Customer search attributes
        customer_code: { type: 'string', description: 'Customer code. For type=customers' },
        first_name: { type: 'string', description: 'Customer first name. For type=customers' },
        last_name: { type: 'string', description: 'Customer last name. For type=customers' },
        company_name: { type: 'string', description: 'Company name. For type=customers' },
        mobile: { type: 'string', description: 'Mobile number. For type=customers' },
        phone: { type: 'string', description: 'Phone number. For type=customers' },
        email: { type: 'string', description: 'Email address. For type=customers' },
        // Sale search attributes
        date_from: { type: 'string', description: 'Start date (ISO 8601). For type=sales' },
        date_to: { type: 'string', description: 'End date (ISO 8601). For type=sales' },
        status: { type: 'string', description: 'Sale status. For type=sales' },
        state: { type: 'string', description: 'Sale state. For type=sales' },
        invoice_number: { type: 'string', description: 'Invoice number. For type=sales' },
        customer_id: { type: 'string', description: 'Customer ID. For type=sales' },
        user_id: { type: 'string', description: 'User ID. For type=sales' },
        outlet_id: { type: 'string', description: 'Outlet ID. For type=sales' },
      },
      required: ['type'],
    },
  },
];
