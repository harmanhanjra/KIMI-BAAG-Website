import type { CartItem } from '@/types';

export interface CodCustomer {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

export async function submitCodOrder(customer: CodCustomer, items: CartItem[], subtotal: number) {
  const itemSummary = items
    .map((item) => `${item.product.name} | ${item.size} | Qty ${item.quantity} | INR ${item.product.price * item.quantity}`)
    .join('\n');
  const orderReference = `BAAG-${Date.now().toString().slice(-8)}`;
  const formData = new URLSearchParams({
    'form-name': 'baag-cod-order',
    order_reference: orderReference,
    name: customer.name,
    phone: customer.phone,
    address: customer.address,
    city: customer.city,
    state: customer.state,
    postal_code: customer.postalCode,
    items: itemSummary,
    subtotal: `INR ${subtotal}`,
  });

  let capturedByNetlify = false;
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });
    capturedByNetlify = response.ok;
  } catch {
    capturedByNetlify = false;
  }

  const message = [
    `BAAG COD ORDER REQUEST - ${orderReference}`,
    '',
    itemSummary,
    '',
    `Subtotal: INR ${subtotal}`,
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}`,
    `City: ${customer.city}`,
    `State: ${customer.state}`,
    `Postal code: ${customer.postalCode}`,
    '',
    'Please confirm stock, delivery charge, final total and COD eligibility.',
  ].join('\n');
  const phone = (import.meta.env.VITE_WHATSAPP_NUMBER || '917528966505').replace(/\D/g, '');
  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return { capturedByNetlify, orderReference };
}
