//main navigation


jQuery(document).ready(function($){


  $(".scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });


  if($(window).width() < 1025)
  {
      $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
  }
   $('.navbar-nav li .clickD').click(function(e) {
      e.preventDefault();
      var $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.removeClass('toggled');
          $this.next().hide();
      } else {
          $this.parent().parent().find('.sub-menu').removeClass('show');
          $this.parent().parent().find('.toggled').removeClass('toggled');
          $this.parent().parent().find('.sub-menu').hide();
          $this.next().toggleClass('show');
          $this.toggleClass('toggled');
          $this.next().show();
      }
  });

   $('html').click(function(){
      $('.navbar-nav li .clickD').removeClass('toggled');
  });
    $(document).click(function(){
       $('.navbar-nav li .clickD').removeClass('toggled');
  });
    $('.navbar-nav').click(function(e){
    e.stopPropagation();
  });





  // accordian
  $('.accordion .toggle').click(function(e) {
      e.preventDefault();
    
      var $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.removeClass('active');
          $this.parent().removeClass('active');
          $this.next().hide();
      } else {
          $this.parent().parent().find('li .inner').removeClass('show');
          $this.parent().parent().find('.active').removeClass('active');
          $this.parent().parent().find('li .inner').hide();
          $this.next().toggleClass('show');
          $this.toggleClass('active');
          $this.parent().toggleClass('active');
          $this.next().toggle();
      }
  });



});




