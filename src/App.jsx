import React, { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Footer from "./components/Footer/Footer";
import SEOHelmet from "./components/SEO/SEOHelmet";
import { useFetchProducts } from "./hooks/useFetchProducts";
import LOCAL_PRODUCTS from "./data/products.json";

function App() {
  const apiUrl = "https://fakestoreapi.com/products";
  const { products: apiProducts, loading, error } = useFetchProducts(apiUrl, LOCAL_PRODUCTS);

  const products = apiProducts || LOCAL_PRODUCTS;

  // state for filters and search
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("recommended"); // recommended | price-asc | price-desc
  const [showFilters, setShowFilters] = useState(true);

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ["all", ...Array.from(cats)];
  }, [products]);

  // filtered + sorted products
  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") {
      list = list.filter(p => p.category === category);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p => (p.title + " " + (p.description||"")).toLowerCase().includes(q));
    }
    if (sort === "price-asc") list.sort((a,b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a,b) => b.price - a.price);
    return list;
  }, [products, category, query, sort]);

  return (
    <>
      <SEOHelmet />
      <Header
        onSearch={value => setQuery(value)}
        searchValue={query}
      />
      <main className="main container" role="main">
        <section className="hero">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p className="lead">Browse our curated collection — use filters to refine results. Minimal UI, maximum clarity.</p>
        </section>

        <div className="listing-row">
          <aside className={`sidebar ${showFilters ? "open" : "closed"}`} aria-hidden={!showFilters}>
            <Filters
              categories={categories}
              selectedCategory={category}
              onCategoryChange={setCategory}
              onToggleFilters={() => setShowFilters(s=>!s)}
            />
          </aside>

          <section className="results" aria-live="polite">
            <div className="results-header">
              <div className="count">{filtered.length} ITEMS</div>
              <div className="controls">
                <label className="sort">
                  <span className="visually-hidden">Sort products</span>
                  <select value={sort} onChange={(e)=>setSort(e.target.value)} aria-label="Sort products">
                    <option value="recommended">RECOMMENDED</option>
                    <option value="price-asc">PRICE: LOW TO HIGH</option>
                    <option value="price-desc">PRICE: HIGH TO LOW</option>
                  </select>
                </label>
                <button className="toggle-filters" onClick={() => setShowFilters(s=>!s)} aria-pressed={!showFilters}>
                  {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
                </button>
              </div>
            </div>

            {loading && <p>Loading products...</p>}
            {error && <p className="error">Error loading products. Showing fallback items.</p>}

            <ProductGrid products={filtered} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
