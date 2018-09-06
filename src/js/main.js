
$('.banner-slick').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [
        {
          breakpoint: 600,
          settings:{
          arrows:false
       }
     }
    ]
});

$('.company-box').slick({
dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
                      //SlickSliderIII
$('.post').slick({
dots: false,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
                        ///Counter
var time = 2, cc = 1;
$(window).scroll(function(){
  $('.counter').each(function(){
    var 
    cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
    if (cPos < topWindow + 380) {
      if (cc < 2 ) {
        $('div').each(function(){
      var
        i = 1,
        num = $(this).data('num'),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function(){
          if (i <= num) {
            that.html(i);
          }
          else {
            cc = cc + 2;
            clearInterval(int);
          }
          i++;
          },step);
        });
      }
    }
  });
});
                       ///Video cap
$(".video_ovr").click(function(){
     var dataYoutube = $(this).siblings('.video_box').attr('data-youtube');
      $(this).siblings('.video_box')
      .html('<iframe  width="100%" height="600" src="https://www.youtube.com/embed/G4z7jTuhVL8?autoplay=1&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
      $(this).hide();
});
                       
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#up').fadeIn();
    } else {
    $('#up').fadeOut();
  }
});

$('#up').click(function() {

  $('body,html').animate({scrollTop:0},1000);
});

                      ///Popap
$('.parent-container').magnificPopup({
    delegate: 'a', 
    type: 'image'
  
});
                    
$(document).ready(function(){
    $(".header_list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

                