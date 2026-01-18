# Lightspeed Retail (X-Series) MCP Server

A comprehensive Model Context Protocol (MCP) server for the Lightspeed Retail (X-Series) API. This server provides full coverage of the Lightspeed API, enabling AI assistants to interact with your Lightspeed retail data.

## Installation

### Option 1: NPM (Recommended)

The easiest way to use this MCP server:

```bash
npx lightspeed-xseries-mcp
```

Or install globally:

```bash
npm install -g lightspeed-xseries-mcp
lightspeed-xseries-mcp
```

### Option 2: Smithery

Install directly from [Smithery](https://smithery.ai):

1. Go to [smithery.ai](https://smithery.ai)
2. Search for "lightspeed-xseries-mcp"
3. Click "Install" and follow the prompts

### Option 3: From Source

```bash
git clone https://github.com/lightspeed-skhattane/lightspeed-xseries-mcp.git
cd lightspeed-xseries-mcp
npm install
npm run build
```

## Quick Setup

### Claude Desktop

Add to your `claude_desktop_config.json`:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      }
    }
  }
}
```

### Other Tools

See the **[Getting Started Guide](./docs/getting-started.md)** for complete setup instructions for all supported tools.

**Supported AI tools:**
- Claude Desktop / Claude Code
- Cursor
- VS Code (Continue.dev)
- Gemini CLI
- ChatGPT (Developer Mode)
- Grok (xAI)

## Features

This MCP server provides comprehensive coverage of Lightspeed X-Series API endpoints across multiple API versions (0.9, 2.0, 2.0-beta, 2.1, 3.0, 3.0-beta).

> **Note**: Some features use beta API endpoints (`2.0-beta`, `3.0-beta`) which may have limited availability or change without notice. Partner API requires a Lightspeed partner account.

### API Coverage

| Category | Tools | Description | API |
|----------|-------|-------------|-----|
| **Customers** | 14 | CRUD operations, customer groups, bulk operations | 0.9, 2.0 |
| **Products** | 22 | Full product management, types, categories, images | 2.0, 2.1, 3.0-beta |
| **Sales** | 31 | Sales, register sales, fulfillments, payments, payment types, pick lists | 0.9, 2.0, 2.0-beta |
| **Inventory** | 15 | Inventory levels, consignments, consignment products | 2.0 |
| **Outlets & Registers** | 22 | Outlets, registers, shifts, outlet product taxes, retailers, button layouts | 0.9, 2.0 |
| **Inventory Counts** | 7 | Stocktake management (via Consignments API) | 2.0 |
| **Users** | 10 | User management, sessions, sales totals | 0.9, 2.0 |
| **Taxes** | 5 | Tax rate CRUD operations | 0.9, 2.0 |
| **Suppliers** | 5 | Supplier management | 0.9, 2.0 |
| **Brands** | 5 | Brand management | 2.0 |
| **Tags** | 5 | Product tags management | 2.0 |
| **Webhooks** | 5 | Webhook subscriptions | 0.9, 2.0-beta |
| **Price Books** | 14 | Price books, products | 2.0, 3.0 |
| **Promotions** | 11 | Promotions, promo codes | 2.0 |
| **Gift Cards** | 10 | Gift cards, transactions | 2.0-beta, 3.0 |
| **Store Credits** | 6 | Store credits, transactions, reports | 2.0-beta |
| **Variants** | 6 | Variant attributes, adding variants | 2.0 |
| **Services** | 5 | Service orders, agenda | 2.0 |
| **Serial Numbers** | 4 | Serial number tracking | 2.0 |
| **Quotes** | 6 | Quote management, conversion to sales | 2.0 |
| **Search** | 1 | Search across products, customers, sales | 2.0 |
| **Channels & Logs** | 4 | Channels, channel request logs | 2.0 |
| **Security & Audit** | 2 | Security events, audit logs | 2.0, 2.0-beta |
| **Custom Fields** | 6 | Custom field definitions and values | 2.0, 2.0-beta |
| **Workflow Rules** | 6 | Business rules, remote rules | 2.0, 2.0-beta |
| **Partner API** | 5 | Partner billing subscriptions | 2.0-beta *(partner account required)* |
| **Config** | 1 | Account configuration and loyalty settings | 2.0 |

**Total: 216+ tools** covering the complete Lightspeed X-Series API.

### Implementation Status

✅ **All endpoints verified and tested** (January 2026)

- All 216 tools have been tested against the live Lightspeed API
- Full API reference available in [`API_REFERENCE.md`](./API_REFERENCE.md)
- Supports all 6 API versions: 0.9, 2.0, 2.0-beta, 2.1, 3.0, 3.0-beta

## Available Tools

### Customer Management

| Tool | Description |
|------|-------------|
| `lightspeed_list_customers` | List customers with filtering and pagination |
| `lightspeed_get_customer` | Get a single customer by ID |
| `lightspeed_create_customer` | Create a new customer |
| `lightspeed_update_customer` | Update an existing customer |
| `lightspeed_delete_customer` | Delete a customer |
| `lightspeed_list_customer_groups` | List all customer groups |
| `lightspeed_get_customer_group` | Get a customer group by ID |
| `lightspeed_create_customer_group` | Create a customer group |
| `lightspeed_update_customer_group` | Update a customer group |
| `lightspeed_delete_customer_group` | Delete a customer group |
| `lightspeed_add_customers_to_group` | Add customers to a group |
| `lightspeed_remove_customers_from_group` | Remove customers from a group |
| `lightspeed_get_group_customers` | Get customers in a group |
| `lightspeed_bulk_update_customer_taxes` | Bulk update customer tax assignments |

### Product Management

| Tool | Description |
|------|-------------|
| `lightspeed_list_products` | List products with filtering |
| `lightspeed_get_product` | Get a single product |
| `lightspeed_create_product` | Create a new product |
| `lightspeed_update_product` | Update a product |
| `lightspeed_delete_product` | Delete a product |
| `lightspeed_delete_product_family` | Delete a product family |
| `lightspeed_get_product_inventory` | Get product inventory across outlets |
| `lightspeed_get_product_price_books` | Get price books for a product |
| `lightspeed_list_product_types` | List product types |
| `lightspeed_get_product_type` | Get a product type |
| `lightspeed_create_product_type` | Create a product type |
| `lightspeed_list_product_categories` | List categories |
| `lightspeed_get_product_category` | Get a category |
| `lightspeed_create_product_category` | Create a category |
| `lightspeed_delete_product_categories` | Delete categories |
| `lightspeed_list_product_images` | List product images |
| `lightspeed_upload_product_image` | Upload an image |
| `lightspeed_delete_product_image` | Delete an image |
| `lightspeed_get_product_image_data` | Get image data |
| `lightspeed_set_product_image_position` | Set image position |
| `lightspeed_list_products_v3` | List products (API v3.0) |
| `lightspeed_get_product_v3` | Get product (API v3.0) |

### Sales & Transactions

| Tool | Description |
|------|-------------|
| `lightspeed_list_sales` | List sales transactions |
| `lightspeed_get_sale` | Get a single sale |
| `lightspeed_create_sale` | Create a new sale |
| `lightspeed_update_sale` | Update a sale |
| `lightspeed_create_sale_v2` | Create a sale (API v2.0) |
| `lightspeed_update_sale_v2` | Update a sale (API v2.0) |
| `lightspeed_delete_sale` | Delete/void a sale |
| `lightspeed_return_sale` | Process a return |
| `lightspeed_list_payment_types` | List payment types |
| `lightspeed_list_payment_types_v2` | List payment types (API v2.0) |
| `lightspeed_get_payment_type` | Get a payment type |
| `lightspeed_list_payments` | List payments |
| `lightspeed_get_payment` | Get a payment |
| `lightspeed_list_fulfillments` | List fulfillments |
| `lightspeed_get_fulfillment` | Get a fulfillment |
| `lightspeed_create_fulfillment` | Create a fulfillment |
| `lightspeed_update_fulfillment` | Update a fulfillment |
| `lightspeed_delete_fulfillment` | Delete a fulfillment |
| `lightspeed_get_fulfillment_summary` | Get fulfillment summary |
| `lightspeed_fulfill_sale` | Fulfill a sale |
| `lightspeed_fulfill_sale_line_items` | Fulfill specific line items |
| `lightspeed_pack_sale_line_items` | Pack specific line items |
| `lightspeed_pick_sale_line_items` | Pick specific line items |
| `lightspeed_list_sale_fulfillments` | List fulfillments for a sale |
| `lightspeed_list_sale_pick_lists` | List pick lists for a sale |

### Inventory Management

| Tool | Description |
|------|-------------|
| `lightspeed_list_inventory` | List inventory records |
| `lightspeed_get_inventory` | Get inventory by ID |
| `lightspeed_update_inventory` | Update inventory levels |
| `lightspeed_list_consignments` | List consignments (stock orders, transfers, stocktakes) |
| `lightspeed_get_consignment` | Get a consignment |
| `lightspeed_create_consignment` | Create a consignment |
| `lightspeed_update_consignment` | Update a consignment |
| `lightspeed_delete_consignment` | Delete a consignment |
| `lightspeed_list_consignment_products` | List products in consignment |
| `lightspeed_add_consignment_product` | Add product to consignment |
| `lightspeed_update_consignment_product` | Update consignment product |
| `lightspeed_delete_consignment_product` | Remove from consignment |
| `lightspeed_get_consignment_totals` | Get consignment totals |
| `lightspeed_bulk_update_consignment_products` | Bulk update consignment products |

### Inventory Counts (Stocktakes)

| Tool | Description |
|------|-------------|
| `lightspeed_list_inventory_counts` | List inventory counts for an outlet |
| `lightspeed_get_inventory_count` | Get an inventory count |
| `lightspeed_create_inventory_count` | Create an inventory count |
| `lightspeed_update_inventory_count` | Update an inventory count |
| `lightspeed_delete_inventory_count` | Delete an inventory count |
| `lightspeed_list_inventory_count_items` | List items in an inventory count |
| `lightspeed_update_inventory_count_item` | Update a counted item |

> **Note**: Inventory counts use the Consignments API with `type: "STOCKTAKE"`.

### Store Operations

| Tool | Description |
|------|-------------|
| `lightspeed_list_outlets` | List store locations |
| `lightspeed_get_outlet` | Get an outlet |
| `lightspeed_list_registers` | List POS terminals |
| `lightspeed_get_register` | Get a register |
| `lightspeed_open_register` | Open a register |
| `lightspeed_close_register` | Close a register |
| `lightspeed_get_register_payments_summary` | Get register payments summary |
| `lightspeed_list_shifts` | List register shifts |
| `lightspeed_get_shift` | Get a shift |
| `lightspeed_list_outlet_product_taxes` | List outlet product taxes |
| `lightspeed_get_retailer` | Get retailer info |
| `lightspeed_get_config` | Get account config (loyalty settings) |
| `lightspeed_list_button_layouts` | List button layouts |
| `lightspeed_get_button_layout` | Get button layout |

### User Management

| Tool | Description |
|------|-------------|
| `lightspeed_list_users` | List staff users |
| `lightspeed_get_user` | Get a user |
| `lightspeed_create_user` | Create a user |
| `lightspeed_update_user` | Update a user |
| `lightspeed_delete_user` | Delete a user |
| `lightspeed_delete_user_sessions` | Delete user sessions |
| `lightspeed_get_current_user` | Get current authenticated user |
| `lightspeed_bulk_get_users` | Bulk get users by IDs |
| `lightspeed_get_user_sales_totals` | Get user sales totals |

### Tax, Suppliers, Brands, Tags

| Tool | Description |
|------|-------------|
| `lightspeed_list_taxes` | List tax rates |
| `lightspeed_get_tax` / `create` / `update` / `delete` | Tax CRUD operations |
| `lightspeed_list_suppliers` | List suppliers |
| `lightspeed_get_supplier` / `create` / `update` / `delete` | Supplier CRUD operations |
| `lightspeed_list_brands` | List brands |
| `lightspeed_get_brand` / `create` / `update` / `delete` | Brand CRUD operations |
| `lightspeed_list_tags` | List tags |
| `lightspeed_get_tag` / `create` / `update` / `delete` | Tag CRUD operations |

### Price Books

| Tool | Description |
|------|-------------|
| `lightspeed_list_price_books` | List price books |
| `lightspeed_get_price_book` | Get a price book |
| `lightspeed_create_price_book` | Create a price book |
| `lightspeed_update_price_book` | Update a price book |
| `lightspeed_delete_price_book` | Delete a price book |
| `lightspeed_list_price_book_products` | List products in price book |
| `lightspeed_add_price_book_product` | Add product to price book |
| `lightspeed_update_price_book_product` | Update price book product |
| `lightspeed_delete_price_book_product` | Remove from price book |
| `lightspeed_list_all_price_book_products` | List all price book products |
| `lightspeed_list_price_books_v3` | List price books (API v3.0) |
| `lightspeed_get_price_book_v3` | Get price book (API v3.0) |
| `lightspeed_create_price_book_v3` | Create price book (API v3.0) |
| `lightspeed_update_price_book_v3` | Update price book (API v3.0) |

### Promotions

| Tool | Description |
|------|-------------|
| `lightspeed_list_promotions` | List promotions |
| `lightspeed_get_promotion` | Get a promotion |
| `lightspeed_create_promotion` | Create a promotion |
| `lightspeed_update_promotion` | Update a promotion |
| `lightspeed_delete_promotion` | Delete a promotion |
| `lightspeed_search_promotions` | Search promotions |
| `lightspeed_get_promotion_products` | Get promotion products |
| `lightspeed_get_promotion_promo_codes` | Get promotion promo codes |
| `lightspeed_apply_discount` | Apply discount to sale |
| `lightspeed_delete_promo_codes` | Delete promo codes |
| `lightspeed_get_active_promo_codes` | Get active promo codes |

### Gift Cards & Store Credits

| Tool | Description |
|------|-------------|
| `lightspeed_list_gift_cards` | List gift cards |
| `lightspeed_get_gift_card` | Get a gift card |
| `lightspeed_create_gift_card` | Create a gift card |
| `lightspeed_update_gift_card` | Update a gift card |
| `lightspeed_void_gift_card` | Void a gift card |
| `lightspeed_create_gift_card_transaction` | Create a transaction |
| `lightspeed_get_gift_card_by_transaction` | Get gift card by transaction |
| `lightspeed_reverse_gift_card_transaction` | Reverse a transaction |
| `lightspeed_get_gift_card_v3` | Get gift card (API v3.0) |
| `lightspeed_find_gift_card_by_number` | Find gift card by number |
| `lightspeed_list_store_credits` | List store credits |
| `lightspeed_get_store_credit` | Get a store credit |
| `lightspeed_get_customer_store_credit` | Get customer's store credit |
| `lightspeed_bulk_get_store_credits` | Bulk get store credits |
| `lightspeed_create_store_credit_transaction` | Create a transaction |
| `lightspeed_get_store_credit_report` | Get store credits report |

### Variants, Services, Serial Numbers, Quotes

| Tool | Description |
|------|-------------|
| `lightspeed_list_variant_attributes` | List variant attributes |
| `lightspeed_get_variant_attribute` / `create` / `update` / `delete` | Variant attribute CRUD |
| `lightspeed_add_product_variant` | Add variant to product |
| `lightspeed_list_services` | List service orders |
| `lightspeed_get_service` / `create` | Service order operations |
| `lightspeed_list_customer_services` | List customer services |
| `lightspeed_get_services_agenda` | Get services agenda |
| `lightspeed_list_serial_numbers` | List serial numbers |
| `lightspeed_get_serial_number` / `create` / `delete` | Serial number operations |
| `lightspeed_list_quotes` | List quotes |
| `lightspeed_get_quote` / `create` / `update` / `delete` | Quote CRUD operations |
| `lightspeed_convert_quote_to_sale` | Convert quote to sale |

### Search, Webhooks, Channels

| Tool | Description |
|------|-------------|
| `lightspeed_search` | Search across products, customers, sales |
| `lightspeed_list_webhooks` | List webhooks |
| `lightspeed_get_webhook` / `create` / `update` / `delete` | Webhook CRUD operations |
| `lightspeed_list_channels` | List integration channels |
| `lightspeed_list_request_logs` | List API request logs |
| `lightspeed_get_request_log` | Get a request log |
| `lightspeed_get_request_log_text` | Get request log as text |

### Security, Audit & Custom Fields

| Tool | Description |
|------|-------------|
| `lightspeed_list_security_events` | List security events |
| `lightspeed_list_audit_logs` | List audit logs |
| `lightspeed_list_custom_fields` | List custom field definitions |
| `lightspeed_create_custom_field` | Create a custom field |
| `lightspeed_update_custom_field` | Update a custom field |
| `lightspeed_delete_custom_field` | Delete a custom field |
| `lightspeed_list_custom_field_values` | List custom field values |
| `lightspeed_set_custom_field_values` | Set custom field values |

### Workflow Rules

| Tool | Description |
|------|-------------|
| `lightspeed_list_rules` | List workflow rules |
| `lightspeed_create_rule` | Create a rule |
| `lightspeed_delete_rule` | Delete a rule |
| `lightspeed_list_remote_rules` | List remote rules |
| `lightspeed_create_remote_rule` | Create a remote rule |
| `lightspeed_delete_remote_rule` | Delete a remote rule |

### Partner API (Partner Accounts Only)

| Tool | Description |
|------|-------------|
| `lightspeed_list_partner_subscriptions` | List partner subscriptions |
| `lightspeed_get_partner_subscription` | Get a subscription |
| `lightspeed_create_subscription_token` | Create subscription token |
| `lightspeed_get_subscription_by_token` | Get subscription by token |
| `lightspeed_create_update_subscription_token` | Create update token |

> **Note**: Partner API requires a Lightspeed partner account.

## Example Use Cases

```
# List all products
List all my products in Lightspeed

# Create a customer
Create a customer named John Doe with email john@example.com

# Check inventory levels
Show me inventory levels for all products at my main outlet

# Create a stock order
Create a stock order (consignment) from supplier ABC for 100 units of product XYZ

# Set up a webhook
Create a webhook to notify me at https://myapp.com/webhook when products are updated

# Process a return
Process a return for sale #12345 returning 2 units of product ABC

# Create a quote
Create a quote for customer John Doe with 5 units of product XYZ

# Check gift card balance
What is the balance of gift card number GC-12345?

# Manage inventory counts
Create a new inventory count for my main outlet, then list the items to count

# Get loyalty settings
Show me my store's loyalty program configuration
```

## Development

```bash
# Run in development mode
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint

# Build
npm run build
```

## License

MIT

## Resources

### Documentation
- [Getting Started Guide](./docs/getting-started.md) - Installation and setup for all supported AI tools
- [API Reference](./API_REFERENCE.md) - Complete list of available tools and their parameters

### External Links
- [Lightspeed X-Series API Documentation](https://x-series-api.lightspeedhq.com/reference)
- [Lightspeed Developer Portal](https://x-series-api.lightspeedhq.com/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
