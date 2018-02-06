var obj = {
    printFirstName: function () {
        console.log("Hiiii");
        console.log(this === obj)
    }
}

obj.printFirstName();

function doe() {

    console.log(this==global);
}
doe();