/* ----------------------------------------------------------------------------
 * heightmap distortion shader
 * ---------------------------------------------------------------------------- */
precision highp float;
uniform vec2 mouse;
uniform sampler2D colorTexture;
uniform sampler2D heightTexture;
varying vec2 vTexCoord;
const float focus = 0.5;
void main(){
    float height = texture2D(heightTexture, vTexCoord).r - focus;
    vec2 mouseVec = -mouse * 0.025 * height;
    vec4 color = texture2D(colorTexture, vTexCoord + mouseVec);
    vec4 destColor = vec4(color);
    gl_FragColor = destColor;
}
