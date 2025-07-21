import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../assets/logo.PNG";

function Header() {
    return (
        <nav style={{
            backgroundColor: "#F6F6EB",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 300px",
            textTransform: "uppercase",
            alignItems: "center",
            fontWeight: "bolder",
            fontFamily: "'Archivo', sans-serif"
        }}>
            <Link to="/">
                <img src={logo} alt="Logo" style={{ height: "40px", borderRadius: "40px" }} />
            </Link>
            <Link style={{ color: "#381FD1", textDecoration: "none" }} to="/product">Product</Link>
            <Link style={{ color: "#381FD1", textDecoration: "none" }} to="/pricing">Pricing</Link>
            <Link style={{ color: "#381FD1", textDecoration: "none" }} to="/blog">Blog</Link>
            <Link style={{ color: "#381FD1", textDecoration: "none" }} to="/library">Library</Link>
            <Link style={{ color: "#381FD1", textDecoration: "none" }} to="/support">Support</Link>
            <Link style={{ color: "#381FD1", textDecoration: "none" }} to="/login">Login</Link>
            <Link style={{ backgroundColor: "#381FD1", padding: "8px", color: "#F6F6EB", textDecoration: "none" }} to="/freeTrial">30-Day Free Team Trial</Link>
        </nav>
    );
}
export default Header;