stop = document.getElementById("stop");
circle = document.getElementById("circle");
dvd = document.getElementById("dvd");
c = document.getElementById("slate");
ctx = c.getContext("2d");
var rid;

var circ = function() {
    var x = 1;
    window.cancelAnimationFrame( rid );

    var drawCirc = function() {
	ctx.clearRect(0,0,c.width,c.height);
	console.log(rid);
	
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, x, 0, Math.PI * 2 );
	ctx.fillStyle = "#f0f8ff";
	ctx.stroke();
	ctx.fill();

	x++;
	if (x==c.height/2) {
	    x=1;
	}
	rid = window.requestAnimationFrame(drawCirc);
    };

    drawCirc();
}

var dvd = function() {
    var x = 1;
    var y = 1;
    window.cancelAnimationFrame( rid );

    var drawDvd = function() {
	ctx.clearRect(0,0,c.width,c.height);
	console.log(rid);

	ctx.beginPath();
	ctx.strokeRect(x,y,x+1,y+1);
	ctx.stroke();

	x++;
	y++;
	rid = window.requestAnimationFrame( drawDvd );
    };

    drawDvd();
}

var stopIt = function() {
    window.cancelAnimationFrame(rid);
}

circle.addEventListener( 'click', circ );
stop.addEventListener( 'click', stopIt );
