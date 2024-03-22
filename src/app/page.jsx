"use client";
import Gigantography from "./components/Gigantography";
import Container from "./components/Layouts/Container";
import Grid from "./components/Layouts/Grid";
import {getItems, getMainItem} from "./libs/data";

export default function Home() {

  const menuItems = getItems();
  const mainItem = getMainItem();

  const pageSingle = () => {
    return (
      <>
        <Grid items={menuItems} mainItem={mainItem} />
      </>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Gigantography />
      <Container pageToLoad={pageSingle}></Container>
    </main>
  );
}
