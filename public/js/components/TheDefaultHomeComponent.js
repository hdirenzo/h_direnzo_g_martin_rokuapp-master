export default {
    name: 'TheDefaultHomeComponent',

    props: ['user'],

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
              <li>
                  <p>Recommended</p>
              </li>
              <li>50s</li>
              <li>60s</li>
              <li>70s</li>
              <li>80s</li>
              <li>90s</li>
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
          movieList: []
        };
    },

    created() {
        // fetch the appropriate video from the IMDBs API
        // and load it into your view -> check video on FOL
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '81b3c19193msh23b267f8dc55163p101662jsn3d231dae0ca2',
              'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
            }
          };
      
          fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=1979&min_imdb=8&max_imdb=9&genre=action&language=english&type=movie&page=1', options)
            .then(response => response.json())
            .then(data => {
               console.log(data); 
               this.movieList = data.results;
            })
            .catch(err => console.error(err));
    }
}