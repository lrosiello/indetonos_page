"use client";

import Container from "../components/Layouts/Container";
import Grid from "../components/Layouts/Grid";
import { getAlbums } from "../libs/data";

export default function Discography() {

  const albums = getAlbums();

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
