//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShow {
    constructor(showName, genre, budget, episodes){
        this.showName = showName;
        this.genre = genre;
        this.budget = budget;
        this.episodes = episodes;
    }

    play(){
        console.log('playing your show...')
    }

    stop(){
        console.log('stopped your show...')
    }

    saveToList(){
        console.log('saved to list')
    }
}

let bridgerton = new MakeNetflixTVShow('Bridgerton', 'Period Romantic Drama', '7 million per episode', '16')