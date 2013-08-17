// Avoid `console` errors in browsers that lack a console.
(function() {
  if (window.console) {
    return;
  }
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
  }
}());

$(function () {
  var $window = $(window);

  // only focus the email input field if doing so would not trigger the page to jump down
  var $subscribeInput = $('.side-email input[type="email"]').filter(function(i,el){return $(el).is(':visible');});
  if ($subscribeInput.position().top + $subscribeInput.height() < $window.height()) {
    $subscribeInput.focus();
  }

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

  // after the google contact form submission's response is loaded in the iframe
  $('#contact-form-frame').load(function() {
    var $alert = $('.alert');
    $alert.addClass('alert-success');
    $alert.find('strong').text('Thanks!');
    $alert.find('span').text("I'll get back to you ASAP!");
    $alert.slideToggle(200);
    // automatically disappear
    setTimeout(function() {
      if ($alert.is(':visible')) {
        $alert.slideToggle(200);
      }
    },4000);
  });

  // toggle search bar
  var toggledSearch = false;
  var toggleSearch = function() {
    toggledSearch = !toggledSearch;
    $this = $(this);
    $this.toggleClass('force-hide');
    $this.parent().toggleClass('fullwidth');
    $this.siblings('.input-padding-wrapper').toggleClass('inline-block');
    $this.siblings('a').toggleClass('force-hide'); // either .search-toggle or .close-search
    $('.nav-list li').toggleClass('force-hide');
  };
  $('.search-toggle, .close-search').click(toggleSearch);
  // 767 px threshold
  // if browser window expands after search bar activated, clear the special search toggle
  $window.resize(function() {
    if (toggledSearch) {
      var width = $window.width();
      if (width > 767) {
        toggleSearch.call($('.close-search')[0]);
      }
    }
  });

  // toggle navbar with menu button
  var toggledNav = false;
  var toggleNav = function(duration) {
    toggledNav = !toggledNav;
    $this = $(this);
    $nav = $this.siblings('.side-nav');
    $nav.slideToggle(duration, function(){
      if ($nav.css('display') === 'none') {
        $nav.css('display','');
      }
    });
  };
  $('.menu-btn').click(function() {
    toggleNav.call(this,300);
  });
  $window.resize(function() {
    if (toggledNav) {
      var width = $window.width();
      if (width > 440) {
        toggleNav.call($('.menu-btn')[0],0);
      }
    }
  });
});
