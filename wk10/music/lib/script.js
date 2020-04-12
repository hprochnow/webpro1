const vm = new Vue({
  el:"#musicApp",
  data: {
    tracks: []
   },
   mounted () {
     axios
     .get('./lib/music-list.json')
     .then(response => {
       console.log('response', response);
       vm.tracks = response.data;
       console.log(vm.tracks);
     });

   }
});
