const main = document.getElementById('main');
const form = document.getElementById('form');
const searchBar = document.getElementById('search');



function showMovies(movies) {

    main.innerHTML = '';

    movies.forEach((movie) => {

        const {
            title,
            poster,
            score,
            overview
        } = movie;

        const movieDiv = document.createElement('div');

        movieDiv.classList.add('movie');
        movieDiv.innerHtml = `<img src="${IMG_PATH + poster}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(score)}">${score}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`;

        main.appendChild(movieDiv);
    })
}

function getClassByScore(score) {
    if (score >= 8) {
        return 'green';
    } else if (score >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }

})