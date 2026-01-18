import type { ServiceOrder, ServiceOrderCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listServices(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<ServiceOrder>>;
export declare function getService(serviceId: string): Promise<SingleResponse<ServiceOrder>>;
export declare function createService(data: ServiceOrderCreateInput): Promise<SingleResponse<ServiceOrder>>;
export declare function listCustomerServices(customerId: string, params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<ServiceOrder>>;
export declare function getServicesAgenda(outletId: string, params: {
    date?: string;
}): Promise<PaginatedResponse<ServiceOrder>>;
export declare const serviceToolDefinitions: ({
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
})[];
//# sourceMappingURL=services.d.ts.map