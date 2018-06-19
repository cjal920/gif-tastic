$( document ).ready(function() {
    // An array of actions, new actions will be pushed into this array;
    var gifFathers = ["Don Vito","Michael","Kay Adams","Sonny","Fredo","Connie","Tom Hagan","Clemenza","Tessio","Virgil Solozzo",
              "Jack Woltz","Apollonia","Al Neri","Willy Cicci","Frank Pentangeli","Hyman Roth"];
// Creating Functions & Methods
    // Function that displays all gif buttons
    function displayGifButtons(){
        $("#gif-btns").empty(); // erasing anything in this div id so that it doesnt duplicate the results
        for (var i = 0; i < gifFathers.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("gif-fathers");
            //gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", gifFathers[i]);
            gifButton.text(gifFathers[i]);
            $("#gif-btns").append(gifButton);
        }
    }
    // Function to add a new action button
    function addNewButton(){
        $("#submit").on("click", function(){
        var gifFather = $("#text-input").val().trim();
        if (gifFather == ""){
          return false; // added so user cannot add a blank button
        }
        gifFathers.push(gifFather);
    
        displayGifButtons();
        return false;
        });
    }
    // Function to remove last action button
        // Doesnt work properly yet removes all of the added buttons
        // rather than just the last
    function removeLastButton(){
        $("remove").on("click", function(){
        gifFathers.pop(gifFather);
        displayGifButtons();
        return false;
        });
    }


    ///////////////////////////////////////////////////////
    // Function that displays all of the gifs
    function displayGifs(){
        var action = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL); // displays the constructed url
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            console.log(response); // console test to make sure something returns
            $("#gifsView").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
            var results = response.data; //shows results of gifs
            if (results == ""){
              alert("There isn't a gif for this selected button");
            }
            for (var i=0; i<results.length; i++){
    
                var gifDiv = $("<div>"); //div for the gifs to go inside
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
                $("#gifsView").prepend(gifDiv);
            }
        });
    }
    // Calling Functions & Methods
    displayGifButtons(); // displays list of actions already created
    addNewButton();
    removeLastButton();
    // Document Event Listeners
    $(document).on("click", ".action", displayGifs);
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