$(document).ready(function() {

    var txtHT = $("#txtHT");
    var tbTen = $("#tbTen");

    function kiemTraHT (){
        var re = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        if (txtHT.val() == ""){
            tbTen.html("bắt buộc nhập");
            tbTen.addClass("text-danger");
            return false;
        }
        if(!re.test(txtHT.val())) {
            tbTen.html("Chữ cái đầu phải viết hoa");
            tbTen.addClass("text-danger");
            return false;
        }

        if(re.test(txtHT.val())) {
            tbTen.html("*");
            tbTen.addClass("text-success");
            return true;
        }
    };

    // txtHT.blur(kiemTraHT);

    var email = $("#email");
    var tbEmail = $("#tbEmail");
    function kiemTraEmail (){
        var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (email.val() == ""){
            tbEmail.html("bắt buộc nhập");
            tbEmail.addClass("text-danger");
            return false;
        }
        if(!re.test(email.val())) {
            tbEmail.html("Nhập theo mấu: abc@abc.xyz"); 
            tbEmail.addClass("text-danger");
            return false;
        }

        if(re.test(email.val())) {
            tbEmail.html("*");
            tbEmail.addClass("text-success");
            return true;
        }
    };
    // txtHT.blur(kiemTraEmail);

    var PW = $("#pwd");
    var tbPW = $("#tbPwd");
    function kiemTraPassword (){
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;;
        if (PW.val() == ""){
            tbPW.html("bắt buộc nhập");
            tbPW.addClass("text-danger");
            return false;
        }
        if(!re.test(PW.val())) {
            tbPW.html("Tối thiểu 1 chữ in hoa, kí tự số và kí tự đặc biệt, nhiều hơn 8 kí tự"); 
            tbPW.addClass("text-danger");
            return false;
        }

        if(re.test(PW.val())) {
            tbPW.html("*");
            tbPW.addClass("text-success");
            return true;
        }
    };

    var tdn = $("#txtDN");
    var tbTdn = $("#tbTdn");
    function kiemTraTenDangNhap (){
        var re = /^[A-z_](\w|\.|_){5,32}$/;
        if (tdn.val() == ""){
            tbTdn.html("bắt buộc nhập");
            tbTdn.addClass("text-danger");
            return false;
        }
        if(!re.test(tdn.val())) {
            tbTdn.html("phải nhập chữ không dấu, không có khoảng trống, không dùng (.-)"); 
            tbTdn.addClass("text-danger");
            return false;
        }

        if(re.test(tdn.val())) {
            tbTdn.html("*");    
            tbTdn.addClass("text-success");
            return true;
        }
    };
    // txtHT.blur(kiemTraPassword);
    
    var rePW = $("#re-pwd");
    var tbrePW = $("#tb-re-Pwd");
    function kiemTraRePassword (){
        if(rePW.val() != PW.val()){
            tbrePW.html("Mật khẩu không khớp!");
            tbrePW.addClass("text-danger");
        }
        else{
            tbrePW.html("*");
            tbrePW.addClass("text-success");
        }
    };

    txtHT.blur(kiemTraHT);
    email.blur(kiemTraEmail);
    tdn.blur(kiemTraTenDangNhap);
    PW.blur(kiemTraPassword);
    rePW.blur(kiemTraRePassword);

    $("#BtnSub").click(function() {
        let infTen = $("#inf-ten");
        infTen.html(txtHT.val());

        let infEmail = $("#inf-email");
        infEmail.html(email.val());

        let infTdn = $("#inf-Tdn");
        infTdn.html(tdn.val());

        let infPw = $("#inf-pw");
        infPw.html(PW.val());
    });

});