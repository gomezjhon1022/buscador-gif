
const API = "https://api.giphy.com/v1/gifs/search";
const url = "https://api.giphy.com/v1/gifs/search?api_key=ZBVqqcT3jmV53jdk30OTdoOBacTk72nk&q=&limit=25&offset=0&rating=g&lang=en"
const apikey = "?api_key=ZBVqqcT3jmV53jdk30OTdoOBacTk72nk&q="
const world = "cat"
const settings = "&limit=10&offset=0&rating=g&lang=en"
const prueba = "https://api.giphy.com/v1/gifs/search?api_key=ZBVqqcT3jmV53jdk30OTdoOBacTk72nk&q=cat&limit=25&offset=0&rating=g&lang=en"
// fetch(prueba)
function sirve () {
    fetch(`${API}${apikey}${world}${settings}`)
.then(res=>res.json())
.then(datos=>{

    const containergif = document.querySelector('.main__container');
    const gif1 = document.createElement('img');
    gif1.setAttribute('src',datos.data[0].images.original.url);

    containergif.appendChild(gif1);

    const gif2 = document.createElement('img');
    gif2.setAttribute('src',datos.data[1].images.original.url);

    containergif.appendChild(gif2);

    const gif3 = document.createElement('img');
    gif3.setAttribute('src',datos.data[2].images.original.url);

    containergif.appendChild(gif3);

    // const img = document.querySelector('img');
    // img.src = datos.data[0].images.original.url;
    // console.log(datos.data[0].images.original.url);
})
}

function createGifs () {
    fetch(`${API}${apikey}${world}${settings}`)
.then(res=>res.json())
.then(datos=>{

    // const { data } = await api('trending/movie/day');
    // const movies = data.results;

    const gifs = datos.data;

    const containergif = document.querySelector('.main__container');
    gifs.forEach(dato => {
        const gifImg = document.createElement('img');
        
        gifImg.setAttribute('src',dato.images.original.url);
    
        containergif.appendChild(gifImg);
    });
})
}

createGifs();