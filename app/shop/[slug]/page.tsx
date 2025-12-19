import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>

      <p style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
        £{product.price}
      </p>

      {product.description && (
        <p style={{ marginTop: "1.5rem" }}>
          {product.description}
        </p>
      )}
    </main>
  );
}