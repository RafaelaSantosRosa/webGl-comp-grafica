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

        var vertexShaderSource = document.getElementById("meu-vertex-shader").textContent;
        var fragmentShaderSource = document.getElementById("meu-fragment-shader").textContent;
        var vertexShader = Render.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource);
        var fragmentShader = Render.createShader(this.gl, this.gl.FRAGMENT_SHADER, vertexShaderSource);

        this.program = Render.createProgram(this.gl, vertexShader, fragmentShader);
    }

    draw(){
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(gl.COLOR_BUFFER_BIT);
    }

    static createShader(gl, type, source){
        var shader = gl.creteShader(type);
        gl.shaderSource(shader, source);
        g1.compilerShader(shader);

        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

        if(success){
            return shader;
        }

        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }

    static createProgram(gl, vertexShader, fragmentShader){
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        var success = gl.getProgramParamenter(program, gl.LINK_STATUS);

        if(success){
            return program;
        }
        
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }

}