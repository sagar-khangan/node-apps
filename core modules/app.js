/**
 * Created by Sagar Khangan on 11-08-2016.
 */

var  fs = require('fs');

fs.writeFileSync("corn.txt","Corn is good , Corn is life");

console.log(fs.readFileSync("corn.txt").toString());

var path = require('path');

var websiteHome = "D:/Data//workspace/sass/index.html";
var websiteAbout = "D:/Data/workspace/sass/index.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(path.normalize(websiteHome)));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

console.log(__dirname);
console.log(__filename)