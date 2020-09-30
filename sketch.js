var happyDog, dog, database, foodS, foodStock

function preload()
{
  happyDog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  database.ref('Food').on("value", (data)=>{foodStock = data.val()});
  dog1 = createSprite(250,250,10,10);
  dog1.addImage(dog);
  dog1.scale = 0.5;
}


function draw() {
  background(46,139,87);  
  
  if(keyWentUp(UP_ARROW)){
    writeStock(foodStock);
    dog1.addImage(happyDog);
  }

  text("You have"+foodStock+"left", 10,10);


  drawSprites();
  //add styles here

}
function writeStock(foodStock){
  console.log(foodStock)
  database.ref('/').update(
    {
      Food: foodStock-1
    }
  )
}


