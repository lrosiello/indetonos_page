"use client";

import Container from "../components/Layouts/Container";
import Grid from "../components/Layouts/Grid";
import { getVideos } from "../libs/data";

export default function Videography() {

  const videos = getVideos();

  const videographyPage = () => {

    return (
      <>
        <Grid items={videos}/>
      </>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Videography</h1>
      <Container pageToLoad={videographyPage}></Container>
    </main>
  );
}
