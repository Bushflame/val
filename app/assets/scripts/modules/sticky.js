import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class StickyNav {
	constructor(){
		this.navwrap = $('.navWrap');
		this.navTriggerElement = $('.top__header-title');
		this.createNavBarWaypoint();
		this.pageSections = $('.section');
		this.headerLinks = $('.mainNav a');
		
		this.createPageSectionWaypoints();
		this.addSmoothScroll(); 
	}
		addSmoothScroll(){
		this.headerLinks.smoothScroll();	
	}
	createNavBarWaypoint(){
		var that = this;		
		new Waypoint({
			element:this.navTriggerElement[0],
			handler: function(direction){
				if (direction =='down'){
				that.navwrap.addClass('navWrap--dark');							
				}else {
				that.navwrap.removeClass('navWrap--dark');							
				}
			}
		});
	}
	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element:currentPageSection,
				handler: function(direction){
					if(direction == 'down'){
					var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
					that.headerLinks.removeClass('is-current-link');
					$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset:'25%'
			});
			new Waypoint({
				element:currentPageSection,
				handler: function(direction){
					if(direction == 'up'){
					var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
					that.headerLinks.removeClass('is-current-link');
					$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset:'-40%'
			});			
			
		});
	}
}

export default StickyNav;