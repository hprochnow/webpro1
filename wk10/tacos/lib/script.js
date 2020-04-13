Vue.component('taco-types', {
    template:`<div v-bind:class="['taco']"> 
    <div>{{taco.base_layer}}</div>
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