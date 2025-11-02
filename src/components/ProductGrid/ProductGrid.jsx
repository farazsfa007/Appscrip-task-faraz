import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products }) {
    if (!products || products.length === 0) {
        return <p>No products found.</p>;
    }
    return (
        <div className="product-grid" role="list">
        {products.map(p => (
            <ProductCard key={p.id} product={p} />
        ))}
        </div>
    );
}
