import * as Sidebar from './modules/navsidebar.js';
import { PageSwitcher } from './modules/pageswitcher.js';
console.log('inicio');

const SidebarNav = document.getElementById("nav-sidebar");
const documentElement = document.documentElement;

// 
// Logica da sidebar
// 

const BREAKPOINT_1 = getComputedStyle(documentElement).getPropertyValue("--breakpoint-1")

const sidebarToggle = document.getElementById("sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
    Sidebar.toggleSidebar();
});

const widthBreakPointQuery = window.matchMedia(`(max-width: ${BREAKPOINT_1})`);

widthBreakPointQuery.addEventListener("change", () => {
    if (widthBreakPointQuery.matches) {
        Sidebar.toggleSidebar(true);
    }
})


// 
// Lógica de alterar entre "páginas" do aplicativo
// 

// PageObject = {
//     "identificator": {element, callback}
// }

const NAV_INICIO_ID = "nav-inicio";
const NAV_CALENDARIO_ID = "nav-calendario";
const NAV_MAPA_ID = "nav-mapa";
const NAV_PROFESSORES_ID = "nav-professores";
const DISABLED_CONTAINER_CLASS = "page-container-disabled"

const toggleElement = (element, state) => {
    if (state) {
        element.classList.remove(DISABLED_CONTAINER_CLASS);
    }
    else {
        element.classList.add(DISABLED_CONTAINER_CLASS);
    }
}

const pageArray = {
    "nav-inicio": {
        element: document.getElementById("inicio-container"),
        callback: toggleElement
    },
    "nav-calendario": {
        element: document.getElementById("calendario-container"),
        callback: toggleElement
    },

    "nav-mapa": {
        element: document.getElementById("mapa-container"),
        callback: toggleElement
    },
    "nav-professores": {
        element: document.getElementById("professores-container"),
        callback: toggleElement
    },
}

let pageSwitcher = new PageSwitcher();
pageSwitcher.init(pageArray, pageArray[NAV_INICIO_ID])
console.log(pageArray[NAV_INICIO_ID])

SidebarNav.addEventListener(Sidebar.NAV_BUTTON_EVENT_NAME, (event) => {
    const btnId = event.detail.btn.id;
    console.log(btnId)
    pageSwitcher.ActivatePage(btnId)
})

