"use client";
import Gigantography from "./components/Gigantography";
import Container from "./components/Layouts/Container";
import Grid from "./components/Layouts/Grid";

export default function Home() {

  const menuItems = [
    { title: "Discography", link: "/discography", img: "/lineage.jpg" },
    { title: "Singles", link: "/singles", img: "/discos.jpg" },
    { title: "Videography", link: "/videography", img: "/videos.jpg" },
    { title: "Some live shows", link: "/lives", img: "/live.jpg" },
    { title: "About us", link: "/about", img: "/banda.jpg" },
  ];
  const mainItem = {
    title: "NEW SONG",
    subtitle: "Listen to our brand new single!",
    link: "https://www.youtube.com/watch?v=LUvL-r36Mto",
    img: "/public/new.jpg",
    main: "main"
  };

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
