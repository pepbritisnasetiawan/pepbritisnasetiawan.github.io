import '../css/main.css';
import { gsap } from 'gsap';
import $ from 'jquery';

// const videoHero = document.getElementById('vid_hero');
// videoHero.addEventListener('timeupdate', function () {
//   if (this.currentTime >= 13.0) {
//     this.currentTime = 0.0;
//   }
// });

$('#vid_hero').on('timeupdate', function () {
  if (this.currentTime >= 13.0) {
    this.currentTime = 0.0;
  }
});

// Applying smooth scroll using locomotive scroll

/* const body = document.body,
  scrollWrap = document.getElementsByClassName('smooth-scrool-wrapper')[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

let offset = 0;

body.style.height = Math.floor(height) + 'px';
function smoothScroll() {
  offset += (window.scrollX - offset) * speed;

  let scroll = 'translateY(-' + offset + 'px) translateZ(0)';
  scrollWrap.style.transform = scroll;

  requestAnimationFrame(smoothScroll);
} */

// smoothScroll();

let scrollWrap = $('.smooth-scrool-wrapper').first(),
  height = scrollWrap[0].getBoundingClientRect().height - 1,
  speed = 0.04,
  offset = 0;

$('body').css('height', Math.floor(height) + 'px');

function smoothScroll() {
  offset += (window.scrollX - offset) * speed;

  let scroll = 'translateY(-' + offset + 'px) translateZ(0)';
  scrollWrap.css('transform', scroll);

  requestAnimationFrame(smoothScroll);
}

smoothScroll();

// Menu animation start

const menu = document.getElementById('menu');
let t1 = new gsap.timeline({});

t1.to('.menu_line1', {
  duration: 0.5,
  rotate: -45,
  x: 5,
  y: 5,
  ease: 'Expo.easeOut',
});

t1.to(
  '.menu_line3',
  {
    duration: 0.5,
    rotate: 45,
    x: 5,
    ease: 'Expo.easeOut',
  },
  '-=0.5'
);

t1.to(
  '.menu_container',
  {
    duration: 1.5,
    top: 0,
    ease: 'Expo.easeOut',
  },
  '-=0.5'
);

t1.to(
  '.strokeColor',
  {
    duration: 0.15,
    stroke: '#383838',
  },
  '-=1'
);

t1.staggerFrom(
  '.stagger_menu',
  0.1, // 0.55
  {
    y: -10,
    opacity: 0,
    ease: 'Expo.easeOut',
  },
  '0.1',
  '-=1'
);

t1.reverse();

// document.getElementById('menu_checkBox').onchange = () => {
//   if ($('.menu_checkBox').is(':checked')) {
//     t1.reversed(!t1.reversed());
//     //disableScroll();
//   } else {
//     t1.reversed(!t1.reversed());
//     enableScroll();
//   }
// };

// const menuExten = document.getElementById('menu_checkBox');
$('.menu_checkBox').on('click', () => {
  t1.reversed(!t1.reversed());
});

// const staggerMenu = document.getElementsByClassName('stagger_menu');
$('.stagger_menu').on('click', () => {
  t1.reversed(!t1.reversed());
});

// change menu color after scroll

let $w = $(window).on('scroll', function () {
  if ($('.menu_checkBox').is(':checked')) {
  } else {
    if ($w.scrollTop() > 755) {
      gsap.to('.strokeColor', {
        duration: 0.15,
        stroke: '#383838',
      });
    } else {
      gsap.to('.strokeColor', {
        duration: 0.15,
        stroke: '#FFF',
      });
    }
  }
});

// enable or disable scrolling page on menu open

// function disableScroll() {
//   let TopScroll = window.scrollY || document.documentElement.scrollTop;
//   let LeftScroll = window.scrollX || document.documentElement.scrollLeft;

//   window.onscroll = function () {
//     window.scrollTo(LeftScroll, TopScroll);
//   };
// }

// function enableScroll() {
//   window.onscroll = function () {};
// }

// menu botton when clicked move to gallery section

// $('#menu_btn').on('click', () => {
//   $('html, body').animate(
//     {
//       scrollTop: $('#gallery').offset().top,
//     },
//     100
//   );
// });

// if menu button clicked move to menu page

$('#menu_btn').on('click', () => {
  window.location.href = '../../menupage.html';
});

// location button
$('.open_location_btn').on('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('#location').offset().top,
    },
    100
  );
});
