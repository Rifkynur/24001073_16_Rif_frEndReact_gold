import React from "react";
import carHero from "../../assets/image/img_car.png";
import Button from "../Elements/Button";

const Hero = () => {
  return (
    <div className="container hero" id="home">
      <div className="hero-left">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <Button title={"Mulai Sewa Mobil"} />
      </div>
      <div className="hero-right">
        <img src={carHero} alt="hero card" />
      </div>
    </div>
  );
};

export default Hero;
