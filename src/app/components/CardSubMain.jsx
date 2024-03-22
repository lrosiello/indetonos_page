import React from "react";
import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";


// Componente para tarjeta de singles
export default function CardSubmain({ item }) {
  return (
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
        href={item.link}
      >
        <Link
          className="w-full"
          href={item.link}
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
  );
}