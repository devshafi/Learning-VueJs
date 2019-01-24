new Vue({
   
    el:'#vue-app',
    data:{
        name:'Shaun',
        job:'Ninja',
        website: 'https://shafis-blog.herokuapp.com',
        websiteTag: '<a href="https://shafis-blog.herokuapp.com">My blog</a>'
    },
    methods:{
        greet:function(time){
            return 'Good '+time+ ' '+this.name;
        }
    }
    
});