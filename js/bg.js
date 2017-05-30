// Randomly load an image from the imgs folder.  To add new images, simply add them to the var below.
var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];
$('html').css({'background-image': 'url(imgs/' + images[Math.floor(Math.random() * images.length)] + ')'});

//no-repeat center center fixed