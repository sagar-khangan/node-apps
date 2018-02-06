/**
 * Created by Sagar Khangan on 11-08-2016.
 */


var movies = require('./movies');

var usermovies = movies();

usermovies.favMovie = "ABCD";

console.log(usermovies.favMovie);
