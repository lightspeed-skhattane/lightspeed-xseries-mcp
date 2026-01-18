import type { Sale, SaleCreateInput, PaymentType, Payment, Fulfillment, FulfillmentCreateInput, FulfillmentSummary, PickList, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listSales(params: {
    page_size?: number;
    after?: string;
    before?: string;
    since?: string;
    outlet_id?: string;
    status?: string;
    customer_id?: string;
    user_id?: string;
    invoice_number?: string;
    tag?: string;
}): Promise<PaginatedResponse<Sale>>;
export declare function getSale(saleId: string): Promise<SingleResponse<Sale>>;
export declare function createSale(data: SaleCreateInput): Promise<SingleResponse<Sale>>;
export declare function updateSale(saleId: string, data: Partial<SaleCreateInput>): Promise<SingleResponse<Sale>>;
export declare function returnSale(saleId: string, data: {
    return_products?: {
        product_id: string;
        quantity: number;
    }[];
}): Promise<SingleResponse<Sale>>;
export declare function getPayment(paymentId: string): Promise<SingleResponse<Payment>>;
export declare function listSales2(params: {
    page_size?: number;
    after?: string;
    outlet_id?: string;
    status?: string;
    since?: string;
}): Promise<PaginatedResponse<Sale>>;
export declare function getSale2(saleId: string): Promise<SingleResponse<Sale>>;
export declare function createSale2(data: SaleCreateInput): Promise<SingleResponse<Sale>>;
export declare function updateSale2(saleId: string, data: Partial<SaleCreateInput>): Promise<SingleResponse<Sale>>;
export declare function deleteSale(saleId: string): Promise<void>;
export declare function listPaymentTypes(): Promise<PaginatedResponse<PaymentType>>;
export declare function listPaymentTypes2(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<PaymentType>>;
export declare function getPaymentType(paymentTypeId: string): Promise<SingleResponse<PaymentType>>;
export declare function listPayments(params: {
    page_size?: number;
    after?: string;
    sale_id?: string;
}): Promise<PaginatedResponse<Payment>>;
export declare function listFulfillments(params: {
    page_size?: number;
    after?: string;
    sale_id?: string;
    status?: string;
}): Promise<PaginatedResponse<Fulfillment>>;
export declare function getFulfillment(fulfillmentId: string): Promise<SingleResponse<Fulfillment>>;
export declare function createFulfillment(data: FulfillmentCreateInput): Promise<SingleResponse<Fulfillment>>;
export declare function updateFulfillment(fulfillmentId: string, data: Partial<FulfillmentCreateInput>): Promise<SingleResponse<Fulfillment>>;
export declare function deleteFulfillment(fulfillmentId: string): Promise<void>;
export declare function getFulfillmentSummary(): Promise<SingleResponse<FulfillmentSummary>>;
export declare function fulfillSaleLineItems(saleId: string, data: {
    line_items: {
        sale_product_id: string;
        quantity: number;
    }[];
}): Promise<SingleResponse<Fulfillment>>;
export declare function packSaleLineItems(saleId: string, data: {
    line_items: {
        sale_product_id: string;
        quantity: number;
    }[];
}): Promise<SingleResponse<Fulfillment>>;
export declare function pickSaleLineItems(saleId: string, data: {
    line_items: {
        sale_product_id: string;
        quantity: number;
    }[];
}): Promise<SingleResponse<Fulfillment>>;
export declare function fulfillSale(saleId: string, data: FulfillmentCreateInput): Promise<SingleResponse<Fulfillment>>;
export declare function listSaleFulfillments(saleId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<Fulfillment>>;
export declare function listSalePickLists(saleId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<PickList>>;
export declare const saleToolDefinitions: ({
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
            before: {
                type: string;
                description: string;
            };
            since: {
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
            customer_id: {
                type: string;
                description: string;
            };
            user_id: {
                type: string;
                description: string;
            };
            invoice_number: {
                type: string;
                description: string;
            };
            tag: {
                type: string;
                description: string;
            };
            sale_id?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
        };
        required?: undefined;
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
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            register_id: {
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
            status: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            sale_date: {
                type: string;
                description: string;
            };
            register_sale_products: {
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
                        discount: {
                            type: string;
                            description: string;
                        };
                        tax_id: {
                            type: string;
                            description: string;
                        };
                        note: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            register_sale_payments: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        payment_type_id: {
                            type: string;
                            description: string;
                        };
                        amount: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            status: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            register_sale_products: {
                type: string;
                description: string;
                items?: undefined;
            };
            register_sale_payments: {
                type: string;
                description: string;
                items?: undefined;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            sale_date?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            payment_type_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            sale_id: {
                type: string;
                description: string;
            };
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            sale_id: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            fulfillment_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            status: {
                type: string;
                description: string;
            };
            tracking_number: {
                type: string;
                description: string;
            };
            tracking_company: {
                type: string;
                description: string;
            };
            line_items: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        sale_product_id: {
                            type: string;
                            description: string;
                        };
                        quantity: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            fulfillment_id: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            tracking_number: {
                type: string;
                description: string;
            };
            tracking_company: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            register_id: {
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
            status: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            register_sale_products: {
                type: string;
                description: string;
                items?: undefined;
            };
            register_sale_payments: {
                type: string;
                description: string;
                items?: undefined;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            sale_date?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            status: {
                type: string;
                description: string;
            };
            customer_id: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            return_products: {
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
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            payment_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            payment_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            sale_id?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
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
            line_items: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        sale_product_id: {
                            type: string;
                            description: string;
                        };
                        quantity: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
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
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            before?: undefined;
            since?: undefined;
            outlet_id?: undefined;
            status?: undefined;
            customer_id?: undefined;
            user_id?: undefined;
            invoice_number?: undefined;
            tag?: undefined;
            register_id?: undefined;
            note?: undefined;
            sale_date?: undefined;
            register_sale_products?: undefined;
            register_sale_payments?: undefined;
            payment_type_id?: undefined;
            fulfillment_id?: undefined;
            tracking_number?: undefined;
            tracking_company?: undefined;
            line_items?: undefined;
            return_products?: undefined;
            payment_id?: undefined;
        };
        required: string[];
    };
})[];
//# sourceMappingURL=sales.d.ts.map