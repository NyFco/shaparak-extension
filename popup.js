const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
];

function getRandomPhoto() {
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.getElementById("random-photo");
  imgElement.src = getRandomPhoto();
});
