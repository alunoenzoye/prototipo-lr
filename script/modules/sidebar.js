const documentElement = document.documentElement;

// 
// Logica de colapsar e "esticar" sidebar
// 

const NAV_COLLAPSED_CLASS = "nav-sidebar-collapsed";
const SIDEBAR_WIDTH_PROPERTY = "--sidebar-width";
const SIDEBAR_WIDTH_COLLAPSED_PROPERTY = "--sidebar-width-collapsed";
const COMPUTED_SIDEBAR_WIDTH = "--dynamic-sidebar-width";

const SidebarNav = document.getElementById("nav-sidebar");

let sidebarToggled = true;

const collapseSidebar = () => {
    SidebarNav.classList.add(NAV_COLLAPSED_CLASS);

    let width = getComputedStyle(documentElement, null).getPropertyValue(SIDEBAR_WIDTH_COLLAPSED_PROPERTY);
    documentElement.style.setProperty(COMPUTED_SIDEBAR_WIDTH, width);
}

const stretchSidebar = () => {
    SidebarNav.classList.remove(NAV_COLLAPSED_CLASS);

    let width = getComputedStyle(documentElement, null).getPropertyValue(SIDEBAR_WIDTH_PROPERTY);
    documentElement.style.setProperty(COMPUTED_SIDEBAR_WIDTH, width);
}

const toggleSidebar = (status = null) => {
    sidebarToggled = status ? status : !sidebarToggled;

    if (sidebarToggled) {
        collapseSidebar();
    }
    else {
        stretchSidebar();
    }
}

// 
// Manipular os botões do nav
// 

const NAV_BUTTON_CLASS = "nav-btn";
const NAV_BUTTON_ACTIVE_CLASS = "nav-btn-active";

const navBtns = document.getElementsByClassName(NAV_BUTTON_CLASS);

let activeBtn = null;

const changeActiveBtn = (newActiveBtn) => {
    if (activeBtn) {
        activeBtn.classList.remove(NAV_BUTTON_ACTIVE_CLASS);
    }
    activeBtn = newActiveBtn;
    newActiveBtn.classList.add(NAV_BUTTON_ACTIVE_CLASS);
}

for (let i = 0; i < navBtns.length; i++) {
    const navBtn = navBtns[i];
    navBtn.addEventListener("click", (e) => {
        changeActiveBtn(navBtn);
    })
}

export { toggleSidebar };