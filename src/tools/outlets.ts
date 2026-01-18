import { getClient } from '../utils/api-client.js';
import type {
  Outlet,
  Register,
  Shift,
  Retailer,
  Tax,
  TaxCreateInput,
  User,
  UserSalesTotals,
  RegisterPaymentsSummary,
  ButtonLayout,
  OutletProductTax,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Outlet Tools

export async function listOutlets(): Promise<PaginatedResponse<Outlet>> {
  const client = getClient();
  return client.list<Outlet>('/outlets', { version: '0.9' });
}

export async function getOutlet(outletId: string): Promise<SingleResponse<Outlet>> {
  const client = getClient();
  return client.getOne<Outlet>(`/outlets/${outletId}`, { version: '2.0' });
}

// Register Tools

export async function listRegisters(params: {
  outlet_id?: string;
}): Promise<PaginatedResponse<Register>> {
  const client = getClient();
  return client.list<Register>('/registers', {
    version: '0.9',
    params: { outlet_id: params.outlet_id },
  });
}

export async function getRegister(registerId: string): Promise<SingleResponse<Register>> {
  const client = getClient();
  return client.getOne<Register>(`/registers/${registerId}`, { version: '2.0' });
}

// Shift Tools

export async function listShifts(params: {
  page_size?: number;
  after?: string;
  outlet_id?: string;
  register_id?: string;
  user_id?: string;
  status?: string;
  since?: string;
}): Promise<PaginatedResponse<Shift>> {
  const client = getClient();
  return client.list<Shift>('/shifts', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      outlet_id: params.outlet_id,
      register_id: params.register_id,
      user_id: params.user_id,
      status: params.status,
      since: params.since,
    },
  });
}

export async function getShift(shiftId: string): Promise<SingleResponse<Shift>> {
  const client = getClient();
  return client.getOne<Shift>(`/shifts/${shiftId}`, { version: '2.0' });
}

// Tax Tools

export async function listTaxes(): Promise<PaginatedResponse<Tax>> {
  const client = getClient();
  return client.list<Tax>('/taxes', { version: '0.9' });
}

export async function getTax(taxId: string): Promise<SingleResponse<Tax>> {
  const client = getClient();
  return client.getOne<Tax>(`/taxes/${taxId}`, { version: '0.9' });
}

export async function createTax(data: TaxCreateInput): Promise<SingleResponse<Tax>> {
  const client = getClient();
  return client.post<SingleResponse<Tax>>('/taxes', data, { version: '0.9' });
}

export async function updateTax(taxId: string, data: Partial<TaxCreateInput>): Promise<SingleResponse<Tax>> {
  const client = getClient();
  return client.put<SingleResponse<Tax>>(`/taxes/${taxId}`, data, { version: '0.9' });
}

export async function deleteTax(taxId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/taxes/${taxId}`, { version: '0.9' });
}

// User Tools

export async function listUsers(): Promise<PaginatedResponse<User>> {
  const client = getClient();
  return client.list<User>('/users', { version: '0.9' });
}

export async function getUser(userId: string): Promise<SingleResponse<User>> {
  const client = getClient();
  return client.getOne<User>(`/users/${userId}`, { version: '2.0' });
}

export async function getCurrentUser(): Promise<SingleResponse<User>> {
  const client = getClient();
  return client.getOne<User>('/users/me', { version: '2.0' });
}

export async function bulkGetUsers(userIds: string[]): Promise<PaginatedResponse<User>> {
  const client = getClient();
  return client.post<PaginatedResponse<User>>('/users/bulk', { user_ids: userIds }, { version: '2.0' });
}

export async function getUserSalesTotals(userId: string): Promise<SingleResponse<UserSalesTotals>> {
  const client = getClient();
  return client.getOne<UserSalesTotals>(`/users/${userId}/sales_totals`, { version: '2.0' });
}

export async function deleteUser(userId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/users/${userId}`, { version: '2.0' });
}

