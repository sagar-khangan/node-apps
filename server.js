var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request,response,next) {
    console.log("Hiii");
    next();
}

function doSecond(request,response,next) {
    console.log("hello");
    next();
}

app.use(doFirst);
app.use(doSecond);

function profile() {
    console.log("User profile");
}
function forum() {
    console.log("User Form");
}

app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8888);
console.log("Server Up.....");

