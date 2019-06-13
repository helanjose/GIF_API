$(document).ready(function(){


var animals = ["parrot", "elephant", "cat", "dog"];
console.log(animals);


function addButtons() {

  
   $("#buttons-view").empty();

    // Looping through the array of animals
    for (var i = 0; i < animals.length; i++) {

    // Then dynamicaly generating buttons for each value in the array.
    
      var a = $("<button>");
      // Adding a class
      a.addClass("animalz");
      // Adding a data-attribute with a value of  animal at index i
      a.attr("data-name", animals[i]);
      // Providing the button's text with a value of animal at index i
      a.text(animals[i]);
      console.log($(".animalz").text());

   
      // Adding the button to the HTML
      $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-animal").on("click", function(event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  
    event.preventDefault();

    // This line will grab the text from the input box
    var animal = $("#animal-input").val().trim();
    $("#animal-input").html('<h1>ada</h1>');
    // The animal name from the textbox is then added to our array
    animals.push(animal);

    // calling addButtons which handles the processing of animal array
    addButtons();
});




function displayInfo() {
   // console.log($(".animalz").text());
    var animal_name = $(this).text();
    console.log(animal_name);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal_name + "&api_key=a6cl8TDa40alTpt5acXal9kQ4lRWQeHH&limit=10";

    // Performing an AJAX request with the queryURL
  $.ajax({
  url: queryURL,
  method: "GET"
  })
  // After data comes back from the request
  .then(function(response) {
      console.log(queryURL);

      console.log("response:"+response);
     // storing the data from the AJAX request in the results variable
      var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
          var animalDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
          var animalImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          animalImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          animalDiv.append(p);
          animalDiv.append(animalImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(animalDiv);
    }
  });
  
}
$(document).on("click", ".animalz", displayInfo);



// Calling the addButtons function to display the intial buttons
addButtons();

});



  
