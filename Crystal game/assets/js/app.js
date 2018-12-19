var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetandstartGame = function () {
    
    $(".crystals").empty();

   var images = [
       'https://media.moddb.com/images/games/1/65/64760/TC-Blue-Crystal.png',
       'https://image.shutterstock.com/image-photo/amazing-rare-red-quartz-titanium-260nw-527954737.jpg',
       'http://www.crystalinks.com/emerald.jpg',
       'https://images-na.ssl-images-amazon.com/images/I/616xufoCJzL._SX425_.jpg'];
    
    random_result = Math.floor(Math.random() * 101 ) + 19;


$("#result").html('Target Score: ' + random_result);

for(var i = 0; i < 4; i++){
 
    var random = Math.floor(Math.random() * 11 ) + 1;

    var crystal = $("<div>");    
        crystal.attr({
            "class": 'crystal',
            "data-random": random 
                
        });
      crystal.css({
          "background-image":"url('" + (images[i]) + "')",
          "background-size":"cover"
      });
    $(".crystals").append(crystal);
    
    }

    $("#previous").html("Your score: " + previous);
} 
  


resetandstartGame();


$(document).on('click', ".crystal", function () {
  
    var num = parseInt($(this).attr('data-random'));

    previous += num;


    $("#previous").html("Total score: " + previous);


    if(previous > random_result){
        
        alert("You suck loser")

        lost++;  

        $("#lost").html("Losses: " + lost);

        previous = 0;

        resetandstartGame();

    }
    else if(previous === random_result){
       
        alert("Winner Winner Chicken Dinner!!");
        
        win++;
    
        $("#win").html("Wins: " + win);

        previous = 0;

        resetandstartGame();

    }
});


//pseudocoding
// a game with 4 crystals and a random total score requirement
// Every crystal needs to have a random number between 1-12
// That number must be generated every single time we win or lose
// New score value for each crystal each time
// When clicking any crystal it should be adding with the previous score 
// Until it equals the total score. (win condition)
// If it surpassed the total score it starts over (Lose condition)
// On win notch one win counter
// On loss notch one loss counter
// 