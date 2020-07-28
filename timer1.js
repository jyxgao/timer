const alarm = process.argv.slice(2);

const beepAlarm = function(times) {
  for (const el of times) {
    if (Number(el) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(el) * 1000);
    }
  }
};

beepAlarm(alarm);