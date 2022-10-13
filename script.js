const swiper = new Swiper('.swiper', {
    //to start display images automatically with time interval
    autoplay:{
    delay:3000,
    disableOnInteraction:false,
    },
    loop: true,

    //for moving along the images
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    //for navigate between images
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });