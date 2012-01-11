
THREEFAB.Toolbox = Backbone.View.extend({
	initialize:function() {
		$('.toolbox-list').bind('click', function(event) {
			
			event.preventDefault();
			
			var target = event.target || event.srcElement,
				className;
			
			if(target.tagName.toLowerCase() === "a") {
				className = target.className;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
				$.publish('primitive/add', target.className);				
			}
		});	
=======
				$.publish(THREEFAB.Events.PRIMITIVE_ADDED, target.className);
			}
		});
>>>>>>> master
=======
				$.publish(THREEFAB.Events.PRIMITIVE_ADDED, target.className);
			}
		});
>>>>>>> master
=======
				$.publish(THREEFAB.Events.PRIMITIVE_ADDED, target.className);
			}
		});
>>>>>>> master
=======
				$.publish(THREEFAB.Events.PRIMITIVE_ADDED, target.className);
			}
		});
>>>>>>> master
		
		$('.light-list').bind('click', function(event) {
			event.preventDefault();
			
			var target = event.target || event.srcElement,
				className;
			
			if(target.tagName.toLowerCase() === "a") {
				className = target.className;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
				$.publish('light/add', target.className);
			}
		});
=======
=======
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
				$.publish(THREEFAB.Events.LIGHT_ADDED, target.className);
			}
		});

		$('.export').bind('click', function(event) {
			$.publish(THREEFAB.Events.EXPORTER_GENERATE);
		});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
	}
});
