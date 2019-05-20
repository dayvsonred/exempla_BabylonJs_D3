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
   
   this._camera = new ArcRotateCamera('camera1',  (Math.PI * 180) / 180, (Math.PI * 45) / 180, 50, new Vector3(0, 5,-10), this._scene);
   

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
    //    let sphere = MeshBuilder.CreateSphere('sphere1',
    //                             {segments: 16, diameter: 2}, this._scene);
    //    // move the sphere upward 1/2 of its height
    //    sphere.position.y = 1;

    //cores  
    // vermelho (1, 0, 0)
    // verde    (0, 1, 0)
    //  azul    (0, 0, 1)
    // var redMat = new BABYLON.StandardMaterial("redMat", scene);
    // redMat.emissiveColor = new BABYLON.Color3(1, 0, 0);
   var vermelho = new StandardMaterial("redMat", this._scene);
   vermelho.emissiveColor = new Color3(1,0,0);

   var verde = new StandardMaterial("verdeMat", this._scene);
   verde.emissiveColor = new Color3(0,1,0);

   var azul = new StandardMaterial("azulMat", this._scene);
   azul.emissiveColor = new Color3((15/255),(13/255),(243/255));

   var amarelo = new StandardMaterial("amareloMat", this._scene);
   amarelo.emissiveColor = new Color3((210/255),(181/255),0);


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
    

     
    

    /***   FORMAS  */

    // Add and manipulate meshes in the scene
    //  var box = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25}, scene);
    
    let caixa = MeshBuilder.CreateBox('box',
    {size: 2, width: 2, height: 5 , depth: 3}, this._scene);
    caixa.position.x = 10;
    caixa.position.y = 2;
    caixa.material = vermelho;
    
    //Cilindros
    let CyposX, CyposY, CyposZ;
    CyposX = 0;
    CyposY = 1;
    CyposZ = 15;
    let cylindro1 = MeshBuilder.CreateCylinder('cylindre_1', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro1.rotation.x = (Math.PI * 90) /180;
    cylindro1.position.x = CyposX;
    cylindro1.position.y = CyposY;
    cylindro1.position.z = CyposZ;

    CyposX = CyposX + 3;
    let cylindro3 = MeshBuilder.CreateCylinder('cylindre_3', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro3.rotation.x = (Math.PI * 90) /180;
    cylindro3.position.x = CyposX;
    cylindro3.position.y = CyposY;
    cylindro3.position.z = CyposZ;
    cylindro3.material = amarelo;

    CyposX = CyposX + 3;
    let cylindro4 = MeshBuilder.CreateCylinder('cylindre_4', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro4.rotation.x = (Math.PI * 90) /180;
    cylindro4.position.x = CyposX;
    cylindro4.position.y = CyposY;
    cylindro4.position.z = CyposZ;

   
    CyposX = CyposX + 3;
    let cylindro5 = MeshBuilder.CreateCylinder('cylindre_5', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro5.rotation.x = (Math.PI * 90) /180;
    cylindro5.position.x = CyposX;
    cylindro5.position.y = CyposY;
    cylindro5.position.z = CyposZ;
    cylindro5.material = azul;

    
    CyposZ = CyposZ + 3;
    let cylindro2 = MeshBuilder.CreateCylinder('cylindre_2', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro2.rotation.x = (Math.PI * 90) /180;
    cylindro2.position.x = CyposX;
    cylindro2.position.y = CyposY;
    cylindro2.position.z = CyposZ;


    CyposX = CyposX - 3;
    let cylindro7 = MeshBuilder.CreateCylinder('cylindre_7', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro7.rotation.x = (Math.PI * 90) /180;
    cylindro7.position.x = CyposX;
    cylindro7.position.y = CyposY;
    cylindro7.position.z = CyposZ;

    CyposX = CyposX - 3;
    let cylindro8 = MeshBuilder.CreateCylinder('cylindre_8', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro8.rotation.x = (Math.PI * 90) /180;
    cylindro8.position.x = CyposX;
    cylindro8.position.y = CyposY;
    cylindro8.position.z = CyposZ;

    CyposX = CyposX - 3;
    let cylindro9 = MeshBuilder.CreateCylinder('cylindre_9', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro9.rotation.x = (Math.PI * 90) /180;
    cylindro9.position.x = CyposX;
    cylindro9.position.y = CyposY;
    cylindro9.position.z = CyposZ;








    CyposZ = CyposZ + 3;
    let cylindro6 = MeshBuilder.CreateCylinder('cylindre_6', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro6.rotation.x = (Math.PI * 90) /180;
    cylindro6.position.x = CyposX;
    cylindro6.position.y = CyposY;
    cylindro6.position.z = CyposZ;


    CyposX = CyposX + 3;
    let cylindro11 = MeshBuilder.CreateCylinder('cylindre_11', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro11.rotation.x = (Math.PI * 90) /180;
    cylindro11.position.x = CyposX;
    cylindro11.position.y = CyposY;
    cylindro11.position.z = CyposZ;


    CyposX = CyposX + 3;
    let cylindro12 = MeshBuilder.CreateCylinder('cylindre_12', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro12.rotation.x = (Math.PI * 90) /180;
    cylindro12.position.x = CyposX;
    cylindro12.position.y = CyposY;
    cylindro12.position.z = CyposZ;
    cylindro12.material = vermelho;




    // GUI
    // var plane = MeshBuilder.CreatePlane("plane", {size: 2 ,width: 2, height: 2 }, this._scene);
    // plane.parent = cylindro12;
    // plane.position.y = 2;

    // var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);

    // var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Click Me");
    // button1.width = 1;
    // button1.height = 0.4;
    // button1.color = "white";
    // button1.fontSize = 50;
    // button1.background = "green";
    // button1.onPointerUpObservable.add(function() {
    //     alert("you did it!");
    // });
    // advancedTexture.addControl(button1);
   

    

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