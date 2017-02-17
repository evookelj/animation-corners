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
	ctx.fillStyle = "#ffb6c1";
	ctx.fill();

	x++;
	if (x==c.height/2) {
	    x=1;
	}
	rid = window.requestAnimationFrame(drawCirc);
    };

    drawCirc();
}

var dvdIt = function() {
    var x = Math.random()*c.width;
    var y = Math.random()*c.height;
    var xvol = 1;
    var yvol = 1;
    
    window.cancelAnimationFrame( rid );

    var drawDvd = function() {
	ctx.clearRect(0,0,c.width,c.height);
	console.log(rid);

	ctx.beginPath();
	ctx.strokeRect(x,y,10,10);
	ctx.stroke();

	if (x==c.width) { xvol = -1; }
	if (y==c.height) { yvol = -1; }
	if (x==0) { xvol = 1; }
	if (y==0) { yvol = 1; }
	
	x+= xvol;
	y+= yvol;
	rid = window.requestAnimationFrame( drawDvd );
    };

    drawDvd();
}

var stopIt = function() {
    window.cancelAnimationFrame(rid);
}

circle.addEventListener( 'click', circ );
dvd.addEventListener( 'click', dvdIt );
stop.addEventListener( 'click', stopIt );
