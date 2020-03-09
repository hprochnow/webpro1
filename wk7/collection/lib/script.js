var myArtArray = [
  {
    name: "Shrine Quartet",
    artist: "Grant Wood",
    year: "1939",
    style: "Regionalism"
  },
  {
    name: "La Musa Metafisica",
    artist: "Carlo Carra",
    year: "1917",
    style: "Futurism"
  },
  {
    name: "Pianel do Infante",
    artist: "Joao Vieira",
    year: "1987",
    style: "Expressionism"
  },
  {
    name: "Miss N (Portrait of Evelyn Nesbit)",
    artist: "Gertrude Kasebier",
    year: "1903",
    style: "Pictorialism"
  },
  {
    name: "Portrait of Iberia Performer",
    artist: "Dorrit Black",
    year: "1944",
    style: "Expressionism"
  },
  
];

var vm = new Vue({
  el:"#app",
  data: {
    artList: myArtArray
  }
});
