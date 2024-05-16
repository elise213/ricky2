"use client";
import React, { useContext, useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import injectContext from "./context/appContext";
const inter = Inter({ subsets: ["latin"] });
import "font-awesome/css/font-awesome.min.css";
import { Context } from "./context/appContext";
import Footer from "./components/Footer";

function RootLayout({ children }) {
  const { store, actions } = useContext(Context);

  return (
    <html lang="en">
      <head>{/* ... */}</head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default injectContext(RootLayout);
