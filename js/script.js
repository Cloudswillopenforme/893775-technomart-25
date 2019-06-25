//open modals
document.body.addEventListener("click", (e) => {
  let btnSendEmail = e.target.closest('.open-modal');
  e.preventDefault();

  if (!btnSendEmail) return;

  let modal = btnSendEmail.dataset.modal;

  openModal(modal);
});

document.body.addEventListener("click", (e) => {
  let close = e.target.closest('.pop-up__close');
  e.preventDefault();

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
