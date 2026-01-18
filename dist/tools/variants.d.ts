import type { VariantAttribute, VariantAttributeCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listVariantAttributes(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<VariantAttribute>>;
export declare function getVariantAttribute(attributeId: string): Promise<SingleResponse<VariantAttribute>>;
export declare function createVariantAttribute(data: VariantAttributeCreateInput): Promise<SingleResponse<VariantAttribute>>;
export declare function updateVariantAttribute(attributeId: string, data: Partial<VariantAttributeCreateInput>): Promise<SingleResponse<VariantAttribute>>;
export declare function deleteVariantAttribute(attributeId: string): Promise<void>;
export declare function addProductVariant(productId: string, data: {
    variant_option_one_value?: string;
    variant_option_two_value?: string;
    variant_option_three_value?: string;
    sku?: string;
    supply_price?: number;
    price?: number;
}): Promise<SingleResponse<unknown>>;
export declare const variantToolDefinitions: ({
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
            attribute_id?: undefined;
            name?: undefined;
            values?: undefined;
            product_id?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_value?: undefined;
            sku?: undefined;
            supply_price?: undefined;
            price?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            attribute_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            name?: undefined;
            values?: undefined;
            product_id?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_value?: undefined;
            sku?: undefined;
            supply_price?: undefined;
            price?: undefined;
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
            values: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            attribute_id?: undefined;
            product_id?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_value?: undefined;
            sku?: undefined;
            supply_price?: undefined;
            price?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            attribute_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            values: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_value?: undefined;
            sku?: undefined;
            supply_price?: undefined;
            price?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            product_id: {
                type: string;
                description: string;
            };
            variant_option_one_value: {
                type: string;
                description: string;
            };
            variant_option_two_value: {
                type: string;
                description: string;
            };
            variant_option_three_value: {
                type: string;
                description: string;
            };
            sku: {
                type: string;
                description: string;
            };
            supply_price: {
                type: string;
                description: string;
            };
            price: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            attribute_id?: undefined;
            name?: undefined;
            values?: undefined;
        };
        required: string[];
    };
})[];
//# sourceMappingURL=variants.d.ts.map