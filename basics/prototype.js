function User(){
    this.name = "";
    this.life= 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life +=1;
        this.life -=1;
        console.log(this.name ,"gave life to " , targetPlayer.name);
    }
}

var a  = new User();
var b = new User();
a.name = "sagar";
b.name = "temp";

a.giveLife(b);
console.log("a - " , a.life , "b- ", b.life);

User.prototype.uppercut = function uppercut(targetplayer) {
    targetplayer.life -=3;
    console.log(this.name ,"Uppercutted " , targetplayer.name);
}

a.uppercut(b);

console.log("a - " , a.life , "b- ", b.life);

User.prototype.magic = 60;
console.log(a.magic , b.magic);