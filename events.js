// Assignment tasks are commented above code that executes the task
var sectionsArray = document.getElementsByClassName("article-section");

for (var i = 0; i < sectionsArray.length; i++) {
	sectionsArray[i].addEventListener('click', function(e) { 
		var stuff = e.target.innerText;
		var message = `You clicked on the "${stuff}"" section`;
		document.getElementById("output-target").innerHTML = message; 
	});
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById("page-title").addEventListener('mouseover', function(){
	document.getElementById("output-target").innerHTML = "You moved your mouse over the header";
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").addEventListener('mouseout', function(){
	document.getElementById("output-target").innerHTML = "You left me!!";
});

// When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keydown",function() {
	document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// Code adds a class that colors the background.
document.getElementById("add-color").addEventListener('click',function(){
	document.getElementById("guinea-pig").setAttribute('class','blue');
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// Code adds a class that bolds the text.
document.getElementById("make-large").addEventListener('click',function(){
	document.getElementById("guinea-pig").setAttribute('class','hulkify');

});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// Code adds a class that has a border in defined in the css file.
document.getElementById("add-border").addEventListener('click',function(){
	document.getElementById("guinea-pig").setAttribute('class','capture-it');

});
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.getElementById("add-rounding").addEventListener('click',function(){
	document.getElementById("guinea-pig").setAttribute('class','rounded');

}); 
