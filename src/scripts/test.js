
// // 匹配时间 00:00 10:10 1:10 1:0
// // var regx = /^(0?\d|1\d|2[0-3]):(0?\d|[0-5]\d)$/g

// // 千分位加逗号
// // var regThousand = /(?=\d{3}$)/g // 从后往前第一个3位
// var regThousand = /\B(?=(\d{3})\b)/g //

// var num = 122234
// num = num.toFixed(2).replace(regThousand, ",").replace(/^/,"$ ")
// console.log(num);

// // 验证密码问题
// var regPassword = /(?=.*[0-9])^\w{6-12}$/
// var regex = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[AZ]))^[0-9A-Za-z]{6,12}$/;
// console.log(regPassword.test("a66sasdasd"))
// console.log(regex.test("a66sasdasd"))

// // 匹配html标签id
// var regex = /id=("|')[^\1]*\1/
// var htmlString = '<div id="121"><div>'
// console.log(htmlString.match(regex)[0])

function debounce(fn,delay = 500){
	var timer = null
	return function(){
		var _this = this
		var args = arguments
		clearTimeout(timer)
		timer = setTimeout(function(){
			fn.apply(_this,args)
		},delay)
	}
}

function throttle(fn,delay){
	var timer = null
	return function(){
		var _this = this
		var args = arguments
		if(!timer){
			timer = setTimeout(function(){
				fn.apply(_this,args)
				clearTimeout(timer)
			},delay)
		}
	}
}

function test(s){
	console.log(s);
}

// var debounced = debounce(test,2000)
var throttled = throttle(test,2000)
setInterval(function(){
		console.log('in interval');
		throttled("22")
	},
	100)
