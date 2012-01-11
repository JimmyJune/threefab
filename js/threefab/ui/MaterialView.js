<<<<<<< HEAD
<<<<<<< HEAD
/** 
 * @class THREEFAB.MaterialView
 * 
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup for material view.
 * 
=======
=======
>>>>>>> master
/**
 *
 * @class THREEFAB.MaterialView
 *
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup for material view.
 *
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
 */


THREEFAB.MaterialView = Backbone.View.extend({
	
	el: '#gui-materials-container',
	gui: {},
	selected: {},
	texture: {},
	color: {},
<<<<<<< HEAD
<<<<<<< HEAD
=======
	light: {},
>>>>>>> master
=======
	light: {},
>>>>>>> master
	
	folders: {
		materials:{},
		lights:{},
<<<<<<< HEAD
<<<<<<< HEAD
		textures:{},
	},
	
=======
		textures:{}
	},

>>>>>>> master
=======
		textures:{}
	},

>>>>>>> master
	initialize: function() {
		
		_.bindAll(this);

		this.el = $(this.el);
		this.selected = arguments[0].selected;
	
<<<<<<< HEAD
<<<<<<< HEAD
		$.subscribe('viewport/mesh/selected', this.meshChanged);
		$.subscribe('viewport/light/selected', this.lightChanged);
		$.subscribe('material/color/changed', this.changeColor);
	},
	
	/**
	 *  Renders the current material dat.GUI view.
	 */
=======
=======
>>>>>>> master
		$.subscribe(THREEFAB.Events.VIEWPORT_MESH_SELECTED, this.meshChanged);
		$.subscribe(THREEFAB.Events.VIEWPORT_LIGHT_SELECTED, this.lightChanged);
		$.subscribe(THREEFAB.Events.MATERIAL_COLOR_CHANGED, this.changeColor);
		$.subscribe(THREEFAB.Events.LIGHT_COLOR_CHANGED, this.changeLightColor);
	},
	
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
	
	render: function() {
		
		// Create materials GUI
		this.gui = new dat.GUI({ autoPlace: false, hide:false });
		this.el.append(this.gui.domElement);
		
		// Add Folders
		this.folders.materials = this.gui.addFolder('Material');
		this.folders.textures = this.gui.addFolder('Texture');
		this.folders.lights = this.gui.addFolder('Light');
		
<<<<<<< HEAD
<<<<<<< HEAD
		
=======
>>>>>>> master
=======
>>>>>>> master
		this.folders.materials.open();
		this.folders.textures.open();

		// Material Color Chips
		this.color = new THREEFAB.ColorView();
		this.folders.materials.__ul.appendChild(this.color.el[0]);

		this.addMaterialOptions();

		// Texture Panel
		this.texture = new THREEFAB.TextureView();
		this.folders.textures.__ul.appendChild(this.texture.el[0]);
		this.texture.render(this.selected);

<<<<<<< HEAD
<<<<<<< HEAD
	},

	/**
	 * Listens to when the mesh changes and updates the material panel.
	 * @function meshChanged
	 * @param {THREE.Mesh} object
	 *
	 */

=======
=======
>>>>>>> master
		// Light view
		this.light = new THREEFAB.LightView();
		this.folders.lights.__ul.appendChild(this.light.el[0]);
		this.light.el.hide();
	},

<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
	meshChanged: function(object) {

		this.selected = object;

		this.folders.lights.close();

		this.resetControllers();
		this.addMaterialOptions();
		
		this.folders.materials.open();
<<<<<<< HEAD
<<<<<<< HEAD
	 	this.folders.textures.open();
	 	this.color.el.show();
	 	this.texture.el.show();
	 	
=======
=======
>>>>>>> master
		this.folders.textures.open();
		this.color.el.show();
		this.texture.el.show();
		
		this.light.el.hide();
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
		//this.rebuildMaterial();

	},

