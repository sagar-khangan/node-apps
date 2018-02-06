function placeAnOrder(orderNumber){
    console.log("Customer Order" , orderNumber);
    cookAndDeliverFood(function () {
        console.log("Delevered Food order - " , orderNumber);
    });
}

//simulate A 5 second operation
function cookAndDeliverFood(callback) {
    console.log("cooking");
    setTimeout(callback, 5000);
}

//simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);

