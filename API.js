$(document).ready(function() {
  $("button").click(function() {
    $.ajax({
      url: 'https://randomuser.me/api/',
      success: function(data) {
        console.log(data.results[0].name.first);
        $("#div1").html(data.results[0].name.first);
      }
    });
  });
});
