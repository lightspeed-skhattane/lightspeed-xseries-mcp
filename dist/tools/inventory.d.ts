import type { Inventory, InventoryUpdateInput, Consignment, ConsignmentCreateInput, ConsignmentProduct, ConsignmentProductCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listInventory(params: {
    page_size?: number;
    after?: string;
    product_id?: string;
    outlet_id?: string;
}): Promise<PaginatedResponse<Inventory>>;
export declare function getInventory(inventoryId: string): Promise<SingleResponse<Inventory>>;
export declare function updateInventory(inventoryId: string, data: Partial<InventoryUpdateInput>): Promise<SingleResponse<Inventory>>;
export declare function listConsignments(params: {
    page_size?: number;
    after?: string;
    outlet_id?: string;
    supplier_id?: string;
    type?: string;
    status?: string;
    since?: string;
}): Promise<PaginatedResponse<Consignment>>;
export declare function getConsignment(consignmentId: string): Promise<SingleResponse<Consignment>>;
export declare function createConsignment(data: ConsignmentCreateInput): Promise<SingleResponse<Consignment>>;
export declare function updateConsignment(consignmentId: string, data: Partial<ConsignmentCreateInput>): Promise<SingleResponse<Consignment>>;
export declare function deleteConsignment(consignmentId: string): Promise<void>;
export declare function listConsignmentProducts(consignmentId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<ConsignmentProduct>>;
export declare function addConsignmentProduct(consignmentId: string, data: ConsignmentProductCreateInput): Promise<SingleResponse<ConsignmentProduct>>;
export declare function updateConsignmentProduct(consignmentId: string, productId: string, data: Partial<ConsignmentProductCreateInput>): Promise<SingleResponse<ConsignmentProduct>>;
export declare function deleteConsignmentProduct(consignmentId: string, productId: string): Promise<void>;
export declare function getConsignmentTotals(consignmentId: string): Promise<SingleResponse<unknown>>;
export declare function bulkUpdateConsignmentProducts(consignmentId: string, data: {
    products: ConsignmentProductCreateInput[];
}): Promise<PaginatedResponse<ConsignmentProduct>>;
export declare const inventoryToolDefinitions: ({
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
})[];
//# sourceMappingURL=inventory.d.ts.map