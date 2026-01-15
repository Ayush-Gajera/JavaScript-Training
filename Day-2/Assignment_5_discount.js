let amount = 1200;
let discount = "None"
function DiscountedPrice(amount,discount)
{
    switch(discount){
        
        case "SAVE10":
           var discountPrice=10;
            return amount-(amount*discountPrice/100);
            break;
        case "SAVE20":
            var discountPrice=20;
            return amount-(amount*discountPrice/100);
            break;
        case "None":
            return amount;
            discount=30;
            
    
}
}
console.log(+DiscountedPrice(amount,discount));