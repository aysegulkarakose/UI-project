import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [searchItem, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Aranan kelime:", searchItem);
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            width:"300px",
            fontFamily: "'Archivo', sans-serif",
            margin:"40px"
        }}>
            <div>
                <form style={{display: "flex", flexDirection: "column", width:"fit-content", marginLeft:"1px"}} onSubmit={handleSearch}>
                    <Link style={{ padding: "20px", textDecoration: "none", color: "#4d4d51ff", marginLeft:"1px"}} to="/searchLibrary">Search Library</Link>
                    <input
                        type="text"
                        value={searchItem}
                        onChange={(e) => setSearchTerm(e.target.value)}></input>
                </form>
            </div>

            <Link style={{ padding: "20px", textDecoration: "none", color: "#432CD4", fontWeight:"bold" }} to="/homepage">Home</Link>
            <Link style={{ padding: "20px", textDecoration: "none", color: "#4d4d51ff", fontWeight:"bold" }} to="/collections">Collections</Link>
            <Link style={{ padding: "20px", textDecoration: "none", color: "#4d4d51ff", fontWeight:"bold", paddingBottom:"50px" }} to="/categories">Categories</Link>
            <div style={{backgroundColor:"#F3F2FC", display:"flex", flexDirection:"column", width:"fit-content", height:"fit-content", padding:"20px", alignItems:"center", justifyContent:"center"}}>
                <h3 style={{fontSize:"25px", fontWeight:"bold"}}>Contribute to Stark</h3>
                <p>Got any accessibility resources or <br></br> news?</p>
                <button style={{backgroundColor:"#381FD1", color:"#F6F6EB", borderRadius:"7px", padding:"20px 50px", fontWeight:"bold", margin:"10px"}}>Submit a Resource</button>
            </div>
        </div>
    );
}
export default Navbar;