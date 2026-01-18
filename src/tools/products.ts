import { getClient } from '../utils/api-client.js';
import type {
  Product,
  ProductCreateInput,
  ProductType,
  ProductTypeCreateInput,
  ProductCategory,
  ProductCategoryCreateInput,
  ProductImage,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Product Tools

export async function listProducts(params: {
  page_size?: number;
  after?: string;
  before?: string;
  since?: string;
  deleted?: boolean;
  active?: boolean;
  sku?: string;
  handle?: string;
  tag_id?: string;
  brand_id?: string;
  supplier_id?: string;
  product_type_id?: string;
}): Promise<PaginatedResponse<Product>> {
  const client = getClient();
  return client.list<Product>('/products', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      before: params.before,
      since: params.since,
      deleted: params.deleted,
      active: params.active,
      sku: params.sku,
      handle: params.handle,
      tag_id: params.tag_id,
      brand_id: params.brand_id,
      supplier_id: params.supplier_id,
      product_type_id: params.product_type_id,
    },
  });
}

export async function getProduct(productId: string): Promise<SingleResponse<Product>> {
  const client = getClient();
  return client.getOne<Product>(`/products/${productId}`, { version: '2.0' });
}

export async function createProduct(data: ProductCreateInput): Promise<SingleResponse<Product>> {
  const client = getClient();
  return client.post<SingleResponse<Product>>('/products', data, { version: '2.0' });
}

export async function updateProduct(productId: string, data: Partial<ProductCreateInput>): Promise<SingleResponse<Product>> {
  const client = getClient();
  return client.put<SingleResponse<Product>>(`/products/${productId}`, data, { version: '2.1' });
}

export async function deleteProduct(productId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/products/${productId}`, { version: '2.0' });
}

export async function deleteProductFamily(familyId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/products/families/${familyId}`, { version: '2.0' });
}

export async function getProductInventory(productId: string): Promise<PaginatedResponse<unknown>> {
  const client = getClient();
  return client.list<unknown>(`/products/${productId}/inventory`, { version: '2.0' });
}

