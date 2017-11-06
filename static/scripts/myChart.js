function init() {       //繪圖元件初始函數
  var past_chart = document.getElementById('pastChart').getContext("2d");
  var area_chart = document.getElementById('areaChart').getContext("2d");

  past = new Chart(past_chart, past_point);
  area = new Chart(area_chart, area_point);
}

function AxisX12() { 												//12 小時 X 軸 function
  var date = new Date();
  var hour = date.getHours(); 						  //取得現在小時
  date.setHours(hour);
  var x = [];
  for (var i = 0; i < 12; i++) { 	          //產生 x 軸
    x.push(date.getHours());
    date.setHours(date.getHours() - 1)
  }
  x.reverse();                              //反轉 X 軸，讓現在時間靠右

  return x;
}

function AxisX6() {									        //6 小時 X 軸 Function
  var date = new Date();
  var x = [];
  min = date.getMinutes();
  if (min > 30)                             //時間切齊 30 分鐘
    min = 30;
  else if (min < 30)
    min = 0;

  date.setMinutes(min);

  for (var i = 0; i < 12; i++) {            //for 迴圈生成 X 軸
    var time = String(date.getHours()) + "：" + String(date.getMinutes())
    x.push(time)
    date.setMinutes(date.getMinutes() - 30)
  }
  x.reverse();

  return x;
}

function AxisX1() {                       //5 分鐘 X 軸 function
  var date = new Date();
  min = date.getMinutes();
  date.setMinutes(min - (min % 5))        //時間切齊 5 分鐘

  var x = [];
  for (var i = 0; i < 12; i++) {          //for 迴圈生成 X 軸
    var time = String(date.getHours()) + "：" + String(date.getMinutes())
    x.push(time)
    date.setMinutes(date.getMinutes() - 5)
  }
  x.reverse();

  return x;
}

function AxisY() {                       //下圖 Y 軸生成
  var x = pm25_lst[site]['area'];
  var y = [];
  var temp = Object.keys(pm25_lst);
  for(var i = 0; i < temp.length; i++){
    for(var j = 0; j < x.length; j++){
      if(temp[i] == x[j]){
        y.push(pm25_lst[temp[i]]['1'][0]);
      }
    }
  }

  return y;
}

function updatePast(x, y, name) {           //更新上圖 Function
  past_point.data.datasets[0].data = y;     //past_point_Y_Data
  past_point.data.labels = x                //past_point_X_label
  past_point.options.title.text = name;

  past.update();                            //Update past chart
}

function updateArea(x, y) {                 //更新下圖 Function
  area_point.data.datasets[0].data = y;     //Area_Y_Data
  area_point.data.labels = x 							  //Area_X_label

  area.update();                            //Update area chart
}
