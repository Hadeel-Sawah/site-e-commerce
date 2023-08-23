$(document).ready(function(){
   $("#search-input , .fa-search").mouseenter(function(){
    $('.logo').hide();
   });
   $("#search-input , .fa-search").mouseleave(function(){
    $('.logo').show();
   });
   $('.fa-bars').click(function(){
    $('.navbar').toggle();
    $(this).toggleClass("fa-times")
   });
   $('.navbar,.navbar a').click(function(){
    $('.navbar').hide();
    $('.fa-bars').removeClass("fa-times")
   });
});
//curosal 
$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
     autoplay:false,

})
$('.product-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:3,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        550:{
            items:2 
        },
       1000:{
            items:3 
        },
    }

});
$('.review-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    items:2,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2,
        }
    }

})
$('.brand-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:4,
    autoplay:true,
    responsive:{
        0:{
            items:2,
        },
        550:{
            items:3,
        },
        600:{
            items:4,
        }
    }
})
/////
$(window).scroll(function(){
    let productOffset = $('.product').offset().top;
   if($(window).scrollTop() >= productOffset){
     $("#header").css({'backgroundColor':"#333",'transitionDuration':'1.5s',
    'boxShadow': '.2px .4px 5px  #EB4D4B'});
    $('.up').css({'opacity':'1','transitionDuration':'2s'})
}else{
    $("#header").css({backgroundColor:"transparent",'transitionDuration':'1.5s', 'boxShadow':"none"});
    $('.up').css({'opacity':'0','transitionDuration':'1s'})
};
});
$(".up").click(function(){
    $("body,html").animate({scrollTop:0},2000)
   });

////
$(".navbar a").click(function(){
    let currentHref = $(this).attr('href');
    let currentset = $(currentHref).offset().top;
     $('html,body').animate({scrollTop:currentset},2000)
})   
let inputSearch = document.getElementById('search-input');
let productValue = Array.from(document.querySelectorAll('.product-container h2'));
inputSearch.onsearch = function(){
    searchProduct();
    let productContainerOffset = $('.product').offset().top;
    if ($(window).scrollTop()!=productContainerOffset) {
        $('body,html').animate({scrollTop:productContainerOffset},1000);
    }
};
function searchProduct(){
    let inputSearchValue= inputSearch.value;
    if (productValue[0].innerHTML.toLowerCase()== inputSearchValue.toLowerCase() ||inputSearchValue == 'كوتشي'||inputSearchValue =="احذية") {
        $('.product-container').hide();
        $('.shoes').show();
    }
    else if(productValue[1].innerHTML.toLowerCase()== inputSearchValue.toLowerCase()||inputSearchValue == 'ساعات'){
       $('.product-container').hide();
       $('.watches').show();
    }
    else if(productValue[2].innerHTML.toLowerCase()== inputSearchValue.toLowerCase()||inputSearchValue == 'لبس رجالي'){
       $('.product-container').hide();
       $('.shirts').show();
    }
    else if(productValue[3].innerHTML.toLowerCase()== inputSearchValue.toLowerCase()||inputSearchValue == 'لبس حريمي'){
       $('.product-container').hide();
       $('.clothes').show();
    }
    else if(productValue[4].innerHTML.toLowerCase()== inputSearchValue.toLowerCase()||inputSearchValue == 'موبيل'||inputSearchValue == 'موبيلات'){
       $('.product-container').hide();
       $('.mobiles').show();
    }
   
   else{
      alert('This Not found')
   }
}




