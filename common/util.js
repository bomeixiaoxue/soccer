function friendlyDate(timestamp) {
	var formats = {
		'year': '%n% 年前',
		'month': '%n% 月前',
		'day': '%n% 天前',
		'hour': '%n% 小时前',
		'minute': '%n% 分钟前',
		'second': '%n% 秒前',
	};

	var now = Date.now();
	var seconds = Math.floor((now - timestamp) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);

	var diffType = '';
	var diffValue = 0;
	if (years > 0) {
		diffType = 'year';
		diffValue = years;
	} else {
		if (months > 0) {
			diffType = 'month';
			diffValue = months;
		} else {
			if (days > 0) {
				diffType = 'day';
				diffValue = days;
			} else {
				if (hours > 0) {
					diffType = 'hour';
					diffValue = hours;
				} else {
					if (minutes > 0) {
						diffType = 'minute';
						diffValue = minutes;
					} else {
						diffType = 'second';
						if (seconds > 0) {
							diffValue = seconds
						} else{
							diffValue = 1
						}
					}
				}
			}
		}
	}
	if(diffValue === NaN || diffValue === 'NaN') {
		diffValue = 1
	}
	return formats[diffType].replace('%n%', diffValue);
}

function getDate(str){
	var date = new Date(str)
	var y = date.getFullYear(),
	month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + parseInt(date.getMonth()+1),
	day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
	h =  date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
	m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
	s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
	return y + '-' + month + '-' + day;
}

function getDateTime(str){
	var date = new Date(str)
	var y = date.getFullYear(),
	month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + parseInt(date.getMonth()+1),
	day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
	h =  date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
	m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
	s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
	return y + '-' + month + '-' + day + ' ' + h + ':' + m;
}

function getUserInfo(){
	var user = {};
	uni.getStorage({
		key: "user",
		success(res) {
			user = res.data;
		}
	});
	return user;
}

function setUserInfo(user){
	uni.setStorage({
		key: "user",
		data: user
	})
}

function getToken(){
	var token = '';
	uni.getStorage({
		key: "token",
		success(res) {
			token = res.data;
		}
	});
	return token;
}

function getDatetime(str) {
	return str;
}

export {
	friendlyDate,
	getDate,
	getUserInfo,
	getToken,
	getDatetime
}
