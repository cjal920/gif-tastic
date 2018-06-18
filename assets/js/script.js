var gifFather = ["Don Vito","Michael","Kay Adams","Sonny","Fredo","Connie","Tom Hagan","Clemenza","Tessio","Virgil Solozzo",
              "Jack Woltz","Apollonia","Al Neri","Willy Cicci","Frank Pentangeli","Hyman Roth",];

$( document ).ready(function() {           
});

function displayGifButtons()    {
    $("#gif-buttons").empty(); 
    for (var i = 0; i < gifFather.length; i++){
        var gifButton = $("<button>").addClass("gif-btn");
        //gifButton.addClass("gif-btn");
       // gifButton.addClass("btn btn-primary")
        //gifButton.attr("data-name", gifFather[i]);
        gifButton.html(gifFather[i]);
        $("#gif-buttons").append(gifButton);
    }
}

displayGifButtons()

//how to add buttons
function addGifButton(){
    $("#submit").on("click", function(){
    var gifFather = $("#text-input").val().trim();
    if (gifFather == ""){
      return false; // added so user cannot add a blank button
    }
    gifFather.push(gifFather);

    displayGifButtons();
    return false;
    });
}




//$("#gif-btn").html(gifFather[2]);

//function createButtons()    {
  //  for (var i = 0; i < gifFather.length; i++);
    //$("#gif-btn").append(gifFather);
//}
//createButtons();


//};


 


//$("#submit").on("click", function() {

    //$("#submit").on("click", function() {
  //  });
    
    



 //   $.ajax();    {
    
    



    //$.ajax();    {
 //   };

//$(document).ready(function() {   


   // wGyznbruZGn00x3w8BFJxh7kQFZXYx7h

//var gifFather = "the+godfather";
 

//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=the+godfather&api_key=wGyznbruZGn00x3w8BFJxh7kQFZXYx7h&limit=100");
//xhr.done(function(data) { 
//    console.log(data.data[62].images.original.url); 
//});








