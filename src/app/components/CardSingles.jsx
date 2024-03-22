import React from "react";
import { Card, Image } from "@nextui-org/react";


// Componente para tarjeta de singles
export default function CardSingles({ item }) {
  return (
    <Card
          className="w-full h-[300px] col-span-12 sm:col-span-5"
          style={{
            backgroundColor: "gray",
            display: "flex",
            textAlign: "center",
          }}
        >
          <Image
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={item.img}
            style={{ objectFit: "contain" }}
          />
          <h1
            style={{ marginLeft: "2%", fontSize: "2.5vw", fontWeight: "bold" }}
          >
            {item.title}
          </h1>
          <h1 style={{ marginLeft: "2%", fontSize: "2vw" }}>
            Album: {item.album}
          </h1>
          <h1 style={{ marginLeft: "2%", fontSize: "1.5vw" }}>{item.year}</h1>
          <h1 style={{ marginLeft: "2%", fontSize: "2.5vw" }}>Tracklist:</h1>
          {item.tracklist.map((track, index) => (
            <h1 key={index} style={{ marginLeft: "2%", fontSize: "2vw" }}>
              {track}
            </h1>
          ))}
        </Card>
  );
}