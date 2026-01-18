import type { PriceBook, PriceBookCreateInput, PriceBookProduct, PriceBookProductCreateInput, Promotion, PromotionCreateInput, PromoCode, GiftCard, GiftCardCreateInput, GiftCardTransaction, GiftCardTransactionCreateInput, StoreCredit, StoreCreditTransaction, StoreCreditTransactionCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listPriceBooks(params: {
    page_size?: number;
    after?: string;
    since?: string;
}): Promise<PaginatedResponse<PriceBook>>;
export declare function getPriceBook(priceBookId: string): Promise<SingleResponse<PriceBook>>;
export declare function createPriceBook(data: PriceBookCreateInput): Promise<SingleResponse<PriceBook>>;
export declare function updatePriceBook(priceBookId: string, data: Partial<PriceBookCreateInput>): Promise<SingleResponse<PriceBook>>;
export declare function deletePriceBook(priceBookId: string): Promise<void>;
export declare function listPriceBookProducts(priceBookId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<PriceBookProduct>>;
export declare function addPriceBookProduct(priceBookId: string, data: PriceBookProductCreateInput): Promise<SingleResponse<PriceBookProduct>>;
export declare function updatePriceBookProduct(priceBookId: string, productId: string, data: Partial<PriceBookProductCreateInput>): Promise<SingleResponse<PriceBookProduct>>;
export declare function deletePriceBookProduct(priceBookId: string, productId: string): Promise<void>;
export declare function listAllPriceBookProducts(params: {
    page_size?: number;
    after?: string;
    product_id?: string;
}): Promise<PaginatedResponse<PriceBookProduct>>;
export declare function listPromotions(params: {
    page_size?: number;
    after?: string;
    active?: boolean;
    type?: string;
}): Promise<PaginatedResponse<Promotion>>;
export declare function getPromotion(promotionId: string): Promise<SingleResponse<Promotion>>;
export declare function createPromotion(data: PromotionCreateInput): Promise<SingleResponse<Promotion>>;
export declare function updatePromotion(promotionId: string, data: Partial<PromotionCreateInput>): Promise<SingleResponse<Promotion>>;
export declare function deletePromotion(promotionId: string): Promise<void>;
export declare function searchPromotions(params: {
    query?: string;
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<Promotion>>;
export declare function getPromotionProducts(promotionId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<unknown>>;
export declare function getPromotionPromoCodes(promotionId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<PromoCode>>;
export declare function applyDiscount(saleId: string, data: {
    promotion_id?: string;
    promo_code?: string;
    discount_amount?: number;
    discount_percentage?: number;
}): Promise<SingleResponse<unknown>>;
export declare function deletePromoCodes(promoCodes: string[]): Promise<void>;
export declare function getActivePromoCodes(data: {
    codes: string[];
}): Promise<PaginatedResponse<PromoCode>>;
export declare function listGiftCards(params: {
    page_size?: number;
    after?: string;
    number?: string;
    status?: string;
    customer_id?: string;
}): Promise<PaginatedResponse<GiftCard>>;
export declare function getGiftCard(giftCardId: string): Promise<SingleResponse<GiftCard>>;
export declare function createGiftCard(data: GiftCardCreateInput): Promise<SingleResponse<GiftCard>>;
export declare function updateGiftCard(giftCardId: string, data: Partial<GiftCardCreateInput>): Promise<SingleResponse<GiftCard>>;
export declare function voidGiftCard(giftCardId: string): Promise<void>;
export declare function createGiftCardTransaction(giftCardId: string, data: GiftCardTransactionCreateInput): Promise<SingleResponse<GiftCardTransaction>>;
export declare function getGiftCardByTransaction(transactionId: string): Promise<SingleResponse<GiftCard>>;
export declare function reverseGiftCardTransaction(transactionId: string): Promise<void>;
export declare function listStoreCredits(params: {
    page_size?: number;
    after?: string;
    customer_id?: string;
}): Promise<PaginatedResponse<StoreCredit>>;
export declare function getStoreCredit(storeCreditId: string): Promise<SingleResponse<StoreCredit>>;
export declare function getCustomerStoreCredit(customerId: string): Promise<SingleResponse<StoreCredit>>;
export declare function bulkGetStoreCredits(data: {
    customer_ids: string[];
}): Promise<PaginatedResponse<StoreCredit>>;
export declare function createStoreCreditTransaction(data: StoreCreditTransactionCreateInput): Promise<SingleResponse<StoreCreditTransaction>>;
export declare function getStoreCreditReport(params: {
    start_date?: string;
    end_date?: string;
}): Promise<unknown>;
export declare function getGiftCard3(giftCardId: string): Promise<SingleResponse<GiftCard>>;
export declare function findGiftCardByNumber(number: string): Promise<SingleResponse<GiftCard>>;
export declare function listPriceBooks3(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<PriceBook>>;
export declare function getPriceBook3(priceBookId: string): Promise<SingleResponse<PriceBook>>;
export declare function createPriceBook3(data: PriceBookCreateInput): Promise<SingleResponse<PriceBook>>;
export declare function updatePriceBook3(priceBookId: string, data: Partial<PriceBookCreateInput>): Promise<SingleResponse<PriceBook>>;
export declare const pricingToolDefinitions: ({
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            since: {
                type: string;
                description: string;
            };
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            price_book_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            name: {
                type: string;
                description: string;
            };
            outlet_id: {
                type: string;
                description: string;
            };
            customer_group_id: {
                type: string;
                description: string;
            };
            valid_from: {
                type: string;
                description: string;
            };
            valid_to: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            price_book_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            valid_from: {
                type: string;
                description: string;
            };
            valid_to: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            price_book_id: {
                type: string;
                description: string;
            };
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            since?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            price_book_id: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            price: {
                type: string;
                description: string;
            };
            loyalty_value: {
                type: string;
                description: string;
            };
            min_units: {
                type: string;
                description: string;
            };
            max_units: {
                type: string;
                description: string;
            };
            tax_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            price_book_id: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            price: {
                type: string;
                description: string;
            };
            loyalty_value: {
                type: string;
                description: string;
            };
            min_units: {
                type: string;
                description: string;
            };
            max_units: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            price_book_id: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            type: {
                type: string;
                description: string;
            };
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            promotion_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            number: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            gift_card_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            number: {
                type: string;
                description: string;
            };
            initial_value: {
                type: string;
                description: string;
            };
            expiry_date: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            status?: undefined;
            gift_card_id?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            gift_card_id: {
                type: string;
                description: string;
            };
            expiry_date: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            initial_value?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            store_credit_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            name: {
                type: string;
                description: string;
            };
            type: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            start_date: {
                type: string;
                description: string;
            };
            end_date: {
                type: string;
                description: string;
            };
            outlet_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            customer_group_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            discount_amount: {
                type: string;
                description: string;
            };
            discount_percentage: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            promotion_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            start_date: {
                type: string;
                description: string;
            };
            end_date: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            type?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            query: {
                type: string;
                description: string;
            };
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            promotion_id: {
                type: string;
                description: string;
            };
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            sale_id: {
                type: string;
                description: string;
            };
            promotion_id: {
                type: string;
                description: string;
            };
            promo_code: {
                type: string;
                description: string;
            };
            discount_amount: {
                type: string;
                description: string;
            };
            discount_percentage: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            query?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            promo_codes: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            codes: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            gift_card_id: {
                type: string;
                description: string;
            };
            amount: {
                type: string;
                description: string;
            };
            type: {
                type: string;
                description: string;
            };
            sale_id: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            transaction_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            customer_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            customer_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            customer_id: {
                type: string;
                description: string;
            };
            amount: {
                type: string;
                description: string;
            };
            type: {
                type: string;
                description: string;
            };
            sale_id: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            start_date: {
                type: string;
                description: string;
            };
            end_date: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            number: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            since?: undefined;
            price_book_id?: undefined;
            name?: undefined;
            outlet_id?: undefined;
            customer_group_id?: undefined;
            valid_from?: undefined;
            valid_to?: undefined;
            product_id?: undefined;
            price?: undefined;
            loyalty_value?: undefined;
            min_units?: undefined;
            max_units?: undefined;
            tax_id?: undefined;
            active?: undefined;
            type?: undefined;
            promotion_id?: undefined;
            number?: undefined;
            status?: undefined;
            customer_id?: undefined;
            gift_card_id?: undefined;
            initial_value?: undefined;
            expiry_date?: undefined;
            store_credit_id?: undefined;
            start_date?: undefined;
            end_date?: undefined;
            outlet_ids?: undefined;
            customer_group_ids?: undefined;
            discount_amount?: undefined;
            discount_percentage?: undefined;
            query?: undefined;
            sale_id?: undefined;
            promo_code?: undefined;
            promo_codes?: undefined;
            codes?: undefined;
            amount?: undefined;
            note?: undefined;
            transaction_id?: undefined;
            customer_ids?: undefined;
        };
        required?: undefined;
    };
})[];
//# sourceMappingURL=pricing.d.ts.map