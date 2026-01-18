#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, } from '@modelcontextprotocol/sdk/types.js';
import { initializeClient, isClientInitialized } from './utils/api-client.js';
import { allToolDefinitions } from './tools/index.js';
import * as customers from './tools/customers.js';
import * as products from './tools/products.js';
import * as sales from './tools/sales.js';
import * as inventory from './tools/inventory.js';
import * as outlets from './tools/outlets.js';
import * as suppliers from './tools/suppliers.js';
import * as webhooks from './tools/webhooks.js';
import * as pricing from './tools/pricing.js';
import * as variants from './tools/variants.js';
import * as services from './tools/services.js';
import * as serialNumbers from './tools/serial-numbers.js';
import * as quotes from './tools/quotes.js';
import * as search from './tools/search.js';
import * as channels from './tools/channels.js';
import * as security from './tools/security.js';
import * as customFields from './tools/custom-fields.js';
import * as rules from './tools/rules.js';
import * as partner from './tools/partner.js';
// Server configuration
const SERVER_NAME = 'lightspeed-xseries-mcp-server';
const SERVER_VERSION = '1.0.0';
// Create MCP server
const server = new Server({
    name: SERVER_NAME,
    version: SERVER_VERSION,
}, {
    capabilities: {
        tools: {},
    },
});
// Handle list tools request
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: allToolDefinitions.map((tool) => ({
            name: tool.name,
            description: tool.description,
            inputSchema: tool.inputSchema,
        })),
    };
});
// Helper function to ensure client is initialized
function ensureClient(args) {
    if (!isClientInitialized()) {
        // First check environment variables, then fall back to tool arguments
        const domainPrefix = process.env.LIGHTSPEED_DOMAIN_PREFIX || args.domain_prefix;
        const accessToken = process.env.LIGHTSPEED_ACCESS_TOKEN || args.access_token;
        if (!domainPrefix || !accessToken) {
            throw new Error('Lightspeed API client not initialized. Please set LIGHTSPEED_DOMAIN_PREFIX and LIGHTSPEED_ACCESS_TOKEN environment variables, or provide domain_prefix and access_token parameters.');
        }
        initializeClient({
            domainPrefix,
            accessToken,
        });
    }
}
// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const toolArgs = (args || {});
    try {
        // Ensure client is initialized for all tools
        ensureClient(toolArgs);
        let result;
        switch (name) {
            // Customer tools
            case 'lightspeed_list_customers':
                result = await customers.listCustomers(toolArgs);
                break;
            case 'lightspeed_get_customer':
                result = await customers.getCustomer(toolArgs.customer_id);
                break;
            case 'lightspeed_create_customer':
                result = await customers.createCustomer(toolArgs);
                break;
            case 'lightspeed_update_customer':
                result = await customers.updateCustomer(toolArgs.customer_id, toolArgs);
                break;
            case 'lightspeed_delete_customer':
                result = await customers.deleteCustomer(toolArgs.customer_id);
                result = { success: true, message: 'Customer deleted successfully' };
                break;
            case 'lightspeed_list_customer_groups':
                result = await customers.listCustomerGroups(toolArgs);
                break;
            case 'lightspeed_get_customer_group':
                result = await customers.getCustomerGroup(toolArgs.group_id);
                break;
            // Product tools
            case 'lightspeed_list_products':
                result = await products.listProducts(toolArgs);
                break;
            case 'lightspeed_get_product':
                result = await products.getProduct(toolArgs.product_id);
                break;
            case 'lightspeed_create_product':
                result = await products.createProduct(toolArgs);
                break;
            case 'lightspeed_update_product':
                result = await products.updateProduct(toolArgs.product_id, toolArgs);
                break;
            case 'lightspeed_delete_product':
                await products.deleteProduct(toolArgs.product_id);
                result = { success: true, message: 'Product deleted successfully' };
                break;
            case 'lightspeed_list_product_types':
                result = await products.listProductTypes(toolArgs);
                break;
            case 'lightspeed_get_product_type':
                result = await products.getProductType(toolArgs.type_id);
                break;
            case 'lightspeed_create_product_type':
                result = await products.createProductType(toolArgs);
                break;
            case 'lightspeed_list_product_categories':
                result = await products.listProductCategories(toolArgs);
                break;
            case 'lightspeed_get_product_category':
                result = await products.getProductCategory(toolArgs.category_id);
                break;
            case 'lightspeed_create_product_category':
                result = await products.createProductCategory(toolArgs);
                break;
            case 'lightspeed_list_product_images':
                result = await products.listProductImages(toolArgs.product_id);
                break;
            case 'lightspeed_upload_product_image':
                result = await products.uploadProductImage(toolArgs.product_id, toolArgs.image_url);
                break;
            case 'lightspeed_delete_product_image':
                await products.deleteProductImage(toolArgs.product_id, toolArgs.image_id);
                result = { success: true, message: 'Product image deleted successfully' };
                break;
            // Sale tools
            case 'lightspeed_list_sales':
                result = await sales.listSales(toolArgs);
                break;
            case 'lightspeed_get_sale':
                result = await sales.getSale(toolArgs.sale_id);
                break;
            case 'lightspeed_create_sale':
                result = await sales.createSale(toolArgs);
                break;
            case 'lightspeed_update_sale':
                result = await sales.updateSale(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_list_payment_types':
                result = await sales.listPaymentTypes();
                break;
            case 'lightspeed_list_payment_types_v2':
                result = await sales.listPaymentTypes2(toolArgs);
                break;
            case 'lightspeed_get_payment_type':
                result = await sales.getPaymentType(toolArgs.payment_type_id);
                break;
            case 'lightspeed_list_payments':
                result = await sales.listPayments(toolArgs);
                break;
            case 'lightspeed_list_fulfillments':
                result = await sales.listFulfillments(toolArgs);
                break;
            case 'lightspeed_get_fulfillment':
                result = await sales.getFulfillment(toolArgs.fulfillment_id);
                break;
            case 'lightspeed_create_fulfillment':
                result = await sales.createFulfillment(toolArgs);
                break;
            case 'lightspeed_update_fulfillment':
                result = await sales.updateFulfillment(toolArgs.fulfillment_id, toolArgs);
                break;
            case 'lightspeed_delete_fulfillment':
                await sales.deleteFulfillment(toolArgs.fulfillment_id);
                result = { success: true, message: 'Fulfillment deleted successfully' };
                break;
            case 'lightspeed_create_sale_v2':
                result = await sales.createSale2(toolArgs);
                break;
            case 'lightspeed_update_sale_v2':
                result = await sales.updateSale2(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_delete_sale':
                await sales.deleteSale(toolArgs.sale_id);
                result = { success: true, message: 'Sale deleted successfully' };
                break;
            // Inventory tools
            case 'lightspeed_list_inventory':
                result = await inventory.listInventory(toolArgs);
                break;
            case 'lightspeed_get_inventory':
                result = await inventory.getInventory(toolArgs.inventory_id);
                break;
            case 'lightspeed_update_inventory':
                result = await inventory.updateInventory(toolArgs.inventory_id, toolArgs);
                break;
            case 'lightspeed_list_consignments':
                result = await inventory.listConsignments(toolArgs);
                break;
            case 'lightspeed_get_consignment':
                result = await inventory.getConsignment(toolArgs.consignment_id);
                break;
            case 'lightspeed_create_consignment':
                result = await inventory.createConsignment(toolArgs);
                break;
            case 'lightspeed_update_consignment':
                result = await inventory.updateConsignment(toolArgs.consignment_id, toolArgs);
                break;
            case 'lightspeed_delete_consignment':
                await inventory.deleteConsignment(toolArgs.consignment_id);
                result = { success: true, message: 'Consignment deleted successfully' };
                break;
            case 'lightspeed_list_consignment_products':
                result = await inventory.listConsignmentProducts(toolArgs.consignment_id, toolArgs);
                break;
            case 'lightspeed_add_consignment_product':
                result = await inventory.addConsignmentProduct(toolArgs.consignment_id, toolArgs);
                break;
            case 'lightspeed_update_consignment_product':
                result = await inventory.updateConsignmentProduct(toolArgs.consignment_id, toolArgs.product_id, toolArgs);
                break;
            case 'lightspeed_delete_consignment_product':
                await inventory.deleteConsignmentProduct(toolArgs.consignment_id, toolArgs.product_id);
                result = { success: true, message: 'Consignment product deleted successfully' };
                break;
            // Outlet tools
            case 'lightspeed_list_outlets':
                result = await outlets.listOutlets();
                break;
            case 'lightspeed_get_outlet':
                result = await outlets.getOutlet(toolArgs.outlet_id);
                break;
            case 'lightspeed_list_registers':
                result = await outlets.listRegisters(toolArgs);
                break;
            case 'lightspeed_get_register':
                result = await outlets.getRegister(toolArgs.register_id);
                break;
            case 'lightspeed_list_shifts':
                result = await outlets.listShifts(toolArgs);
                break;
            case 'lightspeed_get_shift':
                result = await outlets.getShift(toolArgs.shift_id);
                break;
            case 'lightspeed_list_taxes':
                result = await outlets.listTaxes();
                break;
            case 'lightspeed_get_tax':
                result = await outlets.getTax(toolArgs.tax_id);
                break;
            case 'lightspeed_create_tax':
                result = await outlets.createTax(toolArgs);
                break;
            case 'lightspeed_update_tax':
                result = await outlets.updateTax(toolArgs.tax_id, toolArgs);
                break;
            case 'lightspeed_delete_tax':
                await outlets.deleteTax(toolArgs.tax_id);
                result = { success: true, message: 'Tax deleted successfully' };
                break;
            case 'lightspeed_list_users':
                result = await outlets.listUsers();
                break;
            case 'lightspeed_get_user':
                result = await outlets.getUser(toolArgs.user_id);
                break;
            case 'lightspeed_get_retailer':
                result = await outlets.getRetailer();
                break;
            // Supplier tools
            case 'lightspeed_list_suppliers':
                result = await suppliers.listSuppliers(toolArgs);
                break;
            case 'lightspeed_get_supplier':
                result = await suppliers.getSupplier(toolArgs.supplier_id);
                break;
            case 'lightspeed_create_supplier':
                result = await suppliers.createSupplier(toolArgs);
                break;
            case 'lightspeed_update_supplier':
                result = await suppliers.updateSupplier(toolArgs.supplier_id, toolArgs);
                break;
            case 'lightspeed_delete_supplier':
                await suppliers.deleteSupplier(toolArgs.supplier_id);
                result = { success: true, message: 'Supplier deleted successfully' };
                break;
            case 'lightspeed_list_brands':
                result = await suppliers.listBrands(toolArgs);
                break;
            case 'lightspeed_get_brand':
                result = await suppliers.getBrand(toolArgs.brand_id);
                break;
            case 'lightspeed_create_brand':
                result = await suppliers.createBrand(toolArgs);
                break;
            case 'lightspeed_update_brand':
                result = await suppliers.updateBrand(toolArgs.brand_id, toolArgs);
                break;
            case 'lightspeed_delete_brand':
                await suppliers.deleteBrand(toolArgs.brand_id);
                result = { success: true, message: 'Brand deleted successfully' };
                break;
            case 'lightspeed_list_tags':
                result = await suppliers.listTags(toolArgs);
                break;
            case 'lightspeed_get_tag':
                result = await suppliers.getTag(toolArgs.tag_id);
                break;
            case 'lightspeed_create_tag':
                result = await suppliers.createTag(toolArgs);
                break;
            case 'lightspeed_update_tag':
                result = await suppliers.updateTag(toolArgs.tag_id, toolArgs);
                break;
            case 'lightspeed_delete_tag':
                await suppliers.deleteTag(toolArgs.tag_id);
                result = { success: true, message: 'Tag deleted successfully' };
                break;
            // Webhook tools
            case 'lightspeed_list_webhooks':
                result = await webhooks.listWebhooks();
                break;
            case 'lightspeed_get_webhook':
                result = await webhooks.getWebhook(toolArgs.webhook_id);
                break;
            case 'lightspeed_create_webhook':
                result = await webhooks.createWebhook(toolArgs);
                break;
            case 'lightspeed_update_webhook':
                result = await webhooks.updateWebhook(toolArgs.webhook_id, toolArgs);
                break;
            case 'lightspeed_delete_webhook':
                await webhooks.deleteWebhook(toolArgs.webhook_id);
                result = { success: true, message: 'Webhook deleted successfully' };
                break;
            // Pricing tools
            case 'lightspeed_list_price_books':
                result = await pricing.listPriceBooks(toolArgs);
                break;
            case 'lightspeed_get_price_book':
                result = await pricing.getPriceBook(toolArgs.price_book_id);
                break;
            case 'lightspeed_create_price_book':
                result = await pricing.createPriceBook(toolArgs);
                break;
            case 'lightspeed_update_price_book':
                result = await pricing.updatePriceBook(toolArgs.price_book_id, toolArgs);
                break;
            case 'lightspeed_delete_price_book':
                await pricing.deletePriceBook(toolArgs.price_book_id);
                result = { success: true, message: 'Price book deleted successfully' };
                break;
            case 'lightspeed_list_price_book_products':
                result = await pricing.listPriceBookProducts(toolArgs.price_book_id, toolArgs);
                break;
            case 'lightspeed_add_price_book_product':
                result = await pricing.addPriceBookProduct(toolArgs.price_book_id, toolArgs);
                break;
            case 'lightspeed_update_price_book_product':
                result = await pricing.updatePriceBookProduct(toolArgs.price_book_id, toolArgs.product_id, toolArgs);
                break;
            case 'lightspeed_delete_price_book_product':
                await pricing.deletePriceBookProduct(toolArgs.price_book_id, toolArgs.product_id);
                result = { success: true, message: 'Price book product deleted successfully' };
                break;
            case 'lightspeed_list_all_price_book_products':
                result = await pricing.listAllPriceBookProducts(toolArgs);
                break;
            case 'lightspeed_list_promotions':
                result = await pricing.listPromotions(toolArgs);
                break;
            case 'lightspeed_get_promotion':
                result = await pricing.getPromotion(toolArgs.promotion_id);
                break;
            case 'lightspeed_list_gift_cards':
                result = await pricing.listGiftCards(toolArgs);
                break;
            case 'lightspeed_get_gift_card':
                result = await pricing.getGiftCard(toolArgs.gift_card_id);
                break;
            case 'lightspeed_create_gift_card':
                result = await pricing.createGiftCard(toolArgs);
                break;
            case 'lightspeed_update_gift_card':
                result = await pricing.updateGiftCard(toolArgs.gift_card_id, toolArgs);
                break;
            case 'lightspeed_list_store_credits':
                result = await pricing.listStoreCredits(toolArgs);
                break;
            case 'lightspeed_get_store_credit':
                result = await pricing.getStoreCredit(toolArgs.store_credit_id);
                break;
            // Additional Customer Group tools
            case 'lightspeed_create_customer_group':
                result = await customers.createCustomerGroup(toolArgs);
                break;
            case 'lightspeed_update_customer_group':
                result = await customers.updateCustomerGroup(toolArgs.group_id, toolArgs);
                break;
            case 'lightspeed_delete_customer_group':
                await customers.deleteCustomerGroup(toolArgs.group_id);
                result = { success: true, message: 'Customer group deleted successfully' };
                break;
            case 'lightspeed_add_customers_to_group':
                result = await customers.addCustomersToGroup(toolArgs.group_id, toolArgs.customer_ids);
                break;
            case 'lightspeed_remove_customers_from_group':
                result = await customers.removeCustomersFromGroup(toolArgs.group_id, toolArgs.customer_ids);
                break;
            case 'lightspeed_get_group_customers':
                result = await customers.getGroupCustomers(toolArgs.group_id, toolArgs);
                break;
            case 'lightspeed_bulk_update_customer_taxes':
                result = await customers.bulkUpdateCustomerTaxes(toolArgs);
                break;
            // Additional Product tools
            case 'lightspeed_delete_product_family':
                await products.deleteProductFamily(toolArgs.family_id);
                result = { success: true, message: 'Product family deleted successfully' };
                break;
            case 'lightspeed_get_product_inventory':
                result = await products.getProductInventory(toolArgs.product_id);
                break;
            case 'lightspeed_get_product_price_books':
                result = await products.getProductPriceBooks(toolArgs.product_id, toolArgs);
                break;
            case 'lightspeed_get_product_image_data':
                result = await products.getProductImageData(toolArgs.product_id, toolArgs.image_id);
                break;
            case 'lightspeed_set_product_image_position':
                result = await products.setProductImagePosition(toolArgs.product_id, toolArgs.image_id, toolArgs.position);
                break;
            case 'lightspeed_delete_product_categories':
                await products.deleteProductCategories(toolArgs.category_ids);
                result = { success: true, message: 'Product categories deleted successfully' };
                break;
            case 'lightspeed_list_products_v3':
                result = await products.listProducts3(toolArgs);
                break;
            case 'lightspeed_get_product_v3':
                result = await products.getProduct3(toolArgs.product_id);
                break;
            // Additional Sales tools
            case 'lightspeed_return_sale':
                result = await sales.returnSale(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_get_payment':
                result = await sales.getPayment(toolArgs.payment_id);
                break;
            case 'lightspeed_get_fulfillment_summary':
                result = await sales.getFulfillmentSummary();
                break;
            case 'lightspeed_fulfill_sale_line_items':
                result = await sales.fulfillSaleLineItems(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_pack_sale_line_items':
                result = await sales.packSaleLineItems(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_pick_sale_line_items':
                result = await sales.pickSaleLineItems(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_fulfill_sale':
                result = await sales.fulfillSale(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_list_sale_fulfillments':
                result = await sales.listSaleFulfillments(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_list_sale_pick_lists':
                result = await sales.listSalePickLists(toolArgs.sale_id, toolArgs);
                break;
            // Additional Inventory tools
            case 'lightspeed_get_consignment_totals':
                result = await inventory.getConsignmentTotals(toolArgs.consignment_id);
                break;
            case 'lightspeed_bulk_update_consignment_products':
                result = await inventory.bulkUpdateConsignmentProducts(toolArgs.consignment_id, toolArgs);
                break;
            // Additional Outlet tools
            case 'lightspeed_get_current_user':
                result = await outlets.getCurrentUser();
                break;
            case 'lightspeed_bulk_get_users':
                result = await outlets.bulkGetUsers(toolArgs.user_ids);
                break;
            case 'lightspeed_get_user_sales_totals':
                result = await outlets.getUserSalesTotals(toolArgs.user_id);
                break;
            case 'lightspeed_delete_user':
                await outlets.deleteUser(toolArgs.user_id);
                result = { success: true, message: 'User deleted successfully' };
                break;
            case 'lightspeed_delete_user_sessions':
                await outlets.deleteUserSessions(toolArgs.user_id);
                result = { success: true, message: 'User sessions deleted successfully' };
                break;
            case 'lightspeed_update_user':
                result = await outlets.updateUser(toolArgs.user_id, toolArgs);
                break;
            case 'lightspeed_create_user':
                result = await outlets.createUser(toolArgs);
                break;
            case 'lightspeed_open_register':
                result = await outlets.openRegister(toolArgs.register_id, toolArgs);
                break;
            case 'lightspeed_close_register':
                result = await outlets.closeRegister(toolArgs.register_id, toolArgs);
                break;
            case 'lightspeed_get_register_payments_summary':
                result = await outlets.getRegisterPaymentsSummary(toolArgs.register_id);
                break;
            case 'lightspeed_list_button_layouts':
                result = await outlets.listButtonLayouts(toolArgs);
                break;
            case 'lightspeed_get_button_layout':
                result = await outlets.getButtonLayout(toolArgs.layout_id);
                break;
            case 'lightspeed_list_outlet_product_taxes':
                result = await outlets.listOutletProductTaxes(toolArgs);
                break;
            case 'lightspeed_get_config':
                result = await outlets.getConfig();
                break;
            case 'lightspeed_list_inventory_counts':
                result = await outlets.listInventoryCounts(toolArgs.outlet_id, toolArgs);
                break;
            case 'lightspeed_get_inventory_count':
                result = await outlets.getInventoryCount(toolArgs.outlet_id, toolArgs.count_id);
                break;
            case 'lightspeed_create_inventory_count':
                result = await outlets.createInventoryCount(toolArgs.outlet_id, toolArgs);
                break;
            case 'lightspeed_update_inventory_count':
                result = await outlets.updateInventoryCount(toolArgs.outlet_id, toolArgs.count_id, toolArgs);
                break;
            case 'lightspeed_delete_inventory_count':
                await outlets.deleteInventoryCount(toolArgs.outlet_id, toolArgs.count_id);
                result = { success: true, message: 'Inventory count deleted successfully' };
                break;
            case 'lightspeed_list_inventory_count_items':
                result = await outlets.listInventoryCountItems(toolArgs.outlet_id, toolArgs.count_id, toolArgs);
                break;
            case 'lightspeed_update_inventory_count_item':
                result = await outlets.updateInventoryCountItem(toolArgs.outlet_id, toolArgs.count_id, toolArgs.item_id, toolArgs);
                break;
            // Additional Pricing tools
            case 'lightspeed_create_promotion':
                result = await pricing.createPromotion(toolArgs);
                break;
            case 'lightspeed_update_promotion':
                result = await pricing.updatePromotion(toolArgs.promotion_id, toolArgs);
                break;
            case 'lightspeed_delete_promotion':
                await pricing.deletePromotion(toolArgs.promotion_id);
                result = { success: true, message: 'Promotion deleted successfully' };
                break;
            case 'lightspeed_search_promotions':
                result = await pricing.searchPromotions(toolArgs);
                break;
            case 'lightspeed_get_promotion_products':
                result = await pricing.getPromotionProducts(toolArgs.promotion_id, toolArgs);
                break;
            case 'lightspeed_get_promotion_promo_codes':
                result = await pricing.getPromotionPromoCodes(toolArgs.promotion_id, toolArgs);
                break;
            case 'lightspeed_apply_discount':
                result = await pricing.applyDiscount(toolArgs.sale_id, toolArgs);
                break;
            case 'lightspeed_delete_promo_codes':
                await pricing.deletePromoCodes(toolArgs.promo_codes);
                result = { success: true, message: 'Promo codes deleted successfully' };
                break;
            case 'lightspeed_get_active_promo_codes':
                result = await pricing.getActivePromoCodes(toolArgs);
                break;
            case 'lightspeed_void_gift_card':
                await pricing.voidGiftCard(toolArgs.gift_card_id);
                result = { success: true, message: 'Gift card voided successfully' };
                break;
            case 'lightspeed_create_gift_card_transaction':
                result = await pricing.createGiftCardTransaction(toolArgs.gift_card_id, toolArgs);
                break;
            case 'lightspeed_get_gift_card_by_transaction':
                result = await pricing.getGiftCardByTransaction(toolArgs.transaction_id);
                break;
            case 'lightspeed_reverse_gift_card_transaction':
                await pricing.reverseGiftCardTransaction(toolArgs.transaction_id);
                result = { success: true, message: 'Gift card transaction reversed successfully' };
                break;
            case 'lightspeed_get_customer_store_credit':
                result = await pricing.getCustomerStoreCredit(toolArgs.customer_id);
                break;
            case 'lightspeed_bulk_get_store_credits':
                result = await pricing.bulkGetStoreCredits(toolArgs);
                break;
            case 'lightspeed_create_store_credit_transaction':
                result = await pricing.createStoreCreditTransaction(toolArgs);
                break;
            case 'lightspeed_get_store_credit_report':
                result = await pricing.getStoreCreditReport(toolArgs);
                break;
            case 'lightspeed_get_gift_card_v3':
                result = await pricing.getGiftCard3(toolArgs.gift_card_id);
                break;
            case 'lightspeed_find_gift_card_by_number':
                result = await pricing.findGiftCardByNumber(toolArgs.number);
                break;
            case 'lightspeed_list_price_books_v3':
                result = await pricing.listPriceBooks3(toolArgs);
                break;
            case 'lightspeed_get_price_book_v3':
                result = await pricing.getPriceBook3(toolArgs.price_book_id);
                break;
            case 'lightspeed_create_price_book_v3':
                result = await pricing.createPriceBook3(toolArgs);
                break;
            case 'lightspeed_update_price_book_v3':
                result = await pricing.updatePriceBook3(toolArgs.price_book_id, toolArgs);
                break;
            // Variant tools
            case 'lightspeed_list_variant_attributes':
                result = await variants.listVariantAttributes(toolArgs);
                break;
            case 'lightspeed_get_variant_attribute':
                result = await variants.getVariantAttribute(toolArgs.attribute_id);
                break;
            case 'lightspeed_create_variant_attribute':
                result = await variants.createVariantAttribute(toolArgs);
                break;
            case 'lightspeed_update_variant_attribute':
                result = await variants.updateVariantAttribute(toolArgs.attribute_id, toolArgs);
                break;
            case 'lightspeed_delete_variant_attribute':
                await variants.deleteVariantAttribute(toolArgs.attribute_id);
                result = { success: true, message: 'Variant attribute deleted successfully' };
                break;
            case 'lightspeed_add_product_variant':
                result = await variants.addProductVariant(toolArgs.product_id, toolArgs);
                break;
            // Service tools
            case 'lightspeed_list_services':
                result = await services.listServices(toolArgs);
                break;
            case 'lightspeed_get_service':
                result = await services.getService(toolArgs.service_id);
                break;
            case 'lightspeed_create_service':
                result = await services.createService(toolArgs);
                break;
            case 'lightspeed_list_customer_services':
                result = await services.listCustomerServices(toolArgs.customer_id, toolArgs);
                break;
            case 'lightspeed_get_services_agenda':
                result = await services.getServicesAgenda(toolArgs.outlet_id, toolArgs);
                break;
            // Serial Number tools
            case 'lightspeed_list_serial_numbers':
                result = await serialNumbers.listSerialNumbers(toolArgs);
                break;
            case 'lightspeed_get_serial_number':
                result = await serialNumbers.getSerialNumber(toolArgs.serial_number_id);
                break;
            case 'lightspeed_create_serial_number':
                result = await serialNumbers.createSerialNumber(toolArgs);
                break;
            case 'lightspeed_delete_serial_number':
                await serialNumbers.deleteSerialNumber(toolArgs.serial_number_id);
                result = { success: true, message: 'Serial number deleted successfully' };
                break;
            // Quote tools
            case 'lightspeed_list_quotes':
                result = await quotes.listQuotes(toolArgs);
                break;
            case 'lightspeed_get_quote':
                result = await quotes.getQuote(toolArgs.quote_id);
                break;
            case 'lightspeed_create_quote':
                result = await quotes.createQuote(toolArgs);
                break;
            case 'lightspeed_update_quote':
                result = await quotes.updateQuote(toolArgs.quote_id, toolArgs);
                break;
            case 'lightspeed_delete_quote':
                await quotes.deleteQuote(toolArgs.quote_id);
                result = { success: true, message: 'Quote deleted successfully' };
                break;
            case 'lightspeed_convert_quote_to_sale':
                result = await quotes.convertQuoteToSale(toolArgs.quote_id);
                break;
            // Search tools
            case 'lightspeed_search':
                result = await search.search(toolArgs);
                break;
            // Channel tools
            case 'lightspeed_list_channels':
                result = await channels.listChannels(toolArgs);
                break;
            case 'lightspeed_list_request_logs':
                result = await channels.listRequestLogs(toolArgs);
                break;
            case 'lightspeed_get_request_log':
                result = await channels.getRequestLog(toolArgs.request_log_id);
                break;
            case 'lightspeed_get_request_log_text':
                result = await channels.getRequestLogText(toolArgs.request_log_id);
                break;
            // Security tools
            case 'lightspeed_list_security_events':
                result = await security.listSecurityEvents(toolArgs);
                break;
            case 'lightspeed_list_audit_logs':
                result = await security.listAuditLogs(toolArgs);
                break;
            // Custom Field tools
            case 'lightspeed_list_custom_fields':
                result = await customFields.listCustomFields(toolArgs);
                break;
            case 'lightspeed_create_custom_field':
                result = await customFields.createCustomField(toolArgs);
                break;
            case 'lightspeed_update_custom_field':
                result = await customFields.updateCustomField(toolArgs.field_id, toolArgs);
                break;
            case 'lightspeed_delete_custom_field':
                await customFields.deleteCustomField(toolArgs.field_id);
                result = { success: true, message: 'Custom field deleted successfully' };
                break;
            case 'lightspeed_list_custom_field_values':
                result = await customFields.listCustomFieldValues(toolArgs);
                break;
            case 'lightspeed_set_custom_field_values':
                result = await customFields.setCustomFieldValues(toolArgs);
                break;
            // Rule tools
            case 'lightspeed_list_rules':
                result = await rules.listRules(toolArgs);
                break;
            case 'lightspeed_create_rule':
                result = await rules.createRule(toolArgs);
                break;
            case 'lightspeed_delete_rule':
                await rules.deleteRule(toolArgs.rule_id);
                result = { success: true, message: 'Rule deleted successfully' };
                break;
            case 'lightspeed_list_remote_rules':
                result = await rules.listRemoteRules(toolArgs);
                break;
            case 'lightspeed_create_remote_rule':
                result = await rules.createRemoteRule(toolArgs);
                break;
            case 'lightspeed_delete_remote_rule':
                await rules.deleteRemoteRule(toolArgs.rule_id);
                result = { success: true, message: 'Remote rule deleted successfully' };
                break;
            // Partner tools
            case 'lightspeed_list_partner_subscriptions':
                result = await partner.listPartnerSubscriptions(toolArgs);
                break;
            case 'lightspeed_get_partner_subscription':
                result = await partner.getPartnerSubscription(toolArgs.subscription_id);
                break;
            case 'lightspeed_create_subscription_token':
                result = await partner.createSubscriptionToken(toolArgs);
                break;
            case 'lightspeed_get_subscription_by_token':
                result = await partner.getSubscriptionByToken(toolArgs.token);
                break;
            case 'lightspeed_create_update_subscription_token':
                result = await partner.createUpdateSubscriptionToken(toolArgs);
                break;
            default:
                throw new Error(`Unknown tool: ${name}`);
        }
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(result, null, 2),
                },
            ],
        };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
            content: [
                {
                    type: 'text',
                    text: `Error: ${errorMessage}`,
                },
            ],
            isError: true,
        };
    }
});
// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Lightspeed MCP Server running on stdio');
}
main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map