
// // basic unit tests for key components, such as the search functionality and API integration.
// // Provide instructions for setting up and running the tests. using javascript

// // Install Jest using npm:
// // npm install --save-dev jest

// // Import the functions to be tested
// const { searchList, displayMovieDetails } = require('https://www.omdbapi.com/?i=tt2705436&page=1&apikey=3aa4601c');

// // Mock the API response
// jest.mock('./api', () => ({
// loadMovieDetails: jest.fn(() =>
// searchListMovies.forEach(movie => {
//     movie.addEventListener('click', async () => {
//         // console.log(movie.dataset.id);
//         searchList.classList.add('hide-search-list');
//         movieSearchBox.value = "";
//         const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=3aa4601c`);
//         // const result = await fetch(`https://www.omdbapi.com/?i=tt2705436&page=1&apikey=3aa4601c`);
//         const movieDetails = await result.json();
//         // console.log(movieDetails);
//         displayMovieDetails(movieDetails);
//     });
// });
// }));

// describe('Movie Search Application', () => {
//   describe('searchList', () => {
//     it('should return search results', async () => {
//       // Mock the search term
//       const searchTerm = 'Avengers';

//       // Call the searchMovies function
//       const results = await searchList(searchTerm);

//       // Assert the expected results
//         const result = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3aa4601c`);
//     const movieDetails = await result.json();      
//     });
//   });

//   describe('loadMovieDetails', () => {
//     it('should fetch movies from the API', async () => {
//       // Mock the search term
//       const searchTerm = 'Avengers';

//       // Call the loadMovieDetails function
//       const results = await loadMovieDetails(searchTerm);

//       // Assert the API call
//         const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=3aa4601c`);
//         const movieDetails = await result.json();

//       // Assert the API call was made with the correct search term
//       expect(loadMovieDetailss).toHaveBeenCalledWith(searchTerm);
//     });
//   });
// });


// // Run the tests using Jest:
// // npx jest
