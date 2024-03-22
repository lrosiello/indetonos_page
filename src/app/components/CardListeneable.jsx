import React, { useEffect, useState } from "react";
import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";


// Componente para tarjeta de singles
export default function CardListeneable({ item }) {

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
    
      if (!isClient) {
        return null; // Renderiza nada en el servidor
      }

  return (
    <>
   <div style={{ display: "flex", justifyContent: "space-between", paddingLeft:"5%",paddingRight:"5%" }}>
      <div>
        <h1
          style={{
            color: "whitesmoke",
            fontSize: "2vw",
          }}
        >
          album: {item.album}
          
        </h1>
      </div>
      <div>
        <h1
          style={{
            color: "whitesmoke",
            fontSize: "2vw",
          }}
        >
          {item.year}
        </h1>
      </div>
    </div>


    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
      style={{ height: "35vw", overflow: "hidden" }}
    >
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={item.img}
        style={{ objectFit: "cover" }}
      />

      <CardFooter
        className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between isBlurred"
        style={{ height: "20%" }}
      >
        <Button
          variant="flat"
          className="text-tiny"
          color="white"
          radius="full"
          size="sm"
          onPress={() => window.open(item.link, "_blank")}
        >
          <Link
            className="w-full"
            onPress={() => window.open(item.link, "_blank")}
            size="sm"
            style={{
              color: "whitesmoke",
              justifySelf: "flex-end",
              fontSize: "3vw",
            }}
          >
            {item.title}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </>
  );
}