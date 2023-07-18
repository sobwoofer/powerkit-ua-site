const gallery = document.querySelector(".swiper-review");
const backdrop = document.querySelector(".js-increasing-backdrop");

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
    backdrop.classList.add("increasing-backdrop");

})

backdrop.addEventListener("click", (event)=>{
    
    event.target.classList.remove("increasing-backdrop");
    event.target.classList.add("hidden-backdrop");
});
