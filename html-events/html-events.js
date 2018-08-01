function color() {
	var col=prompt("pick a color!!!");
	var back=document.getElementsByTagName("body");
	back[0].style.backgroundColor= col;
}