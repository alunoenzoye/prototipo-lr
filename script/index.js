import * as Sidebar from './modules/sidebar.js';

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
    console.log("asdasdasd")
    if (widthBreakPointQuery.matches) {
        Sidebar.toggleSidebar(true);
    }
})
