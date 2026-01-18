import type { Webhook, WebhookCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listWebhooks(): Promise<PaginatedResponse<Webhook>>;
export declare function getWebhook(webhookId: string): Promise<SingleResponse<Webhook>>;
export declare function createWebhook(data: WebhookCreateInput): Promise<SingleResponse<Webhook>>;
export declare function updateWebhook(webhookId: string, data: Partial<WebhookCreateInput>): Promise<SingleResponse<Webhook>>;
export declare function deleteWebhook(webhookId: string): Promise<void>;
export declare function listWebhooks2(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<Webhook>>;
export declare function createWebhook2(data: {
    type: string;
    url: string;
    active?: boolean;
    headers?: Record<string, string>;
}): Promise<SingleResponse<Webhook>>;
export declare const WEBHOOK_TYPES: readonly ["customer.update", "customer.delete", "product.update", "product.delete", "sale.update", "sale.delete", "inventory.update", "consignment.update", "consignment.delete", "brand.update", "brand.delete", "supplier.update", "supplier.delete", "outlet.update", "register.update", "user.update", "tag.update", "tag.delete", "price_book.update", "price_book.delete", "customer_group.update", "customer_group.delete"];
export declare const webhookToolDefinitions: ({
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
})[];
//# sourceMappingURL=webhooks.d.ts.map