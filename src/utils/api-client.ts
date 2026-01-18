import type {
  LightspeedConfig,
  PaginatedResponse,
  SingleResponse,
} from '../types/lightspeed.js';

interface ErrorBody {
  error?: string;
  error_description?: string;
  message?: string;
  errors?: Array<{ message?: string }>;
}

export class LightspeedApiClient {
  private config: LightspeedConfig;
  private baseUrls: Record<string, string>;

  constructor(config: LightspeedConfig) {
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

  private getBaseUrl(version?: string): string {
    const v = version || this.config.apiVersion || '2.0';
    return this.baseUrls[v] || this.baseUrls['2.0'];
  }

  private async request<T>(
    method: string,
    endpoint: string,
    options: {
      version?: string;
      params?: Record<string, string | number | boolean | undefined>;
      body?: unknown;
    } = {}
  ): Promise<T> {
    const baseUrl = this.getBaseUrl(options.version);
    const url = new URL(`${baseUrl}${endpoint}`);

    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.config.accessToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
    };

    if (options.body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      fetchOptions.body = JSON.stringify(options.body);
    }

    const response = await fetch(url.toString(), fetchOptions);

    if (!response.ok) {
      let errorMessage: string;
      try {
        const errorBody = await response.json() as ErrorBody;
        // Handle various error response formats from Lightspeed API
        if (errorBody.error && typeof errorBody.error === 'string') {
          errorMessage = `${errorBody.error}${errorBody.error_description ? ` - ${errorBody.error_description}` : ''}`;
        } else if (errorBody.message) {
          errorMessage = errorBody.message;
        } else if (errorBody.errors && Array.isArray(errorBody.errors)) {
          errorMessage = errorBody.errors.map((e) => e.message || JSON.stringify(e)).join(', ');
        } else {
          errorMessage = JSON.stringify(errorBody);
        }
      } catch {
        errorMessage = `HTTP ${response.status} ${response.statusText}`;
      }
      throw new Error(`Lightspeed API Error (${response.status}): ${errorMessage} [URL: ${url.toString()}]`);
    }

    if (response.status === 204) {
      return {} as T;
    }

    return response.json() as Promise<T>;
  }

  // Generic CRUD methods
  async get<T>(endpoint: string, options?: { version?: string; params?: Record<string, string | number | boolean | undefined> }): Promise<T> {
    return this.request<T>('GET', endpoint, options);
  }

  async post<T>(endpoint: string, body: unknown, options?: { version?: string }): Promise<T> {
    return this.request<T>('POST', endpoint, { ...options, body });
  }

  async put<T>(endpoint: string, body: unknown, options?: { version?: string }): Promise<T> {
    return this.request<T>('PUT', endpoint, { ...options, body });
  }

  async patch<T>(endpoint: string, body: unknown, options?: { version?: string }): Promise<T> {
    return this.request<T>('PATCH', endpoint, { ...options, body });
  }

  async delete<T>(endpoint: string, options?: { version?: string }): Promise<T> {
    return this.request<T>('DELETE', endpoint, options);
  }

  // Paginated list helper
  async list<T>(
    endpoint: string,
    options?: {
      version?: string;
      params?: Record<string, string | number | boolean | undefined>;
    }
  ): Promise<PaginatedResponse<T>> {
    return this.get<PaginatedResponse<T>>(endpoint, options);
  }

  // Single resource helper
  async getOne<T>(
    endpoint: string,
    options?: { version?: string }
  ): Promise<SingleResponse<T>> {
    return this.get<SingleResponse<T>>(endpoint, options);
  }
}

// Singleton instance management
let clientInstance: LightspeedApiClient | null = null;

export function initializeClient(config: LightspeedConfig): LightspeedApiClient {
  clientInstance = new LightspeedApiClient(config);
  return clientInstance;
}

export function getClient(): LightspeedApiClient {
  if (!clientInstance) {
    throw new Error('Lightspeed API client not initialized. Please provide domain_prefix and access_token.');
  }
  return clientInstance;
}

export function isClientInitialized(): boolean {
  return clientInstance !== null;
}
