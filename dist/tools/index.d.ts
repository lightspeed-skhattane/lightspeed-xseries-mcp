export * from './customers.js';
export * from './products.js';
export * from './sales.js';
export * from './inventory.js';
export * from './outlets.js';
export * from './suppliers.js';
export * from './webhooks.js';
export * from './pricing.js';
export * from './variants.js';
export * from './services.js';
export * from './serial-numbers.js';
export * from './quotes.js';
export * from './search.js';
export * from './channels.js';
export * from './security.js';
export * from './custom-fields.js';
export * from './rules.js';
export * from './partner.js';
export declare const allToolDefinitions: ({
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
            id: {
                type: string;
                description: string;
            };
            code: {
                type: string;
                description: string;
            };
            email: {
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
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            group_id?: undefined;
            name?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
        };
        required?: undefined;
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
            before?: undefined;
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            group_id?: undefined;
            name?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
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
            company_name: {
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
            customer_group_id: {
                type: string;
                description: string;
            };
            enable_loyalty: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            date_of_birth: {
                type: string;
                description: string;
            };
            sex: {
                type: string;
                description: string;
            };
            do_not_email: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            id?: undefined;
            code?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            group_id?: undefined;
            name?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
        };
        required?: undefined;
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
            company_name: {
                type: string;
                description: string;
            };
            customer_group_id: {
                type: string;
                description: string;
            };
            enable_loyalty: {
                type: string;
                description: string;
            };
            note: {
                type: string;
                description: string;
            };
            do_not_email: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            id?: undefined;
            code?: undefined;
            since?: undefined;
            deleted?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            group_id?: undefined;
            name?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
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
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            group_id?: undefined;
            name?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            group_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            name?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
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
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            group_id?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            group_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            group_id: {
                type: string;
                description: string;
            };
            customer_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            name?: undefined;
            tax_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            group_id: {
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
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            name?: undefined;
            customer_ids?: undefined;
            tax_id?: undefined;
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
            tax_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            before?: undefined;
            id?: undefined;
            code?: undefined;
            email?: undefined;
            since?: undefined;
            deleted?: undefined;
            customer_id?: undefined;
            customer_code?: undefined;
            first_name?: undefined;
            last_name?: undefined;
            phone?: undefined;
            mobile?: undefined;
            company_name?: undefined;
            physical_address_1?: undefined;
            physical_address_2?: undefined;
            physical_city?: undefined;
            physical_postcode?: undefined;
            physical_state?: undefined;
            physical_country_id?: undefined;
            customer_group_id?: undefined;
            enable_loyalty?: undefined;
            note?: undefined;
            date_of_birth?: undefined;
            sex?: undefined;
            do_not_email?: undefined;
            group_id?: undefined;
            name?: undefined;
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
            outlet_id: {
                type: string;
                description: string;
            };
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            consignment_id?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            inventory_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            outlet_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            consignment_id?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            inventory_id: {
                type: string;
                description: string;
            };
            inventory_level: {
                type: string;
                description: string;
            };
            reorder_point: {
                type: string;
                description: string;
            };
            restock_level: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            outlet_id?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            consignment_id?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
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
            outlet_id: {
                type: string;
                description: string;
            };
            supplier_id: {
                type: string;
                description: string;
            };
            type: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            since: {
                type: string;
                description: string;
            };
            product_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            consignment_id?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            consignment_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            outlet_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
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
            type: {
                type: string;
                description: string;
            };
            supplier_id: {
                type: string;
                description: string;
            };
            source_outlet_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            consignment_date: {
                type: string;
                description: string;
            };
            due_at: {
                type: string;
                description: string;
            };
            reference: {
                type: string;
                description: string;
            };
            supplier_invoice: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            since?: undefined;
            consignment_id?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            consignment_id: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            due_at: {
                type: string;
                description: string;
            };
            reference: {
                type: string;
                description: string;
            };
            supplier_invoice: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            outlet_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            since?: undefined;
            source_outlet_id?: undefined;
            consignment_date?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            consignment_id: {
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
            product_id?: undefined;
            outlet_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            consignment_id: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            count: {
                type: string;
                description: string;
            };
            cost: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            outlet_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            consignment_id: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            count: {
                type: string;
                description: string;
            };
            cost: {
                type: string;
                description: string;
            };
            received: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            outlet_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            products?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            consignment_id: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            outlet_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
            products?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            consignment_id: {
                type: string;
                description: string;
            };
            products: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        product_id: {
                            type: string;
                            description: string;
                        };
                        count: {
                            type: string;
                            description: string;
                        };
                        cost: {
                            type: string;
                            description: string;
                        };
                        received: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            outlet_id?: undefined;
            inventory_id?: undefined;
            inventory_level?: undefined;
            reorder_point?: undefined;
            restock_level?: undefined;
            supplier_id?: undefined;
            type?: undefined;
            status?: undefined;
            since?: undefined;
            source_outlet_id?: undefined;
            name?: undefined;
            consignment_date?: undefined;
            due_at?: undefined;
            reference?: undefined;
            supplier_invoice?: undefined;
            count?: undefined;
            cost?: undefined;
            received?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required?: undefined;
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
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            register_id: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            outlet_id: {
                type: string;
                description: string;
            };
            register_id: {
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
            since: {
                type: string;
                description: string;
            };
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            shift_id: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            tax_id: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            rate: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            tax_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            rate: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            user_id: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            user_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            user_id: {
                type: string;
                description: string;
            };
            username: {
                type: string;
                description: string;
            };
            display_name: {
                type: string;
                description: string;
            };
            email: {
                type: string;
                description: string;
            };
            role: {
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
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            username: {
                type: string;
                description: string;
            };
            display_name: {
                type: string;
                description: string;
            };
            email: {
                type: string;
                description: string;
            };
            password: {
                type: string;
                description: string;
            };
            role: {
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
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            register_id: {
                type: string;
                description: string;
            };
            opening_float: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            register_id: {
                type: string;
                description: string;
            };
            closing_float: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            outlet_id?: undefined;
            register_id?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            layout_id: {
                type: string;
                description: string;
            };
            outlet_id?: undefined;
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            outlet_id: {
                type: string;
                description: string;
            };
            product_id: {
                type: string;
                description: string;
            };
            register_id?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
        };
        required?: undefined;
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
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            register_id?: undefined;
            user_id?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            count_id: {
                type: string;
                description: string;
            };
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            name: {
                type: string;
                description: string;
            };
            due_at: {
                type: string;
                description: string;
            };
            product_ids: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            count_id?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            count_id: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            count_id: {
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
            register_id?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
            item_id?: undefined;
            counted?: undefined;
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
            count_id: {
                type: string;
                description: string;
            };
            item_id: {
                type: string;
                description: string;
            };
            counted: {
                type: string;
                description: string;
            };
            register_id?: undefined;
            page_size?: undefined;
            after?: undefined;
            user_id?: undefined;
            status?: undefined;
            since?: undefined;
            shift_id?: undefined;
            tax_id?: undefined;
            name?: undefined;
            rate?: undefined;
            user_ids?: undefined;
            username?: undefined;
            display_name?: undefined;
            email?: undefined;
            role?: undefined;
            outlet_ids?: undefined;
            password?: undefined;
            opening_float?: undefined;
            closing_float?: undefined;
            layout_id?: undefined;
            product_id?: undefined;
            due_at?: undefined;
            product_ids?: undefined;
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
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            webhook_id?: undefined;
            type?: undefined;
            url?: undefined;
            active?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            webhook_id: {
                type: string;
                description: string;
            };
            type?: undefined;
            url?: undefined;
            active?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            type: {
                type: string;
                description: string;
                enum: readonly ["customer.update", "customer.delete", "product.update", "product.delete", "sale.update", "sale.delete", "inventory.update", "consignment.update", "consignment.delete", "brand.update", "brand.delete", "supplier.update", "supplier.delete", "outlet.update", "register.update", "user.update", "tag.update", "tag.delete", "price_book.update", "price_book.delete", "customer_group.update", "customer_group.delete"];
            };
            url: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            webhook_id?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            webhook_id: {
                type: string;
                description: string;
            };
            url: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            type?: undefined;
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
            service_id?: undefined;
            outlet_id?: undefined;
            customer_id?: undefined;
            description?: undefined;
            status?: undefined;
            scheduled_at?: undefined;
            assigned_user_id?: undefined;
            date?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            service_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            outlet_id?: undefined;
            customer_id?: undefined;
            description?: undefined;
            status?: undefined;
            scheduled_at?: undefined;
            assigned_user_id?: undefined;
            date?: undefined;
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
            description: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                description: string;
            };
            scheduled_at: {
                type: string;
                description: string;
            };
            assigned_user_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            service_id?: undefined;
            date?: undefined;
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
            page_size: {
                type: string;
                description: string;
            };
            after: {
                type: string;
                description: string;
            };
            service_id?: undefined;
            outlet_id?: undefined;
            description?: undefined;
            status?: undefined;
            scheduled_at?: undefined;
            assigned_user_id?: undefined;
            date?: undefined;
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
            date: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            service_id?: undefined;
            customer_id?: undefined;
            description?: undefined;
            status?: undefined;
            scheduled_at?: undefined;
            assigned_user_id?: undefined;
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
            status: {
                type: string;
                description: string;
            };
            serial_number_id?: undefined;
            serial?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            serial_number_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            product_id?: undefined;
            status?: undefined;
            serial?: undefined;
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
            serial: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            status?: undefined;
            serial_number_id?: undefined;
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
} | {
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
            channel_id?: undefined;
            request_id?: undefined;
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
            channel_id: {
                type: string;
                description: string;
            };
            request_id?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            request_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            channel_id?: undefined;
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
            user_id: {
                type: string;
                description: string;
            };
            event_type: {
                type: string;
                description: string;
            };
            since: {
                type: string;
                description: string;
            };
            entity_type?: undefined;
            entity_id?: undefined;
            action?: undefined;
        };
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
            user_id: {
                type: string;
                description: string;
            };
            entity_type: {
                type: string;
                description: string;
            };
            entity_id: {
                type: string;
                description: string;
            };
            action: {
                type: string;
                description: string;
            };
            since: {
                type: string;
                description: string;
            };
            event_type?: undefined;
        };
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
            entity_type: {
                type: string;
                description: string;
            };
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            field_id?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
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
            entity_type: {
                type: string;
                description: string;
            };
            field_type: {
                type: string;
                description: string;
            };
            options: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            required: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            field_id?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            field_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            options: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            required: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            entity_type?: undefined;
            field_type?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            field_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            entity_type?: undefined;
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
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
            entity_type: {
                type: string;
                description: string;
            };
            entity_id: {
                type: string;
                description: string;
            };
            custom_field_id: {
                type: string;
                description: string;
            };
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            field_id?: undefined;
            values?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            entity_type: {
                type: string;
                description: string;
            };
            entity_id: {
                type: string;
                description: string;
            };
            values: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        custom_field_id: {
                            type: string;
                            description: string;
                        };
                        value: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            field_id?: undefined;
            custom_field_id?: undefined;
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
            name?: undefined;
            trigger?: undefined;
            conditions?: undefined;
            actions?: undefined;
            active?: undefined;
            rule_id?: undefined;
            url?: undefined;
        };
        required?: undefined;
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
            trigger: {
                type: string;
                description: string;
            };
            conditions: {
                type: string;
                description: string;
            };
            actions: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            rule_id?: undefined;
            url?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            rule_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            name?: undefined;
            trigger?: undefined;
            conditions?: undefined;
            actions?: undefined;
            active?: undefined;
            url?: undefined;
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
            url: {
                type: string;
                description: string;
            };
            trigger: {
                type: string;
                description: string;
            };
            active: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            conditions?: undefined;
            actions?: undefined;
            rule_id?: undefined;
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
            subscription_id?: undefined;
            retailer_id?: undefined;
            token?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            subscription_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            retailer_id?: undefined;
            token?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            retailer_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            subscription_id?: undefined;
            token?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            token: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            subscription_id?: undefined;
            retailer_id?: undefined;
        };
        required: string[];
    };
})[];
//# sourceMappingURL=index.d.ts.map