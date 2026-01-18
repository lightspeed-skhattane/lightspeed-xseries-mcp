import type { Product, ProductCreateInput, ProductType, ProductTypeCreateInput, ProductCategory, ProductCategoryCreateInput, ProductImage, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listProducts(params: {
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
}): Promise<PaginatedResponse<Product>>;
export declare function getProduct(productId: string): Promise<SingleResponse<Product>>;
export declare function createProduct(data: ProductCreateInput): Promise<SingleResponse<Product>>;
export declare function updateProduct(productId: string, data: Partial<ProductCreateInput>): Promise<SingleResponse<Product>>;
export declare function deleteProduct(productId: string): Promise<void>;
export declare function deleteProductFamily(familyId: string): Promise<void>;
export declare function getProductInventory(productId: string): Promise<PaginatedResponse<unknown>>;
export declare function getProductPriceBooks(productId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<unknown>>;
export declare function listProductTypes(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<ProductType>>;
export declare function getProductType(typeId: string): Promise<SingleResponse<ProductType>>;
export declare function createProductType(data: ProductTypeCreateInput): Promise<SingleResponse<ProductType>>;
export declare function listProductCategories(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<ProductCategory>>;
export declare function getProductCategory(categoryId: string): Promise<SingleResponse<ProductCategory>>;
export declare function createProductCategory(data: ProductCategoryCreateInput): Promise<SingleResponse<ProductCategory>>;
export declare function deleteProductCategories(categoryIds: string[]): Promise<void>;
export declare function listProducts3(params: {
    page_size?: number;
    after?: string;
    before?: string;
    since?: string;
    deleted?: boolean;
    active?: boolean;
}): Promise<PaginatedResponse<Product>>;
export declare function getProduct3(productId: string): Promise<SingleResponse<Product>>;
export declare function listProductImages(productId: string): Promise<PaginatedResponse<ProductImage>>;
export declare function uploadProductImage(productId: string, imageUrl: string): Promise<SingleResponse<ProductImage>>;
export declare function deleteProductImage(productId: string, imageId: string): Promise<void>;
export declare function getProductImageData(productId: string, imageId: string): Promise<SingleResponse<ProductImage>>;
export declare function setProductImagePosition(productId: string, imageId: string, position: number): Promise<SingleResponse<ProductImage>>;
export declare const productToolDefinitions: ({
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
            deleted: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            sku: {
                type: string;
                description: string;
            };
            handle: {
                type: string;
                description: string;
            };
            tag_id: {
                type: string;
                description: string;
            };
            brand_id: {
                type: string;
                description: string;
            };
            supplier_id: {
                type: string;
                description: string;
            };
            product_type_id: {
                type: string;
                description: string;
            };
            product_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
        };
        required?: undefined;
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
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            description: {
                type: string;
                description: string;
            };
            sku: {
                type: string;
                description: string;
            };
            handle: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            price: {
                type: string;
                description: string;
            };
            supply_price: {
                type: string;
                description: string;
            };
            tax_id: {
                type: string;
                description: string;
            };
            brand_id: {
                type: string;
                description: string;
            };
            supplier_id: {
                type: string;
                description: string;
            };
            product_type_id: {
                type: string;
                description: string;
            };
            tag_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            track_inventory: {
                type: string;
                description: string;
            };
            loyalty_value: {
                type: string;
                description: string;
            };
            account_code: {
                type: string;
                description: string;
            };
            account_code_purchase: {
                type: string;
                description: string;
            };
            variant_option_one_name: {
                type: string;
                description: string;
            };
            variant_option_one_value: {
                type: string;
                description: string;
            };
            variant_option_two_name: {
                type: string;
                description: string;
            };
            variant_option_two_value: {
                type: string;
                description: string;
            };
            variant_option_three_name: {
                type: string;
                description: string;
            };
            variant_option_three_value: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            tag_id?: undefined;
            product_id?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            name: {
                type: string;
                description: string;
            };
            description: {
                type: string;
                description: string;
            };
            sku: {
                type: string;
                description: string;
            };
            handle: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            price: {
                type: string;
                description: string;
            };
            supply_price: {
                type: string;
                description: string;
            };
            tax_id: {
                type: string;
                description: string;
            };
            brand_id: {
                type: string;
                description: string;
            };
            supplier_id: {
                type: string;
                description: string;
            };
            product_type_id: {
                type: string;
                description: string;
            };
            tag_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            track_inventory: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            tag_id?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            type_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            category_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            parent_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            image_url: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            image_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            family_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
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
            image_id: {
                type: string;
                description: string;
            };
            position: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            family_id?: undefined;
            category_ids?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            category_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            since?: undefined;
            deleted?: undefined;
            active?: undefined;
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
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
            before: {
                type: string;
                description: string;
            };
            since: {
                type: string;
                description: string;
            };
            deleted: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            sku?: undefined;
            handle?: undefined;
            tag_id?: undefined;
            brand_id?: undefined;
            supplier_id?: undefined;
            product_type_id?: undefined;
            product_id?: undefined;
            name?: undefined;
            description?: undefined;
            price?: undefined;
            supply_price?: undefined;
            tax_id?: undefined;
            tag_ids?: undefined;
            track_inventory?: undefined;
            loyalty_value?: undefined;
            account_code?: undefined;
            account_code_purchase?: undefined;
            variant_option_one_name?: undefined;
            variant_option_one_value?: undefined;
            variant_option_two_name?: undefined;
            variant_option_two_value?: undefined;
            variant_option_three_name?: undefined;
            variant_option_three_value?: undefined;
            type_id?: undefined;
            category_id?: undefined;
            parent_id?: undefined;
            image_url?: undefined;
            image_id?: undefined;
            family_id?: undefined;
            position?: undefined;
            category_ids?: undefined;
        };
        required?: undefined;
    };
})[];
//# sourceMappingURL=products.d.ts.map