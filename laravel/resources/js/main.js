$(function() {
    $('.double-prevention').on('click', function() {
        $('.double-prevention').prop('disabled', true);
        $('#update-form-submit').submit();
    });
});