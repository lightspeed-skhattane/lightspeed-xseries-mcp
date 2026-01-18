import { getClient } from '../utils/api-client.js';
// Rule Tools (API 2.0 - Plus plan required)
export async function listRules(params) {
    const client = getClient();
    return client.list('/workflows/rules', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
export async function createRule(data) {
    const client = getClient();
    return client.post('/workflows/rules', data, { version: '2.0-beta' });
}
export async function deleteRule(ruleId) {
    const client = getClient();
    await client.delete(`/workflows/rules/${ruleId}`, { version: '2.0-beta' });
}
// Remote Rule Tools
export async function listRemoteRules(params) {
    const client = getClient();
    return client.list('/workflows/remote_rules', {
        version: '2.0',
        params: {
            page_size: params.page_size,
            after: params.after,
        },
    });
}
export async function createRemoteRule(data) {
    const client = getClient();
    return client.post('/workflows/remote_rules', data, { version: '2.0' });
}
export async function deleteRemoteRule(ruleId) {
    const client = getClient();
    await client.delete(`/workflows/remote_rules/${ruleId}`, { version: '2.0' });
}
// Tool definitions for MCP
export const ruleToolDefinitions = [
    {
        name: 'lightspeed_list_rules',
        description: 'List workflow rules (BETA)',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
            },
        },
    },
    {
        name: 'lightspeed_create_rule',
        description: 'Create a new workflow rule (BETA)',
        inputSchema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Rule name' },
                trigger: { type: 'string', description: 'Trigger event (e.g., sale.created, product.updated)' },
                conditions: { type: 'object', description: 'Conditions for the rule to fire' },
                actions: { type: 'object', description: 'Actions to perform when rule fires' },
                active: { type: 'boolean', description: 'Whether the rule is active' },
            },
            required: ['name', 'trigger'],
        },
    },
    {
        name: 'lightspeed_delete_rule',
        description: 'Delete a workflow rule (BETA)',
        inputSchema: {
            type: 'object',
            properties: {
                rule_id: { type: 'string', description: 'The rule ID to delete' },
            },
            required: ['rule_id'],
        },
    },
    {
        name: 'lightspeed_list_remote_rules',
        description: 'List remote webhook rules (BETA)',
        inputSchema: {
            type: 'object',
            properties: {
                page_size: { type: 'number', description: 'Number of results per page' },
                after: { type: 'string', description: 'Cursor for pagination' },
            },
        },
    },
    {
        name: 'lightspeed_create_remote_rule',
        description: 'Create a new remote webhook rule (BETA)',
        inputSchema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Rule name' },
                url: { type: 'string', description: 'Webhook URL to call' },
                trigger: { type: 'string', description: 'Trigger event' },
                active: { type: 'boolean', description: 'Whether the rule is active' },
            },
            required: ['name', 'url', 'trigger'],
        },
    },
    {
        name: 'lightspeed_delete_remote_rule',
        description: 'Delete a remote webhook rule (BETA)',
        inputSchema: {
            type: 'object',
            properties: {
                rule_id: { type: 'string', description: 'The rule ID to delete' },
            },
            required: ['rule_id'],
        },
    },
];
//# sourceMappingURL=rules.js.map