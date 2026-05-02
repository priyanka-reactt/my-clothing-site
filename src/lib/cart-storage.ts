export type CartLine = {
  productId: string;
  quantity: number;
};

export const CART_STORAGE_KEY = "luxeher_cart_v1";

/** Same-tab subscribers (Navbar) listen for this; `storage` only fires cross-tab */
export const CART_CHANGED_EVENT = "luxeher:cart-change";

export function loadCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (line): line is CartLine =>
          typeof line === "object" &&
          line !== null &&
          "productId" in line &&
          "quantity" in line &&
          typeof (line as { productId?: unknown }).productId === "string" &&
          typeof (line as { quantity?: unknown }).quantity === "number",
      )
      .map((line) => ({ productId: line.productId, quantity: Math.max(1, Math.floor(line.quantity)) }));
  } catch {
    return [];
  }
}

export function getCartTotalQuantity(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + (Number.isFinite(line.quantity) ? line.quantity : 0), 0);
}

export function cartCountFromStorage(): number {
  return getCartTotalQuantity(loadCart());
}

export function persistCart(lines: CartLine[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
  window.dispatchEvent(new Event(CART_CHANGED_EVENT));
}
