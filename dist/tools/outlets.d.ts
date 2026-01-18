import type { Outlet, Register, Shift, Retailer, Tax, TaxCreateInput, User, UserSalesTotals, RegisterPaymentsSummary, ButtonLayout, OutletProductTax, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listOutlets(): Promise<PaginatedResponse<Outlet>>;
export declare function getOutlet(outletId: string): Promise<SingleResponse<Outlet>>;
export declare function listRegisters(params: {
    outlet_id?: string;
}): Promise<PaginatedResponse<Register>>;
export declare function getRegister(registerId: string): Promise<SingleResponse<Register>>;
export declare function listShifts(params: {
    page_size?: number;
    after?: string;
    outlet_id?: string;
    register_id?: string;
    user_id?: string;
    status?: string;
    since?: string;
}): Promise<PaginatedResponse<Shift>>;
export declare function getShift(shiftId: string): Promise<SingleResponse<Shift>>;
export declare function listTaxes(): Promise<PaginatedResponse<Tax>>;
export declare function getTax(taxId: string): Promise<SingleResponse<Tax>>;
export declare function createTax(data: TaxCreateInput): Promise<SingleResponse<Tax>>;
export declare function updateTax(taxId: string, data: Partial<TaxCreateInput>): Promise<SingleResponse<Tax>>;
export declare function deleteTax(taxId: string): Promise<void>;
export declare function listUsers(): Promise<PaginatedResponse<User>>;
export declare function getUser(userId: string): Promise<SingleResponse<User>>;
export declare function getCurrentUser(): Promise<SingleResponse<User>>;
export declare function bulkGetUsers(userIds: string[]): Promise<PaginatedResponse<User>>;
export declare function getUserSalesTotals(userId: string): Promise<SingleResponse<UserSalesTotals>>;
export declare function deleteUser(userId: string): Promise<void>;
export declare function deleteUserSessions(userId: string): Promise<void>;
export declare function updateUser(userId: string, data: {
    username?: string;
    display_name?: string;
    email?: string;
    role?: string;
    outlet_ids?: string[];
}): Promise<SingleResponse<User>>;
export declare function createUser(data: {
    username: string;
    display_name: string;
    email: string;
    password?: string;
    role?: string;
    outlet_ids?: string[];
}): Promise<SingleResponse<User>>;
export declare function openRegister(registerId: string, data: {
    opening_float?: number;
}): Promise<SingleResponse<Register>>;
export declare function closeRegister(registerId: string, data: {
    closing_float?: number;
}): Promise<SingleResponse<Register>>;
export declare function getRegisterPaymentsSummary(registerId: string): Promise<SingleResponse<RegisterPaymentsSummary>>;
export declare function listButtonLayouts(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<ButtonLayout>>;
export declare function getButtonLayout(layoutId: string): Promise<SingleResponse<ButtonLayout>>;
export declare function listOutletProductTaxes(params: {
    page_size?: number;
    after?: string;
    outlet_id?: string;
    product_id?: string;
}): Promise<PaginatedResponse<OutletProductTax>>;
export declare function getRetailer(): Promise<SingleResponse<Retailer>>;
export declare function getConfig(): Promise<SingleResponse<unknown>>;
export declare function createInventoryCount(outletId: string, data: {
    name?: string;
    due_at?: string;
}): Promise<SingleResponse<unknown>>;
export declare function getInventoryCount(outletId: string, countId: string): Promise<SingleResponse<unknown>>;
export declare function listInventoryCounts(outletId: string, params: {
    page_size?: number;
    after?: string;
    status?: string;
}): Promise<PaginatedResponse<unknown>>;
export declare function updateInventoryCount(outletId: string, countId: string, data: {
    status?: string;
    name?: string;
}): Promise<SingleResponse<unknown>>;
export declare function deleteInventoryCount(outletId: string, countId: string): Promise<void>;
export declare function listInventoryCountItems(outletId: string, countId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<unknown>>;
export declare function updateInventoryCountItem(outletId: string, countId: string, productId: string, data: {
    counted?: number;
}): Promise<SingleResponse<unknown>>;
export declare const outletToolDefinitions: ({
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
})[];
//# sourceMappingURL=outlets.d.ts.map