import { getClient } from '../utils/api-client.js';
import type {
  PriceBook,
  PriceBookCreateInput,
  PriceBookProduct,
  PriceBookProductCreateInput,
  Promotion,
  PromotionCreateInput,
  PromoCode,
  GiftCard,
  GiftCardCreateInput,
  GiftCardTransaction,
  GiftCardTransactionCreateInput,
  StoreCredit,
  StoreCreditTransaction,
  StoreCreditTransactionCreateInput,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

// Price Book Tools

export async function listPriceBooks(params: {
  page_size?: number;
  after?: string;
  since?: string;
}): Promise<PaginatedResponse<PriceBook>> {
  const client = getClient();
  return client.list<PriceBook>('/price_books', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      since: params.since,
    },
  });
}

export async function getPriceBook(priceBookId: string): Promise<SingleResponse<PriceBook>> {
  const client = getClient();
  return client.getOne<PriceBook>(`/price_books/${priceBookId}`, { version: '2.0' });
}

export async function createPriceBook(data: PriceBookCreateInput): Promise<SingleResponse<PriceBook>> {
  const client = getClient();
  return client.post<SingleResponse<PriceBook>>('/price_books', data, { version: '2.0' });
}

export async function updatePriceBook(priceBookId: string, data: Partial<PriceBookCreateInput>): Promise<SingleResponse<PriceBook>> {
  const client = getClient();
  return client.put<SingleResponse<PriceBook>>(`/price_books/${priceBookId}`, data, { version: '2.0' });
}

export async function deletePriceBook(priceBookId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/price_books/${priceBookId}`, { version: '2.0' });
}

// Price Book Product Tools

export async function listPriceBookProducts(priceBookId: string, params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<PriceBookProduct>> {
  const client = getClient();
  return client.list<PriceBookProduct>(`/price_books/${priceBookId}/products`, {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function addPriceBookProduct(priceBookId: string, data: PriceBookProductCreateInput): Promise<SingleResponse<PriceBookProduct>> {
  const client = getClient();
  return client.post<SingleResponse<PriceBookProduct>>(`/price_books/${priceBookId}/products`, data, { version: '2.0' });
}

export async function updatePriceBookProduct(
  priceBookId: string,
  productId: string,
  data: Partial<PriceBookProductCreateInput>
): Promise<SingleResponse<PriceBookProduct>> {
  const client = getClient();
  return client.put<SingleResponse<PriceBookProduct>>(`/price_books/${priceBookId}/products/${productId}`, data, { version: '2.0' });
}

export async function deletePriceBookProduct(priceBookId: string, productId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/price_books/${priceBookId}/products/${productId}`, { version: '2.0' });
}

// List ALL price book products across all price books
export async function listAllPriceBookProducts(params: {
  page_size?: number;
  after?: string;
  product_id?: string;
}): Promise<PaginatedResponse<PriceBookProduct>> {
  const client = getClient();
  return client.list<PriceBookProduct>('/price_books/products', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      product_id: params.product_id,
    },
  });
}

// Promotion Tools

export async function listPromotions(params: {
  page_size?: number;
  after?: string;
  active?: boolean;
  type?: string;
}): Promise<PaginatedResponse<Promotion>> {
  const client = getClient();
  return client.list<Promotion>('/promotions', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      active: params.active,
      type: params.type,
    },
  });
}

export async function getPromotion(promotionId: string): Promise<SingleResponse<Promotion>> {
  const client = getClient();
  return client.getOne<Promotion>(`/promotions/${promotionId}`, { version: '2.0' });
}

export async function createPromotion(data: PromotionCreateInput): Promise<SingleResponse<Promotion>> {
  const client = getClient();
  return client.post<SingleResponse<Promotion>>('/promotions', data, { version: '2.0' });
}

export async function updatePromotion(promotionId: string, data: Partial<PromotionCreateInput>): Promise<SingleResponse<Promotion>> {
  const client = getClient();
  return client.put<SingleResponse<Promotion>>(`/promotions/${promotionId}`, data, { version: '2.0' });
}

