	function getTime() {
		var myDate = new Date();
		var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var myToday = myDate.getDate(); //获取当前日(1-31)
		var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
		var myHour = myDate.getHours(); //获取当前小时数(0-23)
		var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
		var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
		var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
		$('#showDate').html(myYear + '年' + fillZero(myMonth) + '月' + fillZero(myToday) + '日');
		$('#NewTime').html(fillZero(myHour) + ':' +fillZero(myMinute) + ':' + fillZero(mySecond)+"<br>"+week[myDay]);
	};
	function fillZero(str) {
		var realNum;
		if (str < 10) {
			realNum = '0' + str;
		} else {
			realNum = str;
		}
		return realNum;
	}
	setInterval(getTime, 1000);	

		
$(function() {
    var yan = new XMLHttpRequest();
    yan.open('get', 'https://v1.hitokoto.cn/?c=j&c=c&c=d&c=f&c=h');
    yan.onreadystatechange = function () {
        if (yan.readyState === 4) {
            var data = JSON.parse(yan.responseText);
            $('#derp').html(data.hitokoto);
            $('#from').html(data.from);
                if (data.from_who!=null) {
                    $('#author').html("---作者:"+data.from_who+"");
                }else if(data.creator!=null){
                    $('#author').html("---作者:"+data.creator+"");
                }else{
                    $('#author').html("---作者:华烨");
                }
        }
    }
    yan.send();
});


	// navigator.getBattery().then(function(battery) {

		
	
			//判断网络是否正常
		// var code = window.navigator.onLine
		// if (code!=true) {
		// alert("你的设备好像网络有问题啊,这会影响我们部分功能的正常使用");
		// }


        // 是否正在充电，yes-充电
        // var supply = "电源状态:\n" + (battery.charging ? "--正在充电中" : "--没有充电了");
		// var b = document.getElementById('a');
		// b.innerText = supply;

        // // 当前剩余电量
        // var supplyder = "当前电量: " + battery.level * 100 + "%";
		// var a = document.getElementById('b');
		// a.innerText = supplyder;
		

		//判断电量多少然后进行弹窗提示
		// var number = battery.level * 100;
		// if (number>=90||number<100) {
		// 	alert("这个电量很有安全感,真不错")
		// }else if(number<50){
		// 	alert("只剩下"+number+"的电量了")

		// } else if(number<=20){
		// 	alert("救命,我快要扑街了")

		// }else{
		// 	alert("")
		// }
		

		// 获取当前网络状态
		// window.addEventListener("offline", function(e) {
		//    console.log("offline")
		// });
  
		// window.addEventListener("online", function(e) {
		//   console.log("online")
		// });
	  
		// //获取设备电量和充电状态
        // battery.addEventListener("chargingchange", function() {
        //   console.log("Battery charging? " + (battery.charging ? "当前正在充电中" : "已经没有在充电了"));
        // });
        // battery.addEventListener("levelchange", function() {
        //    console.log("Battery level: " + battery.level * 100 + "%");
        // });
    //   });


	// cpu运行    判断

	//  $(function getCpu() {
	//   let data = [];
	//   let t;
	//   let getNow = function () {
	// 	  return new Date().getTime();
	//   };
	//   let date = getNow();
  
	//   function pulse() {
	// 	  t && data.push(Date.now() - t);
	// 	  t = Date.now();
	// 	  let set = setTimeout(pulse, 50); 
	// 	  let mb = ""; // 50 - 55 正常、 55 - 60 轻微卡顿、 60 以上卡顿
	// 	  (getNow() - date) / 1000 > 1 && (nums = (data.reduce((a, b) => a + b) / data.length).toFixed(2));
	// 	  (getNow() - date) / 1000 > 1 && console.log(nums);
	// 	  (getNow() - date) / 1000 > 1 && clearTimeout(set);

	// 	  if (nums>50||nums<55) {
	// 		  var mbs = document.getElementById('mbs');
	// 		  mbs.innerText = "CPU:"+nums+"/正常";
	// 	  }else if(nums>55||nums<60){
	// 		  var mbs = document.getElementById('mbs');
	// 		  mbs.innerText = "CPU:"+nums+"/轻微";
	// 	  } else if(nums>60||nums<80){
	// 		  var mbs = document.getElementById('mbs');
	// 		  mbs.innerText = "CPU:"+nums+"/严重";
	// 	  } 
	// 	  else {
	// 		  var mbs = document.getElementById('mbs');
	// 		  mbs.innerText = "换新电脑吧";
	// 	  }
	//   }
	//   pulse()
	// });
