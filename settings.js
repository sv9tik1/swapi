const alderaan = document.querySelector('.alderaan')
const postAlderaan = (dagobah) => {
    const page = document.createElement('div')
    page.classList.add('dagobah')
    page.innerHTML = 
        `
        <h2>Episode ${dagobah.episode_id}, ${dagobah.title}</h2>
        <p>Release date: ${dagobah.release_date}</p>
        <p>Director: ${dagobah.director}</p>
        <p>Producer: ${dagobah.producer}</p>
        `
    alderaan.append(page)
}

const pageLoad = () => {
    const divLoading = document.createElement('div')
    divLoading.classList.add('loader')       
    divLoading.innerHTML =
        `<div class="loading">Loading</div>`
    alderaan.append(divLoading)
}

const loader = () => {
    const delLoad = document.querySelector('.loader')
    delLoad.innerHTML = ''
}

const errorLoad = () => {
    const erroDiv = document.createElement('div')
    erroDiv.classList.add('error')
    erroDiv.innerHTML =
        `<div class="error">Something went wrong</div>`
    alderaan.append(erroDiv)
}

const naboo = async() => {
    pageLoad()
    try {
        const films = await fetch('https://swapi.dev/api/films')
        const filmsDb = await films.json()
        db = filmsDb.results.map(alderaan => postAlderaan(alderaan))
    } catch (err) {
        errorLoad()
    } finally {
        loader()
    }
}

naboo() 