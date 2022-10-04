import React, { useEffect, useState } from "react";
import "./home.css";
import Product from "../../components/product/Product";
import axios1 from "../../axios";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await axios1({
      method: "get",
      url: "products",
    });
    setProducts(products.data);
  };
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon banner"
      />
      <div className="home__row">
        {products.length !== 0 &&
          products.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              rating={product.rating}
              imageUrl={product.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
