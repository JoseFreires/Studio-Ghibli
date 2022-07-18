import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function EstruturaPage(props){
    return(
        <section>
            <Header />
            {props.children}
            <Footer />
        </section>
    )
}