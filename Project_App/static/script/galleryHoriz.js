/* =====================================
   Gallery Scroll
===================================== */

function scrollStrip(stripId, direction){

    const strip = document.getElementById(stripId);

    if(!strip) return;

    strip.scrollBy({

        left: direction * 280,

        behavior:"smooth"

    });

}


/* =====================================
   Reveal Animation
===================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.15});

document.querySelectorAll(".strip-wrapper").forEach(item=>{

    observer.observe(item);

});


/* =====================================
   Premium Hover
===================================== */

document.querySelectorAll(".gallery-frame").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-.5)*7;

        const rotateX=((y/rect.height)-.5)*-7;

        card.style.transform=
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/* ===========================
   Premium Drag Scroll
=========================== */

document.querySelectorAll(".gallery-strip").forEach(strip=>{

let isDown=false;

let startX;

let scrollLeft;

strip.addEventListener("mousedown",(e)=>{

isDown=true;

strip.classList.add("dragging");

startX=e.pageX-strip.offsetLeft;

scrollLeft=strip.scrollLeft;

});

strip.addEventListener("mouseleave",()=>{

isDown=false;

strip.classList.remove("dragging");

});

strip.addEventListener("mouseup",()=>{

isDown=false;

strip.classList.remove("dragging");

});

strip.addEventListener("mousemove",(e)=>{

if(!isDown)return;

e.preventDefault();

const x=e.pageX-strip.offsetLeft;

const walk=(x-startX)*1.8;

strip.scrollLeft=scrollLeft-walk;

});

});