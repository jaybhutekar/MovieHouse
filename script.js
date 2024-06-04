                 //  we passes our request to api through this link 
const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ded5bc02f91b223b00c62ddb274b397c&page=1';  
             
                //   root path of the image 
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
               //  it is for searching 
const SEARCHAPI='https://api.themoviedb.org/3/search/movie? &api_key=ded5bc02f91b223b00c62ddb274b397c&query=';

const form=document.getElementById("form");
const main=document.getElementById("section");
const search=document.getElementById("query");


returnMovies(APILINK)
function returnMovies(url) {
    // Fetch data from the provided URL (API link)
    fetch(url).then(res => res.json()).then(function(data) {
        // Log the results to the console
        console.log(data.results);

        // Iterate over each element (movie) in the results
        data.results.forEach(element => {
            // Create a new div for the card
            const div_card = document.createElement('div');
            div_card.setAttribute('class','card');
            // Create a new div for the row
            const div_row = document.createElement('div');
            div_row.setAttribute('class','row');
            // Create a new div for the column
            const div_column = document.createElement('div');
            div_column.setAttribute('class','column');
            // Create a new image element
            const image = document.createElement('img');
            image.setAttribute('id','image');
             
            // Create a new h3 element for the title
            const title = document.createElement('h3');
            title.setAttribute('id','title');
            // Create a new center element
            const center = document.createElement('center');

            // Set the inner HTML of the title element to the movie's title
            title.innerHTML = `${element.title}`;
            // Set the image source to the movie's poster path
            image.src = IMG_PATH + element.poster_path;

            // Append the image to the center element
            center.appendChild(image);
            // Append the center element to the card
            div_card.appendChild(center);
            // Append the title to the card
            div_card.appendChild(title);
            // Append the card to the column
            div_column.appendChild(div_card);
            // Append the column to the row
            div_row.appendChild(div_column);

            // Append the row to the main element main=section
            main.appendChild(div_row);
        });
    });
}
   form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML='';

    const searchItem=search.value;

    if(searchItem){
        returnMovies(SEARCHAPI+searchItem) ;
    search.value="";
    }
   })