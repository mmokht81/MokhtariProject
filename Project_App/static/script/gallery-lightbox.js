document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";

    lightbox.innerHTML = `
        <button class="gallery-close">&times;</button>
        <img class="gallery-preview" src="" alt="">
    `;

    document.body.appendChild(lightbox);

    const preview = lightbox.querySelector(".gallery-preview");
    const closeBtn = lightbox.querySelector(".gallery-close");

    document.querySelectorAll(".gallery-frame img").forEach(img => {

        img.addEventListener("click", () => {

            const preload = new Image();

            preload.src = img.src;

            preload.onload = () => {

                preview.src = preload.src;

                lightbox.classList.add("active");

                document.body.classList.add("lightbox-open");
            };
        });
    });

    function closeLightbox(){

        lightbox.classList.remove("active");

        document.body.classList.remove("lightbox-open");

        setTimeout(()=>{
            preview.src="";
        },300);

    }

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            closeLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeLightbox();

        }

    });

});

preview.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});