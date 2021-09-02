var product=prompt("What are you buying? ");
var quantity=Number(prompt("How many are you buying? "));
var price=Number(prompt("How much does each cost? "));
calculation(product,quantity,price,.0825);
function calculation(description,quantity,price,taxes){
    var subtotal=quantity*price;
    var total=(subtotal*taxes)+subtotal;

    console.log(quantity,description,price);
    console.log("subtotal ------- $" + subtotal);
    console.log("taxes ------- $" + subtotal*taxes);
    console.log("total ------- $" + total);
}