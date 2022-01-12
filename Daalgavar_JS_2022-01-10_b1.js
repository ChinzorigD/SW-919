
//Таван оронтой тоо гараас оруулаад 1 болон 4 дэх цифрүүд 2-уулаа сондгой байвал тэдгээрийн нийлбэрийг 2 дахин үржүүлээд консолд хэвлэ.
//Сондгой биш бол зүгээр нийлбэрийг хэвлэ.

var too=+prompt('Тоо оруулах');
var sum, urjver;
var tsifr5=Math.floor(too/10000);
var tsifr1=(too%10);
var tsifr2=Math.floor((too%100)/10);
var tsifr3=Math.floor((too%1000)/100);
var tsifr4=Math.floor((too%10000)/1000);
var sondgoi=tsifr1%2+tsifr4%2;
if(tsifr5>=1){ 
    if (tsifr5<=9){
        console.log("Garaas oruulsan too",too);
        console.log("Too 5 orontoi.");
        console.log("Toonii 1-r tsifr",tsifr1);
        console.log("Toonii 4-r tsifr",tsifr4);
        if(sondgoi===2){
            urjver=(tsifr4+tsifr1)*2;
            console.log("Toonii 1 bolon 4-r tsifruudiin  2 too 2-uulaa sondgoi too buguud bodlogiin ur dun ni:",urjver,"bolno.");
        } else{
            sum=(tsifr4+tsifr1);
            console.log("Niilber ni:",sum);
        }

    }
      else{
        console.log("Garaas oruulsan too",too);
        console.log("Too 5 orontoi bish.")        
      }
    } 
      else {
        console.log("Garaas oruulsan too",too);
        console.log("Too 5 orontoi bish.") 
}
