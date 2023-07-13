export default function setCurrentDomine (){
    const currentHref = window.location.origin;
    const currentDomine = window.location.hostname; 
    const currentDomineArr = document.querySelectorAll(`[data-domine="current"]`);
    if ( currentDomineArr.length > 0 ) {

        currentDomineArr.forEach ((a) => {
        a.href = currentHref;
        a.innerText = currentDomine;
    })
  }
}