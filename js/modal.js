
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  /*document.querySelector("[data-modal-open]").addEventListener('click', function() {
    document.querySelector("[data-modal]").style.display = 'block';
    document.querySelector("body").style.overflow = 'hidden';
  });
document.querySelector("[data-modal-close]").addEventListener('click', function() {
    document.querySelector("[data-modal]").style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
});*/ 