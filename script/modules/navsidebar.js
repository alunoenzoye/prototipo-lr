// 
// Codigo "ruim" por que tem muita dependencia das variaveis de CSS.
// 

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

const toggleSidebar = (state = null) => {
    // Altera o estado da sidebar baseado no valor booleano passado
    // Se não for passado nenhum argumento então somente alternar entre estados
    sidebarToggled = state ? state : !sidebarToggled;

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
const NAV_BUTTON_EVENT_NAME = "nav-btn-click";

const navBtns = document.getElementsByClassName(NAV_BUTTON_CLASS);

let ActiveBtn = null;

const changeActiveBtn = (newActiveBtn) => {
    if (ActiveBtn) {
        ActiveBtn.classList.remove(NAV_BUTTON_ACTIVE_CLASS);
    }
    
    ActiveBtn = newActiveBtn;
    newActiveBtn.classList.add(NAV_BUTTON_ACTIVE_CLASS);

    // Sinalizar um evento customizado para o index.js mudar de "página"

    let NavBtnClickEvent = new CustomEvent(NAV_BUTTON_EVENT_NAME, {
        detail: { btn: ActiveBtn }
    });

    SidebarNav.dispatchEvent(NavBtnClickEvent);
}

for (let i = 0; i < navBtns.length; i++) {
    const navBtn = navBtns[i];

    navBtn.addEventListener("click", () => {
        changeActiveBtn(navBtn);
    })
}

export { toggleSidebar, NAV_BUTTON_EVENT_NAME };