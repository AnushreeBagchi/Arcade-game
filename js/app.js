// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y; 
    this.start=this.x;
    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x=this.x+this.speed+dt;
    if (this.x>500)
    {
        this.x=this.start;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),   this.x, this.y); 
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(){
    this.sprite='images/char-boy.png';
    this.x=200;
    this.y=400;
    this.scoreCount=0;     
};
Player.prototype.update=function(dt){
    $(".scoreCount").text(this.scoreCount);
    this.checkCollisions= function(){
        var  distance1 =Math.sqrt(Math.pow(player.x-enemy.x,2)+Math.pow(player.y-enemy.y,2));
        var  distance2 =Math.sqrt(Math.pow(player.x-enemy2.x,2)+Math.pow(player.y-enemy2.y,2));
        var  distance3 =Math.sqrt(Math.pow(player.x-enemy3.x,2)+Math.pow(player.y-enemy3.y,2));
        var  distance4 =Math.sqrt(Math.pow(player.x-enemy4.x,2)+Math.pow(player.y-enemy4.y,2));
        if (distance1<50||distance2<50||distance3<50||distance4<50)
        {
            this.y=400;
            this.x=200;
            this.scoreCount=0;
            $(".scoreCount").text(this.scoreCount);
        }
    };    
}
Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y); 
};
Player.prototype.handleInput=function(movement){   
        switch (movement)
        {
            case 'up':
                if(  this.y>0)
                {  
                    this.y=this.y-85;
                }
                break;
            case 'down':
                if(this.y<400){
                    this.y=this.y+85;
                }
                 break;
            case 'left':
                if (this.x>0){
                    this.x=this.x-100;
                }
                break;
            case 'right':
                if (this.x<400 ){
                    this.x=this.x+100;
                }
                break;               
    };
    if(this.y<10)
       {
           //$(".game").append("<div class='win'>Congrats you won!!</div>");
           win();    
       }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player= new Player();
var enemy= new Enemy(-100,65,4);
var enemy2= new Enemy(-250,150,2);
var enemy3= new Enemy(-600,230,5);
var enemy4= new Enemy(-250,150,6);
var allEnemies=[enemy,enemy2,enemy3,enemy4];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
