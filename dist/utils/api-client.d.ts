import type { LightspeedConfig, PaginatedResponse, SingleResponse } from '../types/lightspeed.js';
export declare class LightspeedApiClient {
    private config;
    private baseUrls;
    constructor(config: LightspeedConfig);
    private getBaseUrl;
    private request;
    get<T>(endpoint: string, options?: {
        version?: string;
        params?: Record<string, string | number | boolean | undefined>;
    }): Promise<T>;
    post<T>(endpoint: string, body: unknown, options?: {
        version?: string;
    }): Promise<T>;
    put<T>(endpoint: string, body: unknown, options?: {
        version?: string;
    }): Promise<T>;
    patch<T>(endpoint: string, body: unknown, options?: {
        version?: string;
    }): Promise<T>;
    delete<T>(endpoint: string, options?: {
        version?: string;
    }): Promise<T>;
    list<T>(endpoint: string, options?: {
        version?: string;
        params?: Record<string, string | number | boolean | undefined>;
    }): Promise<PaginatedResponse<T>>;
    getOne<T>(endpoint: string, options?: {
        version?: string;
    }): Promise<SingleResponse<T>>;
}
export declare function initializeClient(config: LightspeedConfig): LightspeedApiClient;
export declare function getClient(): LightspeedApiClient;
export declare function isClientInitialized(): boolean;
//# sourceMappingURL=api-client.d.ts.map