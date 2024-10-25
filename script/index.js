import * as Sidebar from './modules/nav-sidebar.js';

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

document.addEventListener(Sidebar.NAV_BUTTON_EVENT_NAME, (event) => {
    const btnId = event.detail.btn.id;
    switch (btnId) {
        case 'nav-inicio':
            console.log('inicio');
            break;
        default:
            console.log('invalido');
            break
    }
})