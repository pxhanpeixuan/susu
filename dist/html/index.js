// 切换登录
function goLogin() {
	$(".loginForm").css("display", "block");
	$(".registerForm").css("display", "none");
	$(".login").addClass("colorRed");
	$(".register").removeClass("colorRed");
}
// 切换注册
function goRegister() {
	$(".registerForm").css("display", "block");
	$(".loginForm").css("display", "none");
	$(".register").addClass("colorRed");
	$(".login").removeClass("colorRed");
}

$(function() {
	// 注册页面的提示文字
	(function register() {
		// 注册界面手机号栏失去焦点
		$(".box2 #phone").blur(function() {
			phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("手机号码不能为空!");
				return;
			} else if(!phoneReg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入正确的手机号码!");
			} else {
				$(this).addClass("correctInput");
				$(this).next().empty();
			}
		});
 
		// 注册界面验证码栏失去焦点
		$(".box2 .phonekey").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/;
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().next().css("display", "block").html("验证码不能为空！");
				return;
			} else if(!reg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().next().css("display", "block").html("验证码输入有误！");
			} else {
				$(this).next().next().empty();
				$(this).addClass("correctInput");
			}
		});
 
		// 注册界面密码栏失去焦点
		$(".box2 .password").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/
			if(reg.test($(this).val())==""){
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("密码不能为空！");
				console.log("登录界面的密码是不是为空了？？？")
			}else if(!reg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			} else {
				$(this).removeClass("errorInput");
				$(this).next().empty();
				$(this).addClass("correctInput");
			}
		});
		// 注册界面确认密码失去焦点
		$(".box2 .email").blur(function() {
			var pwd1 = $('.box2 .password').val();
			var pwd2 = $(this).val();
			if(pwd1 == "") {
				$(this).removeClass("errorInput");
				$(this).next().html("确认密码不能为空！");
				$(this).addClass("errorInput");
				return;
			} else if(pwd1 != pwd2) {
				$(this).addClass("errorInput");
				$(this).removeClass("correctInput");
				$(this).next().css("display", "block").html("两次密码输入不一致！");
			} else {
				$(this).removeClass("errorInput");
				$(this).addClass("correctInput");
				$(this).next().empty();
			}
		});
	})();
});



$(function() {
	// 登录界面生成验证码
	(function create_code() {
		function shuffle() {
			var arr = ['1', 'r', 'Q', '4', 'S', '6', 'w', 'u', 'D', 'I', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '2', 's', 't', '8', 'v', '7', 'x', 'y', 'z', 'A', 'B', 'C', '9', 'E', 'F', 'G', 'H', '0', 'J', 'K', 'L', 'M', 'N', 'O', 'P', '3', 'R', '5', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			return arr.sort(function() {
				return(Math.random() - .5);
			});
		};
		shuffle();
 
		function showAuthCode() {
			var ar1 = '';
			var code = shuffle();
			for(var i = 0; i < 6; i++) {
				ar1 += code[i];
			};
			$(".box1 .authCode").text(ar1);
		};
		showAuthCode();
		$(".box1 .authCode").click(function() {
			showAuthCode();
		});
	})();
	//登录界面账户输入框失去焦点
	(function login_validate() {
		$(".box1 .account").blur(function() {
			accountReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "" || $(this).val() == "请输入您的账号（即手机号）") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("账号不能为空！");
				console.log("账号不能为空");
				return;
			} else if(!accountReg.test($(".box1 .account").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("账号不存在!");
			} else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
			}
		});
		// 登录界面密码输入框失去焦点
		$(".box1 .password").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("密码不能为空！");
			} else if(!reg.test($(".password").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			} else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
			}
		});
 
		// 验证码输入框失去焦点
		$(".box1 .photokey").blur(function() {
			var code1 = $('.box1 .photokey').val().toLowerCase();
			var code2 = $(".box1 .authCode").text().toLowerCase();
			if($('.box1 .photokey').val() == "") {
				$('.box1 .photokey').addClass("errorInput");
				$(this).next().next().html("验证码不能为空！");
				console.log("11111")
				return;
			} else if(code1 != code2) {
				$(this).addClass("errorInput");
				$(this).next().next().css("display", "block").html("验证码输入错误！");
				console.log("22222")
			} else {
				$(this).removeClass("errorInput");
				$(this).next().next().empty();
				$(this).addClass("correctInput");
			}
		})
	})();
})