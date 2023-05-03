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

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });               
     
          
          function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            });
        };
    
        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');


        //modal

        $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
        });

        $('.modal__close').on('click', function() {
          $('.overlay, #consultation,#thanks, #order').fadeOut('slow');
        });  

        

         $('.button_mini').each(function(i) {
          $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow');
          })
      });

         
      function valideForms(form) {
        $(form).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true
              }
            },
            messages: {
              name: "Имя",
              phone: "Номер телефона",
              email: {
                required: "Твой email адрес",
                email:  "Формат name@domain.com"
              
            }
          }
          });
      };

      valideForms('#consultation-form');
      valideForms('#consultation form');
      valideForms('#order form');

      $('input[name="phone"]').mask("(+7) 999-9999");
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
