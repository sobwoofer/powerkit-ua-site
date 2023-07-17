
const gallery = document.querySelector(".swiper-review");
const backdrop = document.querySelector(".js-increasing-backdrop");

console.dir(gallery);
console.dir(backdrop);

gallery.addEventListener("click", (event) => {
    const parentEl = event.target.parentElement;
    if (parentEl.nodeName !== "PICTURE" ) {
        return;
    }
    console.dir(event.target.parentElement);
    

    const collection = event.target.parentElement.childNodes;
    collection.forEach(element => {
        if (element.nodeName !== "SOURCE" ) {
            return;
        } else if (element.media !== "(min-width: 1440px)") {
            return;
        }
        
        const srcset = element.srcset;
        if (srcset.includes("jpg")) {
            
            console.dir(srcset);
            console.dir(srcset.indexOf("1x"));
            const length = srcset.indexOf("1x");
            const substring = srcset.substring(0,length);
            console.log(substring);
            backdrop.innerHTML = `<picture class="photo">
                <source
            srcset="${srcset}"
            type="image/jpeg">
            <img src="${substring}"
            alt="Soldiers\' thanks"> 
             </picture>`;
        }

        // console.dir(element.attributes.srcset.value);
        
    });

    backdrop.classList.remove("hidden-element");


})

backdrop.addEventListener("click", (event)=>{
    
    event.target.classList.add("hidden-element");
});
