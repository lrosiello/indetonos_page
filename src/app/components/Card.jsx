import React from "react";
import CardSingles from "./CardSingles";
import CardMain from "./CardMain";
import CardSubMain from "./CardSubMain";
import CardListeneable from "./CardListeneable";

export default function CardItem(props) {
  const { item } = props;
  console.log(item.title);

  return (
    <>
      {item.main === "main" ? ( //IT WORKS FOR THE MAIN PAGE AND THE NEW SINGLE
        <CardMain item={item} />
      ) : item.listeneable === "listeneable" ? ( //IT WORKS FOR EVERY MATERIAL SPECIFIC PAGE
        <CardListeneable item={item} />
      ) : item.single === "single" ? ( //IT WORKS FOR SINGLES PAGE
        <CardSingles item={item} />
      ) : (
        //IT WORKS FOR HOME PAGE CARD-TYPE MENU
        <CardSubMain item={item} />
      )}
    </>
  );
}
