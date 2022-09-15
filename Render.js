"use strict";

class Render{
    constructor(canvasID){
        this.canvas = document.getElementById(canvasID);
        try{
            this.gl = this.canvas.getContext("webgl");
            this.gl.viewport(0,0, this.canvas.width, this.canvas.height);
        }catch(e){
            var msg = "Error WebGL: " + e.toString;
            alert(msg);
            throw Error(msg);
        }

        if(!this.gl){
            console.error("Erro ao iniciar o WebGL");
            return;
        }
    }

    draw(){
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(gl.COLOR_BUFFER_BIT);
    }
}