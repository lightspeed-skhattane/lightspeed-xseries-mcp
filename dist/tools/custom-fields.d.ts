import type { CustomField, CustomFieldCreateInput, CustomFieldValue, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare function listCustomFields(params: {
    page_size?: number;
    after?: string;
    entity_type: string;
}): Promise<PaginatedResponse<CustomField>>;
export declare function createCustomField(data: CustomFieldCreateInput): Promise<SingleResponse<CustomField>>;
export declare function updateCustomField(fieldId: string, data: Partial<CustomFieldCreateInput>): Promise<SingleResponse<CustomField>>;
export declare function deleteCustomField(fieldId: string): Promise<void>;
export declare function listCustomFieldValues(params: {
    page_size?: number;
    after?: string;
    entity_type?: string;
    entity_id?: string;
    custom_field_id?: string;
}): Promise<PaginatedResponse<CustomFieldValue>>;
export declare function setCustomFieldValues(data: {
    entity_type: string;
    entity_id: string;
    values: {
        custom_field_id: string;
        value: string;
    }[];
}): Promise<void>;
export declare const customFieldToolDefinitions: ({
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
            entity_type: {
                type: string;
                description: string;
            };
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            field_id?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
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
            entity_type: {
                type: string;
                description: string;
            };
            field_type: {
                type: string;
                description: string;
            };
            options: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            required: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            field_id?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            field_id: {
                type: string;
                description: string;
            };
            name: {
                type: string;
                description: string;
            };
            options: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            required: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            entity_type?: undefined;
            field_type?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            field_id: {
                type: string;
                description: string;
            };
            page_size?: undefined;
            after?: undefined;
            entity_type?: undefined;
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            entity_id?: undefined;
            custom_field_id?: undefined;
            values?: undefined;
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
            entity_type: {
                type: string;
                description: string;
            };
            entity_id: {
                type: string;
                description: string;
            };
            custom_field_id: {
                type: string;
                description: string;
            };
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            field_id?: undefined;
            values?: undefined;
        };
        required?: undefined;
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            entity_type: {
                type: string;
                description: string;
            };
            entity_id: {
                type: string;
                description: string;
            };
            values: {
                type: string;
                description: string;
                items: {
                    type: string;
                    properties: {
                        custom_field_id: {
                            type: string;
                            description: string;
                        };
                        value: {
                            type: string;
                            description: string;
                        };
                    };
                    required: string[];
                };
            };
            page_size?: undefined;
            after?: undefined;
            name?: undefined;
            field_type?: undefined;
            options?: undefined;
            required?: undefined;
            field_id?: undefined;
            custom_field_id?: undefined;
        };
        required: string[];
    };
})[];
//# sourceMappingURL=custom-fields.d.ts.map