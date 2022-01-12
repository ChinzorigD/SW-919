
//5 оронтой тоо гараас оруулаад бүх цифрүүдийн нийлбэрийг ол.

var too=+prompt('Тоо оруулах');
var sum;
var tsifr1=Math.floor(too/10000);
var tsifr5=(too%10);
var tsifr4=Math.floor((too%100)/10);
var tsifr3=Math.floor((too%1000)/100);
var tsifr2=Math.floor((too%10000)/1000);

if(tsifr1>=1){ 
    if (tsifr1<=9){
        console.log(too);
        sum=tsifr1+tsifr2+tsifr3+tsifr4+tsifr5;
        console.log("Too 5 orontoi ba tsifruudin niilber ni:",sum, "bolno.")
        console.log(tsifr5);
        console.log(tsifr4);
        console.log(tsifr3);
        console.log(tsifr2);
        console.log(tsifr1); }
      else{
        console.log("Too 5 orontoi bish")        
      }
    } 
      else {
  console.log("Too 5 orontoi bish") 
}
