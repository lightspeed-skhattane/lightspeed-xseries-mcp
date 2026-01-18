import type { SecurityEvent, AuditLog, PaginatedResponse } from '../types/lightspeed.js';
export declare function listSecurityEvents(params: {
    page_size?: number;
    after?: string;
    user_id?: string;
    event_type?: string;
    since?: string;
}): Promise<PaginatedResponse<SecurityEvent>>;
export declare function listAuditLogs(params: {
    page_size?: number;
    after?: string;
    user_id?: string;
    entity_type?: string;
    entity_id?: string;
    action?: string;
    since?: string;
}): Promise<PaginatedResponse<AuditLog>>;
export declare const securityToolDefinitions: ({
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
})[];
//# sourceMappingURL=security.d.ts.map