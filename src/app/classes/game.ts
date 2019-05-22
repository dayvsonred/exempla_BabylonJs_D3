import {Engine, Scene, FreeCamera, Light,
Vector3, HemisphericLight, MeshBuilder, PointLight, ArcRotateCamera, StandardMaterial, Color3, Texture,
ActionManager , ExecuteCodeAction
} from 'babylonjs';

// import {  Button3D, AdvancedDynamicTexture, Button  } from 'babylonjs-gui';
// import * as GUI from 'babylonjs-gui';
// import { AdvancedDynamicTexture } from '@babylonjs/gui/2D';


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

   var verde2 = new StandardMaterial("verde2Mat", this._scene);
   verde2.emissiveColor = new Color3((57/255),(203/255),(64/255));

   var azul = new StandardMaterial("azulMat", this._scene);
   azul.emissiveColor = new Color3((15/255),(13/255),(243/255));

   var amarelo = new StandardMaterial("amareloMat", this._scene);
   amarelo.emissiveColor = new Color3((210/255),(181/255),0);


   var preto = new StandardMaterial("pretoMat", this._scene);
   preto.emissiveColor = new Color3((18/255),(10/255),(44/255));


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

    //  var advancedTexture =  AdvancedDynamicTexture.CreateForMesh(plane,  2,  2);

    // var button1 =  Button.CreateSimpleButton("but1", "Click Me");
    // button1.width = 1;
    // button1.height = 0.4;
    // button1.color = "white";
    // button1.fontSize = 50;
    // button1.background = "green";
    // button1.onPointerUpObservable.add(function() {
    //     alert("you did it!");
    // });
    // advancedTexture.addControl(button1);




    // evento click
    // Os gatilhos disponíveis para malhas são: 
    // BABYLON.ActionManager.NothingTrigger: Nunca levantado. Usado para sub-ações com action.thenfunção.
    // BABYLON.ActionManager.OnPickTrigger: Gerado quando o usuário toca / clica em uma malha.
    // BABYLON.ActionManager.OnDoublePickTrigger: Gerado quando o usuário toca duas vezes / clica em uma malha.
    // BABYLON.ActionManager.OnPickDownTrigger: Gerado quando o usuário toca / clica em uma malha
    // BABYLON.ActionManager.OnPickUpTrigger: Gerado quando o usuário toca / clica em uma malha.
    // BABYLON.ActionManager.OnPickOutTrigger: Gerado quando o usuário toca / clica em uma malha e depois sai da malha.
    // BABYLON.ActionManager.OnLeftPickTrigger: Gerado quando o usuário toca / clica em uma malha com o botão esquerdo.
    // BABYLON.ActionManager.OnRightPickTrigger: Gerado quando o usuário toca / clica em uma malha com o botão direito.
    // BABYLON.ActionManager.OnCenterPickTrigger: Gerado quando o usuário toca / clica em uma malha com o botão central.
    // BABYLON.ActionManager.OnLongPressTrigger: Gerado quando o usuário toca / clica para cima em uma malha por um longo período de tempo em milissegundos (definido por BABYLON.Scene.LongPressDelay).
    // BABYLON.ActionManager.OnPointerOverTrigger: Gerado quando o ponteiro está sobre uma malha. Criado apenas uma vez.
    // BABYLON.ActionManager.OnPointerOutTrigger: Gerado quando o ponteiro não está mais sobre uma malha. Criado apenas uma vez.
    // BABYLON.ActionManager.OnIntersectionEnterTrigger: Gerado quando a malha está em interseção com uma malha específica. Criado apenas uma vez.
    // BABYLON.ActionManager.OnIntersectionExitTrigger: Gerado quando a malha não está mais na interseção com uma malha específica. Criado apenas uma vez.
    
    var sphere = MeshBuilder.CreateSphere("sphere1",  {segments: 16, diameter: 2}, this._scene);
	sphere.position.x = 2;
	sphere.actionManager = new ActionManager(this._scene);
	sphere.actionManager.registerAction(new ExecuteCodeAction( ActionManager.OnPickUpTrigger, function () {
		alert('sphere clicked');
    }));
    

    
    CyposX = CyposX + 3;
    let cylindro20 = MeshBuilder.CreateCylinder('cylindre_22', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro20.rotation.x = (Math.PI * 90) /180;
    cylindro20.position.x = CyposX;
    cylindro20.position.y = CyposY;
    cylindro20.position.z = CyposZ;
    cylindro20.material = vermelho;
    cylindro20.actionManager = new ActionManager(this._scene);
	cylindro20.actionManager.registerAction(new ExecuteCodeAction( ActionManager.OnPickUpTrigger, function () {
		alert('call click event =)');
    }));


    preto

    let numsCx = -20; let  numCz = 10; let numCy = 1;
    let cylindro30 = MeshBuilder.CreateCylinder('cylindre_30', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro30.rotation.x = (Math.PI * 90) /180;
    cylindro30.rotation.y = (Math.PI * 90) /180;
    cylindro30.position.x = -22;
    cylindro30.position.y = 1;
    cylindro30.position.z = 12;
    cylindro30.material = verde2;
    cylindro30.actionManager = new ActionManager(this._scene);
	cylindro30.actionManager.registerAction(new ExecuteCodeAction( ActionManager.OnPickUpTrigger, function () {
		alert('call click event =) verde');
    }));


    numsCx += -3; numCz += 2;
    let cylindro32 = MeshBuilder.CreateCylinder('cylindre_32', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro32.rotation.x = (Math.PI * 90) /180;
    cylindro32.rotation.y = (Math.PI * 90) /180;
    cylindro32.position.x = -22;
    cylindro32.position.y = 1;
    cylindro32.position.z = 10;
    cylindro32.material = amarelo;
    cylindro32.actionManager = new ActionManager(this._scene);
	cylindro32.actionManager.registerAction(new ExecuteCodeAction( ActionManager.OnPickUpTrigger, function () {
		alert('call click event =) amarelo');
    }));

    let cylindro33 = MeshBuilder.CreateCylinder('cylindre_33', { diameterTop: 2, diameterBottom: 2, tessellation: 20, subdivisions: 6 }, this._scene)
    cylindro33.rotation.x = (Math.PI * 90) /180;
    cylindro33.rotation.y = (Math.PI * 90) /180;
    cylindro33.position.x = -22;
    cylindro33.position.y = 2.8;
    cylindro33.position.z = 11;
    cylindro33.material = preto;
    cylindro33.actionManager = new ActionManager(this._scene);
	cylindro33.actionManager.registerAction(new ExecuteCodeAction( ActionManager.OnPickUpTrigger, function () {
		alert('call click event =) normal');
    }));
    

   

    

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
