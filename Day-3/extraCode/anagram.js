let string ="Listen";
let string2 ="silent";
string2=string2.toLowerCase().split("").sort().join("");
string =string.toLowerCase().split("").sort().join("");
if(string===string2)
{
    console.log("True");
    
}else
{
    console.log("False")
}
