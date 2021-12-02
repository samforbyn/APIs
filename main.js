const buttonSelect = document.querySelector("button")
const starButton = document.getElementById("starships")

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

const printStarships = () => {
    axios.get('https://swapi.dev/api/starships')
    .then((response) => {
        console.log(response.data)
        const {results} = response.data
        const milFalc = results[4]
        console.log(milFalc)
        const {films} = milFalc
        console.log(films)
        for(let i = 0; i < films.length; i++){
            urlList = films[i]
            axios.get(urlList)
                .then((response) => {
                    let makeDiv = document.createElement("h2")
                    let bodySelect = document.querySelector("body")
                    makeDiv.textContent = response.data.title
                    bodySelect.appendChild(makeDiv)
                })
        }
    })
}

buttonSelect.addEventListener("click", buttText)
starButton.addEventListener("click", printStarships)