/***********************************************
Responsive navigation
************************************************/
function openNav() {
	var show_nav_bar = document.getElementById("nav-bar");
	show_nav_bar.style.display = "flex";
			
	var hide_icon_menu = document.getElementById("icon-menu");
	hide_icon_menu.style.display = "none";
}

function closeNav() {
	var hide_nav_bar = document.getElementById("nav-bar");
	hide_nav_bar.style.display = "none";

	var show_icon_menu = document.getElementById("icon-menu");
	show_icon_menu.style.display = "flex";
}
document.querySelector(".icon-menu").addEventListener("click", openNav);
document.querySelector(".close-menu").addEventListener("click", closeNav);

