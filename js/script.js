//open modals
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

const openModal = (modal) => {
  document.querySelector(`.${modal}`).classList.remove('visually-hidden');
};

const closeModal = (modal) => {
  if (!modal.classList.contains('visually-hidden')) {
    modal.classList.add('visually-hidden');
  };
};
