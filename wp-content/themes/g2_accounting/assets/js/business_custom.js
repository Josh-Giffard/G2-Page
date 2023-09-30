jQuery('form').on('submit', function(e){
    e.preventDefault();
    jQuery(".calculator").css("display","none");
     jQuery(".calculator_result").fadeIn(3000);

    // start all the timers
    /*jQuery('.timer').each(count);
      function count(options) {
        var $this = jQuery(this);
        options = jQuery.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }*/
  });

jQuery(document).ready(function(){
  jQuery('#calculate_quote_count').click(function() {
    var business_turnover = jQuery('#business_turnover').val();
    var business_employees = jQuery('#business_employees').val();
    var business_software = jQuery('#business_software').val();
    var growthplans = jQuery('#growthplans').val();
    var ajax_url ="/wp-admin/admin-ajax.php";
    /*var data = {business_turnover:business_turnover,business_employees:business_employees,
      business_software:business_software,growthplans:growthplans}*/

      jQuery.post({
         type: 'POST',
         url: ajax_url,
         data: { business_turnover: business_turnover, business_employees:business_employees,
          business_software:business_software, growthplans:growthplans,action:"business_calulator"},
        success: function(data) {

         var JSONObject = JSON.parse(data);
          var compliance = JSONObject[0];
          var compliance_count = compliance[0];
          var compliance_min = compliance[1];
          var compliance_max = compliance[2];

          var advice = JSONObject[1];
          var advice_count = advice[0];
          var advice_min = advice[1];
          var advice_max = advice[2];

          var growth = JSONObject[2];
          var growth_count = growth[0];
          var growth_min = growth[1];
          var growth_max = growth[2];

          jQuery('#compliance_count').html(compliance_count);
          jQuery('#compliance_range').html("$"+compliance_min+ " to $"+compliance_max);

          jQuery('#advice_count').html(advice_count);
          jQuery('#advice_range').html("$"+advice_min+ " to $"+advice_max);

          jQuery('#growth_count').html(growth_count);
          jQuery('#growth_range').html("$"+growth_min+ " to $"+growth_max);

          $('.timer').each(function () {
            var $this = $(this);
          jQuery({ Counter: 9999 }).animate({ Counter: $this.text() }, {
          duration: 2500,
          easing: 'swing',
          step: function () {
          $this.text(Math.ceil(this.Counter));
          }
        });
      });
          $('.timer2').each(function () {
            var $this = $(this);
          jQuery({ Counter: 9999 }).animate({ Counter: $this.text() }, {
          duration: 4500,
          easing: 'swing',
          step: function () {
          $this.text(Math.ceil(this.Counter));
          }
        });
      });
        }
    });
  }); 
});