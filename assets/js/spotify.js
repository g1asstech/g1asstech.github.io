(function () {
  var timeouts = [];

  if ($.cookie("videoTime")) {
    app.videoElement.currentTime = $.cookie("videoTime");
  }

  $(".next").click(function () {
    next();
  });

  timeouts.forEach(function (timeout) {
    clearTimeout(timeout);
  });

  timeouts.forEach(function (timeout) {
    clearTimeout(timeout);
  });

  $(".startthing").remove();

  setTimeout(function () {
    var typed = new Typed("#Bruh", {
      strings: app.Texts,
      typeSpeed: 40,
      backDelay: 500,
      onComplete: function () {
        return $("span").siblings(".typed-cursor").css("opacity", "0");
      },
    });
  }, 1350);

  setTimeout(function () {
    $(".navbar").css("visibility", "visible").hide().fadeIn(500);
    $(".background").css("visibility", "visible").hide().fadeIn(500);
    $(".main").css("visibility", "visible").hide().fadeIn(500);

    $(".background").fadeIn(200, function () {
      $("#background").animate({ volume: app.musicVolume }, app.musicFadeIn);
    });
  }, 200);
})();
