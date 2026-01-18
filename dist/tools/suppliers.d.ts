import type { Supplier, SupplierCreateInput, Brand, BrandCreateInput, Tag, TagCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listSuppliers(params: {
    page_size?: number;
    after?: string;
    since?: string;
}): Promise<PaginatedResponse<Supplier>>;
export declare function getSupplier(supplierId: string): Promise<SingleResponse<Supplier>>;
export declare function createSupplier(data: SupplierCreateInput): Promise<SingleResponse<Supplier>>;
export declare function updateSupplier(supplierId: string, data: Partial<SupplierCreateInput>): Promise<SingleResponse<Supplier>>;
export declare function deleteSupplier(supplierId: string): Promise<void>;
export declare function listBrands(params: {
    page_size?: number;
    after?: string;
    since?: string;
    deleted?: boolean;
}): Promise<PaginatedResponse<Brand>>;
export declare function getBrand(brandId: string): Promise<SingleResponse<Brand>>;
export declare function createBrand(data: BrandCreateInput): Promise<SingleResponse<Brand>>;
export declare function updateBrand(brandId: string, data: Partial<BrandCreateInput>): Promise<SingleResponse<Brand>>;
export declare function deleteBrand(brandId: string): Promise<void>;
export declare function listTags(params: {
    page_size?: number;
    after?: string;
    since?: string;
    deleted?: boolean;
}): Promise<PaginatedResponse<Tag>>;
export declare function getTag(tagId: string): Promise<SingleResponse<Tag>>;
export declare function createTag(data: TagCreateInput): Promise<SingleResponse<Tag>>;
export declare function updateTag(tagId: string, data: Partial<TagCreateInput>): Promise<SingleResponse<Tag>>;
export declare function deleteTag(tagId: string): Promise<void>;
export declare const supplierToolDefinitions: ({
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
            supplier_id?: undefined;
            name?: undefined;
            description?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
            tag_id?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            supplier_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            name?: undefined;
            description?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
            tag_id?: undefined;
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
            email: {
                type: string;
                description: string;
            };
            phone: {
                type: string;
                description: string;
            };
            mobile: {
                type: string;
                description: string;
            };
            website: {
                type: string;
                description: string;
            };
            physical_address_1: {
                type: string;
                description: string;
            };
            physical_address_2: {
                type: string;
                description: string;
            };
            physical_city: {
                type: string;
                description: string;
            };
            physical_postcode: {
                type: string;
                description: string;
            };
            physical_state: {
                type: string;
                description: string;
            };
            physical_country_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            supplier_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
            tag_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            supplier_id: {
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
            email: {
                type: string;
                description: string;
            };
            phone: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
            tag_id?: undefined;
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
            since: {
                type: string;
                description: string;
            };
            deleted: {
                type: string;
                description: string;
            };
            supplier_id?: undefined;
            name?: undefined;
            description?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            brand_id?: undefined;
            tag_id?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            brand_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            supplier_id?: undefined;
            name?: undefined;
            description?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            tag_id?: undefined;
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
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            supplier_id?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
            tag_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            brand_id: {
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
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            supplier_id?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            tag_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            tag_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            supplier_id?: undefined;
            name?: undefined;
            description?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
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
            since?: undefined;
            supplier_id?: undefined;
            description?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
            tag_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            tag_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            since?: undefined;
            supplier_id?: undefined;
            description?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            company_name?: undefined;
            email?: undefined;
            phone?: undefined;
            mobile?: undefined;
            website?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            deleted?: undefined;
            brand_id?: undefined;
        };
        required: string[];
    };
})[];
//# sourceMappingURL=suppliers.d.ts.map