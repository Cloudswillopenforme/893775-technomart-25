//Modals
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

var popup = document.querySelector(".pop-up");
var form = popup.querySelector("form");

document.body.addEventListener("click", (e) => {
  var btnSendEmail = e.target.closest('.open-modal');

  if (!btnSendEmail) return;

  e.preventDefault();
  var modal = btnSendEmail.dataset.modal;

  openModal(modal);
});

document.body.addEventListener("click", (e) => {
  var close = e.target.closest('.pop-up__close');

  if (!close) return;

  e.preventDefault();
  var modal = e.target.closest('.pop-up');

  closeModal(modal);
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (popup.classList.contains("modal-bounce-open")) {
      popup.classList.remove("modal-bounce-open");
      popup.classList.remove("modal-shake-error");
    }
  }
});

if (form) {
  form.addEventListener("submit", function (e) {

  var name = popup.querySelector("[name='name']");
  var email = popup.querySelector("[name='email']");
  var emailText = popup.querySelector("[name='email-text']");

  if (!name.value || !email.value || !emailText.value) {
    e.preventDefault();
    popup.classList.remove("modal-shake-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-shake-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
      localStorage.setItem("name", name.value);
    }
  }
});
}



var openModal = (modal) => {
  document.querySelector(`.${modal}`).classList.add('modal-bounce-open');
};

var closeModal = (modal) => {
  modal.classList.remove('modal-bounce-open');
  modal.classList.remove('modal-shake-error')
};




//Services tabs
document.querySelectorAll(".tab-slider__tab-controls-btn").forEach(function(elem) {
  elem.addEventListener("mouseover", (e) => {
    var currentControl = e.currentTarget;

    if(!currentControl) return;

    var serviceName = currentControl.dataset.tabContent;

    openService(e, serviceName);
  });

});

var openService = (e, serviceName) => {

  var i, tabContent, tabControl;

  tabContent = document.querySelectorAll(".tab-slider__tabs li");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  };

  tabControl = document.querySelectorAll(".tab-slider__tab-controls-btn");
  for (i = 0; i < tabControl.length; i++) {
    tabControl[i].className = tabControl[i].className.replace(" active", "");
  };

  document.querySelector("." + serviceName).style.display = "block";
  e.currentTarget.className += " active";
};
