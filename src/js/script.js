(function ($) {
  $.fn.timer = function (options) {
    const finalOptions = $.extend(
      {
        message: "Coming soon!",
        time: "23:59:59",
      },
      options
    );

    const hourTens = $('<span class="digit">').html("0");
    const hourOnes = $('<span class="digit">').html("0");
    const minuteTens = $('<span class="digit">').html("0");
    const minuteOnes = $('<span class="digit">').html("0");
    const secondTens = $('<span class="digit">').html("0");
    const secondOnes = $('<span class="digit">').html("0");

    const hourSeparator = $('<span class="separator">').html(":");
    const minuteSeparator = $('<span class="separator">').html(":");
    const message = $('<div class ="message">').html(finalOptions.message);

    $(this).addClass("timer");
    $(this).append(
      hourTens,
      hourOnes,
      hourSeparator,
      minuteTens,
      minuteOnes,
      minuteSeparator,
      secondTens,
      secondOnes,
      message
    );

    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
    const targetTime = regex.exec(finalOptions.time);

    let timer = setInterval(() => {
      const now = new Date();
      const target = new Date();
      target.setHours(targetTime[1]);
      target.setMinutes(targetTime[2]);
      target.setSeconds(targetTime[3]);

      const timeDifferenceInMilliseconds = target.getTime() - now.getTime();
      if (timeDifferenceInMilliseconds >= 0) {
        const difference = regex.exec(
          new Date(timeDifferenceInMilliseconds).toISOString()
        );

        hourTens.html(difference[1][0]);
        hourOnes.html(difference[1][1]);
        minuteTens.html(difference[2][0]);
        minuteOnes.html(difference[2][1]);
        secondTens.html(difference[3][0]);
        secondOnes.html(difference[3][1]);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return this;
  };
})(jQuery);
