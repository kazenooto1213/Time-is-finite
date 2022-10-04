const clock = () => {
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let dayNum = d.getDay();

  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = weekday[dayNum];

  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  // 1桁の場合は0を足して2桁に
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // 日付・時刻の文字列をテンプレート文字列で作成
  let today = `${year}.${month}.${date} ${day}`;
  let time = `${hour}:${min}:${sec}`;

  // 文字列を出力
  document.querySelector('.clock_date').innerText = today;
  document.querySelector('.clock_time').innerText = time;
};

// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);