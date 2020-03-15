const vm = new Vue({
  el: "#alpacaForm",
  data: {
    firstName: '',
    lastName:'',
    street:'',
    state:'MN',
    availableStates:[
      {value: 'MN', name:'Minnesota'},
      {value: 'IL', name:'Illinois'},
      {value: 'IA', name:'Iowa'},
      {value: 'WI', name:'Wisconsin'}
    ],
    selectedColors:[],
    colors:[
      {name: 'white', value: 'white'},
      {name: 'black', value: 'black'},
      {name: 'brown', value: 'brown'},
      {name: 'grey', value: 'grey'}
    ],
    status:''


  }
});

