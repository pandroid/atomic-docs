/**
 * Created by michael on 6/23/16.
 */
var AJAX_URL = 'atomic-core/inc/ajax';


(function ($) {

	$('body').on('submit', '#form-create-file', function (event) {
		event.preventDefault();
		createComponent($(this));
		// stop the form from submitting the normal way and refreshing the page
	});

	$('body').on('submit', '#form-update-file', function (e) {
		updateComponent($(this));
	});

	$('body').on('click', '.js-show-form', function () {
		console.log('click');
		openForm($(this).data('form'), $(this));
	});

})(jQuery);

function openForm(formName, formObj) {
	var data = {
		form: formName,
		category: formObj.data('category')
	}

	if (formObj.data('component')) {
		data.component = formObj.data('component');
	}

	$.ajax({
		type: 'get',
		url: AJAX_URL + '/_open-form.php',
		data: data,
		success: function (e) {
			$('#js_actionDrawer__content').html(e);
			$('.aa_js-actionDrawer').animate({
				'right': '0px'
			});
		}
	});
}

/**
 * Create a component
 * @param formObj
 */
function createComponent(formObj) {
	reDirect = formObj.find('input[name=compDir]').val();

	var formData = {
		'category': formObj.find('input[name=compDir]').val(),
		'component': $('input[name=fileCreateName]').val(),
		'description': formObj.find('textarea[name=compNotes]').val(),
		'backgroundColor': formObj.find('input[name=bgColor]').val(),
		'form': 'component-create'
	};

	$.ajax({
		type: 'GET',
		url: AJAX_URL + '/_component.php',
		data: formData,
		encode: true,
		success: function (d) {
			console.log('success');
			var data = $.parseJSON(d);

			if (!data.success) {
				$('.aa_errorBox__message').html("");
				$('.aa_actionDrawer').prepend('<div class="aa_errorBox"><p class="aa_errorBox__message"><i class="fa fa-times aa_js-errorBox__close"></i> ' + data.message + '</p></div>').find('.aa_errorBox').hide().fadeIn(200);

			} else {
				window.location = 'atomic-core/' + reDirect + '.php';
			}
		},
		error: function (data) {
			console.log('error');
		},
		complete: function(data) {
			console.log(data);
		}
	});
}

function updateComponent(data) {
	data.form = 'component-update';
	console.log(data);
	$.ajax({
		type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
		url: AJAX_URL + '/_component.php', // the url where we want to POST
		data: data, // our data object
		encode: true,
		success: function (d) {
			console.log(d);

			var data = $.parseJSON(d);

			if (!data.success) {

				$('.aa_errorBox__message').html("");
				$('.aa_actionDrawer').prepend('<div class="aa_errorBox"><p class="aa_errorBox__message"><i class="fa fa-times aa_js-errorBox__close"></i> ' + data.message + '</p></div>').find('.aa_errorBox').hide().fadeIn(200);

			} else {
				window.location = 'atomic-core/' + reDirect + '.php';
			}
		},
		error: function (data) {
			console.log(data);
		}
	});
}
