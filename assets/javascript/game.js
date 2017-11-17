$(document).ready(function() {
    
            crystals = ["assets/images/red-crystal.png","assets/images/orange-crystal.png","assets/images/purple-crystal.png","assets/images/pink-crystal.png"];
    
            var counter = 0;
            var wins = 0;
            var losses = 0;
            var targetNum;
            var audioTheme = new Audio("assets/images/pink-panther-theme.wav")
            var audio = new Audio("http://inspectorclouseau.com/sounds/fltgood.wav");
            var audio1 = new Audio("http://www.wavsource.com/snds_2017-09-17_1751672946049674/movies/pink_panther/pp_not_correct.wav");
            $(".win").text(wins);
            $(".loss").text(losses);
    
            newCrystals();
            newGame();
            audioTheme.play();
    
            function newCrystals () {
                $(".crystals").empty();
                var numbers = []
                    while(numbers.length < 4){
                      var randomnumber = Math.ceil(Math.random()*12)
                      var found = false;
                      for (var i=0; i < numbers.length; i++){
                        if (numbers[i] == randomnumber){
                            found = true;
                            break;
                        }
                      }
                      if(!found){
                        numbers[numbers.length]=randomnumber;
                      }
                    }
                console.log(numbers);
    
                for (i = 0; i < numbers.length; i++) {
                    var divCol = $("<div class='col-3'>")
                    var divRow = $("<div class='row text-center'>")
                    var imageCrystal = $("<img>");
                    imageCrystal.attr("data-num", numbers[i]);
                    imageCrystal.attr("src", crystals[i]);
                    imageCrystal.attr("alt", "crystals");
                    imageCrystal.addClass("gem-img");
                    divRow.append(imageCrystal)
                    divCol.append(divRow)
                    $(".crystals").append(divCol);
                }
            }
    //play new game
            function newGame() {
    
                counter = 0;
                $(".user-score").text(counter);
    
                function randomIntFromInterval(min, max){
                  return Math.floor(Math.random() * (max - min) + min);
                }
    
                targetNum = randomIntFromInterval(19, 120);
    
                $(".value").text(targetNum);
    
            }
    
            //document.addEventListener("click", function)
    
            $(".crystals").on("click", ".gem-img", function(){
              console.log("this is working");
              counter += parseInt($(this).attr("data-num"));
    
              $("#yourScore").text(counter);
    
              if (counter == targetNum){
                $(".status").text("You won!!!!");
                ++wins;
                $(".wins").text(wins);
                console.log(wins)
                newCrystals();
                newGame();
                audio.play();
    
              } else if ( counter > targetNum){
                $(".status").text("You lost!")
                ++losses;
                $(".losses").text(losses);
                console.log(losses)
                $(".crystals").empty();
                newCrystals();
                newGame();
                audio1.play();
              }
        });
});
    