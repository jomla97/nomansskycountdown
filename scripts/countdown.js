//var release_date = $('#selection-list').find(":selected").val();

$('select').on('change', function (e) {
    var release_date = $("option:selected", this).val();
    var location = $("option:selected", this).text();
  	init(release_date, location);

    $.cookie("location", location);
    if($.cookie("location") == location){
      console.log("Cookie is set and correct! Location: " + $.cookie("location"));
    }
    else{
      console.log("Cookie was not set successfully. Cookies might not be supported by this browser or they're disabled.");
    }
});
$(window).ready(function(){
  if($.cookie("location") != ""){
    var cookie_location = $.cookie("location");
    $("option:selected").prop("selected", false);

    $("#" + $.cookie("location")).prop("selected", true);
    //console.log($("#" + $.cookie("location")).prop("selected", true));
  }
  else{
    $.cookie("location", $("option:selected", this).text());
  }

	var release_date = $("option:selected", this).val();
  var location = $("option:selected", this).text();
	init(release_date, location);
});

function init(release_date, location){
  /*
  if(location == "EU"){
    release_date += " UTC+01:00";
  }
  else if(location == "NA"){
    release_date += " PST";
  }
  else if(location == "UK"){
    release_date += " GMT";
  }
  else if(location == "ASIA"){
    release_date += " UTC+09:00";
  }
  */

  release_date = "2016-08-12 17:00:00 GMT";

	console.log("Release date: " + release_date + " (" + location +")");
	if(new Date(release_date) < new Date()){
		$("#countdown").children("h1").text("IT'S OUT! GO PLAY!");
	}
	else{
		$("#countdown").children("h1").countdown(release_date, function(event){
      var release = {
        days: event.strftime('%D'),
        hours: event.strftime('%H'),
        minutes: event.strftime('%M'),
        seconds: '<span id="4">' + event.strftime('%S') + '</span> seconds'
      }

      if(release.days != "00"){
        release.days = '<span id="1">' + release.days + '</span> days';
      }
      else{
        release.days = "";
      }

      if(release.hours != "00" && release.days != "00"){
        release.hours = '<span id="2">' + release.hours + '</span> hours';
      }
      else{
        release.hours = "";
      }

      if(release.minutes != "00" && release.hours != "00" && release.days != "00"){
        release.minutes = '<span id="3">' + release.minutes + '</span> minutes';
      }
      else{
        release.minutes = "";
      }

		   $(this).html(release.days + " " + release.hours + " " + release.minutes + " " + release.seconds);
		});
	}
}
