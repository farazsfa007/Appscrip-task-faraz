import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
    const { image, title, price } = product;
    const alt = `Image of ${title}`;
    const formattedPrice = price ? `$${price.toFixed(2)}` : "—";

    return (
        <article className="product-card" role="listitem" tabIndex="0" aria-label={title}>
        <div className="thumb">
            <img src={image} alt={alt} loading="lazy" />
            {/* example badge */}
            {product.rating && product.rating.rate > 4.5 && <span className="badge">NEW PRODUCT</span>}
        </div>
        <div className="meta">
            <h3 className="title">{title}</h3>
            <div className="price">{formattedPrice}</div>
        </div>
        </article>
    );
}
