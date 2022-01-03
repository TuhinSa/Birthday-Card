var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        blockImage_object =  Img;
       blockImage_object.scaleToWidth(700);
       blockImage_object.scaleToHeight(510);
       blockImage_object.set({
          top : 0,
          left : 0
  
       });
       canvas.add(blockImage_object);
    }); 
	
}

function playSound(){
x.play();	
}
