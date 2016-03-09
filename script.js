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
	      $(this).css('zoom','1.2');
	      
	    },
	    function() {
	      $(this).find('.lang-sentence').removeClass('text-active');
	      
	    }
	  );

	
});