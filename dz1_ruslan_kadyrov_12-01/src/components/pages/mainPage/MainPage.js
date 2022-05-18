import React from "react";
import { Footer } from "../../footer/Footer";
import { Header } from '../../header/Header';
import { Services } from "../../services/Services";


function MianPage() {

    const services = ["UX/UI", "frontend", "backend"];
    
    return (
        <div>
            <h2>Main Page</h2>
            <Header />
            <Services services={services} />
            <Footer />
        </div>
    )
}

export default MianPage;