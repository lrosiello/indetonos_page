"use client";

import Container from "../components/Layouts/Container";
import Grid from "../components/Layouts/Grid";

export default function Singles() {

  const singles = [
    { single: "single", title: "What i want", img: "/wiw.jpg", album: "Lineage", year:"2019", tracklist:["01_What i want", "02_Black and white (cave remix)", "03_What i want (Reprise)"] },
    { single: "single", title: "You know it", img: "/yni.jpg", album: "Lineage", year:"2019", tracklist:["01_You know it", "02_Moon"] },
    { single: "single", title: "Love you again/Cyberpunk", img: "/lya.jpg",  album: "Lineage", year:"2020 ", tracklist:["01_Love you again", "02_Cyberpunk", "03_Position (Remix)"] },
    { single: "single", title: "Around again", img: "/aa.jpg",  album: "none", year:"2021", tracklist:["01_Around again", "02_Global operator", "03_Born"] },
  ];

  const singlesPage = () => {

    return (
      <>
        <Grid items={singles}/>
      </>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Singles</h1>
      <Container pageToLoad={singlesPage}></Container>
    </main>
  );
}
