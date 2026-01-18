import type { Channel, RequestLog, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listChannels(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<Channel>>;
export declare function listRequestLogs(params: {
    page_size?: number;
    after?: string;
    channel_id?: string;
}): Promise<PaginatedResponse<RequestLog>>;
export declare function getRequestLog(requestId: string): Promise<SingleResponse<RequestLog>>;
export declare function getRequestLogText(requestId: string): Promise<{
    text: string;
}>;
export declare const channelToolDefinitions: ({
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
})[];
//# sourceMappingURL=channels.d.ts.map