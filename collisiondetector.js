function colldetect(fixedShape,movingShape){
    if(fixedShape.x-movingShape.x<=fixedShape.width/2+movingShape.width/2 && 
      movingShape.x-fixedShape.x<=fixedShape.width/2+movingShape.width/2 && 
      fixedShape.y-movingShape.y<=fixedShape.height/2+movingShape.height/ 2&&
      movingShape.y-fixedShape.y<=fixedShape.height/2+movingShape.height/2) {
        return true;
        
      }
      else{
        return false;
      }

  }