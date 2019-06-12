//open modals
document.body.addEventListener("click", (e) => {
  let btnSendEmail = e.target.closest('.open-modal');

  if (!btnSendEmail) return;

  let modal = btnSendEmail.dataset.modal;

  openModal(modal);
});

document.body.addEventListener("click", (e) => {
  let close = e.target.closest('.pop-up__close');

  if (!close) return;

  let modal = e.target.closest('.pop-up');

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
