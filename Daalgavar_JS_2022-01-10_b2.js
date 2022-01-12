
//3ш тоо оруулаад, 10-с бага хэдэн ширхэг тоо байгааг тоолж консолд хэвлэ.

var too1=+prompt('Тоо оруулах');
var too2=+prompt('Тоо оруулах');
var too3=+prompt('Тоо оруулах');
    console.log("Garaas oruulsan 1-r too:",too1);
    console.log("Garaas oruulsan 2-r too:",too2);
    console.log("Garaas oruulsan 3-r too:",too3);
var x1,x2,x3,sum;

if(too1<10){ 
        x1=1;
    }else{
        x1=0
    } 
if(too2<10){ 
    x2=1;
    } else{
        x2=0
}
if(too3<10){ 
    x3=1;
    } else{
        x3=0
}
sum=x1+x2+x3;
if(sum===3){
    console.log("Garaas oruulsan 3-n too 3-uulaa 10-s baga toonuud")
} else if(sum===2){
    console.log("Garaas oruulsan 3-n toonii 2 ni 10-s baga toonuud")
} else if(sum===1){
    console.log("Garaas oruulsan 3-n toonii 1 ni 10-s baga too")
}else{
    console.log("Garaas oruulsan 3-n toond 10-s baga too baikhgui baina.")
}


