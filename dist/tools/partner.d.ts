import type { PartnerSubscription, SubscriptionToken, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listPartnerSubscriptions(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<PartnerSubscription>>;
export declare function getPartnerSubscription(subscriptionId: string): Promise<SingleResponse<PartnerSubscription>>;
export declare function createSubscriptionToken(data: {
    retailer_id: string;
}): Promise<SingleResponse<SubscriptionToken>>;
export declare function getSubscriptionByToken(token: string): Promise<SingleResponse<PartnerSubscription>>;
export declare function createUpdateSubscriptionToken(data: {
    subscription_id: string;
}): Promise<SingleResponse<SubscriptionToken>>;
export declare const partnerToolDefinitions: ({
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
//# sourceMappingURL=partner.d.ts.map