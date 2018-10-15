
var paragrapgh = document.getElementById('paragrapgh');
var letters = paragrapgh.innerText.split(''); 
var colors = [/*'red','green','blue','pink', 'gold', 'yellow', 'blueviolet'*/];
var spans = [];
 
for(var i = 0; i < letters.length; i++){
  var color = colors[Math.floor(Math.random()*colors.length)] // getting random color from array;
  var span = "<span class='spanTag' style='color: " + color + ";'>" + letters[i] + "</span>"
 
  spans.push(span);
};

paragrapgh.innerHTML = spans.join('');// setting colored spans as paragrapgh HTML


 var spanTag = document.getElementsByClassName('spanTag');
 
 for(var i = 0; i < spanTag.length; i++) {
	spanTag[i].addEventListener('mouseover', function(event) {
		var randomNumber= Math.floor(Math.random()*2);
		
			if (randomNumber==0){
				event.target.style.marginLeft= '100px';
				console.log(randomNumber);
			}else{
				event.target.style.marginRight= '100px';
				console.log(randomNumber);
			};
	  });
	spanTag[i].addEventListener('mouseout', function(event) { 
		setTimeout(function(){event.target.style.margin='0px'},7000);
	});
}	

 /* !Margin Left!
 var spanTag = document.getElementsByClassName('spanTag');
 for(var i = 0; i < spanTag.length; i++) {
  spanTag[i].addEventListener('mouseover', function(event) {
	 // console.log(event.target);
	  event.target.style.marginLeft= '100px';
	  setTimeout(function(){event.target.style.marginLeft='0px'},7000)
	  });
 
}	
*/
 
 /* !CSS!
  spans[i].addEventListener('mouseenter', function(event) {
    event.target.className = 'hovered';
  });

}		
	*/	
		
		
		
		
