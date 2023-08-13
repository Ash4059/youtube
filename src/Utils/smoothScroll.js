export const smoothScrolling = function ( parentElm, childElm ) {
    const start = parentElm.scrollTop,
        change = childElm.offsetTop - start,
        increment = 20;
    let  currentTime = 0;
    const duration = 1000;
    let timer = null;

    const animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        parentElm.scrollTop = val;
        if(currentTime < duration) {
            timer = setTimeout(animateScroll, increment);
        }
    };
    animateScroll();

    return timer;
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};