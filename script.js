$(function(){

// 問１　スクロール
      $('.page-top').click(function(){
      	$("html,body").animate({scrollTop:0});
      });

      $('#languages-top').click(function(){
      	$("html,body").animate({scrollTop:$('#languages-section').offset().top});
      });

      $('#features-top').click(function(){
      	$("html,body").animate({scrollTop:$('#features-section').offset().top});
      });

      $('#pricing-top').click(function(){
      	$("html,body").animate({scrollTop:$('#pricing-section').offset().top});
      });

      $('#columns-top').click(function(){
      	$("html,body").animate({scrollTop:$('#columns-section').offset().top});
      });

      $('#form-top').click(function(){
      	$("html,body").animate({scrollTop:$('#form-section').offset().top});
      });

      $('header a').click(function(){
      	$('header a').css('text-decoration','none');
      	$(this).css('text-decoration','underline');
      });
      



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



	// 問４　モーダル
	$('.apply').click(function() {
	    $('#apply-modal').fadeIn();
		    var id = $(this).parents('.course').attr('id');
		    var title = $('#' + id).children('h3').text();
	    $('#course-select').val(id);
	    $('#apply-form').children('h2').text('【'+title+'】'+'に申し込む');
    });

　　　$('#close-modal').click(function() {
     	$('#apply-modal').fadeOut();
  　 });


// 　　　問５　フォームバリデーション
    


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


// 問８　フォームバリデーション
      $('.contact form').submit(function(){
	    	if($('#input1').val() == ''){
	            $('#input1').prev('.error-message').text('入力してください。');
	            flag = 1; 
	    	}else{
	            $('#input1').prev('.error-message').text('');
	    	}

	    	if($('#input2').val() == ''){
	            $('#input2').prev('.error-message').text('入力してください。');
	            flag = 1;
	    	}else{
	            $('#input2').prev('.error-message').text('');
	    	}

	    	if($('#textarea1').val() == ''){
	            $('#textarea1').prev('.error-message').text('入力してください。');
	            flag = 1;
	    	}else{
	            $('#textarea1').prev('.error-message').text('');
	    	}

            if(flag == 1){
            	return false;
            }

       
      });


      // $('contact form').submit(function(){
      // 	// $(this).children('input, textarea').each(function() {
    	 //    var sending_content = $(this).val();
	    	// if(sending_content == ''){
	     //        $('.error-message').text('入力してください。');
	     //        return false;
	    	// }else{
	     //        $('.error-message').text('');
	    	// }
      //   });
      // });


//       $(function(){
// 	$("form").validate({
// 		rules: {
// 			// name :{
// 			// 	required: true
// 			// },
// 			email :{
// 				required: true,
// 				email: true
// 			},
// 		// 	url :{
// 		// 		required: true
// 		// 	}
// 		// },
// 		// messages: {
// 		// 	name :{
// 		// 		required: "お名前を入力してください"
// 		// 	},
// 			email :{
// 				required: "メールアドレスを入力してください"
// 			},
// 		// 	url :{
// 		// 		required: "URLを入力してください"
// 		// 	}
// 		}
// 	});
// })


});