const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("HTTPS://worldtimeapi.org/api/timezone/Asia/Kolkata") 
    //change the data in JSON format
    var responsejson=await response.json()
    console.log(responsejson)
    // write code slice the datetime
    var datetime=responsejson.datetime
    var hour=datetime.slice(11,13)
    console.log(datetime)
    console.log(hour)
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06){
        backgroundImg=loadImage("sunrise1.png")
        }
        else if(hour>=06&&hour<=08){
         backgroundImg=loadImage("sunrise2.png")   
        }
        else if(hour>=08&&hour<=10){
            backgroundImg=loadImage("sunrise3.png")   
           } 
        else if(hour>=10&&hour<=12){
            backgroundImg=loadImage("sunrise4.png")   
           }
        else if(hour>=12&&hour<=14){
            backgroundImg=loadImage("sunrise5.png")   
           }
        else if(hour>=14&&hour<=16){
            backgroundImg=loadImage("sunrise6.png")   
           } 
        else if(hour>=16&&hour<=18){
            backgroundImg=loadImage("sunset7.png")   
           }
        else if(hour>=18&&hour<=20){
            backgroundImg=loadImage("sunset8.png")   
           }
        else if(hour>=20&&hour<=22){
            backgroundImg=loadImage("sunset9.png")   
           }
        else if(hour>=22&&hour<=0){
            backgroundImg=loadImage("sunset10.png")   
           }
        else if(hour>=0&&hour<=02){
            backgroundImg=loadImage("sunset11.png")   
           }
        else{
            backgroundImg=loadImage("sunset12.png")   
           }                            
    //load the image in backgroundImg variable here

}
