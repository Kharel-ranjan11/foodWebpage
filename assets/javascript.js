  $(window).on("load", function () {
    $(".preloader").fadeOut(1000);
  });
  var SearchBtn=document.querySelector('.searchBtn');
  var SearchParent=document.querySelector('.searchBox');

  console.log(SearchBtn)
  SearchBtn.onclick=(e)=>{
    SearchParent.classList.toggle('show')
   
  }

   // targeting the element
   var closeBtn = document.querySelector("#close");
  var MenuBtn = document.querySelector("#menu");
  var MenuBox = document.querySelector("#navContent");
  var MenuItem = document.querySelectorAll(".item");
  var NestedMenu = document.querySelector(".sub_item ");
  closeBtn.onclick = () => {
    // for closing the sidebar after open
    MenuBox.classList.remove("SideShowOpen"); // using 'SideShowOpen' class inside the style tag  in line no:90 to close the sidebar
  };
  console.log(MenuBox);
  MenuBtn.onclick = () => {
    MenuBox.classList.add("SideShowOpen"); // using 'SideShowOpen' class inside the style tag  in line no:95 to open the sidebar
  };
  console.log(NestedMenu);
  function Tog(e) {
    if (e.querySelector("i").classList.contains("fa-caret-left")) {
      e.querySelector("i").classList.replace("fa-caret-left", "fa-caret-down");
    } else {
      e.querySelector("i").classList.replace("fa-caret-down", "fa-caret-left");
    }
    NestedMenu.classList.toggle("show"); // to display sub-menu after click in menu  and using the class '.show' in line no:132
  }
  // alert(window.innerWidth);