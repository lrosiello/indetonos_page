import React, { useEffect, useState } from "react";
import background from "../../../public/main.jpg";
import Image from "next/image";

export default function Gigantography() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    //scroll event
    window.addEventListener("scroll", handleScroll);

    //unmount the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldHideText = scrollPosition > 200; //value of event activating

  return (
    <div style={{ position: "relative", height: "35vw", height:"50vw" }}>
      <div
        style={{
          width: "70%",
          position: "fixed",
          left: 0,
          right: 0,
          margin: "auto",
          zIndex: 0,
          opacity: shouldHideText ? 0 : 1,
          transition: "opacity 0.5s ease", 
        }}
      >
        <h1 style={{ fontSize: "5vw", textAlign: "center" }}>
          BIENVENIDO A LA PAGINA OFICIAL DE INDETONOS
        </h1>
      </div>

      <Image
        priority={true}
        alt="background"
        src={background}
        style={{ width: "100%", height: "auto", opacity: 0.6 }}
      />
    </div>
  );
}
