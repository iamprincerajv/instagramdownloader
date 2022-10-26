// Page Reload

const pageReload = document.querySelector("#reloadpage")
pageReload.addEventListener('click', () => {
window.location.reload(true);
});

// FAQ

function hide_panel() {
    const panelp = document.querySelectorAll(".panel");
    for(i=0;i<panelp.length;i++) {
        panelp[i].style.display="none";
    }
};

function show_panel(curEle) {
    ans = curEle.nextElementSibling.style.display;
    
    if(ans=="none") {
        curEle.nextElementSibling.style.display="block";
    }
    else {
        curEle.nextElementSibling.style.display="none";
    }
};

// Menu Bar

let menuBar = document.querySelector('.menuitems1');

function menuBtn() {
menuBar.classList.toggle('menuVisible');
};

let headerHeight = document.querySelector('.mainheader');
let heightValue = headerHeight.offsetHeight;

menuBar.style.top = heightValue;

