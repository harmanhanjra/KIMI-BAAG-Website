import type { CartItem } from '@/types';

interface ShopifyCartCreateResponse {
  data?: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string;
      };
      userErrors: Array<{
        field?: string[];
        message: string;
      }>;
      warnings?: Array<{
        message: string;
      }>;
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

const SHOPIFY_API_VERSION = '2026-04';

export function isShopifyConfigured() {
  return Boolean(import.meta.env.VITE_SHOPIFY_STORE_DOMAIN && import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN);
}

export async function createShopifyCheckout(items: CartItem[]) {
  const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
  const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN;

  if (!domain || !token) {
    throw new Error('Add VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_API_TOKEN to .env to enable Shopify checkout.');
  }

  const lines = items.map((item) => {
    if (!item.product.shopifyVariantId) {
      throw new Error(`${item.product.name} is missing a Shopify variant ID.`);
    }

    return {
      merchandiseId: item.product.shopifyVariantId,
      quantity: item.quantity,
      attributes: [
        { key: 'Selected size', value: item.size },
        { key: 'BAAG product', value: item.product.name },
        { key: 'Color', value: item.product.color },
      ],
    };
  });

  const response = await fetch(`https://${domain}/api/${SHOPIFY_API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({
      query: `
        mutation CartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              checkoutUrl
            }
            userErrors {
              field
              message
            }
            warnings {
              message
            }
          }
        }
      `,
      variables: {
        input: {
          lines,
          attributes: [{ key: 'source', value: 'BAAG custom website' }],
        },
      },
    }),
  });

  const result = (await response.json()) as ShopifyCartCreateResponse;
  const graphqlError = result.errors?.[0]?.message;
  const userError = result.data?.cartCreate?.userErrors?.[0]?.message;
  const warning = result.data?.cartCreate?.warnings?.[0]?.message;
  const checkoutUrl = result.data?.cartCreate?.cart?.checkoutUrl;

  if (!response.ok || graphqlError || userError || !checkoutUrl) {
    throw new Error(graphqlError || userError || warning || 'Shopify checkout could not be created.');
  }

  return checkoutUrl;
}
