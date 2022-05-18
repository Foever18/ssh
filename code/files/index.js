
        $(function () {
          var boxTop =$('.container').offset().top
          $(window).scroll(function () {
              if($(document).scrollTop() >= boxTop) {
                  $('.back').fadeIn();
              }else{
                $('.back').fadeOut();
              }
          })
        $('.back').click(function () {
            // 点击按钮让页面优雅的滚动到顶部
        //    $( document).scrollTop(0)
            $('body,html').stop().animate({
                scrollTop:0
            })
        })

        })
        console.log('法外狂徒张三');
    