"use client";

import Container from "../components/Layouts/Container";
import Grid from "../components/Layouts/Grid";

export default function Discography() {

  const albums = [
    { title: "Lineage", link: "https://soundcloud.com/indetonos/sets/lineage-6?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", img: "/lineage.jpg", listeneable: "listeneable", year:"2019" },
  ];

  const discographyPage = () => {

    return (
      <>
        <Grid items={albums}/>
      </>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Discography</h1>
      <Container pageToLoad={discographyPage}></Container>
    </main>
  );
}
