import React, { useState } from "react";
import "./Header.css";

export default function Header({ onSearch, searchValue }) {
    const [local, setLocal] = useState(searchValue || "");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(local);
    }

    return (
        <header className="site-header">
        <div className="container header-inner">
            <div className="brand" aria-label="Site logo">
            <div className="logo-mark" />
            <strong className="logo-text">LOGO</strong>
            </div>
            
            <nav className="nav">
                <a href="#shop">SHOP</a>
                <a href="#skills">SKILLS</a>
                <a href="#stories">STORIES</a>
                <a href="#about">ABOUT</a>
                <a href="#contact">CONTACT</a>
            </nav>

            <form className="search" onSubmit={handleSubmit} role="search" aria-label="Site search">
            <input
                type="search"
                placeholder="Search products..."
                value={local}
                onChange={(e)=>setLocal(e.target.value)}
                aria-label="Search products"
            />
            <button type="submit" aria-label="Search">🔍</button>
            </form>
        </div>
        </header>
    );
}
