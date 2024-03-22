"use client";

import Container from "../components/Layouts/Container";
import Grid from "../components/Layouts/Grid";
import { getSingles } from "../libs/data";

export default function Singles() {

  const singles = getSingles();

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
