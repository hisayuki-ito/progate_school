$(function(){

// 問題２　もっと詳しくボタン
	  $('#read-more-btn').click(function(){
	  	if($(this).hasClass('open')){
	      $('#intro').fadeOut();
	      $('.read-more').removeClass('open');
	      $(this).text('もっと詳しく');
	  	}else{
	      $('#intro').fadeIn();
	      $(this).addClass('open');
	      $(this).text('閉じる');
	  	}
	  });

// 　　問題３ 学習言語ホバー
	　$('.language-box').hover(
	    function() {
	      $(this).find('.lang-sentence').addClass('text-active');
	      
	    },
	    function() {
	      $(this).find('.lang-sentence').removeClass('text-active');
	      
	    }
	  );

// 問６　コラム画像ホバー
      $('.column-image').hover(
	    function() {
	      $(this).css('background-size','120%');
	      $(this).children('.zoom-bg').fadeIn();
	      
	    },
	    function() {
	      $(this).css('background-size','100%');
	      $(this).children('.zoom-bg').fadeOut();
	      
	    }
	  );

// 問７　コラム絞り込み

	  $('#no-category-filter').click(function(){
	  	$('.column-pg').fadeOut();
        $('.no-category').fadeIn();
        $('#no-category-filter').addClass('selected');
        $('#column-pg-filter').removeClass('selected');
        $('#all-filter').removeClass('selected');


	  	// $('.column-pg').css('display','none');
    //     $('.no-category').css('display','inline-block');
	  });

	  $('#column-pg-filter').click(function(){
	  	$('.no-category').fadeOut();
	  	$('.column-pg').fadeIn();
	  	$('#no-category-filter').removeClass('selected');
        $('#column-pg-filter').addClass('selected');
        $('#all-filter').removeClass('selected');
	  	// $('.no-category').css('display','none');
	  	// $('.column-pg').css('display','inline-block');
	  });

	  $('#all-filter').click(function(){
	  	$('.no-category').fadeIn();
	  	$('.column-pg').fadeIn();
	  	$('#no-category-filter').removeClass('selected');
        $('#column-pg-filter').removeClass('selected');
        $('#all-filter').addClass('selected');
	  	// $('.no-category').css('display','none');
	  	// $('.column-pg').css('display','inline-block');
	  });



});