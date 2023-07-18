const gallery = document.querySelector(".swiper-review");
const backdrop = document.querySelector(".js-increasing-backdrop");
const bodyEl = document.querySelector("body");

if (gallery) {
gallery.addEventListener("click", (event) => {
    const parentEl = event.target.parentElement;
    if (parentEl.nodeName !== "PICTURE" ) {
        return;
    }

    const collection = event.target.parentElement.childNodes;
    collection.forEach(element => {
        if (element.nodeName !== "SOURCE" ) {
            return;
        } else if (element.media !== "(min-width: 1440px)") {
            return;
        }
        
        const srcset = element.srcset;
        if (srcset.includes("jpg")) {
            
            const length = srcset.indexOf("1x");
            const substring = srcset.substring(0,length);
            
            backdrop.innerHTML = `<picture class="increased-photo">
                <source
            srcset="${srcset}"
            type="image/jpeg">
            <img src="${substring}"
            alt="Soldiers\' thanks"> 
             </picture>`;
        }

    });

    backdrop.classList.remove("hidden-backdrop");
    
    bodyEl.classList.add("body-no-scroll");
})
}
if (backdrop){
backdrop.addEventListener("click", (event)=>{
    
    bodyEl.classList.remove("body-no-scroll");
    event.target.classList.add("hidden-backdrop");
});
}