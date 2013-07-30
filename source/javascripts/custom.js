$(function () {
  // auto focus contact form when it is opened
  $('.contact-modal').on('shown', function() {
    $(this).find('input[type="text"]').focus();
  });

  // don't show annoying red invalid styling unless user actually clicks button or changes focus and gets it wrong
  $('form').each(function(index,el) {
    var $el = $(el);
    if ($el.find('.defer-invalid').length) {
      $el.find('input[type="submit"]').click(function() {
        $el.find(':invalid').removeClass('defer-invalid');
      });
    }
  });
  $('.defer-invalid').on('change submit', function() {
    console.log('fired by', this);
    // invalid, remove defer-invalid
    if ($(this).parent().find(':invalid').length) {
      $(this).removeClass('defer-invalid');
    }
    // valid:
    else {
      $(this).addClass('defer-invalid');
    }
  });
});
