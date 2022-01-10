const dropZone = document.querySelector(".drop-zone");
const browseBtn = document.querySelector(".browseBtn");
const fileInput = document.querySelector(".fileInput");

const host = "https://innshare.herokuapp.com/";
const uploadUrl = `${host}/api/files`;

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  !dropZone.classList.contains("dragged") && dropZone.classList.add("dragged");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragged");
  const files = e.dataTransfer.files;

  console.log(files);
  if (files.length) {
    fileInput.files = files;
    uploadFile();
  }
});

browseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fileInput.click();
});

const uploadFile = () => {
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("myFile", file);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
  };

  xhr.open("POST", uploadUrl);
  xhr.send(formData);
};
