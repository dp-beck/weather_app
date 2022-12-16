// This function displays the current time.
// timezoneOffset from API is in seconds.

function currentTime(timezoneOffset) {
  const date = new Date();
  const timezoneOffsetHours = timezoneOffset / 3600;
  let hh = date.getUTCHours() + timezoneOffsetHours;
  let mm = date.getUTCMinutes();
  let ss = date.getUTCSeconds();
  let session = 'AM';

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh -= 12;
    session = 'PM';
  }
  hh = (hh < 10) ? `0${hh}` : hh;
  mm = (mm < 10) ? `0${mm}` : mm;
  ss = (ss < 10) ? `0${ss}` : ss;

  const time = hh + ':' + mm + ":" + ss + " " + session;
  document.getElementById('clock').innerText = time;

}

export default currentTime;
