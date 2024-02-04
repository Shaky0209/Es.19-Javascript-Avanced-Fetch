const eminemSection = document.querySelector("#eminemSection");
const displayEminem = document.querySelector("#eminem");
const metallicaSection = document.querySelector("#metallicaSection");
const displayMetallica = document.querySelector("#metallica");
const queenSection = document.querySelector("#queenSection");
const displayQueen = document.querySelector("#queen");
const btnArt = document.querySelectorAll(".btn-art")
const createList = document.querySelector(".createList-btn");
const popUp = document.querySelector(".pop-up");
const eminemSUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";
const metallicaSUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica";
const queenSUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
let popUpStatus = false;

alert("Per visualizzare le playlist clicca sul bottone  'CREATE LIST' sulla tua sinistra.");

const reset = () => {
    displayEminem.classList.add("d-none");
    displayMetallica.classList.add("d-none");
    displayQueen.classList.add("d-none");
}

const displayList = (url, section, displayArt) => {
    
    reset();
    displayArt.classList.remove("d-none");

    fetch(url)
        .then((response) => { return response.json() })
        .then((json) => {

            let array = json.data;

            array.forEach(element => {

                let card = document.createElement("div");
                card.classList.add("d-flex", "flex-column", "align-items-center");
                let image = document.createElement("img");
                image.setAttribute("src", element.album.cover_big);
                image.setAttribute("alt", element.album.cover_big);
                let title = document.createElement("h5");
                title.classList.add("card-title", "pt-3", "text-align-center", "mx-3");
                title.innerText = element.album.title;
                card.appendChild(image);
                card.appendChild(title);
                section.appendChild(card);

                
            })
        })
        .catch((err) => console.log("Error code: ", err));
}

btnArt.forEach(element => {
    
    element.addEventListener("click", (event)=>{

        clicked = event.target.classList.value;

        switch (clicked) {
            case clicked = "btn-art eminem":
                displayList(eminemSUrl, eminemSection, displayEminem);
                popUp.style.display = "none";
                popUpStatus = false;
                break;

            case clicked = "btn-art metallica":
                displayList(metallicaSUrl, metallicaSection, displayMetallica);
                popUp.style.display = "none";
                popUpStatus = false;
                break;

            case clicked = "btn-art queen":
                displayList(queenSUrl, queenSection, displayQueen);
                popUp.style.display = "none";
                popUpStatus = false;
                break;
        }
    });
});



displayList(metallicaSUrl, metallicaSection, displayMetallica);

createList.addEventListener("click", ()=>{
    if(!popUpStatus){
        popUp.style.display = "block";
        popUpStatus = true;
    }else{
        popUp.style.display = "none";
        popUpStatus = false;
    }
})
