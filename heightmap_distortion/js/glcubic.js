!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=4)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(t,r){if(n(this,e),"undefined"==typeof AudioContext&&"undefined"==typeof webkitAudioContext)return null;"undefined"!=typeof AudioContext?this.ctx=new AudioContext:this.ctx=new webkitAudioContext,this.comp=this.ctx.createDynamicsCompressor(),this.comp.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.connect(this.comp),this.bgmGain.gain.value=t,this.soundGain=this.ctx.createGain(),this.soundGain.connect(this.comp),this.soundGain.gain.value=r,this.src=[]}return a(e,[{key:"load",value:function(e,t,r,n,a){var i=this.ctx,o=n?this.bgmGain:this.soundGain,l=this.src;l[t]=null;var s=new XMLHttpRequest;s.open("GET",e,!0),s.setRequestHeader("Pragma","no-cache"),s.setRequestHeader("Cache-Control","no-cache"),s.responseType="arraybuffer",s.onload=function(){i.decodeAudioData(s.response,function(s){l[t]=new u(i,o,s,r,n),l[t].loaded=!0,console.log("%c◆%c audio number: %c"+t+"%c, audio loaded: %c"+e,"color: crimson","","color: blue","","color: goldenrod"),a()},function(e){console.log(e)})},s.send()}},{key:"loadComplete",value:function(){var e=void 0,t=void 0;for(t=!0,e=0;e<this.src.length;e++)t=t&&null!=this.src[e]&&this.src[e].loaded;return t}}]),e}();t.default=i;var u=function(){function e(t,r,a,i,u){n(this,e),this.ctx=t,this.gain=r,this.audioBuffer=a,this.bufferSource=[],this.activeBufferSource=0,this.loop=i,this.loaded=!1,this.fftLoop=16,this.update=!1,this.background=u,this.node=this.ctx.createScriptProcessor(2048,1,1),this.analyser=this.ctx.createAnalyser(),this.analyser.smoothingTimeConstant=.8,this.analyser.fftSize=2*this.fftLoop,this.onData=new Uint8Array(this.analyser.frequencyBinCount)}return a(e,[{key:"play",value:function(){function e(e){i.update&&(i.update=!1,i.analyser.getByteFrequencyData(i.onData))}var t=this,r=void 0,n=void 0,a=void 0,i=this;if(r=this.bufferSource.length,a=-1,r>0){for(n=0;n<r;n++)if(!this.bufferSource[n].playnow){this.bufferSource[n]=null,this.bufferSource[n]=this.ctx.createBufferSource(),a=n;break}a<0&&(this.bufferSource[this.bufferSource.length]=this.ctx.createBufferSource(),a=this.bufferSource.length-1)}else this.bufferSource[0]=this.ctx.createBufferSource(),a=0;this.activeBufferSource=a,this.bufferSource[a].buffer=this.audioBuffer,this.bufferSource[a].loop=this.loop,this.bufferSource[a].playbackRate.value=1,this.loop||(this.bufferSource[a].onended=function(){t.stop(0),t.playnow=!1}),this.background&&(this.bufferSource[a].connect(this.analyser),this.analyser.connect(this.node),this.node.connect(this.ctx.destination),this.node.onaudioprocess=function(t){e(t)}),this.bufferSource[a].connect(this.gain),this.bufferSource[a].start(0),this.bufferSource[a].playnow=!0}},{key:"stop",value:function(){this.bufferSource[this.activeBufferSource].stop(0),this.playnow=!1}}]),e}()},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function e(){n(this,e),this.Vec3=o,this.Mat4=u,this.Qtn=l};t.default=i;var u=function(){function e(){n(this,e)}return a(e,null,[{key:"create",value:function(){return new Float32Array(16)}},{key:"identity",value:function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}},{key:"multiply",value:function(e,t,r){var n=e[0],a=e[1],i=e[2],u=e[3],o=e[4],l=e[5],s=e[6],c=e[7],f=e[8],h=e[9],E=e[10],T=e[11],d=e[12],R=e[13],v=e[14],g=e[15],_=t[0],m=t[1],A=t[2],b=t[3],y=t[4],x=t[5],p=t[6],U=t[7],F=t[8],M=t[9],P=t[10],S=t[11],D=t[12],B=t[13],I=t[14],k=t[15];return r[0]=_*n+m*o+A*f+b*d,r[1]=_*a+m*l+A*h+b*R,r[2]=_*i+m*s+A*E+b*v,r[3]=_*u+m*c+A*T+b*g,r[4]=y*n+x*o+p*f+U*d,r[5]=y*a+x*l+p*h+U*R,r[6]=y*i+x*s+p*E+U*v,r[7]=y*u+x*c+p*T+U*g,r[8]=F*n+M*o+P*f+S*d,r[9]=F*a+M*l+P*h+S*R,r[10]=F*i+M*s+P*E+S*v,r[11]=F*u+M*c+P*T+S*g,r[12]=D*n+B*o+I*f+k*d,r[13]=D*a+B*l+I*h+k*R,r[14]=D*i+B*s+I*E+k*v,r[15]=D*u+B*c+I*T+k*g,r}},{key:"scale",value:function(e,t,r){return r[0]=e[0]*t[0],r[1]=e[1]*t[0],r[2]=e[2]*t[0],r[3]=e[3]*t[0],r[4]=e[4]*t[1],r[5]=e[5]*t[1],r[6]=e[6]*t[1],r[7]=e[7]*t[1],r[8]=e[8]*t[2],r[9]=e[9]*t[2],r[10]=e[10]*t[2],r[11]=e[11]*t[2],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}},{key:"translate",value:function(e,t,r){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[0]*t[0]+e[4]*t[1]+e[8]*t[2]+e[12],r[13]=e[1]*t[0]+e[5]*t[1]+e[9]*t[2]+e[13],r[14]=e[2]*t[0]+e[6]*t[1]+e[10]*t[2]+e[14],r[15]=e[3]*t[0]+e[7]*t[1]+e[11]*t[2]+e[15],r}},{key:"rotate",value:function(e,t,r,n){var a=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);if(!a)return null;var i=r[0],u=r[1],o=r[2];1!=a&&(a=1/a,i*=a,u*=a,o*=a);var l=Math.sin(t),s=Math.cos(t),c=1-s,f=e[0],h=e[1],E=e[2],T=e[3],d=e[4],R=e[5],v=e[6],g=e[7],_=e[8],m=e[9],A=e[10],b=e[11],y=i*i*c+s,x=u*i*c+o*l,p=o*i*c-u*l,U=i*u*c-o*l,F=u*u*c+s,M=o*u*c+i*l,P=i*o*c+u*l,S=u*o*c-i*l,D=o*o*c+s;return t?e!=n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]):n=e,n[0]=f*y+d*x+_*p,n[1]=h*y+R*x+m*p,n[2]=E*y+v*x+A*p,n[3]=T*y+g*x+b*p,n[4]=f*U+d*F+_*M,n[5]=h*U+R*F+m*M,n[6]=E*U+v*F+A*M,n[7]=T*U+g*F+b*M,n[8]=f*P+d*S+_*D,n[9]=h*P+R*S+m*D,n[10]=E*P+v*S+A*D,n[11]=T*P+g*S+b*D,n}},{key:"lookAt",value:function(t,r,n,a){var i=t[0],u=t[1],o=t[2],l=n[0],s=n[1],c=n[2],f=r[0],h=r[1],E=r[2];if(i==f&&u==h&&o==E)return e.identity(a);var T=void 0,d=void 0,R=void 0,v=void 0,g=void 0,_=void 0,m=void 0,A=void 0,b=void 0,y=void 0;return m=i-r[0],A=u-r[1],b=o-r[2],y=1/Math.sqrt(m*m+A*A+b*b),m*=y,A*=y,b*=y,T=s*b-c*A,d=c*m-l*b,R=l*A-s*m,y=Math.sqrt(T*T+d*d+R*R),y?(y=1/y,T*=y,d*=y,R*=y):(T=0,d=0,R=0),v=A*R-b*d,g=b*T-m*R,_=m*d-A*T,y=Math.sqrt(v*v+g*g+_*_),y?(y=1/y,v*=y,g*=y,_*=y):(v=0,g=0,_=0),a[0]=T,a[1]=v,a[2]=m,a[3]=0,a[4]=d,a[5]=g,a[6]=A,a[7]=0,a[8]=R,a[9]=_,a[10]=b,a[11]=0,a[12]=-(T*i+d*u+R*o),a[13]=-(v*i+g*u+_*o),a[14]=-(m*i+A*u+b*o),a[15]=1,a}},{key:"perspective",value:function(e,t,r,n,a){var i=r*Math.tan(e*Math.PI/360),u=i*t,o=2*u,l=2*i,s=n-r;return a[0]=2*r/o,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*r/l,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-(n+r)/s,a[11]=-1,a[12]=0,a[13]=0,a[14]=-n*r*2/s,a[15]=0,a}},{key:"ortho",value:function(e,t,r,n,a,i,u){var o=t-e,l=r-n,s=i-a;return u[0]=2/o,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/l,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/s,u[11]=0,u[12]=-(e+t)/o,u[13]=-(r+n)/l,u[14]=-(i+a)/s,u[15]=1,u}},{key:"transpose",value:function(e,t){return t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15],t}},{key:"inverse",value:function(e,t){var r=e[0],n=e[1],a=e[2],i=e[3],u=e[4],o=e[5],l=e[6],s=e[7],c=e[8],f=e[9],h=e[10],E=e[11],T=e[12],d=e[13],R=e[14],v=e[15],g=r*o-n*u,_=r*l-a*u,m=r*s-i*u,A=n*l-a*o,b=n*s-i*o,y=a*s-i*l,x=c*d-f*T,p=c*R-h*T,U=c*v-E*T,F=f*R-h*d,M=f*v-E*d,P=h*v-E*R,S=1/(g*P-_*M+m*F+A*U-b*p+y*x);return t[0]=(o*P-l*M+s*F)*S,t[1]=(-n*P+a*M-i*F)*S,t[2]=(d*y-R*b+v*A)*S,t[3]=(-f*y+h*b-E*A)*S,t[4]=(-u*P+l*U-s*p)*S,t[5]=(r*P-a*U+i*p)*S,t[6]=(-T*y+R*m-v*_)*S,t[7]=(c*y-h*m+E*_)*S,t[8]=(u*M-o*U+s*x)*S,t[9]=(-r*M+n*U-i*x)*S,t[10]=(T*b-d*m+v*g)*S,t[11]=(-c*b+f*m-E*g)*S,t[12]=(-u*F+o*p-l*x)*S,t[13]=(r*F-n*p+a*x)*S,t[14]=(-T*A+d*_-R*g)*S,t[15]=(c*A-f*_+h*g)*S,t}},{key:"vpFromCamera",value:function(t,r,n,a){e.lookAt(t.position,t.centerPoint,t.upDirection,r),e.perspective(t.fovy,t.aspect,t.near,t.far,n),e.multiply(n,r,a)}}]),e}(),o=function(){function e(){n(this,e)}return a(e,null,[{key:"create",value:function(){return new Float32Array(3)}},{key:"normalize",value:function(t){var r=e.create(),n=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);if(n>0){var a=1/n;r[0]=t[0]*a,r[1]=t[1]*a,r[2]=t[2]*a}return r}},{key:"dot",value:function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}},{key:"cross",value:function(t,r){var n=e.create();return n[0]=t[1]*r[2]-t[2]*r[1],n[1]=t[2]*r[0]-t[0]*r[2],n[2]=t[0]*r[1]-t[1]*r[0],n}},{key:"faceNormal",value:function(t,r,n){var a=e.create(),i=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],u=[n[0]-t[0],n[1]-t[1],n[2]-t[2]];return a[0]=i[1]*u[2]-i[2]*u[1],a[1]=i[2]*u[0]-i[0]*u[2],a[2]=i[0]*u[1]-i[1]*u[0],e.normalize(a)}}]),e}(),l=function(){function e(){n(this,e)}return a(e,null,[{key:"create",value:function(){return new Float32Array(4)}},{key:"identity",value:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}},{key:"inverse",value:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}},{key:"normalize",value:function(e){var t=e[0],r=e[1],n=e[2],a=e[3],i=Math.sqrt(t*t+r*r+n*n+a*a);return 0===i?(e[0]=0,e[1]=0,e[2]=0,e[3]=0):(i=1/i,e[0]=t*i,e[1]=r*i,e[2]=n*i,e[3]=a*i),e}},{key:"multiply",value:function(e,t,r){var n=e[0],a=e[1],i=e[2],u=e[3],o=t[0],l=t[1],s=t[2],c=t[3];return r[0]=n*c+u*o+a*s-i*l,r[1]=a*c+u*l+i*o-n*s,r[2]=i*c+u*s+n*l-a*o,r[3]=u*c-n*o-a*l-i*s,r}},{key:"rotate",value:function(e,t,r){var n=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);if(!n)return null;var a=t[0],i=t[1],u=t[2];1!=n&&(n=1/n,a*=n,i*=n,u*=n);var o=Math.sin(.5*e);return r[0]=a*o,r[1]=i*o,r[2]=u*o,r[3]=Math.cos(.5*e),r}},{key:"toVecIII",value:function(t,r,n){var a=e.create(),i=e.create(),u=e.create();return e.inverse(r,u),a[0]=t[0],a[1]=t[1],a[2]=t[2],e.multiply(u,a,i),e.multiply(i,r,u),n[0]=u[0],n[1]=u[1],n[2]=u[2],n}},{key:"toMatIV",value:function(e,t){var r=e[0],n=e[1],a=e[2],i=e[3],u=r+r,o=n+n,l=a+a,s=r*u,c=r*o,f=r*l,h=n*o,E=n*l,T=a*l,d=i*u,R=i*o,v=i*l;return t[0]=1-(h+T),t[1]=c-v,t[2]=f+R,t[3]=0,t[4]=c+v,t[5]=1-(s+T),t[6]=E-d,t[7]=0,t[8]=f-R,t[9]=E+d,t[10]=1-(s+h),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}},{key:"slerp",value:function(e,t,r,n){var a=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],i=1-a*a;if(i<=0)n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3];else if(i=Math.sqrt(i),Math.abs(i)<1e-4)n[0]=.5*e[0]+.5*t[0],n[1]=.5*e[1]+.5*t[1],n[2]=.5*e[2]+.5*t[2],n[3]=.5*e[3]+.5*t[3];else{var u=Math.acos(a),o=u*r,l=Math.sin(u-o)/i,s=Math.sin(o)/i;n[0]=e[0]*l+t[0]*s,n[1]=e[1]*l+t[1]*s,n[2]=e[2]*l+t[2]*s,n[3]=e[3]*l+t[3]*s}return n}}]),e}()},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){n(this,e)}return a(e,null,[{key:"plane",value:function(e,t,r){var n=void 0,a=void 0;return n=e/2,a=t/2,tc=r||[1,1,1,1],{position:[-n,a,0,n,a,0,-n,-a,0,n,-a,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],color:[r[0],r[1],r[2],r[3],r[0],r[1],r[2],r[3],r[0],r[1],r[2],r[3],r[0],r[1],r[2],r[3]],texCoord:[0,0,1,0,0,1,1,1],index:[0,1,2,2,1,3]}}},{key:"torus",value:function(e,t,r,n,a){var i=void 0,u=void 0,o=[],l=[],s=[],c=[],f=[];for(i=0;i<=e;i++){var h=2*Math.PI/e*i,E=Math.cos(h),T=Math.sin(h);for(u=0;u<=t;u++){var d=2*Math.PI/t*u,R=(E*r+n)*Math.cos(d),v=T*r,g=(E*r+n)*Math.sin(d),_=E*Math.cos(d),m=E*Math.sin(d),A=1/t*u,b=1/e*i+.5;b>1&&(b-=1),b=1-b,o.push(R,v,g),l.push(_,T,m),s.push(a[0],a[1],a[2],a[3]),c.push(A,b)}}for(i=0;i<e;i++)for(u=0;u<t;u++){var y=(t+1)*i+u;f.push(y,y+t+1,y+1),f.push(y+t+1,y+t+2,y+1)}return{position:o,normal:l,color:s,texCoord:c,index:f}}},{key:"sphere",value:function(e,t,r,n){var a=void 0,i=void 0,u=[],o=[],l=[],s=[],c=[];for(a=0;a<=e;a++){var f=Math.PI/e*a,h=Math.cos(f),E=Math.sin(f);for(i=0;i<=t;i++){var T=2*Math.PI/t*i,d=E*r*Math.cos(T),R=h*r,v=E*r*Math.sin(T),g=E*Math.cos(T),_=E*Math.sin(T);u.push(d,R,v),o.push(g,h,_),l.push(n[0],n[1],n[2],n[3]),s.push(1-1/t*i,1/e*a)}}for(a=0;a<e;a++)for(i=0;i<t;i++){var m=(t+1)*a+i;c.push(m,m+1,m+t+2),c.push(m,m+t+2,m+t+1)}return{position:u,normal:o,color:l,texCoord:s,index:c}}},{key:"cube",value:function(e,t){for(var r=.5*e,n=[-r,-r,r,r,-r,r,r,r,r,-r,r,r,-r,-r,-r,-r,r,-r,r,r,-r,r,-r,-r,-r,r,-r,-r,r,r,r,r,r,r,r,-r,-r,-r,-r,r,-r,-r,r,-r,r,-r,-r,r,r,-r,-r,r,r,-r,r,r,r,r,-r,r,-r,-r,-r,-r,-r,r,-r,r,r,-r,r,-r],a=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1],i=[],u=0;u<n.length/3;u++)i.push(t[0],t[1],t[2],t[3]);return{position:n,normal:a,color:i,texCoord:[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],index:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]}}}]),e}();t.default=i},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){n(this,e)}return a(e,null,[{key:"hsva",value:function(e,t,r,n){if(!(t>1||r>1||n>1)){var a=e%360,i=Math.floor(a/60),u=a/60-i,o=r*(1-t),l=r*(1-t*u),s=r*(1-t*(1-u)),c=new Array;if(!t>0&&!t<0)c.push(r,r,r,n);else{var f=new Array(r,l,o,o,s,r),h=new Array(s,r,r,l,o,o),E=new Array(o,o,s,r,r,l);c.push(f[i],h[i],E[i],n)}return c}}},{key:"easeLiner",value:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}},{key:"easeOutCubic",value:function(e){return(e=e/1-1)*e*e+1}},{key:"easeQuintic",value:function(e){var t=(e/=1)*e;return t*e*t}}]),e}();t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),o=n(u),l=r(1),s=n(l),c=r(2),f=n(c),h=r(3),E=n(h),T=function(){function e(t,r){a(this,e),this.VERSION="0.0.6",this.PI2=6.283185307179586,this.PI=3.141592653589793,this.PIH=1.5707963267948966,this.PIH2=.7853981633974483,this.TEXTURE_UNIT_COUNT=null,console.log("%c◆%c glCubic.js %c◆%c : version %c"+e.VERSION,"color: crimson","","color: crimson","","color: royalblue"),this.ready=!1,this.canvas=null,this.gl=null,this.textures=null,this.ext=null,this.Audio=o.default,this.Mesh=f.default,this.Util=E.default,this.Math=new s.default}return i(e,[{key:"init",value:function(e,t){var r=t||{};return this.ready=!1,null!=e&&(e instanceof HTMLCanvasElement?this.canvas=e:"[object String]"===Object.prototype.toString.call(e)&&(this.canvas=document.getElementById(e)),null!=this.canvas&&(this.gl=this.canvas.getContext("webgl",r)||this.canvas.getContext("experimental-webgl",r),null!=this.gl&&(this.ready=!0,this.TEXTURE_UNIT_COUNT=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.textures=new Array(this.TEXTURE_UNIT_COUNT)),this.ext={elementIndexUint:this.gl.getExtension("OES_element_index_uint"),textureFloat:this.gl.getExtension("OES_texture_float"),drawBuffers:this.gl.getExtension("WEBGL_draw_buffers")},this.ready))}},{key:"sceneClear",value:function(e,t,r){var n=this.gl,a=n.COLOR_BUFFER_BIT;n.clearColor(e[0],e[1],e[2],e[3]),null!=t&&(n.clearDepth(t),a|=n.DEPTH_BUFFER_BIT),null!=r&&(n.clearStencil(r),a|=n.STENCIL_BUFFER_BIT),n.clear(a)}},{key:"sceneView",value:function(e,t,r,n){var a=e||0,i=t||0,u=r||window.innerWidth,o=n||window.innerHeight;this.gl.viewport(a,i,u,o)}},{key:"drawArrays",value:function(e,t){this.gl.drawArrays(e,0,t)}},{key:"drawElements",value:function(e,t){this.gl.drawElements(e,t,this.gl.UNSIGNED_SHORT,0)}},{key:"drawElementsInt",value:function(e,t){this.gl.drawElements(e,t,this.gl.UNSIGNED_INT,0)}},{key:"createVbo",value:function(e){if(null!=e){var t=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(e),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),t}}},{key:"createIbo",value:function(e){if(null!=e){var t=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Int16Array(e),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),t}}},{key:"createIboInt",value:function(e){if(null!=e){var t=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint32Array(e),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),t}}},{key:"createTextureFromImage",value:function(e,t,r){var n=this;if(null!=e&&null!=t){var a=new Image,i=this.gl;a.onload=function(){n.textures[t]={texture:null,type:null,loaded:!1};var u=i.createTexture();i.bindTexture(i.TEXTURE_2D,u),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,a),i.generateMipmap(i.TEXTURE_2D),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.REPEAT),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.REPEAT),n.textures[t].texture=u,n.textures[t].type=i.TEXTURE_2D,n.textures[t].loaded=!0,console.log("%c◆%c texture number: %c"+t+"%c, image loaded: %c"+e,"color: crimson","","color: blue","","color: goldenrod"),i.bindTexture(i.TEXTURE_2D,null),null!=r&&r(t)},a.src=e}}},{key:"createTextureFromCanvas",value:function(e,t){if(null!=e&&null!=t){var r=this.gl,n=r.createTexture();this.textures[t]={texture:null,type:null,loaded:!1},r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.REPEAT),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.REPEAT),this.textures[t].texture=n,this.textures[t].type=r.TEXTURE_2D,this.textures[t].loaded=!0,console.log("%c◆%c texture number: %c"+t+"%c, canvas attached","color: crimson","","color: blue",""),r.bindTexture(r.TEXTURE_2D,null)}}},{key:"createFramebuffer",value:function(e,t,r){if(null!=e&&null!=t&&null!=r){var n=this.gl;this.textures[r]={texture:null,type:null,loaded:!1};var a=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,a);var i=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,i),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,e,t),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,i);var u=n.createTexture();return n.bindTexture(n.TEXTURE_2D,u),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,u,0),n.bindTexture(n.TEXTURE_2D,null),n.bindRenderbuffer(n.RENDERBUFFER,null),n.bindFramebuffer(n.FRAMEBUFFER,null),this.textures[r].texture=u,this.textures[r].type=n.TEXTURE_2D,this.textures[r].loaded=!0,console.log("%c◆%c texture number: %c"+r+"%c, framebuffer created","color: crimson","","color: blue",""),{framebuffer:a,depthRenderbuffer:i,texture:u}}}},{key:"createFramebufferFloat",value:function(e,t,r){if(null!=e&&null!=t&&null!=r){var n=this.gl;this.textures[r]={texture:null,type:null,loaded:!1};var a=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,a);var i=n.createTexture();return n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e,t,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0),n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),this.textures[r].texture=i,this.textures[r].type=n.TEXTURE_2D,this.textures[r].loaded=!0,console.log("%c◆%c texture number: %c"+r+"%c, framebuffer float created","color: crimson","","color: blue",""),{framebuffer:a,depthRenderbuffer:null,texture:i}}}},{key:"createFramebufferCube",value:function(e,t,r,n){if(null!=e&&null!=t&&null!=r&&null!=n){var a=this.gl;this.textures[n]={texture:null,type:null,loaded:!1};var i=a.createFramebuffer();a.bindFramebuffer(a.FRAMEBUFFER,i);var u=a.createRenderbuffer();a.bindRenderbuffer(a.RENDERBUFFER,u),a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,e,t),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,u);var o=a.createTexture();a.bindTexture(a.TEXTURE_CUBE_MAP,o);for(var l=0;l<r.length;l++)a.texImage2D(r[l],0,a.RGBA,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null);return a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.bindTexture(a.TEXTURE_CUBE_MAP,null),a.bindRenderbuffer(a.RENDERBUFFER,null),a.bindFramebuffer(a.FRAMEBUFFER,null),this.textures[n].texture=o,this.textures[n].type=a.TEXTURE_CUBE_MAP,this.textures[n].loaded=!0,console.log("%c◆%c texture number: %c"+n+"%c, framebuffer cube created","color: crimson","","color: blue",""),{framebuffer:i,depthRenderbuffer:u,texture:o}}}},{key:"createTextureCube",value:function(e,t,r,n){var a=this;if(null!=e&&null!=t&&null!=r){var i=[],u=this.gl;this.textures[r]={texture:null,type:null,loaded:!1};for(var o=0;o<e.length;o++)i[o]={image:new Image,loaded:!1},i[o].image.onload=function(o){return function(){if(i[o].loaded=!0,6===i.length){var l=!0;if(i.map(function(e){l=l&&e.loaded}),!0===l){var s=u.createTexture();u.bindTexture(u.TEXTURE_CUBE_MAP,s);for(var c=0;c<e.length;c++)u.texImage2D(t[c],0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,i[c].image);u.generateMipmap(u.TEXTURE_CUBE_MAP),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_MIN_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_MAG_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),a.textures[r].texture=s,a.textures[r].type=u.TEXTURE_CUBE_MAP,a.textures[r].loaded=!0,console.log("%c◆%c texture number: %c"+r+"%c, image loaded: %c"+e[0]+"...","color: crimson","","color: blue","","color: goldenrod"),u.bindTexture(u.TEXTURE_CUBE_MAP,null),null!=n&&n(r)}}}}(o),i[o].image.src=e[o]}}},{key:"bindTexture",value:function(e,t){null!=this.textures[t]&&(this.gl.activeTexture(this.gl.TEXTURE0+e),this.gl.bindTexture(this.textures[t].type,this.textures[t].texture))}},{key:"isTextureLoaded",value:function(){var e=void 0,t=void 0,r=void 0,n=void 0;for(r=!0,n=!1,e=0,t=this.textures.length;e<t;e++)null!=this.textures[e]&&(n=!0,r=r&&this.textures[e].loaded);return!!n&&r}},{key:"createProgramFromId",value:function(e,t,r,n,a,i){if(null==this.gl)return null;var u=void 0,o=new d(this.gl);for(o.vs=o.createShaderFromId(e),o.fs=o.createShaderFromId(t),o.prg=o.createProgram(o.vs,o.fs),o.attL=new Array(r.length),o.attS=new Array(r.length),u=0;u<r.length;u++)o.attL[u]=this.gl.getAttribLocation(o.prg,r[u]),o.attS[u]=n[u];for(o.uniL=new Array(a.length),u=0;u<a.length;u++)o.uniL[u]=this.gl.getUniformLocation(o.prg,a[u]);return o.uniT=i,o.locationCheck(r,a),o}},{key:"createProgramFromSource",value:function(e,t,r,n,a,i){if(null==this.gl)return null;var u=void 0,o=new d(this.gl);for(o.vs=o.createShaderFromSource(e,this.gl.VERTEX_SHADER),o.fs=o.createShaderFromSource(t,this.gl.FRAGMENT_SHADER),o.prg=o.createProgram(o.vs,o.fs),o.attL=new Array(r.length),o.attS=new Array(r.length),u=0;u<r.length;u++)o.attL[u]=this.gl.getAttribLocation(o.prg,r[u]),o.attS[u]=n[u];for(o.uniL=new Array(a.length),u=0;u<a.length;u++)o.uniL[u]=this.gl.getUniformLocation(o.prg,a[u]);return o.uniT=i,o.locationCheck(r,a),o}},{key:"createProgramFromFile",value:function(e,t,r,n,a,i,u){function o(e,t){var r=new XMLHttpRequest;r.open("GET",t.targetUrl,!0),r.setRequestHeader("Pragma","no-cache"),r.setRequestHeader("Cache-Control","no-cache"),r.onload=function(){console.log("%c◆%c shader source loaded: %c"+t.targetUrl,"color: crimson","","color: goldenrod"),t.source=r.responseText,l(e)},r.send()}function l(e){if(null!=c.vs.source&&null!=c.fs.source){var t=void 0;for(s.vs=s.createShaderFromSource(c.vs.source,e.VERTEX_SHADER),s.fs=s.createShaderFromSource(c.fs.source,e.FRAGMENT_SHADER),s.prg=s.createProgram(s.vs,s.fs),s.attL=new Array(r.length),s.attS=new Array(r.length),t=0;t<r.length;t++)s.attL[t]=e.getAttribLocation(s.prg,r[t]),s.attS[t]=n[t];for(s.uniL=new Array(a.length),t=0;t<a.length;t++)s.uniL[t]=e.getUniformLocation(s.prg,a[t]);s.uniT=i,s.locationCheck(r,a),u()}}if(null==this.gl)return null;var s=new d(this.gl),c={vs:{targetUrl:e,source:null},fs:{targetUrl:t,source:null}};return o(this.gl,c.vs),o(this.gl,c.fs),s}}]),e}();t.default=T;var d=function(){function e(t){a(this,e),this.gl=t,this.vs=null,this.fs=null,this.prg=null,this.attL=null,this.attS=null,this.uniL=null,this.uniT=null}return i(e,[{key:"createShaderFromId",value:function(e){var t=void 0,r=document.getElementById(e);if(r){switch(r.type){case"x-shader/x-vertex":t=this.gl.createShader(this.gl.VERTEX_SHADER);break;case"x-shader/x-fragment":t=this.gl.createShader(this.gl.FRAGMENT_SHADER);break;default:return}if(this.gl.shaderSource(t,r.text),this.gl.compileShader(t),this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS))return t;console.warn("◆ compile failed of shader: "+this.gl.getShaderInfoLog(t))}}},{key:"createShaderFromSource",value:function(e,t){var r=void 0;switch(t){case this.gl.VERTEX_SHADER:r=this.gl.createShader(this.gl.VERTEX_SHADER);break;case this.gl.FRAGMENT_SHADER:r=this.gl.createShader(this.gl.FRAGMENT_SHADER);break;default:return}if(this.gl.shaderSource(r,e),this.gl.compileShader(r),this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS))return r;console.warn("◆ compile failed of shader: "+this.gl.getShaderInfoLog(r))}},{key:"createProgram",value:function(e,t){var r=this.gl.createProgram();if(this.gl.attachShader(r,e),this.gl.attachShader(r,t),this.gl.linkProgram(r),this.gl.getProgramParameter(r,this.gl.LINK_STATUS))return this.gl.useProgram(r),r;console.warn("◆ link program failed: "+this.gl.getProgramInfoLog(r))}},{key:"useProgram",value:function(){this.gl.useProgram(this.prg)}},{key:"setAttribute",value:function(e,t){var r=this.gl;for(var n in e)this.attL[n]>=0&&(r.bindBuffer(r.ARRAY_BUFFER,e[n]),r.enableVertexAttribArray(this.attL[n]),r.vertexAttribPointer(this.attL[n],this.attS[n],r.FLOAT,!1,0,0));null!=t&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t)}},{key:"pushShader",value:function(e){for(var t=this.gl,r=0,n=this.uniT.length;r<n;r++){var a="uniform"+this.uniT[r].replace(/matrix/i,"Matrix");null!=t[a]?-1!==a.search(/Matrix/)?t[a](this.uniL[r],!1,e[r]):t[a](this.uniL[r],e[r]):console.warn("◆ not support uniform type: "+this.uniT[r])}}},{key:"locationCheck",value:function(e,t){var r=void 0,n=void 0;for(r=0,n=e.length;r<n;r++)(null==this.attL[r]||this.attL[r]<0)&&console.warn('◆ invalid attribute location: %c"'+e[r]+'"',"color: crimson");for(r=0,n=t.length;r<n;r++)(null==this.uniL[r]||this.uniL[r]<0)&&console.warn('◆ invalid uniform location: %c"'+t[r]+'"',"color: crimson")}}]),e}();window.gl3=window.gl3||new T}]);