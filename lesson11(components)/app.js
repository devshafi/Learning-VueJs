
// defining vue component
// we are creating a component named 'greeting'
// component is reusable thing in vue js
Vue.component('greeting',{
    template: '<p> Hey there, I am {{name}} <button v-on:click="changeName" >Change name</button> </p>',

    // component can have data and methods like vue instance
    data: function(){
        return{
            name:'Yoshi'
        };
    },
    methods:{

        changeName:function(){
            this.name = 'Mario';
        }
    }

})

var one = new Vue({
   
    el:'#vue-app-one',

});

var two = new Vue({
   
    el:'#vue-app-two',
   
});