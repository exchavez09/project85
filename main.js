canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=120;
rover_height=70;
background_image="mars.jpg";
rover_image="car1.png";

rover_x=10;
rover_y=10;

car_width=120;
car_height=70;
background_image="mars.jpg";
car_image="car1.png";

car_x=10;
car_y=100;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(car_imgTag, car_x, car_y,car_width, car_height);
}

function uploadxar(){
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up(){

    if(rover_y >=0)
    {
        rover_y = rover_y-10;
        console.log("When down arrow is pressed, x " + rover_x + " | y " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){

    if(rover_y <=550)
    {
        rover_y = rover_y+10;
        console.log("When down arrow is pressed, x " + rover_x + " | y " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){

    if(rover_x >=0)
    {
        rover_x = rover_x-10;
        console.log("When left arrow is pressed, x " + rover_x + " | y " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){

    if(car_x <=699)
    {
        car_x = car_x+10;
        console.log("When right arrow is pressed, x " + car_x + " | y " +car_y);
        uploadBackground();
        uploadrover();
    }
}
