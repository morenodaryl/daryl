// btn actions to show flexmenu 
document.querySelector('#menuflexbtn').addEventListener('click',function(e){
	document.querySelector('#menuflex').classList.add('show');
	c = document.querySelector('#menuflexbtn');
	if (c.classList.contains('x')){
		c.classList.remove('x');
		document.querySelector('#menuflex').classList.remove('show');
	}else{
		c.classList.add('x');
	}
});

// click on flexmenu
var options = document.querySelectorAll('.options li a');
[].forEach.call(options,function(op){
	op.addEventListener('click',function(){
		document.querySelector('#menuflex').classList.remove('show');
		document.querySelector('#menuflexbtn').classList.remove('x');;
	})
});

// Give color to nav when scroll down
document.addEventListener('scroll',function(){
	v = document.documentElement.scrollTop;
	if (document.body.scrollTop != 0) {
		v = document.body.scrollTop;
	}
	if (v > (document.querySelector('.section2').offsetTop - 50)) {
		document.querySelector('nav').classList.add('color');
		document.querySelector('nav').classList.add('fixed');

	}
	else{
		document.querySelector('nav').classList.remove('color');
		document.querySelector('nav').classList.remove('fixed');
	}
});

// ver mas click action
document.querySelector('.vermas').addEventListener('click',function(){
	this.classList.add('none');
	document.querySelector('.section3').classList.add('show')
	
});

// Drag and drop icons
var dragSrcEl = null;

function handleDragStart(e) {
	this.style.opacity = '0.3';
	dragSrcEl = this;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragOver(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}
function handleDragEnter(e) {
	this.classList.add('over');

}
function handleDragLeave(e) {
	this.classList.remove('over'); 

}
function handleDrop(e) {
	if (e.stopPropagation) {
		e.stopPropagation(); 
	}
	if (dragSrcEl != this) {
		tmp = dragSrcEl.innerHTML
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = tmp;
	}
	return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  [].forEach.call(logos, function (col) {
    col.classList.remove('over');
    col.style.opacity = 1
  });
}


var logos = document.querySelectorAll('.logo');
[].forEach.call(logos, function(col) {
  col.title = 'Arrástrame ;)'
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});