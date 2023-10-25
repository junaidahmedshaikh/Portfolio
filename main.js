


// const allNavbarLists = document.querySelectorAll(".navbarList")
// const windowLocation = window.location.pathname;

// // console.log(currentNavbarLocation)

// allNavbarLists.forEach(allNavbarList => {

//     const newNavbarPathname = new URL(allNavbarList.href).pathname;
    
//     if(windowLocation == newNavbarPathname){
//         allNavbarList.classList.add("activeNavbarSection")
//     }
   
// }
// )

if(window.innerWidth <= 720){
  let subTitle = document.querySelector(".subtitle").innerHTML = `<span class="subtitle"
  >Frontend Marvels: A Glimpse into My Development World</span
>`
}