import { supabase } from "@/lib/supabase";

export default async function ShopPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("published", true);

if (error) {
  return (
    <pre style={{ color: "white", padding: "2rem" }}>
      {JSON.stringify(error, null, 2)}
    </pre>
  );
}

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Shop</h1>

      {products?.length === 0 && <p>No products yet.</p>}

      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <a href={`/shop/${product.slug}`}>
              {product.title} – £{product.price}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}