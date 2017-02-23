function inputHandler(e){
	var chr = String.fromCharCode(e.charCode);
	$("p").append(chr);
}
function spanHandler(e){
	var chrCode = e.target.innerHTML.charCodeAt(0);
	$("input").trigger({'type':'keypress', 'charCode':chrCode});
}
$(document).ready(funcion(){
	$("input").keypress(function (e){inputHandler(e)});
	$("span").click(function (e){spanHandler(e)});
});