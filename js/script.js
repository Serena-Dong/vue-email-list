axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function(response){
    const result = response.data.response;
    console.log(result);
});