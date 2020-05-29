function isTouching(object1,object2) {
    if(moverect1.x-fixedrect.x<=moverect.width/2+fixedrect.width/2 
      && fixedrect.x-moverect1.x<=moverect1.width/2+fixedrect.width/2
      && moverect1.y-fixedrect.y<=moverect1.height/2+fixedrect.height/2  
      && fixedrect.y-moverect1.y<=moverect1.height/2+fixedrect.height/2 ){
        return true;
      
      }
      else{
        return false;
      }
  }
  
  function bounceOff(object1,object2) 
  {
    if(moverect1.x-fixedrect.x<=moverect1.width/2+fixedrect.width/2 
      && fixedrect.x-moverect1.x<=moverect1.width/2+fixedrect.width/2
      && moverect1.y-fixedrect.y<=moverect1.height/2+fixedrect.height/2  
      && fixedrect.y-moverect1.y<=moverect1.height/2+fixedrect.height/2 ){
      object1.velocityX=object1.velocityX*(-1);
      object1.velocityY=object1.velocityY*(-1);
    }
  }