'use strict';



/**
 * element toggle function
 */

 const toggleElem = function (elem) { elem.classList.toggle("active"); }


 function send(chat_id,text)
 {
   var url = 'https://api.telegram.org/bot5480714708:AAEcg7BokG-Y9xZLt1swAAj4r7XHS-o96cc/sendMessage?chat_id='+chat_id+'&text='+text

   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open( "GET", url, false ); 
   xmlHttp.send( null );
   return xmlHttp.responseText;
 }


/**
 * navbar toggle
 */

 const navbar = document.querySelector("[data-navbar]");
 const navTogglers = document.querySelectorAll("[data-nav-toggler]");
 const overlay = document.querySelector("[data-overlay]");

 for (let i = 0; i < navTogglers.length; i++) {
   navTogglers[i].addEventListener("click", function () {
     toggleElem(navbar);
     toggleElem(overlay);
   });
 }



/**
 * header sticky & back to top button
 */

 const header = document.querySelector("[data-header]");
 const backTopBtn = document.querySelector("[data-back-top-btn]");

 window.addEventListener("scroll", function () {
   if (window.scrollY >= 100) {
     header.classList.add("active");
     backTopBtn.classList.add("active");
     header.classList.add("header-anim");
   } else {
     header.classList.remove("active");
     backTopBtn.classList.remove("active");
     header.classList.remove("header-anim");
   }
 });



/**
 * search box toggle
 */

 const searchTogglers = document.querySelectorAll("[data-search-toggler]");
 const searchBox = document.querySelector("[data-search-box]");

 for (let i = 0; i < searchTogglers.length; i++) {
   searchTogglers[i].addEventListener("click", function () {
     toggleElem(searchBox);
   });
 }



/**
 * whishlist button toggle
 */

 const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

 for (let i = 0; i < whishlistBtns.length; i++) {
   whishlistBtns[i].addEventListener("click", function () {
     toggleElem(this);
   });
 }


 const modal = document.querySelectorAll("[data-join-toggler]")
 const Modal = document.querySelector("[data-join-modal]")

 for (let i=0; i < modal.length; i++) {
   modal[i].addEventListener('click',function(){
     // alert('111')
     // send(1384417190,'test')
     // send('https://api.telegram.org/bot5480714708:AAEcg7BokG-Y9xZLt1swAAj4r7XHS-o96cc/sendMessage?chat_id=1384417190&text=test')
     // alert(111)
     toggleElem(Modal)
   })
 }

 const sendBtn = document.querySelectorAll("[data-send-btn]")
 const fname = document.getElementById('fname')
 const lname = document.getElementById('lname')
 const phone = document.getElementById('phone')
 const yonalish = document.getElementById('yonalish')

 const sub = document.querySelectorAll("[data-send-req]")
 var form = document.getElementById('register-form')  
 form.addEventListener('submit',function(event){
   event.preventDefault();
   var text = `Student: ${fname.value} ${lname.value} %0aPhone: ${phone.value} %0aCourse: ${yonalish.value}`
   // send(1384417190,text)
   send(446415034,text)
   send(1245423496,text)
   toggleElem(Modal)
 })