export async function deleteUserSessions(userId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/users/${userId}/sessions`, { version: '2.0' });
}

export async function updateUser(userId: string, data: {
  username?: string;
  display_name?: string;
  email?: string;
  role?: string;
  outlet_ids?: string[];
}): Promise<SingleResponse<User>> {
  const client = getClient();
  return client.put<SingleResponse<User>>(`/users/${userId}`, data, { version: '2.0' });
}

export async function createUser(data: {
  username: string;
  display_name: string;
  email: string;
  password?: string;
  role?: string;
  outlet_ids?: string[];
}): Promise<SingleResponse<User>> {
  const client = getClient();
  return client.post<SingleResponse<User>>('/users', data, { version: '2.0' });
}

// Register Extended Tools

export async function openRegister(registerId: string, data: { opening_float?: number }): Promise<SingleResponse<Register>> {
  const client = getClient();
  return client.put<SingleResponse<Register>>(`/registers/${registerId}/open`, data, { version: '2.0' });
}

export async function closeRegister(registerId: string, data: { closing_float?: number }): Promise<SingleResponse<Register>> {
  const client = getClient();
  return client.put<SingleResponse<Register>>(`/registers/${registerId}/close`, data, { version: '2.0' });
}

export async function getRegisterPaymentsSummary(registerId: string): Promise<SingleResponse<RegisterPaymentsSummary>> {
  const client = getClient();
  return client.getOne<RegisterPaymentsSummary>(`/registers/${registerId}/payments`, { version: '2.0' });
}

// Button Layout Tools

export async function listButtonLayouts(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<ButtonLayout>> {
  const client = getClient();
  return client.list<ButtonLayout>('/button_layouts', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getButtonLayout(layoutId: string): Promise<SingleResponse<ButtonLayout>> {
  const client = getClient();
  return client.getOne<ButtonLayout>(`/button_layouts/${layoutId}`, { version: '2.0' });
}

// Outlet Product Tax Tools

export async function listOutletProductTaxes(params: {
  page_size?: number;
  after?: string;
  outlet_id?: string;
  product_id?: string;
}): Promise<PaginatedResponse<OutletProductTax>> {
  const client = getClient();
  return client.list<OutletProductTax>('/outlet_product_taxes', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      outlet_id: params.outlet_id,
      product_id: params.product_id,
    },
  });
}

// Retailer Tools

export async function getRetailer(): Promise<SingleResponse<Retailer>> {
  const client = getClient();
  return client.getOne<Retailer>('/retailer', { version: '2.0' });
}

// Config endpoint (includes loyalty settings)
export async function getConfig(): Promise<SingleResponse<unknown>> {
  const client = getClient();
  return client.getOne<unknown>('/config', { version: '0.9' });
}

// Inventory count endpoints (uses Consignments API with type: STOCKTAKE)
// See: https://x-series-api.lightspeedhq.com/docs/inventory_creating_inventory_counts

export async function createInventoryCount(outletId: string, data: {
  name?: string;
  due_at?: string;
}): Promise<SingleResponse<unknown>> {
  const client = getClient();
  return client.post<SingleResponse<unknown>>('/consignments', {
    outlet_id: outletId,
    type: 'STOCKTAKE',
    name: data.name,
    due_at: data.due_at,
  }, { version: '2.0' });
}

export async function getInventoryCount(outletId: string, countId: string): Promise<SingleResponse<unknown>> {
  const client = getClient();
  // countId is actually a consignment ID
  return client.getOne<unknown>(`/consignments/${countId}`, { version: '2.0' });
}

export async function listInventoryCounts(outletId: string, params: {
  page_size?: number;
  after?: string;
  status?: string;
}): Promise<PaginatedResponse<unknown>> {
  const client = getClient();
  // List consignments filtered by outlet and type STOCKTAKE
  return client.list<unknown>('/consignments', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      status: params.status,
      outlet_id: outletId,
      type: 'STOCKTAKE',
    },
  });
}

export async function updateInventoryCount(outletId: string, countId: string, data: {
  status?: string;
  name?: string;
}): Promise<SingleResponse<unknown>> {
  const client = getClient();
  return client.put<SingleResponse<unknown>>(`/consignments/${countId}`, data, { version: '2.0' });
}

export async function deleteInventoryCount(outletId: string, countId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/consignments/${countId}`, { version: '2.0' });
}

