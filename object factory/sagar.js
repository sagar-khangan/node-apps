/**
 * Created by Sagar Khangan on 11-08-2016.
 */

var movies = require('./movies');

var sagarmovies = movies();

sagarmovies.favMovie = "Don";
console.log(sagarmovies.favMovie);