import React from "react";
import { Helmet } from "react-helmet";

export default function SEOHelmet() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Product Listing - Appscrip Task",
        "description": "A curated list of products: bags, accessories and lifestyle items.",
        "itemListElement": []
    };

    return (
        <Helmet>
        <title>Discover Our Products | Appscrip Task</title>
        <meta name="description" content="Browse curated products, filter by category, and see details." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
}
