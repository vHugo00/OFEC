import { useState } from "react";
import { Product } from "../components/Products/Product";
import products from "../data/productsData";

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState("Produtos");

  const filteredProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <main className="w-full mt-4 px-4 pb-12 md:col-start-2 md:px-6 lg:px-8">
      <div className="flex align-center  mb-8 bg-zinc-900 p-4 rounded-md">
        <button
          onClick={() => setSelectedCategory("Produtos")}
          className={`px-4 py-2 mx-2 ${selectedCategory === "Produtos" ? "bg-zinc-700 border border-zinc-700 rounded text-white" : "bg-zinc-800 border border-zinc-700 rounded text-white"}`}
        >
          Produtos
        </button>
        <button
          onClick={() => setSelectedCategory("Lanches")}
          className={`px-4 py-2 mx-2 ${selectedCategory === "Lanches" ? "bg-zinc-700 border border-zinc-700 rounded text-white" : "bg-zinc-800 border border-zinc-700 rounded text-white"}`}
        >
          Lanches
        </button>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((item, index) => (
          <Product
            key={index}
            purchaseLink={item.purchaseLink}
            image={item.image}
            product={item.product}
            price={item.price}
            coins={item.coins}
          />
        ))}
      </section>
    </main>

  );
}
