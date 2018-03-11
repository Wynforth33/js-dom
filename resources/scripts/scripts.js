(function(){
  var carimages = document.querySelector('.carimages');
  carimages.addEventListener('click', function(e){
    if (e.target.tagName === 'IMG') {

      // Create Overlay Element and Style
      var overlay = document.createElement('div');
      overlay.id = 'overlay';
      overlay.style.position = 'absolute';
      overlay.style.top = 0;
      overlay.style.background = 'rgba(0,0,0,0.7)';
      overlay.style.cursor = 'pointer';
      overlay.style.width = window.innerWidth + 'px';
      overlay.style.height = window.innerHeight + 'px';

      // Add Overlay
      document.body.appendChild(overlay);

      // Fix Overlay Follow Issue - Specifically Window Resize/Scroll
      window.addEventListener('scroll', function(){
        if (overlay) {
          overlay.style.top = window.pageYOffset + 'px';
          overlay.style.left = window.pageXOffset + 'px';
        }
      });
      window.addEventListener('resize', function(){
        if (overlay) {
          overlay.style.width = window.innerWidth + 'px';
          overlay.style.height = window.innerHeight + 'px';
        }
      });

      // Create Image Element and Style
      var imageSrc = e.target.src;
      var popUpImage = document.createElement('img');
      popUpImage.id = 'popimage';
      popUpImage.src = imageSrc;
      popUpImage.style.display = 'block';
      popUpImage.style.width = "50%";
      popUpImage.style.margin = "0 auto";
      popUpImage.style.marginTop = "25%";

      // Add image
      overlay.appendChild(popUpImage);
      
      // Remove Overlay Image on click
      popUpImage.addEventListener('click', function(){
        if (overlay) {
          overlay.parentElement.removeChild(overlay);
        }
      });
    }
  });
}()); // Load DOM first
