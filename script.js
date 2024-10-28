fetch('/dados.json')
.then((response) => {
    return response.json();
})
.then((data) => {
   data.forEach(aula => {
    console.log(aula.tempo)
   })
})