export async function deletePromotion(promotionId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/promotions/${promotionId}`, { version: '2.0' });
}

export async function searchPromotions(params: {
  query?: string;
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<Promotion>> {
  const client = getClient();
  return client.list<Promotion>('/promotions/search', {
    version: '2.0',
    params: {
      q: params.query,
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getPromotionProducts(promotionId: string, params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<unknown>> {
  const client = getClient();
  return client.list<unknown>(`/promotions/${promotionId}/products`, {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getPromotionPromoCodes(promotionId: string, params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<PromoCode>> {
  const client = getClient();
  return client.list<PromoCode>(`/promotions/${promotionId}/promo_codes`, {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function applyDiscount(saleId: string, data: {
  promotion_id?: string;
  promo_code?: string;
  discount_amount?: number;
  discount_percentage?: number;
}): Promise<SingleResponse<unknown>> {
  const client = getClient();
  return client.post<SingleResponse<unknown>>(`/sales/${saleId}/discounts`, data, { version: '2.0' });
}

// Promo Code Tools

export async function deletePromoCodes(promoCodes: string[]): Promise<void> {
  const client = getClient();
  await client.delete('/promo_codes', { version: '2.0' });
}

export async function getActivePromoCodes(data: {
  codes: string[];
}): Promise<PaginatedResponse<PromoCode>> {
  const client = getClient();
  return client.post<PaginatedResponse<PromoCode>>('/promo_codes/active', data, { version: '2.0' });
}

// Gift Card Tools (API 2.0 BETA)

export async function listGiftCards(params: {
  page_size?: number;
  after?: string;
  number?: string;
  status?: string;
  customer_id?: string;
}): Promise<PaginatedResponse<GiftCard>> {
  const client = getClient();
  return client.list<GiftCard>('/gift_cards', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      number: params.number,
      status: params.status,
      customer_id: params.customer_id,
    },
  });
}

export async function getGiftCard(giftCardId: string): Promise<SingleResponse<GiftCard>> {
  const client = getClient();
  return client.getOne<GiftCard>(`/gift_cards/${giftCardId}`, { version: '2.0' });
}

export async function createGiftCard(data: GiftCardCreateInput): Promise<SingleResponse<GiftCard>> {
  const client = getClient();
  return client.post<SingleResponse<GiftCard>>('/gift_cards', data, { version: '2.0' });
}

export async function updateGiftCard(giftCardId: string, data: Partial<GiftCardCreateInput>): Promise<SingleResponse<GiftCard>> {
  const client = getClient();
  return client.put<SingleResponse<GiftCard>>(`/gift_cards/${giftCardId}`, data, { version: '2.0' });
}

export async function voidGiftCard(giftCardId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/gift_cards/${giftCardId}`, { version: '2.0' });
}

export async function createGiftCardTransaction(giftCardId: string, data: GiftCardTransactionCreateInput): Promise<SingleResponse<GiftCardTransaction>> {
  const client = getClient();
  return client.post<SingleResponse<GiftCardTransaction>>(`/gift_cards/${giftCardId}/transactions`, data, { version: '2.0' });
}

export async function getGiftCardByTransaction(transactionId: string): Promise<SingleResponse<GiftCard>> {
  const client = getClient();
  return client.getOne<GiftCard>(`/gift_cards/transactions/${transactionId}`, { version: '2.0' });
}

export async function reverseGiftCardTransaction(transactionId: string): Promise<void> {
  const client = getClient();
  await client.delete(`/gift_cards/transactions/${transactionId}`, { version: '2.0' });
}

// Store Credit Tools (API 2.0 BETA)

export async function listStoreCredits(params: {
  page_size?: number;
  after?: string;
  customer_id?: string;
}): Promise<PaginatedResponse<StoreCredit>> {
  const client = getClient();
  return client.list<StoreCredit>('/store_credits', {
    version: '2.0',
    params: {
      page_size: params.page_size,
      after: params.after,
      customer_id: params.customer_id,
    },
  });
}

