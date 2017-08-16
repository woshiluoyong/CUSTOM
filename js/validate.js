$(".name").blur(function(){
    $(this).parent().children('.login-name').html("");
    $(this).css("border" ,"1px solid #ccc");
    var n=$(this).val();
    if(n=="") {
        $(this).parent().children('.login-name').html("！姓名不能为空");
        $(this).css("border" ,"1px solid red")
        return false;
    }
});

$(".password").blur(function(){
    $(this).parent().children('.login-password').html("");
    $(this).css("border" ,"1px solid #ccc");
    var p=$(this).val();
    if(p=="") {
        $(this).parent().children('.login-password').html("！密码不能为空");
        $(this).css("border" ,"1px solid red");
        return false;
    }
    if(p.length < 6) {
        $(this).parent().children('.login-password').html( "！密码长度必须大于或者等于6");
        $(this).css("border" ,"1px solid red");
        return false;
    }
})
$(".login-btn").click(function(){
    $(".login-name").html("");
    $(".login-password").html("");
    $(this).parent().parent().find(".name").css("border" ,"1px solid #ccc");
    $(this).parent().parent().find(".password").css("border" ,"1px solid #ccc")

})
$(".submit").click(function(){
    $(".login-name").html("");
    $(".login-password").html("");
    var n=$(this).val();
    if(n=="") {
        $(this).parent().parent().find(".login-name").html("！姓名不能为空");
        $(this).parent().parent().find(".name").css("border" ,"1px solid red")
    }
    var p=$(this).val();
    if(p=="") {
        $(this).parent().parent().find(".login-password").html("！密码不能为空");
        $(this).parent().parent().find(".password").css("border" ,"1px solid red")
        return false;
    }
    if(p.length < 6) {
        $(this).parent().parent().find(".login-password").html( "！密码长度必须大于或者等于6");
        $(this).parent().parent().find(".password").css("border" ,"1px solid red")
        return false;
    }
})