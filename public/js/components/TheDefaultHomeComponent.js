export default {
  name: 'TheDefaultHomeComponent',

  template: `
  <div>
    <section id="home-page">
      <div id="hero">
        <div id="middle-logo">
          <img src="images/logo_flash.png" alt="mainlogo">
          <h2>FILMS</h2>
        </div>
      </div>

      <div id="recs">
        <ol>
          <li @click="setDecade(1950, 1959)">50s</li>
          <li @click="setDecade(1960, 1969)">60s</li>
          <li @click="setDecade(1970, 1979)">70s</li>
          <li @click="setDecade(1980, 1989)">80s</li>
          <li @click="setDecade(1990, 1999)">90s</li>
        </ol>
      </div>

      <div class="movieList">
        <ul>
          <li v-for="movie in movieList" :key="movie.id">
            <img :src="movie.imageurl ? movie.imageurl : '/images/default-movie-poster.jpg'" :alt="movie.title">
            <p>{{ movie.title }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
  `,

  data() {
    return {
      movieList: [],
      startYear: null,
      endYear: null
    };
  },

  created() {
    // fetch the appropriate video from the IMDBs API
    // and load it into your view -> check video on FOL
    this.setDecade(1970, 1979);
  },

  methods: {
    setDecade(startYear, endYear) {
      this.startYear = startYear;
      this.endYear = endYear;

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '81b3c19193msh23b267f8dc55163p101662jsn3d231dae0ca2',
          'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
      };

      const queryString = `start_year=${startYear}&end_year=${endYear}&min_imdb=8&max_imdb=9&genre=action&language=english&type=movie&page=1`;
      const apiUrl = `https://ott-details.p.rapidapi.com/advancedsearch?${queryString}`;

      fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.movieList = data.results;
        })
        .catch(err => console.error(err));
    }
  }
}
