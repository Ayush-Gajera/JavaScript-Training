var price= [10,20,30]

var newPrice=price.map((n)=>{n="$"+n; return n});
 console.log(newPrice);
//[ '$10', '$20', '$30' ]