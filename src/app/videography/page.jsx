"use client";

import Container from "../components/Layouts/Container";
import Grid from "../components/Layouts/Grid";

export default function Videography() {

  const videos = [
    { title: "What i want", link: "https://www.youtube.com/watch?v=NhAFJ-rr_Fg", img: "/wiwvid.jpg", listeneable: "listeneable", year:"2019",album: "Lineage" },
    { title: "You know it", link: "https://www.youtube.com/watch?v=J5GSNp8_j-w", img: "/ynivid.jpg", listeneable: "listeneable",  year:"2019", album: "Lineage"},
    { title: "Love you again", link: "https://www.youtube.com/watch?v=wK_qKUC2izM", img: "/lyavid.jpg", listeneable: "listeneable", year:"2019",album: "Lineage" },
    { title: "Cyberpunk", link: "https://www.youtube.com/watch?v=DOhMCZRxAk8", img: "/cybvid.jpg", listeneable: "listeneable", year:"2019",album: "Lineage" },
    { title: "Around again", link: "https://www.youtube.com/watch?v=DDrBpMOz-uI", img: "/aavid.jpg", listeneable: "listeneable", year:"2021", album: "none"},
  ];

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
