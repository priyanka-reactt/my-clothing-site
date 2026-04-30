import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
};

export default function ProductCard({ product, onAddToCart, isInCart }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-rose-100 transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-4/5 overflow-hidden bg-rose-50">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/products/${product.id}`}
            className="text-base font-semibold leading-snug text-gray-900 hover:text-pink-700"
          >
            {product.title}
          </Link>
          <p className="shrink-0 text-sm font-semibold text-pink-700">${product.price.toFixed(2)}</p>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className={[
            "w-full rounded-full px-5 py-2.5 text-sm font-medium transition",
            isInCart
              ? "bg-pink-50 text-pink-700 ring-1 ring-pink-200 hover:bg-pink-100"
              : "bg-pink-600 text-white hover:bg-pink-700",
          ].join(" ")}
        >
          {isInCart ? "Added" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

