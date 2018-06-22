$( document ).ready(function() {
    var gifFathers = ["Don Vito","Michael Corleone","Sonny Corleone","Kay Adams",
    "Johnny Fontane","Apollonia",];

    function displayGifButtons(){
        $("#gif-btns").empty(); 
        for (var i = 0; i < gifFathers.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("gif-father");
            gifButton.attr("data-name", gifFathers[i]);
            gifButton.text(gifFathers[i]);
            $("#gif-btns").append(gifButton);
        }
    }
   
    function addNewButton(){
        $("#submit").on("click", function(){
        var gifFather = $("#text-input").val().trim();
        if (gifFather == ""){
          return false;
        }
        gifFathers.push(gifFather);
        displayGifButtons();
        return false;
        });
    }

    function removeLastButton(){
        $("remove").on("click", function(){
        gifFathers.pop(gifFather);
        displayGifButtons();
        return false;
        });
    }

    function displayGifs(){
        var gifFather = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifFather + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            console.log(response); 
            $("#gif-display").empty(); 
            var results = response.data; 
            if (results == ""){
              alert("There isn't a gif for this selected button");
            }
            for (var i = 0; i < results.length; i++ ){
    
                var gifDiv = $("<div>"); 
                gifDiv.addClass("gifDiv");
                // pulling rating of gif
                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                // pulling gif
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
                gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
                gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
                gifImage.attr("data-state", "still"); // set the image state
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                // pulling still image of gif
                // adding div of gifs to gifsView div
                $("#gif-display").prepend(gifDiv);
            }
        });
    }
    // Calling Functions & Methods
    displayGifButtons(); // displays list of actions already created
    addNewButton();
    removeLastButton();
    // Document Event Listeners 
    $(document).on("click", ".gif-father", displayGifs);
    $(document).on("click", ".image", function(){
        var state = $(this).attr('data-state');
        if ( state == 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }else{
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
    });



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