let randomNum1=Math.floor(Math.random()*6)+1; //convert the decimal to whole number

let diceImage = "dice"+randomNum1+".png"; //dice image select by random number

let randomImage="images/"+ diceImage; // set attribute to the umage

let image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage); // select and display the image


// dice 2

let randomNum2 =Math.floor(Math.random()*6)+1;

let diceImage2 = "dice"+randomNum2+".png"; //dice image select by random number

let randomImage2="images/"+ diceImage2; // set attribute to the umage

let image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2); 


if (randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="player 1 won😍";

}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="player 2 won🥰";
} 
else{
    document.querySelector("h1").innerHTML="Oops! Draw!.😐";
}