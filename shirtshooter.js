 var i = 0; // Start point
  var images = [];
  var time = 2000;
  
  // image list
     
       images[0] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/KEYZ_WITH_THE_KAM_cez3fr.jpg';
      images[1] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578424/BANCO_SMASH_BROS_bksf7i.jpg';
  images[2] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/VO_BEFORE_VO_ctvbe7.jpg';
  images[3] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/TASSJA_erupn5.jpg';
  images[4] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/NICO_DALMATIAN_dgxdzg.jpg';
      
      
    images[5] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578425/FLY_HONEY_MAN2_f1b6ac.jpg'
      
     
  images[6] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/SAVINGS_DAWSON_xluzok.jpg';
      
  // change image
  function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }
    
    setTimeout("changeImg()", time);
  }
      window.onload = changeImg;