export async function getStoreCredit(storeCreditId: string): Promise<SingleResponse<StoreCredit>> {
  const client = getClient();
  return client.getOne<StoreCredit>(`/store_credits/${storeCreditId}`, { version: '2.0' });
}

export async function getCustomerStoreCredit(customerId: string): Promise<SingleResponse<StoreCredit>> {
  const client = getClient();
  return client.getOne<StoreCredit>(`/store_credits/customer/${customerId}`, { version: '2.0' });
}

export async function bulkGetStoreCredits(data: { customer_ids: string[] }): Promise<PaginatedResponse<StoreCredit>> {
  const client = getClient();
  return client.post<PaginatedResponse<StoreCredit>>('/store_credits/bulk', data, { version: '2.0' });
}

export async function createStoreCreditTransaction(data: StoreCreditTransactionCreateInput): Promise<SingleResponse<StoreCreditTransaction>> {
  const client = getClient();
  return client.post<SingleResponse<StoreCreditTransaction>>('/store_credits/transactions', data, { version: '2.0' });
}

export async function getStoreCreditReport(params: {
  start_date?: string;
  end_date?: string;
}): Promise<unknown> {
  const client = getClient();
  return client.get<unknown>('/store_credits/report', {
    version: '2.0',
    params: {
      start_date: params.start_date,
      end_date: params.end_date,
    },
  });
}

// Gift Card API 3.0

export async function getGiftCard3(giftCardId: string): Promise<SingleResponse<GiftCard>> {
  const client = getClient();
  return client.getOne<GiftCard>(`/gift_cards/${giftCardId}`, { version: '3.0' });
}

export async function findGiftCardByNumber(number: string): Promise<SingleResponse<GiftCard>> {
  const client = getClient();
  return client.getOne<GiftCard>(`/gift_cards/number/${number}`, { version: '2.0' });
}

// Price Book API 3.0

export async function listPriceBooks3(params: {
  page_size?: number;
  after?: string;
}): Promise<PaginatedResponse<PriceBook>> {
  const client = getClient();
  return client.list<PriceBook>('/price_books', {
    version: '3.0',
    params: {
      page_size: params.page_size,
      after: params.after,
    },
  });
}

export async function getPriceBook3(priceBookId: string): Promise<SingleResponse<PriceBook>> {
  const client = getClient();
  return client.getOne<PriceBook>(`/price-books/${priceBookId}`, { version: '3.0' });
}

export async function createPriceBook3(data: PriceBookCreateInput): Promise<SingleResponse<PriceBook>> {
  const client = getClient();
  return client.post<SingleResponse<PriceBook>>('/price_books', data, { version: '3.0' });
}

export async function updatePriceBook3(priceBookId: string, data: Partial<PriceBookCreateInput>): Promise<SingleResponse<PriceBook>> {
  const client = getClient();
  return client.put<SingleResponse<PriceBook>>(`/price-books/${priceBookId}`, data, { version: '3.0' });
}

