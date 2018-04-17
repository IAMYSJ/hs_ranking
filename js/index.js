function doFirst(){
	card = document.getElementById('card');
	card.addEventListener('dragstart', dragstart, false);
	card.addEventListener('dragend', dragend, false);
    
    // Drop Left
    leftbox = document.getElementById('leftbox');
	leftbox.addEventListener('dragenter', function(e) {
        e.preventDefault();
    }, false);
	leftbox.addEventListener('dragover', function(e) {
        e.preventDefault();
    }, false); 
    leftbox.addEventListener('drop', dropLeft, false);
    
    // Drop Right
    rightbox = document.getElementById('rightbox');
    rightbox.addEventListener('dragenter', function(e) {
        e.preventDefault();
    }, false);
	rightbox.addEventListener('dragover', function(e) {
        e.preventDefault();
    }, false); 
	rightbox.addEventListener('drop', dropRight, false);
}

function dragstart(e) {
	var data = '<img src="https://fakeimg.pl/300x350/">';
	e.dataTransfer.setData('image/jpg', data);
}

function dragend() {
	setTimeout(function() {
        card.style.visibility = "visible";
    }, 500);
}

function dropLeft(e) {
    //e.preventDefault();
    card.style.visibility = "hidden";
	// leftbox.innerHTML = e.dataTransfer.getData('image/jpg');
}

function dropRight(e) {
    //e.preventDefault();
    card.style.visibility = "hidden";
	// rightbox.innerHTML = e.dataTransfer.getData('image/jpg');
}

window.addEventListener('load', doFirst, false);