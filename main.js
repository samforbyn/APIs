const buttonSelect = document.querySelector("button")

const buttText = () => {
    axios.get("https://swapi.dev/api/planets/?search=alderaan")
        .then((response) =>{
        
         const {results} = response.data
         console.log(results)

         const alderaan = results[0]
         console.log(alderaan)

         const {residents} = alderaan
            console.log(residents, "RESIDENTS")

         for(let i = 0; i < residents.length; i++){
             url = residents[i]
            //  console.log(url)
             axios.get(url)
                .then((res) => {
                    let newDiv = document.createElement("h2")
                    let body = document.querySelector("body")
                    newDiv.textContent = res.data.name
                    body.appendChild(newDiv)
                    
                })
         }
        })
}

buttonSelect.addEventListener("click", buttText)