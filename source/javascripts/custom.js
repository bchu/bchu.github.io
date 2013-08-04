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

  // handle email signups from contact modal
  // also close modal on submit
  $('.contact-modal').submit(function(e) {
    var $this = $(this);
    if ($this.find('input[type="checkbox"]').prop('checked')) {
      var $form = $this.find('form');
      var email = $form.find('input[type="email"]').val();
      var $subscribeForm = $('.subscribe-form');
      var $inputFill = $subscribeForm.find('input[type="email"]');
      $inputFill.val(email);
      setTimeout(function() {
        $subscribeForm.submit();
        $inputFill.val('');
      }, 500);
    }
    $this.modal('hide');
  });

  // push contact button back up when modal hides
  $('.contact-modal').on('hide', function() {
    $('a[data-target=".contact-modal.hide.fade"]').button('toggle');
  });
});
