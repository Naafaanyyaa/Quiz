// const moveNextToInputField = (val)=>{
//     let inputFields = document.querySelectorAll('input');
//     inputFields[0].classList.add("join-input-active")
//     if(inputFields[val - 1].value != ''){
//         inputFields[val].focus()
//         inputFields[val].classList.add("join-input-active")
//     }
//     else if(inputFields[val - 1].value == ''){
//         inputFields[val - 2].focus()
//         inputFields[val - 2].classList.remove("join-input-active")
//         inputFields[val - 1].classList.remove("join-input-active")
//     }
// }

// $(".main__join-input").keyup(function() {
//     if (this.value.length == this.maxLength) {
//         $(this).addClass('join-input-active');
//         $(this).nextAll('.main__join-input:enabled:first').focus();
//     }
// });

// $('.digit-group').find('input').each(function() {
// 	$(this).on('keyup', function(e) {
// 		var parent = $($(this).parent());
		
// 		if(e.keyCode === 8 || e.keyCode === 37) {
// 			var prev = parent.find('input#' + $(this).data('previous'));
			
// 			if(prev.length) {
// 				$(prev).select();
// 			}
// 		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
// 			var next = parent.find('input#' + $(this).data('next'));
			
// 			if(next.length) {
// 				$(next).select();
// 			} else {
// 				if(parent.data('autosubmit')) {
// 					parent.submit();
// 				}
// 			}
// 		}
// 	});
// });

$('.digit-group').find('input').each(function() {
	$(this).on('keyup', function(e) {
        var input = new RegExp('[A-Za-z0-9]');

		var parent = $($(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			
			if(prev.length) {
				$(prev).select();
			}
		} else if((input.test(e))) {
			var next = parent.find('input#' + $(this).data('next'));
			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});