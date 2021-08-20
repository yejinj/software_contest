//X와 햄버거 상호 변경
$(document).ready(function(){
	/*웹페이지 열었을 때*/
	$("#header_x").show();
	$("#header_hamburger").hide();

	/*x을 클릭했을 때 hamburger를 보여줌*/
	$("#header_x").click(function(){
		$("#header_x").hide();
		$(".hamburger_content").hide();
		$("#header_hamburger").show();
	});

	/*hamburger를 클릭했을 때 x을 보여줌*/
	$("#header_hamburger").click(function(){
		$("#header_x").show();
		$(".hamburger_content").show();
		$("#header_hamburger").hide();
	});
});

    //유효성 검사
    function cheak_value() {
        var form = document.user_info;

    if(!form.userName.value) {
        alert('이름을 입력하세요.');
        return false;
    }
    if(!form.ID.value == "") {
        alert('아이디를 입력하세요.');
        return false;
    }
    if(form.id_dupl.value != "id_chk"){
        alert("아이디 중복체크를 해주세요.");
        return false;
    }
    if(!form.PW.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }
    if(form.password.value.length < 10 || form.pwd.value.length > 13) {
        alert('비밀번호는 10 ~ 13자 사이로 입력하세요.');
        form.pwd.focus() ;
        return false;
    }
    if(form.PW_cheak.value != form.PW.value) {
        alert('비밀번호를 동일하게 입력해주세요.');
        return false;
    }
    if(!form.userPhone.value){
        alert("전화번호를 입력하세요.");
        return false;
    }
    if(!form.mail_id.value) {
        alert('e-mail을 입력하세요.');
        return false;
    }
}
//아이디 중복체크 화면
function open_id_chk(){
    window.name="parentForm";
    window.open("member/id_cheak_form.jsp", "chk_form", "width =500, height=300, resizable=no, scrollbar=no");
}
function input_id_chk(){
    document.user_info.id_dupl.value="id_unchk";
}

function id_chk_popup(){
    document.getElementById("user_id").value = opener.document.user_info.ID.value;
}

var httpRequest = null;
        
// httpRequest 객체 생성
function getXMLHttpRequest(){
    var httpRequest = null;

    if(window.ActiveXObject){
        try{
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");    
        } catch(e) {
            try{
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e2) { httpRequest = null; }
        }
    }
    else if(window.XMLHttpRequest){
        httpRequest = new window.XMLHttpRequest();
    }
    return httpRequest;    
}

// 회원가입창의 아이디 입력란의 값을 가져온다.
function chk_id(){
    document.getElementById("user_id").value = opener.document.user_info.ID.value;
}

// 아이디 중복체크
function id_check(){

    var ID = document.getElementById("user_id").value;

    if (!ID) {
        alert("아이디를 입력하지 않았습니다.");
        return false;
    } 
    else if((ID < "0" || ID > "9") && (ID < "A" || ID > "Z") && (ID < "a" || ID > "z")){ 
        alert("한글 및 특수문자는 아이디로 사용하실 수 없습니다.");
        return false;
    }
    else
    {
        var param="id="+ID
        httpRequest = getXMLHttpRequest();
        httpRequest.onreadystatechange = callback;
        httpRequest.open("POST", "MemberIdCheckAction.do", true);    
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
        httpRequest.send(param);
    }
}

function callback(){
    if(httpRequest.readyState == 4){
        // 결과값을 가져온다.
        var resultText = httpRequest.responseText;
        if(resultText == 0){
            alert("사용할수없는 아이디입니다.");
            document.getElementById("Btn_cancle").style.visibility='visible';
            document.getElementById("btn_use").style.visibility='hidden';
            document.getElementById("msg").innerHTML ="";
        } 
        else if(resultText == 1){ 
            document.getElementById("Btn_cancl").style.visibility='hidden';
            document.getElementById("btn_use").style.visibility='visible';
            document.getElementById("msg").innerHTML = "사용 가능한 아이디입니다.";
        }
    }
}

// 사용하기 클릭 시 부모창으로 값 전달 
function sendCheckValue(){
    // 중복체크 결과인 idCheck 값을 전달한다.
    opener.document.user_nfo.id_dupl.value ="id_cheak";
    // 회원가입 화면의 ID입력란에 값을 전달
    opener.document.user_info.ID.value = document.getElementById("user_id").value;
    
    if (opener != null) {
        opener.chk_form = null;
        self.close();
    }    
}    


