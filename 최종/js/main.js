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


// 내 정보
function my_information(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

function my_information_x() {
    var a = document.getElementById("my_information_hidden");
    a.style.display = "none"
}

// 한식
function korean(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

// 기타
function function_4(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

//모두 선택
function select_all(select_all){
	const checkboxes = document.getElementsByName("menu");
	
	checkboxes.forEach((checkbox) => {
	  checkbox.checked = select_all.checked;
	})
}

// 지도
new daum.roughmap.Lander({
    "timestamp" : "1625546572051",
    "key" : "26iz7",
    "mapWidth" : "1000",
    "mapHeight" : "420"
}).render();

//url 복사 버튼
function clip(){
	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}

//퀵 메뉴
function today_menu(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

function today_menu_x() {
    var a = document.getElementById("today_menu");
    a.style.display = "none"
}

function today_ranking(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

function today_ranking_x() {
    var a = document.getElementById("today_ranking");
    a.style.display = "none"
}

function login_hidden_x() {
    var a = document.getElementById("login_hidden");
    a.style.display = "none"
}

function unsanitary(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

function unsanitary_x() {
    var a = document.getElementById("unsanitary");
    a.style.display = "none"
}

function confirmed_patient(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

function confirmed_patient_x() {
    var a = document.getElementById("confirmed_patient");
    a.style.display = "none"
}

// 세부정보표
function detail_information(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

// 배치표
function placement_information(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

function detail_information_x() {
    var a = document.getElementById("detail_information");
    a.style.display = "none"
}

function placement_information_x() {
    var a = document.getElementById("placement_information");
    a.style.display = "none"
}

function dessert(a) {
	var b = document.getElementById(a);
	if(b.style.display=="block"){
        b.style.display = "none";
    }
	else{
        b.style.display = "block";
    }
}

function chair_color_change_1(chair){
    var a = document.getElementById("placement_chair_1");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_2(chair){
    var a = document.getElementById("placement_chair_2");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_3(chair){
    var a = document.getElementById("placement_chair_3");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_4(chair){
    var a = document.getElementById("placement_chair_4");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_5(chair){
    var a = document.getElementById("placement_chair_5");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_6(chair){
    var a = document.getElementById("placement_chair_6");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_7(chair){
    var a = document.getElementById("placement_chair_7");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_8(chair){
    var a = document.getElementById("placement_chair_8");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_9(chair){
    var a = document.getElementById("placement_chair_9");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_10(chair){
    var a = document.getElementById("placement_chair_10");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_11(chair){
    var a = document.getElementById("placement_chair_11");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_12(chair){
    var a = document.getElementById("placement_chair_12");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_13(chair){
    var a = document.getElementById("placement_chair_13");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_14(chair){
    var a = document.getElementById("placement_chair_14");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_15(chair){
    var a = document.getElementById("placement_chair_15");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_16(chair){
    var a = document.getElementById("placement_chair_16");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_17(chair){
    var a = document.getElementById("placement_chair_17");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_18(chair){
    var a = document.getElementById("placement_chair_18");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_19(chair){
    var a = document.getElementById("placement_chair_19");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_20(chair){
    var a = document.getElementById("placement_chair_20");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_21(chair){
    var a = document.getElementById("placement_chair_21");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_22(chair){
    var a = document.getElementById("placement_chair_22");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_23(chair){
    var a = document.getElementById("placement_chair_23");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function chair_color_change_24(chair){
    var a = document.getElementById("placement_chair_24");
    a.style.backgroundColor = "rgb(253, 217, 167)";
    a.style.transform = "scale(1.2)"
}

function logout(){
    var a = document.getElementById("my_information_name");
    a.style.display = "none";

    var b = document.getElementById("my_information_btn");
    b.style.display = "none";

    var c = document.getElementById("logout");
    c.style.display = "none";

    var d = document.getElementById("login_ment");
    d.style.display = "";
}

function login_func(){
    var a = document.getElementById("login_hidden");
    a.style.display = "";
}