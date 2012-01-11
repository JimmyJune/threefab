<<<<<<< HEAD
<<<<<<< HEAD
/** 
 * @class THREEFAB.ColorView
 * 
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup color view.
 * 
=======
=======
>>>>>>> master
/**
 * @class THREEFAB.ColorView
 *
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup color view.
 *
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
 */


THREEFAB.ColorView = Backbone.View.extend({
	
	el: document.createElement('li'),
	
	types: {
		color: {},
		ambient: {},
		specular: {}
	},

	initialize: function() {

		_.bindAll(this);
		
		this.el = $(this.el);
		this.el.css({height:55, padding:'7px 0 10px 60px'});
		
		this.types.color = $("<div class='color_preview_container'><div class='color_preview'></div>Color</div>");
		this.types.color.ColorPicker({ onChange: this.changeColor });

		this.types.ambient = $("<div class='color_preview_container'><div class='color_preview'></div>Amb</div>");
		this.types.ambient.ColorPicker({ onChange: this.changeAmbient });

		this.types.specular = $("<div class='color_preview_container'><div class='color_preview'></div>Spec</div>");
		this.types.specular.ColorPicker({ onChange: this.changeSpecular });

		this.el.append( this.types.color );
		this.el.append( this.types.ambient );
		this.el.append( this.types.specular );

<<<<<<< HEAD
<<<<<<< HEAD
		$.subscribe('viewport/mesh/selected', this.meshChanged);
=======
		$.subscribe(THREEFAB.Events.VIEWPORT_MESH_SELECTED, this.meshChanged);
>>>>>>> master
=======
		$.subscribe(THREEFAB.Events.VIEWPORT_MESH_SELECTED, this.meshChanged);
>>>>>>> master
	},

	meshChanged: function( object ) {
		
		var color = { r: object.material.color.r*255, g:object.material.color.g*255, b:object.material.color.b*255 },
			ambient = { r: object.material.ambient.r*255, g:object.material.ambient.g*255, b:object.material.ambient.b*255 },
			specular = { r: object.material.specular.r*255, g:object.material.specular.g*255, b:object.material.specular.b*255 };

		this.update( this.types.color, color );
		this.update( this.types.ambient, ambient );
		this.update( this.types.specular, specular );
	},

	changeColor: function( hsb, hex, rgb ) {
	
		this.update(this.types.color, rgb);
<<<<<<< HEAD
<<<<<<< HEAD
		$.publish('material/color/changed', [rgb, 'color']);
=======
		$.publish(THREEFAB.Events.MATERIAL_COLOR_CHANGED, [rgb, 'color']);
>>>>>>> master
=======
		$.publish(THREEFAB.Events.MATERIAL_COLOR_CHANGED, [rgb, 'color']);
>>>>>>> master
	},

	changeAmbient: function( hsb, hex, rgb ) {
	
		this.update(this.types.ambient, rgb);
<<<<<<< HEAD
<<<<<<< HEAD
		$.publish('material/color/changed', [rgb, 'ambient']);
=======
		$.publish(THREEFAB.Events.MATERIAL_COLOR_CHANGED, [rgb, 'ambient']);
>>>>>>> master
=======
		$.publish(THREEFAB.Events.MATERIAL_COLOR_CHANGED, [rgb, 'ambient']);
>>>>>>> master
	},

	changeSpecular: function( hsb, hex, rgb ) {
	
		this.update(this.types.specular, rgb);
<<<<<<< HEAD
<<<<<<< HEAD
		$.publish('material/color/changed', [rgb, 'specular']);
=======
		$.publish(THREEFAB.Events.MATERIAL_COLOR_CHANGED, [rgb, 'specular']);
>>>>>>> master
=======
		$.publish(THREEFAB.Events.MATERIAL_COLOR_CHANGED, [rgb, 'specular']);
>>>>>>> master
	},

	update: function(type, rgb) {
		var color = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
		type.find('.color_preview').css('backgroundColor', color);
	}

});