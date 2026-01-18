import type { Quote, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listQuotes(params: {
    page_size?: number;
    after?: string;
    customer_id?: string;
    outlet_id?: string;
    status?: string;
}): Promise<PaginatedResponse<Quote>>;
export declare function getQuote(quoteId: string): Promise<SingleResponse<Quote>>;
export declare function createQuote(data: {
    customer_id?: string;
    outlet_id: string;
    user_id?: string;
    note?: string;
    expiry_date?: string;
    line_items?: {
        product_id: string;
        quantity: number;
        price?: number;
    }[];
}): Promise<SingleResponse<Quote>>;
export declare function updateQuote(quoteId: string, data: {
    customer_id?: string;
    status?: string;
    note?: string;
    expiry_date?: string;
}): Promise<SingleResponse<Quote>>;
export declare function deleteQuote(quoteId: string): Promise<void>;
export declare function convertQuoteToSale(quoteId: string): Promise<SingleResponse<unknown>>;
export declare const quoteToolDefinitions: ({
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
            outlet_id: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            quote_id?: undefined;
            user_id?: undefined;
            note?: undefined;
            expiry_date?: undefined;
            line_items?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            quote_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            customer_id?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            user_id?: undefined;
            note?: undefined;
            expiry_date?: undefined;
            line_items?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            outlet_id: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            user_id: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            expiry_date: {
                type: string;
                description: string;
            };
            line_items: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        product_id: {
                            type: string;
                            description: string;
                        };
                        quantity: {
                            type: string;
                            description: string;
                        };
                        price: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            status?: undefined;
            quote_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            quote_id: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            expiry_date: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            outlet_id?: undefined;
            user_id?: undefined;
            line_items?: undefined;
        };
        required: string[];
    };
})[];
//# sourceMappingURL=quotes.d.ts.map