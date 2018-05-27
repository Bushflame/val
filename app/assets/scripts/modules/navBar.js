import $ from 'jquery';

class NavBar {
  constructor() {
	  
    this.navwrap = $(".navWrap");
    this.menuIcon = $(".navWrap__menuIcon");
    this.menuContent = $(".mainNav");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
    
  }

  toggleMenu() {
    this.menuContent.toggleClass("mainNav--visible");
    this.navwrap.toggleClass("navWrap--expanded");
  }

}

export default NavBar;