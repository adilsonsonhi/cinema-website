import tomCruise from "../assets/images/mission-impossible.png";
import samWilson from "../assets/images/captain-america.png";
import thunderbolts from "../assets/images/thunderbolts.png";
import bg from "../assets/images/bg.png";
import fullStar from "../assets/images/full-star.png";
import midStar from "../assets/images/mid-star.png";
import emptyStar from "../assets/images/empty-star.png";
import playBtn from "../assets/images/play.png";

import a from "../assets/images/a.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.png";
// import d from "../assets/images/a.png";
// import e from "../assets/images/b.png";

export const images = [a, b, c];

export const Images = {
  playBtn,
};

export const Movies = [
  {
    id: "1",
    title: "Missão: Impossível - O ajuste de contas final",
    description:
      "Ethan Hunt e a equipa do FMI enfrentam a aterradora IA 'A Entidade', que se infiltrou nas redes de inteligência a nível global. Têm de travar Gabriel, que procura controlar a Entidade, e uma figura misteriosa do passado de Ethan, tudo isto enquanto lutam contra governos ansiosos por explorar o seu poder.",
    bgCover: bg,
    catalogCover: bg,
    titleCover: tomCruise,
    imdbRating: "7.8",
    ageRating: "M/16",
    duration: "2h49min",
    categories: ["Ação", "Aventura", "Thriler"],
    stars: [fullStar, fullStar, fullStar, midStar, emptyStar],
    isHero: true,
  },
  {
    id: "2",
    title: "Capitão América: Admirável Mundo Novo",
    description:
      "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
    bgCover: b,
    catalogCover: b,
    titleCover: samWilson,
    imdbRating: "7.8",
    ageRating: "M/13",
    duration: "1h58min",
    categories: ["Superherói", "Ação", "Aventura"],
    stars: [fullStar, fullStar, midStar, emptyStar, emptyStar],
    isHero: true,
  },
  {
    id: "1",
    title: "Missão: Impossível - O ajuste de contas final",
    description:
      "After finding themselves ensnared in a death trap, an unconventional team of antiheroes must go on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    bgCover: c,
    catalogCover: c,
    titleCover: thunderbolts,
    imdbRating: "7.8",
    ageRating: "M/13",
    duration: "2h7min",
    categories: ["Superherói", "Ação", "Aventura", "Crime"],
    stars: [fullStar, fullStar, fullStar, midStar, emptyStar],
    isHero: true,
  },
];
