// создаю материнский класс
function Clock (timer) {
    this.time = document.querySelector(timer)
        
}
Clock.prototype.render = function(){
    this.now = new Date();
    this.hours = this.now.getHours() < 10 ? '0' + this.now.getHours() : this.now.getHours();
    this.minutes = this.now.getMinutes() < 10 ? '0' + this.now.getMinutes() : this.now.getMinutes();
    this.seconds = this.now.getSeconds() < 10 ? '0' + this.now.getSeconds() : this.now.getSeconds(); 
    this.time.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
}
// создаю класс, который будет показывать полный формат
function ShowMeFullTime(timer){
    Clock.call(this, timer)
    
}
ShowMeFullTime.prototype = Object.create(Clock.prototype); //таким образом я "повторяю" материнский класс?

// создаю класс, который будет показывать краткий формат
function ShowMeShortTime(timer){
    Clock.call(this, timer)
    
}
ShowMeShortTime.prototype = Object.create(Clock.prototype);
// так как формат нужен другой, я переписываю весь метод.
ShowMeShortTime.prototype.render = function(timer){ 
    this.now = new Date();
    this.hours = this.now.getHours() < 10 ? '0' + this.now.getHours() : this.now.getHours();
    this.minutes = this.now.getMinutes() < 10 ? '0' + this.now.getMinutes() : this.now.getMinutes();
    this.seconds = this.now.getSeconds() < 10 ? '0' + this.now.getSeconds() : this.now.getSeconds(); 
    this.time.innerHTML = `${this.hours}:${this.minutes}`;
}

let clock = new ShowMeFullTime('.full-time');
setInterval(() =>
    clock.render()
, 100);

let clock2 = new ShowMeShortTime('.short-time');
setInterval(() =>
    clock2.render()
, 100);
