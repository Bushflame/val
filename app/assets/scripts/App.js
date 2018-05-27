import NavBar from './modules/navBar';
import RevealOnScroll from './modules/revealOnScroll';
import $ from 'jquery';
import StickyNav from './modules/sticky';
var navbar = new NavBar();
var stickynav = new StickyNav();
new RevealOnScroll($('.scrollReveal'),'80%');


