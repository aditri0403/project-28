class tree{
    constructor(x,y){
      this.width = 20,
      this.height = 70,
      this.image = loadImage("tree.png")
    }
   display(){
       image(this.image,500,600,this.width,this.height); 
       
    } 
}