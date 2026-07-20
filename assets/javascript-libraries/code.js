gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo",{

    y:-80,
    opacity:0,
    duration:1

});

gsap.from(".nav-item",{

    y:-40,
    opacity:0,
    stagger:.15,
    duration:1

});

gsap.from(".small-title",{

    x:-100,
    opacity:0,
    duration:1

});

gsap.from(".hero-title",{

    x:-100,
    opacity:0,
    duration:1,
    delay:.2

});

gsap.from(".hero-desc",{

    x:-100,
    opacity:0,
    duration:1,
    delay:.4

});

gsap.from(".hero-btns",{

    y:60,
    opacity:0,
    duration:1,
    delay:.6

});

gsap.from(".hero-img",{

    scale:.7,
    opacity:0,
    duration:1.5

});

gsap.from(".floating-card",{

    y:80,
    opacity:0,
    stagger:.3,
    duration:1

});

gsap.to(".hero-img",{

    y:20,
    repeat:-1,
    yoyo:true,
    duration:2,
    ease:"power1.inOut"

});

gsap.from(".about-images",{

scrollTrigger:{

trigger:".about"

},

x:-100,

opacity:0,

duration:1

});

gsap.from(".about .section-title, .about p, .about .btn",{

scrollTrigger:{

trigger:".about"

},

x:100,

opacity:0,

stagger:.2,

duration:1

});

// gsap.from(".service-card",{

// scrollTrigger:{

// trigger:".services"

// },

// opacity:0,

// y:100,

// stagger:.25,

// duration:1

// });

// gsap.from(".project-card",{

// scrollTrigger:{

// trigger:".projects"

// },

// scale:.8,

// opacity:0,

// stagger:.25,

// duration:1

// });

// Skills Animation

gsap.to(".html",{
scrollTrigger:".skills",
width:"95%",
duration:1.5
});

gsap.to(".css",{
scrollTrigger:".skills",
width:"90%",
duration:1.5
});

gsap.to(".js",{
scrollTrigger:".skills",
width:"85%",
duration:1.5
});

gsap.to(".bs",{
scrollTrigger:".skills",
width:"92%",
duration:1.5
});

gsap.to(".php",{
scrollTrigger:".skills",
width:"80%",
duration:1.5
});

gsap.to(".mysql",{
scrollTrigger:".skills",
width:"85%",
duration:1.5
});

gsap.to(".ps",{
scrollTrigger:".skills",
width:"96%",
duration:1.5
});

gsap.to(".ai",{
scrollTrigger:".skills",
width:"95%",
duration:1.5
});

// Timeline

gsap.from(".timeline-item",{

scrollTrigger:".timeline",

x:-100,

opacity:0,

stagger:.3,

duration:1

});

// Testimonials

// gsap.from(".testimonial-card",{

// scrollTrigger:".testimonials",

// y:100,

// opacity:0,

// stagger:.3,

// duration:1

// });

// Counter

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/60;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

// CONTACT

gsap.from(".contact .section-title",{

scrollTrigger:".contact",

y:80,

opacity:0,

duration:1

});

gsap.from(".contact form",{

scrollTrigger:".contact",

x:100,

opacity:0,

duration:1

});

// Scroll Progress

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/total)*100;

document.getElementById("progress").style.width=progress+"%";

});

// Back To Top

const topBtn=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("active");

}else{

topBtn.classList.remove("active");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Cursor

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// Magnetic Buttons

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

gsap.to(btn,{

x:x*0.25,

y:y*0.25,

duration:.3

});

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{

x:0,

y:0,

duration:.4

});

});

});

// Active Navigation

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const menu=document.querySelector(".navbar-collapse");

menu.addEventListener("shown.bs.collapse",()=>{

gsap.from(".nav-item",{

opacity:0,
x:40,
stagger:.08,
duration:.4

});

});

window.addEventListener("load",()=>{

gsap.to("#loader",{

opacity:0,

duration:.8,

delay:.6,

onComplete(){

document.getElementById("loader").remove();

}

});

});

gsap.to(".hero-img",{

scrollTrigger:{

trigger:".hero",

scrub:1

},

y:150

});

const blur=document.querySelector(".blur1");

document.addEventListener("mousemove",(e)=>{

gsap.to(blur,{

x:e.clientX/10,

y:e.clientY/10,

duration:2

});

});

gsap.from(".counter",{

textContent:0,

duration:2,

ease:"power1",

snap:{textContent:1},

scrollTrigger:".counter-section"

});

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".glass-nav");

if(scrollY>80){

nav.classList.add("nav-scroll");

}else{

nav.classList.remove("nav-scroll");

}

});

gsap.utils.toArray("section").forEach(section=>{

gsap.from(section,{

opacity:0,

y:70,

duration:1,

scrollTrigger:{

trigger:section,

start:"top 80%"

}

});

});

gsap.from("footer",{

opacity:0,

y:80,

scrollTrigger:"footer"

});


// Mail To

const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button
    sendBtn.disabled = true;
    sendBtn.innerHTML = "Sending...";
    status.innerHTML = "";
    status.style.color = "";

    emailjs
        .sendForm(
            "service_0uexp98",
            "template_dpqifvm",
            form
        )
        .then(() => {

            sendBtn.innerHTML = "Message Sent ✓";
            status.innerHTML = "Thank you! Your message has been sent successfully.";
            status.style.color = "#28a745";

            form.reset();

            setTimeout(() => {
                sendBtn.disabled = false;
                sendBtn.innerHTML = "Send Message";
                status.innerHTML = "";
            }, 3000);

        })
        .catch((error) => {

            console.error(error);

            sendBtn.disabled = false;
            sendBtn.innerHTML = "Try Again";

            status.innerHTML = "Something went wrong. Please try again.";
            status.style.color = "#dc3545";
        });
});