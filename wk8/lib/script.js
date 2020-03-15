var myArtArray = [
  {
    name: "Shrine Quartet",
    artist: "Grant Wood",
    year: "1939",
    style: "Regionalism",
    image:"https://uploads3.wikiart.org/images/grant-wood/shrine-quartet-1939(1).jpg!PinterestSmall.jpg"
  },
  {
    name: "La Musa Metafisica",
    artist: "Carlo Carra",
    year: "1917",
    style: "Futurism",
    image:"https://uploads6.wikiart.org/images/carlo-carra/la-musa-metafisica-1917.jpg!Large.jpg"
  },
  {
    name: "Pianel do Infante",
    artist: "Joao Vieira",
    year: "1987",
    style: "Expressionism",
    image: "https://uploads4.wikiart.org/images/joao-vieira/pianel-do-infante-1987.jpg"
  },
  {
    name: "Miss N (Portrait of Evelyn Nesbit)",
    artist: "Gertrude Kasebier",
    year: "1903",
    style: "Pictorialism",
    image: "https://uploads8.wikiart.org/images/gertrude-kasebier/miss-n-portrait-of-evelyn-nesbit-1903.jpg!Large.jpg"
  },
  {
    name: "Portrait of Iberia Performer",
    artist: "Dorrit Black",
    year: "1944",
    style: "Expressionism",
    image: "https://uploads4.wikiart.org/00207/images/dorrit-black/portrait-of-iberia-performer-1944.jpg!Large.jpg"
  },
  
];

var vm = new Vue({
  el:"#app",
  data: {
    newArt:{
      name:"",
      artist:"",
      year:"",
      style:"",
    },
    artList: myArtArray
  },
  methods: {
    submitHandler:()=> {
      console.log('submitted');
      vm.artList = vm.artList.concat(vm.newArt);
      vm.resetForm();
  },
      resetForm:() => {
      vm.newArt ={
        name:"",
        artist:"",
        year:"",
        style:""
      };
    },
      deleteItem: item => {
        vm.artList = vm.artlist.filter(artList =>{
          return artList !== item;
        })
      }

  }
});


