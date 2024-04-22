function movies(arr) {

    let movies = [];

    for (let command of arr) {
        if (command.includes('addMovie')) {
            let elements = command.split('addMovie ');
            let movieTitle = elements[1];

            let movieObject = { name: movieTitle };
            movies.push(movieObject)
        } else if (command.includes('directedBy')) {
            let elements = command.split(' directedBy ')
            let movieTitle = elements[0];
            let directorName = elements[1];

            let resultFound = movies.find(m => m.name === movieTitle);

            if (resultFound) {
                resultFound.director = directorName;
            }

        } else if (command.includes('onDate')) {
            let elements = command.split(' onDate ');
            let movieTitle = elements[0];
            let movieDate = elements[1];

            let resultFound = movies.find(m => m.name === movieTitle);

            if (resultFound) {
                resultFound.date = movieDate;
            }
        }
    }

    let fullInfoMovies = movies.filter(m => m.name && m.date && m.director);

    for (let fullInfoMovie of fullInfoMovies) {
        console.log(JSON.stringify(fullInfoMovie));
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);