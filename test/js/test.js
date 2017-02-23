var clicked = 0;
function update(e){
	if (clicked === 0) {
		$("p").html("clicked");
		clicked = 1;
	}
	else {
		$("p").html("click me");
		clicked = 0;
	}
}