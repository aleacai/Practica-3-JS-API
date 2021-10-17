function Leer() {
    const ciudad = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key = 'd70eea36d4a04c7d0f9fbee99823b601';
    const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`
    buscar2(api_url);
}

function buscar1(api_url) {

    fetch(api_url)
        .then(data => {
            return data.json()
        }).then(resultado => {
            console.log(resultado);

            console.log(resultado.main)

            document.getElementById("lista").innerHTML = `<h1>Temperatura actual= ${resultado.main.temp} °C</h1>`;
            document.getElementById("lista").innerHTML += `<h1>Temperatura Max. = ${resultado.main.temp_max} °C</h1>`;
            document.getElementById("lista").innerHTML += `<h1>Temperatura Min= ${resultado.main.temp_min} °C</h1>`;

        });


}

const buscar2 = async(api_url) => {

    const data = await fetch(api_url);
    const respuesta = await data.json();
    const Search = await respuesta.main;
    console.log(data)
    console.log(respuesta)
    console.log(Search)
    console.log(Search.temp);

    document.getElementById("lista").innerHTML = `<p><h1>Temperatura = ${Search.temp} °C</h1></p>`;
    document.getElementById("lista").innerHTML += `<p>Temperatura Max. = ${Search.temp_max} °C</p>`;
    document.getElementById("lista").innerHTML += `<p>Temperatura Min= ${Search.temp_min} °C</p>`;
}


const buscar3 = async(api_url) => {

    const respuesta = await axios(api_url);
    const Search = await respuesta.main;
    console.log(respuesta.main);

    console.log(Search);


    /* if (Search != null) {
         document.getElementById("lista").innerHTML = '';
         Search.map((p) => {
             document.getElementById("lista").innerHTML += `<div style="margin-top:10px;">
                     <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
         })
     }*/

}