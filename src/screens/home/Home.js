import React from "react";
import "./home.css";
import Product from "../../components/product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon banner"
      />
      <div className="home__row">
        <Product
          id={1}
          title="Apple Watch SE"
          price={526.41}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41qAgAkiXjL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id={2}
          title="Sony Playstation Platinum Wireless Headset 7.1 Surround Sound PS4"
          price={200}
          rating={4}
          image="https://m.media-amazon.com/images/I/61sid9NQCgL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="ASUS TUF Gaming Laptop"
          price={690.9}
          rating={4}
          image="https://m.media-amazon.com/images/I/71XkMLayGAL._SX425_.jpg"
        />
        <Product
          id={4}
          title="Redgear Gaming Mouse"
          price={20}
          rating={3}
          image="https://m.media-amazon.com/images/I/61MUoISbzjL._SY355_.jpg"
        />
        <Product
          id={5}
          title="Razer Enki X Essential Gaming Chair"
          price={340}
          rating={2}
          image="https://m.media-amazon.com/images/I/61Qa2dIsUxL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Kindle Amazon Essentials Bundle"
          price={280}
          rating={1}
          image="https://m.media-amazon.com/images/I/61-ICCXKu2L._AC_SX569_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
