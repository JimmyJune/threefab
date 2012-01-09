<<<<<<< HEAD
/** 
 * @class THREEFAB.MaterialModel
 * 
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Sets up material model for the right hand material panel.
 * 
=======
/**
 * @class THREEFAB.MaterialModel
 *
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Sets up material model for the right hand material panel.
 *
>>>>>>> master
 */

THREEFAB.MaterialModel = Backbone.Model.extend({

	materialList: [
<<<<<<< HEAD
		 {
		 	prop:'wireframe'
		 },
		 {
		 	prop:'transparent'
		 },
		 {
		 	prop:'opacity', 
		 	min:0, 
		 	max:1
		 },
		 {
		 	prop:'shading', 
		 	values:{None: 0, Flat: 1, Smooth: 2},
		 	onChange:'rebuildMaterial'
		 },
		 {
		 	prop:'blending', 
		 	values:{Normal: 0, Additive: 1, Subtractive: 2, Multiply:3, AdditiveAlpha:4}
		 },
		 {
		 	prop:'reflectivity',
		 	min:0,
		 	max:5
		 },
		 {
		 	prop:'shininess'
		 }
=======
		{
			prop:'wireframe'
		},
		{
			prop:'transparent'
		},
		{
			prop:'opacity',
			min:0,
			max:1
		},
		{
			prop:'shading',
			values:{None: 0, Flat: 1, Smooth: 2},
			onChange:'rebuildMaterial'
		},
		{
			prop:'blending',
			values:{Normal: 0, Additive: 1, Subtractive: 2, Multiply:3, AdditiveAlpha:4}
		},
		{
			prop:'reflectivity',
			min:0,
			max:5
		},
		{
			prop:'shininess'
		}
>>>>>>> master
	],

	lightList: [
		{
<<<<<<< HEAD
			prop: 'intensity', 
			min:0, 
=======
			prop: 'intensity',
			min:0,
>>>>>>> master
			max:10
		},
		{
			prop: 'castShadow'
		}
	]

});