import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.PNG";
function Footer() {
    return (
        <div style={{
            backgroundColor: "#10284B",
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
            color: "#F6F6EB",
            display: "flex"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <h1 style={{ marginLeft: "80px", fontSize: "60px" }}>Made remotely with love by <br /> Stark Lab, Inc.</h1>
                <Link style={{ margin: "80px" }} to="/">
                    <img src={logo} alt="Logo" style={{ height: "80px", borderRadius: "60px" }} />
                </Link>
            </div>
            <div style={{ display: "flex", gap: "30px", justifyContent: "space-between", padding: "80px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB", textTransform: "uppercase" }} to="/product">Product</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForFigma">Stark for Figma</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForFigJam">Stark for FigJam</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForSketch">Stark for Sketch</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForChrome">Stark for Chrome</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForFirefox">Stark for Firefox</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForEdge">Stark for Edge</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForSafari">Stark for Safari</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForArc">Stark for Arc</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/starkForBrave">Stark for Brave</Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB", textTransform: "uppercase" }} to="/resources">Resources</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/blog">Blog</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/library">Library</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/releaseNotes">Release Notes</Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB", textTransform: "uppercase" }} to="/help">Help</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/myAccount">My Account</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/supportDocs">Support Docs</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/contactUs">Contact Us</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/featureRequests">Feature Requests</Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB", textTransform: "uppercase" }} to="/company">Company</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/pressReleases">Press Releases</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/privacyPolicy">Privacy Policy</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/cookiePolicy">Cookie Policy</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/securityOverview">Security Overview</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/status">Status</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/termsOfService">Terms of Service</Link>
                    <Link style={{ textDecoration: "none", color: "#F6F6EB" }} to="/codeOfContact">Code of Contact</Link>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "8px", padding: "35px", color: "#FCD963", textTransform: "uppercase" }}>
                <h1>Stark Lab, Inc. Copyright 2023</h1>
            </div>
        </div>
    );
}
export default Footer;