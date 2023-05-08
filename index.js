hamburger=document.querySelector(".hamburger")
ham=document.querySelector(".ham");
// cross=document.querySelector(".cross");
sidebar=document.querySelector(".sidebar");
update=document.querySelector(".imageone");
updatetwo=document.querySelector(".picupdate");

hamburger.addEventListener("click",()=>{
    sidebar.classList.toggle("visibility");
    update.classList.remove("imageone");
    updatetwo.classList.add("picupdate");
})

// burger=document.querySelector(".burger");
// navbar=document.querySelector(".navbar");
// navlist=document.querySelector(".nav-list");
// rightnav=document.querySelector(".rightnav");

// burger.addEventListener("click",()=>{
//     rightnav.classList.toggle("visibiality");
//     navlist.classList.toggle("visibiality");
//     navbar.classList.toggle("h-nav");
    
// })