// Tool definitions for MCP
export const pricingToolDefinitions = [
  {
    name: 'lightspeed_list_price_books',
    description: 'List all price books',
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
    name: 'lightspeed_get_price_book',
    description: 'Get a single price book by ID',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
      },
      required: ['price_book_id'],
    },
  },
  {
    name: 'lightspeed_create_price_book',
    description: 'Create a new price book',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Price book name (required)' },
        outlet_id: { type: 'string', description: 'Outlet ID (for outlet-specific pricing)' },
        customer_group_id: { type: 'string', description: 'Customer group ID (for group-specific pricing)' },
        valid_from: { type: 'string', description: 'Start date (ISO 8601)' },
        valid_to: { type: 'string', description: 'End date (ISO 8601)' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_update_price_book',
    description: 'Update a price book',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
        name: { type: 'string', description: 'Price book name' },
        valid_from: { type: 'string', description: 'Start date (ISO 8601)' },
        valid_to: { type: 'string', description: 'End date (ISO 8601)' },
      },
      required: ['price_book_id'],
    },
  },
  {
    name: 'lightspeed_delete_price_book',
    description: 'Delete a price book',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID to delete' },
      },
      required: ['price_book_id'],
    },
  },
  {
    name: 'lightspeed_list_price_book_products',
    description: 'List products in a price book',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
      required: ['price_book_id'],
    },
  },
  {
    name: 'lightspeed_add_price_book_product',
    description: 'Add a product to a price book with custom pricing',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
        product_id: { type: 'string', description: 'Product ID to add' },
        price: { type: 'number', description: 'Custom price for this product' },
        loyalty_value: { type: 'number', description: 'Loyalty points value' },
        min_units: { type: 'number', description: 'Minimum quantity for this price' },
        max_units: { type: 'number', description: 'Maximum quantity for this price' },
        tax_id: { type: 'string', description: 'Tax rate ID' },
      },
      required: ['price_book_id', 'product_id', 'price'],
    },
  },
  {
    name: 'lightspeed_update_price_book_product',
    description: 'Update a product price in a price book',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
        product_id: { type: 'string', description: 'Product ID to update' },
        price: { type: 'number', description: 'New price' },
        loyalty_value: { type: 'number', description: 'Loyalty points value' },
        min_units: { type: 'number', description: 'Minimum quantity' },
        max_units: { type: 'number', description: 'Maximum quantity' },
      },
      required: ['price_book_id', 'product_id'],
    },
  },
  {
    name: 'lightspeed_delete_price_book_product',
    description: 'Remove a product from a price book',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
        product_id: { type: 'string', description: 'Product ID to remove' },
      },
      required: ['price_book_id', 'product_id'],
    },
  },
  {
    name: 'lightspeed_list_all_price_book_products',
    description: 'List all price book products across all price books',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        product_id: { type: 'string', description: 'Filter by product ID' },
      },
    },
  },
  {
    name: 'lightspeed_list_promotions',
    description: 'List all promotions',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        active: { type: 'boolean', description: 'Filter by active status' },
        type: { type: 'string', description: 'Filter by promotion type (SALE, DISCOUNT, BUNDLE)' },
      },
    },
  },
  {
    name: 'lightspeed_get_promotion',
    description: 'Get a single promotion by ID',
    inputSchema: {
      type: 'object',
      properties: {
        promotion_id: { type: 'string', description: 'The promotion ID' },
      },
      required: ['promotion_id'],
    },
  },
  {
    name: 'lightspeed_list_gift_cards',
    description: 'List gift cards (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        number: { type: 'string', description: 'Filter by gift card number' },
        status: { type: 'string', description: 'Filter by status (ACTIVE, INACTIVE, EXPIRED)' },
        customer_id: { type: 'string', description: 'Filter by customer ID' },
      },
    },
  },
  {
    name: 'lightspeed_get_gift_card',
    description: 'Get a single gift card by ID (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        gift_card_id: { type: 'string', description: 'The gift card ID' },
      },
      required: ['gift_card_id'],
    },
  },
  {
    name: 'lightspeed_create_gift_card',
    description: 'Create a new gift card (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        number: { type: 'string', description: 'Gift card number (auto-generated if not provided)' },
        initial_value: { type: 'number', description: 'Initial balance (required)' },
        expiry_date: { type: 'string', description: 'Expiry date (ISO 8601)' },
        customer_id: { type: 'string', description: 'Customer ID to associate with' },
      },
      required: ['initial_value'],
    },
  },
  {
    name: 'lightspeed_update_gift_card',
    description: 'Update a gift card (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        gift_card_id: { type: 'string', description: 'The gift card ID' },
        expiry_date: { type: 'string', description: 'New expiry date' },
        customer_id: { type: 'string', description: 'Customer ID to associate with' },
      },
      required: ['gift_card_id'],
    },
  },
  {
    name: 'lightspeed_list_store_credits',
    description: 'List store credits (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
        customer_id: { type: 'string', description: 'Filter by customer ID' },
      },
    },
  },
  {
    name: 'lightspeed_get_store_credit',
    description: 'Get a single store credit by ID (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        store_credit_id: { type: 'string', description: 'The store credit ID' },
      },
      required: ['store_credit_id'],
    },
  },
  {
    name: 'lightspeed_create_promotion',
    description: 'Create a new promotion',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Promotion name' },
        type: { type: 'string', description: 'Promotion type (SALE, DISCOUNT, BUNDLE)' },
        active: { type: 'boolean', description: 'Whether promotion is active' },
        start_date: { type: 'string', description: 'Start date (ISO 8601)' },
        end_date: { type: 'string', description: 'End date (ISO 8601)' },
        outlet_ids: { type: 'array', items: { type: 'string' }, description: 'Outlet IDs' },
        customer_group_ids: { type: 'array', items: { type: 'string' }, description: 'Customer group IDs' },
        discount_amount: { type: 'number', description: 'Fixed discount amount' },
        discount_percentage: { type: 'number', description: 'Percentage discount' },
      },
      required: ['name', 'type'],
    },
  },
  {
    name: 'lightspeed_update_promotion',
    description: 'Update an existing promotion',
    inputSchema: {
      type: 'object',
      properties: {
        promotion_id: { type: 'string', description: 'The promotion ID' },
        name: { type: 'string', description: 'Promotion name' },
        active: { type: 'boolean', description: 'Whether promotion is active' },
        start_date: { type: 'string', description: 'Start date (ISO 8601)' },
        end_date: { type: 'string', description: 'End date (ISO 8601)' },
      },
      required: ['promotion_id'],
    },
  },
  {
    name: 'lightspeed_delete_promotion',
    description: 'Delete a promotion',
    inputSchema: {
      type: 'object',
      properties: {
        promotion_id: { type: 'string', description: 'The promotion ID to delete' },
      },
      required: ['promotion_id'],
    },
  },
  {
    name: 'lightspeed_search_promotions',
    description: 'Search for promotions',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query' },
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_get_promotion_products',
    description: 'Get products in a promotion',
    inputSchema: {
      type: 'object',
      properties: {
        promotion_id: { type: 'string', description: 'The promotion ID' },
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
      required: ['promotion_id'],
    },
  },
  {
    name: 'lightspeed_get_promotion_promo_codes',
    description: 'Get promo codes for a promotion',
    inputSchema: {
      type: 'object',
      properties: {
        promotion_id: { type: 'string', description: 'The promotion ID' },
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
      required: ['promotion_id'],
    },
  },
  {
    name: 'lightspeed_apply_discount',
    description: 'Apply a discount to a sale',
    inputSchema: {
      type: 'object',
      properties: {
        sale_id: { type: 'string', description: 'The sale ID' },
        promotion_id: { type: 'string', description: 'Promotion ID to apply' },
        promo_code: { type: 'string', description: 'Promo code to apply' },
        discount_amount: { type: 'number', description: 'Fixed discount amount' },
        discount_percentage: { type: 'number', description: 'Percentage discount' },
      },
      required: ['sale_id'],
    },
  },
  {
    name: 'lightspeed_delete_promo_codes',
    description: 'Delete promo codes',
    inputSchema: {
      type: 'object',
      properties: {
        promo_codes: { type: 'array', items: { type: 'string' }, description: 'Array of promo codes to delete' },
      },
      required: ['promo_codes'],
    },
  },
  {
    name: 'lightspeed_get_active_promo_codes',
    description: 'Get active promo codes by code values',
    inputSchema: {
      type: 'object',
      properties: {
        codes: { type: 'array', items: { type: 'string' }, description: 'Array of promo codes to check' },
      },
      required: ['codes'],
    },
  },
  {
    name: 'lightspeed_void_gift_card',
    description: 'Void a gift card (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        gift_card_id: { type: 'string', description: 'The gift card ID to void' },
      },
      required: ['gift_card_id'],
    },
  },
  {
    name: 'lightspeed_create_gift_card_transaction',
    description: 'Create a gift card transaction (credit or debit) (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        gift_card_id: { type: 'string', description: 'The gift card ID' },
        amount: { type: 'number', description: 'Transaction amount' },
        type: { type: 'string', description: 'Transaction type (CREDIT, DEBIT)' },
        sale_id: { type: 'string', description: 'Associated sale ID' },
        note: { type: 'string', description: 'Transaction note' },
      },
      required: ['gift_card_id', 'amount', 'type'],
    },
  },
  {
    name: 'lightspeed_get_gift_card_by_transaction',
    description: 'Get gift card by transaction ID (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        transaction_id: { type: 'string', description: 'The transaction ID' },
      },
      required: ['transaction_id'],
    },
  },
  {
    name: 'lightspeed_reverse_gift_card_transaction',
    description: 'Reverse a gift card transaction (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        transaction_id: { type: 'string', description: 'The transaction ID to reverse' },
      },
      required: ['transaction_id'],
    },
  },
  {
    name: 'lightspeed_get_customer_store_credit',
    description: 'Get store credit for a specific customer (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        customer_id: { type: 'string', description: 'The customer ID' },
      },
      required: ['customer_id'],
    },
  },
  {
    name: 'lightspeed_bulk_get_store_credits',
    description: 'Get store credits for multiple customers (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        customer_ids: { type: 'array', items: { type: 'string' }, description: 'Array of customer IDs' },
      },
      required: ['customer_ids'],
    },
  },
  {
    name: 'lightspeed_create_store_credit_transaction',
    description: 'Create a store credit transaction (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        customer_id: { type: 'string', description: 'Customer ID' },
        amount: { type: 'number', description: 'Transaction amount' },
        type: { type: 'string', description: 'Transaction type (CREDIT, DEBIT)' },
        sale_id: { type: 'string', description: 'Associated sale ID' },
        note: { type: 'string', description: 'Transaction note' },
      },
      required: ['customer_id', 'amount', 'type'],
    },
  },
  {
    name: 'lightspeed_get_store_credit_report',
    description: 'Get store credit report (BETA)',
    inputSchema: {
      type: 'object',
      properties: {
        start_date: { type: 'string', description: 'Start date (ISO 8601)' },
        end_date: { type: 'string', description: 'End date (ISO 8601)' },
      },
    },
  },
  {
    name: 'lightspeed_get_gift_card_v3',
    description: 'Get a gift card by ID using API v3.0',
    inputSchema: {
      type: 'object',
      properties: {
        gift_card_id: { type: 'string', description: 'The gift card ID' },
      },
      required: ['gift_card_id'],
    },
  },
  {
    name: 'lightspeed_find_gift_card_by_number',
    description: 'Find a gift card by its number',
    inputSchema: {
      type: 'object',
      properties: {
        number: { type: 'string', description: 'The gift card number' },
      },
      required: ['number'],
    },
  },
  {
    name: 'lightspeed_list_price_books_v3',
    description: 'List price books using API v3.0',
    inputSchema: {
      type: 'object',
      properties: {
        page_size: { type: 'number', description: 'Number of results per page' },
        after: { type: 'string', description: 'Cursor for pagination' },
      },
    },
  },
  {
    name: 'lightspeed_get_price_book_v3',
    description: 'Get a price book by ID using API v3.0',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
      },
      required: ['price_book_id'],
    },
  },
  {
    name: 'lightspeed_create_price_book_v3',
    description: 'Create a new price book using API v3.0',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Price book name (required)' },
        outlet_id: { type: 'string', description: 'Outlet ID' },
        customer_group_id: { type: 'string', description: 'Customer group ID' },
        valid_from: { type: 'string', description: 'Start date (ISO 8601)' },
        valid_to: { type: 'string', description: 'End date (ISO 8601)' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lightspeed_update_price_book_v3',
    description: 'Update a price book using API v3.0',
    inputSchema: {
      type: 'object',
      properties: {
        price_book_id: { type: 'string', description: 'The price book ID' },
        name: { type: 'string', description: 'Price book name' },
        valid_from: { type: 'string', description: 'Start date (ISO 8601)' },
        valid_to: { type: 'string', description: 'End date (ISO 8601)' },
      },
      required: ['price_book_id'],
    },
  },
];
