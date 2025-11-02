import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">
        <div className="container footer-inner">
            <div className="newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from our store</p>
            <form className="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
                <input type="email" placeholder="Enter your e-mail..." aria-label="Email" />
                <button type="submit">SUBSCRIBE</button>
            </form>
            </div>

            <div className="contact">
            <h4>CONTACT US</h4>
            <p>customercare@store.example</p>
            </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Appscrip Task. All rights reserved.</div>
        </footer>
    );
}
