//adjust main background image to window height
$(window).ready(function(){
  if($.browser.msie){
    console.log("IE DETECTED!");
    $("body").children().hide();
    $("body").append("<p>It seems you're using a browser that is not supported by this website.</p>");
  }

  adjust_background();

  //delete background video if user is on mobile
  if(jQuery.browser.mobile == true){
    $("#background-video").remove();
    $("#video").remove();
    $("#volume").remove();
  }
});

$(window).resize(function(){
  adjust_background();
});

function adjust_background(){
  //var height = $(window).height();
  //$("main").css("height", height + "px");
  document.getElementById('main').style.height = window.innerHeight;
}

$("#about-button").click(function(){
  //document.getElementById("background-video").pause();
  $("#about").slideToggle();
  $("body").css("overflow", "hidden");
});

function remove_ads(){
  $("#remove-ads").text("See ya!");
  $("ins").slideToggle();
  $("#remove-ads").animate({
    top: 0 + "px"
  }).fadeToggle();
}

var video_playing = true;
var video_muted = true;

function video(){
  var bg_video = document.getElementById("background-video");
  if(bg_video.paused){
    bg_video.play();
  }
  else{
    bg_video.pause();
  }

  $("video").fadeToggle();

  if(video_playing == false){
    video_playing = true;
    $("#video").css("background-image", "url(res/video_controls/image.png)");
  }
  else if(video_playing == true){
    video_playing = false;
    $("#video").css("background-image", "url(res/video_controls/video.png)");
  }
}

function volume(){
  $("#background-video").prop('muted', !$("#background-video").prop('muted'));

  if(video_muted == false){
    video_muted = true;
    $("#volume").css("background-image", "url(res/video_controls/muted.png)");
  }
  else if(video_muted == true){
    video_muted = false;
    $("#volume").css("background-image", "url(res/video_controls/volume.png)");
  }
}

//video/image button hover
$("#video").hover(function(){
  if(video_playing == true){
    $("#video").css("background-image", "url(res/video_controls/image-hover.png)");
  }
  else if(video_playing == false){
    $("#video").css("background-image", "url(res/video_controls/video-hover.png)");
  }
}, function(){
  if(video_playing == true){
    $("#video").css("background-image", "url(res/video_controls/image.png)");
  }
  else if(video_playing == false){
    $("#video").css("background-image", "url(res/video_controls/video.png)");
  }
});

//volume/mute button hover
$("#volume").hover(function(){
  if(video_muted == true){
    $("#volume").css("background-image", "url(res/video_controls/muted-hover.png)");
  }
  else if(video_muted == false){
    $("#volume").css("background-image", "url(res/video_controls/volume-hover.png)");
  }
}, function(){
  if(video_muted == true){
    $("#volume").css("background-image", "url(res/video_controls/muted.png)");
  }
  else if(video_muted == false){
    $("#volume").css("background-image", "url(res/video_controls/volume.png)");
  }
});

$(".exit").click(function(){
  $(this).parent().slideToggle();
  $("body").css("overflow-y", "scroll");

  var bg_video = document.getElementById("background-video");
  if(bg_video.paused){
    bg_video.play();
  }
});
