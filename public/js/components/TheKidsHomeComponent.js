export default {
    name: 'TheKidsHomeComponent',

    props: ['user'],

    template: `
    <h1 class="hidden">The Kids Home Component</h1>
    <div>
        <section id="home-page">
            <div id="hero">
                <div id="middle-logo">
                <h2>KIDS</h2>
                </div>
            </div>

            <div id="recs">
                <ol>
                <li @click="setDecade(2006, 2016)" class="recommend">Recommended</li>
                <li @click="setDecade(1990, 1999)">90s</li>
                <li @click="setDecade(2000, 2009)">00s</li>
                <li @click="setDecade(2010, 2020)">10s</li>
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
        this.setDecade(2006, 2016);
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
    
          const queryString = `start_year=${startYear}&end_year=${endYear}&min_imdb=6&max_imdb=7.8&genre=family&language=english&type=movie&page=1`;
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
