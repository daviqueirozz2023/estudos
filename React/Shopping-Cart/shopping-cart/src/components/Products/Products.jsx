import React, {useState, useEffect} from "react";
import './Products.css';
import fetchProducts from '../../api/fetchProducts';

function Products() {

    const [products, setProducts] = useState([]); //O setProducts vai mudar a função de products

    useEffect(() => {
        fetchProducts('iphone').then((response) => {

            setProducts(response);

        });
    }, []); // está função '{}', vai alterar sempre a função () =>

    

    return (
        <section className="products container">
           
           
            
        </section>
    );
}

export default Products;