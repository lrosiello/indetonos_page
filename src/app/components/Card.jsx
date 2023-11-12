import React from "react";
import { Card, CardHeader, Image, CardFooter, Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function CardItem(props) {
  const { item } = props;
  console.log(item.title);

  return (
    <>
      {item.main === "main" ? ( //IT WORKS FOR THE MAIN PAGE AND THE NEW SINGLE
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
      ) : item.listeneable === "listeneable" ? ( //IT WORKS FOR EVERY MATERIAL SPECIFIC PAGE
        <>
          <div style={{ display: "flex", justifyContent: "space-between", paddingLeft:"5%",paddingRight:"5%" }}>
            <div>
              <h1
                style={{
                  color: "whitesmoke",
                  fontSize: "2vw",
                }}
              >
                {" "}
                album: {item.album}
                
              </h1>
            </div>
            <div>
              <h1>
                <h1
                  style={{
                    color: "whitesmoke",
                    fontSize: "2vw",
                  }}
                >
                  {" "}
                  {item.year}
                </h1>
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
      ) : item.single === "single" ? ( //IT WORKS FOR SINGLES PAGE
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
      ) : (
        //IT WORKS FOR HOME PAGE CARD-TYPE MENU
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
      )}
    </>
  );
}
