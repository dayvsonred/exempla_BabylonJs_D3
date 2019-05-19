import {Engine, Scene, FreeCamera, Light,
Vector3, HemisphericLight, MeshBuilder, PointLight, ArcRotateCamera, StandardMaterial, Color3, Texture
} from 'babylonjs';


export class Game {
        private _canvas: HTMLCanvasElement;
        private _engine: Engine;
        private _scene: Scene;
        private _camera: ArcRotateCamera;
        private _light: Light;
        private _lightP: Light;
  constructor(canvasElement : string) {
  this._canvas = <HTMLCanvasElement>document.getElementById(canvasElement);
  this._engine = new Engine(this._canvas, true);    
  }

  createScene() : void {
   // create a basic BJS Scene object
   this._scene = new Scene(this._engine);

   // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
   //this._camera = new FreeCamera('camera1', new Vector3(0, 5,-10), this._scene);
   //var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
   
   this._camera = new ArcRotateCamera('camera1', 3 * Math.PI / 4 , Math.PI / 4, 4, new Vector3(0, 5,-10), this._scene);
   

   // target the camera to scene origin
   this._camera.setTarget(Vector3.Zero());

   // attach the camera to the canvas
   this._camera.attachControl(this._canvas, true);

   // create a basic light, aiming 0,1,0 - meaning, to the sky
    this._light = new HemisphericLight('light1', new Vector3(0.5,1,-1), this._scene);
   // create a basic light, aiming 0,1,0 - meaning, to the sky
   // this._light = new PointLight('light', new Vector3(0,1,0), this._scene);

    // var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 1, 0), scene);
	// light.diffuse = new BABYLON.Color3(1, 0, 0);
	// light.specular = new BABYLON.Color3(0, 1, 0);




   // create a built-in "sphere" shape; with 16 segments and diameter of 2
   let sphere = MeshBuilder.CreateSphere('sphere1',
                            {segments: 16, diameter: 2}, this._scene);

   // move the sphere upward 1/2 of its height
   sphere.position.y = 1;

    //cores
    // var redMat = new BABYLON.StandardMaterial("redMat", scene);
    // redMat.emissiveColor = new BABYLON.Color3(1, 0, 0);
   var cor = new StandardMaterial("redMat", this._scene);
   cor.emissiveColor = new Color3(1,0,0);

   var cor2 = new StandardMaterial("redMat", this._scene);
   cor2.emissiveColor = new Color3(3,1,5);


   // texturas
   var texturTerrono = new StandardMaterial("ground",  this._scene);
   texturTerrono.diffuseTexture = new Texture("assets/textures/ground.jpg",  this._scene);
    //    texturTerrono.diffuseColor = new Color3(1, 0, 0);
    texturTerrono.diffuseTexture.wrapU = 6;
    texturTerrono.diffuseTexture.wrapV = 6;
    texturTerrono.specularColor = new Color3(0, 0, 0)


	// groundMaterial.diffuseTexture.uScale = 6;
	// groundMaterial.diffuseTexture.vScale = 6;
	// groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

   
   // create a built-in "ground" shape  - terreno
   let ground = MeshBuilder.CreateGround('ground1',
                            {width: 63, height: 50, subdivisions: 2}, this._scene);
        //ground.material = cor2;
    ground.material = texturTerrono;

    // Ground
	// var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/heightMap.png", 100, 100, 100, 0, 10, scene, false);
	// var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
	// groundMaterial.diffuseTexture = new BABYLON.Texture("textures/ground.jpg", scene);
	// groundMaterial.diffuseTexture.uScale = 6;
	// groundMaterial.diffuseTexture.vScale = 6;
	// groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	// ground.position.y = -2.05;
	// ground.material = groundMaterial;
   



    // Add and manipulate meshes in the scene
    //  var box = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25}, scene);
        
     let caixa = MeshBuilder.CreateBox('box',
                            {size: 2, width: 2, height: 5 , depth: 3}, this._scene);
                            caixa.position.x = 10;
                            caixa.position.y = 2;
                            caixa.material = cor;


  }

  animate() : void {
  // run the render loop
  this._engine.runRenderLoop(() => {
      this._scene.render();
  });

  // the canvas/window resize event handler
  window.addEventListener('resize', () => {
      this._engine.resize();
  });
  }  
}
