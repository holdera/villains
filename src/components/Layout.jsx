import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/main.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
                <main id="main" className="main-content">
                    <div className="container">
                        {children}
                    </div>
                </main>
            <Footer />
        </div>
    );
};

export default Layout;
