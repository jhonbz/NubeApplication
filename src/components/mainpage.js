import React, {useEffect, useState} from "react";
import axios from "axios";

export default function MainPage (){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:5000/products");
            setProducts(result.data);
        }
        fetchData();
    }, []);
    
    return (
        <div>
          <h1 className="app-title">Productos</h1>
          {products.map((product, index) => {
              return (
                  <div className="product" key={index}>
                      <h3 className="producttitle">{product.product_name}</h3>
                      <p className="productdescription">{product.product_description}</p>
                  </div>
              );
          })}
        </div>
    );
}