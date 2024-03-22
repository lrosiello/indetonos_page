import React from "react";
import { Button, Card, Image } from "@nextui-org/react";


// Componente para tarjeta de singles
export default function CardMain({ item }) {
  return (
    <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          style={{ marginBottom: "2%", backgroundColor: "transparent" }}
        >
          <h1
            className="text-white font-medium text-large"
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "6vw",
              margin: "2%",
              textShadow: "#FC0  1px 0 10px",
              color: "whitesmoke",
            }}
          >
            {item.title}
          </h1>
          <h1
            className="text-white font-medium text-large"
            style={{
              color: "whitesmoke",
              textAlign: "center",
              fontSize: "3vw",
            }}
          >
            {item.subtitle}
          </h1>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 object-cover"
            src="/new.jpg"
            width={"50%"}
            style={{ alignSelf: "center", marginTop: "5%" }}
          />
          <Button
            color="success"
            variant="shadow"
            onPress={() => window.open(item.link, "_blank")}
            style={{
              alignSelf: "center",
              height: "6vw",
              width: "50%",
              marginBottom: "45%",
              fontSize: "3vw",
            }}
          >
            Listen Now
          </Button>
        </Card>
  );
}