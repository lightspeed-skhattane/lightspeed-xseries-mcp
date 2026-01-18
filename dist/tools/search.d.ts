import type { SearchResult, PaginatedResponse } from '../types/lightspeed.js';
export declare function search(params: {
    type: string;
    page_size?: number;
    after?: string;
    sku?: string;
    supplier_id?: string;
    brand_id?: string;
    tag_id?: string;
    product_type_id?: string;
    variant_parent_id?: string;
    customer_code?: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    mobile?: string;
    phone?: string;
    email?: string;
    date_from?: string;
    date_to?: string;
    status?: string;
    state?: string;
    invoice_number?: string;
    customer_id?: string;
    user_id?: string;
    outlet_id?: string;
}): Promise<PaginatedResponse<SearchResult>>;
export declare const searchToolDefinitions: {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            type: {
                type: string;
                description: string;
                enum: string[];
            };
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            sku: {
                type: string;
                description: string;
            };
            supplier_id: {
                type: string;
                description: string;
            };
            brand_id: {
                type: string;
                description: string;
            };
            tag_id: {
                type: string;
                description: string;
            };
            product_type_id: {
                type: string;
                description: string;
            };
            variant_parent_id: {
                type: string;
                description: string;
            };
            customer_code: {
                type: string;
                description: string;
            };
            first_name: {
                type: string;
                description: string;
            };
            last_name: {
                type: string;
                description: string;
            };
            company_name: {
                type: string;
                description: string;
            };
            mobile: {
                type: string;
                description: string;
            };
            phone: {
                type: string;
                description: string;
            };
            email: {
                type: string;
                description: string;
            };
            date_from: {
                type: string;
                description: string;
            };
            date_to: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            state: {
                type: string;
                description: string;
            };
            invoice_number: {
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
            outlet_id: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
}[];
//# sourceMappingURL=search.d.ts.map