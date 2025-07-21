import React from "react";
import { Link } from "react-router-dom";
import CollectionsData from "../data/collections";

function Collections() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Archivo', sans-serif"}}>
                <h1 style={{ margin: 0 }}>Featured Collections</h1>
                <Link style={{ fontWeight: "bold", color: "#6754DC", textTransform:"uppercase", textDecoration:"underline" }} to="/viewAll">
                    View All
                </Link>
            </div>

            <p>Handpicked and curated collections around accessibility</p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", 
                gap: "20px"
            }}>
                {CollectionsData.map((item, index) => (
                    <div key={index} style={{
                        border: "1px solid #eee",
                        borderRadius: "12px",
                        padding: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "bold"
                    }}>
                        <p style={{ color: "#6754DC", fontWeight: "bold", fontSize: "12px" }}>
                            {item.category}
                        </p>
                        <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold" }}>
                            {item.title.toUpperCase()}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Collections;