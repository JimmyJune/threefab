<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/** 
 * @class THREEFAB.TextureView
 * 
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup texture view.
 * 
=======
=======
>>>>>>> master
=======
>>>>>>> master
/**
 * @class THREEFAB.TextureView
 *
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup texture view.
 *
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
 */


THREEFAB.TextureView = Backbone.View.extend({
	
	el: document.createElement('li'),
	texture: document.createElement('img'),
	label: document.createElement('span'),

	initialize: function() {

		_.bindAll(this);
		

		this.el = $(this.el);
		this.el.css({height:40, paddingTop:'5px'});
		this.texture.width = this.texture.height = 30;
		this.texture = $(this.texture);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
		this.texture.addClass('texture-container');
>>>>>>> master
=======
		this.texture.addClass('texture-container');
>>>>>>> master
=======
		this.texture.addClass('texture-container');
>>>>>>> master

		this.label = $(this.label);
		this.label.html('X');
		this.label.addClass('button fr hidden');
		this.label.bind('click', this.clear);

		this.el.append(this.texture);
		this.el.append(this.label);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		$.subscribe('viewport/mesh/selected', this.render);
		$.subscribe('viewport/light/selected', this.render);
		$.subscribe('viewport/object/texture/added', this.render);
=======
		$.subscribe(THREEFAB.Events.VIEWPORT_MESH_SELECTED, this.render);
		$.subscribe(THREEFAB.Events.VIEWPORT_LIGHT_SELECTED, this.render);
		$.subscribe(THREEFAB.Events.VIEWPORT_OBJECT_TEXTURE_ADDED, this.render);
>>>>>>> master
=======
		$.subscribe(THREEFAB.Events.VIEWPORT_MESH_SELECTED, this.render);
		$.subscribe(THREEFAB.Events.VIEWPORT_LIGHT_SELECTED, this.render);
		$.subscribe(THREEFAB.Events.VIEWPORT_OBJECT_TEXTURE_ADDED, this.render);
>>>>>>> master
=======
		$.subscribe(THREEFAB.Events.VIEWPORT_MESH_SELECTED, this.render);
		$.subscribe(THREEFAB.Events.VIEWPORT_LIGHT_SELECTED, this.render);
		$.subscribe(THREEFAB.Events.VIEWPORT_OBJECT_TEXTURE_ADDED, this.render);
>>>>>>> master
	},


	render: function(object) {
				
		var texture;

		if(object.material.map) {

			texture = object.material.map;
			
			if(object.material.map.image instanceof HTMLImageElement ) {
				
				this.texture.attr('src', object.material.map.image.src);
				this.label.removeClass('hidden');
				
			} else {
				this.reset();
			}
		} else {
			this.reset();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		}		
=======
		}
>>>>>>> master
=======
		}
>>>>>>> master
=======
		}
>>>>>>> master
	},

	clear: function() {
		
		this.reset();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		$.publish('texture/clear');
=======
		$.publish(THREEFAB.Events.TEXTURE_CLEAR);
>>>>>>> master
=======
		$.publish(THREEFAB.Events.TEXTURE_CLEAR);
>>>>>>> master
=======
		$.publish(THREEFAB.Events.TEXTURE_CLEAR);
>>>>>>> master

	},

	reset: function() {

		this.texture.attr('src', 'img/blank_texture.jpg');
		this.label.addClass('hidden');
	
	}


});