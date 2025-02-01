import axios from "axios"

async function requestData(endpoint) {
    const options = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api${endpoint}`,
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      const data = axios.request(options).then(function (response) {
          return response.data;
      }).catch(function (error) {
          console.error(error);
      });

      return data
}

export const requestGameData = {
     getGameData: async() => {
        return [

            {
                Title: 'Shoooter',
                data: await requestData(`/games?category=shooter&sort-by=revelace`)
            },

            {
                Title: 'Moba',
                data: await requestData(`/games?category=moba&sort-by=revelace`)
            },

            {
                Title: 'Fighting',
                data: await requestData(`/games?category=fighting&sort-by=revelace`)
            },

            {
                Title: 'Strategy',
                data: await requestData(`/games?category=strategy&sort-by=revelace`)
            },

            {
                Title: 'Card Games',
                data: await requestData(`/games?category=card&sort-by=revelace`)
            }    
        ]
    
    }
}

export async function getGameDetails(id){
    const data = await requestData(`/game?id=$${id}`)
    return data
}

export async function getCategoryGames(category){
    const data = await requestData(`/games?category=${category}&sort-by=revelace`)
    return data
}

export async function getGamesSorted(sort){
    const data = await requestData(`/games?&sort-by=${sort}`)
    return data
}

