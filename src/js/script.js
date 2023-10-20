(function ($) {
  $.fn.timer = function (config) {
    const customOptions = $.extend(
      {
        message: "Coming soon!",
        time: "23:59:59",
      },
      config
    );

    const tensHours = $('<span class="digit-style">').html("0");
    const onesHours = $('<span class="digit-style">').html("0");
    const tensMinutes = $('<span class="digit-style">').html("0");
    const onesMinutes = $('<span class="digit-style">').html("0");
    const tensSeconds = $('<span class="digit-style">').html("0");
    const onesSeconds = $('<span class="digit-style">').html("0");

    const hourColon = $('<span class="time-separator">').html(":");
    const minuteColon = $('<span class="time-separator">').html(":");

    const message = $('<div class="message">').html(customOptions.message);

    $(this).addClass("timer");
    $(this).append(
      tensHours,
      onesHours,
      hourColon,
      tensMinutes,
      onesMinutes,
      minuteColon,
      tensSeconds,
      onesSeconds,
      message
    );

    const regexStructure = new RegExp(/(\d\d):(\d\d):(\d\d)/);
    const timeComponents = regexStructure.exec(customOptions.time);

    let timer = setInterval(() => {
      const currentTime = new Date();
      const timeObject = new Date();
      timeObject.setHours(parseInt(timeComponents[1]));
      timeObject.setMinutes(parseInt(timeComponents[2]));
      timeObject.setSeconds(parseInt(timeComponents[3]));

      const timeDifference = timeObject - currentTime;
      if (timeDifference >= 0) {
        const difference = regexStructure.exec(
          new Date(timeDifference).toISOString().substr(11, 8)
        );

        tensHours.html(difference[1][0]);
        onesHours.html(difference[1][1]);
        tensMinutes.html(difference[2][0]);
        onesMinutes.html(difference[2][1]);
        tensSeconds.html(difference[3][0]);
        onesSeconds.html(difference[3][1]);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return this;
  };
})(jQuery);
