class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/Pedra.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajetoria = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y]
      this.trajetoria.push(position)
    }
   
    for(var i = 0;i<this.trajetoria.length;i ++){
       image(this.smoke,this.trajetoria[i][0],this.trajetoria[i][1])
    }
  }
}