export async function listInventoryCountItems(outletId: string, countId: string, params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<unknown>> {
  const client = getClient();
  // List products in the consignment (inventory count)
  return client.list<unknown>(`/consignments/${countId}/products`, {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function updateInventoryCountItem(outletId: string, countId: string, productId: string, data: {
  counted?: number;
}): Promise<SingleResponse<unknown>> {
  const client = getClient();
  // Update product count in the consignment
  return client.post<SingleResponse<unknown>>(`/consignments/${countId}/products`, {
    product_id: productId,
    count: data.counted,
  }, { version: '2.0' });
}

// Tool definitions for MCP
export const outletToolDefinitions = [
  {
    name: 'lightspeed_list_outlets',
    description: 'List all outlets/store locations',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'lightspeed_get_outlet',
    description: 'Get a single outlet by ID',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
      },
      required: ['outlet_id'],
    },
  },
  {
    name: 'lightspeed_list_registers',
    description: 'List all registers/POS terminals',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'Filter by outlet ID' },
      },
    },
  },
  {
    name: 'lightspeed_get_register',
    description: 'Get a single register by ID',
    inputSchema: {
      type: 'object',
      properties: {
        register_id: { type: 'string', description: 'The register ID' },
      },
      required: ['register_id'],
    },
  },
  {
    name: 'lightspeed_list_shifts',
    description: 'List register shifts/closures',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        outlet_id: { type: 'string', description: 'Filter by outlet ID' },
        register_id: { type: 'string', description: 'Filter by register ID' },
        user_id: { type: 'string', description: 'Filter by user ID' },
        status: { type: 'string', description: 'Filter by status (OPEN, CLOSED)' },
        since: { type: 'string', description: 'Filter by date (ISO 8601)' },
      },
    },
  },
  {
    name: 'lightspeed_get_shift',
    description: 'Get a single shift/register closure by ID',
    inputSchema: {
      type: 'object',
      properties: {
        shift_id: { type: 'string', description: 'The shift ID' },
      },
      required: ['shift_id'],
    },
  },
  {
    name: 'lightspeed_list_taxes',
    description: 'List all tax rates',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'lightspeed_get_tax',
    description: 'Get a single tax rate by ID',
    inputSchema: {
      type: 'object',
      properties: {
        tax_id: { type: 'string', description: 'The tax ID' },
      },
      required: ['tax_id'],
    },
  },
  {
    name: 'lightspeed_create_tax',
    description: 'Create a new tax rate',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Tax name' },
        rate: { type: 'number', description: 'Tax rate as decimal (e.g., 0.20 for 20%)' },
      },
      required: ['name', 'rate'],
    },
  },
  {
    name: 'lightspeed_update_tax',
    description: 'Update an existing tax rate',
    inputSchema: {
      type: 'object',
      properties: {
        tax_id: { type: 'string', description: 'The tax ID to update' },
        name: { type: 'string', description: 'Tax name' },
        rate: { type: 'number', description: 'Tax rate as decimal (e.g., 0.20 for 20%)' },
      },
      required: ['tax_id'],
    },
  },
  {
    name: 'lightspeed_delete_tax',
    description: 'Delete a tax rate',
    inputSchema: {
      type: 'object',
      properties: {
        tax_id: { type: 'string', description: 'The tax ID to delete' },
      },
      required: ['tax_id'],
    },
  },
  {
    name: 'lightspeed_list_users',
    description: 'List all users/staff members',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'lightspeed_get_user',
    description: 'Get a single user by ID',
    inputSchema: {
      type: 'object',
      properties: {
        user_id: { type: 'string', description: 'The user ID' },
      },
      required: ['user_id'],
    },
  },
  {
    name: 'lightspeed_get_retailer',
    description: 'Get retailer/store information',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'lightspeed_get_current_user',
    description: 'Get the current authenticated user',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'lightspeed_bulk_get_users',
    description: 'Get multiple users by their IDs',
    inputSchema: {
      type: 'object',
      properties: {
        user_ids: { type: 'array', items: { type: 'string' }, description: 'Array of user IDs' },
      },
      required: ['user_ids'],
    },
  },
  {
    name: 'lightspeed_get_user_sales_totals',
    description: 'Get sales totals for a specific user',
    inputSchema: {
      type: 'object',
      properties: {
        user_id: { type: 'string', description: 'The user ID' },
      },
      required: ['user_id'],
    },
  },
  {
    name: 'lightspeed_delete_user',
    description: 'Delete a user by ID',
    inputSchema: {
      type: 'object',
      properties: {
        user_id: { type: 'string', description: 'The user ID to delete' },
      },
      required: ['user_id'],
    },
  },
  {
    name: 'lightspeed_delete_user_sessions',
    description: 'Delete all sessions for a user (force logout)',
    inputSchema: {
      type: 'object',
      properties: {
        user_id: { type: 'string', description: 'The user ID' },
      },
      required: ['user_id'],
    },
  },
  {
    name: 'lightspeed_update_user',
    description: 'Update an existing user',
    inputSchema: {
      type: 'object',
      properties: {
        user_id: { type: 'string', description: 'The user ID to update' },
        username: { type: 'string', description: 'Username' },
        display_name: { type: 'string', description: 'Display name' },
        email: { type: 'string', description: 'Email address' },
        role: { type: 'string', description: 'User role' },
        outlet_ids: { type: 'array', items: { type: 'string' }, description: 'Array of outlet IDs' },
      },
      required: ['user_id'],
    },
  },
  {
    name: 'lightspeed_create_user',
    description: 'Create a new user/staff member',
    inputSchema: {
      type: 'object',
      properties: {
        username: { type: 'string', description: 'Username (required)' },
        display_name: { type: 'string', description: 'Display name (required)' },
        email: { type: 'string', description: 'Email address (required)' },
        password: { type: 'string', description: 'Password' },
        role: { type: 'string', description: 'User role' },
        outlet_ids: { type: 'array', items: { type: 'string' }, description: 'Array of outlet IDs' },
      },
      required: ['username', 'display_name', 'email'],
    },
  },
  {
    name: 'lightspeed_open_register',
    description: 'Open a register for trading',
    inputSchema: {
      type: 'object',
      properties: {
        register_id: { type: 'string', description: 'The register ID' },
        opening_float: { type: 'number', description: 'Opening float amount' },
      },
      required: ['register_id'],
    },
  },
  {
    name: 'lightspeed_close_register',
    description: 'Close a register',
    inputSchema: {
      type: 'object',
      properties: {
        register_id: { type: 'string', description: 'The register ID' },
        closing_float: { type: 'number', description: 'Closing float amount' },
      },
      required: ['register_id'],
    },
  },
  {
    name: 'lightspeed_get_register_payments_summary',
    description: 'Get payments summary for a register',
    inputSchema: {
      type: 'object',
      properties: {
        register_id: { type: 'string', description: 'The register ID' },
      },
      required: ['register_id'],
    },
  },
  {
    name: 'lightspeed_list_button_layouts',
    description: 'List all button layouts',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_get_button_layout',
    description: 'Get a single button layout by ID',
    inputSchema: {
      type: 'object',
      properties: {
        layout_id: { type: 'string', description: 'The button layout ID' },
      },
      required: ['layout_id'],
    },
  },
  {
    name: 'lightspeed_list_outlet_product_taxes',
    description: 'List outlet-specific product tax assignments',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        outlet_id: { type: 'string', description: 'Filter by outlet ID' },
        product_id: { type: 'string', description: 'Filter by product ID' },
      },
    },
  },
  {
    name: 'lightspeed_get_config',
    description: 'Get account configuration including loyalty settings',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'lightspeed_list_inventory-counts',
    description: 'List inventory counts for an outlet',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        status: { type: 'string', description: 'Filter by status' },
      },
      required: ['outlet_id'],
    },
  },
  {
    name: 'lightspeed_get_inventory_count',
    description: 'Get a single inventory count by ID',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
        count_id: { type: 'string', description: 'The inventory count ID' },
      },
      required: ['outlet_id', 'count_id'],
    },
  },
  {
    name: 'lightspeed_create_inventory_count',
    description: 'Create a new inventory count for an outlet',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
        name: { type: 'string', description: 'Name of the inventory count' },
        due_at: { type: 'string', description: 'Due date (ISO 8601)' },
        product_ids: { type: 'array', items: { type: 'string' }, description: 'Product IDs to include' },
      },
      required: ['outlet_id'],
    },
  },
  {
    name: 'lightspeed_update_inventory_count',
    description: 'Update an inventory count (e.g., change status)',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
        count_id: { type: 'string', description: 'The inventory count ID' },
        status: { type: 'string', description: 'New status (e.g., COMPLETED)' },
        name: { type: 'string', description: 'Name of the inventory count' },
      },
      required: ['outlet_id', 'count_id'],
    },
  },
  {
    name: 'lightspeed_delete_inventory_count',
    description: 'Delete an inventory count',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
        count_id: { type: 'string', description: 'The inventory count ID to delete' },
      },
      required: ['outlet_id', 'count_id'],
    },
  },
  {
    name: 'lightspeed_list_inventory_count_items',
    description: 'List items in an inventory count',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
        count_id: { type: 'string', description: 'The inventory count ID' },
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
      required: ['outlet_id', 'count_id'],
    },
  },
  {
    name: 'lightspeed_update_inventory_count_item',
    description: 'Update a counted item in an inventory count',
    inputSchema: {
      type: 'object',
      properties: {
        outlet_id: { type: 'string', description: 'The outlet ID' },
        count_id: { type: 'string', description: 'The inventory count ID' },
        item_id: { type: 'string', description: 'The item ID' },
        counted: { type: 'number', description: 'The counted quantity' },
      },
      required: ['outlet_id', 'count_id', 'item_id'],
    },
  },
];
