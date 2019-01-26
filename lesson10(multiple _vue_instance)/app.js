var one = new Vue({
   
    el:'#vue-app-one',
    data:{
        title:'Vue App One'
    },
    methods:{

    },
    computed:{

        greet: function(){
            return 'Hello from app one!'
        }
    }
});

var two = new Vue({
   
    el:'#vue-app-two',
    data:{
        title:'Vue App Two'
    },
    methods:{

        changeTitle: function(){
            one.title = "App one title changed!"
        }
    },
    computed:{
        greet: function(){
            return 'Hi from app two!'
        }
    }
});