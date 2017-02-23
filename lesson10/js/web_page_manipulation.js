$(window).load(function(){
	$(document).mousemove(mousePosition);
	$("*").mouseover(elementInfo);
	$("*").change(elementInfo);
	$("*").keyup(elementInfo);
	$(window).resize(windowResize);
});
function mousePosition(e){
	e.stopPropagation();
	$("#screenSize").html(screen.width + "x" + screen.height);
	$("#colors").html(screen.colorDepth+"bit");
	$("#browserSize").html(window.innerWidth + "x" + window.innerHeight);
	$("#mousePosition").html("X:" + e.screenX + " Y:" + e.screenY);
	$("#pagePosition").html("X:" + e.pageX + " Y:" + e.pageY);
	$("#scrollPosition").html("X:" + e.clientX + " Y:" + e.clientY);
}
function elementInfo(e){
	e.stopPropagation();
	$(".infoContainer span").html("");
	var domObj = e.target;
	var jObj = $(domObj);
	$("#elementId").html(domObj.id);
	$("#elementType").html(domObj.prop('tagName'));
	$("#elementClass").html(domObj.className);
	$("#elementSize").html(domObj.width() + "x" + jObj.height());
	$("#elementPosition").html(jObj.offset().top + ", " + jObj.offset().left);
	$("#elementColor").html(jObj.css("colo"));
	$("#elementValue").html(jObj.val());
	try{
		$("#elementChecked").html(jObj.prop('checked').toString());
	} catch (e) {}
}
function windowResize(e){
	$("#browserSize").html(window.innerWidth + "X" + window.innerHeight);
}