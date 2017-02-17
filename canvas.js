stop = document.getElementById("stop");
circle = document.getElementById("circle");
dvd = document.getElementById("dvd");
c = document.getElementById("slate");
ctx = c.getContext("2d");
var rid;

var circ = function() {
    var x = 0;
    var dx = 1;
    window.cancelAnimationFrame( rid );

    var drawCirc = function() {
	ctx.clearRect(0,0,c.width,c.height);
	console.log(rid);
	
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, x, 0, Math.PI * 2 );
	ctx.fillStyle = "#ffb6c1";
	ctx.fill();

	if (x==c.height/2) {
	    dx = -1;
	} else if (x==0) {
	    dx = 1;
	}
	x += dx;
	rid = window.requestAnimationFrame(drawCirc);
    };

    drawCirc();
}

var dvdIt = function() {
    //random start + create starting velocity
    var x = Math.random()*c.width; 
    var y = Math.random()*c.height;
    var xvol = 1;
    var yvol = 1;
    var offset = 40;
    
    window.cancelAnimationFrame( rid );

    var drawDvd = function() {
	ctx.clearRect(0,0,c.width,c.height);
	console.log(rid);

	//draw new box
	ctx.beginPath();
	//ctx.strokeRect(x,y,10,10);
	pic = new Image();
	pic.src = "pic.png"
	ctx.drawImage(pic,x,y,offset,offset);
	ctx.stroke();

	//bounce on walls
	if (x>=c.width-offset) { xvol = -1; }
	if (y>=c.height-offset) { yvol = -1; }
	if (x<=0) { xvol = 1; }
	if (y<=0) { yvol = 1; }

	//important moment notification
	if ((x==0 || x==c.width-offset) && (y==0 || y==c.height-offset)) {
	    window.alert("IT HIT THE CORNER. YOU WIN");
	}
	
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
