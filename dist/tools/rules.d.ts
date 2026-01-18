import type { Rule, RuleCreateInput, RemoteRule, RemoteRuleCreateInput, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listRules(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<Rule>>;
export declare function createRule(data: RuleCreateInput): Promise<SingleResponse<Rule>>;
export declare function deleteRule(ruleId: string): Promise<void>;
export declare function listRemoteRules(params: {
    page_size?: number;
    after?: string;
}): Promise<PaginatedResponse<RemoteRule>>;
export declare function createRemoteRule(data: RemoteRuleCreateInput): Promise<SingleResponse<RemoteRule>>;
export declare function deleteRemoteRule(ruleId: string): Promise<void>;
export declare const ruleToolDefinitions: ({
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
})[];
//# sourceMappingURL=rules.d.ts.map