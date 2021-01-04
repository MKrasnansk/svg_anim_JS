'use strict';

var progres = document.querySelector('.progres'),
    textarea = document.querySelector('textarea'),
    counter = document.querySelector('.counter');



//dashArray/Offset
var pathLength = progres.getAttribute('r') * 2 * Math.PI,
    teweetLength = 30,
    dangerZone = Math.floor(teweetLength * (3 / 4)),
    warningZone = Math.floor(teweetLength * (1 / 2));


progres.style.strokeDasharray = pathLength + 'px';
progres.style.strokeDashoffset = pathLength + 'px';


//input
textarea.addEventListener('input', function(event) {

    var len = textarea.value.length,
        per = len / teweetLength;
    //progres
    if (len <= teweetLength) {
        var newOffset = pathLength - (pathLength * per) + 'px';
        progres.style.strokeDashoffset = newOffset;
        //colors
        progres.classList.toggle('warn', len > warningZone && len < dangerZone);
        progres.classList.toggle('danger', len >= dangerZone);
        progres.classList.toggle('tragedy', len == teweetLength);
    }
    //counter
    counter.textContent = teweetLength - len;
    counter.classList.toggle('danger', len >= teweetLength);

});