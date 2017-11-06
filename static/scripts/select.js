function select() {
  site = siteLst.options[siteLst.selectedIndex].text;				//取得選項內容
  document.getElementById('stNote').innerHTML = site;				//設定選項內容

  var pm25Value = air_data_lst[siteLst.selectedIndex][0];		//取得數值
  var pm10Value = air_data_lst[siteLst.selectedIndex][1];
  var temperatuer = air_data_lst[siteLst.selectedIndex][2];
  var humidity = air_data_lst[siteLst.selectedIndex][3];
  valColor(pm25Value, pm10Value, temperatuer, humidity);		//變色處理

  document.getElementById('PM2.5').innerHTML = pm25Value;		//設定值
  document.getElementById('PM10').innerHTML = pm10Value;
  document.getElementById('Temperature').innerHTML =
    temperatuer.toFixed(1) + '&deg;C';
  document.getElementById('Humidity').innerHTML =
    humidity.toFixed(1) + '%';

  _12();			     //預設 12 小時圖型
  updateArea(pm25_lst[site]['area'],AxisY());    //更新下圖
}

// 數值變色 Function
function valColor(pm25Value, pm10Value, temperatuer, humidity) {
  if (pm25Value <= 15) {
    document.getElementById('PM2.5').style.color = 'green';
  } else if (pm25Value > 15 && pm25Value <= 35) {
    document.getElementById('PM2.5').style.color = 'gold';
  } else if (pm25Value > 35 && pm25Value <= 54) {
    document.getElementById('PM2.5').style.color = 'orange';
  } else if (pm25Value > 54 && pm25Value <= 150) {
    document.getElementById('PM2.5').style.color = 'red';
    document.getElementById('PM2.5').className = "danger";
  } else if (pm25Value > 150 && pm25Value <= 250) {
    document.getElementById('PM2.5').style.color = 'purple';
    document.getElementById('PM2.5').className = "danger";
  } else {
    document.getElementById('PM2.5').style.color = 'darkred';
    document.getElementById('PM2.5').className = "danger";
  }

  if (pm10Value <= 54) {
    document.getElementById('PM10').style.color = 'green';
  } else if (pm10Value > 54 && pm10Value <= 125) {
    document.getElementById('PM10').style.color = 'gold';
  } else if (pm10Value > 125 && pm10Value <= 254) {
    document.getElementById('PM10').style.color = 'orange';
  } else if (pm10Value > 254 && pm10Value <= 354) {
    document.getElementById('PM10').style.color = 'red';
    document.getElementById('PM10').className = "danger";
  } else if (pm10Value > 354 && pm10Value <= 424) {
    document.getElementById('PM10').style.color = 'purple';
    document.getElementById('PM10').className = "danger";
  } else {
    document.getElementById('PM10').style.color = 'darkred';
    document.getElementById('PM10').className = "danger";
  }
}
