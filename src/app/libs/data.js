export function getVideos() {
  return [
    {
      title: "What i want",
      link: "https://www.youtube.com/watch?v=NhAFJ-rr_Fg",
      img: "/wiwvid.jpg",
      listeneable: "listeneable",
      year: "2019",
      album: "Lineage",
    },
    {
      title: "You know it",
      link: "https://www.youtube.com/watch?v=J5GSNp8_j-w",
      img: "/ynivid.jpg",
      listeneable: "listeneable",
      year: "2019",
      album: "Lineage",
    },
    {
      title: "Love you again",
      link: "https://www.youtube.com/watch?v=wK_qKUC2izM",
      img: "/lyavid.jpg",
      listeneable: "listeneable",
      year: "2019",
      album: "Lineage",
    },
    {
      title: "Cyberpunk",
      link: "https://www.youtube.com/watch?v=DOhMCZRxAk8",
      img: "/cybvid.jpg",
      listeneable: "listeneable",
      year: "2019",
      album: "Lineage",
    },
    {
      title: "Around again",
      link: "https://www.youtube.com/watch?v=DDrBpMOz-uI",
      img: "/aavid.jpg",
      listeneable: "listeneable",
      year: "2021",
      album: "none",
    },
  ];
}

export function getSingles() {
  return [
    {
      single: "single",
      title: "What i want",
      img: "/wiw.jpg",
      album: "Lineage",
      year: "2019",
      tracklist: [
        "01_What i want",
        "02_Black and white (cave remix)",
        "03_What i want (Reprise)",
      ],
    },
    {
      single: "single",
      title: "You know it",
      img: "/yni.jpg",
      album: "Lineage",
      year: "2019",
      tracklist: ["01_You know it", "02_Moon"],
    },
    {
      single: "single",
      title: "Love you again/Cyberpunk",
      img: "/lya.jpg",
      album: "Lineage",
      year: "2020 ",
      tracklist: ["01_Love you again", "02_Cyberpunk", "03_Position (Remix)"],
    },
    {
      single: "single",
      title: "Around again",
      img: "/aa.jpg",
      album: "none",
      year: "2021",
      tracklist: ["01_Around again", "02_Global operator", "03_Born"],
    },
  ];
}

export function getAlbums() {
  return [
    {
      title: "Lineage",
      link: "https://soundcloud.com/indetonos/sets/lineage-6?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      img: "/lineage.jpg",
      listeneable: "listeneable",
      year: "2019",
    },
  ];
}


export function getItems(){
    return [
        { title: "Discography", link: "/discography", img: "/lineage.jpg" },
        { title: "Singles", link: "/singles", img: "/discos.jpg" },
        { title: "Videography", link: "/videography", img: "/videos.jpg" },
        { title: "Some live shows", link: "/lives", img: "/live.jpg" },
        { title: "About us", link: "/about", img: "/banda.jpg" },
      ];
}

export function getMainItem(){
    return {
        title: "NEW SONG",
        subtitle: "Listen to our brand new single!",
        link: "https://www.youtube.com/watch?v=LUvL-r36Mto",
        img: "/public/new.jpg",
        main: "main"
      };
}