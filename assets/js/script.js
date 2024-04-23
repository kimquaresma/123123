$(function(){  //로드후 실행되는 스크립트구현시 사용


  const lenis = new Lenis()

  // lenis.on('scroll', (e) => {
  //   console.log(e)
  // })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)


    $('.profit .close').click(function(){
      $(this).parents('.profit').addClass('on')
      if($('.profit.left').hasClass('on') && $('.profit.right').hasClass('on')){
        $('.modal-bg').addClass('on');
      }
    })
    

    $('.gnb .nav-item').hover(
      function() {
          $(this).find('.sub-nav').stop().slideDown(160); // 호버될 때 서브 메뉴 슬라이드 다운
      },
      function() {
          $(this).find('.sub-nav').stop().slideUp(160); // 언호버될 때 서브 메뉴 슬라이드 업
      }
  );



  ScrollTrigger.create({
    trigger:".sc-bestmenu",
    start:"0% 15%",
    end:"100% 0%",
    onEnter:function(){
      $('.header .white').css('display','none');
      $('.header .red').css('display','block');
      $('.header .wrap .gnb .main-menu>li>a').css('color','#000')
      $('.header').css(
        'background-color','#fff'
      )
      $('.header .gnb .title').css('color','#000')
      $('.side-btn').addClass('show')
    },
    onLeaveBack:function(){
      $('.header .white').css('display','block')
      $('.header .red').css('display','none');
      $('.header .wrap .gnb .main-menu>li>a').css('color','#fff')
      $('.header').css(
        'background-color','transparent'
      );
      $('.header .gnb .title').css('color','#fff')
      $('.side-btn').removeClass('show')
    }
  })
    


  const txtSlide = new Swiper('.txt-slide',{
    loop:true,
    speed: 800,
    effect:"fade",
    allowTouchMove:false
});

const bgSlide = new Swiper('.bg-slide',{
    loop:true,
    speed: 800,
    navigation: {
        nextEl: '.sc-banner .btn-next',
        prevEl: '.sc-banner .btn-prev',
    },
    pagination:{
        el:".sc-banner .progress",
        type: "progressbar",
    },
    on:{
        "init":function(){
            document.querySelector('.sc-banner .curr').textContent = pad(this.realIndex+1);
            document.querySelector('.sc-banner .total').textContent = pad(this.slides.length-2);
        },
        "slideChange":function(){
            document.querySelector('.sc-banner .curr').textContent = pad(this.realIndex+1);
            txtSlide.slideToLoop(this.realIndex);
        }
    }
});

function pad(num) {
    return num < 10 ? '0' + num : num;
}

    // mainSlide.controller.control = txtSlide

    // txtSlide.on("slideChange",function(){
    //   mainSlide.slideToLoop(this.realIndex)
    // })
    
    // pagination:{
      //   el:".sc-banner .pagination",
      //   type:"custom",
      //   renderCustom: function (swiper, current, total) {
      //     current = (current < 10) ? '0'+current : current;
      //     total = (total < 10) ? '0'+total : total;
      //     return `
      //       <div class="curr">${current}</div>
      //       <div class="progress"></div>
      //       <div class="total">${total}</div>
      //       `;
      //     // const fillPer = (current / total) * 100;
      //     // const fillWidth = fillPer + '%;';
      //     // return '<span class="number">0<span class="current">' + current + '</span></span><div class="progress__bar"><span class="progress__fill" style="width:' + fillWidth + '"></span></div><span class="number">0' + total + '</span>';
      //   },
      // },

     // on:{
      //   "slideChange":function(){
      //     txtSlide.slideToLoop(this.realIndex)
      //   }
      // }
      // pagination: {
      //   el: ".custom-pagination",
      //   type: "custom",
      //   renderCustom: function (swiper, current, total) {
      //       const fillPer = (current / total) * 100;
      //       const fillWidth = fillPer + '%;';
      //       return '<span class="number">0<span class="current">' + current + '</span></span><div class="progress__bar"><span class="progress__fill" style="width:' + fillWidth + '"></span></div><span class="number">0' + total + '</span>';
      //   },
      // },
      // navigation: {
      //   nextEl: '.main-slide .swiper-button-next',
      //   prevEl: '.main-slide .swiper-button-prev',
      // },
      // autoplay: {
      //   delay : 4000,
      // }



    // if($('.main-slide .swiper-slide.first').hasClass('swiper-slide-active')){
        
    //   $('.text-content.second').css('opacity',0);
    //   $('.text-content.first').css('opacity',1);
    // } else{
    //   $('.text-content.first').css('opacity',0);
    //   $('.text-content.second').css('opacity',1);
    // }
    // gsap.to('.inner',{
    //   scrollTrigger:{
    //     trigger:".sc-banner",
    //     start:"0% 0%",
    //     end:"100% 100%",
    //     scrub:1,
    //     // markers:true,
    //   },
    //   'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
    // },
    // )



    gsap.from('.sc-bestmenu .title .text',{
      yPercent: -100,
      scrollTrigger:{
        trigger:".sc-bestmenu",
        start:"0% 50%",
        end:"0% 50%",
        // markers:true,
        toggleActions:"play none none reverse",
      },
      opacity:0,
    })



    gsap.from('.sc-bestmenu .bestmenu',{
      yPercent: 10,
      scrollTrigger:{
        trigger:".sc-bestmenu",
        start:"0% 30%",
        end:"0% 30%",
        // markers:true,
        toggleActions:"play none none reverse",
      },
      opacity:0,
    })



    
    gsap.from('.sc-promotionvideo .video-box',{
      yPercent: 10,
      scrollTrigger:{
        trigger:".sc-bestmenu .english",
        start:"0% 5%",
        end:"0% 5%",
        // markers:true,
        toggleActions:"play none none reverse",
      },
      opacity:0,
    })





    $('.sc-promotionvideo .marquee').each(function(i,el){
        gsap.from($(this),{
        scrollTrigger:{
          trigger:$(this),
          start:"0% 90%",
          end:"100% 5%",
          // markers:true,
          toggleActions:"play none none reverse",
        },
        duration:1,
        opacity:0,
      })

    })






  //   gsap.to( ".sc-searchstore .bg img", {
  //     duration: 3,
  //     scrollTrigger: {
  //         trigger: ".sc-searchstore",
  //         start: "0% 70%",
  //         end: "0% 30%",
  //         scrub: true,
  //         toggleClass: "scrollingzoomin",
  //         // markers: {
  //         //     startColor: "red",
  //         //     endColor: "red"
  //         // }
  //     }
  // })
  gsap.from('.sc-searchstore .bg img',{
    scale:1.3,
    scrollTrigger:{
      trigger:".sc-searchstore .bg img",
      start:"10% 100%",
      end:"90% 100%",
      // markers:true,
      onEnterBack:function(){
        $('.sc-searchstore .bg img').css("transform", "scale(1)");
      }
    },
  });
  gsap.from('.sc-searchstore .search-area',{
    scrollTrigger:{
      trigger:".sc-searchstore .bg img",
      start:"10% 100%",
      end:"90% 100%",
      // markers:true,
      onEnter:function(){
        $('.sc-searchstore .search-area').css("max-width","72px");
      }
    },
  });
  // gsap.from('.sc-brandstory .desc',{
  //   scrollTrigger:{
  //     trigger:".sc-searchstore .search-area .bar",
  //     start:"10% 90%",
  //     end:"10% 90%",
  //     markers:true,
  //     width: '72px',
  //   },
  // });



  gsap.from('.sc-event .title-area',{
    yPercent: -10,
    scrollTrigger:{
      trigger:".sc-searchstore .search-area",
      start:"0% 5%",
      end:"0% 5%",
      // markers:true,
      toggleActions:"play none none reverse",
    },
    opacity:0,
  });
  gsap.from('.sc-event .event-list .stagger',{
    scrollTrigger:{
      trigger:".sc-searchstore .search-area",
      start:"0% 5%",
      end:"0% 5%",
      // markers:true,
      toggleActions:"play none none reverse",
    },
    stagger:0.3,
    yPercent: -10,
    opacity:0,
  });






    const bestmenuSlide = new Swiper('.bestmenu',{
      speed: 800,
      loop: true,
      centeredSlides:true,
      loopAdditionalSlides : 3,
      slidesPerView: 4.3,  //브라우저가 1024보다 클 때
      spaceBetween: 48,
      navigation: {
        nextEl: ".bestmenu .swiper-button-next",
        prevEl: ".bestmenu .swiper-button-prev",
      },
      breakpoints: {
        0:{
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3.2,  //브라우저가 768보다 클 때
            spaceBetween: 24,
        },
        1281: {
            slidesPerView: 4.3,  //브라우저가 1024보다 클 때
            spaceBetween: 48,
        },
    },
    },
    );


    const storySlide = new Swiper('.brandstory',{
      loop:true,
      speed: 800,
      // centeredSlides:true,
      // loopAdditionalSlides:3,
      slidesPerView: 1,
      spaceBetween: 12,
      loop: true,
      navigation: {
        nextEl: ".brandstory .btn-next",
        prevEl: ".brandstory .btn-prev",
      },
      breakpoints: {
          700: {
              slidesPerView: 1.12,
              spaceBetween: 24,
          },
      },
      // autoplay: {
      //   delay : 4000,
      // }
    },
    )
  }); //지우

  gsap.from('.sc-notice .bg img',{
    scrollTrigger:{
      trigger:".sc-event .event-list",
      start:"40% 5%",
      end:"100% 5%",
      // markers:true,
      scrub: true,
      toggleActions:"play none none reverse",
    },
    stagger:0.3,
    yPercent: 10,
  })
  gsap.from('.sc-notice .wrap',{
    scrollTrigger:{
      trigger:".sc-event .event-list",
      start:"80% 5%",
      end:"100% 5%",
      markers:true,
      toggleActions:"play none none reverse",
    },
    stagger:0.3,
    yPercent: -20,
    opacity:0,
  })

  $('.side-btn .top').click(function(){
    $(window).scrollTop(0);
  })


$(function(){
  $('.title').click(function(){
    $(this).siblings('.sub-gnb').toggleClass('on').stop().slideToggle();
  })
})
$(function(){
  $('.ham').click(function(){
    $('.dimmed').addClass('on');
  })
})
