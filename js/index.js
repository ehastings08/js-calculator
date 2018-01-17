function main() {
  
  // First handle output. If any button is clicked, that should display on the output div.
  $(".button").click(function() {
    
    // If "AC", clear entire screen
    if ($(this).val() === "AC") {
      $("#output").empty();
    }
    
    // If "CE", remove one digit from the typed output and from user input
    else if ($(this).val() === "CE") {
      var current = $("#output").html();
      $("#output").html(current.slice(0,-1));
    }
    
    // If the clicked button has numeric value OR is a decimal OR is a mathematical operator (aka neither Ans nor =...
    
    else if ( ($(this).val() !== "=") && ($(this).val() !== "Ans") ) {
      // Add to the screen output
      $("#output").append($(this).val());
    }
    
    // If equals is pressed, trigger the result section
    else if ($(this).val() === "=") {
      // Then use eval() to evaluate the mathematical output
      var result = eval($("#output").html());
      $("#output").html(result);
    }
    
  }); // end click events
  
} // end main function

$(document).ready(main);