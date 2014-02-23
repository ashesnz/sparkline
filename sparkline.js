function sparkline( id, options ) {
    var obj = document.getElementById( id );
    obj.className = obj.className + " sparkline"

	var c = document.createElement('canvas');
	c.id = id + "-canvas"

    c.width = options.width == undefined ? 200 : options.width;
    c.height = options.height == undefined ? 30 : options.height;

	obj.appendChild( c );


    var ctx = c.getContext("2d");
    
    xRatio = c.width / options.data.length;
    yRatio = c.height/ 100;
    
    for( var i=0;i<options.data.length;i++ ) {
        x = xRatio * i;
        y =  yRatio * ( 100 - options.data[i] );

        ctx.lineTo(x, y);
    }
    
    ctx.stroke();

}

