import type { SerialNumber, SerialNumberCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listSerialNumbers(params: {
    page_size?: number;
    after?: string;
    product_id?: string;
    status?: string;
}): Promise<PaginatedResponse<SerialNumber>>;
export declare function getSerialNumber(serialNumberId: string): Promise<SingleResponse<SerialNumber>>;
export declare function createSerialNumber(data: SerialNumberCreateInput): Promise<SingleResponse<SerialNumber>>;
export declare function deleteSerialNumber(serialNumberId: string): Promise<void>;
export declare const serialNumberToolDefinitions: ({
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
})[];
//# sourceMappingURL=serial-numbers.d.ts.map