let archiveImages = [
    "https://images.pexels.com/photos/12514713/pexels-photo-12514713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8956313/pexels-photo-8956313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/46285/drilling-head-drill-bit-drill-metal-46285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

const images = document.getElementsByTagName('img');

for (image of images) {
    let randomIndex = Math.floor(Math.random() * archiveImages.length);
    image.src = archiveImages[randomIndex];
}