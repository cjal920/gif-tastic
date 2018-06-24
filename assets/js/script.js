$( document ).ready(function() {
    var gifFathers = ["Don Vito","Michael Corleone","Sonny Corleone","Kay Adams","Johnny Fontane","Apollonia"];

    function displayGifButtons() {
        $("#gif-btns").empty(); 
        for (var i = 0; i < gifFathers.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("gif-father");
            gifButton.attr("data-name", gifFathers[i]);
            gifButton.text(gifFathers[i]);
            $("#gif-btns").append(gifButton);
        }
    }
   
    function addNewButton() {
        $("#submit").on("click", function() {
        var gifFather = $("#text-input").val().trim();
        if (gifFather == "") {
          return false;
        }
        gifFathers.push(gifFather);
        displayGifButtons();
        return false;
        });
    }

    function removeLastButton() {
        $("remove").on("click", function() {
        gifFathers.pop(gifFather);
        displayGifButtons();
        return false;
        });
    }

    function displayGifs() {                                                            
        var gifFather = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifFather + "&api_key=wGyznbruZGn00x3w8BFJxh7kQFZXYx7h";
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        
        .done(function(response) {
            $("#gif-display").empty(); 
            var results = response.data; 
            for (var i = 0; i < results.length; i++ ) {
                var gifDiv = $("<div>"); 
                gifDiv.addClass("gif-div");
                var gifRating = $("<p>").text("Rated " + results[i].rating);
                gifDiv.append(gifRating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url); 
                gifImage.attr("data-still", results[i].images.fixed_height_small_still.url); 
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url); 
                gifImage.attr("data-state", "still"); 
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                $("#gif-display").prepend(gifDiv);
            }
        });
    }

    displayGifButtons();
    addNewButton();
    removeLastButton();
    $(document).on("click", ".gif-father", displayGifs);
    $(document).on("click", ".image", function() {
        var state = $(this).attr('data-state');
        if ( state == "still") {
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
    });
    });
