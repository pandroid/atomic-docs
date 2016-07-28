
$('.js_add-component').click(function (event) {

    var catName = $(this).data('cat');

    event.preventDefault();
    $.ajax(this.href, {
        success: function (data) {
            $('#js_actionDrawer__content').html($(data));


                $(".bgColor").spectrum({
                    allowEmpty: true,
                    preferredFormat: "hex",
                    showInput: true
                });






            //Submits create file data
            $('#form-create-file').submit(function (event) {
                var formData = {
                    'catName': catName,
                    'compName': $('input[name=compName]').val(),
                    'compNotes': $('textarea[name=compNotes]').val(),
                    'bgColor': $('input[name=bgColor]').val()
                };

                $.ajax({
                        type: 'POST',
                        url: 'atomic-core/temp-processing/temp-create-component.php',
                        data: formData,
                        dataType: 'json',
                        encode: true

                    })
                    .done(function (data) {
                        console.log(data);
                        if (!data.success) {
                            if (data.errors.exists) {
                                $('.aa_errorBox__message').html("");
                                $('.aa_actionDrawer').prepend('<div class="aa_errorBox"><p class="aa_errorBox__message"><i class="fa fa-times aa_js-errorBox__close"></i> ' + data.errors.exists + '</p></div>').find('.aa_errorBox').hide().fadeIn(200);
                            }


                            if (data.errors.name) {
                                $('.aa_errorBox__message').html("");
                                $('.aa_actionDrawer').prepend('<div class="aa_errorBox"><p class="aa_errorBox__message"><i class="fa fa-times aa_js-errorBox__close"></i> ' + data.errors.name + '</p></div>').find('.aa_errorBox').hide().fadeIn(200);
                            }


                        } else {

                            window.location = 'atomic-core/?cat='+catName+'';
                        }
                    })
                    .fail(function (data) {
                        console.log(data);
                    });
                event.preventDefault();
            });


        },
        error: function () {
            //alert('did not worked!');
        }
    });
});