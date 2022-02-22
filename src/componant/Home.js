import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Product from './Product';

export default function Home () {

    const d={
        opacity:"0.5",
        backgroundColor:"black",
    }
    return (
    <div>
        <Header />
        <Product />
        <Footer />
    </div>

    

  )
}
