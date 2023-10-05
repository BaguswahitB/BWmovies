const url = "https://api.themoviedb.org/3";
const api_key = "7099a930ebb78002cbbfb9a5cdc263e6";

class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `${url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} Tidak Ditemukan`);
        }
      });
  }
}

class Main {
  static fetchMov() {
    return fetch(
      `${url}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&year=2022&with_watch_monetization_types=free`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`movies Tidak Ditemukan`);
        }
      });
  }
}

export { DataSource, Main };
