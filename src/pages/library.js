import React from "react";
import { Link } from "react-router-dom";
import LibraryItems from "../data/libraryItems";
import Collections from "./collections";
function Library() {
    return (
        <div style={{flex:"1", padding:"40px", fontFamily: "'Archivo', sans-serif"}}>
            <div style={{display:"flex", justifyContent:"space-between", fontWeight:"bolder"}}>
            <h1>New in the Library</h1>
            <Link style={{ textTransform: "uppercase", color:"#6754DC", fontWeight:"bolder", textDecoration:"underline" }} to="/viewAll">View All</Link></div>
            <p>Newly added accessibility resources, guides and more</p>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px"
            }}>
                {LibraryItems.map((item, index) => (
                    <div key={index} style={{
                        border: "1px solid #eee",
                        borderRadius: "12px",
                        padding: "20px",
                        fontFamily: "sans-serif",
                        fontWeight:"bold"
                    }}>
                        <p style={{ color: "#6D28D9", fontWeight: "bold", fontSize: "12px" }}>
                            {item.category.toUpperCase()}
                        </p>
                        <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold" }}>
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
       
        <div style={{ marginTop: "60px" }}>
                <Collections /> {/* ✅ buraya ekledik */}
            </div>
        </div> 
    );
}
export default Library;