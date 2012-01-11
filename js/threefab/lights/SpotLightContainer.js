/**
 * @autor itooamaneatguy http://kadrmasconcepts.com/blog/
 * @author mr.doob / http://mrdoob.com/
 */

THREEFAB.SpotLightContainer = function ( scene, hex, intensity, distance ) {
	
	var geometry = new THREE.CylinderGeometry( 0, 12.5, 25, 16, 1 ),
		material = new THREE.MeshBasicMaterial( { color: 0xfff1a6, wireframe: true }),
		mesh = new THREE.Mesh(geometry, material);
		
	var lineGeometry = new THREE.Geometry();
	lineGeometry.vertices.push( new THREE.Vertex() );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	lineGeometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 50, 1 ) ) );	
=======
	lineGeometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 50, 1 ) ) );
>>>>>>> master
=======
	lineGeometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 50, 1 ) ) );
>>>>>>> master
=======
	lineGeometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 50, 1 ) ) );
>>>>>>> master
=======
	lineGeometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 50, 1 ) ) );
>>>>>>> master
	
	var line = new THREE.Line( lineGeometry, new THREE.LineBasicMaterial( { color : 0xFFFFFF } ) );
	line.rotation.z = -Math.PI;
	mesh.add( line );
	mesh.name = "THREE.SpotLightContainer." + mesh.id;
	
	
	var light = new THREE.SpotLight(hex, intensity, distance, true);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
	light.name = 'THREE.SpotLight';
>>>>>>> master
=======
	light.name = 'THREE.SpotLight';
>>>>>>> master
=======
	light.name = 'THREE.SpotLight';
>>>>>>> master
=======
	light.name = 'THREE.SpotLight';
>>>>>>> master
	
	// Link light position and rotation to the fake holder object.
	light.position = mesh.position;
	light.rotation = mesh.rotation;
	
	mesh.light = light;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	console.log(light);
=======
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
	
	scene.add(mesh);
	scene.add(light);
	
	
	this.mesh = mesh;
};