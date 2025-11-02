import "./Filters.css";

export default function Filters({ categories, selectedCategory, onCategoryChange, onToggleFilters }) {
    return (
        <div className="filters">
        <div className="filters-top">
            <h2>Filters</h2>
            <button className="close-filters" onClick={onToggleFilters}>✕</button>
        </div>

        <div className="filters-section">
            <label className="filter-label">Category</label>
            <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)} aria-label="Filter by category">
            {categories.map(cat => (
                <option key={cat} value={cat}>{cat === "all" ? "All" : capitalize(cat)}</option>
            ))}
            </select>
        </div>

        <div className="filters-section">
            <label className="filter-label">Availability</label>
            <div className="checkbox">
            <input type="checkbox" id="in-stock" />
            <label htmlFor="in-stock">In stock</label>
            </div>
        </div>

        <div className="filters-section">
            <label className="filter-label">Ideal For</label>
            <select aria-label="Ideal For">
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
            </select>
        </div>
        </div>
    );
}

function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
