
(() => {
    // variable ===============================================================
    let canvas, gl, ext, run, mat4, mouse;
    let scenePrg;
    let canvasWidth, canvasHeight;

    // variable initialize ====================================================
    run = true;
    mat4 = gl3.Math.Mat4;
    mouse = [0, 0];

    // const variable =========================================================
    let DEFAULT_CAM_POSITION = [0.0, 0.0, 3.0];
    let DEFAULT_CAM_CENTER   = [0.0, 0.0, 0.0];
    let DEFAULT_CAM_UP       = [0.0, 1.0, 0.0];

    // onload =================================================================
    window.addEventListener('load', () => {
        // gl3 initialize
        gl3.init('canvas');
        if(!gl3.ready){console.log('initialize error'); return;}
        canvas = gl3.canvas; gl = gl3.gl;
        canvas.width  = canvasWidth = window.innerWidth;
        canvas.height = canvasHeight = window.innerHeight;

        // extension
        ext = {};
        ext.elementIndexUint = gl.getExtension('OES_element_index_uint');
        ext.textureFloat = gl.getExtension('OES_texture_float');
        ext.drawBuffers = gl.getExtension('WEBGL_draw_buffers');

        // event
        window.addEventListener('keydown', (eve) => {
            run = (eve.keyCode !== 27);
        }, true);
        window.addEventListener('mousemove', (eve) => {
            let w = canvasWidth / 2;
            let h = canvasHeight / 2;
            let x = (eve.pageX - w) / w;
            let y = (eve.pageY - h) / h;
            mouse[0] = x; mouse[1] = y;
        }, false);

        gl3.createTextureFromImage('color.png', 0, () => {
            gl3.createTextureFromImage('height.png', 1, shaderLoader);
        });
    }, false);

    function shaderLoader(){
        // programs
        scenePrg = gl3.createProgramFromFile(
            'shader/scene.vert',
            'shader/scene.frag',
            ['position', 'texCoord'],
            [3, 2],
            ['mvpMatrix', 'mouse', 'colorTexture', 'heightTexture'],
            ['matrix4fv', '2fv', '1i', '1i'],
            init
        );
    }

    function init(){
        // application setting
        canvasWidth   = window.innerWidth;
        canvasHeight  = window.innerHeight;
        canvas.width  = canvasWidth;
        canvas.height = canvasHeight;

        // plane mesh
        let planePosition = [
            -1.0,  1.0,  0.0,
             1.0,  1.0,  0.0,
            -1.0, -1.0,  0.0,
             1.0, -1.0,  0.0
        ];
        let planeTexCoord = [
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0
        ];
        let planeIndex = [
            0, 2, 1, 1, 2, 3
        ];
        let planeVBO = [
            gl3.createVbo(planePosition),
            gl3.createVbo(planeTexCoord)
        ];
        let planeIBO = gl3.createIbo(planeIndex);

        // matrix
        let mMatrix = mat4.identity(mat4.create());
        let vMatrix = mat4.identity(mat4.create());
        let pMatrix = mat4.identity(mat4.create());
        let vpMatrix = mat4.identity(mat4.create());
        let mvpMatrix = mat4.identity(mat4.create());

        // perspective projection
        mat4.lookAt(DEFAULT_CAM_POSITION, DEFAULT_CAM_CENTER, DEFAULT_CAM_UP, vMatrix);
        mat4.perspective(45, canvasWidth / canvasHeight, 0.1, 10.0, pMatrix);
        mat4.multiply(pMatrix, vMatrix, vpMatrix);

        // texture setting
        (() => {
            let i;
            for(i = 0; i < 2; ++i){
                gl.activeTexture(gl.TEXTURE0 + i);
                gl.bindTexture(gl.TEXTURE_2D, gl3.textures[i].texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            }
        })();

        // gl flags
        gl.disable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);

        // rendering
        render();
        function render(){
            // canvas
            canvasWidth   = window.innerWidth;
            canvasHeight  = window.innerHeight;
            canvas.width  = canvasWidth;
            canvas.height = canvasHeight;

            // render to frame buffer -----------------------------------------
            gl3.sceneClear([0.01, 0.01, 0.01, 1.0], 1.0);
            gl3.sceneView(0, 0, canvasWidth, canvasHeight);

            // final scene ----------------------------------------------------
            let length = Math.min(1.0, Math.sqrt(mouse[0] * mouse[0] + mouse[1] * mouse[1]));
            scenePrg.setAttribute(planeVBO, planeIBO);
            mat4.identity(mMatrix);
            mat4.rotate(mMatrix, length * 0.25, [mouse[1] * 0.5, mouse[0], 0.0], mMatrix);
            mat4.multiply(vpMatrix, mMatrix, mvpMatrix);
            scenePrg.pushShader([mvpMatrix, mouse, 0, 1]);
            gl3.drawElements(gl.TRIANGLES, planeIndex.length);

            if(run){requestAnimationFrame(render);}
        }
    }
})(this);

