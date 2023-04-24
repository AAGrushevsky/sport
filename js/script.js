$(document).ready(function(){
    $('.carousel__inner').slick({                
        speed: 1200,        
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive:  [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
                   
          ]
        });
        
  });












// var name="Ivan";
// let number = "7";
// const pi="3.14";

// number=4;

// let leftBorderWidth;

// number
// strin - "",'', ``
// true/false
// null
// undefined
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }
// Symbol
// alert(1234)

// console.log (number)

// let answer = prompt("skol'ko let vam?", "");

// console.log(answer);

// console.log(4 - 'sdss');

// let isChecked = true,
//     isClose = false;
// console.log(isChecked && isClose); и
// console.log(isChecked || isClose); или


// if (2*4 == 8*2) {
//     console.log ('Verno')
// } else {
//     console.log ('Oshibka')
// }

// for(let i = 1; i < 8; i++) {
//     console.log (i);
// }


// function logging(a, b) {
//     console.log(a+b)
// }
// logging(3, 5);
// logging(4, 8);
