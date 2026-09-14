export const JIVOO_CATEGORIES = ["Front Office","Back Office","Inventory","Finance","E-Commerce"] as const;
export type JivooCategory = typeof JIVOO_CATEGORIES[number];

export const formatIDR = (n:number) =>
  new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
