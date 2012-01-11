/* =============================================================================

 Author: Jason Kadrmas
 Company: KadrmasConceps LLC

========================================================================== */

(function(){
	
	// Ready
	$(document).ready(function(){

		var dragDrop = new THREEFAB.DragDropLoader(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	    viewport = new THREEFAB.Viewport(),
	    ui = new THREEFAB.Ui(viewport),
		toolbox = new THREEFAB.Toolbox();

		// App Resize
		window.addEventListener('resize', function(event) { 
=======
=======
>>>>>>> master
=======
>>>>>>> master
			viewport = new THREEFAB.Viewport(),
			ui = new THREEFAB.Ui(viewport),
			toolbox = new THREEFAB.Toolbox(),
			exporter = new THREEFAB.Exporter();

		// App Resize
		window.addEventListener('resize', function(event) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
			viewport.setSize( window.innerWidth, window.innerHeight );
		}, false);
		
		
		// Start animating viewport
		viewport.animate();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		
	});
	
})();






/*window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event){
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
            delta = event.wheelDelta/120;
            if (window.opera) delta = -delta;
    } else if (event.detail) {
            delta = -event.detail/3;
    }
    if (delta)
            handle(delta);
}
*/
=======
=======
>>>>>>> master
=======
>>>>>>> master
		viewport.setSize( window.innerWidth, window.innerHeight );

		//exporter.generate(viewport);
		$.subscribe(THREEFAB.Events.EXPORTER_GENERATE, function(){
			exporter.generate(viewport);
		});

		$('#hide-button').on('click', function() {
			$('.code-container').hide();
		});

	});
	
<<<<<<< HEAD
<<<<<<< HEAD
})();
>>>>>>> master
=======
})();
>>>>>>> master
=======
})();
>>>>>>> master
