
const API = "https://api.giphy.com/v1/gifs/search";
const url = "https://api.giphy.com/v1/gifs/search?api_key=ZBVqqcT3jmV53jdk30OTdoOBacTk72nk&q=&limit=25&offset=0&rating=g&lang=en"
const apikey = "?api_key=ZBVqqcT3jmV53jdk30OTdoOBacTk72nk&q="
// const world = "cat"
const settings = "&limit=10&offset=0&rating=g&lang=en"
const prueba = "https://api.giphy.com/v1/gifs/search?api_key=ZBVqqcT3jmV53jdk30OTdoOBacTk72nk&q=cat&limit=25&offset=0&rating=g&lang=en"

const searchFormInput = document.querySelector('.header__input');
const searchFormButton = document.querySelector('.header__search-icon')
searchFormInput.addEventListener('input', () => {
    const x = searchFormInput.value;
    const grid = document.querySelector('.main__container')
    grid.innerHTML = '';

    if (x.length>2) {
        console.log(x.length);

        createGifs(searchFormInput.value);
    } else {

    }
});


function createGifs (world) {
    fetch(`${API}${apikey}${world}${settings}`)
.then(res=>res.json())
.then(datos=>{
    const gifs = datos.data;
    const containergif = document.querySelector('.main__container');
    gifs.forEach(dato => {
        const gifImg = document.createElement('img');
        gifImg.setAttribute('src',dato.images.original.url);
        containergif.appendChild(gifImg);
    });
})
}

