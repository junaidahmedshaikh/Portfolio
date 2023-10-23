


const allNavbarLists = document.querySelectorAll(".navbarList")
const windowLocation = window.location.pathname;

// console.log(currentNavbarLocation)

allNavbarLists.forEach(allNavbarList => {

    const newNavbarPathname = new URL(allNavbarList.href).pathname;
    
    if(windowLocation == newNavbarPathname){
        allNavbarList.classList.add("activeNavbarSection")
    }
   
}
)

