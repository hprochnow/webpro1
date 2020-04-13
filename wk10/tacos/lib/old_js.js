var baseURL = "http://taco-randomizer.herokuapp.com"
const vm = new Vue({
    el: "#tacoApp",
    data: {
        tacos: []
    },
    methods: {
       getTacos: function () {
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


---- Old JS Code

Vue.component('taco-types', {
    template:`<div v-bind:class="['taco']"> 
    <div>{{taco.name}}</div>
    <div>{{taco.recipe}}</div>
    <div>{{taco.mixin}}</div>
    <div>{{taco.condiment}}</div>
    <div>{{taco.shell}}</div>
    </div>`,
    props: [`taco`],
});

const vm = new Vue({
    el: "#tacoApp",
    data: {
        taco: []
    },
    mounted () {
        axios
            .get('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
            .then(response => {
                console.log('response', response);
                vm.tacos = response.data;
                console.log(vm.tacos);
            })
    }
});