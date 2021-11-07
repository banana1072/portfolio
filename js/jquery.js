$(function(){

    var header = document.getElementById("body_header");
    var header_height = header.clientHeight;
    $(".var").on("inview", function (event, isInView) {
        if ($(".var").hasClass("is-show")) {
      }
        else{
            scrollvar();
        }
      $(".var").stop().addClass("is-show");
    });

    $('#home_scroll').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    $('#about_scroll').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(".main-about");
        let position = target.offset().top-header_height;
        
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $('#skill_scroll').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(".main-skill");
        let position = target.offset().top-header_height;
       
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $('#works_scroll').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(".main-works");
        let position = target.offset().top-header_height;
        
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    
    $('#contact_scroll').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(".main-contact");
        let position = target.offset().top-header_height;
        
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    
    $('.header-menu-button').hover(function(){
        var header_border = $(this).children(".header-border")
        if(header_border.hasClass("header-border-animate")){
            header_border.removeClass("header-border-animate");
        }
        else{
            header_border.addClass("header-border-animate");
        }
    });
  });