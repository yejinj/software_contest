//X와 햄버거 상호 변경
$(document).ready(function(){
	/*웹페이지 열었을 때*/
	$("#header_x").hide();
	$("#header_hamburger").show();

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


// 오늘 날짜
var today = new Date();
	// 년도,월,일
var yyyy = today.getFullYear();
var mm = today.getMonth() + 1; //January is 0!
var dd = today.getDate();
	// 요일
var dy = today.getDay();
var day = ['일','월','화','수','목','금','토']
var dy = day[dy]

var today = yyyy + '년 ' + mm + '월 ' + dd + '일 ' + dy + '요일';
document.getElementById("today").innerHTML = today;

// 시간
	// 현재 시각 구하기
var today = new Date();
var nowHour = today.getHours();
var nowMinute = today.getMinutes();

var time = $.makeArray($('.time').map(function(){
	var id = $(this).attr('id');
	var result = id.split(':');

	// 시간 지난 버튼은 비활성화&색 변경
	if (result[0] < nowHour){
		$(this).attr("disabled", true);
		$(this).css('background-color',' #F2F2F2');
	}else if (result[0]==nowHour && result[1] <= nowMinute){
		$(this).attr("disabled", true);
		$(this).css('background-color',' #F2F2F2');		
	};



}));

	// 18시 이후 인원수 2인까지로 제한
if (nowHour >= 18){
	document.getElementById('num_description').innerHTML = "1~2명까지 선택 가능"
	$('#in_number').attr('max','2')
}
if(nowHour < 18){
	document.getElementById('num_description').innerHTML = "1~4명까지 선택 가능"
	$('#in_number').attr('max','4')
};

// 시간 버튼 클릭 시 위에 시간 글씨 작성
$('.time').click(function(){
	var time_id = $(this).attr('id');
	document.getElementById('the_time').innerHTML = time_id;
	document.getElementById('final_time').innerHTML = time_id;
	var result = time_id.split(':');
		// 18시 이후 시간대를 선택할 경우 인원수 2인까지로 제한
		if(result[0] < 18){
			document.getElementById('num_description').innerHTML = "1~4명까지 선택 가능"
			$('#in_number').attr('max','4')
		};
		if (result[0] >= 18){
			document.getElementById('num_description').innerHTML = "1~2명까지 선택 가능"
			console.log(result[0])
			$('#in_number').attr('max','2')
		}
});

// 의자 버튼 클릭 시 좌석 글씨 작성
var idList = new Array();
var chairList = new Array();

$('.chair').click(function(){
	$(this).attr("disabled", true);
	$(this).css('background-color',' #FEFF90');
	
	//var this_chair = $(this)
	//chairList.push($(this));
	//console.log(chairList)

	var input_number = $('#in_number').val();

	var chair_id = $(this).attr('id');
	idList.push(chair_id);
	document.getElementById('seat_number').innerHTML = idList;
	document.getElementById('final_seat').innerHTML = idList;
	if (idList.length > input_number-1){
		idList.shift();
		//let chair0 = chairList.shift();
		// chair0.disabled = flase;
		//$(chair0).attr("disabled", flase);
	}
});

// 지도 보기
function see_map(){
    window.open('https://map.kakao.com/link/search/'+document.getElementById("res_name").innerText)
}

// 내용 보기
$('.btn_info').click(function(){
	$('.btn_info').hide();
	$('.see_info').hide();
})

// 메뉴 체크박스
$('input:checkbox[name="menu"]').is(":checked") ==  true

$( "input:checkbox[name='menu']").click( function (){
	if ($('input:checkbox[name="menu"]:checked').length === 1){
		if ($("input:checkbox[name='menu']").is(":checked")) {
			var checked_val = $(this).val();
			$('.menu_name').append(checked_val);
			// 선택사항
			var select = $(".salinity option:checked").text();
			document.getElementById('select_value').innerHTML = select;
			// 가격
			var price = $('.soup_price').text();
			document.getElementById('price_soup').innerHTML = price;
			document.getElementById('to_price').innerHTML = price;
		}
	}
	
	// else if ($('input:checkbox[name="menu"]:checked').length > 1){
	// 	var clone = $('.basket_menu').clone()
	// 	$('.basket_menu').clone().appendTo('.left');
		
	// 	if ($("input:checkbox[name='menu']").is(":checked")) {
	// 		var checked_val = $(this).val();
	// 		// $('#menu_name1').after(checked_val);
	// 		clone.$('.menu_name').append(checked_val)
	// 	}
	// }
	//else{
	// 	$('#menu_name1').remove(append);
	// }
});

// $('input:checkbox[name="menu"]').is('checked')
// function (){
// 	$('input:checkbox[name="menu"]').is(":checked").val();
// };


Kakao.init('5168a2647914ad98da215bfd2d30b6e9'); // 초기화

function sendLink() {
    Kakao.Link.sendCustom({
      templateId: 59213 ,
    })
  }

