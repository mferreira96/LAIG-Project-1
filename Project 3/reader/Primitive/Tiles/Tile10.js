/**
* Tile10
* @constructor
*/

function Tile10(scene, id) {
    CGFobject.call(this,scene);

    this.base = new Rectangle(scene, 0, 0.70, 0, 0.70);
    this.cylinder = new Cylinder(scene, 0.2, 0.2, 0.1, 20, 20);


    this.line = 1;
    this.col = 2;


    this.baseApp = new CGFappearance(scene);
    this.baseApp.setDiffuse(0.3,0.3,0.3,1);

    this.cylApp = new CGFappearance(scene);
    this.cylApp.loadTexture('../textures/camo.jpg');

    this.selectable = true;
    this.selected = false;
    this.visible = false;
    this.id = id;
    this.size = 5/6;
};

Tile10.prototype = Object.create(CGFobject.prototype);
Tile10.prototype.constructor = Tile10;

Tile10.prototype.display = function () {
    if(this.selectable)
        this.scene.registerForPick(this.id,this);

    this.scene.translate(-2.5,1.666, 0); // place tile on 0,0

    this.scene.translate(this.size * this.col, -this.size * this.line, 0);

    this.scene.pushMatrix();

        this.scene.translate(0,0,0.02); //translation to avoid overlapping
        this.scene.translate(0.065, 0.065, 0); // center tile
        this.baseApp.apply();
        this.base.display();

        this.scene.translate(0.35,0.35,0);
        this.cylApp.apply();
        this.cylinder.display();

    this.scene.popMatrix();

    if(this.selectable)
        this.scene.clearPickRegistration();
};
