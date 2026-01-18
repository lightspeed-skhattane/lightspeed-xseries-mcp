export class LightspeedApiClient {
    config;
    baseUrls;
    constructor(config) {
        this.config = config;
        const prefix = config.domainPrefix;
        this.baseUrls = {
            '0.9': `https://${prefix}.retail.lightspeed.app/api`,
            '2.0': `https://${prefix}.retail.lightspeed.app/api/2.0`,
            '2.0-beta': `https://${prefix}.retail.lightspeed.app/api/2.0-beta`,
            '2.1': `https://${prefix}.retail.lightspeed.app/api/2.1`,
            '3.0': `https://${prefix}.retail.lightspeed.app/api/3.0`,
            '3.0-beta': `https://${prefix}.retail.lightspeed.app/api/3.0-beta`,
        };
    }
    getBaseUrl(version) {
        const v = version || this.config.apiVersion || '2.0';
        return this.baseUrls[v] || this.baseUrls['2.0'];
    }
    async request(method, endpoint, options = {}) {
        const baseUrl = this.getBaseUrl(options.version);
        const url = new URL(`${baseUrl}${endpoint}`);
        if (options.params) {
            Object.entries(options.params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url.searchParams.append(key, String(value));
                }
            });
        }
        const headers = {
            'Authorization': `Bearer ${this.config.accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        const fetchOptions = {
            method,
            headers,
        };
        if (options.body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
            fetchOptions.body = JSON.stringify(options.body);
        }
        const response = await fetch(url.toString(), fetchOptions);
        if (!response.ok) {
            let errorMessage;
            try {
                const errorBody = await response.json();
                // Handle various error response formats from Lightspeed API
                if (errorBody.error && typeof errorBody.error === 'string') {
                    errorMessage = `${errorBody.error}${errorBody.error_description ? ` - ${errorBody.error_description}` : ''}`;
                }
                else if (errorBody.message) {
                    errorMessage = errorBody.message;
                }
                else if (errorBody.errors && Array.isArray(errorBody.errors)) {
                    errorMessage = errorBody.errors.map((e) => e.message || JSON.stringify(e)).join(', ');
                }
                else {
                    errorMessage = JSON.stringify(errorBody);
                }
            }
            catch {
                errorMessage = `HTTP ${response.status} ${response.statusText}`;
            }
            throw new Error(`Lightspeed API Error (${response.status}): ${errorMessage} [URL: ${url.toString()}]`);
        }
        if (response.status === 204) {
            return {};
        }
        return response.json();
    }
    // Generic CRUD methods
    async get(endpoint, options) {
        return this.request('GET', endpoint, options);
    }
    async post(endpoint, body, options) {
        return this.request('POST', endpoint, { ...options, body });
    }
    async put(endpoint, body, options) {
        return this.request('PUT', endpoint, { ...options, body });
    }
    async patch(endpoint, body, options) {
        return this.request('PATCH', endpoint, { ...options, body });
    }
    async delete(endpoint, options) {
        return this.request('DELETE', endpoint, options);
    }
    // Paginated list helper
    async list(endpoint, options) {
        return this.get(endpoint, options);
    }
    // Single resource helper
    async getOne(endpoint, options) {
        return this.get(endpoint, options);
    }
}
// Singleton instance management
let clientInstance = null;
export function initializeClient(config) {
    clientInstance = new LightspeedApiClient(config);
    return clientInstance;
}
export function getClient() {
    if (!clientInstance) {
        throw new Error('Lightspeed API client not initialized. Please provide domain_prefix and access_token.');
    }
    return clientInstance;
}
export function isClientInitialized() {
    return clientInstance !== null;
}
//# sourceMappingURL=api-client.js.map