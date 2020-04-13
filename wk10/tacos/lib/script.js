var baseURL = "http://taco-randomizer.herokuapp.com"
const vm = new Vue({
    el: "#tacoApp",
    data: {
        tacos: []
    },

    methods: {
       getTacos: function() {
           axios.get(baseURL + "/random/?full-taco=true").then(function(response){
            console.log(response);
            vm.tacos = response.data;
           })
        }
    },
    created: function () {
        this.getTacos();
    }
})