
var paragrapgh = document.getElementById('paragrapgh');
var letters = paragrapgh.innerText.split(''); // Spliting text
var colors = [/*'red','green','blue','pink', 'gold', 'yellow', 'blueviolet'*/];
var spans = [];
 
for(var i = 0; i < letters.length; i++){
  var color = colors[Math.floor(Math.random()*colors.length)] // geting random color from array;
  var span = "<span class='spanTag' style='color: " + color + ";'>" + letters[i] + "</span>"
 
  spans.push(span);
};
 
// setting colored spans as paragrapgh HTML
paragrapgh.innerHTML = spans.join('');
 
 var spanTag = document.getElementsByClassName('spanTag');
 for(var i = 0; i < spanTag.length; i++) {
  spanTag[i].addEventListener('mouseover', function(event) {
  console.log(event.target);
  event.target.style.marginLeft= '100px';
  setTimeout(function(){event.target.style.marginLeft='0px'},7000)
  });
 
}	
 
 
 
 
 /*
var spans = document.getElementsByTagName('span');
for(var i = 0; i < spans.length; i++) {
  spans[i].addEventListener('mouseenter', function(e) {
    e.target.className = 'hovered';
  });
 
  spans[i].addEventListener('mouseleave', function(e) {
    e.target.className = '';
  });
}	
		
	*/	
		
		
		
		
