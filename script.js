const modal = document.getElementById('modal');
const imgModal = document.getElementById('imgModal');
var span = document.getElementsByClassName("close")[0];

function showModal(imageClicked) {
  const img = imageClicked.querySelector('img');
  modal.style.display = "block";
  imgModal.src = img.src;
}

span.onclick = function() { 
  modal.style.display = "none";
}

function hideModal() {
  modal.style.display = "none";
}

window.addEventListener('click', (e) => (e.target === modal ?  hideModal() : false));