export async function getProductPriceBooks(productId: string, params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<unknown>> {
  const client = getClient();
  return client.list<unknown>(`/products/${productId}/price_books`, {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

// Product Type Tools

export async function listProductTypes(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<ProductType>> {
  const client = getClient();
  return client.list<ProductType>('/product_types', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getProductType(typeId: string): Promise<SingleResponse<ProductType>> {
  const client = getClient();
  return client.getOne<ProductType>(`/product_types/${typeId}`, { version: '2.0' });
}

export async function createProductType(data: ProductTypeCreateInput): Promise<SingleResponse<ProductType>> {
  const client = getClient();
  return client.post<SingleResponse<ProductType>>('/product_types', data, { version: '2.0' });
}

// Product Category Tools

export async function listProductCategories(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<ProductCategory>> {
  const client = getClient();
  return client.list<ProductCategory>('/product_categories', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getProductCategory(categoryId: string): Promise<SingleResponse<ProductCategory>> {
  const client = getClient();
  // Note: There is no /product_categories/{id} endpoint in the API.
  // We fetch from the list and filter by ID instead.
  const response = await client.list<ProductCategory>('/product_categories', {
    version: '2.0',
    params: {},
  });

  // The response structure for product_categories is nested
  const categoriesData = (response as { data?: { data?: { categories?: ProductCategory[] } } })?.data?.data?.categories || [];
  const category = categoriesData.find((cat: ProductCategory) => cat.id === categoryId);

  if (!category) {
    throw new Error(`Product category with ID ${categoryId} not found`);
  }

  return { data: category, includes: null };
}

export async function createProductCategory(data: ProductCategoryCreateInput): Promise<SingleResponse<ProductCategory>> {
  const client = getClient();
  return client.post<SingleResponse<ProductCategory>>('/product_categories', data, { version: '2.0' });
}

export async function deleteProductCategories(categoryIds: string[]): Promise<void> {
  const client = getClient();
  // The API uses POST for bulk delete with IDs in the body
  await client.post<void>('/product_categories/delete', { ids: categoryIds }, { version: '2.0' });
}

// Products API 3.0 (BETA)

export async function listProducts3(params: {
  page_size?: number;
  after?: string;
  before?: string;
  since?: string;
  deleted?: boolean;
  active?: boolean;
}): Promise<PaginatedResponse<Product>> {
  const client = getClient();
  return client.list<Product>('/products', {
    version: '3.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      before: params.before,
      since: params.since,
      deleted: params.deleted,
      active: params.active,
    },
  });
}

export async function getProduct3(productId: string): Promise<SingleResponse<Product>> {
  const client = getClient();
  return client.getOne<Product>(`/products/${productId}`, { version: '3.0' });
}

// Product Image Tools

export async function listProductImages(productId: string): Promise<PaginatedResponse<ProductImage>> {
  const client = getClient();
  // Note: There is no /products/{id}/images endpoint.
  // Images are included in the product data, so we fetch the product and extract images.
  const product = await client.getOne<Product>(`/products/${productId}`, { version: '2.0' });

  // Extract images from product data
  const images = product.data?.images || [];

  return { data: images as unknown as ProductImage[] };
}

export async function uploadProductImage(productId: string, imageUrl: string): Promise<SingleResponse<ProductImage>> {
  const client = getClient();
  return client.post<SingleResponse<ProductImage>>(`/products/${productId}/images`, { url: imageUrl }, { version: '2.0' });
}

export async function deleteProductImage(productId: string, imageId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/products/${productId}/images/${imageId}`, { version: '2.0' });
}

export async function getProductImageData(productId: string, imageId: string): Promise<SingleResponse<ProductImage>> {
  const client = getClient();
  return client.getOne<ProductImage>(`/products/${productId}/images/${imageId}`, { version: '2.0' });
}

export async function setProductImagePosition(productId: string, imageId: string, position: number): Promise<SingleResponse<ProductImage>> {
  const client = getClient();
  return client.put<SingleResponse<ProductImage>>(`/products/${productId}/images/${imageId}/position`, { position }, { version: '2.0' });
}

// Tool definitions for MCP
export const productToolDefinitions = [
  {
    name: 'lightspeed_list_products',
    description: 'List products with optional filtering and pagination',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination (next page)' },
        before: { type: 'string', description: 'Cursor for pagination (previous page)' },
        since: { type: 'string', description: 'Filter by last updated date (ISO 8601)' },
        deleted: { type: 'boolean', description: 'Include deleted products' },
        active: { type: 'boolean', description: 'Filter by active status' },
        sku: { type: 'string', description: 'Filter by SKU' },
        handle: { type: 'string', description: 'Filter by product handle' },
        tag_id: { type: 'string', description: 'Filter by tag ID' },
        brand_id: { type: 'string', description: 'Filter by brand ID' },
        supplier_id: { type: 'string', description: 'Filter by supplier ID' },
        product_type_id: { type: 'string', description: 'Filter by product type ID' },
      },
    },
  },
  {
    name: 'lightspeed_get_product',
    description: 'Get a single product by ID',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
      },
      required: ['product_id'],
    },
  },
  {
    name: 'lightspeed_create_product',
    description: 'Create a new product',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Product name (required)' },
        description: { type: 'string', description: 'Product description' },
        sku: { type: 'string', description: 'SKU number' },
        handle: { type: 'string', description: 'URL-friendly handle' },
        active: { type: 'boolean', description: 'Whether product is active' },
        price: { type: 'number', description: 'Retail price' },
        supply_price: { type: 'number', description: 'Cost/supply price' },
        tax_id: { type: 'string', description: 'Tax rate ID' },
        brand_id: { type: 'string', description: 'Brand ID' },
        supplier_id: { type: 'string', description: 'Supplier ID' },
        product_type_id: { type: 'string', description: 'Product type ID' },
        tag_ids: { type: 'array', items: { type: 'string' }, description: 'Array of tag IDs' },
        track_inventory: { type: 'boolean', description: 'Track inventory levels' },
        loyalty_value: { type: 'number', description: 'Loyalty points value' },
        account_code: { type: 'string', description: 'Accounting code for sales' },
        account_code_purchase: { type: 'string', description: 'Accounting code for purchases' },
        variant_option_one_name: { type: 'string', description: 'First variant option name (e.g., Size)' },
        variant_option_one_value: { type: 'string', description: 'First variant option value (e.g., Large)' },
        variant_option_two_name: { type: 'string', description: 'Second variant option name' },
        variant_option_two_value: { type: 'string', description: 'Second variant option value' },
        variant_option_three_name: { type: 'string', description: 'Third variant option name' },
        variant_option_three_value: { type: 'string', description: 'Third variant option value' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_update_product',
    description: 'Update an existing product',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID to update' },
        name: { type: 'string', description: 'Product name' },
        description: { type: 'string', description: 'Product description' },
        sku: { type: 'string', description: 'SKU number' },
        handle: { type: 'string', description: 'URL-friendly handle' },
        active: { type: 'boolean', description: 'Whether product is active' },
        price: { type: 'number', description: 'Retail price' },
        supply_price: { type: 'number', description: 'Cost/supply price' },
        tax_id: { type: 'string', description: 'Tax rate ID' },
        brand_id: { type: 'string', description: 'Brand ID' },
        supplier_id: { type: 'string', description: 'Supplier ID' },
        product_type_id: { type: 'string', description: 'Product type ID' },
        tag_ids: { type: 'array', items: { type: 'string' }, description: 'Array of tag IDs' },
        track_inventory: { type: 'boolean', description: 'Track inventory levels' },
      },
      required: ['product_id'],
    },
  },
  {
    name: 'lightspeed_delete_product',
    description: 'Delete a product by ID',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID to delete' },
      },
      required: ['product_id'],
    },
  },
  {
    name: 'lightspeed_list_product_types',
    description: 'List all product types',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_get_product_type',
    description: 'Get a single product type by ID',
    inputSchema: {
      type: 'object',
      properties: {
        type_id: { type: 'string', description: 'The product type ID' },
      },
      required: ['type_id'],
    },
  },
  {
    name: 'lightspeed_create_product_type',
    description: 'Create a new product type',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Product type name' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_list_product_categories',
    description: 'List all product categories',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_get_product_category',
    description: 'Get a single product category by ID',
    inputSchema: {
      type: 'object',
      properties: {
        category_id: { type: 'string', description: 'The product category ID' },
      },
      required: ['category_id'],
    },
  },
  {
    name: 'lightspeed_create_product_category',
    description: 'Create a new product category',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Category name' },
        parent_id: { type: 'string', description: 'Parent category ID (for nested categories)' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_list_product_images',
    description: 'List all images for a product',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
      },
      required: ['product_id'],
    },
  },
  {
    name: 'lightspeed_upload_product_image',
    description: 'Upload an image to a product from a URL',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
        image_url: { type: 'string', description: 'URL of the image to upload' },
      },
      required: ['product_id', 'image_url'],
    },
  },
  {
    name: 'lightspeed_delete_product_image',
    description: 'Delete an image from a product',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
        image_id: { type: 'string', description: 'The image ID to delete' },
      },
      required: ['product_id', 'image_id'],
    },
  },
  {
    name: 'lightspeed_delete_product_family',
    description: 'Delete a product family (parent and all variants)',
    inputSchema: {
      type: 'object',
      properties: {
        family_id: { type: 'string', description: 'The product family ID to delete' },
      },
      required: ['family_id'],
    },
  },
  {
    name: 'lightspeed_get_product_inventory',
    description: 'Get inventory levels for a product across all outlets',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
      },
      required: ['product_id'],
    },
  },
  {
    name: 'lightspeed_get_product_price_books',
    description: 'Get price books that include a specific product',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
      required: ['product_id'],
    },
  },
  {
    name: 'lightspeed_get_product_image_data',
    description: 'Get data for a specific product image',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
        image_id: { type: 'string', description: 'The image ID' },
      },
      required: ['product_id', 'image_id'],
    },
  },
  {
    name: 'lightspeed_set_product_image_position',
    description: 'Set the display position of a product image',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
        image_id: { type: 'string', description: 'The image ID' },
        position: { type: 'number', description: 'The new position (0-based index)' },
      },
      required: ['product_id', 'image_id', 'position'],
    },
  },
  {
    name: 'lightspeed_delete_product_categories',
    description: 'Delete a list of product categories',
    inputSchema: {
      type: 'object',
      properties: {
        category_ids: {
          type: 'array',
          items: { type: 'string' },
          description: 'Array of category IDs to delete',
        },
      },
      required: ['category_ids'],
    },
  },
  {
    name: 'lightspeed_list_products_v3',
    description: 'List products using API v3.0 (BETA) - provides enhanced product data',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination (next page)' },
        before: { type: 'string', description: 'Cursor for pagination (previous page)' },
        since: { type: 'string', description: 'Filter by last updated date (ISO 8601)' },
        deleted: { type: 'boolean', description: 'Include deleted products' },
        active: { type: 'boolean', description: 'Filter by active status' },
      },
    },
  },
  {
    name: 'lightspeed_get_product_v3',
    description: 'Get a single product by ID using API v3.0 (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', description: 'The product ID' },
      },
      required: ['product_id'],
    },
  },
];
