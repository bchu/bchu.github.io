(function() {
  // sets window.mobile to true if this is a mobile browser
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.mobile=true})(navigator.userAgent||navigator.vendor||window.opera);
  // load fastclick if mobile browser
  Modernizr.load({
    test: window.mobile,
    yep: '//cdnjs.cloudflare.com/ajax/libs/fastclick/0.6.7/fastclick.min.js',
    complete: function() {
      if (window.FastClick) FastClick.attach(document.body);
    }
  });

  // Avoid 'console' errors in browsers that lack a console.
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

  // Creates a bootstrap alert that is shown and then disappears
  // type: string
  // header: string
  // body: string
  var triggerAlert = function(type,header,body) {
    var $alert = $('.alert');
    $alert.addClass('alert-'+type);
    $alert.find('strong').text(header);
    $alert.find('span').text(body);
    $alert.slideToggle(200);
    // automatically disappear
    setTimeout(function() {
      if ($alert.is(':visible')) {
        $alert.slideToggle(200);
      }
    },4000);
  };

  // only focus the email input field if doing so would not trigger the page to jump down
  // var $subscribeInput = $('.side-email input[type="email"]').filter(function(i,el){return $(el).is(':visible');});
  // if ($subscribeInput.position().top + $subscribeInput.height() < $window.height()) {
  //   $subscribeInput.focus();
  // }

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

  // Submit contact form:
  // -handle email signups from contact modal
  // -close modal on submit
  // -trigger a success alert
  $('.contact-modal').submit(function(e) {
    var $this = $(this);

    // handle spam:
    // if name is link
    if ($this.find('.contact-name').val().match(/http:\/\//)) {
      e.preventDefault();
    }

    // if email subscription box is checked
    else if ($this.find('input[type="checkbox"]').prop('checked')) {
      var $form = $this.find('form');
      var email = $form.find('input[type="email"]').val();
      // get mailchimp subscribe form
      var $subscribeForm = $('.subscribe-form');
      var $inputFill = $subscribeForm.find('input[type="email"]');
      $inputFill.val(email);
      setTimeout(function() {
        // submit mailchimp form and erase value
        $subscribeForm.submit();
        $inputFill.val('');
      }, 500);
    }
    $this.modal('hide');
    // slight delay
    setTimeout(function() {
      triggerAlert('success','Thanks!',"I'll get back to you ASAP!");
    },300);
  });

  // push contact button back up when modal hides
  $('.contact-modal').on('hide', function() {
    $('a[data-target=".contact-modal.hide.fade"]').button('toggle');
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
    $('.list-group .list-group-item').toggleClass('force-hide');
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
