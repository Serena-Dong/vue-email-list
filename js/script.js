const app = Vue.createApp({
    data(){
        return{
            emailList: [],
        }
    },
    methods:{
        getRandomEmail(key){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const email = response.data.response;
                this[key].push(email);
            });
        }
    },
    mounted: function() {
        for(let i = 0; i < 10; i++) {
            this.getRandomEmail('emailList')
        }
    },
})

app.mount('#root');