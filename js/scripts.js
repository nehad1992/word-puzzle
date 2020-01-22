$(document).ready(function(){
    $("form#formOne").submit(function(event) {
       event.preventDefault();

       var string = $("#sentence").val();

       var newString = "";

       for (i=0; i < string.length; i++){
        var character = string.charAt(i);
        if (character === "a" || character === "e" || character === "o" || character === "i" || character === "u"){
            newString +="-";
        } else newString +=character;
    }

    $("#text").append(newString);
        
    })
}); 