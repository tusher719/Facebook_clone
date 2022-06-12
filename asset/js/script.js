// Profile MenuButton
const drop_btn = document.querySelector(".drop-btn");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const setting_drop = document.querySelector(".setting-drop");
const help_drop = document.querySelector(".help-drop");
const display_drop = document.querySelector(".display-drop");

const setting_item = document.querySelector(".setting-item");
const help_item = document.querySelector(".help-item");
const display_item = document.querySelector(".display-item");

const back_setting_btn = document.querySelector(".back-setting-btn");
const back_help_btn = document.querySelector(".back-help-btn");
const back_display_btn = document.querySelector(".back-display-btn");

drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
};
setting_item.onclick = () => {
  menu_bar.style.marginLeft = "-380px";
  setTimeout(() => {
    setting_drop.style.display = "block";
  }, 100);
};
help_item.onclick = () => {
  menu_bar.style.marginLeft = "-380px";
  setTimeout(() => {
    help_drop.style.display = "block";
  }, 100);
};
display_item.onclick = () => {
  menu_bar.style.marginLeft = "-380px";
  setTimeout(() => {
    display_drop.style.display = "block";
  }, 100);
};

back_setting_btn.onclick = () => {
  menu_bar.style.marginLeft = "0px";
  setting_drop.style.display = "none";
};
back_help_btn.onclick = () => {
  menu_bar.style.marginLeft = "0px";
  help_drop.style.display = "none";
};
back_display_btn.onclick = () => {
  menu_bar.style.marginLeft = "0px";
  display_drop.style.display = "none";
};

// // Notification js
// const notifi_btn = document.querySelector('.notifi-btn');
// const menu_notifi = document.querySelector('.notification');
// drop_btn.onclick = (()=>{
//     menu_notifi.classList.toggle('shows');
// });

// Notification MenuButton
function Notifications() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Notification SubMenuButton
function subNotifi() {
  var x = document.getElementById("subMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Messenger MenuButton
function Messenger() {
  var x = document.getElementById("messenGer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Create MenuButton
function create() {
  var x = document.getElementById("createSec");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Create MenuButton
function submenu() {
  var x = document.getElementById("subMenuEarth");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
