 var i = 0; // Start point
  var images = [];
  var time = 1500;
  
  // image list
     
       images[0] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/KEYZ_WITH_THE_KAM_cez3fr.jpg';
      images[1] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578424/BANCO_SMASH_BROS_bksf7i.jpg';
  images[2] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/VO_BEFORE_VO_ctvbe7.jpg';
  images[3] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/TASSJA_erupn5.jpg';
  images[4] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/NICO_DALMATIAN_dgxdzg.jpg';
      
      
      
       images[5] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/MARIA_AND_ARTPAPI_jai5sc.jpg';
  images[6] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/SAVINGS_DAWSON_xluzok.jpg';
      
      
       images[7] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/JON_STORTS_WITH_FRIENDS_zxbi7d.jpg';
      
       images[8] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/SOME_KIND_OF_GO_KART_OR_SOMETHING_rcsqa3.jpg';
      
      
       images[9] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/SISTER_KHALISOL_wry42r.jpg';
      
       images[10] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/LAUNCHPAD_MECHERO_3_pie9yw.jpg';
      
       images[11] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572304/BOYS_PLAYING_WITH_A_PUPPY_c7mecr.jpg';
      
    images[12] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578425/FLY_HONEY_MAN2_f1b6ac.jpg'
     
       images[13] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/FLIPPED_BENZ_zpefur.jpg';
      
      
       images[14] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/JAURA_SMOKING_mjhyqw.jpg';
      
      images[15] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578425/GALLUP_METALHEADS5_tcbpxo.jpg';
      
      images[16] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/NICKS_PLACITA_kxynx8.jpg';
      
      
        images[17] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/KOHL_FLIPPING_ME_OFF_rzqowe.jpg';
  
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
