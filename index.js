$(document).ready(function(){
    $name=$("#username"),
    $phone=$("#phone"),
    $pas=$("#pass"),
    $msg=$("#qjxbFmj"),
    $qaf=$("#qjxaFmj"),
    $qf=$("#qjxFmj"),
    $btn=$("#but"),
    function t(n){
        $(n).css("display","none")
    }
    function n(n,e){
        var t=$(n);
        t.html(e),
        t.css("display","block")
    }
    num=6,
    $name.blur(function(){t("#inputc"),
    console.log(e("#username"));
    var n=e("#username");
    if(""===$name.val())
    return $msg.html("用户名不能为空！"),
    !1;
    ""!=$name.val()&&0<n&&n<14?$msg.html(""):""!=$name.val()&&14<n&&$msg.html("输入错误！")}),
    $name.focus(function(){
        n("#inputc"," 设置后不可修改，中英文均可，最长14个英文或7个汉字")}),
        $phone.blur(function () {
            makePhone()
        })
        function makePhone() {
            var vals = $phone.val()
            var rePass = /^1(3|4|5|7|8)\d{9}$/
            if (vals == '') {
                $phone.next().show().html('手机号不能为空')
                return
            }
            if (rePass.test(vals)) {
                $phone.next().hide()
            }
        }
        $pas.blur(function(){
            if(t("#inputd"),""===$pas.val())
            return $qf.html("密码不能为空。"),

            !1;""!=$pas.val()&&$qf.html("");/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($pas.val())?$qf.html(""):$qf.html("密码设置不符合要求！")}),
            $pas.focus(function(){
                n("#inputd"," 长度为8~14个字符<br/>  字母或数字以及标点符号至少包含两种<br/> 不允许空格、中文")}),
                $btn.click(function(){
                    var n=setInterval(function(){
                        num--,-1===num?(clearInterval(n),$btn.val("发送验证码"),
                        $btn.removeAttr("disabled"),num=6):($btn.val("已发送（"+num+"s)"),
                        $btn.attr("disabled","true")
                    )},
                1e3
            )}
        )}
    );