let body = document.querySelector("body")
let btn = document.getElementById("icon")
let menu = document.getElementById("menu")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let logo = document.getElementById("logo")
let li = document.querySelectorAll("li")
let nav = document.querySelector("nav")
let bar = document.getElementById("barmenu")
let circle = document.createElement("div");
circle.setAttribute("id", "circle");
document.body.appendChild(circle);
let day = true
let open = true
bar.addEventListener("click", function() {
  if (open) {
      menu.classList.add("open");
      open = false;
  } else {
      menu.classList.remove("open");
      open = true;
  }
});
btn.addEventListener("click",
  function () {
    if (day) {
      document.body.classList.add('dark-mode');
      body.style.overflow = "hidden"
      p1.style.color = "aliceblue"
      p2.style.color = "aliceblue"
      logo.style.color = "aliceblue"
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-200Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></svg>'
      btn.style.backgroundColor = "aliceblue"
      bar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>'
      li.forEach(
        function (element) {
          element.style.color = "aliceblue"
        }
      )
      day = false
    } else {
      bar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>'
      document.body.classList.remove('dark-mode');
      // nav.style.backgroundColor = "white"
      p1.style.color = "black"
      p2.style.color = "black"
      logo.style.color = "black"
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>'
      btn.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
      li.forEach(
        function (element) {
          element.style.color = "rgba(0, 0, 0, 0.652)"
        }
      )
      day = true
    }
  }
)