<<<<<<< HEAD
<<<<<<< HEAD
	/**
	 * Listens to when the light changes and updates the material panel.
	 * @function lightChanged
	 * @param {THREE.Mesh} object
	 *
	 */

	lightChanged: function(object) {
		
=======
=======
>>>>>>> master

	lightChanged: function(object) {
		
		this.selected = object;

		this.light.el.show();
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
			
		this.folders.materials.close();
		this.color.el.hide();
		
		this.folders.textures.close();
		this.texture.el.hide();

		this.resetControllers();
		
<<<<<<< HEAD
<<<<<<< HEAD
		THREEFAB.Ui.utils.addProperties( object, this.model.lightList, this.folders.lights );
=======
		THREEFAB.Ui.utils.addProperties( object.light, this.model.lightList, this.folders.lights );
>>>>>>> master
=======
		THREEFAB.Ui.utils.addProperties( object.light, this.model.lightList, this.folders.lights );
>>>>>>> master
		
		this.folders.lights.open();

	},

	resetControllers: function() {
		
		THREEFAB.Ui.utils.removeFolderControllers( this.folders.lights );
		THREEFAB.Ui.utils.removeFolderControllers( this.folders.materials );

	},

	
<<<<<<< HEAD
<<<<<<< HEAD
	/**
	 * Loops through the materialList from model and adds values to ui. 
	 * 
	 * @function MaterialView.addMaterialOptions
	 * @see MaterialModel
	 */
	
=======
>>>>>>> master
=======
>>>>>>> master
	addMaterialOptions: function() {
		
		// Add Material shader options.
		this.folders.materials.add(this.selected.material, 'name', {Basic: 'MeshBasicMaterial', Phong:'MeshPhongMaterial', Lambert: 'MeshLambertMaterial'}).onChange( this.rebuildMaterial );
	
		// Loop and add material properties.
		THREEFAB.Ui.utils.addProperties(this.selected.material, this.model.materialList, this.folders.materials, this);
<<<<<<< HEAD
<<<<<<< HEAD
		
		// Add color stuff.
		// TODO: Fix this later with some sort of UI color util.
		
		//this.folders.materials.addColor(this.selected.material, 'color').onChange(this.changeColor);
=======
>>>>>>> master
=======
>>>>>>> master
	},

	changeColor: function(c, type) {
		
		this.selected.material[type] = new THREE.Color().setRGB(c.r/255, c.g/255, c.b/255);

		if(type === 'ambient' || type === 'specular') {
			this.rebuildMaterial();
		}
	},
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> master

	changeLightColor: function(c) {
		
		this.selected.light.color = new THREE.Color().setRGB(c.r/255, c.g/255, c.b/255);
	},
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
	
	rebuildMaterial: function(matName){
		
		var mat;
	
		if(matName === undefined) {
			matName = this.selected.material.name;
		}

		// We can make a generic function constructor based on the material name.
		mat = new THREE[matName]();
		mat.name = matName;
		
		this.copyMaterialAttributes(mat);
		
		this.selected.material.program = false;
		this.selected.material = mat;
	},
	
	copyMaterialAttributes: function(mat) {
		
		for(var i = 0, len = this.model.materialList.length; i < len; i++) {
			if(this.selected.material[this.model.materialList[i].prop] !== undefined) {
				mat[this.model.materialList[i].prop] = this.selected.material[this.model.materialList[i].prop];
			}
		}
		
		// Copy the map and color manually.
<<<<<<< HEAD
<<<<<<< HEAD
		mat['map'] = this.selected.material['map'];
		mat['color'] = this.selected.material['color'];
		mat['ambient'] = this.selected.material['ambient'];
		mat['specular'] = this.selected.material['specular'];
=======
=======
>>>>>>> master
		mat.map = this.selected.material.map;
		mat.color = this.selected.material.color;
		mat.ambient = this.selected.material.ambient;
		mat.specular = this.selected.material.specular;
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
		
	}
	
});