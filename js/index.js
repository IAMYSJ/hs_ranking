window.addEventListener('load', function() {
    card = document.getElementById('card');
	card.addEventListener('dragend', function() {
        setTimeout(function() {
            card.style.visibility = 'visible';
        }, 500);
    }, false);
    
    // Drop Left
    leftbox = document.getElementById('leftbox');
	leftbox.addEventListener('dragover', function(e) {
        e.preventDefault();
        leftbox.style.background = 'lightblue';
    }, false);
    leftbox.addEventListener('dragleave', function(e) {
        e.preventDefault();
        leftbox.style.background = 'white';
    }, false);
    leftbox.addEventListener('drop', function(e) {
        //e.preventDefault();
        card.style.visibility = 'hidden';
        leftbox.style.background = 'white';
    }, false);
    
    // Drop Right
    rightbox = document.getElementById('rightbox');
	rightbox.addEventListener('dragover', function(e) {
        e.preventDefault();
        rightbox.style.background = 'lightblue';
    }, false);
    rightbox.addEventListener('dragleave', function(e) {
        e.preventDefault();
        rightbox.style.background = 'white';
    }, false);
	rightbox.addEventListener('drop', function(e) {
        //e.preventDefault();
        card.style.visibility = 'hidden';
        rightbox.style.background = 'white';
    }, false);
}, false);