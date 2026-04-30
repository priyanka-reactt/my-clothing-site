export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "blush-midi-dress",
    title: "Blush Midi Dress",
    price: 79,
    description: "A floaty midi dress with a soft drape—perfect for brunch dates and sunset strolls.",
    imageSrc: "/products/youn.jpg",
    imageAlt: "Blush midi dress product image",
  },
  {
    id: "tailored-blazer",
    title: "Tailored Blazer",
    price: 129,
    description: "Sharp tailoring, effortless layering. Dress it up for work or down with denim.",
    imageSrc: "/products/graphic.jpg",
    imageAlt: "Tailored blazer product image",
  },
  {
    id: "cream-knit-cardigan",
    title: "Cream Knit Cardigan",
    price: 64,
    description: "Cozy knit texture with a polished finish—your everyday throw-on-and-go piece.",
    imageSrc: "/products/dress.jpg",
    imageAlt: "Cream knit cardigan product image",
  },
  {
    id: "rose-satin-skirt",
    title: "Rose Satin Skirt",
    price: 58,
    description: "A satin sheen that catches the light with every step. Pair with tees or blouses.",
    imageSrc: "/products/bags.jpg",
    imageAlt: "Rose satin skirt product image",
  },
  {
    id: "ivory-essential-tee",
    title: "Ivory Essential Tee",
    price: 178,
    description: "A premium essential with a clean silhouette—made to be worn on repeat.",
    imageSrc: "/products/shirt.jpg",
    imageAlt: "Ivory essential tee product image",
  },
  {
    id: "wide-brim-hat",
    title: "Wide Brim Hat",
    price: 200,
    description: "Sun-ready and style-forward. A wide brim hat that elevates any summer look.",
    imageSrc: "/products/hat.jpg",
    imageAlt: "Wide brim hat product image",
  },
  {
    id: "summer-pose-look",
    title: "Summer Look",
    price: 150,
    description: "Lightweight, breezy, and photo-ready—an easy outfit for warm days outdoors.",
    imageSrc: "/products/posing.jpg",
    imageAlt: "Stylish summer outfit product image",
  },
  {
    id: "switch-set",
    title: "Switch Set",
    price: 90,
    description: "A versatile set designed to mix-and-match—wear together or style separately.",
    imageSrc: "/products/switch.jpg",
    imageAlt: "Versatile matching set product image",
  },
  {
    id: "isolated-look",
    title: "Isolated Look",
    price: 100,
    description: "Clean lines, modern vibe. A statement look that stays effortless and refined.",
    imageSrc: "/products/isolated.jpg",
    imageAlt: "Modern outfit product image",
  },
];

