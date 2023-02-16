// Default User data 
alert(" this data is personal to the owner \n you can`t use it for any reason");
let User1 ={name:"Abdullah Muhammad Abdullah", age:18, location:"Kano, Nigeria",
class:"SS-II", currentLocation:"Dorayi Karama Kano", phone:"+(234)-8068721306", rank:"School Head Boy" };
// let display
setTimeout(userone, 2000);
function userone(){
    document.getElementById("suna").innerHTML= User1.name;
}
setTimeout(usercolor, 3000);
function usercolor(){
    document.getElementById("suna").style.color="black";
    document.getElementById("suna").style.fontSize="";
}

setTimeout(shekaru, 4000)
function shekaru(){
    document.getElementById("age").innerHTML=User1.age;
}
setTimeout(agecolor, 5000);
function agecolor(){
    document.getElementById("age").style.color="black";
    document.getElementById("age").style.fontSize="";
}
setTimeout(locate, 6000)
function locate(){
    document.getElementById("location").innerHTML=User1.location;
}
setTimeout(classe, 8000)
function classe(){
    document.getElementById("Class").innerHTML=User1.class;
}
setTimeout(Clocate, 10000)
function Clocate(){
    document.getElementById("currentlocation").innerHTML=User1.currentLocation;
}
setTimeout(pphone, 12000)
function pphone(){
    document.getElementById("Phone").innerHTML=User1.phone;
}
setTimeout(rrank, 14000)
function rrank(){
    document.getElementById("Rank").innerHTML=User1.rank;
}
// function change(){
//     document.body.style.fontSize="20px"; 
// }
// change();