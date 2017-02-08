$(window).on("load", function() {   

var children = $('.post_links').children();
children.each(function(idx, val){
   $(this).css('left',(idx+1)*250+'px');
});


 var current = $('a.panel')[0];
 $(current).addClass('selected');
$(window).keydown(function(e) {
      // alert(e.keyCode);
    if((e.keyCode=='39')&&($(current).attr('href')!=='#item10')){
      // alert(current);
      // console.log($(current).attr('href'));
      $(current).removeClass('selected');
      $(current).next().addClass('selected');
      current = $(current).next();
      $('#wrapper').scrollTo($(current).attr('href'), 800);
    }
    else if((e.keyCode=='37')&&($(current).attr('href')!=='#item1')){
      // alert(current);
      // console.log($(current).attr('href'));
      $(current).removeClass('selected');
      $(current).prev().addClass('selected');
      current = $(current).prev();
      $('#wrapper').scrollTo($(current).attr('href'), 800);
     }
         var pos1=$(current).position().left; //get left position of li
          var currentscroll1=$(".post_links").scrollLeft(); // get current scroll position
          var divwidth1=$(".post_links").width(); //get div width
          pos1=(pos1+currentscroll1)-(divwidth1/2)+150; // for center position if you want adjust then change this
          console.log(pos1);
          $('.post_links').animate({
                    scrollLeft: pos1
          },500,function(){

        });
          return false;
});
   
   $('.lr_links a').on('click',function(){

      var link = $(this).attr('id');
      if((link=='next')&&($(current).attr('href')!=='#item10')){
	       $(current).removeClass('selected');
	      $(current).next().addClass('selected');
	      current = $(current).next();
	      $('#wrapper').scrollTo($(current).attr('href'), 800);
        }
      else if((link=='prev')&&($(current).attr('href')!=='#item1')){      
	       $(current).removeClass('selected');
	      $(current).prev().addClass('selected');
	      current = $(current).prev();
	      $('#wrapper').scrollTo($(current).attr('href'), 800);
        }
         var pos1=$(current).position().left; //get left position of li
          var currentscroll1=$(".post_links").scrollLeft(); // get current scroll position
          var divwidth1=$(".post_links").width(); //get div width
          pos1=(pos1+currentscroll1)-(divwidth1/2)+150; // for center position if you want adjust then change this
          console.log(pos1);
          $('.post_links').animate({
                    scrollLeft: pos1
          },500,function(){

        });
                return false;
       });

  $('a.panel').click(function() {

    $('a.panel').removeClass('selected');
    $(this).addClass('selected');

    current = $(this);

    $('#wrapper').scrollTo($(this).attr('href'), 800);

    return false;
  });



  $('.post_links a').on('click', function() {
          var pos=$(this).position().left; //get left position of li
      var currentscroll=$(".post_links").scrollLeft(); // get current scroll position
      var divwidth=$(".post_links").width(); //get div width
      pos=(pos+currentscroll)-(divwidth/2)+150; // for center position if you want adjust then change this
      $('.post_links').animate({
                scrollLeft: pos
      },500,function(){

    });
  });
   
  $(window).resize(function() {
    resizePanel();
  });
    resizePanel();
   function resizePanel() {

  width = $(window).width();
  height = $(window).height();

  mask_width = width * $('.item').length;

  $('#debug').html(width + ' ' + height + ' ' + mask_width);

  $('#wrapper, .item').css({
    width: width,
    height: height
  });
  $('#mask').css({
    width: mask_width,
    height: height
  });
  $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}
});

