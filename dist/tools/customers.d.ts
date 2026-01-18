import type { Customer, CustomerCreateInput, CustomerGroup, CustomerGroupCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listCustomers(params: {
    page_size?: number;
    after?: string;
    before?: string;
    id?: string;
    code?: string;
    email?: string;
    since?: string;
    deleted?: boolean;
}): Promise<PaginatedResponse<Customer>>;
export declare function getCustomer(customerId: string): Promise<SingleResponse<Customer>>;
export declare function createCustomer(data: CustomerCreateInput): Promise<SingleResponse<Customer>>;
export declare function updateCustomer(customerId: string, data: Partial<CustomerCreateInput>): Promise<SingleResponse<Customer>>;
export declare function deleteCustomer(customerId: string): Promise<void>;
export declare function listCustomerGroups(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<CustomerGroup>>;
export declare function getCustomerGroup(groupId: string): Promise<SingleResponse<CustomerGroup>>;
export declare function createCustomerGroup(data: CustomerGroupCreateInput): Promise<SingleResponse<CustomerGroup>>;
export declare function updateCustomerGroup(groupId: string, data: Partial<CustomerGroupCreateInput>): Promise<SingleResponse<CustomerGroup>>;
export declare function deleteCustomerGroup(groupId: string): Promise<void>;
export declare function addCustomersToGroup(groupId: string, customerIds: string[]): Promise<void>;
export declare function removeCustomersFromGroup(groupId: string, customerIds: string[]): Promise<void>;
export declare function getGroupCustomers(groupId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<Customer>>;
export declare function bulkUpdateCustomerTaxes(data: {
    customer_ids: string[];
    tax_id: string;
}): Promise<void>;
export declare const customerToolDefinitions: ({
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
})[];
//# sourceMappingURL=customers.d.ts.map