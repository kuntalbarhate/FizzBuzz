$(document).ready(function() {
for (var i = 1; i <= 15; i++) {

	if((i%3)==0 && (i%5)==0){
		$(".main").append(" FizzBuzz ");
		$(".main").append("<p><br></p>");
	}

	else if((i%3)==0){
		$(".main").append(" Fizz ");
    $(".main").append("<p><br></p>");
	}

	else if((i%5)==0){
		$(".main").append(" Buzz ");
        $(".main").append("<p><br></p>");
	}

	else{$(".main").append(i);
    $(".main").append("<p><br></p>");
    }	
	

};
});