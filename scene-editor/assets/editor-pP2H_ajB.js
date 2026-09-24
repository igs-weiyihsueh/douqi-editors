(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="182",pr={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},S0=0,Df=1,w0=2,fl=1,Tm=2,Qr=3,is=0,Mn=1,mn=2,Ri=0,mr=1,xr=2,Of=3,Uf=4,E0=5,bs=100,T0=101,A0=102,C0=103,P0=104,R0=200,I0=201,L0=202,F0=203,ph=204,mh=205,D0=206,O0=207,U0=208,N0=209,B0=210,z0=211,k0=212,V0=213,H0=214,gh=0,yh=1,_h=2,vr=3,xh=4,vh=5,Mh=6,bh=7,Xl=0,G0=1,W0=2,zn=0,Am=1,Cm=2,Pm=3,Fd=4,Rm=5,Im=6,Lm=7,Nf="attached",X0="detached",Fm=300,Cs=301,Mr=302,wl=303,Sh=304,jl=306,Pn=1e3,Jn=1001,wh=1002,Yt=1003,j0=1004,bo=1005,Kt=1006,cc=1007,Ai=1008,In=1009,Dm=1010,Om=1011,fa=1012,Dd=1013,yi=1014,$n=1015,Fi=1016,Od=1017,Ud=1018,pa=1020,Um=35902,Nm=35899,Bm=1021,zm=1022,Bn=1023,Di=1026,Es=1027,Nd=1028,Bd=1029,br=1030,zd=1031,kd=1033,pl=33776,ml=33777,gl=33778,yl=33779,Eh=35840,Th=35841,Ah=35842,Ch=35843,Ph=36196,Rh=37492,Ih=37496,Lh=37488,Fh=37489,Dh=37490,Oh=37491,Uh=37808,Nh=37809,Bh=37810,zh=37811,kh=37812,Vh=37813,Hh=37814,Gh=37815,Wh=37816,Xh=37817,jh=37818,Yh=37819,qh=37820,Zh=37821,Jh=36492,$h=36494,Kh=36495,Qh=36283,ed=36284,td=36285,nd=36286,id=2200,sd=2201,Y0=2202,El=2300,rd=2301,hc=2302,lr=2400,cr=2401,Tl=2402,Vd=2500,km=2501,q0=3200,oo=0,Z0=1,Yi="",ct="srgb",fi="srgb-linear",Al="linear",_t="srgb",Ns=7680,Bf=519,J0=512,$0=513,K0=514,Hd=515,Q0=516,ey=517,Gd=518,ty=519,ad=35044,pn=35048,zf="300 es",Kn=2e3,ma=2001;function Vm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Hm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ny(){const r=ga("canvas");return r.style.display="block",r}const kf={};function Cl(...r){const e="THREE."+r.shift();console.log(e,...r)}function Re(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Oe(...r){const e="THREE."+r.shift();console.error(e,...r)}function ya(...r){const e=r.join(" ");e in kf||(kf[e]=!0,Re(...r))}function iy(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vf=1234567;const gr=Math.PI/180,Sr=180/Math.PI;function Qn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function Wd(r,e){return(r%e+e)%e}function sy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ry(r,e,t){return r!==e?(t-r)/(e-r):0}function ra(r,e,t){return(1-t)*r+t*e}function ay(r,e,t,n){return ra(r,e,1-Math.exp(-t*n))}function oy(r,e=1){return e-Math.abs(Wd(r,e*2)-e)}function ly(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function cy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function dy(r,e){return r+Math.random()*(e-r)}function uy(r){return r*(.5-Math.random())}function fy(r){r!==void 0&&(Vf=r);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function py(r){return r*gr}function my(r){return r*Sr}function gy(r){return(r&r-1)===0&&r!==0}function yy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function _y(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xy(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*d,l*h,l*u,o*c);break;case"YZY":r.set(l*u,o*d,l*h,o*c);break;case"ZXZ":r.set(l*h,l*u,o*d,o*c);break;case"XZX":r.set(o*d,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*d,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*d,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const He={DEG2RAD:gr,RAD2DEG:Sr,generateUUID:Qn,clamp:je,euclideanModulo:Wd,mapLinear:sy,inverseLerp:ry,lerp:ra,damp:ay,pingpong:oy,smoothstep:ly,smootherstep:cy,randInt:hy,randFloat:dy,randFloatSpread:uy,seededRandom:fy,degToRad:py,radToDeg:my,isPowerOfTwo:gy,ceilPowerOfTwo:yy,floorPowerOfTwo:_y,setQuaternionFromProperEuler:xy,normalize:xt,denormalize:Zn};let Ae=class Gm{constructor(e=0,t=0){Gm.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3],u=s[a+0],f=s[a+1],p=s[a+2],y=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o>=1){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=y;return}if(h!==y||l!==u||c!==f||d!==p){let g=l*u+c*f+d*p+h*y;g<0&&(u=-u,f=-f,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){const x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,o=Math.sin(o*x)/_,l=l*m+u*o,c=c*m+f*o,d=d*m+p*o,h=h*m+y*o}else{l=l*m+u*o,c=c*m+f*o,d=d*m+p*o,h=h*m+y*o;const x=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=x,c*=x,d*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[a],u=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+d*h+l*f-c*u,e[t+1]=l*p+d*u+c*h-o*f,e[t+2]=c*p+d*f+o*u-l*h,e[t+3]=d*p-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"YXZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"ZXY":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"ZYX":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"YZX":this._x=u*d*h+c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h-u*f*p;break;case"XZY":this._x=u*d*h-c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h+u*f*p;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class Wm{constructor(e=0,t=0,n=0){Wm.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=i+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const dc=new C,Hf=new rt;let qe=class Xm{constructor(e,t,n,i,s,a,o,l,c){Xm.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],p=n[8],y=i[0],g=i[3],m=i[6],x=i[1],_=i[4],v=i[7],w=i[2],S=i[5],T=i[8];return s[0]=a*y+o*x+l*w,s[3]=a*g+o*_+l*S,s[6]=a*m+o*v+l*T,s[1]=c*y+d*x+h*w,s[4]=c*g+d*_+h*S,s[7]=c*m+d*v+h*T,s[2]=u*y+f*x+p*w,s[5]=u*g+f*_+p*S,s[8]=u*m+f*v+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,f=c*s-a*l,p=t*h+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=h*y,e[1]=(i*c-d*n)*y,e[2]=(o*n-i*a)*y,e[3]=u*y,e[4]=(d*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const uc=new qe,Gf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wf=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vy(){const r={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yi?Al:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[fi]:{primaries:e,whitePoint:n,transfer:Al,toXYZ:Gf,fromXYZ:Wf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Gf,fromXYZ:Wf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),r}const Xe=vy();function Ii(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bs;class My{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=ga("canvas")),Bs.width=e.width,Bs.height=e.height;const i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let by=0;class Xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(fc(i[a].image)):s.push(fc(i[a]))}else s=fc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function fc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?My.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Sy=0;const pc=new C;class Qt extends as{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=Jn,i=Jn,s=Kt,a=Ai,o=Bn,l=In,c=Qt.DEFAULT_ANISOTROPY,d=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Qn(),this.name="",this.source=new Xd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Fm;Qt.DEFAULT_ANISOTROPY=1;let mt=class jm{constructor(e=0,t=0,n=0,i=1){jm.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(f+1)/2,w=(m+1)/2,S=(d+u)/4,T=(h+y)/4,P=(p+g)/4;return _>v&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=S/n,s=T/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=P/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-y)/x,this.z=(u-d)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class wy extends as{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Qt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends wy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ym extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ey extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),wo.subVectors(this.max,kr),zs.subVectors(e.a,kr),ks.subVectors(e.b,kr),Vs.subVectors(e.c,kr),Ui.subVectors(ks,zs),Ni.subVectors(Vs,ks),ds.subVectors(zs,Vs);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-ds.z,ds.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,ds.z,0,-ds.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-ds.y,ds.x,0];return!mc(t,zs,ks,Vs,wo)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,zs,ks,Vs,wo))?!1:(Eo.crossVectors(Ui,Ni),t=[Eo.x,Eo.y,Eo.z],mc(t,zs,ks,Vs,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new C,new C,new C,new C,new C,new C,new C,new C],Gn=new C,So=new pi,zs=new C,ks=new C,Vs=new C,Ui=new C,Ni=new C,ds=new C,kr=new C,wo=new C,Eo=new C,us=new C;function mc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){us.fromArray(r,s);const o=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),d=n.dot(us);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ty=new pi,Vr=new C,gc=new C;class Rr{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ty.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(gc)),this.expandByPoint(Vr.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bi=new C,yc=new C,To=new C,Bi=new C,_c=new C,Ao=new C,xc=new C;class lo{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yc.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(yc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(To),o=Bi.dot(this.direction),l=-Bi.dot(To),c=Bi.lengthSq(),d=Math.abs(1-a*a);let h,u,f,p;if(d>0)if(h=a*l-o,u=a*o-l,p=s*d,h>=0)if(u>=-p)if(u<=p){const y=1/d;h*=y,u*=y,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yc).addScaledVector(To,u),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,s){_c.subVectors(t,e),Ao.subVectors(n,e),xc.crossVectors(_c,Ao);let a=this.direction.dot(xc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const l=o*this.direction.dot(Ao.crossVectors(Bi,Ao));if(l<0)return null;const c=o*this.direction.dot(_c.cross(Bi));if(c<0||l+c>a)return null;const d=-o*Bi.dot(xc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let Le=class od{constructor(e,t,n,i,s,a,o,l,c,d,h,u,f,p,y,g){od.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,h,u,f,p,y,g)}set(e,t,n,i,s,a,o,l,c,d,h,u,f,p,y,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=u,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new od().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*h,p=o*d,y=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,p=c*d,y=c*h;t[0]=u+y*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-p,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,p=c*d,y=c*h;t[0]=u-y*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*d,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,p=o*d,y=o*h;t[0]=l*d,t[4]=p*c-f,t[8]=u*c+y,t[1]=l*h,t[5]=y*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*d,t[4]=y-u*h,t[8]=p*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+p,t[10]=u-y*h}else if(e.order==="XZY"){const u=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+y,t[5]=a*d,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*d,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ay,e,Cy)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),zi.crossVectors(n,En),zi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),zi.crossVectors(n,En)),zi.normalize(),Co.crossVectors(En,zi),i[0]=zi.x,i[4]=Co.x,i[8]=En.x,i[1]=zi.y,i[5]=Co.y,i[9]=En.y,i[2]=zi.z,i[6]=Co.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],w=n[15],S=i[0],T=i[4],P=i[8],M=i[12],E=i[1],I=i[5],D=i[9],B=i[13],G=i[2],H=i[6],V=i[10],z=i[14],X=i[3],K=i[7],te=i[11],ne=i[15];return s[0]=a*S+o*E+l*G+c*X,s[4]=a*T+o*I+l*H+c*K,s[8]=a*P+o*D+l*V+c*te,s[12]=a*M+o*B+l*z+c*ne,s[1]=d*S+h*E+u*G+f*X,s[5]=d*T+h*I+u*H+f*K,s[9]=d*P+h*D+u*V+f*te,s[13]=d*M+h*B+u*z+f*ne,s[2]=p*S+y*E+g*G+m*X,s[6]=p*T+y*I+g*H+m*K,s[10]=p*P+y*D+g*V+m*te,s[14]=p*M+y*B+g*z+m*ne,s[3]=x*S+_*E+v*G+w*X,s[7]=x*T+_*I+v*H+w*K,s[11]=x*P+_*D+v*V+w*te,s[15]=x*M+_*B+v*z+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],p=e[3],y=e[7],g=e[11],m=e[15],x=l*f-c*u,_=o*f-c*h,v=o*u-l*h,w=a*f-c*d,S=a*u-l*d,T=a*h-o*d;return t*(y*x-g*_+m*v)-n*(p*x-g*w+m*S)+i*(p*_-y*w+m*T)-s*(p*v-y*S+g*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],p=e[12],y=e[13],g=e[14],m=e[15],x=h*g*c-y*u*c+y*l*f-o*g*f-h*l*m+o*u*m,_=p*u*c-d*g*c-p*l*f+a*g*f+d*l*m-a*u*m,v=d*y*c-p*h*c+p*o*f-a*y*f-d*o*m+a*h*m,w=p*h*l-d*y*l-p*o*u+a*y*u+d*o*g-a*h*g,S=t*x+n*_+i*v+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(y*u*s-h*g*s-y*i*f+n*g*f+h*i*m-n*u*m)*T,e[2]=(o*g*s-y*l*s+y*i*c-n*g*c-o*i*m+n*l*m)*T,e[3]=(h*l*s-o*u*s-h*i*c+n*u*c+o*i*f-n*l*f)*T,e[4]=_*T,e[5]=(d*g*s-p*u*s+p*i*f-t*g*f-d*i*m+t*u*m)*T,e[6]=(p*l*s-a*g*s-p*i*c+t*g*c+a*i*m-t*l*m)*T,e[7]=(a*u*s-d*l*s+d*i*c-t*u*c-a*i*f+t*l*f)*T,e[8]=v*T,e[9]=(p*h*s-d*y*s-p*n*f+t*y*f+d*n*m-t*h*m)*T,e[10]=(a*y*s-p*o*s+p*n*c-t*y*c-a*n*m+t*o*m)*T,e[11]=(d*o*s-a*h*s-d*n*c+t*h*c+a*n*f-t*o*f)*T,e[12]=w*T,e[13]=(d*y*i-p*h*i+p*n*u-t*y*u-d*n*g+t*h*g)*T,e[14]=(p*o*i-a*y*i-p*n*l+t*y*l+a*n*g-t*o*g)*T,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,f=s*d,p=s*h,y=a*d,g=a*h,m=o*h,x=l*c,_=l*d,v=l*h,w=n.x,S=n.y,T=n.z;return i[0]=(1-(y+m))*w,i[1]=(f+v)*w,i[2]=(p-_)*w,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(u+m))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(p+_)*T,i[9]=(g-x)*T,i[10]=(1-(u+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Hs.set(i[0],i[1],i[2]).length();const a=Hs.set(i[4],i[5],i[6]).length(),o=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Wn.copy(this);const c=1/s,d=1/a,h=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Kn,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let p,y;if(l)p=s/(a-s),y=a*s/(a-s);else if(o===Kn)p=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ma)p=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Kn,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,y;if(l)p=1/(a-s),y=a/(a-s);else if(o===Kn)p=-2/(a-s),y=-(a+s)/(a-s);else if(o===ma)p=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const Hs=new C,Wn=new Le,Ay=new C(0,0,0),Cy=new C(1,1,1),zi=new C,Co=new C,En=new C,Xf=new Le,jf=new rt;let Vt=class qm{constructor(e=0,t=0,n=0,i=qm.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vt.DEFAULT_ORDER="XYZ";class As{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Py=0;const Yf=new C,Gs=new rt,Si=new Le,Po=new C,Hr=new C,Ry=new C,Iy=new rt,qf=new C(1,0,0),Zf=new C(0,1,0),Jf=new C(0,0,1),$f={type:"added"},Ly={type:"removed"},Ws={type:"childadded",child:null},vc={type:"childremoved",child:null};class pt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new C,t=new Vt,n=new rt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new qe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(qf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(Jf,e)}translateOnAxis(e,t){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(Jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Po.copy(e):Po.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Hr,Po,this.up):Si.lookAt(Po,Hr,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(Si),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($f),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ly),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($f),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new C(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new C,wi=new C,Mc=new C,Ei=new C,Xs=new C,js=new C,Kf=new C,bc=new C,Sc=new C,wc=new C,Ec=new mt,Tc=new mt,Ac=new mt;class vn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xn.subVectors(i,t),wi.subVectors(n,t),Mc.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(wi),l=Xn.dot(Mc),c=wi.dot(wi),d=wi.dot(Mc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,p=(a*d-o*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ec.setScalar(0),Tc.setScalar(0),Ac.setScalar(0),Ec.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,n),Ac.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ec,s.x),a.addScaledVector(Tc,s.y),a.addScaledVector(Ac,s.z),a}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),wi.subVectors(e,t),Xn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Xn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Xs.subVectors(i,n),js.subVectors(s,n),bc.subVectors(e,n);const l=Xs.dot(bc),c=js.dot(bc);if(l<=0&&c<=0)return t.copy(n);Sc.subVectors(e,i);const d=Xs.dot(Sc),h=js.dot(Sc);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Xs,a);wc.subVectors(e,s);const f=Xs.dot(wc),p=js.dot(wc);if(p>=0&&f<=p)return t.copy(s);const y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(js,o);const g=d*p-f*h;if(g<=0&&h-d>=0&&f-p>=0)return Kf.subVectors(s,i),o=(h-d)/(h-d+(f-p)),t.copy(i).addScaledVector(Kf,o);const m=1/(g+y+u);return a=y*m,o=u*m,t.copy(n).addScaledVector(Xs,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Cc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Wd(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Cc(a,s,e+1/3),this.g=Cc(a,s,e),this.b=Cc(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=ct){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=Zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Xe.workingToColorSpace(nn.copy(this),e),Math.round(je(nn.r*255,0,255))*65536+Math.round(je(nn.g*255,0,255))*256+Math.round(je(nn.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=ct){Xe.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,i=nn.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Ro);const n=ra(ki.h,Ro.h,t),i=ra(ki.s,Ro.s,t),s=ra(ki.l,Ro.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ye;ye.NAMES=Zm;let Fy=0;class _i extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=mr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==mh&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class on extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new C,Io=new Ae;let Dy=0;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ad,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ad&&(e.usage=this.usage),e}}class jd extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jm extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oy=0;const Un=new Le,Pc=new pt,Ys=new C,Tn=new pi,Gr=new pi,Jt=new C;class Ke extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?Jm:jd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Tn.min,Gr.min),Tn.expandByPoint(Jt),Jt.addVectors(Tn.max,Gr.max),Tn.expandByPoint(Jt)):(Tn.expandByPoint(Gr.min),Tn.expandByPoint(Gr.max))}Tn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Jt.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),Jt.add(Ys)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const c=new C,d=new C,h=new C,u=new Ae,f=new Ae,p=new Ae,y=new C,g=new C;function m(P,M,E){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),u.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,E),d.sub(c),h.sub(c),f.sub(u),p.sub(u);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(y.copy(d).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(I),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(I),o[P].add(y),o[M].add(y),o[E].add(y),l[P].add(g),l[M].add(g),l[E].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,M=x.length;P<M;++P){const E=x[P],I=E.start,D=E.count;for(let B=I,G=I+D;B<G;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new C,v=new C,w=new C,S=new C;function T(P){w.fromBufferAttribute(i,P),S.copy(w);const M=o[P];_.copy(M),_.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(S,M);const I=v.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,I)}for(let P=0,M=x.length;P<M;++P){const E=x[P],I=E.start,D=E.count;for(let B=I,G=I+D;B<G;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,a=new C,o=new C,l=new C,c=new C,d=new C,h=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*d;for(let m=0;m<d;m++)u[p++]=c[f++]}return new Wt(u,d,h)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qf=new Le,fs=new lo,Lo=new Rr,ep=new C,Fo=new C,Do=new C,Oo=new C,Rc=new C,Uo=new C,tp=new C,No=new C;class ae extends pt{constructor(e=new Ke,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Rc.fromBufferAttribute(h,e),a?Uo.addScaledVector(Rc,d):Uo.addScaledVector(Rc.sub(t),d))}t.add(Uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!(Lo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Lo,ep)===null||fs.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(Qf.copy(s).invert(),fs.copy(e.ray).applyMatrix4(Qf),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){const g=u[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=_;v<w;v+=3){const S=o.getX(v),T=o.getX(v+1),P=o.getX(v+2);i=Bo(this,m,e,n,c,d,h,S,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){const x=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);i=Bo(this,a,e,n,c,d,h,x,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){const g=u[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=_;v<w;v+=3){const S=v,T=v+1,P=v+2;i=Bo(this,m,e,n,c,d,h,S,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){const x=g,_=g+1,v=g+2;i=Bo(this,a,e,n,c,d,h,x,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Uy(r,e,t,n,i,s,a,o){let l;if(e.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===is,o),l===null)return null;No.copy(o),No.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:r}}function Bo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Fo),r.getVertexPosition(l,Do),r.getVertexPosition(c,Oo);const d=Uy(r,e,t,n,Fo,Do,Oo,tp);if(d){const h=new C;vn.getBarycoord(tp,Fo,Do,Oo,h),i&&(d.uv=vn.getInterpolatedAttribute(i,o,l,c,h,new Ae)),s&&(d.uv1=vn.getInterpolatedAttribute(s,o,l,c,h,new Ae)),a&&(d.normal=vn.getInterpolatedAttribute(a,o,l,c,h,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};vn.getNormal(Fo,Do,Oo,u.normal),d.face=u,d.barycoord=h}return d}class At extends Ke{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(h,2));function p(y,g,m,x,_,v,w,S,T,P,M){const E=v/T,I=w/P,D=v/2,B=w/2,G=S/2,H=T+1,V=P+1;let z=0,X=0;const K=new C;for(let te=0;te<V;te++){const ne=te*I-B;for(let Ie=0;Ie<H;Ie++){const Ce=Ie*E-D;K[y]=Ce*x,K[g]=ne*_,K[m]=G,c.push(K.x,K.y,K.z),K[y]=0,K[g]=0,K[m]=S>0?1:-1,d.push(K.x,K.y,K.z),h.push(Ie/T),h.push(1-te/P),z+=1}}for(let te=0;te<P;te++)for(let ne=0;ne<T;ne++){const Ie=u+ne+H*te,Ce=u+ne+H*(te+1),Qe=u+(ne+1)+H*(te+1),Ge=u+(ne+1)+H*te;l.push(Ie,Ce,Ge),l.push(Ce,Qe,Ge),X+=6}o.addGroup(f,X,M),f+=X,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function un(r){const e={};for(let t=0;t<r.length;t++){const n=wr(r[t]);for(const i in n)e[i]=n[i]}return e}function Ny(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $m(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const By={clone:wr,merge:un};var zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zy,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yd extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new C,np=new Ae,ip=new Ae;class jt extends Yd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,np,ip),t.subVectors(ip,np)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Zs=1;class Vy extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(qs,Zs,e,t);i.layers=this.layers,this.add(i);const s=new jt(qs,Zs,e,t);s.layers=this.layers,this.add(s);const a=new jt(qs,Zs,e,t);a.layers=this.layers,this.add(a);const o=new jt(qs,Zs,e,t);o.layers=this.layers,this.add(o);const l=new jt(qs,Zs,e,t);l.layers=this.layers,this.add(l);const c=new jt(qs,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Km extends Qt{constructor(e=[],t=Cs,n,i,s,a,o,l,c,d){super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qm extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Km(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new At(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Ri});s.uniforms.tEquirect.value=t;const a=new ae(i,s),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Kt),new Vy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class an extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hy={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sp extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ad,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new C;class Pl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Cl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ld extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Js;const Wr=new C,$s=new C,Ks=new C,Qs=new Ae,Xr=new Ae,eg=new Le,zo=new C,jr=new C,ko=new C,rp=new Ae,Lc=new Ae,ap=new Ae;class op extends pt{constructor(e=new ld){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gy(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Pl(n,3,0,!1)),Js.setAttribute("uv",new Pl(n,2,3,!1))}this.geometry=Js,this.material=e,this.center=new Ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),eg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Ks.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Vo(zo.set(-.5,-.5,0),Ks,a,$s,i,s),Vo(jr.set(.5,-.5,0),Ks,a,$s,i,s),Vo(ko.set(.5,.5,0),Ks,a,$s,i,s),rp.set(0,0),Lc.set(1,0),ap.set(1,1);let o=e.ray.intersectTriangle(zo,jr,ko,!1,Wr);if(o===null&&(Vo(jr.set(-.5,.5,0),Ks,a,$s,i,s),Lc.set(0,1),o=e.ray.intersectTriangle(zo,ko,jr,!1,Wr),o===null))return;const l=e.ray.origin.distanceTo(Wr);l<e.near||l>e.far||t.push({distance:l,point:Wr.clone(),uv:vn.getInterpolation(Wr,zo,jr,ko,rp,Lc,ap,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vo(r,e,t,n,i,s){Qs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Xr.x=s*Qs.x-i*Qs.y,Xr.y=i*Qs.x+s*Qs.y):Xr.copy(Qs),r.copy(e),r.x+=Xr.x,r.y+=Xr.y,r.applyMatrix4(eg)}const lp=new C,cp=new mt,hp=new mt,Wy=new C,dp=new Le,Ho=new C,Fc=new Rr,up=new Le,Dc=new lo;class Xy extends ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nf,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fc.copy(this.boundingSphere),Fc.applyMatrix4(i),e.ray.intersectsSphere(Fc)!==!1&&(up.copy(i).invert(),Dc.copy(e.ray).applyMatrix4(up),!(this.boundingBox!==null&&Dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===X0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;cp.fromBufferAttribute(i.attributes.skinIndex,e),hp.fromBufferAttribute(i.attributes.skinWeight,e),lp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=hp.getComponent(s);if(a!==0){const o=cp.getComponent(s);dp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Wy.copy(lp).applyMatrix4(dp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cd extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qd extends Qt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Yt,d=Yt,h,u){super(null,a,o,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fp=new Le,jy=new Le;class Zd{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:jy;fp.multiplyMatrices(o,t[s]),fp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Zd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qd(t,e,e,Bn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Re("Skeleton: No bone found with UUID:",s),a=new cd),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ps extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oc=new C,Yy=new C,qy=new qe;class ji{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Oc.subVectors(n,t).cross(Yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qy.getNormalMatrix(e),i=this.coplanarPoint(Oc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Rr,Zy=new Ae(.5,.5),Go=new C;class Jd{constructor(e=new ji,t=new ji,n=new ji,i=new ji,s=new ji,a=new ji){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],f=s[7],p=s[8],y=s[9],g=s[10],m=s[11],x=s[12],_=s[13],v=s[14],w=s[15];if(i[0].setComponents(c-a,f-d,m-p,w-x).normalize(),i[1].setComponents(c+a,f+d,m+p,w+x).normalize(),i[2].setComponents(c+o,f+h,m+y,w+_).normalize(),i[3].setComponents(c-o,f-h,m-y,w-_).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,m-g,w-v).normalize();else if(i[4].setComponents(c-l,f-u,m-g,w-v).normalize(),t===Kn)i[5].setComponents(c+l,f+u,m+g,w+v).normalize();else if(t===ma)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=Zy.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ln extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new C,Il=new C,pp=new Le,Yr=new lo,Wo=new Rr,Uc=new C,mp=new C;class Ft extends pt{constructor(e=new Ke,t=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Rl.fromBufferAttribute(t,i-1),Il.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rl.distanceTo(Il);e.setAttribute("lineDistance",new nt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;pp.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(pp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let y=f,g=p-1;y<g;y+=c){const m=d.getX(y),x=d.getX(y+1),_=Xo(this,e,Yr,l,m,x,y);_&&t.push(_)}if(this.isLineLoop){const y=d.getX(p-1),g=d.getX(f),m=Xo(this,e,Yr,l,y,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let y=f,g=p-1;y<g;y+=c){const m=Xo(this,e,Yr,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){const y=Xo(this,e,Yr,l,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xo(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Rl.fromBufferAttribute(o,i),Il.fromBufferAttribute(o,s),t.distanceSqToSegment(Rl,Il,Uc,mp)>n)return;Uc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Uc);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const gp=new C,yp=new C;class Zi extends Ft{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)gp.fromBufferAttribute(t,i),yp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gp.distanceTo(yp);e.setAttribute("lineDistance",new nt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hr extends Qt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _a extends Qt{constructor(e,t,n=yi,i,s,a,o=Yt,l=Yt,c,d=Di,h=1){if(d!==Di&&d!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jy extends _a{constructor(e,t=yi,n=Cs,i,s,a=Yt,o=Yt,l,c=Di){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tg extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zt extends Ke{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let p=0;const y=[],g=n/2;let m=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function x(){const v=new C,w=new C;let S=0;const T=(t-e)/n;for(let P=0;P<=s;P++){const M=[],E=P/s,I=E*(t-e)+e;for(let D=0;D<=i;D++){const B=D/i,G=B*l+o,H=Math.sin(G),V=Math.cos(G);w.x=I*H,w.y=-E*n+g,w.z=I*V,h.push(w.x,w.y,w.z),v.set(H,T,V).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-E),M.push(p++)}y.push(M)}for(let P=0;P<i;P++)for(let M=0;M<s;M++){const E=y[M][P],I=y[M+1][P],D=y[M+1][P+1],B=y[M][P+1];(e>0||M!==0)&&(d.push(E,I,B),S+=3),(t>0||M!==s-1)&&(d.push(I,D,B),S+=3)}c.addGroup(m,S,0),m+=S}function _(v){const w=p,S=new Ae,T=new C;let P=0;const M=v===!0?e:t,E=v===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,g*E,0),u.push(0,E,0),f.push(.5,.5),p++;const I=p;for(let D=0;D<=i;D++){const G=D/i*l+o,H=Math.cos(G),V=Math.sin(G);T.x=M*V,T.y=g*E,T.z=M*H,h.push(T.x,T.y,T.z),u.push(0,E,0),S.x=H*.5+.5,S.y=V*.5*E+.5,f.push(S.x,S.y),p++}for(let D=0;D<i;D++){const B=w+D,G=I+D;v===!0?d.push(G,G+1,B):d.push(G+1,G,B),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class co extends zt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new co(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $d extends Ke{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),d(),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(s.slice(),3)),this.setAttribute("uv",new nt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new C,v=new C,w=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],v),f(t[S+2],w),l(_,v,w,x)}function l(x,_,v,w){const S=w+1,T=[];for(let P=0;P<=S;P++){T[P]=[];const M=x.clone().lerp(v,P/S),E=_.clone().lerp(v,P/S),I=S-P;for(let D=0;D<=I;D++)D===0&&P===S?T[P][D]=M:T[P][D]=M.clone().lerp(E,D/I)}for(let P=0;P<S;P++)for(let M=0;M<2*(S-P)-1;M++){const E=Math.floor(M/2);M%2===0?(u(T[P][E+1]),u(T[P+1][E]),u(T[P][E])):(u(T[P][E+1]),u(T[P+1][E+1]),u(T[P+1][E]))}}function c(x){const _=new C;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(x),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function d(){const x=new C;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const v=g(x)/2/Math.PI+.5,w=m(x)/Math.PI+.5;a.push(v,1-w)}p(),h()}function h(){for(let x=0;x<a.length;x+=6){const _=a[x+0],v=a[x+2],w=a[x+4],S=Math.max(_,v,w),T=Math.min(_,v,w);S>.9&&T<.1&&(_<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,_){const v=x*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function p(){const x=new C,_=new C,v=new C,w=new C,S=new Ae,T=new Ae,P=new Ae;for(let M=0,E=0;M<s.length;M+=9,E+=6){x.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),S.set(a[E+0],a[E+1]),T.set(a[E+2],a[E+3]),P.set(a[E+4],a[E+5]),w.copy(x).add(_).add(v).divideScalar(3);const I=g(w);y(S,E+0,x,I),y(T,E+2,_,I),y(P,E+4,v,I)}}function y(x,_,v,w){w<0&&x.x===1&&(a[_]=x.x-1),v.x===0&&v.z===0&&(a[_]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.vertices,e.indices,e.radius,e.detail)}}const jo=new C,Yo=new C,Nc=new C,qo=new vn;class ar extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(gr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:y,b:g,c:m}=qo;if(y.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),qo.getNormal(Nc),h[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const _=(x+1)%3,v=h[x],w=h[_],S=qo[d[x]],T=qo[d[_]],P=`${v}_${w}`,M=`${w}_${v}`;M in u&&u[M]?(Nc.dot(u[M].normal)<=s&&(f.push(S.x,S.y,S.z),f.push(T.x,T.y,T.z)),u[M]=null):P in u||(u[P]={index0:c[x],index1:c[_],normal:Nc.clone()})}}for(const p in u)if(u[p]){const{index0:y,index1:g}=u[p];jo.fromBufferAttribute(o,y),Yo.fromBufferAttribute(o,g),f.push(jo.x,jo.y,jo.z),f.push(Yo.x,Yo.y,Yo.z)}this.setAttribute("position",new nt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $y{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const d=n[i],u=n[i+1]-d,f=(a-d)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Ae:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,i=[],s=[],a=[],o=new C,l=new Le;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(je(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(je(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ky(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ng(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=i_(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let d=o,h=l;for(let u=t;u<i;u+=t){const f=r[u],p=r[u+1];f<o&&(o=f),p<l&&(l=p),f>d&&(d=f),p>h&&(h=p)}c=Math.max(d-o,h-l),c=c!==0?32767/c:0}return xa(s,a,t,o,l,c,0),a}function ng(r,e,t,n,i){let s;if(i===p_(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=_p(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=_p(a/n|0,r[a],r[a+1],s);return s&&Er(s,s.next)&&(Ma(s),s=s.next),s}function Ps(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Er(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xa(r,e,t,n,i,s,a){if(!r)return;!a&&s&&l_(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?e_(r,n,i,s):Qy(r)){e.push(l.i,r.i,c.i),Ma(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=t_(Ps(r),e),xa(r,e,t,n,i,s,2)):a===2&&n_(r,e,t,n,i,s):xa(Ps(r),e,t,n,i,s,1);break}}}function Qy(r){const e=r.prev,t=r,n=r.next;if(Dt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(i,s,a),h=Math.min(o,l,c),u=Math.max(i,s,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=d&&p.x<=u&&p.y>=h&&p.y<=f&&ea(i,o,s,l,a,c,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function e_(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Dt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,d=i.y,h=s.y,u=a.y,f=Math.min(o,l,c),p=Math.min(d,h,u),y=Math.max(o,l,c),g=Math.max(d,h,u),m=hd(f,p,e,t,n),x=hd(y,g,e,t,n);let _=r.prevZ,v=r.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=f&&_.x<=y&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&ea(o,d,l,h,c,u,_.x,_.y)&&Dt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=y&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&ea(o,d,l,h,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=y&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&ea(o,d,l,h,c,u,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&ea(o,d,l,h,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function t_(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Er(n,i)&&sg(n,t,t.next,i)&&va(n,i)&&va(i,n)&&(e.push(n.i,t.i,i.i),Ma(t),Ma(t.next),t=r=i),t=t.next}while(t!==r);return Ps(t)}function n_(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&d_(a,o)){let l=rg(a,o);a=Ps(a,a.next),l=Ps(l,l.next),xa(a,e,t,n,i,s,0),xa(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function i_(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=ng(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(h_(c))}i.sort(s_);for(let s=0;s<i.length;s++)t=r_(i[s],t);return t}function s_(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function r_(r,e){const t=a_(r,e);if(!t)return e;const n=rg(t,r);return Ps(n,n.next),Ps(t,t.next)}function a_(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Er(r,t))return t;do{if(Er(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ig(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);va(t,r)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&o_(a,t)))&&(a=t,d=h)}t=t.next}while(t!==o);return a}function o_(r,e){return Dt(r.prev,r,e.prev)<0&&Dt(e.next,r,r.next)<0}function l_(r,e,t,n){let i=r;do i.z===0&&(i.z=hd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,c_(i)}function c_(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function hd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function h_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ig(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function ea(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&ig(r,e,t,n,i,s,a,o)}function d_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!u_(r,e)&&(va(r,e)&&va(e,r)&&f_(r,e)&&(Dt(r.prev,r,e.prev)||Dt(r,e.prev,e))||Er(r,e)&&Dt(r.prev,r,r.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Er(r,e){return r.x===e.x&&r.y===e.y}function sg(r,e,t,n){const i=Jo(Dt(r,e,t)),s=Jo(Dt(r,e,n)),a=Jo(Dt(t,n,r)),o=Jo(Dt(t,n,e));return!!(i!==s&&a!==o||i===0&&Zo(r,t,e)||s===0&&Zo(r,n,e)||a===0&&Zo(t,r,n)||o===0&&Zo(t,e,n))}function Zo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Jo(r){return r>0?1:r<0?-1:0}function u_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&sg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function va(r,e){return Dt(r.prev,r,r.next)<0?Dt(r,e,r.next)>=0&&Dt(r,r.prev,e)>=0:Dt(r,e,r.prev)<0||Dt(r,r.next,e)<0}function f_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function rg(r,e){const t=dd(r.i,r.x,r.y),n=dd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function _p(r,e,t,n){const i=dd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ma(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function dd(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function p_(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class m_{static triangulate(e,t,n=2){return Ky(e,t,n)}}class Kd{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Kd.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];xp(e),vp(n,e);let a=e.length;t.forEach(xp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,vp(n,t[l]);const o=m_.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function xp(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function vp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class dr extends $d{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dr(e.radius,e.detail)}}class Ir extends Ke{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,f=[],p=[],y=[],g=[];for(let m=0;m<d;m++){const x=m*u-a;for(let _=0;_<c;_++){const v=_*h-s;p.push(v,-x,0),y.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const _=x+c*m,v=x+c*(m+1),w=x+1+c*(m+1),S=x+1+c*m;f.push(_,v,S),f.push(v,w,S)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class ho extends Ke{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new C,u=new C,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){const x=[],_=m/n;let v=0;m===0&&a===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const S=w/t;h.x=-e*Math.cos(i+S*s)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(i+S*s)*Math.sin(a+_*o),p.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),g.push(S+v,1-_),x.push(c++)}d.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const _=d[m][x+1],v=d[m][x],w=d[m+1][x],S=d[m+1][x+1];(m!==0||a>0)&&f.push(_,v,S),(m!==n-1||l<Math.PI)&&f.push(v,w,S)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ss extends Ke{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],d=new C,h=new C,u=new C;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const y=p/i*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(y),h.y=(e+t*Math.cos(g))*Math.sin(y),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const y=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,x=(i+1)*f+p;a.push(y,g,x),a.push(g,m,x)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class g_ extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ag extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y_ extends ag{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $o extends _i{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class __ extends _i{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class x_ extends _i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v_ extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _l extends Ln{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ts(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function og(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ud(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Qd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function b_(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],d=c.getValueSize(),h=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){h.push(c.times[f]);for(let y=0;y<d;++y)u.push(c.values[f*d+y])}}h.length!==0&&(c.times=Ts(h,c.times.constructor),c.values=Ts(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function S_(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let d=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=h/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=o.times.length-1;let y;if(s<=o.times[0]){const m=d,x=h-d;y=o.values.slice(m,x)}else if(s>=o.times[p]){const m=p*h+d,x=m+h-d;y=o.values.slice(m,x)}else{const m=o.createInterpolant(),x=d,_=h-d;m.evaluate(s),y=m.resultBuffer.slice(x,_)}l==="quaternion"&&new rt().fromArray(y).normalize().conjugate().toArray(y);const g=c.times.length;for(let m=0;m<g;++m){const x=m*f+u;if(l==="quaternion")rt.multiplyQuaternionsFlat(c.values,x,y,0,c.values,x);else{const _=f-u*2;for(let v=0;v<_;++v)c.values[x+v]-=y[v]}}}return r.blendMode=km,r}class lg{static convertArray(e,t){return Ts(e,t)}static isTypedArray(e){return Hm(e)}static getKeyframeOrder(e){return og(e)}static sortedArray(e,t,n){return ud(e,t,n)}static flattenJSON(e,t,n,i){Qd(e,t,n,i)}static subclip(e,t,n,i,s=30){return b_(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return S_(e,t,n,i)}}class Yl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w_ extends Yl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cr:s=e,o=2*t-n;break;case Tl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cr:a=e,l=2*n-t;break;case Tl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,x=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,_=(-1-f)*g+(1.5+f)*y+.5*p,v=f*g-f*y;for(let w=0;w!==o;++w)s[w]=m*a[d+w]+x*a[c+w]+_*a[l+w]+v*a[h+w];return s}}class cg extends Yl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)s[u]=a[c+u]*h+a[l+u]*d;return s}}class E_ extends Yl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new E_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case El:t=this.InterpolantFactoryMethodDiscrete;break;case rd:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return El;case this.InterpolantFactoryMethodLinear:return rd;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Hm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,f=h+n;for(let p=0;p!==n;++p){const y=t[h+p];if(y!==t[u+p]||y!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=rd;class Lr extends ii{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=El;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class hg extends ii{constructor(e,t,n,i){super(e,t,n,i)}}hg.prototype.ValueTypeName="color";class ba extends ii{constructor(e,t,n,i){super(e,t,n,i)}}ba.prototype.ValueTypeName="number";class T_ extends Yl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let d=c+o;c!==d;c+=4)rt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Tr extends ii{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new T_(this.times,this.values,this.getValueSize(),e)}}Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends ii{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=El;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends ii{constructor(e,t,n,i){super(e,t,n,i)}}Sa.prototype.ValueTypeName="vector";class fd{constructor(e="",t=-1,n=[],i=Vd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(C_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const d=og(l);l=ud(l,1,d),c=ud(c,1,d),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ba(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Oe("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,p,y){if(f.length!==0){const g=[],m=[];Qd(f,g,m,p),g.length!==0&&y.push(new h(u,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let y=0;y<u[p].morphTargets.length;y++)f[u[p].morphTargets[y]]=-1;for(const y in f){const g=[],m=[];for(let x=0;x!==u[p].morphTargets.length;++x){const _=u[p];g.push(_.time),m.push(_.morphTarget===y?1:0)}i.push(new ba(".morphTargetInfluence["+y+"]",g,m))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(Sa,f+".position",u,"pos",i),n(Tr,f+".quaternion",u,"rot",i),n(Sa,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function A_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ba;case"vector":case"vector2":case"vector3":case"vector4":return Sa;case"color":return hg;case"quaternion":return Tr;case"bool":case"boolean":return Lr;case"string":return Fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function C_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=A_(r.type);if(r.times===void 0){const t=[],n=[];Qd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const aa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class P_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const R_=new P_;class Rs{constructor(e){this.manager=e!==void 0?e:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class I_ extends Error{constructor(e,t){super(e),this.response=t}}class L_ extends Rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=aa.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:i});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Ti[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let y=0;const g=new ReadableStream({start(m){x();function x(){h.read().then(({done:_,value:v})=>{if(_)m.close();else{y+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let S=0,T=d.length;S<T;S++){const P=d[S];P.onProgress&&P.onProgress(w)}m.enqueue(v),x()}},_=>{m.error(_)})}}});return new Response(g)}else throw new I_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{aa.add(`file:${e}`,c);const d=Ti[e];delete Ti[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Ti[e];if(d===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const er=new WeakMap;class F_ extends Rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=aa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=er.get(a);h===void 0&&(h=[],er.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=ga("img");function l(){d(),t&&t(this);const h=er.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}er.delete(this),s.manager.itemEnd(e)}function c(h){d(),i&&i(h),aa.remove(`image:${e}`);const u=er.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(h)}er.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),aa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ta extends Rs{constructor(e){super(e)}load(e,t,n,i){const s=new Qt,a=new F_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class uo extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class D_ extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Bc=new Le,Mp=new C,bp=new C;class eu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bp),t.updateMatrixWorld(),Bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O_ extends eu{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class U_ extends uo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new O_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class N_ extends eu{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Sp extends uo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new N_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class tu extends Yd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B_ extends eu{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new B_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class dg extends uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class z_{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class k_ extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class V_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class H_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class G_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){rt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;rt.multiplyQuaternionsFlat(e,a,e,t,e,n),rt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const nu="\\[\\]\\.:\\/",W_=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",X_="[^"+nu.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",iu),Y_=/(WCOD+)?/.source.replace("WCOD",X_),q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),J_=new RegExp("^"+j_+Y_+q_+Z_+"$"),$_=["material","materials","bones","map"];class K_{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(e){const t=J_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=K_;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Q_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:lr,endingEnd:lr};for(let c=0;c!==a;++c){const d=s[c].createInterpolant(null);o[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case km:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulateAdditive(o);break;case Vd:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Y0;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===id){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=cr,i.endingEnd=cr):(e?i.endingStart=this.zeroSlopeAtStart?cr:lr:i.endingStart=Tl,t?i.endingEnd=this.zeroSlopeAtEnd?cr:lr:i.endingEnd=Tl)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const ex=new Float32Array(1);class md extends as{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==s;++h){const u=i[h],f=u.name;let p=d[f];if(p!==void 0)++p.referenceCount,a[h]=p;else{if(p=a[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const y=t&&t._propertyBindings[h].binding.parsedPath;p=new G_(lt.create(n,f,y),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[h]=p}o[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new cg(new Float32Array(2),new Float32Array(2),1,ex),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?fd.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Vd),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new Q_(this,a,t,n);return this._bindAction(d,c),this._addInactiveAction(d,o,s),d}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?fd.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const d=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Cn{constructor(e){this.value=e}clone(){return new Cn(this.value.clone===void 0?this.value:this.value.clone())}}const wp=new Le;class ug{constructor(e,t,n=0,i=1/0){this.ray=new lo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wp),this}intersectObject(e,t=!0,n=[]){return gd(e,this,n,t),n.sort(Ep),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)gd(e[i],this,n,t);return n.sort(Ep),n}}function Ep(r,e){return r.distance-e.distance}function gd(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)gd(s[a],e,t,!0)}}class Tp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ap extends Zi{constructor(e=10,t=10,n=4473924,i=8947848){n=new ye(n),i=new ye(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const y=u===s?n:i;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}const d=new Ke;d.setAttribute("position",new nt(l,3)),d.setAttribute("color",new nt(c,3));const h=new Ln({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ko=new C,Nt=new Yd;class tx extends Zi{constructor(e){const t=new Ke,n=new Ln({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,y){l(p),l(y)}function l(p){i.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new nt(i,3)),t.setAttribute("color",new nt(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ye(16755200),d=new ye(16711680),h=new ye(43775),u=new ye(16777215),f=new ye(3355443);this.setColors(c,d,h,u,f)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,a;if(Nt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,a=0;else if(this.camera.coordinateSystem===Kn)s=-1,a=1;else if(this.camera.coordinateSystem===ma)s=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Bt("c",t,e,Nt,0,0,s),Bt("t",t,e,Nt,0,0,a),Bt("n1",t,e,Nt,-n,-i,s),Bt("n2",t,e,Nt,n,-i,s),Bt("n3",t,e,Nt,-n,i,s),Bt("n4",t,e,Nt,n,i,s),Bt("f1",t,e,Nt,-n,-i,a),Bt("f2",t,e,Nt,n,-i,a),Bt("f3",t,e,Nt,-n,i,a),Bt("f4",t,e,Nt,n,i,a),Bt("u1",t,e,Nt,n*.7,i*1.1,s),Bt("u2",t,e,Nt,-n*.7,i*1.1,s),Bt("u3",t,e,Nt,0,i*2,s),Bt("cf1",t,e,Nt,-n,0,a),Bt("cf2",t,e,Nt,n,0,a),Bt("cf3",t,e,Nt,0,-i,a),Bt("cf4",t,e,Nt,0,i,a),Bt("cn1",t,e,Nt,-n,0,s),Bt("cn2",t,e,Nt,n,0,s),Bt("cn3",t,e,Nt,0,-i,s),Bt("cn4",t,e,Nt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bt(r,e,t,n,i,s,a){Ko.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,d=o.length;c<d;c++)l.setXYZ(o[c],Ko.x,Ko.y,Ko.z)}}class Cp extends Zi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ke;i.setAttribute("position",new nt(t,3)),i.setAttribute("color",new nt(n,3));const s=new Ln({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ye,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class fg extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pp(r,e,t,n){const i=nx(n);switch(t){case Bm:return r*e;case Nd:return r*e/i.components*i.byteLength;case Bd:return r*e/i.components*i.byteLength;case br:return r*e*2/i.components*i.byteLength;case zd:return r*e*2/i.components*i.byteLength;case zm:return r*e*3/i.components*i.byteLength;case Bn:return r*e*4/i.components*i.byteLength;case kd:return r*e*4/i.components*i.byteLength;case pl:case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gl:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Th:case Ch:return Math.max(r,16)*Math.max(e,8)/4;case Eh:case Ah:return Math.max(r,8)*Math.max(e,8)/2;case Ph:case Rh:case Lh:case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ih:case Dh:case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Jh:case $h:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qh:case ed:return Math.ceil(r/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nx(r){switch(r){case In:case Dm:return{byteLength:1,components:1};case fa:case Om:case Fi:return{byteLength:2,components:1};case Od:case Ud:return{byteLength:2,components:4};case yi:case Dd:case $n:return{byteLength:4,components:1};case Um:case Nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pg(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ix(r){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,d);else{h.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<h.length;f++){const p=h[u],y=h[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,h[u]=y)}h.length=u+1;for(let f=0,p=h.length;f<p;f++){const y=h[f];r.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ax=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,EM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:sx,alphahash_pars_fragment:rx,alphamap_fragment:ax,alphamap_pars_fragment:ox,alphatest_fragment:lx,alphatest_pars_fragment:cx,aomap_fragment:hx,aomap_pars_fragment:dx,batching_pars_vertex:ux,batching_vertex:fx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:yx,bumpmap_pars_fragment:_x,clipping_planes_fragment:xx,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:bx,color_fragment:Sx,color_pars_fragment:wx,color_pars_vertex:Ex,color_vertex:Tx,common:Ax,cube_uv_reflection_fragment:Cx,defaultnormal_vertex:Px,displacementmap_pars_vertex:Rx,displacementmap_vertex:Ix,emissivemap_fragment:Lx,emissivemap_pars_fragment:Fx,colorspace_fragment:Dx,colorspace_pars_fragment:Ox,envmap_fragment:Ux,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Bx,envmap_pars_vertex:zx,envmap_physical_pars_fragment:Jx,envmap_vertex:kx,fog_vertex:Vx,fog_pars_vertex:Hx,fog_fragment:Gx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:jx,lights_lambert_fragment:Yx,lights_lambert_pars_fragment:qx,lights_pars_begin:Zx,lights_toon_fragment:$x,lights_toon_pars_fragment:Kx,lights_phong_fragment:Qx,lights_phong_pars_fragment:ev,lights_physical_fragment:tv,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:cv,map_fragment:hv,map_pars_fragment:dv,map_particle_fragment:uv,map_particle_pars_fragment:fv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:yv,morphnormal_vertex:_v,morphtarget_pars_vertex:xv,morphtarget_vertex:vv,normal_fragment_begin:Mv,normal_fragment_maps:bv,normal_pars_fragment:Sv,normal_pars_vertex:wv,normal_vertex:Ev,normalmap_pars_fragment:Tv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Rv,opaque_fragment:Iv,packing:Lv,premultiplied_alpha_fragment:Fv,project_vertex:Dv,dithering_fragment:Ov,dithering_pars_fragment:Uv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:kv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Hv,skinbase_vertex:Gv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:jv,specularmap_fragment:Yv,specularmap_pars_fragment:qv,tonemapping_fragment:Zv,tonemapping_pars_fragment:Jv,transmission_fragment:$v,transmission_pars_fragment:Kv,uv_pars_fragment:Qv,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:sM,backgroundCube_vert:rM,backgroundCube_frag:aM,cube_vert:oM,cube_frag:lM,depth_vert:cM,depth_frag:hM,distance_vert:dM,distance_frag:uM,equirect_vert:fM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:yM,meshbasic_frag:_M,meshlambert_vert:xM,meshlambert_frag:vM,meshmatcap_vert:MM,meshmatcap_frag:bM,meshnormal_vert:SM,meshnormal_frag:wM,meshphong_vert:EM,meshphong_frag:TM,meshphysical_vert:AM,meshphysical_frag:CM,meshtoon_vert:PM,meshtoon_frag:RM,points_vert:IM,points_frag:LM,shadow_vert:FM,shadow_frag:DM,sprite_vert:OM,sprite_frag:UM},de={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ci={basic:{uniforms:un([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:un([de.common,de.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:un([de.lights,de.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ci.physical={uniforms:un([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Qo={r:0,b:0,g:0},gs=new Vt,NM=new Le;function BM(r,e,t,n,i,s,a){const o=new ye(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function y(_){let v=!1;const w=p(_);w===null?m(o,l):w&&w.isColor&&(m(w,1),v=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(_,v){const w=p(v);w&&(w.isCubeTexture||w.mapping===jl)?(d===void 0&&(d=new ae(new At(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:wr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),gs.copy(v.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(NM.makeRotationFromEuler(gs)),d.material.toneMapped=Xe.getTransfer(w.colorSpace)!==_t,(h!==w||u!==w.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=w,u=w.version,f=r.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ae(new Ir(2,2),new Dn({name:"BackgroundMaterial",uniforms:wr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,v){_.getRGB(Qo,$m(r)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,v,a)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(o,l)},render:y,addToRenderList:g,dispose:x}}function zM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(E,I,D,B,G){let H=!1;const V=h(B,D,I);s!==V&&(s=V,c(s.object)),H=f(E,B,D,G),H&&p(E,B,D,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(E,I,D,B),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function d(E){return r.deleteVertexArray(E)}function h(E,I,D){const B=D.wireframe===!0;let G=n[E.id];G===void 0&&(G={},n[E.id]=G);let H=G[I.id];H===void 0&&(H={},G[I.id]=H);let V=H[B];return V===void 0&&(V=u(l()),H[B]=V),V}function u(E){const I=[],D=[],B=[];for(let G=0;G<t;G++)I[G]=0,D[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:B,object:E,attributes:{},index:null}}function f(E,I,D,B){const G=s.attributes,H=I.attributes;let V=0;const z=D.getAttributes();for(const X in z)if(z[X].location>=0){const te=G[X];let ne=H[X];if(ne===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function p(E,I,D,B){const G={},H=I.attributes;let V=0;const z=D.getAttributes();for(const X in z)if(z[X].location>=0){let te=H[X];te===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(te=E.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),G[X]=ne,V++}s.attributes=G,s.attributesNum=V,s.index=B}function y(){const E=s.newAttributes;for(let I=0,D=E.length;I<D;I++)E[I]=0}function g(E){m(E,0)}function m(E,I){const D=s.newAttributes,B=s.enabledAttributes,G=s.attributeDivisors;D[E]=1,B[E]===0&&(r.enableVertexAttribArray(E),B[E]=1),G[E]!==I&&(r.vertexAttribDivisor(E,I),G[E]=I)}function x(){const E=s.newAttributes,I=s.enabledAttributes;for(let D=0,B=I.length;D<B;D++)I[D]!==E[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function _(E,I,D,B,G,H,V){V===!0?r.vertexAttribIPointer(E,I,D,G,H):r.vertexAttribPointer(E,I,D,B,G,H)}function v(E,I,D,B){y();const G=B.attributes,H=D.getAttributes(),V=I.defaultAttributeValues;for(const z in H){const X=H[z];if(X.location>=0){let K=G[z];if(K===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){const te=K.normalized,ne=K.itemSize,Ie=e.get(K);if(Ie===void 0)continue;const Ce=Ie.buffer,Qe=Ie.type,Ge=Ie.bytesPerElement,q=Qe===r.INT||Qe===r.UNSIGNED_INT||K.gpuType===Dd;if(K.isInterleavedBufferAttribute){const J=K.data,pe=J.stride,Ne=K.offset;if(J.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e,J.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let _e=0;_e<X.locationSize;_e++)_(X.location+_e,ne/X.locationSize,Qe,te,pe*Ge,(Ne+ne/X.locationSize*_e)*Ge,q)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)m(X.location+J,K.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<X.locationSize;J++)g(X.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let J=0;J<X.locationSize;J++)_(X.location+J,ne/X.locationSize,Qe,te,ne*Ge,ne/X.locationSize*J*Ge,q)}}else if(V!==void 0){const te=V[z];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(X.location,te);break;case 3:r.vertexAttrib3fv(X.location,te);break;case 4:r.vertexAttrib4fv(X.location,te);break;default:r.vertexAttrib1fv(X.location,te)}}}}x()}function w(){P();for(const E in n){const I=n[E];for(const D in I){const B=I[D];for(const G in B)d(B[G].object),delete B[G];delete I[D]}delete n[E]}}function S(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const D in I){const B=I[D];for(const G in B)d(B[G].object),delete B[G];delete I[D]}delete n[E.id]}function T(E){for(const I in n){const D=n[I];if(D[E.id]===void 0)continue;const B=D[E.id];for(const G in B)d(B[G].object),delete B[G];delete D[E.id]}}function P(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function kM(r,e,t){let n;function i(c){n=c}function s(c,d){r.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(r.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let p=0;p<h;p++)f+=d[p];t.update(f,n,1)}function l(c,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],d[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let p=0;for(let y=0;y<h;y++)p+=d[y]*u[y];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function VM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Bn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==In&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!P)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Re("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:w,samples:S}}function HM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ji,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const p=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?d(null):c();else{const x=s?0:n,_=x*4;let v=m.clippingState||null;l.value=v,v=d(p,u,_,f);for(let w=0;w!==_;++w)v[w]=t[w];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,p){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,p!==!0||g===null){const m=f+y*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=f;_!==y;++_,v+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function GM(r){let e=new WeakMap;function t(a,o){return o===wl?a.mapping=Cs:o===Sh&&(a.mapping=Mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wl||o===Sh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qm(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ji=4,Rp=[.125,.215,.35,.446,.526,.582],ws=20,WM=256,qr=new tu,Ip=new ye;let zc=null,kc=0,Vc=0,Hc=!1;const XM=new C;class Lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=XM}=s;zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,kc,Vc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Fi,format:Bn,colorSpace:fi,depthBuffer:!1},i=Fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jM(s)),this._blurMaterial=qM(s,e,t),this._ggxMaterial=YM(s,e,t)}return i}_compileMaterial(e){const t=new ae(new Ke,e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,i,s){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ip),h.toneMapping=zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new At,new on({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let m=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(Ip),m=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const w=this._cubeSize;tr(i,v*w,_>2?w:0,w,w),h.setRenderTarget(i),m&&h.render(y,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cs||e.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dp());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,f=h*u,{_lodMax:p}=this,y=this._sizeLods[n],g=3*y*(n>p-Ji?n-p+Ji:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,tr(s,g,m,3*y,2*y),i.setRenderTarget(s),i.render(o,qr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,tr(e,g,m,3*y,2*y),i.setRenderTarget(e),i.render(o,qr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[i];h.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ws-1),y=s/p,g=isFinite(s)?1+Math.floor(d*y):ws;g>ws&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);const m=[];let x=0;for(let T=0;T<ws;++T){const P=T/y,M=Math.exp(-P*P/2);m.push(M),T===0?x+=M:T<g&&(x+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;const v=this._sizeLods[i],w=3*v*(i>_-Ji?i-_+Ji:0),S=4*(this._cubeSize-v);tr(t,w,S,3*v,2*v),l.setRenderTarget(t),l.render(h,qr)}}function jM(r){const e=[],t=[],n=[];let i=r;const s=r-Ji+1+Rp.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ji?l=Rp[a-r+Ji-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,p=6,y=3,g=2,m=1,x=new Float32Array(y*p*f),_=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let S=0;S<f;S++){const T=S%3*2/3-1,P=S>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(M,y*p*S),_.set(u,g*p*S);const E=[S,S,S,S,S,S];v.set(E,m*p*S)}const w=new Ke;w.setAttribute("position",new Wt(x,y)),w.setAttribute("uv",new Wt(_,g)),w.setAttribute("faceIndex",new Wt(v,m)),n.push(new ae(w,null)),i>Ji&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Fp(r,e,t){const n=new gi(r,e,t);return n.texture.mapping=jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function YM(r,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ql(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function qM(r,e,t){const n=new Float32Array(ws),i=new C(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Dp(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Op(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZM(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wl||l===Sh,d=l===Cs||l===Mr;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Lp(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Lp(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function JM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ya("WebGLRenderer: "+n+" extension not supported."),i}}}function $M(r,e,t,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(h){const u=[],f=h.index,p=h.attributes.position;let y=0;if(f!==null){const x=f.array;y=f.version;for(let _=0,v=x.length;_<v;_+=3){const w=x[_+0],S=x[_+1],T=x[_+2];u.push(w,S,S,T,T,w)}}else if(p!==void 0){const x=p.array;y=p.version;for(let _=0,v=x.length/3-1;_<v;_+=3){const w=_+0,S=_+1,T=_+2;u.push(w,S,S,T,T,w)}}else return;const g=new(Vm(u)?Jm:jd)(u,1);g.version=y;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function KM(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,u*a,p),t.update(f,n,p))}function d(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function h(u,f,p,y){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,y,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*y[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function QM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function eb(r,e,t){const n=new WeakMap,i=new mt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var f=E;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),y===!0&&(v=2),g===!0&&(v=3);let w=o.attributes.position.count*v,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*S*4*h),P=new Ym(T,w,S,h);P.type=$n,P.needsUpdate=!0;const M=v*4;for(let I=0;I<h;I++){const D=m[I],B=x[I],G=_[I],H=w*S*4*I;for(let V=0;V<D.count;V++){const z=V*M;p===!0&&(i.fromBufferAttribute(D,V),T[H+z+0]=i.x,T[H+z+1]=i.y,T[H+z+2]=i.z,T[H+z+3]=0),y===!0&&(i.fromBufferAttribute(B,V),T[H+z+4]=i.x,T[H+z+5]=i.y,T[H+z+6]=i.z,T[H+z+7]=0),g===!0&&(i.fromBufferAttribute(G,V),T[H+z+8]=i.x,T[H+z+9]=i.y,T[H+z+10]=i.z,T[H+z+11]=G.itemSize===4?i.w:1)}}u={count:h,texture:P,size:new Ae(w,S)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const y=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",y),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function tb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const nb={[Am]:"LINEAR_TONE_MAPPING",[Cm]:"REINHARD_TONE_MAPPING",[Pm]:"CINEON_TONE_MAPPING",[Fd]:"ACES_FILMIC_TONE_MAPPING",[Im]:"AGX_TONE_MAPPING",[Lm]:"NEUTRAL_TONE_MAPPING",[Rm]:"CUSTOM_TONE_MAPPING"};function ib(r,e,t,n,i){const s=new gi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new gi(e,t,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new Ke;o.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new nt([0,2,0,0,2,0],2));const l=new g_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ae(o,l),d=new tu(-1,1,1,-1,0,1);let h=null,u=null,f=!1,p,y=null,g=[],m=!1;this.setSize=function(x,_){s.setSize(x,_),a.setSize(x,_);for(let v=0;v<g.length;v++){const w=g[v];w.setSize&&w.setSize(x,_)}},this.setEffects=function(x){g=x,m=g.length>0&&g[0].isRenderPass===!0;const _=s.width,v=s.height;for(let w=0;w<g.length;w++){const S=g[w];S.setSize&&S.setSize(_,v)}},this.begin=function(x,_){if(f||x.toneMapping===zn&&g.length===0)return!1;if(y=_,_!==null){const v=_.width,w=_.height;(s.width!==v||s.height!==w)&&this.setSize(v,w)}return m===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return m},this.end=function(x,_){x.toneMapping=p,f=!0;let v=s,w=a;for(let S=0;S<g.length;S++){const T=g[S];if(T.enabled!==!1&&(T.render(x,w,v,_),T.needsSwap!==!1)){const P=v;v=w,w=P}}if(h!==x.outputColorSpace||u!==x.toneMapping){h=x.outputColorSpace,u=x.toneMapping,l.defines={},Xe.getTransfer(h)===_t&&(l.defines.SRGB_TRANSFER="");const S=nb[u];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(y),x.render(c,d),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const mg=new Qt,yd=new _a(1,1),gg=new Ym,yg=new Ey,_g=new Km,Up=[],Np=[],Bp=new Float32Array(16),zp=new Float32Array(9),kp=new Float32Array(4);function Dr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Up[i];if(s===void 0&&(s=new Float32Array(i),Up[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zl(r,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function lb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(qt(t,n))return;kp.set(n),r.uniformMatrix2fv(this.addr,!1,kp),Zt(t,n)}}function cb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(qt(t,n))return;zp.set(n),r.uniformMatrix3fv(this.addr,!1,zp),Zt(t,n)}}function hb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(qt(t,n))return;Bp.set(n),r.uniformMatrix4fv(this.addr,!1,Bp),Zt(t,n)}}function db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function mb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function yb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function xb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yd.compareFunction=t.isReversedDepthBuffer()?Gd:Hd,s=yd):s=mg,t.setTexture2D(e||s,i)}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yg,i)}function Mb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_g,i)}function bb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gg,i)}function Sb(r){switch(r){case 5126:return sb;case 35664:return rb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return yb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return bb}}function wb(r,e){r.uniform1fv(this.addr,e)}function Eb(r,e){const t=Dr(e,this.size,2);r.uniform2fv(this.addr,t)}function Tb(r,e){const t=Dr(e,this.size,3);r.uniform3fv(this.addr,t)}function Ab(r,e){const t=Dr(e,this.size,4);r.uniform4fv(this.addr,t)}function Cb(r,e){const t=Dr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Pb(r,e){const t=Dr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Rb(r,e){const t=Dr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ib(r,e){r.uniform1iv(this.addr,e)}function Lb(r,e){r.uniform2iv(this.addr,e)}function Fb(r,e){r.uniform3iv(this.addr,e)}function Db(r,e){r.uniform4iv(this.addr,e)}function Ob(r,e){r.uniform1uiv(this.addr,e)}function Ub(r,e){r.uniform2uiv(this.addr,e)}function Nb(r,e){r.uniform3uiv(this.addr,e)}function Bb(r,e){r.uniform4uiv(this.addr,e)}function zb(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=yd:a=mg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function kb(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yg,s[a])}function Vb(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||_g,s[a])}function Hb(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||gg,s[a])}function Gb(r){switch(r){case 5126:return wb;case 35664:return Eb;case 35665:return Tb;case 35666:return Ab;case 35674:return Cb;case 35675:return Pb;case 35676:return Rb;case 5124:case 35670:return Ib;case 35667:case 35671:return Lb;case 35668:case 35672:return Fb;case 35669:case 35673:return Db;case 5125:return Ob;case 36294:return Ub;case 36295:return Nb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sb(t.type)}}class Xb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gb(t.type)}}class jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function Vp(r,e){r.seq.push(e),r.map[e.id]=e}function Yb(r,e,t){const n=r.name,i=n.length;for(Gc.lastIndex=0;;){const s=Gc.exec(n),a=Gc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vp(t,c===void 0?new Wb(o,r,e):new Xb(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new jb(o),Vp(t,h)),t=h}}}class xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yb(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Hp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qb=37297;let Zb=0;function Jb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Gp=new qe;function $b(r){Xe._getMatrix(Gp,Xe.workingColorSpace,r);const e=`mat3( ${Gp.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Al:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jb(r.getShaderSource(e),o)}else return s}function Kb(r,e){const t=$b(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Qb={[Am]:"Linear",[Cm]:"Reinhard",[Pm]:"Cineon",[Fd]:"ACESFilmic",[Im]:"AgX",[Lm]:"Neutral",[Rm]:"Custom"};function eS(r,e){const t=Qb[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const el=new C;function tS(){Xe.getLuminanceCoefficients(el);const r=el.x.toFixed(4),e=el.y.toFixed(4),t=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function iS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function na(r){return r!==""}function Xp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(r){return r.replace(rS,oS)}const aS=new Map;function oS(r,e){let t=We[e];if(t===void 0){const n=aS.get(e);if(n!==void 0)t=We[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _d(t)}const lS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(r){return r.replace(lS,cS)}function cS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hS={[fl]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function dS(r){return hS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uS={[Cs]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[jl]:"ENVMAP_TYPE_CUBE_UV"};function fS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":uS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const pS={[Mr]:"ENVMAP_MODE_REFRACTION"};function mS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":pS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gS={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[G0]:"ENVMAP_BLENDING_MIX",[W0]:"ENVMAP_BLENDING_ADD"};function yS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":gS[r.combine]||"ENVMAP_BLENDING_NONE"}function _S(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dS(t),c=fS(t),d=mS(t),h=yS(t),u=_S(t),f=nS(t),p=iS(s),y=i.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(na).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(na).join(`
`),m.length>0&&(m+=`
`)):(g=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),m=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?We.tonemapping_pars_fragment:"",t.toneMapping!==zn?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Kb("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),a=_d(a),a=Xp(a,t),a=jp(a,t),o=_d(o),o=Xp(o,t),o=jp(o,t),a=Yp(a),o=Yp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=x+g+a,v=x+m+o,w=Hp(i,i.VERTEX_SHADER,_),S=Hp(i,i.FRAGMENT_SHADER,v);i.attachShader(y,w),i.attachShader(y,S),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function T(I){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(y)||"",B=i.getShaderInfoLog(w)||"",G=i.getShaderInfoLog(S)||"",H=D.trim(),V=B.trim(),z=G.trim();let X=!0,K=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,w,S);else{const te=Wp(i,w,"vertex"),ne=Wp(i,S,"fragment");Oe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+te+`
`+ne)}else H!==""?Re("WebGLProgram: Program Info Log:",H):(V===""||z==="")&&(K=!1);K&&(I.diagnostics={runnable:X,programLog:H,vertexShader:{log:V,prefix:g},fragmentShader:{log:z,prefix:m}})}i.deleteShader(w),i.deleteShader(S),P=new xl(i,y),M=sS(i,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(y,qb)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=S,this}let vS=0;class MS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bS(e),t.set(e,n)),n}}class bS{constructor(e){this.id=vS++,this.code=e,this.usedTimes=0}}function SS(r,e,t,n,i,s,a){const o=new As,l=new MS,c=new Set,d=[],h=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,E,I,D,B){const G=D.fog,H=B.geometry,V=M.isMeshStandardMaterial?D.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),X=z&&z.mapping===jl?z.image.height:null,K=p[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&Re("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=te!==void 0?te.length:0;let Ie=0;H.morphAttributes.position!==void 0&&(Ie=1),H.morphAttributes.normal!==void 0&&(Ie=2),H.morphAttributes.color!==void 0&&(Ie=3);let Ce,Qe,Ge,q;if(K){const gt=ci[K];Ce=gt.vertexShader,Qe=gt.fragmentShader}else Ce=M.vertexShader,Qe=M.fragmentShader,l.update(M),Ge=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const J=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Ne=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,Ze=!!M.map,Tt=!!M.matcap,Ye=!!z,ot=!!M.aoMap,ut=!!M.lightMap,Ve=!!M.bumpMap,Pt=!!M.normalMap,F=!!M.displacementMap,Rt=!!M.emissiveMap,at=!!M.metalnessMap,ht=!!M.roughnessMap,Me=M.anisotropy>0,R=M.clearcoat>0,b=M.dispersion>0,U=M.iridescence>0,Z=M.sheen>0,$=M.transmission>0,Y=Me&&!!M.anisotropyMap,be=R&&!!M.clearcoatMap,ee=R&&!!M.clearcoatNormalMap,Ee=R&&!!M.clearcoatRoughnessMap,ze=U&&!!M.iridescenceMap,se=U&&!!M.iridescenceThicknessMap,ce=Z&&!!M.sheenColorMap,we=Z&&!!M.sheenRoughnessMap,Te=!!M.specularMap,le=!!M.specularColorMap,Je=!!M.specularIntensityMap,O=$&&!!M.transmissionMap,fe=$&&!!M.thicknessMap,re=!!M.gradientMap,me=!!M.alphaMap,ie=M.alphaTest>0,Q=!!M.alphaHash,oe=!!M.extensions;let ke=zn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=r.toneMapping);const wt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Ce,fragmentShader:Qe,defines:M.defines,customVertexShaderID:Ge,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:fi,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:Tt,envMap:Ye,envMapMode:Ye&&z.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:ut,bumpMap:Ve,normalMap:Pt,displacementMap:F,emissiveMap:Rt,normalMapObjectSpace:Pt&&M.normalMapType===Z0,normalMapTangentSpace:Pt&&M.normalMapType===oo,metalnessMap:at,roughnessMap:ht,anisotropy:Me,anisotropyMap:Y,clearcoat:R,clearcoatMap:be,clearcoatNormalMap:ee,clearcoatRoughnessMap:Ee,dispersion:b,iridescence:U,iridescenceMap:ze,iridescenceThicknessMap:se,sheen:Z,sheenColorMap:ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:le,specularIntensityMap:Je,transmission:$,transmissionMap:O,thicknessMap:fe,gradientMap:re,opaque:M.transparent===!1&&M.blending===mr&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:ie,alphaHash:Q,combine:M.combine,mapUv:Ze&&y(M.map.channel),aoMapUv:ot&&y(M.aoMap.channel),lightMapUv:ut&&y(M.lightMap.channel),bumpMapUv:Ve&&y(M.bumpMap.channel),normalMapUv:Pt&&y(M.normalMap.channel),displacementMapUv:F&&y(M.displacementMap.channel),emissiveMapUv:Rt&&y(M.emissiveMap.channel),metalnessMapUv:at&&y(M.metalnessMap.channel),roughnessMapUv:ht&&y(M.roughnessMap.channel),anisotropyMapUv:Y&&y(M.anisotropyMap.channel),clearcoatMapUv:be&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(M.sheenRoughnessMap.channel),specularMapUv:Te&&y(M.specularMap.channel),specularColorMapUv:le&&y(M.specularColorMap.channel),specularIntensityMapUv:Je&&y(M.specularIntensityMap.channel),transmissionMapUv:O&&y(M.transmissionMap.channel),thicknessMapUv:fe&&y(M.thicknessMap.channel),alphaMapUv:me&&y(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||Me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Ze||me),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&Xe.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:Rt&&M.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&M.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(E,M),_(E,M),E.push(r.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const E=p[M.type];let I;if(E){const D=ci[E];I=By.clone(D.uniforms)}else I=M.uniforms;return I}function w(M,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new xS(r,E,M,s),d.push(I),h.set(E,I)),I}function S(M){if(--M.usedTimes===0){const E=d.indexOf(M);d[E]=d[d.length-1],d.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:d,dispose:P}}function wS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ES(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,f,p,y,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:u,material:f,groupOrder:p,renderOrder:h.renderOrder,z:y,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=y,m.group=g),e++,m}function o(h,u,f,p,y,g){const m=a(h,u,f,p,y,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,u,f,p,y,g){const m=a(h,u,f,p,y,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,u){t.length>1&&t.sort(h||ES),n.length>1&&n.sort(u||Zp),i.length>1&&i.sort(u||Zp)}function d(){for(let h=e,u=r.length;h<u;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:c}}function TS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Jp,r.set(n,[a])):i>=s.length?(a=new Jp,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function AS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ye};break;case"SpotLight":t={position:new C,direction:new C,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function CS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let PS=0;function RS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function IS(r){const e=new AS,t=CS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,s=new Le,a=new Le;function o(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,x=0,_=0,v=0,w=0,S=0,T=0;c.sort(RS);for(let M=0,E=c.length;M<E;M++){const I=c[M],D=I.color,B=I.intensity,G=I.distance;let H=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===br?H=I.shadow.map.texture:H=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=D.r*B,h+=D.g*B,u+=D.b*B;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],B);T++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,X=t.get(I);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=V,f++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(D).multiplyScalar(B),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[y]=V;const z=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,z.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[y]=z.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=H,v++}y++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(D).multiplyScalar(B),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=V,g++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const z=I.shadow,X=t.get(I);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=I.shadow.matrix,_++}n.point[p]=V,p++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(B),V.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[m]=V,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.directionalLength=f,P.pointLength=p,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=T,n.version=PS++)}function l(c,d){let h=0,u=0,f=0,p=0,y=0;const g=d.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const _=c[m];if(_.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(_.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function $p(r){const e=new IS(r),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function LS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new $p(r),e.set(i,[o])):s>=a.length?(o=new $p(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const FS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],US=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Kp=new Le,Zr=new C,Wc=new C;function NS(r,e,t){let n=new Jd;const i=new Ae,s=new Ae,a=new mt,o=new v_,l=new M_,c={},d=t.maxTextureSize,h={[is]:Mn,[Mn]:is,[mn]:mn},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:FS,fragmentShader:DS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ke;p.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ae(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let m=this.type;this.render=function(S,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;S.type===Tm&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),S.type=fl);const M=r.getRenderTarget(),E=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=m!==this.type;B&&T.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(H=>H.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,H=S.length;G<H;G++){const V=S[G],z=V.shadow;if(z===void 0){Re("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),s.copy(z.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/X.x),i.x=s.x*X.x,z.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/X.y),i.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Qr){if(V.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new gi(i.x,i.y,{format:br,type:Fi,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new _a(i.x,i.y,$n),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=Di,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt}else{V.isPointLight?(z.map=new Qm(i.x),z.map.depthTexture=new Jy(i.x,yi)):(z.map=new gi(i.x,i.y),z.map.depthTexture=new _a(i.x,i.y,yi)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=Di;const te=r.state.buffers.depth.getReversed();this.type===fl?(z.map.depthTexture.compareFunction=te?Gd:Hd,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt)}z.camera.updateProjectionMatrix()}const K=z.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<K;te++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,te),r.clear();else{te===0&&(r.setRenderTarget(z.map),r.clear());const ne=z.getViewport(te);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),D.viewport(a)}if(V.isPointLight){const ne=z.camera,Ie=z.matrix,Ce=V.distance||ne.far;Ce!==ne.far&&(ne.far=Ce,ne.updateProjectionMatrix()),Zr.setFromMatrixPosition(V.matrixWorld),ne.position.copy(Zr),Wc.copy(ne.position),Wc.add(OS[te]),ne.up.copy(US[te]),ne.lookAt(Wc),ne.updateMatrixWorld(),Ie.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Kp.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Kp,ne.coordinateSystem,ne.reversedDepth)}else z.updateMatrices(V);n=z.getFrustum(),v(T,P,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Qr&&x(z,P),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(M,E,I)};function x(S,T){const P=e.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new gi(i.x,i.y,{format:br,type:Fi})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,P,u,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,P,f,y,null)}function _(S,T,P,M){let E=null;const I=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=E.uuid,B=T.uuid;let G=c[D];G===void 0&&(G={},c[D]=G);let H=G[B];H===void 0&&(H=E.clone(),G[B]=H,T.addEventListener("dispose",w)),E=H}if(E.visible=T.visible,E.wireframe=T.wireframe,M===Qr?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=r.properties.get(E);D.light=P}return E}function v(S,T,P,M,E){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Qr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const B=e.update(S),G=S.material;if(Array.isArray(G)){const H=B.groups;for(let V=0,z=H.length;V<z;V++){const X=H[V],K=G[X.materialIndex];if(K&&K.visible){const te=_(S,K,M,E);S.onBeforeShadow(r,S,T,P,B,te,X),r.renderBufferDirect(P,null,B,te,S,X),S.onAfterShadow(r,S,T,P,B,te,X)}}}else if(G.visible){const H=_(S,G,M,E);S.onBeforeShadow(r,S,T,P,B,H,null),r.renderBufferDirect(P,null,B,H,S,null),S.onAfterShadow(r,S,T,P,B,H,null)}}const D=S.children;for(let B=0,G=D.length;B<G;B++)v(D[B],T,P,M,E)}function w(S){S.target.removeEventListener("dispose",w);for(const P in c){const M=c[P],E=S.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const BS={[gh]:yh,[_h]:Mh,[xh]:bh,[vr]:vh,[yh]:gh,[Mh]:_h,[bh]:xh,[vh]:vr};function zS(r,e){function t(){let O=!1;const fe=new mt;let re=null;const me=new mt(0,0,0,0);return{setMask:function(ie){re!==ie&&!O&&(r.colorMask(ie,ie,ie,ie),re=ie)},setLocked:function(ie){O=ie},setClear:function(ie,Q,oe,ke,wt){wt===!0&&(ie*=ke,Q*=ke,oe*=ke),fe.set(ie,Q,oe,ke),me.equals(fe)===!1&&(r.clearColor(ie,Q,oe,ke),me.copy(fe))},reset:function(){O=!1,re=null,me.set(-1,0,0,0)}}}function n(){let O=!1,fe=!1,re=null,me=null,ie=null;return{setReversed:function(Q){if(fe!==Q){const oe=e.get("EXT_clip_control");Q?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),fe=Q;const ke=ie;ie=null,this.setClear(ke)}},getReversed:function(){return fe},setTest:function(Q){Q?J(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(Q){re!==Q&&!O&&(r.depthMask(Q),re=Q)},setFunc:function(Q){if(fe&&(Q=BS[Q]),me!==Q){switch(Q){case gh:r.depthFunc(r.NEVER);break;case yh:r.depthFunc(r.ALWAYS);break;case _h:r.depthFunc(r.LESS);break;case vr:r.depthFunc(r.LEQUAL);break;case xh:r.depthFunc(r.EQUAL);break;case vh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Q}},setLocked:function(Q){O=Q},setClear:function(Q){ie!==Q&&(fe&&(Q=1-Q),r.clearDepth(Q),ie=Q)},reset:function(){O=!1,re=null,me=null,ie=null,fe=!1}}}function i(){let O=!1,fe=null,re=null,me=null,ie=null,Q=null,oe=null,ke=null,wt=null;return{setTest:function(gt){O||(gt?J(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(gt){fe!==gt&&!O&&(r.stencilMask(gt),fe=gt)},setFunc:function(gt,si,vi){(re!==gt||me!==si||ie!==vi)&&(r.stencilFunc(gt,si,vi),re=gt,me=si,ie=vi)},setOp:function(gt,si,vi){(Q!==gt||oe!==si||ke!==vi)&&(r.stencilOp(gt,si,vi),Q=gt,oe=si,ke=vi)},setLocked:function(gt){O=gt},setClear:function(gt){wt!==gt&&(r.clearStencil(gt),wt=gt)},reset:function(){O=!1,fe=null,re=null,me=null,ie=null,Q=null,oe=null,ke=null,wt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,f=[],p=null,y=!1,g=null,m=null,x=null,_=null,v=null,w=null,S=null,T=new ye(0,0,0),P=0,M=!1,E=null,I=null,D=null,B=null,G=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=z>=2);let K=null,te={};const ne=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Ce=new mt().fromArray(ne),Qe=new mt().fromArray(Ie);function Ge(O,fe,re,me){const ie=new Uint8Array(4),Q=r.createTexture();r.bindTexture(O,Q),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<re;oe++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(fe+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return Q}const q={};q[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(r.DEPTH_TEST),a.setFunc(vr),Ve(!1),Pt(Df),J(r.CULL_FACE),ot(Ri);function J(O){d[O]!==!0&&(r.enable(O),d[O]=!0)}function pe(O){d[O]!==!1&&(r.disable(O),d[O]=!1)}function Ne(O,fe){return h[O]!==fe?(r.bindFramebuffer(O,fe),h[O]=fe,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=fe),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function _e(O,fe){let re=f,me=!1;if(O){re=u.get(fe),re===void 0&&(re=[],u.set(fe,re));const ie=O.textures;if(re.length!==ie.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,oe=ie.length;Q<oe;Q++)re[Q]=r.COLOR_ATTACHMENT0+Q;re.length=ie.length,me=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,me=!0);me&&r.drawBuffers(re)}function Ze(O){return p!==O?(r.useProgram(O),p=O,!0):!1}const Tt={[bs]:r.FUNC_ADD,[T0]:r.FUNC_SUBTRACT,[A0]:r.FUNC_REVERSE_SUBTRACT};Tt[C0]=r.MIN,Tt[P0]=r.MAX;const Ye={[R0]:r.ZERO,[I0]:r.ONE,[L0]:r.SRC_COLOR,[ph]:r.SRC_ALPHA,[B0]:r.SRC_ALPHA_SATURATE,[U0]:r.DST_COLOR,[D0]:r.DST_ALPHA,[F0]:r.ONE_MINUS_SRC_COLOR,[mh]:r.ONE_MINUS_SRC_ALPHA,[N0]:r.ONE_MINUS_DST_COLOR,[O0]:r.ONE_MINUS_DST_ALPHA,[z0]:r.CONSTANT_COLOR,[k0]:r.ONE_MINUS_CONSTANT_COLOR,[V0]:r.CONSTANT_ALPHA,[H0]:r.ONE_MINUS_CONSTANT_ALPHA};function ot(O,fe,re,me,ie,Q,oe,ke,wt,gt){if(O===Ri){y===!0&&(pe(r.BLEND),y=!1);return}if(y===!1&&(J(r.BLEND),y=!0),O!==E0){if(O!==g||gt!==M){if((m!==bs||v!==bs)&&(r.blendEquation(r.FUNC_ADD),m=bs,v=bs),gt)switch(O){case mr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xr:r.blendFunc(r.ONE,r.ONE);break;case Of:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Oe("WebGLState: Invalid blending: ",O);break}else switch(O){case mr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Of:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uf:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",O);break}x=null,_=null,w=null,S=null,T.set(0,0,0),P=0,g=O,M=gt}return}ie=ie||fe,Q=Q||re,oe=oe||me,(fe!==m||ie!==v)&&(r.blendEquationSeparate(Tt[fe],Tt[ie]),m=fe,v=ie),(re!==x||me!==_||Q!==w||oe!==S)&&(r.blendFuncSeparate(Ye[re],Ye[me],Ye[Q],Ye[oe]),x=re,_=me,w=Q,S=oe),(ke.equals(T)===!1||wt!==P)&&(r.blendColor(ke.r,ke.g,ke.b,wt),T.copy(ke),P=wt),g=O,M=!1}function ut(O,fe){O.side===mn?pe(r.CULL_FACE):J(r.CULL_FACE);let re=O.side===Mn;fe&&(re=!re),Ve(re),O.blending===mr&&O.transparent===!1?ot(Ri):ot(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const me=O.stencilWrite;o.setTest(me),me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Rt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(O){E!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),E=O)}function Pt(O){O!==S0?(J(r.CULL_FACE),O!==I&&(O===Df?r.cullFace(r.BACK):O===w0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),I=O}function F(O){O!==D&&(V&&r.lineWidth(O),D=O)}function Rt(O,fe,re){O?(J(r.POLYGON_OFFSET_FILL),(B!==fe||G!==re)&&(r.polygonOffset(fe,re),B=fe,G=re)):pe(r.POLYGON_OFFSET_FILL)}function at(O){O?J(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function ht(O){O===void 0&&(O=r.TEXTURE0+H-1),K!==O&&(r.activeTexture(O),K=O)}function Me(O,fe,re){re===void 0&&(K===null?re=r.TEXTURE0+H-1:re=K);let me=te[re];me===void 0&&(me={type:void 0,texture:void 0},te[re]=me),(me.type!==O||me.texture!==fe)&&(K!==re&&(r.activeTexture(re),K=re),r.bindTexture(O,fe||q[O]),me.type=O,me.texture=fe)}function R(){const O=te[K];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function Z(){try{r.texSubImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function $(){try{r.texSubImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ee(){try{r.texStorage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function Ee(){try{r.texStorage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ze(){try{r.texImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function se(){try{r.texImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ce(O){Ce.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Ce.copy(O))}function we(O){Qe.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Qe.copy(O))}function Te(O,fe){let re=c.get(fe);re===void 0&&(re=new WeakMap,c.set(fe,re));let me=re.get(O);me===void 0&&(me=r.getUniformBlockIndex(fe,O.name),re.set(O,me))}function le(O,fe){const me=c.get(fe).get(O);l.get(fe)!==me&&(r.uniformBlockBinding(fe,me,O.__bindingPointIndex),l.set(fe,me))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},K=null,te={},h={},u=new WeakMap,f=[],p=null,y=!1,g=null,m=null,x=null,_=null,v=null,w=null,S=null,T=new ye(0,0,0),P=0,M=!1,E=null,I=null,D=null,B=null,G=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:pe,bindFramebuffer:Ne,drawBuffers:_e,useProgram:Ze,setBlending:ot,setMaterial:ut,setFlipSided:Ve,setCullFace:Pt,setLineWidth:F,setPolygonOffset:Rt,setScissorTest:at,activeTexture:ht,bindTexture:Me,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:ze,texImage3D:se,updateUBOMapping:Te,uniformBlockBinding:le,texStorage2D:ee,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:be,scissor:ce,viewport:we,reset:Je}}function kS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):ga("canvas")}function y(R,b,U){let Z=1;const $=Me(R);if(($.width>U||$.height>U)&&(Z=U/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(Z*$.width),be=Math.floor(Z*$.height);h===void 0&&(h=p(Y,be));const ee=b?p(Y,be):h;return ee.width=Y,ee.height=be,ee.getContext("2d").drawImage(R,0,0,Y,be),Re("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+be+")."),ee}else return"data"in R&&Re("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(R,b,U,Z,$=!1){if(R!==null){if(r[R]!==void 0)return r[R];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===r.RED&&(U===r.FLOAT&&(Y=r.R32F),U===r.HALF_FLOAT&&(Y=r.R16F),U===r.UNSIGNED_BYTE&&(Y=r.R8)),b===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.R8UI),U===r.UNSIGNED_SHORT&&(Y=r.R16UI),U===r.UNSIGNED_INT&&(Y=r.R32UI),U===r.BYTE&&(Y=r.R8I),U===r.SHORT&&(Y=r.R16I),U===r.INT&&(Y=r.R32I)),b===r.RG&&(U===r.FLOAT&&(Y=r.RG32F),U===r.HALF_FLOAT&&(Y=r.RG16F),U===r.UNSIGNED_BYTE&&(Y=r.RG8)),b===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RG8UI),U===r.UNSIGNED_SHORT&&(Y=r.RG16UI),U===r.UNSIGNED_INT&&(Y=r.RG32UI),U===r.BYTE&&(Y=r.RG8I),U===r.SHORT&&(Y=r.RG16I),U===r.INT&&(Y=r.RG32I)),b===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),U===r.UNSIGNED_INT&&(Y=r.RGB32UI),U===r.BYTE&&(Y=r.RGB8I),U===r.SHORT&&(Y=r.RGB16I),U===r.INT&&(Y=r.RGB32I)),b===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),U===r.UNSIGNED_INT&&(Y=r.RGBA32UI),U===r.BYTE&&(Y=r.RGBA8I),U===r.SHORT&&(Y=r.RGBA16I),U===r.INT&&(Y=r.RGBA32I)),b===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),b===r.RGBA){const be=$?Al:Xe.getTransfer(Z);U===r.FLOAT&&(Y=r.RGBA32F),U===r.HALF_FLOAT&&(Y=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Y=be===_t?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(R,b){let U;return R?b===null||b===yi||b===pa?U=r.DEPTH24_STENCIL8:b===$n?U=r.DEPTH32F_STENCIL8:b===fa&&(U=r.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===pa?U=r.DEPTH_COMPONENT24:b===$n?U=r.DEPTH_COMPONENT32F:b===fa&&(U=r.DEPTH_COMPONENT16),U}function w(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==Kt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function S(R){const b=R.target;b.removeEventListener("dispose",S),P(b),b.isVideoTexture&&d.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),E(b)}function P(R){const b=n.get(R);if(b.__webglInit===void 0)return;const U=R.source,Z=u.get(U);if(Z){const $=Z[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(R),Object.keys(Z).length===0&&u.delete(U)}n.remove(R)}function M(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const U=R.source,Z=u.get(U);delete Z[b.__cacheKey],a.memory.textures--}function E(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let $=0;$<b.__webglFramebuffer[Z].length;$++)r.deleteFramebuffer(b.__webglFramebuffer[Z][$]);else r.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)r.deleteFramebuffer(b.__webglFramebuffer[Z]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const U=R.textures;for(let Z=0,$=U.length;Z<$;Z++){const Y=n.get(U[Z]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(U[Z])}n.remove(R)}let I=0;function D(){I=0}function B(){const R=I;return R>=i.maxTextures&&Re("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function G(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function H(R,b){const U=n.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const Z=R.image;if(Z===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,R,b);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+b)}function V(R,b){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){q(U,R,b);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+b)}function z(R,b){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){q(U,R,b);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+b)}function X(R,b){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){J(U,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+b)}const K={[Pn]:r.REPEAT,[Jn]:r.CLAMP_TO_EDGE,[wh]:r.MIRRORED_REPEAT},te={[Yt]:r.NEAREST,[j0]:r.NEAREST_MIPMAP_NEAREST,[bo]:r.NEAREST_MIPMAP_LINEAR,[Kt]:r.LINEAR,[cc]:r.LINEAR_MIPMAP_NEAREST,[Ai]:r.LINEAR_MIPMAP_LINEAR},ne={[J0]:r.NEVER,[ty]:r.ALWAYS,[$0]:r.LESS,[Hd]:r.LEQUAL,[K0]:r.EQUAL,[Gd]:r.GEQUAL,[Q0]:r.GREATER,[ey]:r.NOTEQUAL};function Ie(R,b){if(b.type===$n&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kt||b.magFilter===cc||b.magFilter===bo||b.magFilter===Ai||b.minFilter===Kt||b.minFilter===cc||b.minFilter===bo||b.minFilter===Ai)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,K[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,K[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,K[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,te[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,te[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yt||b.minFilter!==bo&&b.minFilter!==Ai||b.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ce(R,b){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",S));const Z=b.source;let $=u.get(Z);$===void 0&&($={},u.set(Z,$));const Y=G(b);if(Y!==R.__cacheKey){$[Y]===void 0&&($[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[Y].usedTimes++;const be=$[R.__cacheKey];be!==void 0&&($[R.__cacheKey].usedTimes--,be.usedTimes===0&&M(b)),R.__cacheKey=Y,R.__webglTexture=$[Y].texture}return U}function Qe(R,b,U){return Math.floor(Math.floor(R/U)/b)}function Ge(R,b,U,Z){const Y=R.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,U,Z,b.data);else{Y.sort((se,ce)=>se.start-ce.start);let be=0;for(let se=1;se<Y.length;se++){const ce=Y[be],we=Y[se],Te=ce.start+ce.count,le=Qe(we.start,b.width,4),Je=Qe(ce.start,b.width,4);we.start<=Te+1&&le===Je&&Qe(we.start+we.count-1,b.width,4)===le?ce.count=Math.max(ce.count,we.start+we.count-ce.start):(++be,Y[be]=we)}Y.length=be+1;const ee=r.getParameter(r.UNPACK_ROW_LENGTH),Ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let se=0,ce=Y.length;se<ce;se++){const we=Y[se],Te=Math.floor(we.start/4),le=Math.ceil(we.count/4),Je=Te%b.width,O=Math.floor(Te/b.width),fe=le,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Je,O,fe,re,U,Z,b.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ee),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ze)}}function q(R,b,U){let Z=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=r.TEXTURE_3D);const $=Ce(R,b),Y=b.source;t.bindTexture(Z,R.__webglTexture,r.TEXTURE0+U);const be=n.get(Y);if(Y.version!==be.__version||$===!0){t.activeTexture(r.TEXTURE0+U);const ee=Xe.getPrimaries(Xe.workingColorSpace),Ee=b.colorSpace===Yi?null:Xe.getPrimaries(b.colorSpace),ze=b.colorSpace===Yi||ee===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let se=y(b.image,!1,i.maxTextureSize);se=ht(b,se);const ce=s.convert(b.format,b.colorSpace),we=s.convert(b.type);let Te=_(b.internalFormat,ce,we,b.colorSpace,b.isVideoTexture);Ie(Z,b);let le;const Je=b.mipmaps,O=b.isVideoTexture!==!0,fe=be.__version===void 0||$===!0,re=Y.dataReady,me=w(b,se);if(b.isDepthTexture)Te=v(b.format===Es,b.type),fe&&(O?t.texStorage2D(r.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Te,se.width,se.height,0,ce,we,null));else if(b.isDataTexture)if(Je.length>0){O&&fe&&t.texStorage2D(r.TEXTURE_2D,me,Te,Je[0].width,Je[0].height);for(let ie=0,Q=Je.length;ie<Q;ie++)le=Je[ie],O?re&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,le.width,le.height,ce,we,le.data):t.texImage2D(r.TEXTURE_2D,ie,Te,le.width,le.height,0,ce,we,le.data);b.generateMipmaps=!1}else O?(fe&&t.texStorage2D(r.TEXTURE_2D,me,Te,se.width,se.height),re&&Ge(b,se,ce,we)):t.texImage2D(r.TEXTURE_2D,0,Te,se.width,se.height,0,ce,we,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Te,Je[0].width,Je[0].height,se.depth);for(let ie=0,Q=Je.length;ie<Q;ie++)if(le=Je[ie],b.format!==Bn)if(ce!==null)if(O){if(re)if(b.layerUpdates.size>0){const oe=Pp(le.width,le.height,b.format,b.type);for(const ke of b.layerUpdates){const wt=le.data.subarray(ke*oe/le.data.BYTES_PER_ELEMENT,(ke+1)*oe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,ke,le.width,le.height,1,ce,wt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,se.depth,ce,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Te,le.width,le.height,se.depth,0,le.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,se.depth,ce,we,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Te,le.width,le.height,se.depth,0,ce,we,le.data)}else{O&&fe&&t.texStorage2D(r.TEXTURE_2D,me,Te,Je[0].width,Je[0].height);for(let ie=0,Q=Je.length;ie<Q;ie++)le=Je[ie],b.format!==Bn?ce!==null?O?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Te,le.width,le.height,0,le.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?re&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,le.width,le.height,ce,we,le.data):t.texImage2D(r.TEXTURE_2D,ie,Te,le.width,le.height,0,ce,we,le.data)}else if(b.isDataArrayTexture)if(O){if(fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Te,se.width,se.height,se.depth),re)if(b.layerUpdates.size>0){const ie=Pp(se.width,se.height,b.format,b.type);for(const Q of b.layerUpdates){const oe=se.data.subarray(Q*ie/se.data.BYTES_PER_ELEMENT,(Q+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ce,we,oe)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ce,we,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,ce,we,se.data);else if(b.isData3DTexture)O?(fe&&t.texStorage3D(r.TEXTURE_3D,me,Te,se.width,se.height,se.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ce,we,se.data)):t.texImage3D(r.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,ce,we,se.data);else if(b.isFramebufferTexture){if(fe)if(O)t.texStorage2D(r.TEXTURE_2D,me,Te,se.width,se.height);else{let ie=se.width,Q=se.height;for(let oe=0;oe<me;oe++)t.texImage2D(r.TEXTURE_2D,oe,Te,ie,Q,0,ce,we,null),ie>>=1,Q>>=1}}else if(Je.length>0){if(O&&fe){const ie=Me(Je[0]);t.texStorage2D(r.TEXTURE_2D,me,Te,ie.width,ie.height)}for(let ie=0,Q=Je.length;ie<Q;ie++)le=Je[ie],O?re&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ce,we,le):t.texImage2D(r.TEXTURE_2D,ie,Te,ce,we,le);b.generateMipmaps=!1}else if(O){if(fe){const ie=Me(se);t.texStorage2D(r.TEXTURE_2D,me,Te,ie.width,ie.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,we,se)}else t.texImage2D(r.TEXTURE_2D,0,Te,ce,we,se);g(b)&&m(Z),be.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,U){if(b.image.length!==6)return;const Z=Ce(R,b),$=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);const Y=n.get($);if($.version!==Y.__version||Z===!0){t.activeTexture(r.TEXTURE0+U);const be=Xe.getPrimaries(Xe.workingColorSpace),ee=b.colorSpace===Yi?null:Xe.getPrimaries(b.colorSpace),Ee=b.colorSpace===Yi||be===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ze=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!ze&&!se?ce[Q]=y(b.image[Q],!0,i.maxCubemapSize):ce[Q]=se?b.image[Q].image:b.image[Q],ce[Q]=ht(b,ce[Q]);const we=ce[0],Te=s.convert(b.format,b.colorSpace),le=s.convert(b.type),Je=_(b.internalFormat,Te,le,b.colorSpace),O=b.isVideoTexture!==!0,fe=Y.__version===void 0||Z===!0,re=$.dataReady;let me=w(b,we);Ie(r.TEXTURE_CUBE_MAP,b);let ie;if(ze){O&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Je,we.width,we.height);for(let Q=0;Q<6;Q++){ie=ce[Q].mipmaps;for(let oe=0;oe<ie.length;oe++){const ke=ie[oe];b.format!==Bn?Te!==null?O?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,0,0,ke.width,ke.height,Te,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,Je,ke.width,ke.height,0,ke.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,0,0,ke.width,ke.height,Te,le,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,Je,ke.width,ke.height,0,Te,le,ke.data)}}}else{if(ie=b.mipmaps,O&&fe){ie.length>0&&me++;const Q=Me(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,Te,le,ce[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,ce[Q].width,ce[Q].height,0,Te,le,ce[Q].data);for(let oe=0;oe<ie.length;oe++){const wt=ie[oe].image[Q].image;O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,0,0,wt.width,wt.height,Te,le,wt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,Je,wt.width,wt.height,0,Te,le,wt.data)}}else{O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te,le,ce[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Te,le,ce[Q]);for(let oe=0;oe<ie.length;oe++){const ke=ie[oe];O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,0,0,Te,le,ke.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,Je,Te,le,ke.image[Q])}}}g(b)&&m(r.TEXTURE_CUBE_MAP),Y.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function pe(R,b,U,Z,$,Y){const be=s.convert(U.format,U.colorSpace),ee=s.convert(U.type),Ee=_(U.internalFormat,be,ee,U.colorSpace),ze=n.get(b),se=n.get(U);if(se.__renderTarget=b,!ze.__hasExternalTextures){const ce=Math.max(1,b.width>>Y),we=Math.max(1,b.height>>Y);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Y,Ee,ce,we,b.depth,0,be,ee,null):t.texImage2D($,Y,Ee,ce,we,0,be,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Rt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,$,se.__webglTexture,0,F(b)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,$,se.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(R,b,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){const Z=b.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,Y=v(b.stencilBuffer,$),be=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Rt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(b),Y,b.width,b.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(b),Y,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Y,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,R)}else{const Z=b.textures;for(let $=0;$<Z.length;$++){const Y=Z[$],be=s.convert(Y.format,Y.colorSpace),ee=s.convert(Y.type),Ee=_(Y.internalFormat,be,ee,Y.colorSpace);Rt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(b),Ee,b.width,b.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(b),Ee,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(R,b,U){const Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",S)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,b.depthTexture);const ze=s.convert(b.depthTexture.format),se=s.convert(b.depthTexture.type);let ce;b.depthTexture.format===Di?ce=r.DEPTH_COMPONENT24:b.depthTexture.format===Es&&(ce=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ce,b.width,b.height,0,ze,se,null)}}else H(b.depthTexture,0);const Y=$.__webglTexture,be=F(b),ee=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,Ee=b.depthTexture.format===Es?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Di)Rt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,ee,Y,0,be):r.framebufferTexture2D(r.FRAMEBUFFER,Ee,ee,Y,0);else if(b.depthTexture.format===Es)Rt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,ee,Y,0,be):r.framebufferTexture2D(r.FRAMEBUFFER,Ee,ee,Y,0);else throw new Error("Unknown depthTexture format")}function Ze(R){const b=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let Z=0;Z<6;Z++)_e(b.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?_e(b.__webglFramebuffer[0],R,0):_e(b.__webglFramebuffer,R,0)}else if(U){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=r.createRenderbuffer(),Ne(b.__webglDepthbuffer[Z],R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Y)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ne(b.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(R,b,U){const Z=n.get(R);b!==void 0&&pe(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Ze(R)}function Ye(R){const b=R.texture,U=n.get(R),Z=n.get(b);R.addEventListener("dispose",T);const $=R.textures,Y=R.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=b.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[ee]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)U.__webglFramebuffer[ee][Ee]=r.createFramebuffer()}else U.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)U.__webglFramebuffer[ee]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(be)for(let ee=0,Ee=$.length;ee<Ee;ee++){const ze=n.get($[ee]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Rt(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ee=0;ee<$.length;ee++){const Ee=$[ee];U.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ee]);const ze=s.convert(Ee.format,Ee.colorSpace),se=s.convert(Ee.type),ce=_(Ee.internalFormat,ze,se,Ee.colorSpace,R.isXRRenderTarget===!0),we=F(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,U.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)pe(U.__webglFramebuffer[ee][Ee],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee);else pe(U.__webglFramebuffer[ee],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(b)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ee=0,Ee=$.length;ee<Ee;ee++){const ze=$[ee],se=n.get(ze);let ce=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,se.__webglTexture),Ie(ce,ze),pe(U.__webglFramebuffer,R,ze,r.COLOR_ATTACHMENT0+ee,ce,0),g(ze)&&m(ce)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,Z.__webglTexture),Ie(ee,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)pe(U.__webglFramebuffer[Ee],R,b,r.COLOR_ATTACHMENT0,ee,Ee);else pe(U.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,ee,0);g(b)&&m(ee),t.unbindTexture()}R.depthBuffer&&Ze(R)}function ot(R){const b=R.textures;for(let U=0,Z=b.length;U<Z;U++){const $=b[U];if(g($)){const Y=x(R),be=n.get($).__webglTexture;t.bindTexture(Y,be),m(Y),t.unbindTexture()}}}const ut=[],Ve=[];function Pt(R){if(R.samples>0){if(Rt(R)===!1){const b=R.textures,U=R.width,Z=R.height;let $=r.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=n.get(R),ee=b.length>1;if(ee)for(let ze=0;ze<b.length;ze++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ze=0;ze<b.length;ze++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[ze]);const se=n.get(b[ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,U,Z,0,0,U,Z,$,r.NEAREST),l===!0&&(ut.length=0,Ve.length=0,ut.push(r.COLOR_ATTACHMENT0+ze),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(Y),Ve.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let ze=0;ze<b.length;ze++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,be.__webglColorRenderbuffer[ze]);const se=n.get(b[ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function F(R){return Math.min(i.maxSamples,R.samples)}function Rt(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(R){const b=a.render.frame;d.get(R)!==b&&(d.set(R,b),R.update())}function ht(R,b){const U=R.colorSpace,Z=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==fi&&U!==Yi&&(Xe.getTransfer(U)===_t?(Z!==Bn||$!==In)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",U)),b}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=Tt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function VS(r,e){function t(n,i=Yi){let s;const a=Xe.getTransfer(i);if(n===In)return r.UNSIGNED_BYTE;if(n===Od)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ud)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Um)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dm)return r.BYTE;if(n===Om)return r.SHORT;if(n===fa)return r.UNSIGNED_SHORT;if(n===Dd)return r.INT;if(n===yi)return r.UNSIGNED_INT;if(n===$n)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===Bm)return r.ALPHA;if(n===zm)return r.RGB;if(n===Bn)return r.RGBA;if(n===Di)return r.DEPTH_COMPONENT;if(n===Es)return r.DEPTH_STENCIL;if(n===Nd)return r.RED;if(n===Bd)return r.RED_INTEGER;if(n===br)return r.RG;if(n===zd)return r.RG_INTEGER;if(n===kd)return r.RGBA_INTEGER;if(n===pl||n===ml||n===gl||n===yl)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eh||n===Th||n===Ah||n===Ch)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ph||n===Rh||n===Ih||n===Lh||n===Fh||n===Dh||n===Oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ph||n===Rh)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ih)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lh)return s.COMPRESSED_R11_EAC;if(n===Fh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Dh)return s.COMPRESSED_RG11_EAC;if(n===Oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uh||n===Nh||n===Bh||n===zh||n===kh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===jh||n===Yh||n===qh||n===Zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jh||n===$h||n===Kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jh)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===ed||n===td||n===nd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:HS,fragmentShader:GS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XS extends as{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,p=null;const y=typeof XRWebGLBinding<"u",g=new WS,m={},x=t.getContextAttributes();let _=null,v=null;const w=[],S=[],T=new Ae;let P=null;const M=new jt;M.viewport=new mt;const E=new jt;E.viewport=new mt;const I=[M,E],D=new V_;let B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=w[q];return J===void 0&&(J=new Ic,w[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=w[q];return J===void 0&&(J=new Ic,w[q]=J),J.getGripSpace()},this.getHand=function(q){let J=w[q];return J===void 0&&(J=new Ic,w[q]=J),J.getHandSpace()};function H(q){const J=S.indexOf(q.inputSource);if(J===-1)return;const pe=w[J];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",z);for(let q=0;q<w.length;q++){const J=S[q];J!==null&&(S[q]=null,w[q].disconnect(J))}B=null,G=null,g.reset();for(const q in m)delete m[q];e.setRenderTarget(_),f=null,u=null,h=null,i=null,v=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=x.stencil?Es:Di,Ne=x.stencil?pa:yi);const Ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ze),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new gi(u.textureWidth,u.textureHeight,{format:Bn,type:In,depthTexture:new _a(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new gi(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(q){for(let J=0;J<q.removed.length;J++){const pe=q.removed[J],Ne=S.indexOf(pe);Ne>=0&&(S[Ne]=null,w[Ne].disconnect(pe))}for(let J=0;J<q.added.length;J++){const pe=q.added[J];let Ne=S.indexOf(pe);if(Ne===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=S.length){S.push(pe),Ne=Ze;break}else if(S[Ze]===null){S[Ze]=pe,Ne=Ze;break}if(Ne===-1)break}const _e=w[Ne];_e&&_e.connect(pe)}}const X=new C,K=new C;function te(q,J,pe){X.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);const Ne=X.distanceTo(K),_e=J.projectionMatrix.elements,Ze=pe.projectionMatrix.elements,Tt=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),ot=(_e[9]+1)/_e[5],ut=(_e[9]-1)/_e[5],Ve=(_e[8]-1)/_e[0],Pt=(Ze[8]+1)/Ze[0],F=Tt*Ve,Rt=Tt*Pt,at=Ne/(-Ve+Pt),ht=at*-Ve;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ht),q.translateZ(at),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=Tt+at,R=Ye+at,b=F-ht,U=Rt+(Ne-ht),Z=ot*Ye/R*Me,$=ut*Ye/R*Me;q.projectionMatrix.makePerspective(b,U,Z,$,Me,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let J=q.near,pe=q.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),D.near=E.near=M.near=J,D.far=E.far=M.far=pe,(B!==D.near||G!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,G=D.far),D.layers.mask=q.layers.mask|6,M.layers.mask=D.layers.mask&3,E.layers.mask=D.layers.mask&5;const Ne=q.parent,_e=D.cameras;ne(D,Ne);for(let Ze=0;Ze<_e.length;Ze++)ne(_e[Ze],Ne);_e.length===2?te(D,M,E):D.projectionMatrix.copy(M.projectionMatrix),Ie(q,D,Ne)};function Ie(q,J,pe){pe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(q){return m[q]};let Ce=null;function Qe(q,J){if(d=J.getViewerPose(c||a),p=J,d!==null){const pe=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ne=!1;pe.length!==D.cameras.length&&(D.cameras.length=0,Ne=!0);for(let Ye=0;Ye<pe.length;Ye++){const ot=pe[Ye];let ut=null;if(f!==null)ut=f.getViewport(ot);else{const Pt=h.getViewSubImage(u,ot);ut=Pt.viewport,Ye===0&&(e.setRenderTargetTextures(v,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(v))}let Ve=I[Ye];Ve===void 0&&(Ve=new jt,Ve.layers.enable(Ye),Ve.viewport=new mt,I[Ye]=Ve),Ve.matrix.fromArray(ot.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ot.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),Ye===0&&(D.matrix.copy(Ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ne===!0&&D.cameras.push(Ve)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){h=n.getBinding();const Ye=h.getDepthInformation(pe[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,i.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Ye=0;Ye<pe.length;Ye++){const ot=pe[Ye].camera;if(ot){let ut=m[ot];ut||(ut=new tg,m[ot]=ut);const Ve=h.getCameraImage(ot);ut.sourceTexture=Ve}}}}for(let pe=0;pe<w.length;pe++){const Ne=S[pe],_e=w[pe];Ne!==null&&_e!==void 0&&_e.update(Ne,J,c||a)}Ce&&Ce(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const Ge=new pg;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(q){Ce=q},this.dispose=function(){}}}const ys=new Vt,jS=new Le;function YS(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,$m(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),d(g,m)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,ys.copy(v),ys.x*=-1,ys.y*=-1,ys.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),g.envMapRotation.value.setFromMatrix4(jS.makeRotationFromEuler(ys)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const v=_.program;n.uniformBlockBinding(x,v)}function c(x,_){let v=i[x.id];v===void 0&&(p(x),v=d(x),i[x.id]=v,x.addEventListener("dispose",g));const w=_.program;n.updateUBOMapping(x,w);const S=e.render.frame;s[x.id]!==S&&(u(x),s[x.id]=S)}function d(x){const _=h();x.__bindingPointIndex=_;const v=r.createBuffer(),w=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=i[x.id],v=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let S=0,T=v.length;S<T;S++){const P=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,E=P.length;M<E;M++){const I=P[M];if(f(I,S,M,w)===!0){const D=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let H=0;H<B.length;H++){const V=B[H],z=y(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,D+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,v,w){const S=x.value,T=_+"_"+v;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:w[T]=S.clone(),!0;{const P=w[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return w[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function p(x){const _=x.uniforms;let v=0;const w=16;for(let T=0,P=_.length;T<P;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,I=M.length;E<I;E++){const D=M[E],B=Array.isArray(D.value)?D.value:[D.value];for(let G=0,H=B.length;G<H;G++){const V=B[G],z=y(V),X=v%w,K=X%z.boundary,te=X+K;v+=K,te!==0&&w-te<z.storage&&(v+=w-te),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=z.storage}}}const S=v%w;return S>0&&(v+=w-S),x.__size=v,x.__cache={},this}function y(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const ZS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function JS(){return ri===null&&(ri=new qd(ZS,16,16,br,Fi),ri.name="DFG_LUT",ri.minFilter=Kt,ri.magFilter=Kt,ri.wrapS=Jn,ri.wrapT=Jn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class Xc{constructor(e={}){const{canvas:t=ny(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=In}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const y=f,g=new Set([kd,zd,Bd]),m=new Set([In,yi,fa,pa,Od,Ud]),x=new Uint32Array(4),_=new Int32Array(4);let v=null,w=null;const S=[],T=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1;this._outputColorSpace=ct;let I=0,D=0,B=null,G=-1,H=null;const V=new mt,z=new mt;let X=null;const K=new ye(0);let te=0,ne=t.width,Ie=t.height,Ce=1,Qe=null,Ge=null;const q=new mt(0,0,ne,Ie),J=new mt(0,0,ne,Ie);let pe=!1;const Ne=new Jd;let _e=!1,Ze=!1;const Tt=new Le,Ye=new C,ot=new mt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Pt(){return B===null?Ce:1}let F=n;function Rt(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ld}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",gt,!1),F===null){const N="webgl2";if(F=Rt(N,A),F===null)throw Rt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Oe("WebGLRenderer: "+A.message),A}let at,ht,Me,R,b,U,Z,$,Y,be,ee,Ee,ze,se,ce,we,Te,le,Je,O,fe,re,me,ie;function Q(){at=new JM(F),at.init(),re=new VS(F,at),ht=new VM(F,at,e,re),Me=new zS(F,at),ht.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),R=new QM(F),b=new wS,U=new kS(F,at,Me,b,ht,re,R),Z=new GM(M),$=new ZM(M),Y=new ix(F),me=new zM(F,Y),be=new $M(F,Y,R,me),ee=new tb(F,be,Y,R),Je=new eb(F,ht,U),we=new HM(b),Ee=new SS(M,Z,$,at,ht,me,we),ze=new YS(M,b),se=new TS,ce=new LS(at),le=new BM(M,Z,$,Me,ee,p,l),Te=new NS(M,ee,ht),ie=new qS(F,R,ht,Me),O=new kM(F,at,R),fe=new KM(F,at,R),R.programs=Ee.programs,M.capabilities=ht,M.extensions=at,M.properties=b,M.renderLists=se,M.shadowMap=Te,M.state=Me,M.info=R}Q(),y!==In&&(P=new ib(y,t.width,t.height,i,s));const oe=new XS(M,F);this.xr=oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(A){A!==void 0&&(Ce=A,this.setSize(ne,Ie,!1))},this.getSize=function(A){return A.set(ne,Ie)},this.setSize=function(A,N,j=!0){if(oe.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,Ie=N,t.width=Math.floor(A*Ce),t.height=Math.floor(N*Ce),j===!0&&(t.style.width=A+"px",t.style.height=N+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(ne*Ce,Ie*Ce).floor()},this.setDrawingBufferSize=function(A,N,j){ne=A,Ie=N,Ce=j,t.width=Math.floor(A*j),t.height=Math.floor(N*j),this.setViewport(0,0,A,N)},this.setEffects=function(A){if(y===In){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let N=0;N<A.length;N++)if(A[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,N,j,W){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,N,j,W),Me.viewport(V.copy(q).multiplyScalar(Ce).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,N,j,W){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,N,j,W),Me.scissor(z.copy(J).multiplyScalar(Ce).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){Me.setScissorTest(pe=A)},this.setOpaqueSort=function(A){Qe=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(A=!0,N=!0,j=!0){let W=0;if(A){let k=!1;if(B!==null){const he=B.texture.format;k=g.has(he)}if(k){const he=B.texture.type,xe=m.has(he),ue=le.getClearColor(),Se=le.getClearAlpha(),Pe=ue.r,Be=ue.g,Fe=ue.b;xe?(x[0]=Pe,x[1]=Be,x[2]=Fe,x[3]=Se,F.clearBufferuiv(F.COLOR,0,x)):(_[0]=Pe,_[1]=Be,_[2]=Fe,_[3]=Se,F.clearBufferiv(F.COLOR,0,_))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT),j&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),le.dispose(),se.dispose(),ce.dispose(),b.dispose(),Z.dispose(),$.dispose(),ee.dispose(),me.dispose(),ie.dispose(),Ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Af),oe.removeEventListener("sessionend",Cf),cs.stop()};function ke(A){A.preventDefault(),Cl("WebGLRenderer: Context Lost."),E=!0}function wt(){Cl("WebGLRenderer: Context Restored."),E=!1;const A=R.autoReset,N=Te.enabled,j=Te.autoUpdate,W=Te.needsUpdate,k=Te.type;Q(),R.autoReset=A,Te.enabled=N,Te.autoUpdate=j,Te.needsUpdate=W,Te.type=k}function gt(A){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function si(A){const N=A.target;N.removeEventListener("dispose",si),vi(N)}function vi(A){m0(A),b.remove(A)}function m0(A){const N=b.get(A).programs;N!==void 0&&(N.forEach(function(j){Ee.releaseProgram(j)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,j,W,k,he){N===null&&(N=ut);const xe=k.isMesh&&k.matrixWorld.determinant()<0,ue=y0(A,N,j,W,k);Me.setMaterial(W,xe);let Se=j.index,Pe=1;if(W.wireframe===!0){if(Se=be.getWireframeAttribute(j),Se===void 0)return;Pe=2}const Be=j.drawRange,Fe=j.attributes.position;let et=Be.start*Pe,vt=(Be.start+Be.count)*Pe;he!==null&&(et=Math.max(et,he.start*Pe),vt=Math.min(vt,(he.start+he.count)*Pe)),Se!==null?(et=Math.max(et,0),vt=Math.min(vt,Se.count)):Fe!=null&&(et=Math.max(et,0),vt=Math.min(vt,Fe.count));const Ot=vt-et;if(Ot<0||Ot===1/0)return;me.setup(k,W,ue,j,Se);let Ut,bt=O;if(Se!==null&&(Ut=Y.get(Se),bt=fe,bt.setIndex(Ut)),k.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*Pt()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(k.isLine){let De=W.linewidth;De===void 0&&(De=1),Me.setLineWidth(De*Pt()),k.isLineSegments?bt.setMode(F.LINES):k.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else k.isPoints?bt.setMode(F.POINTS):k.isSprite&&bt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ya("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))bt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,yt=k._multiDrawCounts,dt=k._multiDrawCount,Sn=Se?Y.get(Se).bytesPerElement:1,Us=b.get(W).currentProgram.getUniforms();for(let wn=0;wn<dt;wn++)Us.setValue(F,"_gl_DrawID",wn),bt.render(De[wn]/Sn,yt[wn])}else if(k.isInstancedMesh)bt.renderInstances(et,Ot,k.count);else if(j.isInstancedBufferGeometry){const De=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yt=Math.min(j.instanceCount,De);bt.renderInstances(et,Ot,yt)}else bt.render(et,Ot)};function Tf(A,N,j){A.transparent===!0&&A.side===mn&&A.forceSinglePass===!1?(A.side=Mn,A.needsUpdate=!0,Mo(A,N,j),A.side=is,A.needsUpdate=!0,Mo(A,N,j),A.side=mn):Mo(A,N,j)}this.compile=function(A,N,j=null){j===null&&(j=A),w=ce.get(j),w.init(N),T.push(w),j.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),A!==j&&A.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();const W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const ue=he[xe];Tf(ue,j,k),W.add(ue)}else Tf(he,j,k),W.add(he)}),w=T.pop(),W},this.compileAsync=function(A,N,j=null){const W=this.compile(A,N,j);return new Promise(k=>{function he(){if(W.forEach(function(xe){b.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){k(A);return}setTimeout(he,10)}at.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ac=null;function g0(A){ac&&ac(A)}function Af(){cs.stop()}function Cf(){cs.start()}const cs=new pg;cs.setAnimationLoop(g0),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(A){ac=A,oe.setAnimationLoop(A),A===null?cs.stop():cs.start()},oe.addEventListener("sessionstart",Af),oe.addEventListener("sessionend",Cf),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const j=oe.enabled===!0&&oe.isPresenting===!0,W=P!==null&&(B===null||j)&&P.begin(M,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,N,B),w=ce.get(A,T.length),w.init(N),T.push(w),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ne.setFromProjectionMatrix(Tt,Kn,N.reversedDepth),Ze=this.localClippingEnabled,_e=we.init(this.clippingPlanes,Ze),v=se.get(A,S.length),v.init(),S.push(v),oe.enabled===!0&&oe.isPresenting===!0){const xe=M.xr.getDepthSensingMesh();xe!==null&&oc(xe,N,-1/0,M.sortObjects)}oc(A,N,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(Qe,Ge),Ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ve&&le.addToRenderList(v,A),this.info.render.frame++,_e===!0&&we.beginShadows();const k=w.state.shadowsArray;if(Te.render(k,A,N),_e===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&P.hasRenderPass())===!1){const xe=v.opaque,ue=v.transmissive;if(w.setupLights(),N.isArrayCamera){const Se=N.cameras;if(ue.length>0)for(let Pe=0,Be=Se.length;Pe<Be;Pe++){const Fe=Se[Pe];Rf(xe,ue,A,Fe)}Ve&&le.render(A);for(let Pe=0,Be=Se.length;Pe<Be;Pe++){const Fe=Se[Pe];Pf(v,A,Fe,Fe.viewport)}}else ue.length>0&&Rf(xe,ue,A,N),Ve&&le.render(A),Pf(v,A,N)}B!==null&&D===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),W&&P.end(M),A.isScene===!0&&A.onAfterRender(M,A,N),me.resetDefaultState(),G=-1,H=null,T.pop(),T.length>0?(w=T[T.length-1],_e===!0&&we.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function oc(A,N,j,W){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){W&&ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);const xe=ee.update(A),ue=A.material;ue.visible&&v.push(A,xe,ue,j,ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){const xe=ee.update(A),ue=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ot.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ot.copy(xe.boundingSphere.center)),ot.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(ue)){const Se=xe.groups;for(let Pe=0,Be=Se.length;Pe<Be;Pe++){const Fe=Se[Pe],et=ue[Fe.materialIndex];et&&et.visible&&v.push(A,xe,et,j,ot.z,Fe)}}else ue.visible&&v.push(A,xe,ue,j,ot.z,null)}}const he=A.children;for(let xe=0,ue=he.length;xe<ue;xe++)oc(he[xe],N,j,W)}function Pf(A,N,j,W){const{opaque:k,transmissive:he,transparent:xe}=A;w.setupLightsView(j),_e===!0&&we.setGlobalState(M.clippingPlanes,j),W&&Me.viewport(V.copy(W)),k.length>0&&vo(k,N,j),he.length>0&&vo(he,N,j),xe.length>0&&vo(xe,N,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Rf(A,N,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const et=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new gi(1,1,{generateMipmaps:!0,type:et?Fi:In,minFilter:Ai,samples:ht.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const he=w.state.transmissionRenderTarget[W.id],xe=W.viewport||V;he.setSize(xe.z*M.transmissionResolutionScale,xe.w*M.transmissionResolutionScale);const ue=M.getRenderTarget(),Se=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(he),M.getClearColor(K),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),Ve&&le.render(j);const Be=M.toneMapping;M.toneMapping=zn;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),_e===!0&&we.setGlobalState(M.clippingPlanes,W),vo(A,j,W),U.updateMultisampleRenderTarget(he),U.updateRenderTargetMipmap(he),at.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let vt=0,Ot=N.length;vt<Ot;vt++){const Ut=N[vt],{object:bt,geometry:De,material:yt,group:dt}=Ut;if(yt.side===mn&&bt.layers.test(W.layers)){const Sn=yt.side;yt.side=Mn,yt.needsUpdate=!0,If(bt,j,W,De,yt,dt),yt.side=Sn,yt.needsUpdate=!0,et=!0}}et===!0&&(U.updateMultisampleRenderTarget(he),U.updateRenderTargetMipmap(he))}M.setRenderTarget(ue,Se,Pe),M.setClearColor(K,te),Fe!==void 0&&(W.viewport=Fe),M.toneMapping=Be}function vo(A,N,j){const W=N.isScene===!0?N.overrideMaterial:null;for(let k=0,he=A.length;k<he;k++){const xe=A[k],{object:ue,geometry:Se,group:Pe}=xe;let Be=xe.material;Be.allowOverride===!0&&W!==null&&(Be=W),ue.layers.test(j.layers)&&If(ue,N,j,Se,Be,Pe)}}function If(A,N,j,W,k,he){A.onBeforeRender(M,N,j,W,k,he),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(M,N,j,W,A,he),k.transparent===!0&&k.side===mn&&k.forceSinglePass===!1?(k.side=Mn,k.needsUpdate=!0,M.renderBufferDirect(j,N,W,k,A,he),k.side=is,k.needsUpdate=!0,M.renderBufferDirect(j,N,W,k,A,he),k.side=mn):M.renderBufferDirect(j,N,W,k,A,he),A.onAfterRender(M,N,j,W,k,he)}function Mo(A,N,j){N.isScene!==!0&&(N=ut);const W=b.get(A),k=w.state.lights,he=w.state.shadowsArray,xe=k.state.version,ue=Ee.getParameters(A,k.state,he,N,j),Se=Ee.getProgramCacheKey(ue);let Pe=W.programs;W.environment=A.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(A.isMeshStandardMaterial?$:Z).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",si),Pe=new Map,W.programs=Pe);let Be=Pe.get(Se);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===xe)return Ff(A,ue),Be}else ue.uniforms=Ee.getUniforms(A),A.onBeforeCompile(ue,M),Be=Ee.acquireProgram(ue,Se),Pe.set(Se,Be),W.uniforms=ue.uniforms;const Fe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=we.uniform),Ff(A,ue),W.needsLights=x0(A),W.lightsStateVersion=xe,W.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Lf(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=xl.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Ff(A,N){const j=b.get(A);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function y0(A,N,j,W,k){N.isScene!==!0&&(N=ut),U.resetTextureUnits();const he=N.fog,xe=W.isMeshStandardMaterial?N.environment:null,ue=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:fi,Se=(W.isMeshStandardMaterial?$:Z).get(W.envMap||xe),Pe=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,vt=!!j.morphAttributes.color;let Ot=zn;W.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ot=M.toneMapping);const Ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,bt=Ut!==void 0?Ut.length:0,De=b.get(W),yt=w.state.lights;if(_e===!0&&(Ze===!0||A!==H)){const hn=A===H&&W.id===G;we.setState(W,A,hn)}let dt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==yt.state.version||De.outputColorSpace!==ue||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Se||W.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==we.numPlanes||De.numIntersection!==we.numIntersection)||De.vertexAlphas!==Pe||De.vertexTangents!==Be||De.morphTargets!==Fe||De.morphNormals!==et||De.morphColors!==vt||De.toneMapping!==Ot||De.morphTargetsCount!==bt)&&(dt=!0):(dt=!0,De.__version=W.version);let Sn=De.currentProgram;dt===!0&&(Sn=Mo(W,N,k));let Us=!1,wn=!1,zr=!1;const Et=Sn.getUniforms(),yn=De.uniforms;if(Me.useProgram(Sn.program)&&(Us=!0,wn=!0,zr=!0),W.id!==G&&(G=W.id,wn=!0),Us||H!==A){Me.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Et.setValue(F,"projectionMatrix",A.projectionMatrix),Et.setValue(F,"viewMatrix",A.matrixWorldInverse);const _n=Et.map.cameraPosition;_n!==void 0&&_n.setValue(F,Ye.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,wn=!0,zr=!0)}if(De.needsLights&&(yt.state.directionalShadowMap.length>0&&Et.setValue(F,"directionalShadowMap",yt.state.directionalShadowMap,U),yt.state.spotShadowMap.length>0&&Et.setValue(F,"spotShadowMap",yt.state.spotShadowMap,U),yt.state.pointShadowMap.length>0&&Et.setValue(F,"pointShadowMap",yt.state.pointShadowMap,U)),k.isSkinnedMesh){Et.setOptional(F,k,"bindMatrix"),Et.setOptional(F,k,"bindMatrixInverse");const hn=k.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Et.setValue(F,"boneTexture",hn.boneTexture,U))}k.isBatchedMesh&&(Et.setOptional(F,k,"batchingTexture"),Et.setValue(F,"batchingTexture",k._matricesTexture,U),Et.setOptional(F,k,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",k._indirectTexture,U),Et.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",k._colorsTexture,U));const On=j.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Je.update(k,j,Sn),(wn||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,Et.setValue(F,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yn.envMap.value=Se,yn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=JS()),wn&&(Et.setValue(F,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&_0(yn,zr),he&&W.fog===!0&&ze.refreshFogUniforms(yn,he),ze.refreshMaterialUniforms(yn,W,Ce,Ie,w.state.transmissionRenderTarget[A.id]),xl.upload(F,Lf(De),yn,U)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xl.upload(F,Lf(De),yn,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(F,"center",k.center),Et.setValue(F,"modelViewMatrix",k.modelViewMatrix),Et.setValue(F,"normalMatrix",k.normalMatrix),Et.setValue(F,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const hn=W.uniformsGroups;for(let _n=0,lc=hn.length;_n<lc;_n++){const hs=hn[_n];ie.update(hs,Sn),ie.bind(hs,Sn)}}return Sn}function _0(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function x0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,N,j){const W=b.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=N,b.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,N){const j=b.get(A);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0};const v0=F.createFramebuffer();this.setRenderTarget=function(A,N=0,j=0){B=A,I=N,D=j;let W=null,k=!1,he=!1;if(A){const ue=b.get(A);if(ue.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(F.FRAMEBUFFER,ue.__webglFramebuffer),V.copy(A.viewport),z.copy(A.scissor),X=A.scissorTest,Me.viewport(V),Me.scissor(z),Me.setScissorTest(X),G=-1;return}else if(ue.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(ue.__hasExternalTextures)U.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(ue.__boundDepthTexture!==Be){if(Be!==null&&b.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const Se=A.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(he=!0);const Pe=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?W=Pe[N][j]:W=Pe[N],k=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?W=b.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[j]:W=Pe,V.copy(A.viewport),z.copy(A.scissor),X=A.scissorTest}else V.copy(q).multiplyScalar(Ce).floor(),z.copy(J).multiplyScalar(Ce).floor(),X=pe;if(j!==0&&(W=v0),Me.bindFramebuffer(F.FRAMEBUFFER,W)&&Me.drawBuffers(A,W),Me.viewport(V),Me.scissor(z),Me.setScissorTest(X),k){const ue=b.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,j)}else if(he){const ue=N;for(let Se=0;Se<A.textures.length;Se++){const Pe=b.get(A.textures[Se]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,j,ue)}}else if(A!==null&&j!==0){const ue=b.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ue.__webglTexture,j)}G=-1},this.readRenderTargetPixels=function(A,N,j,W,k,he,xe,ue=0){if(!(A&&A.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){Me.bindFramebuffer(F.FRAMEBUFFER,Se);try{const Pe=A.textures[ue],Be=Pe.format,Fe=Pe.type;if(!ht.textureFormatReadable(Be)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Fe)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-W&&j>=0&&j<=A.height-k&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ue),F.readPixels(N,j,W,k,re.convert(Be),re.convert(Fe),he))}finally{const Pe=B!==null?b.get(B).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,N,j,W,k,he,xe,ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(N>=0&&N<=A.width-W&&j>=0&&j<=A.height-k){Me.bindFramebuffer(F.FRAMEBUFFER,Se);const Pe=A.textures[ue],Be=Pe.format,Fe=Pe.type;if(!ht.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,he.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ue),F.readPixels(N,j,W,k,re.convert(Be),re.convert(Fe),0);const vt=B!==null?b.get(B).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,vt);const Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await iy(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,he),F.deleteBuffer(et),F.deleteSync(Ot),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,N=null,j=0){const W=Math.pow(2,-j),k=Math.floor(A.image.width*W),he=Math.floor(A.image.height*W),xe=N!==null?N.x:0,ue=N!==null?N.y:0;U.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,xe,ue,k,he),Me.unbindTexture()};const M0=F.createFramebuffer(),b0=F.createFramebuffer();this.copyTextureToTexture=function(A,N,j=null,W=null,k=0,he=null){he===null&&(k!==0?(ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=k,k=0):he=0);let xe,ue,Se,Pe,Be,Fe,et,vt,Ot;const Ut=A.isCompressedTexture?A.mipmaps[he]:A.image;if(j!==null)xe=j.max.x-j.min.x,ue=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,Pe=j.min.x,Be=j.min.y,Fe=j.isBox3?j.min.z:0;else{const On=Math.pow(2,-k);xe=Math.floor(Ut.width*On),ue=Math.floor(Ut.height*On),A.isDataArrayTexture?Se=Ut.depth:A.isData3DTexture?Se=Math.floor(Ut.depth*On):Se=1,Pe=0,Be=0,Fe=0}W!==null?(et=W.x,vt=W.y,Ot=W.z):(et=0,vt=0,Ot=0);const bt=re.convert(N.format),De=re.convert(N.type);let yt;N.isData3DTexture?(U.setTexture3D(N,0),yt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),yt=F.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),yt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const dt=F.getParameter(F.UNPACK_ROW_LENGTH),Sn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Us=F.getParameter(F.UNPACK_SKIP_PIXELS),wn=F.getParameter(F.UNPACK_SKIP_ROWS),zr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Be),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe);const Et=A.isDataArrayTexture||A.isData3DTexture,yn=N.isDataArrayTexture||N.isData3DTexture;if(A.isDepthTexture){const On=b.get(A),hn=b.get(N),_n=b.get(On.__renderTarget),lc=b.get(hn.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,_n.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,lc.__webglFramebuffer);for(let hs=0;hs<Se;hs++)Et&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(A).__webglTexture,k,Fe+hs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(N).__webglTexture,he,Ot+hs)),F.blitFramebuffer(Pe,Be,xe,ue,et,vt,xe,ue,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||b.has(A)){const On=b.get(A),hn=b.get(N);Me.bindFramebuffer(F.READ_FRAMEBUFFER,M0),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,b0);for(let _n=0;_n<Se;_n++)Et?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,On.__webglTexture,k,Fe+_n):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,On.__webglTexture,k),yn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,he,Ot+_n):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,he),k!==0?F.blitFramebuffer(Pe,Be,xe,ue,et,vt,xe,ue,F.COLOR_BUFFER_BIT,F.NEAREST):yn?F.copyTexSubImage3D(yt,he,et,vt,Ot+_n,Pe,Be,xe,ue):F.copyTexSubImage2D(yt,he,et,vt,Pe,Be,xe,ue);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(yt,he,et,vt,Ot,xe,ue,Se,bt,De,Ut.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(yt,he,et,vt,Ot,xe,ue,Se,bt,Ut.data):F.texSubImage3D(yt,he,et,vt,Ot,xe,ue,Se,bt,De,Ut):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,he,et,vt,xe,ue,bt,De,Ut.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,he,et,vt,Ut.width,Ut.height,bt,Ut.data):F.texSubImage2D(F.TEXTURE_2D,he,et,vt,xe,ue,bt,De,Ut);F.pixelStorei(F.UNPACK_ROW_LENGTH,dt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Sn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Us),F.pixelStorei(F.UNPACK_SKIP_ROWS,wn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zr),he===0&&N.generateMipmaps&&F.generateMipmap(yt),Me.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){I=0,D=0,B=null,Me.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Qp={type:"change"},su={type:"start"},xg={type:"end"},tl=new lo,em=new ji,$S=Math.cos(70*He.DEG2RAD),Xt=new C,xn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jc=1e-6;class KS extends fg{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new rt,this._lastTargetPosition=new C,this._quat=new rt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tp,this._sphericalDelta=new Tp,this._scale=1,this._panOffset=new C,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new C,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ew.bind(this),this._onPointerDown=QS.bind(this),this._onPointerUp=tw.bind(this),this._onContextMenu=lw.bind(this),this._onMouseWheel=sw.bind(this),this._onKeyDown=rw.bind(this),this._onTouchStart=aw.bind(this),this._onTouchMove=ow.bind(this),this._onMouseDown=nw.bind(this),this._onMouseMove=iw.bind(this),this._interceptControlDown=cw.bind(this),this._interceptControlUp=hw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qp),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Xt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(tl.origin.copy(this.object.position),tl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tl.direction))<$S?this.object.lookAt(this.target):(em.setFromNormalAndCoplanarPoint(this.object.up,this.target),tl.intersectPlane(em,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jc||this._lastTargetPosition.distanceToSquared(this.target)>jc?(this.dispatchEvent(Qp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Xt.copy(i).sub(this.target);let s=Xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function QS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ew(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function tw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xg),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Mt.DOLLY;break;case pr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Mt.ROTATE}break;case pr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(su)}function iw(r){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function sw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(r.preventDefault(),this.dispatchEvent(su),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(xg))}function rw(r){this.enabled!==!1&&this._handleKeyDown(r)}function aw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Mt.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Mt.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(su)}function ow(r){switch(this._trackPointer(r),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Mt.NONE}}function lw(r){this.enabled!==!1&&r.preventDefault()}function cw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _s=new ug,rn=new C,Hi=new C,It=new rt,tm={X:new C(1,0,0),Y:new C(0,1,0),Z:new C(0,0,1)},Yc={type:"change"},nm={type:"mouseDown",mode:null},im={type:"mouseUp",mode:null},sm={type:"objectChange"};class dw extends fg{constructor(e,t=null){super(void 0,t);const n=new yw(this);this._root=n;const i=new _w;this._gizmo=i,n.add(i);const s=new xw;this._plane=s,n.add(s);const a=this;function o(_,v){let w=v;Object.defineProperty(a,_,{get:function(){return w!==void 0?w:v},set:function(S){w!==S&&(w=S,s[_]=S,i[_]=S,a.dispatchEvent({type:_+"-changed",value:S}),a.dispatchEvent(Yc))}}),a[_]=v,s[_]=v,i[_]=v}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);const l=new C,c=new C,d=new rt,h=new rt,u=new C,f=new rt,p=new C,y=new C,g=new C,m=0,x=new C;o("worldPosition",l),o("worldPositionStart",c),o("worldQuaternion",d),o("worldQuaternionStart",h),o("cameraPosition",u),o("cameraQuaternion",f),o("pointStart",p),o("pointEnd",y),o("rotationAxis",g),o("rotationAngle",m),o("eye",x),this._offset=new C,this._startNorm=new C,this._endNorm=new C,this._cameraScale=new C,this._parentPosition=new C,this._parentQuaternion=new rt,this._parentQuaternionInv=new rt,this._parentScale=new C,this._worldScaleStart=new C,this._worldQuaternionInv=new rt,this._worldScale=new C,this._positionStart=new C,this._quaternionStart=new rt,this._scaleStart=new C,this._getPointer=uw.bind(this),this._onPointerDown=pw.bind(this),this._onPointerHover=fw.bind(this),this._onPointerMove=mw.bind(this),this._onPointerUp=gw.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&_s.setFromCamera(e,this.camera);const t=qc(this._gizmo.picker[this.mode],_s);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&_s.setFromCamera(e,this.camera);const t=qc(this._plane,_s,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,nm.mode=this.mode,this.dispatchEvent(nm)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&_s.setFromCamera(e,this.camera);const a=qc(this._plane,_s,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(It.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(rn.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(rn.setFromMatrixPosition(i.parent.matrixWorld)))),i.position.x=Math.max(this.minX,Math.min(this.maxX,i.position.x)),i.position.y=Math.max(this.minY,Math.min(this.maxY,i.position.y)),i.position.z=Math.max(this.minZ,Math.min(this.maxZ,i.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),Hi.set(o,o,o)}else rn.copy(this.pointStart),Hi.copy(this.pointEnd),rn.applyQuaternion(this._worldQuaternionInv),Hi.applyQuaternion(this._worldQuaternionInv),Hi.divide(rn),t.search("X")===-1&&(Hi.x=1),t.search("Y")===-1&&(Hi.y=1),t.search("Z")===-1&&(Hi.z=1);i.scale.copy(this._scaleStart).multiply(Hi),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(rn.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(rn.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(tm[t]),rn.copy(tm[t]),s==="local"&&rn.applyQuaternion(this.worldQuaternion),rn.cross(this.eye),rn.length()===0?l=!0:this.rotationAngle=this._offset.dot(rn.normalize())*o),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(It.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(It.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Yc),this.dispatchEvent(sm)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(im.mode=this.mode,this.dispatchEvent(im)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Yc),this.dispatchEvent(sm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return _s}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,i){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(n),s.active.color.set(i),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(n),s.activeTransparent.color.set(i),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(n),s.active._color&&s.active._color.set(i),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(n),s.activeTransparent._color&&s.activeTransparent._color.set(i)}}function uw(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function fw(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function pw(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function mw(r){this.enabled&&this.pointerMove(this._getPointer(r))}function gw(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function qc(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const nl=new Vt,St=new C(0,1,0),rm=new C(0,0,0),am=new Le,il=new rt,vl=new rt,ai=new C,om=new Le,ia=new C(1,0,0),vs=new C(0,1,0),sa=new C(0,0,1),sl=new C,Jr=new C,$r=new C;class yw extends pt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class _w extends pt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new on({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ln({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const h=e.clone();h.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25;const f=e.clone();f.color.setHex(16776960);const p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:a,zAxis:o,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:d,activeTransparent:u};const y=new zt(0,.04,.1,12);y.translate(0,.05,0);const g=new At(.08,.08,.08);g.translate(0,.04,0);const m=new Ke;m.setAttribute("position",new nt([0,0,0,1,0,0],3));const x=new zt(.0075,.0075,.5,3);x.translate(0,.25,0);function _(H,V){const z=new Ss(H,.0075,3,64,V*Math.PI*2);return z.rotateY(Math.PI/2),z.rotateX(Math.PI/2),z}function v(){const H=new Ke;return H.setAttribute("position",new nt([0,0,0,1,1,1],3)),H}const w={X:[[new ae(y,s),[.5,0,0],[0,0,-Math.PI/2]],[new ae(y,s),[-.5,0,0],[0,0,Math.PI/2]],[new ae(x,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ae(y,a),[0,.5,0]],[new ae(y,a),[0,-.5,0],[Math.PI,0,0]],[new ae(x,a)]],Z:[[new ae(y,o),[0,0,.5],[Math.PI/2,0,0]],[new ae(y,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ae(x,o),null,[Math.PI/2,0,0]]],XYZ:[[new ae(new dr(.1,0),h),[0,0,0]]],XY:[[new ae(new At(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new ae(new At(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new At(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new ae(new zt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ae(new zt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ae(new zt(.2,0,.6,4),n),[0,.3,0]],[new ae(new zt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ae(new zt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ae(new zt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ae(new dr(.2,0),n)]],XY:[[new ae(new At(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ae(new At(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new At(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new ae(new dr(.01,2),i),null,null,null,"helper"]],END:[[new ae(new dr(.01,2),i),null,null,null,"helper"]],DELTA:[[new Ft(v(),i),null,null,null,"helper"]],X:[[new Ft(m,i),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ft(m,i),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ft(m,i),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new ae(_(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new ae(_(.5,.5),s)]],Y:[[new ae(_(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ae(_(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ae(_(.75,1),u),null,[0,Math.PI/2,0]]]},M={AXIS:[[new Ft(m,i),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new ae(new ho(.25,10,8),n)]],X:[[new ae(new Ss(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ae(new Ss(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ae(new Ss(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ae(new Ss(.75,.1,2,24),n)]]},I={X:[[new ae(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new ae(x,s),[0,0,0],[0,0,-Math.PI/2]],[new ae(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ae(g,a),[0,.5,0]],[new ae(x,a)],[new ae(g,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ae(g,o),[0,0,.5],[Math.PI/2,0,0]],[new ae(x,o),[0,0,0],[Math.PI/2,0,0]],[new ae(g,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ae(new At(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new ae(new At(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new At(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ae(new At(.1,.1,.1),h)]]},D={X:[[new ae(new zt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ae(new zt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ae(new zt(.2,0,.6,4),n),[0,.3,0]],[new ae(new zt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ae(new zt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ae(new zt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ae(new At(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ae(new At(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new At(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ae(new At(.2,.2,.2),n),[0,0,0]]]},B={X:[[new Ft(m,i),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ft(m,i),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ft(m,i),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G(H){const V=new pt;for(const z in H)for(let X=H[z].length;X--;){const K=H[z][X][0].clone(),te=H[z][X][1],ne=H[z][X][2],Ie=H[z][X][3],Ce=H[z][X][4];K.name=z,K.tag=Ce,te&&K.position.set(te[0],te[1],te[2]),ne&&K.rotation.set(ne[0],ne[1],ne[2]),Ie&&K.scale.set(Ie[0],Ie[1],Ie[2]),K.updateMatrix();const Qe=K.geometry.clone();Qe.applyMatrix4(K.matrix),K.geometry=Qe,K.renderOrder=1/0,K.position.set(0,0,0),K.rotation.set(0,0,0),K.scale.set(1,1,1),V.add(K)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(w)),this.add(this.gizmo.rotate=G(P)),this.add(this.gizmo.scale=G(I)),this.add(this.picker.translate=G(S)),this.add(this.picker.rotate=G(E)),this.add(this.picker.scale=G(D)),this.add(this.helper.translate=G(T)),this.add(this.helper.rotate=G(M)),this.add(this.helper.scale=G(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:vl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const a=i[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(It.setFromEuler(nl.set(0,0,0)),a.quaternion.copy(n).multiply(It),Math.abs(St.copy(ia).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(It.setFromEuler(nl.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(It),Math.abs(St.copy(vs).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(It.setFromEuler(nl.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(It),Math.abs(St.copy(sa).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(It.setFromEuler(nl.set(0,Math.PI/2,0)),St.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(am.lookAt(rm,St,vs)),a.quaternion.multiply(It),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),rn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),rn.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(rn),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(St.copy(ia).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(St.copy(vs).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(St.copy(sa).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(St.copy(sa).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(St.copy(ia).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(St.copy(vs).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(il.copy(n),St.copy(this.eye).applyQuaternion(It.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(am.lookAt(this.eye,rm,vs)),a.name==="X"&&(It.setFromAxisAngle(ia,Math.atan2(-St.y,St.z)),It.multiplyQuaternions(il,It),a.quaternion.copy(It)),a.name==="Y"&&(It.setFromAxisAngle(vs,Math.atan2(St.x,St.z)),It.multiplyQuaternions(il,It),a.quaternion.copy(It)),a.name==="Z"&&(It.setFromAxisAngle(sa,Math.atan2(St.y,St.x)),It.multiplyQuaternions(il,It),a.quaternion.copy(It))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis?(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1):this.axis.split("").some(function(l){return a.name===l})&&(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1))}super.updateMatrixWorld(e)}}class xw extends ae{constructor(){super(new Ir(1e5,1e5,2,2),new on({visible:!1,wireframe:!0,side:mn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),sl.copy(ia).applyQuaternion(t==="local"?this.worldQuaternion:vl),Jr.copy(vs).applyQuaternion(t==="local"?this.worldQuaternion:vl),$r.copy(sa).applyQuaternion(t==="local"?this.worldQuaternion:vl),St.copy(Jr),this.mode){case"translate":case"scale":switch(this.axis){case"X":St.copy(this.eye).cross(sl),ai.copy(sl).cross(St);break;case"Y":St.copy(this.eye).cross(Jr),ai.copy(Jr).cross(St);break;case"Z":St.copy(this.eye).cross($r),ai.copy($r).cross(St);break;case"XY":ai.copy($r);break;case"YZ":ai.copy(sl);break;case"XZ":St.copy($r),ai.copy(Jr);break;case"XYZ":case"E":ai.set(0,0,0);break}break;case"rotate":default:ai.set(0,0,0)}ai.length()===0?this.quaternion.copy(this.cameraQuaternion):(om.lookAt(rn.set(0,0,0),ai,St),this.quaternion.setFromRotationMatrix(om)),super.updateMatrixWorld(e)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Nn=Uint8Array,ur=Uint16Array,vw=Int32Array,vg=new Nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mg=new Nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Mw=new Nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bg=function(r,e){for(var t=new ur(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new vw(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Sg=bg(vg,2),wg=Sg.b,bw=Sg.r;wg[28]=258,bw[258]=28;var Sw=bg(Mg,0),ww=Sw.b,xd=new ur(32768);for(var Ct=0;Ct<32768;++Ct){var Gi=(Ct&43690)>>1|(Ct&21845)<<1;Gi=(Gi&52428)>>2|(Gi&13107)<<2,Gi=(Gi&61680)>>4|(Gi&3855)<<4,xd[Ct]=((Gi&65280)>>8|(Gi&255)<<8)>>1}var oa=function(r,e,t){for(var n=r.length,i=0,s=new ur(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new ur(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new ur(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],d=e-r[i],h=a[r[i]-1]++<<d,u=h|(1<<d)-1;h<=u;++h)o[xd[h]>>l]=c}else for(o=new ur(n),i=0;i<n;++i)r[i]&&(o[i]=xd[a[r[i]-1]++]>>15-r[i]);return o},fo=new Nn(288);for(var Ct=0;Ct<144;++Ct)fo[Ct]=8;for(var Ct=144;Ct<256;++Ct)fo[Ct]=9;for(var Ct=256;Ct<280;++Ct)fo[Ct]=7;for(var Ct=280;Ct<288;++Ct)fo[Ct]=8;var Eg=new Nn(32);for(var Ct=0;Ct<32;++Ct)Eg[Ct]=5;var Ew=oa(fo,9,1),Tw=oa(Eg,5,1),Zc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},jn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Jc=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Aw=function(r){return(r+7)/8|0},Cw=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new Nn(r.subarray(e,t))},Pw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qn=function(r,e,t){var n=new Error(e||Pw[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,qn),!t)throw n;return n},Rw=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new Nn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Nn(i*3));var c=function(Ze){var Tt=t.length;if(Ze>Tt){var Ye=new Nn(Math.max(Tt*2,Ze));Ye.set(t),t=Ye}},d=e.f||0,h=e.p||0,u=e.b||0,f=e.l,p=e.d,y=e.m,g=e.n,m=i*8;do{if(!f){d=jn(r,h,1);var x=jn(r,h+1,3);if(h+=3,x)if(x==1)f=Ew,p=Tw,y=9,g=5;else if(x==2){var S=jn(r,h,31)+257,T=jn(r,h+10,15)+4,P=S+jn(r,h+5,31)+1;h+=14;for(var M=new Nn(P),E=new Nn(19),I=0;I<T;++I)E[Mw[I]]=jn(r,h+I*3,7);h+=T*3;for(var D=Zc(E),B=(1<<D)-1,G=oa(E,D,1),I=0;I<P;){var H=G[jn(r,h,B)];h+=H&15;var _=H>>4;if(_<16)M[I++]=_;else{var V=0,z=0;for(_==16?(z=3+jn(r,h,3),h+=2,V=M[I-1]):_==17?(z=3+jn(r,h,7),h+=3):_==18&&(z=11+jn(r,h,127),h+=7);z--;)M[I++]=V}}var X=M.subarray(0,S),K=M.subarray(S);y=Zc(X),g=Zc(K),f=oa(X,y,1),p=oa(K,g,1)}else qn(1);else{var _=Aw(h)+4,v=r[_-4]|r[_-3]<<8,w=_+v;if(w>i){l&&qn(0);break}o&&c(u+v),t.set(r.subarray(_,w),u),e.b=u+=v,e.p=h=w*8,e.f=d;continue}if(h>m){l&&qn(0);break}}o&&c(u+131072);for(var te=(1<<y)-1,ne=(1<<g)-1,Ie=h;;Ie=h){var V=f[Jc(r,h)&te],Ce=V>>4;if(h+=V&15,h>m){l&&qn(0);break}if(V||qn(2),Ce<256)t[u++]=Ce;else if(Ce==256){Ie=h,f=null;break}else{var Qe=Ce-254;if(Ce>264){var I=Ce-257,Ge=vg[I];Qe=jn(r,h,(1<<Ge)-1)+wg[I],h+=Ge}var q=p[Jc(r,h)&ne],J=q>>4;q||qn(3),h+=q&15;var K=ww[J];if(J>3){var Ge=Mg[J];K+=Jc(r,h)&(1<<Ge)-1,h+=Ge}if(h>m){l&&qn(0);break}o&&c(u+131072);var pe=u+Qe;if(u<K){var Ne=s-K,_e=Math.min(K,pe);for(Ne+u<0&&qn(3);u<_e;++u)t[u]=n[Ne+u]}for(;u<pe;++u)t[u]=t[u-K]}}e.l=f,e.p=Ie,e.b=u,e.f=d,f&&(d=1,e.m=y,e.d=p,e.n=g)}while(!d);return u!=t.length&&a?Cw(t,0,u):t.subarray(0,u)},Iw=new Nn(0),Lw=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&qn(6,"invalid zlib data"),(r[1]>>5&1)==1&&qn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Fw(r,e){return Rw(r.subarray(Lw(r),-4),{i:2},e,e)}var Dw=typeof TextDecoder<"u"&&new TextDecoder,Ow=0;try{Dw.decode(Iw,{stream:!0}),Ow=1}catch{}function Tg(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,a=Math.floor((i+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:i=a,a=Math.floor((i+s)/2);return a}function Uw(r,e,t,n){const i=[],s=[],a=[];i[0]=1;for(let o=1;o<=t;++o){s[o]=e-n[r+1-o],a[o]=n[r+o]-e;let l=0;for(let c=0;c<o;++c){const d=a[c+1],h=s[o-c],u=i[c]/(d+h);i[c]=l+d*u,l=h*u}i[o]=l}return i}function Nw(r,e,t,n){const i=Tg(r,n,e),s=Uw(i,n,r,e),a=new mt(0,0,0,0);for(let o=0;o<=r;++o){const l=t[i-r+o],c=s[o],d=l.w*c;a.x+=l.x*d,a.y+=l.y*d,a.z+=l.z*d,a.w+=l.w*c}return a}function Bw(r,e,t,n,i){const s=[];for(let h=0;h<=t;++h)s[h]=0;const a=[];for(let h=0;h<=n;++h)a[h]=s.slice(0);const o=[];for(let h=0;h<=t;++h)o[h]=s.slice(0);o[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[r+1-h],c[h]=i[r+h]-e;let u=0;for(let f=0;f<h;++f){const p=c[f+1],y=l[h-f];o[h][f]=p+y;const g=o[f][h-1]/o[h][f];o[f][h]=u+p*g,u=y*g}o[h][h]=u}for(let h=0;h<=t;++h)a[0][h]=o[h][t];for(let h=0;h<=t;++h){let u=0,f=1;const p=[];for(let y=0;y<=t;++y)p[y]=s.slice(0);p[0][0]=1;for(let y=1;y<=n;++y){let g=0;const m=h-y,x=t-y;h>=y&&(p[f][0]=p[u][0]/o[x+1][m],g=p[f][0]*o[m][x]);const _=m>=-1?1:-m,v=h-1<=x?y-1:t-h;for(let S=_;S<=v;++S)p[f][S]=(p[u][S]-p[u][S-1])/o[x+1][m+S],g+=p[f][S]*o[m+S][x];h<=x&&(p[f][y]=-p[u][y-1]/o[x+1][h],g+=p[f][y]*o[h][x]),a[y][h]=g;const w=u;u=f,f=w}}let d=t;for(let h=1;h<=n;++h){for(let u=0;u<=t;++u)a[h][u]*=d;d*=t-h}return a}function zw(r,e,t,n,i){const s=i<r?i:r,a=[],o=Tg(r,n,e),l=Bw(o,n,r,s,e),c=[];for(let d=0;d<t.length;++d){const h=t[d].clone(),u=h.w;h.x*=u,h.y*=u,h.z*=u,c[d]=h}for(let d=0;d<=s;++d){const h=c[o-r].clone().multiplyScalar(l[d][0]);for(let u=1;u<=r;++u)h.add(c[o-r+u].clone().multiplyScalar(l[d][u]));a[d]=h}for(let d=s+1;d<=i+1;++d)a[d]=new mt(0,0,0);return a}function kw(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function Vw(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const a=r[s];t[s]=new C(a.x,a.y,a.z),n[s]=a.w}const i=[];for(let s=0;s<e;++s){const a=t[s].clone();for(let o=1;o<=s;++o)a.sub(i[s-o].clone().multiplyScalar(kw(s,o)*n[o]));i[s]=a.divideScalar(n[0])}return i}function Hw(r,e,t,n,i){const s=zw(r,e,t,n,i);return Vw(s)}class Gw extends $y{constructor(e,t,n,i,s){super();const a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||a;for(let l=0;l<o;++l){const c=n[l];this.controlPoints[l]=new mt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new C){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Nw(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new C){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Hw(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new mt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let $e,kt,fn;class nr extends Rs{constructor(e){super(e)}load(e,t,n,i){const s=this,a=s.path===""?z_.extractUrlBase(e):s.path,o=new L_(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(Zw(e))$e=new qw().parse(e);else{const i=Pg(e);if(!Jw(i))throw new Error("THREE.FBXLoader: Unknown format.");if(cm(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+cm(i));$e=new Yw().parse(i)}const n=new ta(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Ww(n,this.manager).parse($e)}}class Ww{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){kt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new Xw().parse(i);return this.parseScene(i,s,n),fn}parseConnections(){const e=new Map;return"Connections"in $e&&$e.Connections.connections.forEach(function(n){const i=n[0],s=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:s,relationship:a};e.get(i).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in $e.Objects){const n=$e.Objects.Video;for(const i in n){const s=n[i],a=parseInt(i);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in $e.Objects){const n=$e.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,a=i!==void 0?i.value:0,o=s!==void 0?s.value:0;if(n.wrapS=a===0?Pn:Jn,n.wrapT=o===0?Pn:Jn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const s=i.path;s||i.setPath(this.textureLoader.path);const a=kt.get(e.id).children;let o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf("blob:")===0||o.indexOf("data:")===0)&&i.setPath(void 0)),o===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Qt;const l=i.load(o);return i.setPath(s),l}parseMaterials(e){const t=new Map;if("Material"in $e.Objects){const n=$e.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!kt.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(s.toLowerCase()){case"phong":o=new $o;break;case"lambert":o=new x_;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new $o;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Xe.colorSpaceToWorking(new ye().fromArray(e.Diffuse.value),ct):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Xe.colorSpaceToWorking(new ye().fromArray(e.DiffuseColor.value),ct)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Xe.colorSpaceToWorking(new ye().fromArray(e.Emissive.value),ct):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Xe.colorSpaceToWorking(new ye().fromArray(e.EmissiveColor.value),ct)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Xe.colorSpaceToWorking(new ye().fromArray(e.Specular.value),ct):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Xe.colorSpaceToWorking(new ye().fromArray(e.SpecularColor.value),ct));const s=this;return kt.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,a.ID),i.map!==void 0&&(i.map.colorSpace=ct);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ct);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=wl,i.envMap.colorSpace=ct);break;case"SpecularColor":i.specularMap=s.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ct);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in $e.Objects&&t in $e.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=kt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in $e.Objects){const n=$e.Objects.Deformer;for(const i in n){const s=n[i],a=kt.get(parseInt(i));if(s.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(s.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new Le().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],a=t[s.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=kt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){fn=new an;const i=this.parseModels(e.skeletons,t,n),s=$e.Objects.Model,a=this;i.forEach(function(l){const c=s[l.ID];a.setLookAtProperties(l,c),kt.get(l.ID).parents.forEach(function(h){const u=i.get(h.ID);u!==void 0&&u.add(l)}),l.parent===null&&fn.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),fn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Cg(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new jw().parse();fn.children.length===1&&fn.children[0].isGroup&&(fn.children[0].animations=o,fn=fn.children[0]),fn.animations=o}parseModels(e,t,n){const i=new Map,s=$e.Objects.Model;for(const a in s){const o=parseInt(a),l=s[a],c=kt.get(o);let d=this.buildSkeleton(c,e,o,l.attrName);if(!d){switch(l.attrType){case"Camera":d=this.createCamera(c);break;case"Light":d=this.createLight(c);break;case"Mesh":d=this.createMesh(c,t,n);break;case"NurbsCurve":d=this.createCurve(c,t);break;case"LimbNode":case"Root":d=new cd;break;case"Null":default:d=new an;break}d.name=l.attrName?lt.sanitizeNodeName(l.attrName):"",d.userData.originalName=l.attrName,d.ID=o}this.getTransformData(d,l),i.set(o,d)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,d){if(c.ID===a.ID){const h=s;s=new cd,s.matrixWorld.copy(c.transformLink),s.name=i?lt.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,l.bones[d]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=$e.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new pt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let d=45;n.FieldOfView!==void 0&&(d=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new jt(d,c,s,a),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new pt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new pt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=$e.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new pt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=Xe.colorSpaceToWorking(new ye().fromArray(n.Color.value),ct));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Sp(s,a,o,l);break;case 1:t=new pd(s,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=He.degToRad(n.InnerAngle.value));let d=0;n.OuterAngle!==void 0&&(d=He.degToRad(n.OuterAngle.value),d=Math.max(d,1)),t=new U_(s,a,o,c,d,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Sp(s,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,a=null;const o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new $o({name:Rs.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,d=s.groups.length;c<d;c++){const h=s.groups[c];(h.materialIndex<0||h.materialIndex>=o.length)&&(h.materialIndex=o.length,l=!0)}if(l){const c=new $o;o.push(c)}}return s.FBX_Deformer?(i=new Xy(s,a),i.normalizeSkinWeights()):i=new ae(s,a),i}createCurve(e,t){const n=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),i=new Ln({name:Rs.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Ft(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=wa(t.RotationOrder.value):n.eulerOrder=wa(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&kt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=$e.Objects.Model[i.ID];if("Lcl_Translation"in s){const a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),fn.add(e.target)):e.lookAt(new C().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const a=e[s];kt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;kt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Zd(a.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in $e.Objects){const t=$e.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Le().fromArray(s.Matrix.a)}):e[i.Node]=new Le().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in $e){if("AmbientColor"in $e.GlobalSettings){const e=$e.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new ye().setRGB(t,n,i,ct);fn.add(new dg(s,1))}}"UnitScaleFactor"in $e.GlobalSettings&&(fn.userData.unitScaleFactor=$e.GlobalSettings.UnitScaleFactor.value)}}}class Xw{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in $e.Objects){const n=$e.Objects.Geometry;for(const i in n){const s=kt.get(parseInt(i)),a=this.parseGeometry(s,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],a=e.parents.map(function(h){return $e.Objects.Model[h.ID]});if(a.length===0)return;const o=e.children.reduce(function(h,u){return i[u.ID]!==void 0&&(h=i[u.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=wa(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const d=Cg(c);return this.genGeometry(t,o,s,d)}genGeometry(e,t,n,i){const s=new Ke;e.attrName&&(s.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new nt(o.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new nt(o.colors,3)),t&&(s.setAttribute("skinIndex",new jd(o.weightsIndices,4)),s.setAttribute("skinWeight",new nt(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const c=new qe().getNormalMatrix(i),d=new nt(o.normal,3);d.applyNormalMatrix(c),s.setAttribute("normal",d)}if(o.uvs.forEach(function(c,d){const h=d===0?"uv":`uv${d}`;s.setAttribute(h,new nt(o.uvs[d],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],d=0;if(o.materialIndex.forEach(function(h,u){h!==c&&(s.addGroup(d,u-d,c),c=h,d=u)}),s.groups.length>0){const h=s.groups[s.groups.length-1],u=h.start+h.count;u!==o.materialIndex.length&&s.addGroup(u,o.materialIndex.length-u,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:s,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,a=[],o=[],l=[],c=[],d=[],h=[];const u=this;return e.vertexIndices.forEach(function(f,p){let y,g=!1;f<0&&(f=f^-1,g=!0);let m=[],x=[];if(a.push(f*3,f*3+1,f*3+2),e.color){const _=rl(p,n,f,e.color);l.push(_[0],_[1],_[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(_){x.push(_.weight),m.push(_.id)}),x.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const _=[0,0,0,0],v=[0,0,0,0];x.forEach(function(w,S){let T=w,P=m[S];v.forEach(function(M,E,I){if(T>M){I[E]=T,T=M;const D=_[E];_[E]=P,P=D}})}),m=_,x=v}for(;x.length<4;)x.push(0),m.push(0);for(let _=0;_<4;++_)d.push(x[_]),h.push(m[_])}if(e.normal){const _=rl(p,n,f,e.normal);o.push(_[0],_[1],_[2])}e.material&&e.material.mappingType!=="AllSame"&&(y=rl(p,n,f,e.material)[0],y<0&&(u.negativeMaterialIndices=!0,y=0)),e.uv&&e.uv.forEach(function(_,v){const w=rl(p,n,f,_);c[v]===void 0&&(c[v]=[]),c[v].push(w[0]),c[v].push(w[1])}),i++,g&&(u.genFace(t,e,a,y,o,l,c,d,h,i),n++,i=0,a=[],o=[],l=[],c=[],d=[],h=[])}),t}getNormalNewell(e){const t=new C(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t.x+=(i.y-s.y)*(i.z+s.z),t.y+=(i.z-s.z)*(i.x+s.x),t.z+=(i.x-s.x)*(i.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new C(0,1,0):new C(0,0,1)).cross(t).normalize(),s=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:s}}flattenVertex(e,t,n){return new Ae(e.dot(t),e.dot(n))}genFace(e,t,n,i,s,a,o,l,c,d){let h;if(d>3){const u=[],f=t.baseVertexPositions||t.vertexPositions;for(let m=0;m<n.length;m+=3)u.push(new C(f[n[m]],f[n[m+1]],f[n[m+2]]));const{tangent:p,bitangent:y}=this.getNormalTangentAndBitangent(u),g=[];for(const m of u)g.push(this.flattenVertex(m,p,y));h=Kd.triangulateShape(g,[])}else h=[[0,1,2]];for(const[u,f,p]of h)e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(a[u*3]),e.colors.push(a[u*3+1]),e.colors.push(a[u*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2]),e.colors.push(a[p*3]),e.colors.push(a[p*3+1]),e.colors.push(a[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[u*3]),e.normal.push(s[u*3+1]),e.normal.push(s[u*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[p*3]),e.normal.push(s[p*3+1]),e.normal.push(s[p*3+2])),t.uv&&t.uv.forEach(function(y,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(o[g][u*2]),e.uvs[g].push(o[g][u*2+1]),e.uvs[g].push(o[g][f*2]),e.uvs[g].push(o[g][f*2+1]),e.uvs[g].push(o[g][p*2]),e.uvs[g].push(o[g][p*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=$e.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,s){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],d=e.attributes.position.count*3,h=new Float32Array(d);for(let y=0;y<c.length;y++){const g=c[y]*3;h[g]=l[y*3],h[g+1]=l[y*3+1],h[g+2]=l[y*3+2]}const u={vertexIndices:o,vertexPositions:h,baseVertexPositions:a},f=this.genBuffers(u),p=new nt(f.vertex,3);p.name=s||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,o=new ye;a<i.length;a+=4)o.fromArray(i,a),Xe.colorSpaceToWorking(o,ct),o.toArray(i,a);return{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let a=0;a<i.length;++a)s.push(a);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ke;const n=t-1,i=e.KnotVector.a,s=[],a=e.Points.a;for(let h=0,u=a.length;h<u;h+=4)s.push(new mt().fromArray(a,h));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let h=0;h<n;++h)s.push(s[h])}const d=new Gw(n,i,s,o,l).getPoints(s.length*12);return new Ke().setFromPoints(d)}}class jw{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if($e.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=$e.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=$e.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map($w),values:t[n].KeyValueFloat.a},s=kt.get(i.id);if(s!==void 0){const a=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=$e.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],a=kt.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const d=e.get(l.ID);if(d.curves.x!==void 0||d.curves.y!==void 0||d.curves.z!==void 0){if(s[c]===void 0){const h=kt.get(l.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(h!==void 0){const u=$e.Objects.Model[h.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:u.attrName?lt.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};fn.traverse(function(p){p.ID===u.id&&(f.transform=p.matrix,p.userData.transformData&&(f.eulerOrder=p.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Le),"PreRotation"in u&&(f.preRotation=u.PreRotation.value),"PostRotation"in u&&(f.postRotation=u.PostRotation.value),s[c]=f}}s[c]&&(s[c][d.attr]=d)}else if(d.curves.morph!==void 0){if(s[c]===void 0){const h=kt.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,u=kt.get(h).parents[0].ID,f=kt.get(u).parents[0].ID,p=kt.get(f).parents[0].ID,y=$e.Objects.Model[p],g={modelName:y.attrName?lt.sanitizeNodeName(y.attrName):"",morphName:$e.Objects.Deformer[h].attrName};s[c]=g}s[c][d.attr]=d}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=$e.Objects.AnimationStack,n={};for(const i in t){const s=kt.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new fd(e.name,-1,t)}generateTracks(e){const t=[];let n=new C,i=new C;if(e.transform&&e.transform.decompose(n,new rt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,n);return new Sa(e+"."+i,s,a)}generateRotationTrack(e,t,n,i,s){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const u=this.interpolateRotations(t.x,t.y,t.z,s);a=u[0],o=u[1]}const l=wa(0);n!==void 0&&(n=n.map(He.degToRad),n.push(l),n=new Vt().fromArray(n),n=new rt().setFromEuler(n)),i!==void 0&&(i=i.map(He.degToRad),i.push(l),i=new Vt().fromArray(i),i=new rt().setFromEuler(i).invert());const c=new rt,d=new Vt,h=[];if(!o||!a)return new Tr(e+".quaternion",[0],[0]);for(let u=0;u<o.length;u+=3)d.set(o[u],o[u+1],o[u+2],s),c.setFromEuler(d),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),u>2&&new rt().fromArray(h,(u-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,u/3*4);return new Tr(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=fn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ba(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const a=t[s];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const d=t.x.values[a];s.push(d),i[0]=d}else s.push(i[0]);if(o!==-1){const d=t.y.values[o];s.push(d),i[1]=d}else s.push(i[1]);if(l!==-1){const d=t.z.values[l];s.push(d),i[2]=d}else s.push(i[2])}),s}interpolateRotations(e,t,n,i){const s=[],a=[];s.push(e.times[0]),a.push(He.degToRad(e.values[0])),a.push(He.degToRad(t.values[0])),a.push(He.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(He.degToRad),d=[e.values[o],t.values[o],n.values[o]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const h=d.map(He.degToRad),u=[d[0]-l[0],d[1]-l[1],d[2]-l[2]],f=[Math.abs(u[0]),Math.abs(u[1]),Math.abs(u[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const y=Math.max(...f)/180,g=new Vt(...c,i),m=new Vt(...h,i),x=new rt().setFromEuler(g),_=new rt().setFromEuler(m);x.dot(_)&&_.set(-_.x,-_.y,-_.z,-_.w);const v=e.times[o-1],w=e.times[o]-v,S=new rt,T=new Vt;for(let P=0;P<1;P+=1/y)S.copy(x.clone().slerp(_.clone(),P)),s.push(v+P*w),T.setFromQuaternion(S,i),a.push(T.x),a.push(T.y),a.push(T.z)}else s.push(e.times[o]),a.push(He.degToRad(e.values[o])),a.push(He.degToRad(t.values[o])),a.push(He.degToRad(n.values[o]))}return[s,a]}}class Yw{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Ag,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),d=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):d?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in o?(n==="PoseNode"?o.PoseNode.push(s):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=s)):typeof a.id=="number"?(o[n]={},o[n][a.id]=s):n!=="Properties70"&&(n==="PoseNode"?o[n]=[s]:o[n]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),d=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(u){return u.trim().replace(/^"/,"")}),i="connections",s=[c,d],Qw(s,h),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=s),i in a&&Array.isArray(a[i])?a[i].push(s):i!=="a"?a[i]=s:a.a=s,this.setCurrentProp(a,i),i==="a"&&s.slice(-1)!==","&&(a.a=Kc(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Kc(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(d){return d.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Kc(c);break}this.getPrevNode()[s]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class qw{parse(e){const t=new lm(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Ag;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let u=0;u<s;u++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",d=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const u=this.parseNode(e,t);u!==null&&this.parseSubNode(o,n,u)}return n.propertyList=l,typeof c=="number"&&(n.id=c),d!==""&&(n.attrName=d),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,a){a!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=Fw(new Uint8Array(e.getArrayBuffer(a))),l=new lm(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class lm{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Ag{add(e,t){this[e]=t}}function Zw(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===Pg(r,0,e.length)}function Jw(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function cm(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function $w(r){return r/46186158e3}const Kw=[];function rl(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,a=s+n.dataSize;return e1(Kw,n.buffer,s,a)}const $c=new Vt,ir=new C;function Cg(r){const e=new Le,t=new Le,n=new Le,i=new Le,s=new Le,a=new Le,o=new Le,l=new Le,c=new Le,d=new Le,h=new Le,u=new Le,f=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(ir.fromArray(r.translation));const p=wa(0);if(r.preRotation){const I=r.preRotation.map(He.degToRad);I.push(p),t.makeRotationFromEuler($c.fromArray(I))}if(r.rotation){const I=r.rotation.map(He.degToRad);I.push(r.eulerOrder||p),n.makeRotationFromEuler($c.fromArray(I))}if(r.postRotation){const I=r.postRotation.map(He.degToRad);I.push(p),i.makeRotationFromEuler($c.fromArray(I)),i.invert()}r.scale&&s.scale(ir.fromArray(r.scale)),r.scalingOffset&&o.setPosition(ir.fromArray(r.scalingOffset)),r.scalingPivot&&a.setPosition(ir.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(ir.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(ir.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(h.copy(r.parentMatrix),d.copy(r.parentMatrixWorld));const y=t.clone().multiply(n).multiply(i),g=new Le;g.extractRotation(d);const m=new Le;m.copyPosition(d);const x=m.clone().invert().multiply(d),_=g.clone().invert().multiply(x),v=s,w=new Le;if(f===0)w.copy(g).multiply(y).multiply(_).multiply(v);else if(f===1)w.copy(g).multiply(_).multiply(y).multiply(v);else{const D=new Le().scale(new C().setFromMatrixScale(h)).clone().invert(),B=_.clone().multiply(D);w.copy(g).multiply(y).multiply(B).multiply(v)}const S=c.clone().invert(),T=a.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(S).multiply(o).multiply(a).multiply(s).multiply(T);const M=new Le().copyPosition(P),E=d.clone().multiply(M);return u.copyPosition(E),P=u.clone().multiply(w),P.premultiply(d.invert()),P}function wa(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Kc(r){return r.split(",").map(function(t){return parseFloat(t)})}function Pg(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function Qw(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function e1(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}function hm(r){const e=new Map,t=new Map,n=r.clone();return Rg(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Rg(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Rg(r.children[n],e.children[n],t)}class t1{constructor(e){this.clock=new H_,this.raycaster=new ug,this.mouse=new Ae,this.objects=new Map,this.objectMeta=new Map,this.selectedId=null,this.idCounter=0,this.mixers=new Map,this.objectAnimations=new Map,this.currentActions=new Map,this.objectFPS=new Map,this.extraAnimBlobs=new Map,this.selectionBox=null,this.selectionFlash=null,this.flashStartTime=0,this.undoStack=[],this.redoStack=[],this.maxHistory=50,this.suppressHistory=!1,this.assetLibrary=new Map,this.modelCache=new Map,this.prefabRegistry=new Map,this.prefabTextures=new Map,this.onPrefabChange=null,this.clipboard=null,this.onSelect=null,this.onTransformChange=null,this.onHistoryChange=null,this.onAssetLibraryChange=null,this.onUpdate=null,this.onDeleteKey=null,this.inputLocked=!1,this.activeRenderCamera=null,this.pointerDownPos=null,this.onPointerDown=t=>{this.inputLocked||this.transformControls.dragging||(this.pointerDownPos={x:t.clientX,y:t.clientY},this.renderer.domElement.addEventListener("pointerup",this.onPointerUp,{once:!0}))},this.onPointerUp=t=>{if(!this.pointerDownPos)return;const n=t.clientX-this.pointerDownPos.x,i=t.clientY-this.pointerDownPos.y;if(this.pointerDownPos=null,n*n+i*i>25||this.inputLocked||this.transformControls.dragging)return;const s=this.container.getBoundingClientRect();this.mouse.x=(t.clientX-s.left)/s.width*2-1,this.mouse.y=-((t.clientY-s.top)/s.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const a=[];this.objects.forEach(l=>{l.traverse(c=>{c.isMesh&&!c.userData.__isOutline&&!c.userData.__isColliderHelper&&a.push(c)})});const o=this.raycaster.intersectObjects(a,!1);if(o.length>0){const l=o[0].object;for(const[c,d]of this.objects){let h=!1;if(d.traverse(u=>{u===l&&(h=!0)}),h){this.select(c);return}}}else this.deselect()},this.onKeyDown=t=>{if(!this.inputLocked&&t.target.tagName!=="INPUT"){if(t.key==="w"&&this.transformControls.setMode("translate"),t.key==="e"&&this.transformControls.setMode("rotate"),t.key==="r"&&this.transformControls.setMode("scale"),t.key==="Delete"&&this.selectedId){if(this.onDeleteKey&&this.onDeleteKey())return;const n=this.objectMeta.get(this.selectedId),i=(n==null?void 0:n.name)||this.selectedId;confirm(`確定要刪除「${i}」嗎？`)&&this.removeObject(this.selectedId)}t.key==="Escape"&&this.deselect(),t.ctrlKey&&t.key==="z"&&(t.preventDefault(),this.undo()),t.ctrlKey&&t.key==="y"&&(t.preventDefault(),this.redo()),t.ctrlKey&&t.key==="c"&&(t.preventDefault(),this.copy()),t.ctrlKey&&t.key==="v"&&(t.preventDefault(),this.paste())}},this.onResize=()=>{const t=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.activeRenderCamera&&this.activeRenderCamera!==this.camera&&(this.activeRenderCamera.aspect=t/n,this.activeRenderCamera.updateProjectionMatrix()),this.renderer.setSize(t,n)},this._toonGradientMap=null,this.colliderHelpers=new Map,this.colliderVisible=!0,this.attackRangeHelpers=new Map,this.attackRangeVisible=!0,this.editingPrefabId=null,this.animate=()=>{requestAnimationFrame(this.animate);const t=this.clock.getDelta();if(this.mixers.forEach(n=>n.update(t)),this.orbitControls.update(),this.selectionBox&&this.selectedId){const n=this.objects.get(this.selectedId);if(n){const i=new pi;if(n.traverse(s=>{if(s.isMesh&&!s.userData.__isOutline&&!s.userData.__isColliderHelper){const a=s;if(a.geometry&&(a.geometry.computeBoundingBox(),a.geometry.boundingBox)){const o=a.geometry.boundingBox.clone();o.applyMatrix4(a.matrixWorld),i.union(o)}}}),!i.isEmpty()){const s=i.getCenter(new C);this.selectionBox.position.copy(s);const a=i.getSize(new C);this.selectionBox.geometry.dispose();const l=new ar(new At(a.x+4,a.y+4,a.z+4));this.selectionBox.geometry=l,this.selectionBox.computeLineDistances()}}}this.updateFlash(),this.onUpdate&&this.onUpdate(t),this.renderer.setScissorTest(!1),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.activeRenderCamera??this.camera),this.renderAxisIndicator(),this.previewCamera&&this.previewRenderer&&this.previewRenderer.render(this.scene,this.previewCamera),this.renderCameraObjectPreview(),this.updateCameraHelper()},this.previewCamera=null,this.previewRenderer=null,this.cameraObjectId=null,this.cameraHelper=null,this.sceneCameraObj=null,this.cameraPreviewCanvas=null,this.cameraPreviewRenderer=null,this.cameraFollowTarget=null,this.cameraFollowOffset=new C(0,250,350),this.cameraLookOffset=new C(0,30,0),this.onCameraObjectChange=null,this.container=e,this.scene=new sp,this.scene.background=new ye(4868702),this.camera=new jt(60,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(0,200,400),this.renderer=new Xc({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tm,this.renderer.toneMapping=zn,this.renderer.outputColorSpace=ct,e.appendChild(this.renderer.domElement),this.orbitControls=new KS(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.dampingFactor=.08,this.orbitControls.target.set(0,0,0),this.transformControls=new dw(this.camera,this.renderer.domElement),this.transformControls.addEventListener("dragging-changed",t=>{this.orbitControls.enabled=!t.value}),this.transformControls.addEventListener("objectChange",()=>{this.syncTransformToMeta()}),this.transformControls.addEventListener("mouseUp",()=>{this.pushHistory()}),this.scene.add(this.transformControls.getHelper()),this.setupLights(),this.setupGround(),this.setupEvents(),this.setupAxisIndicator(),this.animate()}setInputLocked(e){this.inputLocked=e}setRenderCamera(e){this.activeRenderCamera=e}setupLights(){this.ambientLight=new dg(16777215,1.8),this.scene.add(this.ambientLight),this.sunLight=new pd(16777215,1.5),this.sunLight.position.set(100,200,150),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.setScalar(2048),this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=1500;const e=500;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.scene.add(this.sunLight);const t=new pd(11193599,.8);t.position.set(-100,100,-100),this.scene.add(t),this.hemiLight=new D_(13426175,5588019,.6),this.scene.add(this.hemiLight)}setupGround(){const e=new Ap(1e3,100,8947882,6710920);this.scene.add(e);const t=new Cp(150);this.scene.add(t);const n=(i,s,a)=>{const o=document.createElement("canvas");o.width=64,o.height=64;const l=o.getContext("2d");l.font="bold 48px Arial",l.fillStyle="#"+s.toString(16).padStart(6,"0"),l.textAlign="center",l.textBaseline="middle",l.fillText(i,32,32);const c=new hr(o),d=new ld({map:c,depthTest:!1}),h=new op(d);h.position.copy(a),h.scale.set(16,16,1),this.scene.add(h)};n("X",16729156,new C(165,0,0)),n("Y",4521796,new C(0,165,0)),n("Z",4491519,new C(0,0,165))}setupEvents(){this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("resize",this.onResize),window.addEventListener("keydown",this.onKeyDown)}setupAxisIndicator(){this.axisScene=new sp,this.axisCamera=new jt(50,1,.1,100),this.axisCamera.position.set(0,0,4);const e=.8,t=.03,n=(a,o,l)=>{const c=new on({color:o}),d=new zt(t,t,e,8),h=new ae(d,c);h.position.copy(a.clone().multiplyScalar(e/2)),h.quaternion.setFromUnitVectors(new C(0,1,0),a.clone().normalize()),this.axisScene.add(h);const u=new co(.07,.2,12),f=new ae(u,c);f.position.copy(a.clone().multiplyScalar(e+.1)),f.quaternion.setFromUnitVectors(new C(0,1,0),a.clone().normalize()),this.axisScene.add(f);const p=document.createElement("canvas");p.width=64,p.height=64;const y=p.getContext("2d");y.font="bold 48px Arial",y.fillStyle="#"+o.toString(16).padStart(6,"0"),y.textAlign="center",y.textBaseline="middle",y.fillText(l,32,32);const g=new hr(p),m=new ld({map:g,depthTest:!1,transparent:!0}),x=new op(m);x.position.copy(a.clone().multiplyScalar(e+.35)),x.scale.set(.4,.4,1),this.axisScene.add(x)};n(new C(1,0,0),16729156,"X"),n(new C(0,1,0),4521796,"Y"),n(new C(0,0,1),4491519,"Z");const i=new ho(.05,8,8),s=new on({color:13421772});this.axisScene.add(new ae(i,s))}renderAxisIndicator(){const e=this.activeRenderCamera??this.camera;this.axisCamera.quaternion.copy(e.quaternion),this.axisCamera.position.set(0,0,4).applyQuaternion(e.quaternion),this.axisCamera.lookAt(0,0,0);const t=120,n=this.renderer,i=n.autoClear;n.autoClear=!1;const s=new mt;n.getViewport(s);const a=new mt;n.getScissor(a);const o=n.getScissorTest();n.setViewport(10,10,t,t),n.setScissor(10,10,t,t),n.setScissorTest(!0),n.clearDepth(),n.render(this.axisScene,this.axisCamera),n.autoClear=i,n.setViewport(s),n.setScissor(a),n.setScissorTest(o)}syncTransformToMeta(){var n;if(!this.selectedId)return;const e=this.objects.get(this.selectedId),t=this.objectMeta.get(this.selectedId);!e||!t||(t.position=[e.position.x,e.position.y,e.position.z],t.rotation=[He.radToDeg(e.rotation.x),He.radToDeg(e.rotation.y),He.radToDeg(e.rotation.z)],t.scale=[e.scale.x,e.scale.y,e.scale.z],(n=this.onTransformChange)==null||n.call(this,this.selectedId,t))}syncAllTransforms(){for(const[e,t]of this.objects){const n=this.objectMeta.get(e);n&&(n.position=[t.position.x,t.position.y,t.position.z],n.rotation=[He.radToDeg(t.rotation.x),He.radToDeg(t.rotation.y),He.radToDeg(t.rotation.z)],n.scale=[t.scale.x,t.scale.y,t.scale.z])}}select(e){var n;const t=this.objects.get(e);t&&(this.selectedId=e,this.transformControls.attach(t),this.updateSelectionBox(t),(n=this.onSelect)==null||n.call(this,e))}deselect(){var e;this.selectedId=null,this.transformControls.detach(),this.clearSelectionBox(),(e=this.onSelect)==null||e.call(this,null)}updateSelectionBox(e){this.clearSelectionBox();const t=new pi;e.traverse(h=>{if(h.isMesh&&!h.userData.__isOutline&&!h.userData.__isColliderHelper){const u=h;if(u.geometry&&(u.geometry.computeBoundingBox(),u.geometry.boundingBox)){const f=u.geometry.boundingBox.clone();f.applyMatrix4(u.matrixWorld),t.union(f)}}}),t.isEmpty()&&t.setFromObject(e);const n=t.getSize(new C),i=t.getCenter(new C),s=new At(n.x+4,n.y+4,n.z+4),a=new ar(s),o=new _l({color:65535,transparent:!0,opacity:.9,dashSize:8,gapSize:4});this.selectionBox=new Zi(a,o),this.selectionBox.computeLineDistances(),this.selectionBox.position.copy(i),this.selectionBox.userData.__isOutline=!0,this.scene.add(this.selectionBox);const l=new At(n.x*1.02,n.y*1.02,n.z*1.02),c=new ar(l),d=new Ln({color:16777215,transparent:!0,opacity:1});this.selectionFlash=new Zi(c,d),this.selectionFlash.position.copy(i),this.selectionFlash.userData.__isOutline=!0,this.scene.add(this.selectionFlash),this.flashStartTime=performance.now()}clearSelectionBox(){this.selectionBox&&(this.scene.remove(this.selectionBox),this.selectionBox.geometry&&this.selectionBox.geometry.dispose(),this.selectionBox.material&&this.selectionBox.material.dispose(),this.selectionBox=null),this.selectionFlash&&(this.scene.remove(this.selectionFlash),this.selectionFlash.geometry.dispose(),this.selectionFlash.material.dispose(),this.selectionFlash=null)}updateFlash(){if(!this.selectionFlash)return;const e=(performance.now()-this.flashStartTime)/1e3,t=.6;if(e>=t)this.scene.remove(this.selectionFlash),this.selectionFlash.geometry.dispose(),this.selectionFlash.material.dispose(),this.selectionFlash=null;else{const n=e/t,i=this.selectionFlash.material;i.opacity=1-n,i.color.setRGB(1-n*1,1-n*0,1-n*0)}}getSelectedId(){return this.selectedId}setTransformMode(e){this.transformControls.setMode(e)}upgradeMaterial(e){if(e.isMeshToonMaterial)return e;const t=e,n=this.getToonGradientMap(),i=new __({color:t.color??13421772,map:t.map??null,gradientMap:n,side:mn,transparent:t.transparent??!1,opacity:t.opacity??1});return t.map&&(t.map.colorSpace=ct,this.ensurePowerOfTwo(t.map),t.map.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),t.map.generateMipmaps=!0,t.map.minFilter=Ai,t.map.magFilter=Kt,t.map.needsUpdate=!0),i}ensurePowerOfTwo(e){const t=e.image;if(!t)return;const n=t.width||t.naturalWidth,i=t.height||t.naturalHeight;if(!n||!i)return;const s=h=>(h&h-1)===0&&h>0;if(s(n)&&s(i))return;const a=h=>Math.pow(2,Math.round(Math.log2(h))),o=a(n),l=a(i),c=document.createElement("canvas");c.width=o,c.height=l;const d=c.getContext("2d");d&&(d.drawImage(t,0,0,o,l),e.image=c,e.needsUpdate=!0)}getToonGradientMap(){if(this._toonGradientMap)return this._toonGradientMap;const e=new Uint8Array([140,200,255]),t=new qd(e,e.length,1,Nd);return t.minFilter=Yt,t.magFilter=Yt,t.needsUpdate=!0,this._toonGradientMap=t,t}prepareFBX(e){e.traverse(t=>{var n;if(t.isMesh&&!t.userData.__isOutline&&!t.userData.__isColliderHelper){const i=t;i.castShadow=!0,i.receiveShadow=!0;const s=Array.isArray(i.material)?i.material:[i.material];for(const a of s){const o=a;for(const l of["map","normalMap","roughnessMap","aoMap","emissiveMap"])(n=o[l])!=null&&n.isTexture&&(this.ensurePowerOfTwo(o[l]),o[l].anisotropy=this.renderer.capabilities.getMaxAnisotropy(),o[l].generateMipmaps=!0,o[l].minFilter=Ai,o[l].magFilter=Kt,o[l].needsUpdate=!0)}Array.isArray(i.material)?i.material=i.material.map(a=>this.upgradeMaterial(a)):i.material=this.upgradeMaterial(i.material)}})}async getOrLoadModel(e){const t=e;if(this.modelCache.has(t)){const l=this.modelCache.get(t),c=hm(l);return c.animations=l.animations,c}const n=this.assetLibrary.get(e);if(!n)throw new Error(`Asset ${e} not found`);const i=URL.createObjectURL(n.blob),a=await new nr().loadAsync(i);URL.revokeObjectURL(i),this.prepareFBX(a),this.modelCache.set(t,a);const o=hm(a);return o.animations=a.animations,o}setupAnimations(e,t){if(t.animations&&t.animations.length>0){const n=new md(t);this.mixers.set(e,n),this.objectAnimations.set(e,[...t.animations]);const i=t.animations[0];if(i.tracks.length>0){const s=i.tracks[0].times;if(s.length>1){let a=Math.round(1/(s[1]-s[0]));(a<=0||a>120)&&(a=30),this.objectFPS.set(e,a)}}this.objectFPS.has(e)||this.objectFPS.set(e,30)}}getAnimationClips(e){return(this.objectAnimations.get(e)||[]).map(t=>t.name||"(unnamed)")}getAnimationFrameCount(e,t){const n=this.objectAnimations.get(e)||[],i=this.objectFPS.get(e)||30,s=n.find(a=>a.name===t);return s?Math.round(s.duration*i):0}getObjectFPS(e){return this.objectFPS.get(e)||30}getMixer(e){return this.mixers.get(e)}getObjectAnimationClips(e){return this.objectAnimations.get(e)}playAnimation(e,t,n=!0){const i=this.mixers.get(e),s=this.objectAnimations.get(e);if(!i||!s)return;const a=this.currentActions.get(e);a&&a.fadeOut(.3);const o=s.find(c=>c.name===t);if(!o)return;const l=i.clipAction(o);l.setLoop(n?sd:id,1/0),l.clampWhenFinished=!n,l.reset().fadeIn(.3).play(),this.currentActions.set(e,l)}playSegment(e,t,n,i,s=!0){const a=this.mixers.get(e),o=this.objectAnimations.get(e),l=this.objectFPS.get(e)||30;if(!a||!o)return;const c=this.currentActions.get(e);c&&c.fadeOut(.2);const d=o.find(f=>f.name===t);if(!d)return;const h=lg.subclip(d,`${t}_${n}_${i}`,n,i,l),u=a.clipAction(h);u.setLoop(s?sd:id,1/0),u.clampWhenFinished=!s,u.reset().fadeIn(.2).play(),this.currentActions.set(e,u)}stopAnimation(e){const t=this.currentActions.get(e);t&&(t.fadeOut(.3),this.currentActions.delete(e))}stopAllAnimations(){for(const[e,t]of this.currentActions)t.stop();this.currentActions.clear();for(const[,e]of this.mixers)e.stopAllAction()}pauseAnimation(e){const t=this.currentActions.get(e);t&&(t.paused=!0)}resumeAnimation(e){const t=this.currentActions.get(e);t&&(t.paused=!1)}async loadExtraAnimation(e,t){const n=this.objects.get(e);if(!n)return;const i=this.objectMeta.get(e),s=URL.createObjectURL(t),o=await new nr().loadAsync(s);if(URL.revokeObjectURL(s),o.animations.length>0){let l=this.objectAnimations.get(e);l||(l=[],this.objectAnimations.set(e,l));const c=new Set(l.map(h=>h.name)),d=t.name.replace(/\.fbx$/i,"");for(const h of o.animations){let u=h.name||d;if(c.has(u)){let f=2;for(;c.has(`${u}_${f}`);)f++;u=`${u}_${f}`}h.name=u,c.add(u)}if(l.push(...o.animations),this.mixers.has(e)||this.mixers.set(e,new md(n)),i){let h=this.extraAnimBlobs.get(i.modelPath);h||(h=[],this.extraAnimBlobs.set(i.modelPath,h)),h.push({name:t.name,blob:new File([t],t.name,{type:t.type})})}}}getObjectSegments(e){var t;return((t=this.objectMeta.get(e))==null?void 0:t.animations)||[]}addSegment(e,t){const n=this.objectMeta.get(e);n&&(n.animations||(n.animations=[]),n.animations.push(t))}removeSegment(e,t){const n=this.objectMeta.get(e);n!=null&&n.animations&&n.animations.splice(t,1)}hasAnimations(e){var t;return(((t=this.objectAnimations.get(e))==null?void 0:t.length)||0)>0}async addFBXFromFile(e,t){this.addToAssetLibrary(new File([e],e.name,{type:e.type}));const n=URL.createObjectURL(e),i=this.generateId(),s=new nr;let a;try{a=await s.loadAsync(n)}catch(l){throw URL.revokeObjectURL(n),l}URL.revokeObjectURL(n),this.prepareFBX(a),this.setupAnimations(i,a),this.scene.add(a),this.objects.set(i,a);const o={id:i,name:t||e.name.replace(".fbx",""),modelPath:e.name,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]};return this.objectMeta.set(i,o),this.select(i),this.pushHistory(),i}async addFBXFromUrl(e,t,n){const i=this.generateId(),a=await new nr().loadAsync(e);this.prepareFBX(a),this.setupAnimations(i,a),this.scene.add(a),this.objects.set(i,a);const o={id:i,name:t,modelPath:n,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]};return this.objectMeta.set(i,o),i}removeObject(e){if(e===this.cameraObjectId){this.removeCameraObject();return}const t=this.objects.get(e);t&&(this.selectedId===e&&this.deselect(),this.scene.remove(t),this.objects.delete(e),this.objectMeta.delete(e),this.pushHistory())}setObjectTransform(e,t,n,i){const s=this.objects.get(e),a=this.objectMeta.get(e);!s||!a||(t&&(s.position.set(...t),a.position=t),n&&(s.rotation.set(He.degToRad(n[0]),He.degToRad(n[1]),He.degToRad(n[2])),a.rotation=n),i&&(s.scale.set(...i),a.scale=i))}applyTexture(e,t,n,i){const s=this.objects.get(e);if(!s)return;const a=URL.createObjectURL(t),o=new ta().load(a,()=>{URL.revokeObjectURL(a)});if(o.colorSpace=n==="map"?ct:fi,o.flipY=!0,o.wrapS=Pn,o.wrapT=Pn,o.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),i!==void 0){this.collectMaterialSlots(s);const c=this.collectMaterials(s);if(i>=0&&i<c.length){const d=c[i];(n==="map"||d[n]!==void 0)&&(d[n]=o,d.needsUpdate=!0)}}else s.traverse(c=>{if(c.isMesh&&!c.userData.__isOutline&&!c.userData.__isColliderHelper){const d=c;(Array.isArray(d.material)?d.material:[d.material]).forEach(u=>{const f=u;(n==="map"||f[n]!==void 0)&&(f[n]=o,f.needsUpdate=!0)})}});const l=this.objectMeta.get(e);if(l){l.textures||(l.textures={});const c=i??0;l.textures[c]||(l.textures[c]={}),l.textures[c][n]=t.name}}setTiling(e,t,n,i){const s=this.objects.get(e);if(!s)return;const a=this.collectMaterials(s);if(t<0||t>=a.length)return;const o=a[t];if(!o.isMeshStandardMaterial&&!o.isMeshToonMaterial)return;[o.map,o.normalMap,o.roughnessMap,o.aoMap,o.emissiveMap].forEach(d=>{d&&(d.repeat.set(n[0],n[1]),d.offset.set(i[0],i[1]),d.needsUpdate=!0)}),o.needsUpdate=!0;const c=this.objectMeta.get(e);c&&(c.textures||(c.textures={}),c.textures[t]||(c.textures[t]={}),c.textures[t].tiling=n,c.textures[t].offset=i)}getMaterialSlots(e){const t=this.objects.get(e);return t?this.collectMaterialSlots(t):[]}setMaterialColor(e,t,n){const i=this.objects.get(e);if(!i)return;const s=this.collectMaterials(i);if(t<0||t>=s.length)return;const a=s[t];a.color&&(a.color.set(n),a.needsUpdate=!0);const o=this.objectMeta.get(e);o&&(o.textures||(o.textures={}),o.textures[t]||(o.textures[t]={}),o.textures[t].color=n)}setMaterialBrightness(e,t,n){const i=this.objects.get(e);if(!i)return;const s=this.collectMaterials(i);if(t<0||t>=s.length)return;const a=s[t];if(a.userData=a.userData||{},a.userData.__brightness=n,a.emissive){const l=a.color?a.color.clone():new ye(16777215),c=Math.max(0,n-1);a.emissive.copy(l).multiplyScalar(c),a.needsUpdate=!0}const o=this.objectMeta.get(e);o&&(o.textures||(o.textures={}),o.textures[t]||(o.textures[t]={}),o.textures[t].brightness=n)}setColliderVisibility(e){this.colliderVisible=e,this.colliderHelpers.forEach(t=>{t.visible=e})}isColliderVisible(){return this.colliderVisible}setEditorHelpersVisible(e){this.scene.traverse(t=>{(t instanceof Ap||t instanceof Cp||t.isSprite||t.userData.__isColliderHelper||t.userData.__isOutline||t.userData.__isCameraObject)&&(t.visible=e)}),e?(this.transformControls.getHelper().visible=!0,this.transformControls.enabled=!0):(this.transformControls.detach(),this.transformControls.getHelper().visible=!1,this.transformControls.enabled=!1,this.clearSelectionBox(),this.selectedId=null)}setDebugHelpersVisible(e){this.scene.traverse(t=>{t.userData.__isColliderHelper&&(t.visible=e)})}setCollider(e,t){const n=this.objectMeta.get(e);n&&(n.collider=t,this.updateColliderHelper(e))}getCollider(e){var t;return(t=this.objectMeta.get(e))==null?void 0:t.collider}getObjectBounds(e){const t=this.objects.get(e);if(!t)return new C(1,1,1);const n=new pi,i=t.matrixWorld.clone().invert();if(t.traverse(s=>{if(s.isMesh&&!s.userData.__isOutline&&!s.userData.__isColliderHelper){const a=s;if(a.geometry&&(a.geometry.computeBoundingBox(),a.geometry.boundingBox)){const o=a.geometry.boundingBox.clone(),l=i.clone().multiply(a.matrixWorld);o.applyMatrix4(l),n.union(o)}}}),n.isEmpty()){n.setFromObject(t);const s=n.getSize(new C),a=t.scale;return s.x/=Math.abs(a.x)||1,s.y/=Math.abs(a.y)||1,s.z/=Math.abs(a.z)||1,s}return n.getSize(new C)}getObjectBoundsBox(e){const t=this.objects.get(e),n=new pi;return t&&(t.traverse(i=>{if(i.isMesh&&!i.userData.__isOutline&&!i.userData.__isColliderHelper){const s=i;if(s.geometry&&(s.geometry.computeBoundingBox(),s.geometry.boundingBox)){const a=s.geometry.boundingBox.clone();a.applyMatrix4(s.matrixWorld),n.union(a)}}}),n.isEmpty()&&n.setFromObject(t)),n}updateColliderHelper(e){var g;const t=this.colliderHelpers.get(e);t&&((g=t.parent)==null||g.remove(t),this.colliderHelpers.delete(e));const n=this.objects.get(e),i=this.objectMeta.get(e);if(!n||!(i!=null&&i.collider)||i.collider.type==="none")return;const s=this.getObjectBounds(e),o=this.getObjectBoundsBox(e).getCenter(new C),l=n.position.clone(),c=o.sub(l),d=n.scale,h=new C(d.x!==0?c.x/d.x:0,d.y!==0?c.y/d.y:0,d.z!==0?c.z/d.z:0);let u;const f=i.collider.isTrigger?16776960:65280,p=new Ln({color:f,transparent:!0,opacity:.8});switch(i.collider.type){case"box":{const m=i.collider.sizeOverride?new C(...i.collider.sizeOverride).multiplyScalar(2):s,x=new At(m.x,m.y,m.z),_=new ar(x);u=new Zi(_,p);break}case"sphere":{const m=i.collider.radiusOverride??Math.max(s.x,s.y,s.z)/2,x=new an,_=48;for(const v of["xy","xz","yz"]){const w=[];for(let T=0;T<=_;T++){const P=T/_*Math.PI*2,M=Math.cos(P)*m,E=Math.sin(P)*m;v==="xy"?w.push(new C(M,E,0)):v==="xz"?w.push(new C(M,0,E)):w.push(new C(0,M,E))}const S=new Ke().setFromPoints(w);x.add(new Ft(S,p))}u=x;break}case"capsule":{const m=i.collider.radiusOverride??Math.max(s.x,s.z)/2,x=i.collider.heightOverride??s.y,_=Math.max(0,(x-m*2)/2),v=new an,w=48;for(const S of[_,-_]){const T=[];for(let M=0;M<=w;M++){const E=M/w*Math.PI*2;T.push(new C(Math.cos(E)*m,S,Math.sin(E)*m))}const P=new Ke().setFromPoints(T);v.add(new Ft(P,p))}for(let S=0;S<8;S++){const T=S/8*Math.PI*2,P=Math.cos(T)*m,M=Math.sin(T)*m,E=[new C(P,-_,M),new C(P,_,M)],I=new Ke().setFromPoints(E);v.add(new Ft(I,p))}for(const[S,T]of[[1,_],[-1,-_]])for(const P of["xz","yz"]){const M=[];for(let I=0;I<=w/2;I++){const D=I/(w/2)*Math.PI*S,B=Math.cos(D)*m,G=Math.sin(D)*m*S+T;P==="xz"?M.push(new C(B,G,0)):M.push(new C(0,G,B))}const E=new Ke().setFromPoints(M);v.add(new Ft(E,p))}u=v;break}case"mesh":{const m=new an;n.traverse(x=>{if(x.isMesh&&!x.userData.__isOutline&&!x.userData.__isColliderHelper){const _=new ar(x.geometry),v=new Zi(_,p.clone());v.position.copy(x.position),v.rotation.copy(x.rotation),v.scale.copy(x.scale),m.add(v)}}),u=m,u.position.set(0,0,0),u.userData.__isColliderHelper=!0,u.visible=this.colliderVisible,u.renderOrder=999,u.raycast=()=>{},n.add(u),this.colliderHelpers.set(e,u);return}default:return}const y=i.collider.offset||[0,0,0];u.position.set(h.x+y[0],h.y+y[1],h.z+y[2]),u.userData.__isColliderHelper=!0,u.visible=this.colliderVisible,u.renderOrder=999,u.raycast=()=>{},n.add(u),this.colliderHelpers.set(e,u)}refreshColliderHelpers(){for(const e of this.objects.keys())this.updateColliderHelper(e)}setAttackRangeVisibility(e){this.attackRangeVisible=e,this.attackRangeHelpers.forEach(t=>{t.visible=e})}clearAllAttackRangeHelpers(){var e;for(const[t,n]of this.attackRangeHelpers)(e=n.parent)==null||e.remove(n),n.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.attackRangeHelpers.clear()}isAttackRangeVisible(){return this.attackRangeVisible}updateAttackRangeHelper(e,t,n,i){var p;const s=this.attackRangeHelpers.get(e);if(s&&((p=s.parent)==null||p.remove(s),this.attackRangeHelpers.delete(e)),!t)return;const a=this.objects.get(e),o=this.objectMeta.get(e);if(!a||!(o!=null&&o.behavior))return;const l=o.behavior.attackRange;if(!l||l<=0)return;const c=o.behavior.attackAngle??120,d=t||"cone",h=n||0;let u;d==="circle"?u=this.createAttackCircleHelper(l,h):d==="rectangle"?u=this.createAttackRectHelper(l,i||60,h):u=this.createAttackConeHelper(l,c,h),u.userData.__isColliderHelper=!0,u.visible=this.attackRangeVisible,u.renderOrder=998,u.raycast=()=>{};const f=a.scale;u.scale.set(f.x!==0?1/f.x:1,f.y!==0?1/f.y:1,f.z!==0?1/f.z:1),a.add(u),this.attackRangeHelpers.set(e,u)}createAttackConeHelper(e,t,n=0){const i=new an,s=16729156,a=new Ln({color:s,transparent:!0,opacity:.6}),o=He.degToRad(t/2),l=24,c=1,d=n,h=[];for(let m=0;m<=l;m++){const x=m/l,_=-o+x*(o*2),v=Math.sin(_)*e,w=d+Math.cos(_)*e;h.push(new C(v,c,w))}const u=new Ke().setFromPoints(h);i.add(new Ft(u,a));const f=-o,p=o,y=new Ke().setFromPoints([new C(0,c,d),new C(Math.sin(f)*e,c,d+Math.cos(f)*e)]),g=new Ke().setFromPoints([new C(0,c,d),new C(Math.sin(p)*e,c,d+Math.cos(p)*e)]);return i.add(new Ft(y,a)),i.add(new Ft(g,a)),i}createAttackCircleHelper(e,t=0){const n=new an,i=16729156,s=new Ln({color:i,transparent:!0,opacity:.6}),a=32,o=1,l=[];for(let d=0;d<=a;d++){const h=d/a*Math.PI*2;l.push(new C(Math.cos(h)*e,o,t+Math.sin(h)*e))}const c=new Ke().setFromPoints(l);if(n.add(new Ft(c,s)),t>0){const d=new Ke().setFromPoints([new C(0,o,0),new C(0,o,t)]),h=new _l({color:i,dashSize:5,gapSize:5,transparent:!0,opacity:.4}),u=new Ft(d,h);u.computeLineDistances(),n.add(u)}return n}createAttackRectHelper(e,t,n=0){const i=new an,s=16729156,a=new Ln({color:s,transparent:!0,opacity:.6}),o=1,l=t/2,c=[new C(-l,o,n),new C(l,o,n),new C(l,o,n+e),new C(-l,o,n+e),new C(-l,o,n)],d=new Ke().setFromPoints(c);if(i.add(new Ft(d,a)),n>0){const h=new Ke().setFromPoints([new C(0,o,0),new C(0,o,n)]),u=new _l({color:s,dashSize:5,gapSize:5,transparent:!0,opacity:.4}),f=new Ft(h,u);f.computeLineDistances(),i.add(f)}return i}refreshAttackRangeHelpers(){for(const e of this.objects.keys())this.updateAttackRangeHelper(e)}collectMaterialSlots(e){const t=[];let n=0;return e.traverse(i=>{if(i.isMesh&&!i.userData.__isOutline&&!i.userData.__isColliderHelper){const s=i;(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>{var u;const l=o,c=l.map||l.normalMap||l.roughnessMap,d=l.color?"#"+l.color.getHexString():"#ffffff",h=((u=l.userData)==null?void 0:u.__brightness)??1;t.push({index:n++,name:o.name||`material_${n}`,meshName:s.name||"(unnamed mesh)",hasMap:!!l.map,hasNormalMap:!!l.normalMap,hasRoughnessMap:!!l.roughnessMap,tiling:c?[c.repeat.x,c.repeat.y]:[1,1],offset:c?[c.offset.x,c.offset.y]:[0,0],color:d,brightness:h})})}}),t}collectMaterials(e){const t=[];return e.traverse(n=>{if(n.isMesh&&!n.userData.__isOutline&&!n.userData.__isColliderHelper){const i=n;Array.isArray(i.material)?t.push(...i.material):t.push(i.material)}}),t}setAmbient(e,t){this.ambientLight.intensity=e,t&&this.ambientLight.color.set(t)}setSun(e,t,n){this.sunLight.intensity=e,t&&this.sunLight.color.set(t),n&&this.sunLight.position.set(...n)}getAllMeta(){return Array.from(this.objectMeta.values())}findObjectByPrefabId(e){const t=this.prefabRegistry.get(e);if(!t)return null;for(const[n,i]of this.objectMeta)if(i.modelPath===t.model||i.name===t.name)return n;return null}findPrefabIdByModel(e){var i,s;const t=((s=(i=e.split("/").pop())==null?void 0:i.split("\\").pop())==null?void 0:s.toLowerCase())||"",n=t.replace(/\.fbx$/i,"");for(const[a,o]of this.prefabRegistry){const l=o.model.toLowerCase(),c=l.replace(/\.fbx$/i,"");if(l===t||c===n||o.model===e)return a}return null}getMeta(e){return this.objectMeta.get(e)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getObjects(){return this.objects}getObjectMetaMap(){return this.objectMeta}getObjectAnimationsMap(){return this.objectAnimations}getObjectFPSMap(){return this.objectFPS}getOrbitControls(){return this.orbitControls}getTransformControls(){return this.transformControls}newScene(){var e,t;this.suppressHistory=!0,this.cameraObjectId&&(this.cameraHelper&&(this.scene.remove(this.cameraHelper),this.cameraHelper=null),this.sceneCameraObj=null,this.cameraObjectId=null,this.disposeCameraObjectPreview());for(const n of Array.from(this.objects.keys())){const i=this.objects.get(n);this.selectedId===n&&this.deselect(),this.scene.remove(i),this.objects.delete(n),this.objectMeta.delete(n)}this.setAmbient(1.5,"#ffffff"),this.setSun(2,"#ffffff",[100,300,150]),this.undoStack=[],this.redoStack=[],this.suppressHistory=!1,(e=this.onHistoryChange)==null||e.call(this),(t=this.onSelect)==null||t.call(this,null),this.onCameraObjectChange&&this.onCameraObjectChange()}exportScene(e){this.syncAllTransforms();const t=this.getAllMeta().filter(s=>s.modelPath!=="__camera__"),n={name:e,ambientColor:"#"+this.ambientLight.color.getHexString(),ambientIntensity:this.ambientLight.intensity,sunColor:"#"+this.sunLight.color.getHexString(),sunIntensity:this.sunLight.intensity,sunDirection:[this.sunLight.position.x,this.sunLight.position.y,this.sunLight.position.z],objects:t},i=this.getCameraExportData();return i&&(n.camera=i),n}async exportBundle(e){const t=this.exportScene(e),n={},i=new Set(t.objects.map(d=>d.modelPath));for(const d of i){const h=this.findAssetByName(d);if(h){const u=this.assetLibrary.get(h);if(u){const f=await u.blob.arrayBuffer();n[d]=this.arrayBufferToBase64(f)}}}const s={};for(const[d,h]of this.objects){const u=this.objectMeta.get(d);if(!u)continue;const f=this.collectMaterials(h);for(let p=0;p<f.length;p++){const y=f[p];if(!(!y.isMeshStandardMaterial&&!y.isMeshToonMaterial))for(const g of["map","normalMap","roughnessMap"]){const m=y[g];if(m&&m.image)try{const x=this.textureToDataUrl(m);if(x){const _=`${u.modelPath}__${p}__${g}`;s[_]={dataUrl:x,tiling:[m.repeat.x,m.repeat.y],offset:[m.offset.x,m.offset.y]}}}catch{}}}}const a={};for(const[d,h]of this.objects){const u=this.objectMeta.get(d);if(!u||a[u.modelPath])continue;const f=this.objectAnimations.get(d);f&&f.length>0&&(a[u.modelPath]=f.map(p=>p.name))}const o={};for(const[d,h]of this.extraAnimBlobs){const u=[];for(const{blob:f}of h){const p=await f.arrayBuffer();u.push(this.arrayBufferToBase64(p))}o[d]=u}const l={_format:"scene-bundle",_version:2,scene:t,models:n,textures:s,clipNames:a,extraAnims:o};console.log("[Bundle] Saving objects:",t.objects.map(d=>{var h,u;return{name:d.name,collider:(h=d.collider)==null?void 0:h.type,animations:(u=d.animations)==null?void 0:u.length,behavior:d.behavior}}));const c=JSON.stringify(l);if("CompressionStream"in window){const d=new Blob([c]),h=new CompressionStream("gzip"),u=d.stream().pipeThrough(h),f=await new Response(u).blob();return new Blob([f],{type:"application/gzip"})}return new Blob([c],{type:"application/json"})}async importBundle(e){var d,h,u,f,p,y,g;let t;const n=new Uint8Array(await e.slice(0,2).arrayBuffer());if(n[0]===31&&n[1]===139&&"DecompressionStream"in window){const m=new DecompressionStream("gzip"),x=e.stream().pipeThrough(m),_=await new Response(x).text();t=JSON.parse(_)}else t=JSON.parse(await e.text());if(t._format!=="scene-bundle"){const m=t;if(!m.objects||!Array.isArray(m.objects))throw new Error("Invalid scene file");return await this.importScene(m),{loaded:this.getAllMeta().length,total:m.objects.length}}const{scene:i,models:s,textures:a,extraAnims:o,clipNames:l}=t;for(const[m,x]of Object.entries(s)){const _=this.base64ToArrayBuffer(x),v=((d=m.split("/").pop())==null?void 0:d.split("\\").pop())||m,w=new File([_],v,{type:"application/octet-stream"});this.addToAssetLibrary(w)}this.suppressHistory=!0,this.cameraObjectId&&(this.cameraHelper&&(this.scene.remove(this.cameraHelper),this.cameraHelper=null),this.sceneCameraObj=null,this.cameraObjectId=null,this.cameraFollowTarget=null,this.disposeCameraObjectPreview());for(const m of Array.from(this.objects.keys())){const x=this.objects.get(m);this.selectedId===m&&this.deselect(),this.scene.remove(x),this.objects.delete(m),this.objectMeta.delete(m)}this.setAmbient(i.ambientIntensity,i.ambientColor),this.setSun(i.sunIntensity,i.sunColor,i.sunDirection);let c=0;console.log("[Bundle] Loading objects:",i.objects.map(m=>{var x,_;return{name:m.name,collider:(x=m.collider)==null?void 0:x.type,animations:(_=m.animations)==null?void 0:_.length,behavior:m.behavior}}));for(const m of i.objects){const x=this.findAssetByName(m.modelPath);if(x)try{const _=await this.spawnFromLibraryRaw(x,m.name,m.modelPath);if(_){this.setObjectTransform(_,m.position,m.rotation,m.scale);const v=this.objectMeta.get(_);v&&(m.collider&&(v.collider=m.collider),m.animations&&(v.animations=m.animations),m.behavior&&(v.behavior=m.behavior),m.textures&&(v.textures=m.textures)),c++}}catch(_){console.warn(`載入失敗: ${m.modelPath}`,_)}}if(o)for(const[m,x]of Object.entries(o)){const _=(h=Array.from(this.objectMeta.entries()).find(([,S])=>S.modelPath===m))==null?void 0:h[0];if(!_||!this.objects.get(_))continue;for(const S of x){const T=this.base64ToArrayBuffer(S),P=new File([T],"extra_anim.fbx",{type:"application/octet-stream"}),M=URL.createObjectURL(P);try{const I=await new nr().loadAsync(M);if(I.animations.length>0){let D=this.objectAnimations.get(_);D||(D=[],this.objectAnimations.set(_,D)),D.push(...I.animations)}}catch{}URL.revokeObjectURL(M)}if(l&&l[m]){const S=this.objectAnimations.get(_);if(S){const T=l[m];for(let P=0;P<Math.min(T.length,S.length);P++)S[P].name=T[P]}}const w=x.map(S=>{const T=this.base64ToArrayBuffer(S);return{name:"extra_anim.fbx",blob:new File([T],"extra_anim.fbx",{type:"application/octet-stream"})}});this.extraAnimBlobs.set(m,w)}for(const[m,x]of this.objects){const _=this.objectMeta.get(m);if(!_)continue;const v=this.collectMaterials(x);for(let w=0;w<v.length;w++){const S=v[w];if(!(!S.isMeshStandardMaterial&&!S.isMeshToonMaterial)){for(const T of["map","normalMap","roughnessMap"]){const P=`${_.modelPath}__${w}__${T}`,M=a[P];if(M){const E=new ta().load(M.dataUrl);E.colorSpace=T==="map"?ct:fi,E.flipY=!0,E.wrapS=Pn,E.wrapT=Pn,E.repeat.set(M.tiling[0],M.tiling[1]),E.offset.set(M.offset[0],M.offset[1]),E.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),S[T]=E,S.needsUpdate=!0,_.textures||(_.textures={}),_.textures[w]||(_.textures[w]={}),_.textures[w][T]=P,_.textures[w].tiling=M.tiling,_.textures[w].offset=M.offset}}if((f=(u=_.textures)==null?void 0:u[w])!=null&&f.color&&((p=S.color)==null||p.set(_.textures[w].color),S.needsUpdate=!0),((g=(y=_.textures)==null?void 0:y[w])==null?void 0:g.brightness)!==void 0){const T=_.textures[w].brightness;if(S.userData=S.userData||{},S.userData.__brightness=T,S.emissive){const P=S.color?S.color.clone():new ye(16777215),M=Math.max(0,T-1);S.emissive.copy(P).multiplyScalar(M),S.needsUpdate=!0}}}}}return this.suppressHistory=!1,this.pushHistory(),requestAnimationFrame(()=>{var m;for(const[x,_]of this.objectMeta)_.collider&&_.collider.type!=="none"&&this.updateColliderHelper(x),(m=_.behavior)!=null&&m.attackRange&&this.updateAttackRangeHelper(x)}),i.camera&&this.restoreCameraFromData(i.camera),{loaded:c,total:i.objects.length}}arrayBufferToBase64(e){const t=new Uint8Array(e);let n="";const i=8192;for(let s=0;s<t.length;s+=i)n+=String.fromCharCode(...t.subarray(s,s+i));return btoa(n)}base64ToArrayBuffer(e){const t=atob(e),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n.buffer}async saveTexturesToStorage(){try{const e=await this.openDB(),n=e.transaction("textures","readwrite").objectStore("textures");n.clear();for(const[i,s]of this.objects){const a=this.objectMeta.get(i);if(!a)continue;const o=this.collectMaterials(s);for(let l=0;l<o.length;l++){const c=o[l];if(!(!c.isMeshStandardMaterial&&!c.isMeshToonMaterial))for(const d of["map","normalMap","roughnessMap"]){const h=c[d];if(h&&h.image)try{const u=this.textureToDataUrl(h);if(u){const f=`${a.modelPath}__${l}__${d}`;n.put({key:f,dataUrl:u,tiling:[h.repeat.x,h.repeat.y],offset:[h.offset.x,h.offset.y]})}}catch{}}}}e.close()}catch(e){console.warn("Failed to save textures:",e)}}async loadTexturesFromStorage(){try{const e=await this.openDB(),n=e.transaction("textures","readonly").objectStore("textures"),i=await new Promise((s,a)=>{const o=n.getAll();o.onsuccess=()=>s(o.result),o.onerror=()=>a(o.error)});if(e.close(),i.length===0)return;for(const[s,a]of this.objects){const o=this.objectMeta.get(s);if(!o)continue;const l=this.collectMaterials(a);for(let c=0;c<l.length;c++){const d=l[c];if(!(!d.isMeshStandardMaterial&&!d.isMeshToonMaterial))for(const h of["map","normalMap","roughnessMap"]){const u=`${o.modelPath}__${c}__${h}`,f=i.find(p=>p.key===u);if(f){const p=new ta().load(f.dataUrl);p.colorSpace=h==="map"?ct:fi,p.flipY=!0,p.wrapS=Pn,p.wrapT=Pn,p.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),f.tiling&&p.repeat.set(f.tiling[0],f.tiling[1]),f.offset&&p.offset.set(f.offset[0],f.offset[1]),d[h]=p,d.needsUpdate=!0,o.textures||(o.textures={}),o.textures[c]||(o.textures[c]={}),f.tiling&&(o.textures[c].tiling=f.tiling),f.offset&&(o.textures[c].offset=f.offset)}}}}}catch(e){console.warn("Failed to load textures from storage:",e)}}async exportForGame(e){const t=new Map,n=[],i=[];for(const[l,c]of this.objects){const d=this.objectMeta.get(l);if(!d)continue;const h=d.modelPath.replace(/\.fbx$/i,"").replace(/[^a-zA-Z0-9_-]/g,"_");t.has(h)||t.set(h,{prefab:{id:h,name:d.name.replace(/_copy\d*$/,""),model:`models/${d.modelPath}`,scale:[1,1,1],collider:d.collider,textures:d.textures?JSON.parse(JSON.stringify(d.textures)):void 0},objIds:[]}),t.get(h).objIds.push(l)}for(const[l,{prefab:c}]of t){const d=t.get(l).objIds[0],h=this.objects.get(d);if(!h)continue;const u=this.collectMaterials(h);for(let p=0;p<u.length;p++){const y=u[p];if(!(!y.isMeshStandardMaterial&&!y.isMeshToonMaterial))for(const g of["map","normalMap","roughnessMap"]){const m=y[g];if(m&&m.image){const x=`textures/${l}_slot${p}_${g}.png`,_=this.textureToBlob(m);_&&(n.push({path:x,blob:_}),c.textures||(c.textures={}),c.textures[p]||(c.textures[p]={}),c.textures[p][g]=x,(m.repeat.x!==1||m.repeat.y!==1)&&(c.textures[p].tiling=[m.repeat.x,m.repeat.y]),(m.offset.x!==0||m.offset.y!==0)&&(c.textures[p].offset=[m.offset.x,m.offset.y]))}}}const f=this.findAssetByName(c.model.replace("models/",""));if(f){const p=this.assetLibrary.get(f);p&&i.push({path:c.model,blob:p.blob})}}const s=[];for(const[l,{objIds:c}]of t)for(const d of c){const h=this.objectMeta.get(d),u=h.modelPath.replace(/\.fbx$/i,"").replace(/[^a-zA-Z0-9_-]/g,"_");s.push({prefab:u,name:h.name,position:h.position,rotation:h.rotation,scale:h.scale})}const a={name:e,ambientColor:"#"+this.ambientLight.color.getHexString(),ambientIntensity:this.ambientLight.intensity,sunColor:"#"+this.sunLight.color.getHexString(),sunIntensity:this.sunLight.intensity,sunDirection:[this.sunLight.position.x,this.sunLight.position.y,this.sunLight.position.z],instances:s},o=[];for(const[l,{prefab:c}]of t)o.push({path:`prefabs/${l}.prefab.json`,json:JSON.stringify(c,null,2)});return{sceneJson:JSON.stringify(a,null,2),prefabs:o,textureFiles:n,modelFiles:i}}textureToDataUrl(e,t=.8){const n=e.image;if(!n)return null;const i=document.createElement("canvas");i.width=n.width||n.naturalWidth||256,i.height=n.height||n.naturalHeight||256;const s=i.getContext("2d");return s?(s.drawImage(n,0,0),this.canvasHasAlpha(s,i.width,i.height)?i.toDataURL("image/png"):i.toDataURL("image/jpeg",t)):null}canvasHasAlpha(e,t,n){const i=e.getImageData(0,0,t,n).data,s=Math.max(1,Math.floor(i.length/(4*200)));for(let a=3;a<i.length;a+=4*s)if(i[a]<250)return!0;return!1}textureToBlob(e){const t=e.image;if(!t)return null;const n=document.createElement("canvas");n.width=t.width||t.naturalWidth||256,n.height=t.height||t.naturalHeight||256;const i=n.getContext("2d");if(!i)return null;i.drawImage(t,0,0);const s=this.canvasHasAlpha(i,n.width,n.height),a=s?n.toDataURL("image/png"):n.toDataURL("image/jpeg",.8),o=atob(a.split(",")[1]),l=new Uint8Array(o.length);for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return new Blob([l],{type:s?"image/png":"image/jpeg"})}async importScene(e,t){this.suppressHistory=!0,this.cameraObjectId&&(this.cameraHelper&&(this.scene.remove(this.cameraHelper),this.cameraHelper=null),this.sceneCameraObj=null,this.cameraObjectId=null,this.cameraFollowTarget=null,this.disposeCameraObjectPreview());for(const i of Array.from(this.objects.keys())){const s=this.objects.get(i);this.selectedId===i&&this.deselect(),this.scene.remove(s),this.objects.delete(i),this.objectMeta.delete(i)}this.setAmbient(e.ambientIntensity,e.ambientColor),this.setSun(e.sunIntensity,e.sunColor,e.sunDirection);const n=[];for(const i of e.objects){let s=null;const a=this.findAssetByName(i.modelPath);if(a)try{s=await this.spawnFromLibraryRaw(a,i.name,i.modelPath)}catch(o){console.warn(`素材庫載入失敗 ${i.modelPath}:`,o)}if(!s){const o=t?`${t}/${i.modelPath}`:i.modelPath;try{s=await this.addFBXFromUrl(o,i.name,i.modelPath)}catch{n.push(i.modelPath)}}if(s){this.setObjectTransform(s,i.position,i.rotation,i.scale);const o=this.objectMeta.get(s);o&&(i.collider&&(o.collider=i.collider,this.updateColliderHelper(s)),i.animations&&(o.animations=i.animations),i.behavior&&(o.behavior=i.behavior),i.textures&&(o.textures=i.textures))}}this.suppressHistory=!1,this.pushHistory();for(const[i,s]of this.objects){const a=this.objectMeta.get(i);if(!(a!=null&&a.textures))continue;const o=this.collectMaterials(s);for(const[l,c]of Object.entries(a.textures)){const d=parseInt(l);if(d<0||d>=o.length)continue;const h=o[d];if(c.color&&h.color&&(h.color.set(c.color),h.needsUpdate=!0),c.brightness!==void 0&&(h.userData=h.userData||{},h.userData.__brightness=c.brightness,h.emissive)){const u=h.color?h.color.clone():new ye(16777215),f=Math.max(0,c.brightness-1);h.emissive.copy(u).multiplyScalar(f),h.needsUpdate=!0}}}return requestAnimationFrame(()=>{var i;for(const[s,a]of this.objectMeta)a.collider&&a.collider.type!=="none"&&this.updateColliderHelper(s),(i=a.behavior)!=null&&i.attackRange&&this.updateAttackRangeHelper(s)}),e.camera&&this.restoreCameraFromData(e.camera),n}findAssetByName(e){var i,s;if(!e)return null;const t=((s=(i=e.split("/").pop())==null?void 0:i.split("\\").pop())==null?void 0:s.toLowerCase())||"",n=t.replace(/\.fbx$/i,"");for(const[a,o]of this.assetLibrary){const l=o.name.toLowerCase();if(l===n||l===t||l+".fbx"===t||n===l.replace(/\.fbx$/i,""))return a}return null}async spawnFromLibraryRaw(e,t,n){if(!this.assetLibrary.get(e))return null;const s=this.generateId(),a=await this.getOrLoadModel(e);this.setupAnimations(s,a),this.scene.add(a),this.objects.set(s,a);const o={id:s,name:t,modelPath:n,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]};return this.objectMeta.set(s,o),s}pushHistory(){var t;if(this.suppressHistory)return;const e=JSON.stringify(this.getAllMeta());this.undoStack.push(e),this.undoStack.length>this.maxHistory&&this.undoStack.shift(),this.redoStack=[],(t=this.onHistoryChange)==null||t.call(this)}undo(){var n;if(this.undoStack.length===0)return;const e=JSON.stringify(this.getAllMeta());this.redoStack.push(e);const t=this.undoStack.pop();this.restoreFromSnapshot(JSON.parse(t)),(n=this.onHistoryChange)==null||n.call(this)}redo(){var n;if(this.redoStack.length===0)return;const e=JSON.stringify(this.getAllMeta());this.undoStack.push(e);const t=this.redoStack.pop();this.restoreFromSnapshot(JSON.parse(t)),(n=this.onHistoryChange)==null||n.call(this)}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}restoreFromSnapshot(e){var t;this.suppressHistory=!0;for(const n of e){if(n.modelPath==="__camera__")continue;if(this.objects.get(n.id)){this.setObjectTransform(n.id,n.position,n.rotation,n.scale);const s=this.objectMeta.get(n.id);s&&(s.name=n.name)}}for(const n of Array.from(this.objects.keys()))if(n!==this.cameraObjectId&&!e.find(i=>i.id===n)){const i=this.objects.get(n);this.selectedId===n&&this.deselect(),this.scene.remove(i),this.objects.delete(n),this.objectMeta.delete(n)}this.suppressHistory=!1,(t=this.onSelect)==null||t.call(this,this.selectedId)}copy(){if(!this.selectedId)return;const e=this.objectMeta.get(this.selectedId);if(!e)return;const t=this.findAssetByName(e.modelPath);t&&(this.clipboard={assetId:t,meta:JSON.parse(JSON.stringify(e)),sourceId:this.selectedId})}paste(){this.clipboard&&this.pasteFromClipboard()}async pasteFromClipboard(){var u;if(!this.clipboard)return;const{assetId:e,meta:t,sourceId:n}=this.clipboard,i=this.assetLibrary.get(e);if(!i)return;const s=URL.createObjectURL(i.blob),a=this.generateId(),l=await new nr().loadAsync(s);URL.revokeObjectURL(s),this.prepareFBX(l),this.scene.add(l),this.objects.set(a,l);const c=[t.position[0]+50,t.position[1],t.position[2]+50],d={id:a,name:t.name+"_copy",modelPath:t.modelPath,position:c,rotation:[...t.rotation],scale:[...t.scale],textures:t.textures?JSON.parse(JSON.stringify(t.textures)):void 0,collider:t.collider?JSON.parse(JSON.stringify(t.collider)):void 0,animations:t.animations?JSON.parse(JSON.stringify(t.animations)):void 0,behavior:t.behavior?{...t.behavior}:void 0};this.objectMeta.set(a,d),this.setObjectTransform(a,d.position,d.rotation,d.scale),this.setupAnimations(a,l),d.collider&&d.collider.type!=="none"&&this.updateColliderHelper(a);const h=this.objects.get(n);if(h){const f=this.collectMaterials(h),p=this.collectMaterials(l);for(let y=0;y<Math.min(f.length,p.length);y++){const g=f[y],m=p[y];if(!(!g.isMeshStandardMaterial&&!g.isMeshToonMaterial||!m.isMeshStandardMaterial&&!m.isMeshToonMaterial))for(const x of["map","normalMap","roughnessMap"]){const _=g[x];if(_){const v=_.clone();v.needsUpdate=!0,m[x]=v,m.needsUpdate=!0}}}}this.select(a),this.pushHistory(),(u=this.onSelect)==null||u.call(this,a)}canPaste(){return this.clipboard!==null}addToAssetLibrary(e){var n;for(const[i,s]of this.assetLibrary)if(s.name.toLowerCase()===e.name.replace(".fbx","").toLowerCase())return i;const t=`asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`;return this.assetLibrary.set(t,{name:e.name.replace(".fbx",""),blob:e}),this.saveAssetLibraryToStorage(),(n=this.onAssetLibraryChange)==null||n.call(this),t}getAssetLibrary(){const e=[];return this.assetLibrary.forEach((t,n)=>{e.push({assetId:n,name:t.name})}),e}async spawnFromLibrary(e){const t=this.assetLibrary.get(e);if(!t)return null;const n=this.generateId(),i=await this.getOrLoadModel(e);this.setupAnimations(n,i),this.scene.add(i),this.objects.set(n,i);const s={id:n,name:t.name,modelPath:t.name+".fbx",position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]};return this.objectMeta.set(n,s),this.select(n),this.pushHistory(),n}removeFromAssetLibrary(e){var t;this.assetLibrary.delete(e),this.saveAssetLibraryToStorage(),(t=this.onAssetLibraryChange)==null||t.call(this)}saveToPrefab(e,t){var c;const n=this.objects.get(e),i=this.objectMeta.get(e);if(!n||!i||e===this.cameraObjectId)return null;const s=t?t.replace(/[^a-zA-Z0-9_-]/g,"_"):i.modelPath.replace(/\.fbx$/i,"").replace(/[^a-zA-Z0-9_-]/g,"_")+"_"+Date.now().toString(36),a=this.collectMaterials(n),o={};for(let d=0;d<a.length;d++){const h=a[d];if(!(!h.isMeshStandardMaterial&&!h.isMeshToonMaterial))for(const u of["map","normalMap","roughnessMap"]){const f=h[u];if(f&&f.image){o[d]||(o[d]={}),o[d][u]=`${s}__${d}__${u}`,(f.repeat.x!==1||f.repeat.y!==1)&&(o[d].tiling=[f.repeat.x,f.repeat.y]),(f.offset.x!==0||f.offset.y!==0)&&(o[d].offset=[f.offset.x,f.offset.y]);try{const p=this.textureToDataUrl(f);p&&this.prefabTextures.set(`${s}__${d}__${u}`,p)}catch{}}}}const l={id:s,name:t||i.name,model:i.modelPath,scale:[...i.scale],collider:i.collider?JSON.parse(JSON.stringify(i.collider)):void 0,animations:i.animations&&i.animations.length>0?[...i.animations]:void 0,fps:this.objectFPS.get(e),behavior:i.behavior?{...i.behavior}:void 0,textures:Object.keys(o).length>0?o:void 0};return this.prefabRegistry.set(s,l),this.savePrefabsToStorage(),(c=this.onPrefabChange)==null||c.call(this),s}updatePrefab(e,t){var l;const n=this.objects.get(t),i=this.objectMeta.get(t);if(!n||!i)return!1;const s=this.prefabRegistry.get(e);if(!s)return!1;const a=this.collectMaterials(n),o={};for(let c=0;c<a.length;c++){const d=a[c];if(!(!d.isMeshStandardMaterial&&!d.isMeshToonMaterial))for(const h of["map","normalMap","roughnessMap"]){const u=d[h];if(u&&u.image){o[c]||(o[c]={}),o[c][h]=`${e}__${c}__${h}`,(u.repeat.x!==1||u.repeat.y!==1)&&(o[c].tiling=[u.repeat.x,u.repeat.y]),(u.offset.x!==0||u.offset.y!==0)&&(o[c].offset=[u.offset.x,u.offset.y]);try{const f=this.textureToDataUrl(u);f&&this.prefabTextures.set(`${e}__${c}__${h}`,f)}catch{}}}}return s.scale=[...i.scale],s.collider=i.collider?JSON.parse(JSON.stringify(i.collider)):s.collider,s.animations=i.animations&&i.animations.length>0?[...i.animations]:s.animations,s.fps=this.objectFPS.get(t)||s.fps,s.behavior=i.behavior?{...i.behavior}:s.behavior,s.textures=Object.keys(o).length>0?o:s.textures,this.savePrefabsToStorage(),(l=this.onPrefabChange)==null||l.call(this),this.syncPrefabInstances(e,t),!0}syncPrefabInstances(e,t){const n=this.prefabRegistry.get(e);if(!n)return;const i=this.objects.get(t);if(!i)return;const s=this.objectMeta.get(t);for(const[a,o]of this.objectMeta){if(a===t||o.modelPath!==n.model)continue;const l=this.objects.get(a);if(!l)continue;s!=null&&s.collider&&(o.collider=JSON.parse(JSON.stringify(s.collider)),this.updateColliderHelper(a)),s!=null&&s.animations&&s.animations.length>0&&(o.animations=JSON.parse(JSON.stringify(s.animations))),s!=null&&s.behavior&&(o.behavior={...s.behavior},this.updateAttackRangeHelper(a));const c=this.collectMaterials(i),d=this.collectMaterials(l);for(let h=0;h<Math.min(c.length,d.length);h++){const u=c[h],f=d[h];if(!(!u.isMeshStandardMaterial&&!u.isMeshToonMaterial||!f.isMeshStandardMaterial&&!f.isMeshToonMaterial))for(const p of["map","normalMap","roughnessMap"]){const y=u[p];if(y){const g=y.clone();g.needsUpdate=!0,f[p]=g}else f[p]=null;f.needsUpdate=!0}}}}startEditPrefab(e){return this.editingPrefabId=e,e}getEditingPrefabId(){return this.editingPrefabId}finishEditPrefab(e){if(!this.editingPrefabId)return!1;const t=this.updatePrefab(this.editingPrefabId,e);return this.editingPrefabId=null,t}cancelEditPrefab(){this.editingPrefabId=null}async spawnFromPrefab(e){var o;const t=this.prefabRegistry.get(e);if(!t)return null;const n=this.findAssetByName(t.model);if(!n)return null;const i=this.generateId(),s=await this.getOrLoadModel(n);this.setupAnimations(i,s),this.scene.add(s),this.objects.set(i,s);const a={id:i,name:t.name,modelPath:t.model,position:[0,0,0],rotation:[0,0,0],scale:[...t.scale],collider:t.collider?JSON.parse(JSON.stringify(t.collider)):void 0,animations:t.animations?JSON.parse(JSON.stringify(t.animations)):void 0,behavior:t.behavior?{...t.behavior}:void 0,textures:t.textures?JSON.parse(JSON.stringify(t.textures)):void 0};if(this.objectMeta.set(i,a),this.setObjectTransform(i,a.position,a.rotation,a.scale),t.textures){const l=this.collectMaterials(s);for(const[c,d]of Object.entries(t.textures)){const h=parseInt(c);if(h>=l.length)continue;const u=l[h];if(!(!u.isMeshStandardMaterial&&!u.isMeshToonMaterial))for(const f of["map","normalMap","roughnessMap"]){const p=d[f];if(!p)continue;const y=this.prefabTextures.get(p);if(y){const g=new ta().load(y);g.colorSpace=f==="map"?ct:fi,g.flipY=!0,g.wrapS=Pn,g.wrapT=Pn,g.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),d.tiling&&g.repeat.set(d.tiling[0],d.tiling[1]),d.offset&&g.offset.set(d.offset[0],d.offset[1]),u[f]=g,u.needsUpdate=!0}}}}return a.collider&&a.collider.type!=="none"&&this.updateColliderHelper(i),(o=a.behavior)!=null&&o.attackRange&&this.updateAttackRangeHelper(i),this.select(i),this.pushHistory(),i}getPrefabList(){const e=[];return this.prefabRegistry.forEach(t=>e.push({id:t.id,name:t.name,model:t.model})),e}deletePrefab(e){var t;this.prefabRegistry.delete(e);for(const n of Array.from(this.prefabTextures.keys()))n.startsWith(e+"__")&&this.prefabTextures.delete(n);this.savePrefabsToStorage(),(t=this.onPrefabChange)==null||t.call(this)}async exportPrefabToFile(e){const t=this.prefabRegistry.get(e);if(!t)return null;const n={};for(const[o,l]of this.prefabTextures)o.startsWith(e+"__")&&(n[o]=l);const i=this.findAssetByName(t.model);let s;if(i){const o=this.assetLibrary.get(i);o&&(s=this.arrayBufferToBase64(await o.blob.arrayBuffer()))}const a={_format:"prefab-file",_version:1,prefab:t,textures:n,model:s};return new Blob([JSON.stringify(a,null,2)],{type:"application/json"})}async importPrefabFromFile(e){var a;const t=JSON.parse(await e.text());if(t._format!=="prefab-file")throw new Error("不是有效的 Prefab 檔案");const{prefab:n,textures:i,model:s}=t;if(s){const o=this.base64ToArrayBuffer(s),l=n.model.split("/").pop()||n.model,c=new File([o],l,{type:"application/octet-stream"});this.addToAssetLibrary(c)}for(const[o,l]of Object.entries(i))this.prefabTextures.set(o,l);return this.prefabRegistry.set(n.id,n),this.savePrefabsToStorage(),(a=this.onPrefabChange)==null||a.call(this),n.id}async savePrefabsToStorage(){try{const e=await this.openDB(),n=e.transaction("prefabs","readwrite").objectStore("prefabs");n.clear();for(const[i,s]of this.prefabRegistry){const a={};for(const[o,l]of this.prefabTextures)o.startsWith(i+"__")&&(a[o]=l);n.put({id:i,prefab:JSON.stringify(s),textures:a})}e.close()}catch(e){console.warn("Failed to save prefabs:",e)}}async loadPrefabsFromStorage(){var e;try{const t=await this.openDB(),i=t.transaction("prefabs","readonly").objectStore("prefabs"),s=await new Promise((a,o)=>{const l=i.getAll();l.onsuccess=()=>a(l.result),l.onerror=()=>o(l.error)});t.close();for(const a of s){const o=JSON.parse(a.prefab);this.prefabRegistry.set(a.id,o);for(const[l,c]of Object.entries(a.textures))this.prefabTextures.set(l,c)}(e=this.onPrefabChange)==null||e.call(this)}catch(t){console.warn("Failed to load prefabs:",t)}}async openDB(){return new Promise((e,t)=>{const n=indexedDB.open("SceneEditorAssets",3);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains("assets")||i.createObjectStore("assets",{keyPath:"id"}),i.objectStoreNames.contains("textures")||i.createObjectStore("textures",{keyPath:"key"}),i.objectStoreNames.contains("prefabs")||i.createObjectStore("prefabs",{keyPath:"id"})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error),n.onblocked=()=>{console.warn("IndexedDB upgrade blocked - close other tabs"),t(new Error("DB blocked"))}})}async saveAssetLibraryToStorage(){try{const e=[];for(const[s,a]of this.assetLibrary){const o=await a.blob.arrayBuffer();e.push({id:s,name:a.name,data:o,fileName:a.name+".fbx"})}const t=await this.openDB(),i=t.transaction("assets","readwrite").objectStore("assets");i.clear();for(const s of e)i.put(s);t.close()}catch(e){console.warn("Failed to save asset library:",e)}}async loadAssetLibraryFromStorage(){var e;try{const t=await this.openDB(),i=t.transaction("assets","readonly").objectStore("assets"),s=await new Promise((a,o)=>{const l=i.getAll();l.onsuccess=()=>a(l.result),l.onerror=()=>o(l.error)});t.close();for(const a of s){const o=new File([a.data],a.fileName||a.name+".fbx",{type:"application/octet-stream"});this.assetLibrary.set(a.id,{name:a.name,blob:o})}(e=this.onAssetLibraryChange)==null||e.call(this)}catch(t){console.warn("Failed to load asset library:",t)}}generateId(){return`obj_${++this.idCounter}_${Date.now().toString(36)}`}setupCameraPreview(e){this.previewCamera=new jt(60,e.clientWidth/e.clientHeight,.1,1e4),this.previewRenderer=new Xc({canvas:e,antialias:!0}),this.previewRenderer.setSize(e.clientWidth,e.clientHeight),this.previewRenderer.setPixelRatio(window.devicePixelRatio),this.previewRenderer.toneMapping=Fd,this.previewRenderer.toneMappingExposure=1.4,this.previewRenderer.outputColorSpace=ct}updateCameraPreview(e,t){if(!this.previewCamera||!this.selectedId)return;const n=this.objects.get(this.selectedId);if(!n)return;const i=n.position.clone();this.previewCamera.position.set(i.x+e[0],i.y+e[1],i.z+e[2]),this.previewCamera.lookAt(i.x+t[0],i.y+t[1],i.z+t[2])}disposeCameraPreview(){var e;(e=this.previewRenderer)==null||e.dispose(),this.previewRenderer=null,this.previewCamera=null}getCameraObjectId(){return this.cameraObjectId}hasCameraObject(){return this.cameraObjectId!==null}addCameraObject(){if(this.cameraObjectId)return this.cameraObjectId;const e=this.generateId();this.cameraObjectId=e;const t=new jt(60,16/9,1,5e3);t.position.set(0,200,400),t.lookAt(0,0,0),t.userData.__isCameraObject=!0,t.userData.__editorHelper=!0,this.sceneCameraObj=t,this.scene.add(t);const n=new tx(t);n.userData.__isCameraObject=!0,n.userData.__editorHelper=!0,this.cameraHelper=n,this.scene.add(n),this.objects.set(e,t);const i={id:e,name:"🎥 攝影機",modelPath:"__camera__",position:[t.position.x,t.position.y,t.position.z],rotation:[He.radToDeg(t.rotation.x),He.radToDeg(t.rotation.y),He.radToDeg(t.rotation.z)],scale:[1,1,1]};return this.objectMeta.set(e,i),this.pushHistory(),this.onCameraObjectChange&&this.onCameraObjectChange(),e}removeCameraObject(){if(!this.cameraObjectId)return;const e=this.objects.get(this.cameraObjectId);e&&this.scene.remove(e),this.cameraHelper&&(this.scene.remove(this.cameraHelper),this.cameraHelper=null),this.objects.delete(this.cameraObjectId),this.objectMeta.delete(this.cameraObjectId),this.selectedId===this.cameraObjectId&&this.deselect(),this.sceneCameraObj=null,this.cameraObjectId=null,this.disposeCameraObjectPreview(),this.pushHistory(),this.onCameraObjectChange&&this.onCameraObjectChange()}getSceneCameraObject(){return this.sceneCameraObj}setCameraFov(e){this.sceneCameraObj&&(this.sceneCameraObj.fov=e,this.sceneCameraObj.updateProjectionMatrix(),this.cameraHelper&&this.cameraHelper.update())}setCameraNearFar(e,t){this.sceneCameraObj&&(this.sceneCameraObj.near=e,this.sceneCameraObj.far=t,this.sceneCameraObj.updateProjectionMatrix(),this.cameraHelper&&this.cameraHelper.update())}getCameraFov(){var e;return((e=this.sceneCameraObj)==null?void 0:e.fov)??60}getCameraNear(){var e;return((e=this.sceneCameraObj)==null?void 0:e.near)??1}getCameraFar(){var e;return((e=this.sceneCameraObj)==null?void 0:e.far)??5e3}getCameraAspect(){var e;return((e=this.sceneCameraObj)==null?void 0:e.aspect)??16/9}setCameraAspect(e){this.sceneCameraObj&&(this.sceneCameraObj.aspect=e,this.sceneCameraObj.updateProjectionMatrix(),this.cameraHelper&&this.cameraHelper.update())}setCameraFollowTarget(e){this.cameraFollowTarget=e}getCameraFollowTarget(){return this.cameraFollowTarget}setCameraFollowOffset(e){this.cameraFollowOffset.set(...e)}getCameraFollowOffset(){return[this.cameraFollowOffset.x,this.cameraFollowOffset.y,this.cameraFollowOffset.z]}setCameraLookOffset(e){this.cameraLookOffset.set(...e)}getCameraLookOffset(){return[this.cameraLookOffset.x,this.cameraLookOffset.y,this.cameraLookOffset.z]}getCameraExportData(){if(!this.cameraObjectId||!this.sceneCameraObj)return;const e=this.objectMeta.get(this.cameraObjectId);if(!e)return;const t=this.sceneCameraObj,n=[t.position.x,t.position.y,t.position.z],i=[He.radToDeg(t.rotation.x),He.radToDeg(t.rotation.y),He.radToDeg(t.rotation.z)];e.position=n,e.rotation=i;const s={position:n,rotation:i,fov:t.fov,near:t.near,far:t.far,aspect:t.aspect};return this.cameraFollowTarget&&(s.followTarget=this.cameraFollowTarget,s.followOffset=[this.cameraFollowOffset.x,this.cameraFollowOffset.y,this.cameraFollowOffset.z],s.lookOffset=[this.cameraLookOffset.x,this.cameraLookOffset.y,this.cameraLookOffset.z]),s}restoreCameraFromData(e){this.cameraObjectId&&this.removeCameraObject(),this.addCameraObject(),this.cameraObjectId&&this.sceneCameraObj&&(this.setObjectTransform(this.cameraObjectId,e.position,e.rotation,[1,1,1]),this.setCameraFov(e.fov??60),this.setCameraNearFar(e.near??1,e.far??5e3),e.aspect&&this.setCameraAspect(e.aspect),e.followTarget?(this.cameraFollowTarget=e.followTarget,this.cameraFollowOffset.set(...e.followOffset||[0,250,350]),this.cameraLookOffset.set(...e.lookOffset||[0,30,0])):(this.cameraFollowTarget=null,this.cameraFollowOffset.set(0,250,350),this.cameraLookOffset.set(0,30,0)),this.cameraHelper&&this.cameraHelper.update()),this.onCameraObjectChange&&this.onCameraObjectChange()}setupCameraObjectPreview(e){this.cameraPreviewCanvas=e,this.cameraPreviewRenderer=new Xc({canvas:e,antialias:!0,alpha:!0}),this.cameraPreviewRenderer.setSize(e.clientWidth,e.clientHeight),this.cameraPreviewRenderer.setPixelRatio(window.devicePixelRatio),this.cameraPreviewRenderer.toneMapping=zn,this.cameraPreviewRenderer.outputColorSpace=ct}disposeCameraObjectPreview(){var e;(e=this.cameraPreviewRenderer)==null||e.dispose(),this.cameraPreviewRenderer=null,this.cameraPreviewCanvas=null}renderCameraObjectPreview(){var n;if(!this.cameraPreviewRenderer||!this.sceneCameraObj)return;const e=this.sceneCameraObj.quaternion.clone();if(this.cameraFollowTarget){const i=Array.from(this.objectMeta.values()).find(s=>s.name===this.cameraFollowTarget);if(i){const s=this.objects.get(i.id);s&&this.sceneCameraObj.lookAt(s.position)}}const t=(n=this.cameraHelper)==null?void 0:n.visible;this.cameraHelper&&(this.cameraHelper.visible=!1),this.cameraPreviewRenderer.render(this.scene,this.sceneCameraObj),this.cameraHelper&&t!==void 0&&(this.cameraHelper.visible=t),this.sceneCameraObj.quaternion.copy(e)}updateCameraHelper(){!this.sceneCameraObj||!this.cameraHelper||this.cameraHelper.update()}isCameraObject(e){return e===this.cameraObjectId}dispose(){this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("resize",this.onResize),window.removeEventListener("keydown",this.onKeyDown),this.transformControls.dispose(),this.orbitControls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}async function n1(r){const e=await r.arrayBuffer(),t=new Uint8Array(e),n=t[0],i=t[1],s=t[2],a=t[12]|t[13]<<8,o=t[14]|t[15]<<8,l=t[16],c=t[17];if(i!==0)throw new Error("Color-mapped TGA not supported");if(s!==2&&s!==10)throw new Error(`Unsupported TGA type: ${s}`);if(l!==24&&l!==32)throw new Error(`Unsupported bit depth: ${l}`);const d=l/8,h=a*o;let u=18+n;const f=document.createElement("canvas");f.width=a,f.height=o;const p=f.getContext("2d"),y=p.createImageData(a,o),g=y.data;if(s===2)for(let x=0;x<h;x++){const _=t[u++],v=t[u++],w=t[u++],S=d===4?t[u++]:255,T=x*4;g[T]=w,g[T+1]=v,g[T+2]=_,g[T+3]=S}else{let x=0;for(;x<h;){const _=t[u++],v=(_&127)+1;if(_&128){const w=t[u++],S=t[u++],T=t[u++],P=d===4?t[u++]:255;for(let M=0;M<v;M++){const E=x*4;g[E]=T,g[E+1]=S,g[E+2]=w,g[E+3]=P,x++}}else for(let w=0;w<v;w++){const S=t[u++],T=t[u++],P=t[u++],M=d===4?t[u++]:255,E=x*4;g[E]=P,g[E+1]=T,g[E+2]=S,g[E+3]=M,x++}}}if(p.putImageData(y,0,0),!((c&32)!==0)){const x=document.createElement("canvas");x.width=a,x.height=o;const _=x.getContext("2d");return _.translate(0,o),_.scale(1,-1),_.drawImage(f,0,0),x}return f}async function i1(r,e="image/png"){const t=await n1(r);return new Promise((n,i)=>{t.toBlob(s=>{s?n(s):i(new Error("Failed to convert TGA to blob"))},e)})}async function s1(r){const e=await i1(r,"image/png"),t=r.name.replace(/\.tga$/i,".png");return new File([e],t,{type:"image/png"})}class r1{constructor(){this.bodies=[],this.triggerCallbacks=new Map,this.phaseThroughBodies=new Set,this.debugScene=null,this.debugHelpers=new Map,this.debugVisible=!1}addBody(e,t,n){var u,f;if(!t||t.type==="none"||t.type==="mesh")return;const i=e.object3D.scale,s=Math.abs(i.x)||1,a=Math.abs(i.z)||1,o=(s+a)/2,l=t.offset||[0,0,0],c=e.object3D.position.x+l[0]*s,d=e.object3D.position.z+l[2]*a,h={id:e.id,type:t.type,isStatic:t.isStatic??!0,isTrigger:t.isTrigger??!1,centerX:c,centerZ:d,object:e};switch(t.type){case"box":{const p=(((u=t.sizeOverride)==null?void 0:u[0])??n.x/2)*s,y=(((f=t.sizeOverride)==null?void 0:f[2])??n.z/2)*a;h.halfExtents={x:p,z:y},h.rotation=e.object3D.rotation.y;break}case"sphere":{h.radius=(t.radiusOverride??Math.max(n.x,n.z)/2)*o;break}case"capsule":{h.radius=(t.radiusOverride??Math.max(n.x,n.z)/2)*o;break}}return this.bodies.push(h),h}onTrigger(e){const t=`cb_${Date.now()}`;return this.triggerCallbacks.set(t,e),t}update(){for(const e of this.bodies)e.isStatic||(e.centerX=e.object.object3D.position.x,e.centerZ=e.object.object3D.position.z);for(let e=0;e<this.bodies.length;e++)for(let t=e+1;t<this.bodies.length;t++){const n=this.bodies[e],i=this.bodies[t];(n.isTrigger||i.isTrigger)&&this.testOverlap(n,i)&&this.triggerCallbacks.forEach(s=>s(n,i))}}resolveMovement(e,t){const n=t.clone(),i=e.radius??5,s=this.phaseThroughBodies.has(e.id);for(const a of this.bodies){if(a.id===e.id||a.isTrigger||s&&!a.isStatic)continue;let o=a.centerX,l=a.centerZ;if(a.isStatic||(o=a.object.object3D.position.x,l=a.object.object3D.position.z),a.type==="box"&&a.halfExtents)this.pushCircleOutOfOBB(n,i,o,l,a.halfExtents.x,a.halfExtents.z,a.rotation||0);else{const c=a.radius??10;this.pushCircleOutOfCircle(n,i,o,l,c)}}return n}setPhaseThrough(e,t){t?this.phaseThroughBodies.add(e):this.phaseThroughBodies.delete(e)}isPhaseThrough(e){return this.phaseThroughBodies.has(e)}removeBody(e){const t=this.bodies.indexOf(e);t>=0&&this.bodies.splice(t,1)}removeBodyById(e){this.bodies=this.bodies.filter(t=>t.id!==e)}removeTriggerCallback(e){this.triggerCallbacks.delete(e)}getBodyById(e){return this.bodies.find(t=>t.id===e)}enableDebug(e){this.debugScene=e}buildDebugVisuals(){if(!this.debugScene)return;const e=new Ln({color:65416,transparent:!0,opacity:.6,depthTest:!1});for(const t of this.bodies){if(this.debugHelpers.has(t.id))continue;let n=null;switch(t.type){case"box":{if(!t.halfExtents)break;const i=new ar(new At(t.halfExtents.x*2,100,t.halfExtents.z*2));n=new Zi(i,e.clone()),n.position.set(t.centerX,50,t.centerZ),t.rotation&&(n.rotation.y=t.rotation);break}case"sphere":case"capsule":{if(!t.radius)break;const i=32,s=[];for(let o=0;o<=i;o++){const l=o/i*Math.PI*2;s.push(new C(Math.cos(l)*t.radius,0,Math.sin(l)*t.radius))}const a=new Ke().setFromPoints(s);n=new Ft(a,e.clone()),n.position.set(t.centerX,5,t.centerZ);break}}n&&(n.visible=this.debugVisible,n.renderOrder=998,this.debugScene.add(n),this.debugHelpers.set(t.id,n))}}setDebugVisible(e){this.debugVisible=e;for(const[,t]of this.debugHelpers)t.visible=e}updateDebugVisuals(){if(this.debugVisible){this.buildDebugVisuals();for(const e of this.bodies){const t=this.debugHelpers.get(e.id);if(!t)continue;const n=e.isStatic?e.centerX:e.object.object3D.position.x,i=e.isStatic?e.centerZ:e.object.object3D.position.z;t.position.x=n,t.position.z=i}for(const[e,t]of this.debugHelpers)this.bodies.find(n=>n.id===e)||(this.debugScene&&this.debugScene.remove(t),this.debugHelpers.delete(e))}}isDebugVisible(){return this.debugVisible}pushCircleOutOfOBB(e,t,n,i,s,a,o){const l=Math.cos(-o),c=Math.sin(-o),d=e.x-n,h=e.z-i,u=d*l-h*c,f=d*c+h*l,p=Math.max(-s,Math.min(u,s)),y=Math.max(-a,Math.min(f,a)),g=u-p,m=f-y,x=g*g+m*m;if(x>=t*t)return;const _=Math.sqrt(x);let v,w;if(_>.001){const P=t-_;v=g/_*P,w=m/_*P}else{const P=u+s,M=s-u,E=f+a,I=a-f,D=Math.min(P,M,E,I);v=0,w=0,D===P?v=-(P+t):D===M?v=M+t:D===E?w=-(E+t):w=I+t}const S=Math.cos(o),T=Math.sin(o);e.x+=v*S-w*T,e.z+=v*T+w*S}pushCircleOutOfCircle(e,t,n,i,s){const a=e.x-n,o=e.z-i,l=a*a+o*o,c=t+s;if(l>=c*c||l<1e-4)return;const d=Math.sqrt(l),h=c-d;e.x+=a/d*h,e.z+=o/d*h}testOverlap(e,t){const n=this.getRadius(e),i=this.getRadius(t),s=e.centerX-t.centerX,a=e.centerZ-t.centerZ;return s*s+a*a<(n+i)*(n+i)}getRadius(e){return e.radius?e.radius:e.halfExtents?Math.max(e.halfExtents.x,e.halfExtents.z):10}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dm=1234567;const Ig=Math.PI/180,Lg=180/Math.PI;function a1(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function hi(r,e,t){return Math.max(e,Math.min(t,r))}function Fg(r,e){return(r%e+e)%e}function o1(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function l1(r,e,t){return r!==e?(t-r)/(e-r):0}function Dg(r,e,t){return(1-t)*r+t*e}function c1(r,e,t,n){return Dg(r,e,1-Math.exp(-t*n))}function h1(r,e=1){return e-Math.abs(Fg(r,e*2)-e)}function d1(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function u1(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function f1(r,e){return r+Math.floor(Math.random()*(e-r+1))}function p1(r,e){return r+Math.random()*(e-r)}function m1(r){return r*(.5-Math.random())}function g1(r){r!==void 0&&(dm=r);let e=dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y1(r){return r*Ig}function _1(r){return r*Lg}function x1(r){return(r&r-1)===0&&r!==0}function v1(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function M1(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function b1(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*d,l*h,l*u,o*c);break;case"YZY":r.set(l*u,o*d,l*h,o*c);break;case"ZXZ":r.set(l*h,l*u,o*d,o*c);break;case"XZX":r.set(o*d,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*d,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*d,o*c);break;default:console.warn("../math.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function S1(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function w1(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Or={DEG2RAD:Ig,RAD2DEG:Lg,generateUUID:a1,clamp:hi,euclideanModulo:Fg,mapLinear:o1,inverseLerp:l1,lerp:Dg,damp:c1,pingpong:h1,smoothstep:d1,smootherstep:u1,randInt:f1,randFloat:p1,randFloatSpread:m1,seededRandom:g1,degToRad:y1,radToDeg:_1,isPowerOfTwo:x1,ceilPowerOfTwo:v1,floorPowerOfTwo:M1,setQuaternionFromProperEuler:b1,normalize:w1,denormalize:S1};class ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[a+0],f=s[a+1],p=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=y;return}if(h!==y||l!==u||c!==f||d!==p){let g=1-o;const m=l*u+c*f+d*p+h*y,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),S=Math.atan2(w,m*x);g=Math.sin(g*S)/w,o=Math.sin(o*S)/w}const v=o*x;if(l=l*g+u*v,c=c*g+f*v,d=d*g+p*v,h=h*g+y*v,g===1-o){const w=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=w,c*=w,d*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[a],u=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+d*h+l*f-c*u,e[t+1]=l*p+d*u+c*h-o*f,e[t+2]=c*p+d*f+o*u-l*h,e[t+3]=d*p-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new ft(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"YXZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"ZXY":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"ZYX":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"YZX":this._x=u*d*h+c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h-u*f*p;break;case"XZY":this._x=u*d*h-c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h+u*f*p;break;default:console.warn("../math.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hi(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ve{constructor(e=0,t=0,n=0){this.isVector3=!0,ve.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new ve(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=i+l*h+s*d-a*c,this}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this.z=Math.abs(this.z),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new ve,um=new ft,al=2e3,fm=2001;class ti{constructor(e,t,n,i,s,a,o,l,c,d,h,u,f,p,y,g){this.isMatrix4=!0,ti.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,h,u,f,p,y,g)}extractPosition(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)}multiplyToArray(e,t,n){return console.error("THREE.Matrix4: .multiplyToArray() has been removed."),this}setRotationFromQuaternion(e){return this.makeRotationFromQuaternion(e)}set(e,t,n,i,s,a,o,l,c,d,h,u,f,p,y,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=u,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ti().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*h,p=o*d,y=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,p=c*d,y=c*h;t[0]=u+y*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-p,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,p=c*d,y=c*h;t[0]=u-y*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*d,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,p=o*d,y=o*h;t[0]=l*d,t[4]=p*c-f,t[8]=u*c+y,t[1]=l*h,t[5]=y*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*d,t[4]=y-u*h,t[8]=p*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+p,t[10]=u-y*h}else if(e.order==="XZY"){const u=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+y,t[5]=a*d,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*d,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E1,e,T1)}lookAt(e,t,n){const i=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Wi.crossVectors(n,An),Wi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Wi.crossVectors(n,An)),Wi.normalize(),ol.crossVectors(An,Wi),i[0]=Wi.x,i[4]=ol.x,i[8]=An.x,i[1]=Wi.y,i[5]=ol.y,i[9]=An.y,i[2]=Wi.z,i[6]=ol.z,i[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],w=n[15],S=i[0],T=i[4],P=i[8],M=i[12],E=i[1],I=i[5],D=i[9],B=i[13],G=i[2],H=i[6],V=i[10],z=i[14],X=i[3],K=i[7],te=i[11],ne=i[15];return s[0]=a*S+o*E+l*G+c*X,s[4]=a*T+o*I+l*H+c*K,s[8]=a*P+o*D+l*V+c*te,s[12]=a*M+o*B+l*z+c*ne,s[1]=d*S+h*E+u*G+f*X,s[5]=d*T+h*I+u*H+f*K,s[9]=d*P+h*D+u*V+f*te,s[13]=d*M+h*B+u*z+f*ne,s[2]=p*S+y*E+g*G+m*X,s[6]=p*T+y*I+g*H+m*K,s[10]=p*P+y*D+g*V+m*te,s[14]=p*M+y*B+g*z+m*ne,s[3]=x*S+_*E+v*G+w*X,s[7]=x*T+_*I+v*H+w*K,s[11]=x*P+_*D+v*V+w*te,s[15]=x*M+_*B+v*z+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],p=e[3],y=e[7],g=e[11],m=e[15];return p*(+s*l*h-i*c*h-s*o*u+n*c*u+i*o*f-n*l*f)+y*(+t*l*f-t*c*u+s*a*u-i*a*f+i*c*d-s*l*d)+g*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*d-n*c*d)+m*(-i*o*d-t*l*h+t*o*u+i*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],p=e[12],y=e[13],g=e[14],m=e[15],x=h*g*c-y*u*c+y*l*f-o*g*f-h*l*m+o*u*m,_=p*u*c-d*g*c-p*l*f+a*g*f+d*l*m-a*u*m,v=d*y*c-p*h*c+p*o*f-a*y*f-d*o*m+a*h*m,w=p*h*l-d*y*l-p*o*u+a*y*u+d*o*g-a*h*g,S=t*x+n*_+i*v+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(y*u*s-h*g*s-y*i*f+n*g*f+h*i*m-n*u*m)*T,e[2]=(o*g*s-y*l*s+y*i*c-n*g*c-o*i*m+n*l*m)*T,e[3]=(h*l*s-o*u*s-h*i*c+n*u*c+o*i*f-n*l*f)*T,e[4]=_*T,e[5]=(d*g*s-p*u*s+p*i*f-t*g*f-d*i*m+t*u*m)*T,e[6]=(p*l*s-a*g*s-p*i*c+t*g*c+a*i*m-t*l*m)*T,e[7]=(a*u*s-d*l*s+d*i*c-t*u*c-a*i*f+t*l*f)*T,e[8]=v*T,e[9]=(p*h*s-d*y*s-p*n*f+t*y*f+d*n*m-t*h*m)*T,e[10]=(a*y*s-p*o*s+p*n*c-t*y*c-a*n*m+t*o*m)*T,e[11]=(d*o*s-a*h*s-d*n*c+t*h*c+a*n*f-t*o*f)*T,e[12]=w*T,e[13]=(d*y*i-p*h*i+p*n*u-t*y*u-d*n*g+t*h*g)*T,e[14]=(p*o*i-a*y*i-p*n*l+t*y*l+a*n*g-t*o*g)*T,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,f=s*d,p=s*h,y=a*d,g=a*h,m=o*h,x=l*c,_=l*d,v=l*h,w=n.x,S=n.y,T=n.z;return i[0]=(1-(y+m))*w,i[1]=(f+v)*w,i[2]=(p-_)*w,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(u+m))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(p+_)*T,i[9]=(g-x)*T,i[10]=(1-(u+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=sr.set(i[0],i[1],i[2]).length();const a=sr.set(i[4],i[5],i[6]).length(),o=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/s,d=1/a,h=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=al){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let f,p;if(o===al)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===fm)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=al){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(a-s),u=(t+e)*c,f=(n+i)*d;let p,y;if(o===al)p=(a+s)*h,y=-2*h;else if(o===fm)p=s*h,y=-1*h;else throw new Error("../math.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new ve,Yn=new ti,E1=new ve(0,0,0),T1=new ve(1,1,1),Wi=new ve,ol=new ve,An=new ve,pm=new ti,mm=new ft;class Ea{constructor(e=0,t=0,n=0,i=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new Ea(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(hi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(hi(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hi(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(hi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-hi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("../math.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(e){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Ar{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new Ar(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Ar.isVector2=!0;class gn{constructor(e=0,t=0,n=0,i=1){gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new gn(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(f+1)/2,w=(m+1)/2,S=(d+u)/4,T=(h+y)/4,P=(p+g)/4;return _>v&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=S/n,s=T/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=P/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-y)/x,this.z=(u-d)/x,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi{constructor(e,t,n,i,s,a,o,l,c){mi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],p=n[8],y=i[0],g=i[3],m=i[6],x=i[1],_=i[4],v=i[7],w=i[2],S=i[5],T=i[8];return s[0]=a*y+o*x+l*w,s[3]=a*g+o*_+l*S,s[6]=a*m+o*v+l*T,s[1]=c*y+d*x+h*w,s[4]=c*g+d*_+h*S,s[7]=c*m+d*v+h*T,s[2]=u*y+f*x+p*w,s[5]=u*g+f*_+p*S,s[8]=u*m+f*v+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,f=c*s-a*l,p=t*h+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=h*y,e[1]=(i*c-d*n)*y,e[2]=(o*n-i*a)*y,e[3]=u*y,e[4]=(d*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(eh.makeScale(e,t)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new mi().fromArray(this.elements)}}const eh=new mi;var ln;(function(r){r[r.Random=0]="Random",r[r.Loop=1]="Loop",r[r.PingPong=2]="PingPong",r[r.Burst=3]="Burst"})(ln||(ln={}));function Ur(r,e,t,n){let i;switch(ln.Random===r?e=Math.random():ln.Burst===r&&n.isBursting&&(e=n.burstParticleIndex/n.burstParticleCount),t>0?i=Math.floor(e/t)*t:i=e,r){case ln.Loop:i=i%1;break;case ln.PingPong:i=Math.abs(i%2-1);break}return i}class Ci{constructor(e,t,n,i){this.p=[e,t,n,i]}genValue(e){const t=e*e,n=e*e*e,i=1-e,s=i*i,a=s*i;return this.p[0]*a+this.p[1]*s*e*3+this.p[2]*i*t*3+this.p[3]*n}derivativeCoefficients(e){const t=[];for(let n=e,i=n.length-1;i>0;i--){const s=[];for(let a=0;a<i;a++){const o=i*(n[a+1]-n[a]);s.push(o)}t.push(s),n=s}return t}getSlope(e){const t=this.derivativeCoefficients(this.p)[0],n=1-e,i=n*n,s=n*e*2,a=e*e;return i*t[0]+s*t[1]+a*t[2]}controlCurve(e,t){this.p[1]=e/3+this.p[0],this.p[2]=this.p[3]-t/3}hull(e){let t=this.p,n=[],i,s=0,a=0,o=0;const l=[];for(l[s++]=t[0],l[s++]=t[1],l[s++]=t[2],l[s++]=t[3];t.length>1;){for(n=[],a=0,o=t.length-1;a<o;a++)i=e*t[a]+(1-e)*t[a+1],l[s++]=i,n.push(i);t=n}return l}split(e){const t=this.hull(e);return{left:new Ci(t[0],t[4],t[7],t[9]),right:new Ci(t[9],t[8],t[6],t[3]),span:t}}clone(){return new Ci(this.p[0],this.p[1],this.p[2],this.p[3])}toJSON(){return{p0:this.p[0],p1:this.p[1],p2:this.p[2],p3:this.p[3]}}static fromJSON(e){return new Ci(e.p0,e.p1,e.p2,e.p3)}}const Ta=r=>({r:r.x,g:r.y,b:r.z,a:r.w}),Aa=r=>new gn(r.r,r.g,r.b,r.a),A1=(r,e)=>{switch(e){case"Vector3":return new ve(r.x,r.y,r.z);case"Vector4":return new gn(r.x,r.y,r.z,r.w);case"Color":return new ve(r.r,r.g,r.b);case"Number":return r;default:return r}},C1=(r,e)=>{switch(e){case"Vector3":return{x:r.x,y:r.y,z:r.z};case"Vector4":return{x:r.x,y:r.y,z:r.z,w:r.w};case"Color":return{r:r.x,g:r.y,b:r.z};case"Number":return r;default:return r}};class Ll{constructor(e,t){this.a=e,this.b=t,this.type="value"}startGen(e){}genColor(e,t){const n=Math.random();return t.copy(this.a).lerp(this.b,n)}toJSON(){return{type:"RandomColor",a:Ta(this.a),b:Ta(this.b)}}static fromJSON(e){return new Ll(Aa(e.a),Aa(e.b))}clone(){return new Ll(this.a.clone(),this.b.clone())}}class Cr{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type="value"}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t){return this.indexCount===-1&&this.startGen(e),t.copy(this.a).lerp(this.b,e[this.indexCount])}toJSON(){return{type:"ColorRange",a:Ta(this.a),b:Ta(this.b)}}static fromJSON(e){return new Cr(Aa(e.a),Aa(e.b))}clone(){return new Cr(this.a.clone(),this.b.clone())}}class $i{constructor(e,t){this.subType=t,this.type="function",this.keys=e}findKey(e){let t=0,n=0,i=this.keys.length-1;for(;n+1<i;)if(t=Math.floor((n+i)/2),e<this.getStartX(t))i=t-1;else if(e>this.getEndX(t))n=t+1;else return t;for(let s=n;s<=i;s++)if(e>=this.getStartX(s)&&e<=this.getEndX(s))return s;return-1}getStartX(e){return this.keys[e][1]}getEndX(e){return e+1<this.keys.length?this.keys[e+1][1]:1}genValue(e,t){const n=this.findKey(t);return this.subType==="Number"?n===-1?this.keys[0][0]:n+1>=this.keys.length?this.keys[this.keys.length-1][0]:(this.keys[n+1][0]-this.keys[n][0])*((t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))+this.keys[n][0]:n===-1?e.copy(this.keys[0][0]):n+1>=this.keys.length?e.copy(this.keys[this.keys.length-1][0]):e.copy(this.keys[n][0]).lerp(this.keys[n+1][0],(t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))}toJSON(){return this.keys[0][0].constructor.name,{type:"CLinearFunction",subType:this.subType,keys:this.keys.map(([e,t])=>({value:C1(e,this.subType),pos:t}))}}static fromJSON(e){return new $i(e.keys.map(t=>[A1(t.value,e.subType),t.pos]),e.subType)}clone(){return this.subType==="Number"?new $i(this.keys.map(([e,t])=>[e,t]),this.subType):new $i(this.keys.map(([e,t])=>[e.clone(),t]),this.subType)}}const ll=new ve;class Li{constructor(e=[[new ve(0,0,0),0],[new ve(1,1,1),0]],t=[[1,0],[1,1]]){this.type="function",this.color=new $i(e,"Color"),this.alpha=new $i(t,"Number")}genColor(e,t,n){return this.color.genValue(ll,n),t.set(ll.x,ll.y,ll.z,this.alpha.genValue(1,n))}toJSON(){return{type:"Gradient",color:this.color.toJSON(),alpha:this.alpha.toJSON()}}static fromJSON(e){if(e.functions){const t=e.functions.map(n=>[Cr.fromJSON(n.function).a,n.start]);return e.functions.length>0&&t.push([Cr.fromJSON(e.functions[e.functions.length-1].function).b,1]),new Li(t.map(n=>[new ve(n[0].x,n[0].y,n[0].z),n[1]]),t.map(n=>[n[0].w,n[1]]))}else{const t=new Li;return t.alpha=$i.fromJSON(e.alpha),t.color=$i.fromJSON(e.color),t}}clone(){const e=new Li;return e.alpha=this.alpha.clone(),e.color=this.color.clone(),e}startGen(e){}}const th=new gn;class Fl{constructor(e,t){this.indexCount=0,this.type="function",this.gradient1=e,this.gradient2=t}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t,n){return this.gradient1.genColor(e,t,n),this.gradient2.genColor(e,th,n),e&&e[this.indexCount]!==void 0?t.lerp(th,e[this.indexCount]):t.lerp(th,Math.random()),t}toJSON(){return{type:"RandomColorBetweenGradient",gradient1:this.gradient1.toJSON(),gradient2:this.gradient2.toJSON()}}static fromJSON(e){return new Fl(Li.fromJSON(e.gradient1),Li.fromJSON(e.gradient2))}clone(){return new Fl(this.gradient1.clone(),this.gradient2.clone())}}class ss{constructor(e){this.color=e,this.type="value"}startGen(e){}genColor(e,t){return t.copy(this.color)}toJSON(){return{type:"ConstantColor",color:Ta(this.color)}}static fromJSON(e){return new ss(Aa(e.color))}clone(){return new ss(this.color.clone())}}function ru(r){switch(r.type){case"ConstantColor":return ss.fromJSON(r);case"ColorRange":return Cr.fromJSON(r);case"RandomColor":return Ll.fromJSON(r);case"Gradient":return Li.fromJSON(r);case"RandomColorBetweenGradient":return Fl.fromJSON(r);default:return new ss(new gn(1,1,1,1))}}class tt{constructor(e){this.value=e,this.type="value"}startGen(e){}genValue(e){return this.value}toJSON(){return{type:"ConstantValue",value:this.value}}static fromJSON(e){return new tt(e.value)}clone(){return new tt(this.value)}}class Rn{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type="value"}startGen(e){this.indexCount=e.length,e.push(Math.random())}genValue(e){return this.indexCount===-1&&this.startGen(e),Or.lerp(this.a,this.b,e[this.indexCount])}toJSON(){return{type:"IntervalValue",a:this.a,b:this.b}}static fromJSON(e){return new Rn(e.a,e.b)}clone(){return new Rn(this.a,this.b)}}class P1{constructor(){this.functions=new Array}findFunction(e){let t=0,n=0,i=this.functions.length-1;for(;n+1<i;)if(t=Math.floor((n+i)/2),e<this.getStartX(t))i=t-1;else if(e>this.getEndX(t))n=t+1;else return t;for(let s=n;s<=i;s++)if(e>=this.functions[s][1]&&e<=this.getEndX(s))return s;return-1}getStartX(e){return this.functions[e][1]}setStartX(e,t){e>0&&(this.functions[e][1]=t)}getEndX(e){return e+1<this.functions.length?this.functions[e+1][1]:1}setEndX(e,t){e+1<this.functions.length&&(this.functions[e+1][1]=t)}insertFunction(e,t){const n=this.findFunction(e);this.functions.splice(n+1,0,[t,e])}removeFunction(e){return this.functions.splice(e,1)[0][0]}getFunction(e){return this.functions[e][0]}setFunction(e,t){this.functions[e][0]=t}get numOfFunctions(){return this.functions.length}}class Is extends P1{constructor(e=[[new Ci(0,1/3,1/3*2,1),0]]){super(),this.type="function",this.functions=e}genValue(e,t=0){const n=this.findFunction(t);return n===-1?0:this.functions[n][0].genValue((t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))}toSVG(e,t){if(t<1)return"";let n=["M",0,this.functions[0][0].p[0]].join(" ");for(let i=1/t;i<=1;i+=1/t)n=[n,"L",i*e,this.genValue(void 0,i)].join(" ");return n}toJSON(){return{type:"PiecewiseBezier",functions:this.functions.map(([e,t])=>({function:e.toJSON(),start:t}))}}static fromJSON(e){return new Is(e.functions.map(t=>[Ci.fromJSON(t.function),t.start]))}clone(){return new Is(this.functions.map(([e,t])=>[e.clone(),t]))}startGen(e){}}function st(r){switch(r.type){case"ConstantValue":return tt.fromJSON(r);case"IntervalValue":return Rn.fromJSON(r);case"PiecewiseBezier":return Is.fromJSON(r);default:return new tt(0)}}class Ca{constructor(){this.indexCount=0,this.type="rotation"}startGen(e){this.indexCount=e.length,e.push(new ft);let t,n,i,s,a,o;do t=Math.random()*2-1,n=Math.random()*2-1,i=t*t+n*n;while(i>1);do s=Math.random()*2-1,a=Math.random()*2-1,o=s*s+a*a;while(o>1);const l=Math.sqrt((1-i)/o);e[this.indexCount].set(t,n,l*s,l*a)}genValue(e,t,n,i){return this.indexCount===-1&&this.startGen(e),t.copy(e[this.indexCount]),t}toJSON(){return{type:"RandomQuat"}}static fromJSON(e){return new Ca}clone(){return new Ca}}class Pa{constructor(e,t){this.axis=e,this.angle=t,this.type="rotation"}startGen(e){this.angle.startGen(e)}genValue(e,t,n,i){return t.setFromAxisAngle(this.axis,this.angle.genValue(e,i)*n)}toJSON(){return{type:"AxisAngle",axis:{x:this.axis.x,y:this.axis.y,z:this.axis.z},angle:this.angle.toJSON()}}static fromJSON(e){return new Pa(new ve(e.axis.x,e.axis.y,e.axis.z),st(e.angle))}clone(){return new Pa(this.axis.clone(),this.angle.clone())}}class Dl{constructor(e,t,n,i){this.angleX=e,this.angleY=t,this.angleZ=n,this.type="rotation",this.eular=new Ea(0,0,0,i)}startGen(e){this.angleX.startGen(e),this.angleY.startGen(e),this.angleZ.startGen(e)}genValue(e,t,n,i){return this.eular.set(this.angleX.genValue(e,i)*n,this.angleY.genValue(e,i)*n,this.angleZ.genValue(e,i)*n),t.setFromEuler(this.eular)}toJSON(){return{type:"Euler",angleX:this.angleX.toJSON(),angleY:this.angleY.toJSON(),angleZ:this.angleZ.toJSON(),eulerOrder:this.eular.order}}static fromJSON(e){return new Dl(st(e.angleX),st(e.angleY),st(e.angleZ),e.eulerOrder)}clone(){return new Dl(this.angleX,this.angleY,this.angleZ,this.eular.order)}}function Og(r){switch(r.type){case"AxisAngle":return Pa.fromJSON(r);case"Euler":return Dl.fromJSON(r);case"RandomQuat":return Ca.fromJSON(r);default:return new Ca}}class Ls{constructor(e,t,n){this.x=e,this.y=t,this.z=n,this.type="vec3function"}startGen(e){this.x.startGen(e),this.y.startGen(e),this.z.startGen(e)}genValue(e,t,n){return t.set(this.x.genValue(e,n),this.y.genValue(e,n),this.z.genValue(e,n))}toJSON(){return{type:"Vector3Function",x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(e){return new Ls(st(e.x),st(e.y),st(e.z))}clone(){return new Ls(this.x,this.y,this.z)}}function R1(r){switch(r.type){case"Vector3Function":return Ls.fromJSON(r);default:return new Ls(new tt(0),new tt(0),new tt(0))}}function Ol(r){switch(r.type){case"ConstantValue":case"IntervalValue":case"PiecewiseBezier":return st(r);case"AxisAngle":case"RandomQuat":case"Euler":return Og(r);case"Vector3Function":return R1(r);default:return new tt(0)}}class Qi{constructor(e={}){this.type="cone",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.angle=e.angle??Math.PI/6,this.mode=e.mode??ln.Random,this.spread=e.spread??0,this.speed=e.speed??new tt(1),this.memory=[]}update(e,t){ln.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=Ur(this.mode,this.currentValue,this.spread,t),i=Or.lerp(1-this.thickness,1,Math.random()),s=n*this.arc,a=Math.sqrt(i),o=Math.sin(s),l=Math.cos(s);e.position.x=a*l,e.position.y=a*o,e.position.z=0;const c=this.angle*a;e.velocity.set(0,0,Math.cos(c)).addScaledVector(e.position,Math.sin(c)).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius)}toJSON(){return{type:"cone",radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Qi({radius:e.radius,arc:e.arc,thickness:e.thickness,angle:e.angle,mode:e.mode,speed:e.speed?st(e.speed):void 0,spread:e.spread})}clone(){return new Qi({radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class Ra{constructor(e={}){this.type="circle",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??ln.Random,this.spread=e.spread??0,this.speed=e.speed??new tt(1),this.memory=[]}update(e,t){this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t}initialize(e,t){const n=Ur(this.mode,this.currentValue,this.spread,t),i=Or.lerp(1-this.thickness,1,Math.random()),s=n*this.arc;e.position.x=Math.cos(s),e.position.y=Math.sin(s),e.position.z=0,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*i)}toJSON(){return{type:"circle",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Ra({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?st(e.speed):void 0,spread:e.spread})}clone(){return new Ra({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}function cl(r,e){return Math.floor(Math.random()*(e-r))+r}const po=new ve(0,1,0),mo=new ve(0,0,0),I1=new ve(1,1,1),gm=new ve(0,0,1);class Ia{constructor(e={}){this.type="donut",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.donutRadius=e.donutRadius??this.radius*.2,this.mode=e.mode??ln.Random,this.spread=e.spread??0,this.speed=e.speed??new tt(1),this.memory=[],this._m1=new ti}update(e,t){ln.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=Ur(this.mode,this.currentValue,this.spread,t),i=Math.random(),s=Or.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=i*Math.PI*2,l=Math.sin(a),c=Math.cos(a);if(e.position.x=this.radius*c,e.position.y=this.radius*l,e.position.z=0,e.velocity.z=this.donutRadius*s*Math.sin(o),e.velocity.x=this.donutRadius*s*Math.cos(o)*c,e.velocity.y=this.donutRadius*s*Math.cos(o)*l,e.position.add(e.velocity),e.velocity.normalize().multiplyScalar(e.startSpeed),e.rotation instanceof ft){const d=e.rotation;d.x===0&&d.y===0&&d.z===0&&d.w===1&&(this._m1.lookAt(mo,e.velocity,po),e.rotation.setFromRotationMatrix(this._m1))}}toJSON(){return{type:"donut",radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Ia({radius:e.radius,arc:e.arc,thickness:e.thickness,donutRadius:e.donutRadius,mode:e.mode,speed:e.speed?st(e.speed):void 0,spread:e.spread})}clone(){return new Ia({radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class La{constructor(){this.type="point",this._m1=new ti}update(e,t){}initialize(e){const t=Math.random(),n=Math.random(),i=t*Math.PI*2,s=Math.acos(2*n-1),a=Math.cbrt(Math.random()),o=Math.sin(i),l=Math.cos(i),c=Math.sin(s),d=Math.cos(s);if(e.velocity.x=a*c*l,e.velocity.y=a*c*o,e.velocity.z=a*d,e.velocity.multiplyScalar(e.startSpeed),e.position.setScalar(0),e.rotation instanceof ft){const h=e.rotation;h.x===0&&h.y===0&&h.z===0&&h.w===1&&(this._m1.lookAt(mo,e.velocity,po),e.rotation.setFromRotationMatrix(this._m1))}}toJSON(){return{type:"point"}}static fromJSON(e){return new La}clone(){return new La}}class rs{constructor(e={}){this.type="sphere",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??ln.Random,this.spread=e.spread??0,this.speed=e.speed??new tt(1),this.memory=[],this._m1=new ti}update(e,t){ln.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=Ur(this.mode,this.currentValue,this.spread,t),i=Math.random(),s=Or.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=Math.acos(2*i-1),l=Math.sin(a),c=Math.cos(a),d=Math.sin(o),h=Math.cos(o);if(e.position.x=d*c,e.position.y=d*l,e.position.z=h,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*s),e.rotation instanceof ft){const u=e.rotation;u.x===0&&u.y===0&&u.z===0&&u.w===1&&(this._m1.lookAt(mo,e.position,po),e.rotation.setFromRotationMatrix(this._m1))}}toJSON(){return{type:"sphere",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new rs({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?st(e.speed):void 0,spread:e.spread})}clone(){return new rs({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class Fa{constructor(e={}){this.type="hemisphere",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??ln.Random,this.spread=e.spread??0,this.speed=e.speed??new tt(1),this.memory=[],this._m1=new ti}update(e,t){ln.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=Ur(this.mode,this.currentValue,this.spread,t),i=Math.random(),s=Or.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=Math.acos(i),l=Math.sin(a),c=Math.cos(a),d=Math.sin(o),h=Math.cos(o);if(e.position.x=d*c,e.position.y=d*l,e.position.z=h,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*s),e.rotation instanceof ft){const u=e.rotation;u.x===0&&u.y===0&&u.z===0&&u.w===1&&(this._m1.lookAt(mo,e.position,po),e.rotation.setFromRotationMatrix(this._m1))}}toJSON(){return{type:"hemisphere",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Fa({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?st(e.speed):void 0,spread:e.spread})}clone(){return new Fa({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class Da{constructor(e={}){this.type="grid",this.width=e.width??1,this.height=e.height??1,this.column=e.column??10,this.row=e.row??10}initialize(e){const t=Math.floor(Math.random()*this.row),n=Math.floor(Math.random()*this.column);e.position.x=n*this.width/this.column-this.width/2,e.position.y=t*this.height/this.row-this.height/2,e.position.z=0,e.velocity.set(0,0,e.startSpeed)}toJSON(){return{type:"grid",width:this.width,height:this.height,column:this.column,row:this.row}}static fromJSON(e){return new Da(e)}clone(){return new Da({width:this.width,height:this.height,column:this.column,row:this.row})}update(e,t){}}class Oa{constructor(e={}){this.type="rectangle",this.currentValue=0,this.width=e.width??10,this.height=e.height??10,this.thickness=e.thickness??1,this.mode=e.mode??ln.Random,this.spread=e.spread??0,this.speed=e.speed??new tt(1),this.memory=[],this._m1=new ti}update(e,t){this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t}initialize(e,t){const n=Ur(this.mode,this.currentValue,this.spread,t),i=2*(this.width+this.height),s=n*i;let a,o;s<this.width?(a=s-this.width/2,o=-this.height/2):s<this.width+this.height?(a=this.width/2,o=s-this.width-this.height/2):s<2*this.width+this.height?(a=this.width/2-(s-this.width-this.height),o=this.height/2):(a=-this.width/2,o=this.height/2-(s-2*this.width-this.height));const l=Math.random(),c=1-this.thickness*l;if(e.position.x=a*c,e.position.y=o*c,e.position.z=0,e.velocity.x=a,e.velocity.y=o,e.velocity.z=0,e.velocity.normalize().multiplyScalar(e.startSpeed),e.rotation instanceof ft){const d=e.rotation;d.x===0&&d.y===0&&d.z===0&&d.w===1&&(this._m1.lookAt(mo,e.velocity,po),e.rotation.setFromRotationMatrix(this._m1))}}toJSON(){return{type:"rectangle",width:this.width,height:this.height,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Oa({width:e.width,height:e.height,thickness:e.thickness,mode:e.mode,speed:e.speed?st(e.speed):void 0,spread:e.spread})}clone(){return new Oa({width:this.width,height:this.height,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}const vd={circle:{type:"circle",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Ra,loadJSON:Ra.fromJSON},cone:{type:"cone",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Qi,loadJSON:Qi.fromJSON},donut:{type:"donut",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["donutRadius",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Ia,loadJSON:Ia.fromJSON},point:{type:"point",params:[],constructor:La,loadJSON:La.fromJSON},sphere:{type:"sphere",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:rs,loadJSON:rs.fromJSON},hemisphere:{type:"hemisphere",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Fa,loadJSON:Fa.fromJSON},grid:{type:"grid",params:[["width",["number"]],["height",["number"]],["rows",["number"]],["column",["number"]]],constructor:Da,loadJSON:Da.fromJSON},rectangle:{type:"rectangle",params:[["width",["number"]],["height",["number"]],["thickness",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Oa,loadJSON:Oa.fromJSON}};function L1(r,e){return vd[r.type].loadJSON(r,e)}class Fs{constructor(e){this.color=e,this.type="ColorOverLife"}initialize(e){this.color.startGen(e.memory)}update(e,t){this.color.genColor(e.memory,e.color,e.age/e.life),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON()}}static fromJSON(e){return new Fs(ru(e.color))}clone(){return new Fs(this.color.clone())}reset(){}}class Ua{constructor(e){this.angularVelocity=e,this.type="RotationOverLife"}initialize(e){typeof e.rotation=="number"&&this.angularVelocity.startGen(e.memory)}update(e,t){typeof e.rotation=="number"&&(e.rotation+=t*this.angularVelocity.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(e){return new Ua(st(e.angularVelocity))}frameUpdate(e){}clone(){return new Ua(this.angularVelocity.clone())}reset(){}}class Na{constructor(e){this.angularVelocity=e,this.type="Rotation3DOverLife",this.tempQuat=new ft,this.tempQuat2=new ft}initialize(e){e.rotation instanceof ft&&(e.angularVelocity=new ft,this.angularVelocity.startGen(e.memory))}update(e,t){e.rotation instanceof ft&&(this.angularVelocity.genValue(e.memory,this.tempQuat,t,e.age/e.life),e.rotation.multiply(this.tempQuat))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(e){return new Na(Og(e.angularVelocity))}frameUpdate(e){}clone(){return new Na(this.angularVelocity.clone())}reset(){}}class Ba{initialize(e,t){this.ps=t,this.x.startGen(e.memory),this.y.startGen(e.memory),this.z.startGen(e.memory)}constructor(e,t,n){this.x=e,this.y=t,this.z=n,this.type="ForceOverLife",this._temp=new ve,this._tempScale=new ve,this._tempQ=new ft}update(e,t){this._temp.set(this.x.genValue(e.memory,e.age/e.life),this.y.genValue(e.memory,e.age/e.life),this.z.genValue(e.memory,e.age/e.life)),this.ps.worldSpace?e.velocity.addScaledVector(this._temp,t):(this._temp.multiply(this._tempScale).applyQuaternion(this._tempQ),e.velocity.addScaledVector(this._temp,t))}toJSON(){return{type:this.type,x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(e){return new Ba(st(e.x),st(e.y),st(e.z))}frameUpdate(e){if(this.ps&&!this.ps.worldSpace){const t=this._temp,n=this._tempQ,i=this._tempScale;this.ps.emitter.matrixWorld.decompose(t,n,i),n.invert(),i.set(1/i.x,1/i.y,1/i.z)}}clone(){return new Ba(this.x.clone(),this.y.clone(),this.z.clone())}reset(){}}class Ds{initialize(e){this.size.startGen(e.memory)}constructor(e){this.size=e,this.type="SizeOverLife"}update(e){this.size instanceof Ls?this.size.genValue(e.memory,e.size,e.age/e.life).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,size:this.size.toJSON()}}static fromJSON(e){return new Ds(Ol(e.size))}frameUpdate(e){}clone(){return new Ds(this.size.clone())}reset(){}}class za{initialize(e){this.speed.startGen(e.memory)}constructor(e){this.speed=e,this.type="SpeedOverLife"}update(e){e.speedModifier=this.speed.genValue(e.memory,e.age/e.life)}toJSON(){return{type:this.type,speed:this.speed.toJSON()}}static fromJSON(e){return new za(st(e.speed))}frameUpdate(e){}clone(){return new za(this.speed.clone())}reset(){}}class ka{constructor(e){this.frame=e,this.type="FrameOverLife"}initialize(e){this.frame.startGen(e.memory)}update(e,t){this.frame instanceof Is&&(e.uvTile=this.frame.genValue(e.memory,e.age/e.life))}frameUpdate(e){}toJSON(){return{type:this.type,frame:this.frame.toJSON()}}static fromJSON(e){return new ka(st(e.frame))}clone(){return new ka(this.frame.clone())}reset(){}}class Va{constructor(e,t=new ve(0,1,0)){this.orbitSpeed=e,this.axis=t,this.type="OrbitOverLife",this.temp=new ve,this.rotation=new ft}initialize(e){this.orbitSpeed.startGen(e.memory)}update(e,t){this.temp.copy(e.position).projectOnVector(this.axis),this.rotation.setFromAxisAngle(this.axis,this.orbitSpeed.genValue(e.memory,e.age/e.life)*t),e.position.sub(this.temp),e.position.applyQuaternion(this.rotation),e.position.add(this.temp)}frameUpdate(e){}toJSON(){return{type:this.type,orbitSpeed:this.orbitSpeed.toJSON(),axis:[this.axis.x,this.axis.y,this.axis.z]}}static fromJSON(e){return new Va(st(e.orbitSpeed),e.axis?new ve(e.axis[0],e.axis[1],e.axis[2]):void 0)}clone(){return new Va(this.orbitSpeed.clone())}reset(){}}class nh{constructor(e){this.data=e,this.next=null,this.prev=null}hasPrev(){return this.prev!==null}hasNext(){return this.next!==null}}class F1{constructor(){this.length=0,this.head=this.tail=null}isEmpty(){return this.head===null}clear(){this.length=0,this.head=this.tail=null}front(){return this.head===null?null:this.head.data}back(){return this.tail===null?null:this.tail.data}dequeue(){if(this.head){const e=this.head.data;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}}pop(){if(this.tail){const e=this.tail.data;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}}queue(e){const t=new nh(e);this.tail||(this.tail=t),this.head&&(this.head.prev=t,t.next=this.head),this.head=t,this.length++}push(e){const t=new nh(e);this.head||(this.head=t),this.tail&&(this.tail.next=t,t.prev=this.tail),this.tail=t,this.length++}insertBefore(e,t){const n=new nh(t);n.next=e,n.prev=e.prev,n.prev!==null&&(n.prev.next=n),n.next.prev=n,e==this.head&&(this.head=n),this.length++}remove(e){if(this.head===null||this.tail===null)return;let t=this.head;for(e===this.head.data&&(this.head=this.head.next),e===this.tail.data&&(this.tail=this.tail.prev);t.next!==null&&t.data!==e;)t=t.next;t.data===e&&(t.prev!==null&&(t.prev.next=t.next),t.next!==null&&(t.next.prev=t.prev),this.length--)}*values(){let e=this.head;for(;e!==null;)yield e.data,e=e.next}}class D1{constructor(){this.startSpeed=0,this.startColor=new gn,this.startSize=new ve(1,1,1),this.position=new ve,this.velocity=new ve,this.age=0,this.life=1,this.size=new ve(1,1,1),this.speedModifier=1,this.rotation=0,this.color=new gn,this.uvTile=0,this.memory=[]}get died(){return this.age>=this.life}reset(){this.memory.length=0}}class O1{constructor(e,t,n){this.position=e,this.size=t,this.color=n}}class Md{constructor(){this.startSpeed=0,this.startColor=new gn,this.startSize=new ve(1,1,1),this.position=new ve,this.velocity=new ve,this.age=0,this.life=1,this.size=new ve(1,1,1),this.length=100,this.speedModifier=1,this.color=new gn,this.previous=new F1,this.uvTile=0,this.memory=[]}update(){for(this.age<=this.life?this.previous.push(new O1(this.position.clone(),this.size.x,this.color.clone())):this.previous.length>0&&this.previous.dequeue();this.previous.length>this.length;)this.previous.dequeue()}get died(){return this.age>=this.life}reset(){this.memory.length=0,this.previous.clear()}}class Ha{initialize(e){this.width.startGen(e.memory)}constructor(e){this.width=e,this.type="WidthOverLength"}update(e){if(e instanceof Md){const t=e.previous.values();for(let n=0;n<e.previous.length;n++){const i=t.next();i.value.size=this.width.genValue(e.memory,(e.previous.length-n)/e.length)}}}frameUpdate(e){}toJSON(){return{type:this.type,width:this.width.toJSON()}}static fromJSON(e){return new Ha(st(e.width))}clone(){return new Ha(this.width.clone())}reset(){}}class Ga{constructor(e,t){this.direction=e,this.magnitude=t,this.type="ApplyForce",this.memory={data:[],dataCount:0},this.magnitudeValue=this.magnitude.genValue(this.memory)}initialize(e){}update(e,t){e.velocity.addScaledVector(this.direction,this.magnitudeValue*t)}frameUpdate(e){this.magnitudeValue=this.magnitude.genValue(this.memory)}toJSON(){return{type:this.type,direction:[this.direction.x,this.direction.y,this.direction.z],magnitude:this.magnitude.toJSON()}}static fromJSON(e){return new Ga(new ve(e.direction[0],e.direction[1],e.direction[2]),st(e.magnitude??e.force))}clone(){return new Ga(this.direction.clone(),this.magnitude.clone())}reset(){}}class Wa{constructor(e,t){this.center=e,this.magnitude=t,this.type="GravityForce",this.temp=new ve}initialize(e){}update(e,t){this.temp.copy(this.center).sub(e.position).normalize(),e.velocity.addScaledVector(this.temp,this.magnitude/e.position.distanceToSquared(this.center)*t)}frameUpdate(e){}toJSON(){return{type:this.type,center:[this.center.x,this.center.y,this.center.z],magnitude:this.magnitude}}static fromJSON(e){return new Wa(new ve(e.center[0],e.center[1],e.center[2]),e.magnitude)}clone(){return new Wa(this.center.clone(),this.magnitude)}reset(){}}class Xa{constructor(e){this.angle=e,this.type="ChangeEmitDirection",this._temp=new ve,this._q=new ft,this.memory={data:[],dataCount:0}}initialize(e){const t=e.velocity.length();t!=0&&(e.velocity.normalize(),e.velocity.x===0&&e.velocity.y===0?this._temp.set(0,e.velocity.z,0):this._temp.set(-e.velocity.y,e.velocity.x,0),this.angle.startGen(this.memory),this._q.setFromAxisAngle(this._temp.normalize(),this.angle.genValue(this.memory)),this._temp.copy(e.velocity),e.velocity.applyQuaternion(this._q),this._q.setFromAxisAngle(this._temp,Math.random()*Math.PI*2),e.velocity.applyQuaternion(this._q),e.velocity.setLength(t))}update(e,t){}frameUpdate(e){}toJSON(){return{type:this.type,angle:this.angle.toJSON()}}static fromJSON(e){return new Xa(st(e.angle))}clone(){return new Xa(this.angle)}reset(){}}var fr;(function(r){r[r.Death=0]="Death",r[r.Birth=1]="Birth",r[r.Frame=2]="Frame"})(fr||(fr={}));class ja{constructor(e,t,n,i=fr.Frame,s=1){this.particleSystem=e,this.useVelocityAsBasis=t,this.subParticleSystem=n,this.mode=i,this.emitProbability=s,this.type="EmitSubParticleSystem",this.q_=new ft,this.v_=new ve,this.v2_=new ve,this.subEmissions=new Array,this.subParticleSystem&&this.subParticleSystem.system&&(this.subParticleSystem.system.onlyUsedByOther=!0)}initialize(e){}update(e,t){this.mode===fr.Frame?this.emit(e,t):this.mode===fr.Birth&&e.age===0?this.emit(e,t):this.mode===fr.Death&&e.age+t>=e.life&&this.emit(e,t)}emit(e,t){if(!this.subParticleSystem||Math.random()>this.emitProbability)return;const n=new ti;this.setMatrixFromParticle(n,e),this.subEmissions.push({burstParticleCount:0,burstParticleIndex:0,isBursting:!1,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,matrix:n,travelDistance:0,particle:e})}frameUpdate(e){if(this.subParticleSystem)for(let t=0;t<this.subEmissions.length;t++)if(this.subEmissions[t].time>=this.subParticleSystem.system.duration)this.subEmissions[t]=this.subEmissions[this.subEmissions.length-1],this.subEmissions.length=this.subEmissions.length-1,t--;else{const n=this.subEmissions[t];n.particle&&n.particle.age<n.particle.life?this.setMatrixFromParticle(n.matrix,n.particle):n.particle=void 0,this.subParticleSystem.system.emit(e,n,n.matrix)}}toJSON(){return{type:this.type,subParticleSystem:this.subParticleSystem?this.subParticleSystem.uuid:"",useVelocityAsBasis:this.useVelocityAsBasis,mode:this.mode,emitProbability:this.emitProbability}}static fromJSON(e,t){return new ja(t,e.useVelocityAsBasis,e.subParticleSystem,e.mode,e.emitProbability)}clone(){return new ja(this.particleSystem,this.useVelocityAsBasis,this.subParticleSystem,this.mode,this.emitProbability)}reset(){}setMatrixFromParticle(e,t){let n;if(t.rotation===void 0||this.useVelocityAsBasis)if(t.velocity.x===0&&t.velocity.y===0&&(t.velocity.z===1||t.velocity.z===0))e.set(1,0,0,t.position.x,0,1,0,t.position.y,0,0,1,t.position.z,0,0,0,1);else{this.v_.copy(gm).cross(t.velocity),this.v2_.copy(t.velocity).cross(this.v_);const i=this.v_.length(),s=this.v2_.length();e.set(this.v_.x/i,this.v2_.x/s,t.velocity.x,t.position.x,this.v_.y/i,this.v2_.y/s,t.velocity.y,t.position.y,this.v_.z/i,this.v2_.z/s,t.velocity.z,t.position.z,0,0,0,1)}else t.rotation instanceof ft?n=t.rotation:(this.q_.setFromAxisAngle(gm,t.rotation),n=this.q_),e.compose(t.position,n,I1);this.particleSystem.worldSpace||e.multiplyMatrices(this.particleSystem.emitter.matrixWorld,e)}}const U1=.5*(Math.sqrt(3)-1),Kr=(3-Math.sqrt(3))/6,N1=1/3,oi=1/6,B1=(Math.sqrt(5)-1)/4,en=(5-Math.sqrt(5))/20,$t=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Gt=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);class Ug{constructor(e=Math.random){const t=typeof e=="function"?e:k1(e);this.p=z1(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let n=0;n<512;n++)this.perm[n]=this.p[n&255],this.permMod12[n]=this.perm[n]%12}noise2D(e,t){const n=this.permMod12,i=this.perm;let s=0,a=0,o=0;const l=(e+t)*U1,c=Math.floor(e+l),d=Math.floor(t+l),h=(c+d)*Kr,u=c-h,f=d-h,p=e-u,y=t-f;let g,m;p>y?(g=1,m=0):(g=0,m=1);const x=p-g+Kr,_=y-m+Kr,v=p-1+2*Kr,w=y-1+2*Kr,S=c&255,T=d&255;let P=.5-p*p-y*y;if(P>=0){const I=n[S+i[T]]*3;P*=P,s=P*P*($t[I]*p+$t[I+1]*y)}let M=.5-x*x-_*_;if(M>=0){const I=n[S+g+i[T+m]]*3;M*=M,a=M*M*($t[I]*x+$t[I+1]*_)}let E=.5-v*v-w*w;if(E>=0){const I=n[S+1+i[T+1]]*3;E*=E,o=E*E*($t[I]*v+$t[I+1]*w)}return 70*(s+a+o)}noise3D(e,t,n){const i=this.permMod12,s=this.perm;let a,o,l,c;const d=(e+t+n)*N1,h=Math.floor(e+d),u=Math.floor(t+d),f=Math.floor(n+d),p=(h+u+f)*oi,y=h-p,g=u-p,m=f-p,x=e-y,_=t-g,v=n-m;let w,S,T,P,M,E;x>=_?_>=v?(w=1,S=0,T=0,P=1,M=1,E=0):x>=v?(w=1,S=0,T=0,P=1,M=0,E=1):(w=0,S=0,T=1,P=1,M=0,E=1):_<v?(w=0,S=0,T=1,P=0,M=1,E=1):x<v?(w=0,S=1,T=0,P=0,M=1,E=1):(w=0,S=1,T=0,P=1,M=1,E=0);const I=x-w+oi,D=_-S+oi,B=v-T+oi,G=x-P+2*oi,H=_-M+2*oi,V=v-E+2*oi,z=x-1+3*oi,X=_-1+3*oi,K=v-1+3*oi,te=h&255,ne=u&255,Ie=f&255;let Ce=.6-x*x-_*_-v*v;if(Ce<0)a=0;else{const J=i[te+s[ne+s[Ie]]]*3;Ce*=Ce,a=Ce*Ce*($t[J]*x+$t[J+1]*_+$t[J+2]*v)}let Qe=.6-I*I-D*D-B*B;if(Qe<0)o=0;else{const J=i[te+w+s[ne+S+s[Ie+T]]]*3;Qe*=Qe,o=Qe*Qe*($t[J]*I+$t[J+1]*D+$t[J+2]*B)}let Ge=.6-G*G-H*H-V*V;if(Ge<0)l=0;else{const J=i[te+P+s[ne+M+s[Ie+E]]]*3;Ge*=Ge,l=Ge*Ge*($t[J]*G+$t[J+1]*H+$t[J+2]*V)}let q=.6-z*z-X*X-K*K;if(q<0)c=0;else{const J=i[te+1+s[ne+1+s[Ie+1]]]*3;q*=q,c=q*q*($t[J]*z+$t[J+1]*X+$t[J+2]*K)}return 32*(a+o+l+c)}noise4D(e,t,n,i){const s=this.perm;let a,o,l,c,d;const h=(e+t+n+i)*B1,u=Math.floor(e+h),f=Math.floor(t+h),p=Math.floor(n+h),y=Math.floor(i+h),g=(u+f+p+y)*en,m=u-g,x=f-g,_=p-g,v=y-g,w=e-m,S=t-x,T=n-_,P=i-v;let M=0,E=0,I=0,D=0;w>S?M++:E++,w>T?M++:I++,w>P?M++:D++,S>T?E++:I++,S>P?E++:D++,T>P?I++:D++;const B=M>=3?1:0,G=E>=3?1:0,H=I>=3?1:0,V=D>=3?1:0,z=M>=2?1:0,X=E>=2?1:0,K=I>=2?1:0,te=D>=2?1:0,ne=M>=1?1:0,Ie=E>=1?1:0,Ce=I>=1?1:0,Qe=D>=1?1:0,Ge=w-B+en,q=S-G+en,J=T-H+en,pe=P-V+en,Ne=w-z+2*en,_e=S-X+2*en,Ze=T-K+2*en,Tt=P-te+2*en,Ye=w-ne+3*en,ot=S-Ie+3*en,ut=T-Ce+3*en,Ve=P-Qe+3*en,Pt=w-1+4*en,F=S-1+4*en,Rt=T-1+4*en,at=P-1+4*en,ht=u&255,Me=f&255,R=p&255,b=y&255;let U=.6-w*w-S*S-T*T-P*P;if(U<0)a=0;else{const ee=s[ht+s[Me+s[R+s[b]]]]%32*4;U*=U,a=U*U*(Gt[ee]*w+Gt[ee+1]*S+Gt[ee+2]*T+Gt[ee+3]*P)}let Z=.6-Ge*Ge-q*q-J*J-pe*pe;if(Z<0)o=0;else{const ee=s[ht+B+s[Me+G+s[R+H+s[b+V]]]]%32*4;Z*=Z,o=Z*Z*(Gt[ee]*Ge+Gt[ee+1]*q+Gt[ee+2]*J+Gt[ee+3]*pe)}let $=.6-Ne*Ne-_e*_e-Ze*Ze-Tt*Tt;if($<0)l=0;else{const ee=s[ht+z+s[Me+X+s[R+K+s[b+te]]]]%32*4;$*=$,l=$*$*(Gt[ee]*Ne+Gt[ee+1]*_e+Gt[ee+2]*Ze+Gt[ee+3]*Tt)}let Y=.6-Ye*Ye-ot*ot-ut*ut-Ve*Ve;if(Y<0)c=0;else{const ee=s[ht+ne+s[Me+Ie+s[R+Ce+s[b+Qe]]]]%32*4;Y*=Y,c=Y*Y*(Gt[ee]*Ye+Gt[ee+1]*ot+Gt[ee+2]*ut+Gt[ee+3]*Ve)}let be=.6-Pt*Pt-F*F-Rt*Rt-at*at;if(be<0)d=0;else{const ee=s[ht+1+s[Me+1+s[R+1+s[b+1]]]]%32*4;be*=be,d=be*be*(Gt[ee]*Pt+Gt[ee+1]*F+Gt[ee+2]*Rt+Gt[ee+3]*at)}return 27*(a+o+l+c+d)}}function z1(r){const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=0;t<255;t++){const n=t+~~(r()*(256-t)),i=e[t];e[t]=e[n],e[n]=i}return e}function k1(r){let e=0,t=0,n=0,i=1;const s=V1();return e=s(" "),t=s(" "),n=s(" "),e-=s(r),e<0&&(e+=1),t-=s(r),t<0&&(t+=1),n-=s(r),n<0&&(n+=1),function(){const a=2091639*e+i*23283064365386963e-26;return e=t,t=n,n=a-(i=a|0)}}function V1(){let r=4022871197;return function(e){e=e.toString();for(let t=0;t<e.length;t++){r+=e.charCodeAt(t);let n=.02519603282416938*r;r=n>>>0,n-=r,n*=r,r=n>>>0,n-=r,r+=n*4294967296}return(r>>>0)*23283064365386963e-26}}class Ya{constructor(e,t,n,i){this.scale=e,this.octaves=t,this.velocityMultiplier=n,this.timeScale=i,this.type="TurbulenceField",this.generator=new Ug,this.timeOffset=new ve,this.temp=new ve,this.temp2=new ve,this.timeOffset.x=Math.random()/this.scale.x*this.timeScale.x,this.timeOffset.y=Math.random()/this.scale.y*this.timeScale.y,this.timeOffset.z=Math.random()/this.scale.z*this.timeScale.z}initialize(e){}update(e,t){const n=e.position.x/this.scale.x,i=e.position.y/this.scale.y,s=e.position.z/this.scale.z;this.temp.set(0,0,0);let a=1;for(let o=0;o<this.octaves;o++)this.temp2.set(this.generator.noise4D(n*a,i*a,s*a,this.timeOffset.x*a)/a,this.generator.noise4D(n*a,i*a,s*a,this.timeOffset.y*a)/a,this.generator.noise4D(n*a,i*a,s*a,this.timeOffset.z*a)/a),this.temp.add(this.temp2),a*=2;this.temp.multiply(this.velocityMultiplier),e.velocity.addScaledVector(this.temp,t)}toJSON(){return{type:this.type,scale:[this.scale.x,this.scale.y,this.scale.z],octaves:this.octaves,velocityMultiplier:[this.velocityMultiplier.x,this.velocityMultiplier.y,this.velocityMultiplier.z],timeScale:[this.timeScale.x,this.timeScale.y,this.timeScale.z]}}frameUpdate(e){this.timeOffset.x+=e*this.timeScale.x,this.timeOffset.y+=e*this.timeScale.y,this.timeOffset.z+=e*this.timeScale.z}static fromJSON(e){return new Ya(new ve(e.scale[0],e.scale[1],e.scale[2]),e.octaves,new ve(e.velocityMultiplier[0],e.velocityMultiplier[1],e.velocityMultiplier[2]),new ve(e.timeScale[0],e.timeScale[1],e.timeScale[2]))}clone(){return new Ya(this.scale.clone(),this.octaves,this.velocityMultiplier.clone(),this.timeScale.clone())}reset(){}}const li=[],ih=new ve,sh=new ft;class qa{constructor(e,t,n=new tt(1),i=new tt(0)){if(this.frequency=e,this.power=t,this.positionAmount=n,this.rotationAmount=i,this.type="Noise",this.duration=0,li.length===0)for(let s=0;s<100;s++)li.push(new Ug)}initialize(e){e.lastPosNoise=new ve,typeof e.rotation=="number"?e.lastRotNoise=0:e.lastRotNoise=new ft,e.generatorIndex=[cl(0,100),cl(0,100),cl(0,100),cl(0,100)],this.positionAmount.startGen(e.memory),this.rotationAmount.startGen(e.memory),this.frequency.startGen(e.memory),this.power.startGen(e.memory)}update(e,t){let n=this.frequency.genValue(e.memory,e.age/e.life),i=this.power.genValue(e.memory,e.age/e.life),s=this.positionAmount.genValue(e.memory,e.age/e.life),a=this.rotationAmount.genValue(e.memory,e.age/e.life);s>0&&e.lastPosNoise!==void 0&&(e.position.sub(e.lastPosNoise),ih.set(li[e.generatorIndex[0]].noise2D(0,e.age*n)*i*s,li[e.generatorIndex[1]].noise2D(0,e.age*n)*i*s,li[e.generatorIndex[2]].noise2D(0,e.age*n)*i*s),e.position.add(ih),e.lastPosNoise.copy(ih)),a>0&&e.lastRotNoise!==void 0&&(typeof e.rotation=="number"?(e.rotation-=e.lastRotNoise,e.rotation+=li[e.generatorIndex[3]].noise2D(0,e.age*n)*Math.PI*i*a):(e.lastRotNoise.invert(),e.rotation.multiply(e.lastRotNoise),sh.set(li[e.generatorIndex[0]].noise2D(0,e.age*n)*i*a,li[e.generatorIndex[1]].noise2D(0,e.age*n)*i*a,li[e.generatorIndex[2]].noise2D(0,e.age*n)*i*a,li[e.generatorIndex[3]].noise2D(0,e.age*n)*i*a).normalize(),e.rotation.multiply(sh),e.lastRotNoise.copy(sh)))}toJSON(){return{type:this.type,frequency:this.frequency.toJSON(),power:this.power.toJSON(),positionAmount:this.positionAmount.toJSON(),rotationAmount:this.rotationAmount.toJSON()}}frameUpdate(e){this.duration+=e}static fromJSON(e){return new qa(st(e.frequency),st(e.power),st(e.positionAmount),st(e.rotationAmount))}clone(){return new qa(this.frequency.clone(),this.power.clone(),this.positionAmount.clone(),this.rotationAmount.clone())}reset(){}}class Za{constructor(e,t){this.color=e,this.speedRange=t,this.type="ColorBySpeed"}initialize(e){this.color.startGen(e.memory)}update(e,t){const n=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.color.genColor(e.memory,e.color,n),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new Za(ru(e.color),Rn.fromJSON(e.speedRange))}clone(){return new Za(this.color.clone(),this.speedRange.clone())}reset(){}}class Ja{initialize(e){this.size.startGen(e.memory)}constructor(e,t){this.size=e,this.speedRange=t,this.type="SizeBySpeed"}update(e){const t=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.size instanceof Ls?this.size.genValue(e.memory,e.size,t).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,t))}toJSON(){return{type:this.type,size:this.size.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new Ja(Ol(e.size),Rn.fromJSON(e.speedRange))}frameUpdate(e){}clone(){return new Ja(this.size.clone(),this.speedRange.clone())}reset(){}}class $a{constructor(e,t){this.angularVelocity=e,this.speedRange=t,this.type="RotationBySpeed",this.tempQuat=new ft}initialize(e){typeof e.rotation=="number"&&this.angularVelocity.startGen(e.memory)}update(e,t){if(typeof e.rotation=="number"){const n=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);e.rotation+=t*this.angularVelocity.genValue(e.memory,n)}}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new $a(st(e.angularVelocity),Rn.fromJSON(e.speedRange))}frameUpdate(e){}clone(){return new $a(this.angularVelocity.clone(),this.speedRange.clone())}reset(){}}class Ka{initialize(e){this.speed.startGen(e.memory)}constructor(e,t){this.speed=e,this.dampen=t,this.type="LimitSpeedOverLife"}update(e,t){let n=e.velocity.length(),i=this.speed.genValue(e.memory,e.age/e.life);if(n>i){const s=(n-i)/n;e.velocity.multiplyScalar(1-s*this.dampen*t*20)}}toJSON(){return{type:this.type,speed:this.speed.toJSON(),dampen:this.dampen}}static fromJSON(e){return new Ka(st(e.speed),e.dampen)}frameUpdate(e){}clone(){return new Ka(this.speed.clone(),this.dampen)}reset(){}}const Ul={ApplyForce:{type:"ApplyForce",constructor:Ga,params:[["direction",["vec3"]],["magnitude",["value"]]],loadJSON:Ga.fromJSON},Noise:{type:"Noise",constructor:qa,params:[["frequency",["value"]],["power",["value"]],["positionAmount",["value"]],["rotationAmount",["value"]]],loadJSON:qa.fromJSON},TurbulenceField:{type:"TurbulenceField",constructor:Ya,params:[["scale",["vec3"]],["octaves",["number"]],["velocityMultiplier",["vec3"]],["timeScale",["vec3"]]],loadJSON:Ya.fromJSON},GravityForce:{type:"GravityForce",constructor:Wa,params:[["center",["vec3"]],["magnitude",["number"]]],loadJSON:Wa.fromJSON},ColorOverLife:{type:"ColorOverLife",constructor:Fs,params:[["color",["colorFunc"]]],loadJSON:Fs.fromJSON},RotationOverLife:{type:"RotationOverLife",constructor:Ua,params:[["angularVelocity",["value","valueFunc"]]],loadJSON:Ua.fromJSON},Rotation3DOverLife:{type:"Rotation3DOverLife",constructor:Na,params:[["angularVelocity",["rotationFunc"]]],loadJSON:Na.fromJSON},SizeOverLife:{type:"SizeOverLife",constructor:Ds,params:[["size",["value","valueFunc","vec3Func"]]],loadJSON:Ds.fromJSON},ColorBySpeed:{type:"ColorBySpeed",constructor:Za,params:[["color",["colorFunc"]],["speedRange",["range"]]],loadJSON:Za.fromJSON},RotationBySpeed:{type:"RotationBySpeed",constructor:$a,params:[["angularVelocity",["value","valueFunc"]],["speedRange",["range"]]],loadJSON:$a.fromJSON},SizeBySpeed:{type:"SizeBySpeed",constructor:Ja,params:[["size",["value","valueFunc","vec3Func"]],["speedRange",["range"]]],loadJSON:Ja.fromJSON},SpeedOverLife:{type:"SpeedOverLife",constructor:za,params:[["speed",["value","valueFunc"]]],loadJSON:za.fromJSON},FrameOverLife:{type:"FrameOverLife",constructor:ka,params:[["frame",["value","valueFunc"]]],loadJSON:ka.fromJSON},ForceOverLife:{type:"ForceOverLife",constructor:Ba,params:[["x",["value","valueFunc"]],["y",["value","valueFunc"]],["z",["value","valueFunc"]]],loadJSON:Ba.fromJSON},OrbitOverLife:{type:"OrbitOverLife",constructor:Va,params:[["orbitSpeed",["value","valueFunc"]],["axis",["vec3"]]],loadJSON:Va.fromJSON},WidthOverLength:{type:"WidthOverLength",constructor:Ha,params:[["width",["value","valueFunc"]]],loadJSON:Ha.fromJSON},ChangeEmitDirection:{type:"ChangeEmitDirection",constructor:Xa,params:[["angle",["value"]]],loadJSON:Xa.fromJSON},EmitSubParticleSystem:{type:"EmitSubParticleSystem",constructor:ja,params:[["particleSystem",["self"]],["useVelocityAsBasis",["boolean"]],["subParticleSystem",["particleSystem"]],["mode",["number"]],["emitProbability",["number"]]],loadJSON:ja.fromJSON},LimitSpeedOverLife:{type:"LimitSpeedOverLife",constructor:Ka,params:[["speed",["value","valueFunc"]],["dampen",["number"]]],loadJSON:Ka.fromJSON}};function H1(r,e){return Ul[r.type]?Ul[r.type].loadJSON(r,e):null}const G1=[];function W1(r){if(!G1.find(t=>t.id===r.id)){for(const t of r.emitterShapes)vd[t.type]||(vd[t.type]=t);for(const t of r.behaviors)Ul[t.type]||(Ul[t.type]=t)}}class Qa{get geometry(){return this._geometry}set geometry(e){if(this._geometry=e,e===void 0||typeof e=="string")return;const t=new vn;this._triangleIndexToArea.length=0;let n=0;if(!e.getIndex())return;const i=e.getIndex().array,s=i.length/3;this._triangleIndexToArea.push(0);for(let a=0;a<s;a++)t.setFromAttributeAndIndices(e.getAttribute("position"),i[a*3],i[a*3+1],i[a*3+2]),n+=t.getArea(),this._triangleIndexToArea.push(n);e.userData.triangleIndexToArea=this._triangleIndexToArea}constructor(e){this.type="mesh_surface",this._triangleIndexToArea=[],this._tempA=new C,this._tempB=new C,this._tempC=new C,e&&(this.geometry=e)}initialize(e){const t=this._geometry;if(!t||t.getIndex()===null){e.position.set(0,0,0),e.velocity.set(0,0,1).multiplyScalar(e.startSpeed);return}const n=this._triangleIndexToArea.length-1;let i=0,s=n;const a=Math.random()*this._triangleIndexToArea[n];for(;i+1<s;){const f=Math.floor((i+s)/2);a<this._triangleIndexToArea[f]?s=f:i=f}let o=Math.random(),l=Math.random();o+l>1&&(o=1-o,l=1-l);const c=t.getIndex().array[i*3],d=t.getIndex().array[i*3+1],h=t.getIndex().array[i*3+2],u=t.getAttribute("position");this._tempA.fromBufferAttribute(u,c),this._tempB.fromBufferAttribute(u,d),this._tempC.fromBufferAttribute(u,h),this._tempB.sub(this._tempA),this._tempC.sub(this._tempA),this._tempA.addScaledVector(this._tempB,o).addScaledVector(this._tempC,l),e.position.copy(this._tempA),this._tempA.copy(this._tempB).cross(this._tempC).normalize(),e.velocity.copy(this._tempA).normalize().multiplyScalar(e.startSpeed)}toJSON(){return{type:"mesh_surface",mesh:this._geometry?this._geometry.uuid:""}}static fromJSON(e,t){return new Qa(t.geometries[e.geometry])}clone(){return new Qa(this._geometry)}update(e,t){}}const X1={id:"three.quarks",emitterShapes:[{type:"mesh_surface",params:[["geometry",["geometry"]]],constructor:Qa,loadJSON:Qa.fromJSON}],behaviors:[]};var j1=`
#ifdef SOFT_PARTICLES

    /* #ifdef LOGDEPTH
    float distSample = linearize_depth_log(sampleDepth, near, far);
    #else
    float distSample = ortho ? linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far);
    #endif */

    vec2 p2 = projPosition.xy / projPosition.w;
    
    p2 = 0.5 * p2 + 0.5;

    float readDepth = texture2D(depthTexture, p2.xy).r;
    float viewDepth = linearize_depth(readDepth);

    float softParticlesFade = saturate(SOFT_INV_FADE_DISTANCE * ((viewDepth - SOFT_NEAR_FADE) - linearDepth));
    
    gl_FragColor *= softParticlesFade;

    //gl_FragColor = vec4(softParticlesFade , 0, 0, 1);
#endif
`,Y1=`
#ifdef SOFT_PARTICLES

    uniform sampler2D depthTexture;
    uniform vec4 projParams;
    uniform vec2 softParams;

    varying vec4 projPosition;
    varying float linearDepth;

    #define SOFT_NEAR_FADE softParams.x
    #define SOFT_INV_FADE_DISTANCE softParams.y

    #define zNear projParams.x
    #define zFar projParams.y

    float linearize_depth(float d)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }

#endif
`,q1=`
#ifdef SOFT_PARTICLES
    varying vec4 projPosition;
    varying float linearDepth;
#endif
`,Z1=`
#ifdef SOFT_PARTICLES
    projPosition = gl_Position;
    linearDepth = -mvPosition.z;
#endif
`,J1=`
#ifdef USE_MAP
    vec4 texelColor = texture2D( map, vUv);
    #ifdef TILE_BLEND
        texelColor = mix( texelColor, texture2D( map, vUvNext ), vUvBlend );
    #endif
    diffuseColor *= texelColor;
#endif
`,$1=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,K1=`
#ifdef UV_TILE
    attribute float uvTile;
    uniform vec2 tileCount;
    
    mat3 makeTileTransform(float uvTile) {
        float col = mod(uvTile, tileCount.x);
        float row = (tileCount.y - floor(uvTile / tileCount.x) - 1.0);
        
        return mat3(
          1.0 / tileCount.x, 0.0, 0.0,
          0.0, 1.0 / tileCount.y, 0.0, 
          col / tileCount.x, row / tileCount.y, 1.0);
    }
#else
    mat3 makeTileTransform(float uvTile) {
        return mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);
    }
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,Q1=`
#ifdef UV_TILE
    mat3 tileTransform = makeTileTransform(floor(uvTile));
    #ifdef TILE_BLEND
        mat3 nextTileTransform = makeTileTransform(ceil(uvTile));
        vUvBlend = fract(uvTile);
    #endif
#else
    mat3 tileTransform = makeTileTransform(0.0);
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

vUv = (tileTransform *vec3( uv, 1 )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vUvNext = (nextTileTransform *vec3( uv, 1 )).xy;
#endif

#endif
#ifdef USE_MAP

vMapUv = ( tileTransform * (mapTransform * vec3( MAP_UV, 1 ) )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vMapUvNext = (nextTileTransform * (mapTransform * vec3( MAP_UV, 1 ))).xy;
#endif

#endif
#ifdef USE_ALPHAMAP

vAlphaMapUv = ( tileTransform * (alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) )).xy;
    
#endif
#ifdef USE_LIGHTMAP

vLightMapUv = ( tileTransform * (lightMapTransform * vec3( LIGHTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_AOMAP

vAoMapUv = ( tileTransform * (aoMapTransform * vec3( AOMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_BUMPMAP

vBumpMapUv = ( tileTransform * (bumpMapTransform * vec3( BUMPMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_NORMALMAP

vNormalMapUv = ( tileTransform * (normalMapTransform * vec3( NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

vDisplacementMapUv = ( tileTransform * (displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_EMISSIVEMAP

vEmissiveMapUv = ( tileTransform * (emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_METALNESSMAP

vMetalnessMapUv = ( tileTransform * (metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ROUGHNESSMAP

vRoughnessMapUv = ( tileTransform * (roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ANISOTROPYMAP

vAnisotropyMapUv = ( tileTransform * (anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOATMAP

vClearcoatMapUv = ( tileTransform * (clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

vClearcoatNormalMapUv = ( tileTransform * (clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

vClearcoatRoughnessMapUv = ( tileTransform * (clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

vIridescenceMapUv = ( tileTransform * (iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

vIridescenceThicknessMapUv = ( tileTransform * (iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

vSheenColorMapUv = ( tileTransform * (sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

vSheenRoughnessMapUv = ( tileTransform * (sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULARMAP

vSpecularMapUv = ( tileTransform * (specularMapTransform * vec3( SPECULARMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

vSpecularColorMapUv = ( tileTransform * (specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

vSpecularIntensityMapUv = ( tileTransform * (specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

vTransmissionMapUv = ( tileTransform * transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_THICKNESSMAP

vThicknessMapUv = ( tileTransform * thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) )).xy;

#endif

`;const Xi=We;function eE(){Xi.tile_pars_vertex=K1,Xi.tile_vertex=Q1,Xi.tile_pars_fragment=$1,Xi.tile_fragment=J1,Xi.soft_pars_vertex=q1,Xi.soft_vertex=Z1,Xi.soft_pars_fragment=Y1,Xi.soft_fragment=j1}class tE extends pt{constructor(e){super(),this.type="ParticleEmitter",this.system=e}clone(){const e=this.system.clone();return e.emitter.copy(this,!0),e.emitter}dispose(){}extractFromCache(e){const t=[];for(const n in e){const i=e[n];delete i.metadata,t.push(i)}return t}toJSON(e,t={}){const n=this.children;this.children=this.children.filter(s=>s.type!=="ParticleSystemPreview");const i=super.toJSON(e);return this.children=n,this.system!==null&&(i.object.ps=this.system.toJSON(e,t)),i}}var ge;(function(r){r[r.BillBoard=0]="BillBoard",r[r.StretchedBillBoard=1]="StretchedBillBoard",r[r.Mesh=2]="Mesh",r[r.Trail=3]="Trail",r[r.HorizontalBillBoard=4]="HorizontalBillBoard",r[r.VerticalBillBoard=5]="VerticalBillBoard"})(ge||(ge={}));class Ng extends ae{constructor(e){super(),this.type="VFXBatch",this.maxParticles=1e3,this.systems=new Set;const t=new As;t.mask=e.layers.mask;const n=e.material.clone();n.defines={},Object.assign(n.defines,e.material.defines),this.settings={instancingGeometry:e.instancingGeometry,renderMode:e.renderMode,renderOrder:e.renderOrder,material:n,uTileCount:e.uTileCount,vTileCount:e.vTileCount,blendTiles:e.blendTiles,softParticles:e.softParticles,softNearFade:e.softNearFade,softFarFade:e.softFarFade,layers:t},this.frustumCulled=!1,this.renderOrder=this.settings.renderOrder}addSystem(e){this.systems.add(e)}removeSystem(e){this.systems.delete(e)}applyDepthTexture(e){const t=this.material.uniforms.depthTexture;t&&t.value!==e&&(t.value=e,this.material.needsUpdate=!0)}getVisibleSystems(){return Array.from(this.systems).filter(e=>e.emitter.visible)}}const nE=new ve(0,0,1),rh=new ft,iE=new ve,sE=new ve;new ve;const ym=60,hl=new Ir(1,1,1,1);class eo{set time(e){this.emissionState.time=e}get time(){return this.emissionState.time}get layers(){return this.rendererSettings.layers}get texture(){return this.rendererSettings.material.map}set texture(e){this.rendererSettings.material.map=e,this.neededToUpdateRender=!0}get material(){return this.rendererSettings.material}set material(e){this.rendererSettings.material=e,this.neededToUpdateRender=!0}get uTileCount(){return this.rendererSettings.uTileCount}set uTileCount(e){this.rendererSettings.uTileCount=e,this.neededToUpdateRender=!0}get vTileCount(){return this.rendererSettings.vTileCount}set vTileCount(e){this.rendererSettings.vTileCount=e,this.neededToUpdateRender=!0}get blendTiles(){return this.rendererSettings.blendTiles}set blendTiles(e){this.rendererSettings.blendTiles=e,this.neededToUpdateRender=!0}get softParticles(){return this.rendererSettings.softParticles}set softParticles(e){this.rendererSettings.softParticles=e,this.neededToUpdateRender=!0}get softNearFade(){return this.rendererSettings.softNearFade}set softNearFade(e){this.rendererSettings.softNearFade=e,this.neededToUpdateRender=!0}get softFarFade(){return this.rendererSettings.softFarFade}set softFarFade(e){this.rendererSettings.softFarFade=e,this.neededToUpdateRender=!0}get instancingGeometry(){return this.rendererSettings.instancingGeometry}set instancingGeometry(e){this.restart(),this.particles.length=0,this.rendererSettings.instancingGeometry=e,this.neededToUpdateRender=!0}get renderMode(){return this.rendererSettings.renderMode}set renderMode(e){if(this.rendererSettings.renderMode!==e){let t=!1;switch(this.rendererSettings.renderMode===ge.Trail&&(t=!0),this.rendererSettings.renderMode===ge.Mesh&&(this.startRotation=new tt(0)),e){case ge.Trail:this.rendererEmitterSettings={startLength:new tt(30),followLocalOrigin:!1},t=!0;break;case ge.Mesh:this.rendererEmitterSettings={geometry:hl},this.startRotation=new Pa(new ve(0,1,0),new tt(0));break;case ge.StretchedBillBoard:this.rendererEmitterSettings={speedFactor:0,lengthFactor:2},this.rendererSettings.instancingGeometry=hl;break;case ge.BillBoard:case ge.VerticalBillBoard:case ge.HorizontalBillBoard:this.rendererEmitterSettings={},this.rendererSettings.instancingGeometry=hl;break}this.rendererSettings.renderMode=e,t&&(this.restart(),this.particles.length=0),this.neededToUpdateRender=!0}}get renderOrder(){return this.rendererSettings.renderOrder}set renderOrder(e){this.rendererSettings.renderOrder=e,this.neededToUpdateRender=!0}get blending(){return this.rendererSettings.material.blending}set blending(e){this.rendererSettings.material.blending=e,this.neededToUpdateRender=!0}constructor(e){if(this.temp=new ve,this.travelDistance=0,this.normalMatrix=new mi,this.memory=[],this.listeners={},this.firstTimeUpdate=!0,this.autoDestroy=e.autoDestroy===void 0?!1:e.autoDestroy,this.duration=e.duration??1,this.looping=e.looping===void 0?!0:e.looping,this.prewarm=e.prewarm===void 0?!1:e.prewarm,this.startLife=e.startLife??new tt(5),this.startSpeed=e.startSpeed??new tt(0),this.startRotation=e.startRotation??new tt(0),this.startSize=e.startSize??new tt(1),this.startColor=e.startColor??new ss(new gn(1,1,1,1)),this.emissionOverTime=e.emissionOverTime??new tt(10),this.emissionOverDistance=e.emissionOverDistance??new tt(0),this.emissionBursts=e.emissionBursts??[],this.onlyUsedByOther=e.onlyUsedByOther??!1,this.emitterShape=e.shape??new rs,this.behaviors=e.behaviors??new Array,this.worldSpace=e.worldSpace??!1,this.rendererEmitterSettings=e.rendererEmitterSettings??{},e.renderMode===ge.StretchedBillBoard){const t=this.rendererEmitterSettings;e.speedFactor!==void 0&&(t.speedFactor=e.speedFactor),t.speedFactor=t.speedFactor??0,t.lengthFactor=t.lengthFactor??0}this.rendererSettings={instancingGeometry:e.instancingGeometry??hl,renderMode:e.renderMode??ge.BillBoard,renderOrder:e.renderOrder??0,material:e.material,uTileCount:e.uTileCount??1,vTileCount:e.vTileCount??1,blendTiles:e.blendTiles??!1,softParticles:e.softParticles??!1,softNearFade:e.softNearFade??0,softFarFade:e.softFarFade??0,layers:e.layers??new As},this.neededToUpdateRender=!0,this.particles=new Array,this.startTileIndex=e.startTileIndex||new tt(0),this.emitter=new tE(this),this.paused=!1,this.particleNum=0,this.emissionState={isBursting:!1,burstParticleIndex:0,burstParticleCount:0,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,travelDistance:0},this.emissionBursts.forEach(t=>t.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1}pause(){this.paused=!0}play(){this.paused=!1}stop(){this.restart(),this.pause()}spawn(e,t,n){rh.setFromRotationMatrix(n);const i=iE,s=rh,a=sE;n.decompose(i,s,a);for(let o=0;o<e;o++){for(t.burstParticleIndex=o,this.particleNum++;this.particles.length<this.particleNum;)this.rendererSettings.renderMode===ge.Trail?this.particles.push(new Md):this.particles.push(new D1);const l=this.particles[this.particleNum-1];if(l.reset(),l.speedModifier=1,this.startColor.startGen(l.memory),this.startColor.genColor(l.memory,l.startColor,this.emissionState.time),l.color.copy(l.startColor),this.startSpeed.startGen(l.memory),l.startSpeed=this.startSpeed.genValue(l.memory,t.time/this.duration),this.startLife.startGen(l.memory),l.life=this.startLife.genValue(l.memory,t.time/this.duration),l.age=0,this.startSize.startGen(l.memory),this.startSize.type==="vec3function")this.startSize.genValue(l.memory,l.startSize,t.time/this.duration);else{const c=this.startSize.genValue(l.memory,t.time/this.duration);l.startSize.set(c,c,c)}if(this.startTileIndex.startGen(l.memory),l.uvTile=this.startTileIndex.genValue(l.memory),l.size.copy(l.startSize),this.rendererSettings.renderMode===ge.Mesh||this.rendererSettings.renderMode===ge.BillBoard||this.rendererSettings.renderMode===ge.VerticalBillBoard||this.rendererSettings.renderMode===ge.HorizontalBillBoard||this.rendererSettings.renderMode===ge.StretchedBillBoard){const c=l;this.startRotation.startGen(l.memory),this.rendererSettings.renderMode===ge.Mesh?(c.rotation instanceof ft||(c.rotation=new ft),this.startRotation.type==="rotation"?this.startRotation.genValue(l.memory,c.rotation,1,t.time/this.duration):c.rotation.setFromAxisAngle(nE,this.startRotation.genValue(c.memory,t.time/this.duration))):this.startRotation.type==="rotation"?c.rotation=0:c.rotation=this.startRotation.genValue(c.memory,t.time/this.duration)}else if(this.rendererSettings.renderMode===ge.Trail){const c=l;this.rendererEmitterSettings.startLength.startGen(c.memory),c.length=this.rendererEmitterSettings.startLength.genValue(c.memory,t.time/this.duration)}if(this.emitterShape.initialize(l,t),this.rendererSettings.renderMode===ge.Trail&&this.rendererEmitterSettings.followLocalOrigin){const c=l;c.localPosition=new ve().copy(c.position)}this.worldSpace?(l.position.applyMatrix4(n),l.startSize.multiply(a).abs(),l.size.copy(l.startSize),l.velocity.multiply(a).applyMatrix3(this.normalMatrix),l.rotation&&l.rotation instanceof ft&&l.rotation.multiplyQuaternions(rh,l.rotation)):this.onlyUsedByOther&&(l.parentMatrix=n);for(let c=0;c<this.behaviors.length;c++)this.behaviors[c].initialize(l,this)}}endEmit(){this.emitEnded=!0,this.autoDestroy&&(this.markForDestroy=!0),this.fire({type:"emitEnd",particleSystem:this})}dispose(){this._renderer&&this._renderer.deleteSystem(this),this.emitter.dispose(),this.emitter.parent&&this.emitter.parent.remove(this.emitter),this.fire({type:"destroy",particleSystem:this})}restart(){this.memory.length=0,this.paused=!1,this.particleNum=0,this.emissionState.isBursting=!1,this.emissionState.burstIndex=0,this.emissionState.burstWaveIndex=0,this.emissionState.time=0,this.emissionState.waitEmiting=0,this.behaviors.forEach(e=>{e.reset()}),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1,this.emissionBursts.forEach(e=>e.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory)}update(e){if(this.paused)return;let t=this.emitter;for(;t.parent;)t=t.parent;if(t.type!=="Scene"){this.dispose();return}if(this.firstTimeUpdate&&(this.firstTimeUpdate=!1,this.emitter.updateWorldMatrix(!0,!1)),this.emitEnded&&this.particleNum===0){this.markForDestroy&&this.emitter.parent&&this.dispose();return}if(this.looping&&this.prewarm&&!this.prewarmed){this.prewarmed=!0;for(let n=0;n<this.duration*ym;n++)this.update(1/ym)}e>.1&&(e=.1),this.neededToUpdateRender&&(this._renderer&&this._renderer.updateSystem(this),this.neededToUpdateRender=!1),this.onlyUsedByOther||this.emit(e,this.emissionState,this.emitter.matrixWorld),this.emitterShape.update(this,e);for(let n=0;n<this.behaviors.length;n++){this.behaviors[n].frameUpdate(e);for(let i=0;i<this.particleNum;i++)this.particles[i].died||this.behaviors[n].update(this.particles[i],e)}for(let n=0;n<this.particleNum;n++)this.rendererEmitterSettings.followLocalOrigin&&this.particles[n].localPosition?(this.particles[n].position.copy(this.particles[n].localPosition),this.particles[n].parentMatrix?this.particles[n].position.applyMatrix4(this.particles[n].parentMatrix):this.particles[n].position.applyMatrix4(this.emitter.matrixWorld)):this.particles[n].position.addScaledVector(this.particles[n].velocity,e*this.particles[n].speedModifier),this.particles[n].age+=e;if(this.rendererSettings.renderMode===ge.Trail)for(let n=0;n<this.particleNum;n++)this.particles[n].update();for(let n=0;n<this.particleNum;n++){const i=this.particles[n];i.died&&(!(i instanceof Md)||i.previous.length===0)&&(this.particles[n]=this.particles[this.particleNum-1],this.particles[this.particleNum-1]=i,this.particleNum--,n--,this.fire({type:"particleDied",particleSystem:this,particle:i}))}}emit(e,t,n){t.time>this.duration&&(this.looping?(t.time-=this.duration,t.burstIndex=0,this.behaviors.forEach(s=>{s.reset()})):!this.emitEnded&&!this.onlyUsedByOther&&this.endEmit()),this.normalMatrix.getNormalMatrix(n);const i=Math.ceil(t.waitEmiting);for(this.spawn(i,t,n),t.waitEmiting-=i;t.burstIndex<this.emissionBursts.length&&this.emissionBursts[t.burstIndex].time<=t.time;){if(Math.random()<this.emissionBursts[t.burstIndex].probability){const s=this.emissionBursts[t.burstIndex].count.genValue(this.memory,this.time);t.isBursting=!0,t.burstParticleCount=s,this.spawn(s,t,n),t.isBursting=!1}t.burstIndex++}if(!this.emitEnded&&(t.waitEmiting+=e*this.emissionOverTime.genValue(this.memory,t.time/this.duration),t.previousWorldPos!=null)){this.temp.set(n.elements[12],n.elements[13],n.elements[14]),t.travelDistance+=t.previousWorldPos.distanceTo(this.temp);const s=this.emissionOverDistance.genValue(this.memory,t.time/this.duration);if(t.travelDistance*s>0){const a=Math.floor(t.travelDistance*s);t.travelDistance-=a/s,t.waitEmiting+=a}}t.previousWorldPos===void 0&&(t.previousWorldPos=new ve),t.previousWorldPos.set(n.elements[12],n.elements[13],n.elements[14]),t.time+=e}toJSON(e,t={}){var a;if((e===void 0||typeof e=="string")&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}}),e.materials[this.rendererSettings.material.uuid]=this.rendererSettings.material.toJSON(e),t.useUrlForImage&&((a=this.texture)==null?void 0:a.source)!==void 0){const o=this.texture.source;e.images[o.uuid]={uuid:o.uuid,url:this.texture.image.url}}let i;this.renderMode===ge.Trail?i={startLength:this.rendererEmitterSettings.startLength.toJSON(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===ge.Mesh?i={}:this.renderMode===ge.StretchedBillBoard?i={speedFactor:this.rendererEmitterSettings.speedFactor,lengthFactor:this.rendererEmitterSettings.lengthFactor}:i={};const s=this.rendererSettings.instancingGeometry;return e.geometries&&!e.geometries[s.uuid]&&(e.geometries[s.uuid]=s.toJSON()),{version:"3.0",autoDestroy:this.autoDestroy,looping:this.looping,prewarm:this.prewarm,duration:this.duration,shape:this.emitterShape.toJSON(),startLife:this.startLife.toJSON(),startSpeed:this.startSpeed.toJSON(),startRotation:this.startRotation.toJSON(),startSize:this.startSize.toJSON(),startColor:this.startColor.toJSON(),emissionOverTime:this.emissionOverTime.toJSON(),emissionOverDistance:this.emissionOverDistance.toJSON(),emissionBursts:this.emissionBursts.map(o=>({time:o.time,count:o.count.toJSON(),probability:o.probability,interval:o.interval,cycle:o.cycle})),onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry.uuid,renderOrder:this.renderOrder,renderMode:this.renderMode,rendererEmitterSettings:i,material:this.rendererSettings.material.uuid,layers:this.layers.mask,startTileIndex:this.startTileIndex.toJSON(),uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.rendererSettings.softParticles,softFarFade:this.rendererSettings.softFarFade,softNearFade:this.rendererSettings.softNearFade,behaviors:this.behaviors.map(o=>o.toJSON()),worldSpace:this.worldSpace}}static fromJSON(e,t,n){var l;const i=L1(e.shape,t);let s;if(e.renderMode===ge.Trail){const c=e.rendererEmitterSettings;s={startLength:c.startLength!=null?st(c.startLength):new tt(30),followLocalOrigin:c.followLocalOrigin}}else e.renderMode===ge.Mesh?s={}:e.renderMode===ge.StretchedBillBoard?(s=e.rendererEmitterSettings,e.speedFactor!=null&&(s.speedFactor=e.speedFactor)):s={};const a=new As;e.layers&&(a.mask=e.layers);const o=new eo({autoDestroy:e.autoDestroy,looping:e.looping,prewarm:e.prewarm,duration:e.duration,shape:i,startLife:st(e.startLife),startSpeed:st(e.startSpeed),startRotation:Ol(e.startRotation),startSize:Ol(e.startSize),startColor:ru(e.startColor),emissionOverTime:st(e.emissionOverTime),emissionOverDistance:st(e.emissionOverDistance),emissionBursts:(l=e.emissionBursts)==null?void 0:l.map(c=>({time:c.time,count:typeof c.count=="number"?new tt(c.count):st(c.count),probability:c.probability??1,interval:c.interval??.1,cycle:c.cycle??1})),onlyUsedByOther:e.onlyUsedByOther,instancingGeometry:t.geometries[e.instancingGeometry],renderMode:e.renderMode,rendererEmitterSettings:s,renderOrder:e.renderOrder,layers:a,material:e.material?t.materials[e.material]:e.texture?new on({map:t.textures[e.texture],transparent:e.transparent??!0,blending:e.blending,side:mn}):new on({color:16777215,transparent:!0,blending:xr,side:mn}),startTileIndex:typeof e.startTileIndex=="number"?new tt(e.startTileIndex):st(e.startTileIndex),uTileCount:e.uTileCount,vTileCount:e.vTileCount,blendTiles:e.blendTiles,softParticles:e.softParticles,softFarFade:e.softFarFade,softNearFade:e.softNearFade,behaviors:[],worldSpace:e.worldSpace});return o.behaviors=e.behaviors.map(c=>{const d=H1(c,o);return d&&d.type==="EmitSubParticleSystem"&&(n[c.subParticleSystem]=d),d}).filter(c=>c!==null),o}addBehavior(e){this.behaviors.push(e)}getRendererSettings(){return this.rendererSettings}addEventListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}removeAllEventListeners(e){this.listeners[e]&&(this.listeners[e]=[])}removeEventListener(e,t){if(this.listeners[e]){const n=this.listeners[e].indexOf(t);n!==-1&&this.listeners[e].splice(n,1)}}fire(e){this.listeners[e.type]&&this.listeners[e.type].forEach(t=>t(e))}clone(){const e=[];for(const s of this.emissionBursts){const a={};Object.assign(a,s),e.push(a)}const t=[];for(const s of this.behaviors)t.push(s.clone());let n;this.renderMode===ge.Trail?n={startLength:this.rendererEmitterSettings.startLength.clone(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===ge.StretchedBillBoard?n={lengthFactor:this.rendererEmitterSettings.lengthFactor,speedFactor:this.rendererEmitterSettings.speedFactor}:n={};const i=new As;return i.mask=this.layers.mask,new eo({autoDestroy:this.autoDestroy,looping:this.looping,duration:this.duration,shape:this.emitterShape.clone(),startLife:this.startLife.clone(),startSpeed:this.startSpeed.clone(),startRotation:this.startRotation.clone(),startSize:this.startSize.clone(),startColor:this.startColor.clone(),emissionOverTime:this.emissionOverTime.clone(),emissionOverDistance:this.emissionOverDistance.clone(),emissionBursts:e,onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry,renderMode:this.renderMode,renderOrder:this.renderOrder,rendererEmitterSettings:n,material:this.rendererSettings.material,startTileIndex:this.startTileIndex,uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.softParticles,softFarFade:this.softFarFade,softNearFade:this.softNearFade,behaviors:t,worldSpace:this.worldSpace,layers:i})}}var ah=`

#include <common>
#include <color_pars_fragment>
#include <map_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <alphatest_pars_fragment>

#include <tile_pars_fragment>
#include <soft_pars_fragment>

void main() {

    #include <clipping_planes_fragment>
    
    vec3 outgoingLight = vec3( 0.0 );
    vec4 diffuseColor = vColor;
    
    #include <logdepthbuf_fragment>
    
    #include <tile_fragment>
    #include <alphatest_fragment>

    outgoingLight = diffuseColor.rgb;
    
    #ifdef USE_COLOR_AS_ALPHA
    gl_FragColor = vec4( outgoingLight, diffuseColor.r );
    #else
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #endif
    
    #include <soft_fragment>
    #include <tonemapping_fragment>
}
`,au=`
#define STANDARD

#ifdef PHYSICAL
#define IOR
#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
uniform float ior;
#endif

#ifdef USE_SPECULAR
uniform float specularIntensity;
uniform vec3 specularColor;

#ifdef USE_SPECULAR_COLORMAP
uniform sampler2D specularColorMap;
#endif

#ifdef USE_SPECULAR_INTENSITYMAP
uniform sampler2D specularIntensityMap;
#endif
#endif

#ifdef USE_CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
uniform float iridescence;
uniform float iridescenceIOR;
uniform float iridescenceThicknessMinimum;
uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
uniform vec3 sheenColor;
uniform float sheenRoughness;

#ifdef USE_SHEEN_COLORMAP
uniform sampler2D sheenColorMap;
#endif

#ifdef USE_SHEEN_ROUGHNESSMAP
uniform sampler2D sheenRoughnessMap;
#endif
#endif

#ifdef USE_ANISOTROPY
uniform vec2 anisotropyVector;

#ifdef USE_ANISOTROPYMAP
uniform sampler2D anisotropyMap;
#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>

ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
vec3 totalEmissiveRadiance = emissive;

#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>

// accumulation
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>

// modulation
#include <aomap_fragment>

vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

#include <transmission_fragment>

vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

#ifdef USE_SHEEN

// Sheen energy compensation approximation calculation can be found at the end of
// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

#endif

#ifdef USE_CLEARCOAT

float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

#endif

#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,rE=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;

void main() {
	
    vec2 alignedPosition = position.xy * size.xy;
    
    vec2 rotatedPosition;
    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
#ifdef HORIZONTAL
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.x += rotatedPosition.x;
    mvPosition.z -= rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
#elif defined(VERTICAL)
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.y += rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
    mvPosition.x += rotatedPosition.x;
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    mvPosition.xy += rotatedPosition;
#endif

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>

	#include <clipping_planes_vertex>

	#include <tile_vertex>
	#include <soft_vertex>
}
`,aE=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
// attribute vec4 color;

void main() {

    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;
    
    mat4 matrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);
    
    vec4 mvPosition = modelViewMatrix * (matrix * vec4( position, 1.0 ));

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
    #include <tile_vertex>
    #include <soft_vertex>
}
`,ou=`
#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
#include <tile_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

    #include <tile_vertex>
    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;

    mat4 particleMatrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);

#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>

#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>

	// replace defaultnormal_vertex
	vec3 transformedNormal = objectNormal;
    mat3 m = mat3( particleMatrix );
    transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
    transformedNormal = m * transformedNormal;
    transformedNormal = normalMatrix * transformedNormal;
    #ifdef FLIP_SIDED
        transformedNormal = - transformedNormal;
    #endif
    #ifdef USE_TANGENT
        vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
        #ifdef FLIP_SIDED
        transformedTangent = - transformedTangent;
        #endif
    #endif

	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>

	// replace include <project_vertex>
  vec4 mvPosition = vec4( transformed, 1.0 );
  mvPosition = modelViewMatrix * (particleMatrix * mvPosition);
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
	vViewPosition = - mvPosition.xyz;
	
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
    vWorldPosition = worldPosition.xyz;
#endif
}
`,oE=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;
attribute vec4 velocity;

uniform float speedFactor;

void main() {
    float lengthFactor = velocity.w;
    float avgSize = (size.x + size.y) * 0.5;
#ifdef USE_SKEW
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;

    vec3 scaledPos = vec3(position.xy * size.xy, position.z);
    float vlength = length(viewVelocity);
    vec3 projVelocity =  dot(scaledPos, viewVelocity) * viewVelocity / vlength;
    mvPosition.xyz += scaledPos + projVelocity * (speedFactor / avgSize + lengthFactor / vlength);
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;
    float vlength = length(viewVelocity); 
    mvPosition.xyz += position.y * normalize(cross(mvPosition.xyz, viewVelocity)) * avgSize; // switch the cross to  match unity implementation
    mvPosition.xyz -= (position.x + 0.5) * viewVelocity * (1.0 + lengthFactor / vlength) * avgSize; // minus position.x to match unity implementation
#endif
	vColor = color;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <tile_vertex>
	#include <soft_vertex>
}
`;function bd(r){return r===0?"uv":`uv${r}`}class lE extends ag{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=ou,e.fragmentShader=au}}class cE extends y_{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=ou,e.fragmentShader=au}}class hE extends Ng{constructor(e){super(e),this.vector_=new ve,this.vector2_=new ve,this.vector3_=new ve,this.quaternion_=new ft,this.quaternion2_=new ft,this.quaternion3_=new ft,this.rotationMat_=new mi,this.rotationMat2_=new mi,this.maxParticles=1e3,this.setupBuffers(),this.rebuildMaterial()}buildExpandableBuffers(){this.offsetBuffer=new ps(new Float32Array(this.maxParticles*3),3),this.offsetBuffer.setUsage(pn),this.geometry.setAttribute("offset",this.offsetBuffer),this.colorBuffer=new ps(new Float32Array(this.maxParticles*4),4),this.colorBuffer.setUsage(pn),this.geometry.setAttribute("color",this.colorBuffer),this.settings.renderMode===ge.Mesh?(this.rotationBuffer=new ps(new Float32Array(this.maxParticles*4),4),this.rotationBuffer.setUsage(pn),this.geometry.setAttribute("rotation",this.rotationBuffer)):(this.settings.renderMode===ge.BillBoard||this.settings.renderMode===ge.HorizontalBillBoard||this.settings.renderMode===ge.VerticalBillBoard||this.settings.renderMode===ge.StretchedBillBoard)&&(this.rotationBuffer=new ps(new Float32Array(this.maxParticles),1),this.rotationBuffer.setUsage(pn),this.geometry.setAttribute("rotation",this.rotationBuffer)),this.sizeBuffer=new ps(new Float32Array(this.maxParticles*3),3),this.sizeBuffer.setUsage(pn),this.geometry.setAttribute("size",this.sizeBuffer),this.uvTileBuffer=new ps(new Float32Array(this.maxParticles),1),this.uvTileBuffer.setUsage(pn),this.geometry.setAttribute("uvTile",this.uvTileBuffer),this.settings.renderMode===ge.StretchedBillBoard&&(this.velocityBuffer=new ps(new Float32Array(this.maxParticles*4),4),this.velocityBuffer.setUsage(pn),this.geometry.setAttribute("velocity",this.velocityBuffer))}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new k_,this.geometry.setIndex(this.settings.instancingGeometry.getIndex()),this.settings.instancingGeometry.hasAttribute("normal")&&this.geometry.setAttribute("normal",this.settings.instancingGeometry.getAttribute("normal")),this.geometry.setAttribute("position",this.settings.instancingGeometry.getAttribute("position")),this.settings.instancingGeometry.hasAttribute("uv")&&this.geometry.setAttribute("uv",this.settings.instancingGeometry.getAttribute("uv")),this.buildExpandableBuffers()}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;const e={},t={};this.settings.material.type!=="MeshStandardMaterial"&&this.settings.material.type!=="MeshPhysicalMaterial"&&(e.map=new Cn(this.settings.material.map)),this.settings.material.alphaTest&&(t.USE_ALPHATEST="",e.alphaTest=new Cn(this.settings.material.alphaTest)),t.USE_UV="";const n=this.settings.uTileCount,i=this.settings.vTileCount;(n>1||i>1)&&(t.UV_TILE="",e.tileCount=new Cn(new Ar(n,i))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=""),this.settings.material.normalMap&&(t.USE_NORMALMAP="",t.NORMALMAP_UV=bd(this.settings.material.normalMap.channel),e.normalMapTransform=new Cn(new mi().copy(this.settings.material.normalMap.matrix))),this.settings.material.map&&(t.USE_MAP="",this.settings.blendTiles&&(t.TILE_BLEND=""),t.MAP_UV=bd(this.settings.material.map.channel),e.mapTransform=new Cn(new mi().copy(this.settings.material.map.matrix))),t.USE_COLOR_ALPHA="";let s;if(this.settings.softParticles){t.SOFT_PARTICLES="";const o=this.settings.softNearFade,l=1/(this.settings.softFarFade-this.settings.softNearFade);e.softParams=new Cn(new Ar(o,l)),e.depthTexture=new Cn(null);const c=e.projParams=new Cn(new gn);s=(d,h,u)=>{c.value.set(u.near,u.far,0,0)}}let a=!1;if(this.settings.renderMode===ge.BillBoard||this.settings.renderMode===ge.VerticalBillBoard||this.settings.renderMode===ge.HorizontalBillBoard||this.settings.renderMode===ge.Mesh){let o,l;this.settings.renderMode===ge.Mesh?this.settings.material.type==="MeshStandardMaterial"||this.settings.material.type==="MeshPhysicalMaterial"?(t.USE_COLOR="",o=ou,l=au,a=!0):(o=aE,l=ah):(o=rE,l=ah),this.settings.renderMode===ge.VerticalBillBoard?t.VERTICAL="":this.settings.renderMode===ge.HorizontalBillBoard&&(t.HORIZONTAL="");let c=!1;this.settings.renderMode===ge.Mesh&&(this.settings.material.type==="MeshStandardMaterial"?(this.material=new lE({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,c=!0):this.settings.material.type==="MeshPhysicalMaterial"&&(this.material=new cE({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,c=!0)),c||(this.material=new Dn({uniforms:e,defines:t,vertexShader:o,fragmentShader:l,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest,lights:a}))}else if(this.settings.renderMode===ge.StretchedBillBoard)e.speedFactor=new Cn(1),this.material=new Dn({uniforms:e,defines:t,vertexShader:oE,fragmentShader:ah,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest});else throw new Error("render mode unavailable");this.material&&s&&(this.material.onBeforeRender=s)}update(){let e=0,t=0;const n=this.getVisibleSystems();for(const i of n)t+=i.particleNum;t>this.maxParticles&&this.expandBuffers(t);for(const i of n){i.emitter.updateMatrixWorld&&(i.emitter.updateWorldMatrix(!0,!1),i.emitter.updateMatrixWorld(!0));const s=i.particles,a=i.particleNum,o=this.quaternion2_,l=this.vector2_,c=this.vector3_;i.emitter.matrixWorld.decompose(l,o,c),this.rotationMat_.setFromMatrix4(i.emitter.matrixWorld);for(let d=0;d<a;d++,e++){const h=s[d];if(this.settings.renderMode===ge.Mesh){let f;if(i.worldSpace)f=h.rotation;else{let p;h.parentMatrix?p=this.quaternion3_.setFromRotationMatrix(h.parentMatrix):p=o,f=this.quaternion_,f.copy(p).multiply(h.rotation)}this.rotationBuffer.setXYZW(e,f.x,f.y,f.z,f.w)}else(this.settings.renderMode===ge.StretchedBillBoard||this.settings.renderMode===ge.VerticalBillBoard||this.settings.renderMode===ge.HorizontalBillBoard||this.settings.renderMode===ge.BillBoard)&&this.rotationBuffer.setX(e,h.rotation);let u;if(i.worldSpace?u=h.position:(u=this.vector_,h.parentMatrix?u.copy(h.position).applyMatrix4(h.parentMatrix):u.copy(h.position).applyMatrix4(i.emitter.matrixWorld)),this.offsetBuffer.setXYZ(e,u.x,u.y,u.z),this.colorBuffer.setXYZW(e,h.color.x,h.color.y,h.color.z,h.color.w),i.worldSpace?this.sizeBuffer.setXYZ(e,h.size.x,h.size.y,h.size.z):h.parentMatrix?this.sizeBuffer.setXYZ(e,h.size.x,h.size.y,h.size.z):this.sizeBuffer.setXYZ(e,h.size.x*Math.abs(c.x),h.size.y*Math.abs(c.y),h.size.z*Math.abs(c.z)),this.uvTileBuffer.setX(e,h.uvTile),this.settings.renderMode===ge.StretchedBillBoard&&this.velocityBuffer){let f=i.rendererEmitterSettings.speedFactor;f===0&&(f=.001);const p=i.rendererEmitterSettings.lengthFactor;let y;i.worldSpace?y=h.velocity:(y=this.vector_,h.parentMatrix?(this.rotationMat2_.setFromMatrix4(h.parentMatrix),y.copy(h.velocity).applyMatrix3(this.rotationMat2_)):y.copy(h.velocity).applyMatrix3(this.rotationMat_)),this.velocityBuffer.setXYZW(e,y.x*f,y.y*f,y.z*f,p)}}}this.geometry.instanceCount=e,e>0&&(this.offsetBuffer.clearUpdateRanges(),this.offsetBuffer.addUpdateRange(0,e*3),this.offsetBuffer.needsUpdate=!0,this.sizeBuffer.clearUpdateRanges(),this.sizeBuffer.addUpdateRange(0,e*3),this.sizeBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.uvTileBuffer.clearUpdateRanges(),this.uvTileBuffer.addUpdateRange(0,e),this.uvTileBuffer.needsUpdate=!0,this.settings.renderMode===ge.StretchedBillBoard&&this.velocityBuffer&&(this.velocityBuffer.clearUpdateRanges(),this.velocityBuffer.addUpdateRange(0,e*4),this.velocityBuffer.needsUpdate=!0),this.settings.renderMode===ge.Mesh?(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e*4),this.rotationBuffer.needsUpdate=!0):(this.settings.renderMode===ge.StretchedBillBoard||this.settings.renderMode===ge.HorizontalBillBoard||this.settings.renderMode===ge.VerticalBillBoard||this.settings.renderMode===ge.BillBoard)&&(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e),this.rotationBuffer.needsUpdate=!0))}dispose(){this.geometry.dispose()}}var dE=`

#include <common>
#include <tile_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform sampler2D alphaMap;
uniform float useAlphaMap;
uniform float visibility;
uniform float alphaTest;

varying vec4 vColor;
    
void main() {
    #include <clipping_planes_fragment>
    #include <logdepthbuf_fragment>

    vec4 diffuseColor = vColor;
    
    #ifdef USE_MAP
    #include <tile_fragment>
    #ifndef USE_COLOR_AS_ALPHA
    #endif
    #endif
    if( useAlphaMap == 1. ) diffuseColor.a *= texture2D( alphaMap, vUv).a;
    if( diffuseColor.a < alphaTest ) discard;
    gl_FragColor = diffuseColor;

    #include <fog_fragment>
    #include <tonemapping_fragment>
}`,uE=`
#include <common>
#include <tile_pars_vertex>
#include <color_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <fog_pars_vertex>

attribute vec3 previous;
attribute vec3 next;
attribute float side;
attribute float width;

uniform vec2 resolution;
uniform float lineWidth;
uniform float sizeAttenuation;
    
vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
}
    
void main() {

    #include <tile_vertex>
    
    float aspect = resolution.x / resolution.y;

    vColor = color;

    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4( position, 1.0 );
    vec4 prevPos = m * vec4( previous, 1.0 );
    vec4 nextPos = m * vec4( next, 1.0 );

    vec2 currentP = fix( finalPosition, aspect );
    vec2 prevP = fix( prevPos, aspect );
    vec2 nextP = fix( nextPos, aspect );

    float w = lineWidth * width;

    vec2 dir;
    if( nextP == currentP ) dir = normalize( currentP - prevP );
    else if( prevP == currentP ) dir = normalize( nextP - currentP );
    else {
        vec2 dir1 = normalize( currentP - prevP );
        vec2 dir2 = normalize( nextP - currentP );
        dir = normalize( dir1 + dir2 );

        vec2 perp = vec2( -dir1.y, dir1.x );
        vec2 miter = vec2( -dir.y, dir.x );
        //w = clamp( w / dot( miter, perp ), 0., 4., * lineWidth * width );

    }

    //vec2 normal = ( cross( vec3( dir, 0. ) vec3( 0., 0., 1. ) ) ).xy;
    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
    normal.xy *= .5 * w;
    normal *= projectionMatrix;
    if( sizeAttenuation == 0. ) {
        normal.xy *= finalPosition.w;
        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;
    }

    finalPosition.xy += normal.xy * side;

    gl_Position = finalPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    
	#include <fog_vertex>
}`;class fE extends Ng{constructor(e){super(e),this.vector_=new ve,this.vector2_=new ve,this.vector3_=new ve,this.quaternion_=new ft,this.maxParticles=1e4,this.setupBuffers(),this.rebuildMaterial()}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new Ke,this.indexBuffer=new Wt(new Uint32Array(this.maxParticles*6),1),this.indexBuffer.setUsage(pn),this.geometry.setIndex(this.indexBuffer),this.positionBuffer=new Wt(new Float32Array(this.maxParticles*6),3),this.positionBuffer.setUsage(pn),this.geometry.setAttribute("position",this.positionBuffer),this.previousBuffer=new Wt(new Float32Array(this.maxParticles*6),3),this.previousBuffer.setUsage(pn),this.geometry.setAttribute("previous",this.previousBuffer),this.nextBuffer=new Wt(new Float32Array(this.maxParticles*6),3),this.nextBuffer.setUsage(pn),this.geometry.setAttribute("next",this.nextBuffer),this.widthBuffer=new Wt(new Float32Array(this.maxParticles*2),1),this.widthBuffer.setUsage(pn),this.geometry.setAttribute("width",this.widthBuffer),this.sideBuffer=new Wt(new Float32Array(this.maxParticles*2),1),this.sideBuffer.setUsage(pn),this.geometry.setAttribute("side",this.sideBuffer),this.uvBuffer=new Wt(new Float32Array(this.maxParticles*4),2),this.uvBuffer.setUsage(pn),this.geometry.setAttribute("uv",this.uvBuffer),this.colorBuffer=new Wt(new Float32Array(this.maxParticles*8),4),this.colorBuffer.setUsage(pn),this.geometry.setAttribute("color",this.colorBuffer)}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;const e={lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},resolution:{value:new Ar(1,1)},sizeAttenuation:{value:1},visibility:{value:1},alphaTest:{value:0}},t={};if(t.USE_UV="",t.USE_COLOR_ALPHA="",this.settings.material.map&&(t.USE_MAP="",t.MAP_UV=bd(this.settings.material.map.channel),e.map=new Cn(this.settings.material.map),e.mapTransform=new Cn(new mi().copy(this.settings.material.map.matrix))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=""),this.settings.renderMode===ge.Trail)this.material=new Dn({uniforms:e,defines:t,vertexShader:uE,fragmentShader:dE,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,side:this.settings.material.side,blending:this.settings.material.blending||xr,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha});else throw new Error("render mode unavailable")}update(){let e=0,t=0,n=0;const i=this.getVisibleSystems();for(const s of i)for(let a=0;a<s.particleNum;a++)n+=s.particles[a].previous.length*2;n>this.maxParticles&&this.expandBuffers(n);for(const s of i){s.emitter.updateMatrixWorld&&(s.emitter.updateWorldMatrix(!0,!1),s.emitter.updateMatrixWorld(!0));const a=this.quaternion_,o=this.vector2_,l=this.vector3_;s.emitter.matrixWorld.decompose(o,a,l);const c=s.particles,d=s.particleNum,h=this.settings.uTileCount,u=this.settings.vTileCount,f=1/h,p=1/u;for(let y=0;y<d;y++){const g=c[y],m=g.uvTile%u,x=Math.floor(g.uvTile/u+.001),_=g.previous.values();let v=_.next(),w=v.value,S=w;v.done||(v=_.next());let T;v.value!==void 0?T=v.value:T=S;for(let P=0;P<g.previous.length;P++,e+=2){if(this.positionBuffer.setXYZ(e,S.position.x,S.position.y,S.position.z),this.positionBuffer.setXYZ(e+1,S.position.x,S.position.y,S.position.z),s.worldSpace?(this.positionBuffer.setXYZ(e,S.position.x,S.position.y,S.position.z),this.positionBuffer.setXYZ(e+1,S.position.x,S.position.y,S.position.z)):(g.parentMatrix?this.vector_.copy(S.position).applyMatrix4(g.parentMatrix):this.vector_.copy(S.position).applyMatrix4(s.emitter.matrixWorld),this.positionBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.positionBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),s.worldSpace?(this.previousBuffer.setXYZ(e,w.position.x,w.position.y,w.position.z),this.previousBuffer.setXYZ(e+1,w.position.x,w.position.y,w.position.z)):(g.parentMatrix?this.vector_.copy(w.position).applyMatrix4(g.parentMatrix):this.vector_.copy(w.position).applyMatrix4(s.emitter.matrixWorld),this.previousBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.previousBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),s.worldSpace?(this.nextBuffer.setXYZ(e,T.position.x,T.position.y,T.position.z),this.nextBuffer.setXYZ(e+1,T.position.x,T.position.y,T.position.z)):(g.parentMatrix?this.vector_.copy(T.position).applyMatrix4(g.parentMatrix):this.vector_.copy(T.position).applyMatrix4(s.emitter.matrixWorld),this.nextBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.nextBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),this.sideBuffer.setX(e,1),this.sideBuffer.setX(e+1,-1),s.worldSpace)this.widthBuffer.setX(e,S.size),this.widthBuffer.setX(e+1,S.size);else if(g.parentMatrix)this.widthBuffer.setX(e,S.size),this.widthBuffer.setX(e+1,S.size);else{const M=(Math.abs(l.x)+Math.abs(l.y)+Math.abs(l.z))/3;this.widthBuffer.setX(e,S.size*M),this.widthBuffer.setX(e+1,S.size*M)}this.uvBuffer.setXY(e,(P/g.previous.length+m)*f,(u-x-1)*p),this.uvBuffer.setXY(e+1,(P/g.previous.length+m)*f,(u-x)*p),this.colorBuffer.setXYZW(e,S.color.x,S.color.y,S.color.z,S.color.w),this.colorBuffer.setXYZW(e+1,S.color.x,S.color.y,S.color.z,S.color.w),P+1<g.previous.length&&(this.indexBuffer.setX(t*3,e),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+2),t++,this.indexBuffer.setX(t*3,e+2),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+3),t++),w=S,S=T,v.done||(v=_.next(),v.value!==void 0&&(T=v.value))}}}this.positionBuffer.clearUpdateRanges(),this.positionBuffer.addUpdateRange(0,e*3),this.positionBuffer.needsUpdate=!0,this.previousBuffer.clearUpdateRanges(),this.previousBuffer.addUpdateRange(0,e*3),this.previousBuffer.needsUpdate=!0,this.nextBuffer.clearUpdateRanges(),this.nextBuffer.addUpdateRange(0,e*3),this.nextBuffer.needsUpdate=!0,this.sideBuffer.clearUpdateRanges(),this.sideBuffer.addUpdateRange(0,e),this.sideBuffer.needsUpdate=!0,this.widthBuffer.clearUpdateRanges(),this.widthBuffer.addUpdateRange(0,e),this.widthBuffer.needsUpdate=!0,this.uvBuffer.clearUpdateRanges(),this.uvBuffer.addUpdateRange(0,e*2),this.uvBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.indexBuffer.clearUpdateRanges(),this.indexBuffer.addUpdateRange(0,t*3),this.indexBuffer.needsUpdate=!0,this.geometry.setDrawRange(0,t*3)}dispose(){this.geometry.dispose()}}class lu extends pt{constructor(){super(),this.batches=[],this.systemToBatchIndex=new Map,this.type="BatchedRenderer",this.depthTexture=null}static equals(e,t){return e.material.side===t.material.side&&e.material.blending===t.material.blending&&e.material.blendSrc===t.material.blendSrc&&e.material.blendDst===t.material.blendDst&&e.material.blendEquation===t.material.blendEquation&&e.material.premultipliedAlpha===t.material.premultipliedAlpha&&e.material.transparent===t.material.transparent&&e.material.depthTest===t.material.depthTest&&e.material.type===t.material.type&&e.material.alphaTest===t.material.alphaTest&&e.material.map===t.material.map&&e.renderMode===t.renderMode&&e.blendTiles===t.blendTiles&&e.softParticles===t.softParticles&&e.softFarFade===t.softFarFade&&e.softNearFade===t.softNearFade&&e.uTileCount===t.uTileCount&&e.vTileCount===t.vTileCount&&e.instancingGeometry===t.instancingGeometry&&e.renderOrder===t.renderOrder&&e.layers.mask===t.layers.mask}addSystem(e){e._renderer=this;const t=e.getRendererSettings();for(let i=0;i<this.batches.length;i++)if(lu.equals(this.batches[i].settings,t)){this.batches[i].addSystem(e),this.systemToBatchIndex.set(e,i);return}let n;switch(t.renderMode){case ge.Trail:n=new fE(t);break;case ge.Mesh:case ge.BillBoard:case ge.VerticalBillBoard:case ge.HorizontalBillBoard:case ge.StretchedBillBoard:n=new hE(t);break}this.depthTexture&&n.applyDepthTexture(this.depthTexture),n.addSystem(e),this.batches.push(n),this.systemToBatchIndex.set(e,this.batches.length-1),this.add(n)}deleteSystem(e){const t=this.systemToBatchIndex.get(e);t!=null&&(this.batches[t].removeSystem(e),this.systemToBatchIndex.delete(e))}setDepthTexture(e){this.depthTexture=e;for(const t of this.batches)t.applyDepthTexture(e)}updateSystem(e){this.deleteSystem(e),this.addSystem(e)}update(e){this.systemToBatchIndex.forEach((t,n)=>{n.update(e)});for(let t=0;t<this.batches.length;t++)this.batches[t].update()}}eE();W1(X1);console.log("%c Particle system powered by three.quarks. https://quarks.art/","font-size: 14px; font-weight: bold;");const Sd={hit_spark:{name:"打擊火花",particles:{count:15,speed:150,speedVariance:60,size:12,sizeEnd:2,lifetime:.35,lifetimeVariance:.1,color:"#4488ff",colorEnd:"#2244aa",gravity:200,spread:120,direction:[0,1,0],opacity:1,opacityEnd:0,texture:"circle"}},hit_blood:{name:"血液飛濺",particles:{count:12,speed:120,speedVariance:40,size:10,sizeEnd:4,lifetime:.4,lifetimeVariance:.15,color:"#cc0000",colorEnd:"#660000",gravity:300,spread:90,direction:[0,1,0],opacity:1,opacityEnd:0,texture:"circle"}},hit_dust:{name:"灰塵",particles:{count:8,speed:50,speedVariance:25,size:18,sizeEnd:30,lifetime:.5,lifetimeVariance:.2,color:"#aa9977",colorEnd:"#665544",gravity:-20,spread:360,direction:[0,1,0],opacity:.6,opacityEnd:0,texture:"circle"}},death_explosion:{name:"死亡爆炸",particles:{count:25,speed:200,speedVariance:80,size:15,sizeEnd:4,lifetime:.6,lifetimeVariance:.2,color:"#ffffff",colorEnd:"#ffaa00",gravity:150,spread:360,direction:[0,1,0],opacity:1,opacityEnd:0,texture:"star"}},heal_sparkle:{name:"治癒光芒",particles:{count:20,speed:40,speedVariance:20,size:8,sizeEnd:0,lifetime:.8,lifetimeVariance:.3,color:"#44ff88",colorEnd:"#88ffcc",gravity:-50,spread:360,direction:[0,1,0],opacity:.8,opacityEnd:0,texture:"star"}},attack_slash:{name:"斬擊揮砍",particles:{count:10,speed:180,speedVariance:40,size:10,sizeEnd:3,lifetime:.2,lifetimeVariance:.05,color:"#ffffff",colorEnd:"#aaddff",gravity:0,spread:30,direction:[0,0,1],opacity:1,opacityEnd:0,texture:"spark"}},attack_punch:{name:"拳擊衝擊",particles:{count:8,speed:100,speedVariance:30,size:14,sizeEnd:6,lifetime:.25,lifetimeVariance:.08,color:"#ffdd44",colorEnd:"#ff8800",gravity:50,spread:60,direction:[0,0,1],opacity:1,opacityEnd:0,texture:"circle"}},attack_energy:{name:"能量波動",particles:{count:12,speed:60,speedVariance:20,size:16,sizeEnd:4,lifetime:.35,lifetimeVariance:.1,color:"#8844ff",colorEnd:"#4400aa",gravity:-20,spread:45,direction:[0,0,1],opacity:.9,opacityEnd:0,texture:"ring"}}};class Bg{constructor(e){this.customPresets=new Map,this.textureCache=new Map,this.scene=e,this.batchRenderer=new lu,e.add(this.batchRenderer),this.buildTextures()}buildTextures(){this.textureCache.set("circle",this.generateCircleTexture()),this.textureCache.set("spark",this.generateSparkTexture()),this.textureCache.set("ring",this.generateRingTexture()),this.textureCache.set("star",this.generateStarTexture())}registerPreset(e,t){this.customPresets.set(e,t)}getPreset(e){return this.customPresets.get(e)||Sd[e]}listPresets(){const e=[];for(const[t,n]of Object.entries(Sd))e.push({id:t,name:n.name});for(const[t,n]of this.customPresets)e.push({id:t,name:n.name});return e}getAllPresets(){return this.listPresets()}spawn(e,t,n,i=1,s){const a=this.getPreset(e);if(!a){console.warn(`[Quarks] preset not found: ${e}`);return}console.log(`[Quarks] spawn: ${e} at (${t.x.toFixed(0)}, ${t.y.toFixed(0)}, ${t.z.toFixed(0)}) follow=${!!s}`),this.spawnFromConfig(a.particles,t,n,i,s)}spawnFromConfig(e,t,n,i=1,s){const a=this.textureCache.get(e.texture||"circle")||this.textureCache.get("circle"),o=n?n.clone().normalize():new C(e.direction[0],e.direction[1],e.direction[2]).normalize(),l=He.degToRad(e.spread/2),c=(e.emitterRadius??1)*i;let d;switch(e.emitterShape||(e.spread>=350?"sphere":"cone")){case"sphere":d=new rs({radius:c});break;case"cone":d=new Qi({radius:c,angle:l});break;case"circle":d=new Qi({radius:c,angle:0});break;case"point":default:d=new Qi({radius:.01,angle:l});break}const u=new ye(e.color),f=e.colorEnd?new ye(e.colorEnd):u.clone();let p=ge.BillBoard,y;const g=e.renderMode||"billboard";g==="stretched"?(p=ge.StretchedBillBoard,y={speedFactor:.05,lengthFactor:e.lengthFactor??3}):g==="trail"&&(p=ge.Trail,y={startLength:new tt(e.trailLength??10),followLocalOrigin:!1});const m=e.emissionMode==="continuous",x=m?e.duration??1:e.lifetime+e.lifetimeVariance+.1,_={duration:x+.5,looping:!1,startLife:new Rn(Math.max(.05,e.lifetime-e.lifetimeVariance),e.lifetime+e.lifetimeVariance),startSpeed:new Rn(Math.max(0,(e.speed-e.speedVariance)*i),(e.speed+e.speedVariance)*i),startSize:new Rn(e.size*i*.5,e.size*i),startColor:new ss(new gn(u.r,u.g,u.b,e.opacity)),emissionOverTime:m?new tt(e.emissionRate??20):new tt(0),emissionBursts:m?[]:[{time:0,count:new tt(e.count),cycle:1,interval:.01,probability:1}],shape:d,material:new on({map:a,transparent:!0,blending:xr,depthWrite:!1,side:mn}),renderMode:p,startTileIndex:new tt(0),worldSpace:!0};y&&(_.rendererEmitterSettings=y);const v=new eo(_),w=e.sizeEnd/e.size;v.addBehavior(new Ds(new Is([[new Ci(1,1,w,w),0]])));const S=new Li([[new ve(u.r,u.g,u.b),0],[new ve(f.r,f.g,f.b),1]],[[e.opacity,0],[e.opacityEnd,1]]);v.addBehavior(new Fs(S));const T=new C(0,0,1);if(s){const M=s.matrixWorld.clone().invert(),E=t.clone().applyMatrix4(M);v.emitter.position.copy(E);const I=new C;s.matrixWorld.decompose(new C,new rt,I);const D=1/Math.max(I.x,I.y,I.z);v.emitter.scale.setScalar(D),s.add(v.emitter)}else{if(v.emitter.position.copy(t),o.distanceTo(T)>.01){const M=new rt().setFromUnitVectors(T,o);v.emitter.quaternion.copy(M)}this.scene.add(v.emitter)}this.batchRenderer.addSystem(v);const P=x+e.lifetime+e.lifetimeVariance+.5;setTimeout(()=>{this.batchRenderer.deleteSystem(v),s?s.remove(v.emitter):this.scene.remove(v.emitter)},P*1e3)}update(e){this.batchRenderer.update(e)}spawnDashTrail(e,t,n="#66ddff"){const i=new ye(n),s=this.textureCache.get("circle"),a=new eo({duration:5,looping:!1,startLife:new Rn(.3,1.2),startSpeed:new Rn(20,60),startSize:new Rn(80,140),startColor:new ss(new gn(i.r,i.g,i.b,.7)),emissionOverTime:new tt(80),emissionBursts:[],shape:new rs({radius:10}),material:new on({map:s,transparent:!0,blending:xr,depthWrite:!1,side:mn}),renderMode:ge.BillBoard,startTileIndex:new tt(0),worldSpace:!0});a.addBehavior(new Ds(new Is([[new Ci(1,.6,.2,0),0]])));const o=new Li([[new ve(i.r,i.g,i.b),0],[new ve(i.r*.1,i.g*.1,i.b*.3),1]],[[.7,0],[0,1]]);a.addBehavior(new Fs(o)),e.add(a.emitter),a.emitter.position.set(0,40,0),this.batchRenderer.addSystem(a),setTimeout(()=>{a.emissionOverTime=new tt(0)},t*1e3),setTimeout(()=>{this.batchRenderer.deleteSystem(a),e.remove(a.emitter)},(t+1.5)*1e3),console.log(`[Quarks] dash trail spawned (duration: ${t}s)`)}dispose(){this.scene.remove(this.batchRenderer)}generateCircleTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.5,"rgba(255,255,255,0.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new hr(t);return s.needsUpdate=!0,s}generateSparkTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/4);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new hr(t);return s.needsUpdate=!0,s}generateRingTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");n.beginPath(),n.arc(64/2,64/2,64/2-4,0,Math.PI*2),n.lineWidth=6,n.strokeStyle="rgba(255,255,255,0.8)",n.stroke();const i=new hr(t);return i.needsUpdate=!0,i}generateStarTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=64/2,s=64/2;n.beginPath();for(let o=0;o<5;o++){const l=o*4*Math.PI/5-Math.PI/2,c=i+Math.cos(l)*(64/2-4),d=s+Math.sin(l)*(64/2-4);o===0?n.moveTo(c,d):n.lineTo(c,d)}n.closePath(),n.fillStyle="rgba(255,255,255,0.9)",n.fill();const a=new hr(t);return a.needsUpdate=!0,a}}class pE{constructor(e){this.active=!1,this.savedState="",this.collisionSystem=null,this.vfxSystem=null,this.mixers=[],this.editor=e,this.gameCamera=new jt(60,1,1,5e3),this.originalCamera=e.getCamera()}isActive(){return this.active}start(){if(this.active)return;this.active=!0,this.savedState=JSON.stringify(this.editor.getAllMeta());const e=this.editor.getScene(),t=this.editor.getObjects(),n=this.editor.getAllMeta();this.vfxSystem=new Bg(e);try{const i=localStorage.getItem("douqi_vfx_custom_presets");if(i){const s=JSON.parse(i);for(const[a,o]of s)this.vfxSystem.registerPreset(a,o)}}catch{}this.collisionSystem=new r1,this.mixers=[];for(const[i,s]of t){const a=n.find(l=>l.id===i);if(!a)continue;const o=this.editor.getObjectAnimationClips(i);if(o&&o.length>0){const l=new md(s);this.mixers.push(l);const c=a.behavior,d=c==null?void 0:c.idleSegment;if(d){const h=d.startsWith("seg:")?d.slice(4):d,f=this.editor.getObjectSegments(i).find(p=>p.name===h);if(f){const p=this.editor.getObjectFPS(i)||30,y=o.find(g=>g.name===f.clipName);if(y){const g=lg.subclip(y,h,f.startFrame,f.endFrame,p);l.clipAction(g).play()}}}else o.length>0&&l.clipAction(o[0]).play()}}}stop(){this.active&&(this.active=!1,this.mixers.forEach(e=>e.stopAllAction()),this.mixers=[],this.vfxSystem&&(this.vfxSystem.dispose(),this.vfxSystem=null),this.collisionSystem=null)}update(e){var t;this.active&&(this.mixers.forEach(n=>n.update(e)),(t=this.vfxSystem)==null||t.update(e))}}class mE{constructor(){this.currentFrame=0,this.totalFrames=120,this.fps=30,this.playbackSpeed=1,this.playing=!1,this.looping=!0,this.tracks=[],this.trackHeight=28,this.rulerHeight=20,this.pixelsPerFrame=4,this.draggingPlayhead=!1,this.draggingMarker=null,this.selectedMarker=null,this.onFrameChange=null,this.onPlayStateChange=null,this.onMarkerChanged=null,this.onMarkerSelected=null,this.onMarkerAdd=null,this.animId=null,this.lastTime=0,this.tick=t=>{var i;if(!this.playing)return;const n=(t-this.lastTime)/1e3;this.lastTime=t,this.currentFrame+=n*this.fps*this.playbackSpeed,this.currentFrame>=this.totalFrames&&(this.looping?this.currentFrame=0:(this.currentFrame=this.totalFrames,this.pause())),this.frameDisplay.textContent=String(Math.round(this.currentFrame)),(i=this.onFrameChange)==null||i.call(this,Math.round(this.currentFrame)),this.render(),this.animId=requestAnimationFrame(this.tick)},this.panel=document.getElementById("timeline-panel"),this.canvas=document.getElementById("timeline-canvas"),this.ctx=this.canvas.getContext("2d"),this.canvasWrap=document.getElementById("timeline-canvas-wrap"),this.tracksEl=document.getElementById("timeline-tracks"),this.frameDisplay=document.getElementById("tl-current-frame"),this.totalDisplay=document.getElementById("tl-total-frames"),this.playBtn=document.getElementById("tl-btn-play"),this.loopBtn=document.getElementById("tl-btn-loop"),this.setupResizer(),this.setupTransportButtons(),this.setupCanvasEvents(),this.resizeCanvas(),this.render(),new ResizeObserver(()=>this.resizeCanvas()).observe(this.canvasWrap)}setTotalFrames(e){this.totalFrames=Math.max(1,e),this.totalDisplay.textContent=String(this.totalFrames),this.render()}setFPS(e){this.fps=e}setCurrentFrame(e){this.currentFrame=Math.max(0,Math.min(e,this.totalFrames)),this.frameDisplay.textContent=String(Math.round(this.currentFrame)),this.render()}getCurrentFrame(){return Math.round(this.currentFrame)}getTotalFrames(){return this.totalFrames}isPlaying(){return this.playing}setTracks(e){var t;this.tracks=e,this.selectedMarker!==null&&(this.selectedMarker=null,(t=this.onMarkerSelected)==null||t.call(this,null)),this.updateTrackLabels(),this.render()}addMarker(e,t){var n;e<0||e>=this.tracks.length||(this.tracks[e].markers||(this.tracks[e].markers=[]),this.tracks[e].markers.push(t),(n=this.onMarkerChanged)==null||n.call(this,e,this.tracks[e].markers),this.render())}removeMarker(e,t){var i,s;const n=this.tracks[e];n!=null&&n.markers&&(n.markers.splice(t,1),this.selectedMarker=null,(i=this.onMarkerChanged)==null||i.call(this,e,n.markers),(s=this.onMarkerSelected)==null||s.call(this,null),this.render())}updateMarkerFrame(e,t,n){var s,a;const i=this.tracks[e];(s=i==null?void 0:i.markers)!=null&&s[t]&&(i.markers[t].frame=Math.max(0,Math.min(this.totalFrames,n)),(a=this.onMarkerChanged)==null||a.call(this,e,i.markers),this.render())}getMarkers(e){var t;return((t=this.tracks[e])==null?void 0:t.markers)||[]}getSelectedMarker(){var t;if(!this.selectedMarker)return null;const e=this.tracks[this.selectedMarker.trackIdx];return((t=e==null?void 0:e.markers)==null?void 0:t[this.selectedMarker.markerIdx])||null}play(){var e;this.playing||(this.playing=!0,this.playBtn.textContent="⏸",this.lastTime=performance.now(),this.animId=requestAnimationFrame(this.tick),(e=this.onPlayStateChange)==null||e.call(this,!0))}pause(){var e;this.playing&&(this.playing=!1,this.playBtn.textContent="▶",this.animId&&cancelAnimationFrame(this.animId),this.animId=null,(e=this.onPlayStateChange)==null||e.call(this,!1))}stop(){var e;this.pause(),this.setCurrentFrame(0),(e=this.onFrameChange)==null||e.call(this,0)}setupResizer(){const e=document.getElementById("timeline-resizer");let t=0,n=0;const i=a=>{const o=t-a.clientY,l=Math.max(80,Math.min(window.innerHeight*.5,n+o));this.panel.style.height=l+"px",window.dispatchEvent(new Event("resize"))},s=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",s),document.body.style.cursor="",document.body.style.userSelect=""};e.addEventListener("mousedown",a=>{t=a.clientY,n=this.panel.offsetHeight,document.body.style.cursor="row-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",i),document.addEventListener("mouseup",s)})}setupTransportButtons(){document.getElementById("tl-btn-start").addEventListener("click",()=>{var e;this.setCurrentFrame(0),(e=this.onFrameChange)==null||e.call(this,0)}),document.getElementById("tl-btn-prev").addEventListener("click",()=>{var e;this.setCurrentFrame(Math.max(0,this.getCurrentFrame()-1)),(e=this.onFrameChange)==null||e.call(this,this.getCurrentFrame())}),this.playBtn.addEventListener("click",()=>{this.playing?this.pause():this.play()}),document.getElementById("tl-btn-next").addEventListener("click",()=>{var e;this.setCurrentFrame(Math.min(this.totalFrames,this.getCurrentFrame()+1)),(e=this.onFrameChange)==null||e.call(this,this.getCurrentFrame())}),document.getElementById("tl-btn-end").addEventListener("click",()=>{var e;this.setCurrentFrame(this.totalFrames),(e=this.onFrameChange)==null||e.call(this,this.getCurrentFrame())}),this.loopBtn.addEventListener("click",()=>{this.looping=!this.looping,this.loopBtn.classList.toggle("active",this.looping)}),this.loopBtn.classList.add("active")}setupCanvasEvents(){this.canvas.addEventListener("mousedown",e=>{var o,l;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,s=this.hitTestMarker(n,i);if(s){const c=this.tracks[s.trackIdx],d=c.markers[s.markerIdx].frame,h=c.markers.map((u,f)=>({marker:u,idx:f})).filter(({marker:u})=>Math.abs(u.frame-d)<1);if(h.length>1){this.showMarkerPopup(e,s.trackIdx,h);return}this.selectedMarker=s,this.draggingMarker=s,(o=this.onMarkerSelected)==null||o.call(this,this.tracks[s.trackIdx].markers[s.markerIdx]),this.render();return}const a=this.xToFrame(n);this.setCurrentFrame(a),(l=this.onFrameChange)==null||l.call(this,this.getCurrentFrame()),this.draggingPlayhead=!0}),this.canvas.addEventListener("dblclick",e=>{var a;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,s=this.yToTrackIndex(i);if(s>=0&&s<this.tracks.length&&(this.tracks[s].type==="vfx"||this.tracks[s].type==="combat")){const o=this.xToFrame(n);(a=this.onMarkerAdd)==null||a.call(this,s,o)}}),this.canvas.addEventListener("contextmenu",e=>{e.preventDefault();const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,s=this.hitTestMarker(n,i);s&&(this.selectedMarker&&this.selectedMarker.trackIdx===s.trackIdx?this.removeMarker(this.selectedMarker.trackIdx,this.selectedMarker.markerIdx):this.removeMarker(s.trackIdx,s.markerIdx))}),this.canvas.addEventListener("mousemove",e=>{var i;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left;if(this.draggingMarker){const s=this.xToFrame(n);this.updateMarkerFrame(this.draggingMarker.trackIdx,this.draggingMarker.markerIdx,s);return}if(this.draggingPlayhead){const s=this.xToFrame(n);this.setCurrentFrame(s),(i=this.onFrameChange)==null||i.call(this,this.getCurrentFrame())}}),window.addEventListener("mouseup",()=>{this.draggingPlayhead=!1,this.draggingMarker=null}),this.canvasWrap.addEventListener("wheel",e=>{if(e.preventDefault(),e.ctrlKey){const t=e.deltaY>0?.9:1.1;this.pixelsPerFrame=Math.max(1,Math.min(20,this.pixelsPerFrame*t)),this.resizeCanvas()}this.render()},{passive:!1})}resizeCanvas(){const e=this.canvasWrap.clientWidth,t=Math.max(e,this.totalFrames*this.pixelsPerFrame+40),n=this.rulerHeight+this.tracks.length*this.trackHeight+this.trackHeight;this.canvas.width=t*window.devicePixelRatio,this.canvas.height=Math.max(n,this.canvasWrap.clientHeight)*window.devicePixelRatio,this.canvas.style.width=t+"px",this.canvas.style.height=Math.max(n,this.canvasWrap.clientHeight)+"px",this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio),this.render()}render(){const e=this.canvas.width/window.devicePixelRatio,t=this.canvas.height/window.devicePixelRatio,n=this.ctx;n.clearRect(0,0,e,t),n.fillStyle="#11111b",n.fillRect(0,0,e,t),this.drawRuler(n,e),this.drawTracks(n,e),this.drawPlayhead(n,t)}drawRuler(e,t){e.fillStyle="#181825",e.fillRect(0,0,t,this.rulerHeight),e.strokeStyle="#313244",e.lineWidth=1,e.beginPath(),e.moveTo(0,this.rulerHeight),e.lineTo(t,this.rulerHeight),e.stroke(),e.fillStyle="#6c7086",e.font="9px monospace",e.textAlign="center";const i=this.getTickStep();for(let a=0;a<=this.totalFrames;a+=i){const o=this.frameToX(a);o<-10||o>t+10||(e.strokeStyle="#45475a",e.beginPath(),e.moveTo(o,this.rulerHeight-6),e.lineTo(o,this.rulerHeight),e.stroke(),e.fillText(String(a),o,this.rulerHeight-8))}const s=Math.max(1,Math.floor(i/5));e.strokeStyle="#313244";for(let a=0;a<=this.totalFrames;a+=s){const o=this.frameToX(a);o<0||o>t||(e.beginPath(),e.moveTo(o,this.rulerHeight-3),e.lineTo(o,this.rulerHeight),e.stroke())}}drawTracks(e,t){var i,s;const n=this.rulerHeight;for(let a=0;a<this.tracks.length;a++){const o=this.tracks[a],l=n+a*this.trackHeight;e.fillStyle=a%2===0?"#1e1e2e":"#181825",e.fillRect(0,l,t,this.trackHeight),e.strokeStyle="#1e1e2e",e.beginPath(),e.moveTo(0,l+this.trackHeight),e.lineTo(t,l+this.trackHeight),e.stroke();for(const c of o.clips){const d=this.frameToX(c.startFrame),h=this.frameToX(c.endFrame),u=Math.max(4,h-d);e.fillStyle=c.color,e.globalAlpha=.7,e.fillRect(d,l+3,u,this.trackHeight-6),e.globalAlpha=1,e.strokeStyle=c.color,e.strokeRect(d,l+3,u,this.trackHeight-6),u>30&&(e.fillStyle="#ffffff",e.font="9px sans-serif",e.textAlign="left",e.fillText(c.name,d+4,l+this.trackHeight/2+3,u-8))}if(o.markers){const c=new Map;for(const h of o.markers)c.set(h.frame,(c.get(h.frame)||0)+1);const d=new Set;for(let h=0;h<o.markers.length;h++){const u=o.markers[h],f=this.frameToX(u.frame),p=l+this.trackHeight/2,y=((i=this.selectedMarker)==null?void 0:i.trackIdx)===a&&((s=this.selectedMarker)==null?void 0:s.markerIdx)===h;this.drawDiamond(e,f,p,y?8:6,u.color,y);const g=c.get(u.frame)||1;g>1&&!d.has(u.frame)&&(d.add(u.frame),e.fillStyle="#e64553",e.beginPath(),e.arc(f+7,p-7,6,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 8px sans-serif",e.textAlign="center",e.fillText(String(g),f+7,p-4)),this.pixelsPerFrame>2&&(e.fillStyle="#cdd6f4",e.font="8px sans-serif",e.textAlign="left",e.fillText(u.label,f+8,p+3))}}}}drawDiamond(e,t,n,i,s,a){e.save(),e.beginPath(),e.moveTo(t,n-i),e.lineTo(t+i,n),e.lineTo(t,n+i),e.lineTo(t-i,n),e.closePath(),e.fillStyle=s,e.fill(),a?(e.strokeStyle="#ffffff",e.lineWidth=2,e.stroke()):(e.strokeStyle="#000000",e.lineWidth=1,e.stroke()),e.restore()}drawPlayhead(e,t){const n=this.frameToX(this.currentFrame);e.strokeStyle="#89b4fa",e.lineWidth=2,e.beginPath(),e.moveTo(n,0),e.lineTo(n,t),e.stroke(),e.lineWidth=1,e.fillStyle="#89b4fa",e.beginPath(),e.moveTo(n-5,0),e.lineTo(n+5,0),e.lineTo(n,8),e.closePath(),e.fill()}frameToX(e){return e*this.pixelsPerFrame}xToFrame(e){return Math.max(0,Math.min(this.totalFrames,Math.round(e/this.pixelsPerFrame)))}getTickStep(){const t=50/this.pixelsPerFrame,n=[1,5,10,15,30,60,100,150,300];for(const i of n)if(i>=t)return i;return Math.ceil(t/100)*100}updateTrackLabels(){this.tracksEl.innerHTML="";for(const e of this.tracks){const t=document.createElement("div");t.className="tl-track-label";const n=e.type==="animation"?"🎬":e.type==="combat"?"⚔️":e.type==="vfx"?"💥":"🔊";t.textContent=`${n} ${e.name}`,this.tracksEl.appendChild(t)}if(this.tracks.length===0)for(const e of["🎬 Animation","💥 VFX","🔊 Audio"]){const t=document.createElement("div");t.className="tl-track-label",t.textContent=e,this.tracksEl.appendChild(t)}}hitTestMarker(e,t){const n=this.rulerHeight;for(let i=0;i<this.tracks.length;i++){const s=this.tracks[i];if(!s.markers)continue;const o=n+i*this.trackHeight+this.trackHeight/2;for(let l=0;l<s.markers.length;l++){const c=s.markers[l],d=this.frameToX(c.frame);if(Math.abs(e-d)<10&&Math.abs(t-o)<10)return{trackIdx:i,markerIdx:l}}}return null}showMarkerPopup(e,t,n){this.hideMarkerPopup();const i=document.createElement("div");i.id="tl-marker-popup",i.style.cssText=`
      position: absolute; z-index: 9999;
      left: ${e.clientX+4}px; top: ${e.clientY-4}px;
      background: #1e1e2e; border: 1px solid #313244; border-radius: 6px;
      padding: 4px 0; min-width: 140px; box-shadow: 0 4px 12px rgba(0,0,0,.4);
      font-family: inherit; font-size: 12px;
    `;for(const{marker:a,idx:o}of n){const l=document.createElement("div");l.style.cssText=`
        padding: 6px 12px; cursor: pointer; color: #cdd6f4;
        display: flex; align-items: center; gap: 6px;
      `,l.innerHTML=`<span style="color:${a.color};">◆</span> ${a.label||a.presetId}`,l.addEventListener("mouseenter",()=>{l.style.background="#313244"}),l.addEventListener("mouseleave",()=>{l.style.background="none"}),l.addEventListener("click",()=>{var c;this.selectedMarker={trackIdx:t,markerIdx:o},(c=this.onMarkerSelected)==null||c.call(this,a),this.render(),this.hideMarkerPopup()}),i.appendChild(l)}document.body.appendChild(i);const s=a=>{if(a instanceof KeyboardEvent){a.key==="Escape"&&(this.hideMarkerPopup(),document.removeEventListener("mousedown",s),document.removeEventListener("keydown",s));return}a instanceof MouseEvent&&i.contains(a.target)||(this.hideMarkerPopup(),document.removeEventListener("mousedown",s),document.removeEventListener("keydown",s))};setTimeout(()=>{document.addEventListener("mousedown",s),document.addEventListener("keydown",s)},10)}hideMarkerPopup(){const e=document.getElementById("tl-marker-popup");e&&e.remove()}yToTrackIndex(e){const t=this.rulerHeight;return e<t?-1:Math.floor((e-t)/this.trackHeight)}}class gE{constructor(e,t){this.parentObject=null,this.active=!1,this.onChange=null,this.changeHandler=()=>{var f;if(!this.active||!this.parentObject)return;const o=this.parentObject.matrixWorld.clone().invert(),l=this.helper.position.clone().applyMatrix4(o),c=new rt().setFromRotationMatrix(this.parentObject.matrixWorld),d=this.helper.quaternion.clone(),h=c.clone().invert().multiply(d),u=new Vt().setFromQuaternion(h);(f=this.onChange)==null||f.call(this,[l.x,l.y,l.z],[He.radToDeg(u.x),He.radToDeg(u.y),He.radToDeg(u.z)])},this.scene=e,this.transformControls=t,this.helper=new an,this.helper.visible=!1,this.scene.add(this.helper);const n=new ho(3,12,12),i=new on({color:65535,transparent:!0,opacity:.85,depthTest:!1});this.helperSphere=new ae(n,i),this.helperSphere.renderOrder=999,this.helper.add(this.helperSphere);const s=new on({color:16776960,depthTest:!1}),a=new co(1.5,8,8);this.helperArrow=new ae(a,s),this.helperArrow.position.set(0,0,10),this.helperArrow.rotation.x=Math.PI/2,this.helperArrow.renderOrder=999,this.helper.add(this.helperArrow)}show(e,t,n){this.parentObject=e,this.active=!0,this.helper.visible=!0;const s=new C(t[0],t[1],t[2]).applyMatrix4(e.matrixWorld);this.helper.position.copy(s);const a=new rt().setFromRotationMatrix(e.matrixWorld);if(n){const o=new Vt(He.degToRad(n[0]),He.degToRad(n[1]),He.degToRad(n[2])),l=new rt().setFromEuler(o);this.helper.quaternion.copy(a.multiply(l))}else this.helper.quaternion.copy(a);this.transformControls.attach(this.helper),this.transformControls.addEventListener("objectChange",this.changeHandler)}hide(){this.active&&(this.active=!1,this.helper.visible=!1,this.transformControls.removeEventListener("objectChange",this.changeHandler),this.transformControls.detach(),this.parentObject=null)}isVisible(){return this.active}setMode(e){this.transformControls.setMode(e),this.transformControls.getMode()==="scale"&&this.transformControls.setMode("translate")}getMode(){return this.transformControls.getMode()}isActive(){return this.active}update(){}dispose(){this.hide(),this.scene.remove(this.helper),this.helper.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}const yE={zombie_small:4906624,zombie_big:16486972,zombie_bomb:16281969,zombie_bouncing:16498468,zombie_golden:16569165,zombie_black:10980346,zombie_boss:14427686},_m=9741240,xm=2282478,_E=16777215;class xE{constructor(e){this.markers=new Map,this.scene=e}update(e,t,n,i={}){this.remove(e),!(!n||n==="none"||!t)&&(n==="spawnPoint"&&!i.hasModel?this.createSpawnMarker(e,t,i.zombieType):n==="itemZone"?this.createItemZoneMarker(e,t,i.itemRadius??50):n==="boundary"&&this.createBoundaryMarker(e,t,i.boundaryRadius??300))}remove(e){var n;const t=this.markers.get(e);t&&((n=t.parent)==null||n.remove(t),t.traverse(i=>{if(i.geometry&&i.geometry.dispose(),i.material){const s=i.material;Array.isArray(s)?s.forEach(a=>a.dispose()):s.dispose()}}),this.markers.delete(e))}clear(){for(const e of this.markers.keys())this.remove(e)}createSpawnMarker(e,t,n){const i=n?yE[n]??_m:_m,s=new an;s.userData.isMarker=!0,s.userData.__editorHelper=!0,s.userData.__noPick=!0;const a=new zt(18,18,3,24),o=new on({color:i,transparent:!0,opacity:.7}),l=new ae(a,o);s.add(l);const c=new co(6,16,8),d=new on({color:16777215,transparent:!0,opacity:.9}),h=new ae(c,d);h.rotation.x=-Math.PI/2,h.position.z=14,h.position.y=3,s.add(h),t.add(s),this.markers.set(e,s)}createItemZoneMarker(e,t,n){const i=new an;i.userData.isMarker=!0,i.userData.__editorHelper=!0,i.userData.__noPick=!0;const s=new zt(n,n,5,32),a=new on({color:xm,transparent:!0,opacity:.2}),o=new ae(s,a);i.add(o);const l=new zt(n,n,5,32),c=new on({color:xm,transparent:!0,opacity:.6,wireframe:!0}),d=new ae(l,c);i.add(d),t.add(i),this.markers.set(e,i)}createBoundaryMarker(e,t,n){const i=new an;i.userData.isMarker=!0,i.userData.__editorHelper=!0,i.userData.__noPick=!0;const s=[],a=64;for(let d=0;d<=a;d++){const h=d/a*Math.PI*2;s.push(new C(Math.cos(h)*n,0,Math.sin(h)*n))}const o=new Ke().setFromPoints(s),l=new _l({color:_E,transparent:!0,opacity:.5,dashSize:10,gapSize:5}),c=new Ft(o,l);c.computeLineDistances(),i.add(c),t.add(i),this.markers.set(e,i)}}function go(r){const e=document.getElementById("editor-overlay"),t=document.getElementById("overlay-text");e&&t&&(t.textContent=r,e.classList.remove("hidden"))}function kn(){const r=document.getElementById("editor-overlay");r&&r.classList.add("hidden")}const vE=document.getElementById("viewport"),L=new t1(vE);window.editor=L;const Nl=new pE(L),Ue=new mE,ni=new Bg(L.getScene()),ME=new xE(L.getScene()),Fn=new gE(L.getScene(),L.getTransformControls());L.loadAssetLibraryFromStorage().then(()=>{Br()}).catch(()=>{});L.loadPrefabsFromStorage().then(()=>{Oi()}).catch(()=>{});const zg=document.getElementById("undo-btn"),kg=document.getElementById("redo-btn");function cu(){zg.classList.toggle("disabled",!L.canUndo()),kg.classList.toggle("disabled",!L.canRedo())}zg.addEventListener("click",()=>{L.undo(),ei()});kg.addEventListener("click",()=>{L.redo(),ei()});document.getElementById("new-scene-btn").addEventListener("click",()=>{if(!confirm("確定要建立新場景嗎？未儲存的變更將遺失。"))return;L.newScene(),document.getElementById("scene-name").value="";const r=document.getElementById("ed-ambient"),e=document.getElementById("ed-sun");r.value="1.5",e.value="2.0",document.getElementById("ed-ambient-val").textContent="1.50",document.getElementById("ed-sun-val").textContent="2.00",ei()});L.onHistoryChange=()=>{cu()};L.onDeleteKey=()=>{var n,i,s;const r=Ue.selectedMarker;if(!r)return!1;const e=(n=Ue.tracks)==null?void 0:n[r.trackIdx],t=((s=(i=e==null?void 0:e.markers)==null?void 0:i[r.markerIdx])==null?void 0:s.label)||"marker";return confirm(`確定要刪除 marker「${t}」嗎？`)&&((e==null?void 0:e.type)==="combat"?(Ue.removeMarker(r.trackIdx,r.markerIdx),_r.classList.add("hidden"),ts=-1,sc(Ue.getMarkers(1))):(Ue.removeMarker(r.trackIdx,r.markerIdx),Fn.hide(),da.classList.add("hidden"))),!0};function ei(){Os(),Nr(),cu()}const vm=document.getElementById("object-list"),oh=document.getElementById("add-model-input");function Os(){vm.innerHTML="",L.getAllMeta().forEach(e=>{const t=document.createElement("li");t.dataset.id=e.id,t.textContent=e.name,e.id===L.getSelectedId()&&t.classList.add("active"),t.addEventListener("click",()=>L.select(e.id)),vm.appendChild(t)})}oh.addEventListener("change",async()=>{var e;const r=(e=oh.files)==null?void 0:e[0];if(r){try{await L.addFBXFromFile(r),Os(),Br()}catch(t){console.error("FBX 載入失敗:",t),alert(`FBX 載入失敗: ${t.message||t}`)}oh.value=""}});L.onSelect=r=>{ei(),r&&L.isCameraObject(r)?GE():hf()};L.onTransformChange=()=>{Nr()};const Mm=document.getElementById("inspector"),hu=document.getElementById("insp-name"),du=document.getElementById("pos-x"),uu=document.getElementById("pos-y"),fu=document.getElementById("pos-z"),pu=document.getElementById("rot-x"),mu=document.getElementById("rot-y"),gu=document.getElementById("rot-z"),yu=document.getElementById("scl-x"),_u=document.getElementById("scl-y"),xu=document.getElementById("scl-z");function Nr(){const r=L.getSelectedId();if(!r){Mm.classList.add("hidden");return}Mm.classList.remove("hidden");const e=L.getMeta(r);e&&(hu.value=e.name,du.value=e.position[0].toFixed(2),uu.value=e.position[1].toFixed(2),fu.value=e.position[2].toFixed(2),pu.value=e.rotation[0].toFixed(1),mu.value=e.rotation[1].toFixed(1),gu.value=e.rotation[2].toFixed(1),yu.value=e.scale[0].toFixed(3),_u.value=e.scale[1].toFixed(3),xu.value=e.scale[2].toFixed(3),qg(r),Wg(),yo(),ju(),WE(),window.__refreshSTPanel&&window.__refreshSTPanel())}function bE(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);e&&(e.name=hu.value,L.setObjectTransform(r,[parseFloat(du.value)||0,parseFloat(uu.value)||0,parseFloat(fu.value)||0],[parseFloat(pu.value)||0,parseFloat(mu.value)||0,parseFloat(gu.value)||0],[parseFloat(yu.value)||1,parseFloat(_u.value)||1,parseFloat(xu.value)||1]),Os())}[hu,du,uu,fu,pu,mu,gu,yu,_u,xu].forEach(r=>{r.addEventListener("change",bE)});document.getElementById("mode-translate").addEventListener("click",()=>L.setTransformMode("translate"));document.getElementById("mode-rotate").addEventListener("click",()=>L.setTransformMode("rotate"));document.getElementById("mode-scale").addEventListener("click",()=>L.setTransformMode("scale"));L.getTransformControls().addEventListener("change",()=>{Fn.isActive()&&L.getTransformControls().getMode()==="scale"&&L.getTransformControls().setMode("translate")});document.getElementById("delete-btn").addEventListener("click",()=>{const r=L.getSelectedId();r&&(L.removeObject(r),Os(),Nr())});document.getElementById("duplicate-btn").addEventListener("click",async()=>{L.getSelectedId()&&(L.copy(),await L.paste(),ei())});const Ki=document.getElementById("collider-type"),Jl=document.getElementById("collider-static"),$l=document.getElementById("collider-trigger"),Vg=document.getElementById("collider-size-panel"),Hg=document.getElementById("collider-sphere-panel"),Gg=document.getElementById("collider-capsule-panel"),vu=document.getElementById("col-size-x"),Mu=document.getElementById("col-size-y"),bu=document.getElementById("col-size-z"),Su=document.getElementById("col-radius"),wu=document.getElementById("col-cap-radius"),Eu=document.getElementById("col-cap-height"),Tu=document.getElementById("col-offset-x"),Au=document.getElementById("col-offset-y"),Cu=document.getElementById("col-offset-z");function Wg(){var f,p,y,g,m,x;const r=L.getSelectedId();if(!r)return;const e=L.getCollider(r),t=L.getObjectBounds(r),n=L.getObjects().get(r),i=n?(Math.abs(n.scale.x)+Math.abs(n.scale.z))/2:1,s=document.getElementById("collider-enabled");if(s){const _=e&&e.type!=="none";s.checked=!!_,(f=document.getElementById("collider-panel-wrap"))==null||f.classList.toggle("disabled",!_),_&&((p=document.getElementById("collider-body"))==null||p.classList.add("open"),(y=document.getElementById("collider-arrow"))==null||y.classList.add("open"))}Ki.value=(e==null?void 0:e.type)||"none",Jl.checked=(e==null?void 0:e.isStatic)??!0,$l.checked=(e==null?void 0:e.isTrigger)??!1,Vg.classList.toggle("hidden",Ki.value!=="box"),Hg.classList.toggle("hidden",Ki.value!=="sphere"),Gg.classList.toggle("hidden",Ki.value!=="capsule");const a=(((g=e==null?void 0:e.sizeOverride)==null?void 0:g[0])??t.x/2)*i,o=(((m=e==null?void 0:e.sizeOverride)==null?void 0:m[1])??t.y/2)*i,l=(((x=e==null?void 0:e.sizeOverride)==null?void 0:x[2])??t.z/2)*i;vu.value=a.toFixed(1),Mu.value=o.toFixed(1),bu.value=l.toFixed(1);const c=((e==null?void 0:e.radiusOverride)??Math.max(t.x,t.y,t.z)/2)*i;Su.value=c.toFixed(1);const d=((e==null?void 0:e.radiusOverride)??Math.max(t.x,t.z)/2)*i,h=((e==null?void 0:e.heightOverride)??t.y)*i;wu.value=d.toFixed(1),Eu.value=h.toFixed(1);const u=(e==null?void 0:e.offset)||[0,0,0];Tu.value=u[0].toFixed(1),Au.value=u[1].toFixed(1),Cu.value=u[2].toFixed(1)}function Hn(){const r=L.getSelectedId();if(!r)return;const e=Ki.value,t=L.getObjects().get(r),n=t?(Math.abs(t.scale.x)+Math.abs(t.scale.z))/2:1,i={type:e,isStatic:Jl.checked,isTrigger:$l.checked};e==="box"?i.sizeOverride=[(parseFloat(vu.value)||1)/n,(parseFloat(Mu.value)||1)/n,(parseFloat(bu.value)||1)/n]:e==="sphere"?i.radiusOverride=(parseFloat(Su.value)||1)/n:e==="capsule"&&(i.radiusOverride=(parseFloat(wu.value)||1)/n,i.heightOverride=(parseFloat(Eu.value)||2)/n);const s=parseFloat(Tu.value)||0,a=parseFloat(Au.value)||0,o=parseFloat(Cu.value)||0;(s!==0||a!==0||o!==0)&&(i.offset=[s,a,o]),L.setCollider(r,i)}function SE(){Hn();const r=Ki.value;Vg.classList.toggle("hidden",r!=="box"),Hg.classList.toggle("hidden",r!=="sphere"),Gg.classList.toggle("hidden",r!=="capsule")}Ki.addEventListener("change",SE);Jl.addEventListener("change",Hn);$l.addEventListener("change",Hn);vu.addEventListener("input",Hn);Mu.addEventListener("input",Hn);bu.addEventListener("input",Hn);Su.addEventListener("input",Hn);wu.addEventListener("input",Hn);Eu.addEventListener("input",Hn);Tu.addEventListener("input",Hn);Au.addEventListener("input",Hn);Cu.addEventListener("input",Hn);document.getElementById("col-auto-fit").addEventListener("click",()=>{const r=L.getSelectedId();if(!r)return;const e=L.getObjectBounds(r),t=Ki.value,n={type:t,isStatic:Jl.checked,isTrigger:$l.checked};t==="box"?n.sizeOverride=[e.x/2,e.y/2,e.z/2]:t==="sphere"?n.radiusOverride=Math.max(e.x,e.y,e.z)/2:t==="capsule"&&(n.radiusOverride=Math.max(e.x,e.z)/2,n.heightOverride=e.y),L.setCollider(r,n),Wg()});document.getElementById("col-toggle-vis").addEventListener("click",()=>{const r=!L.isColliderVisible();L.setColliderVisibility(r),document.getElementById("col-toggle-vis").textContent=r?"👁 顯示/隱藏":"👁‍🗨 已隱藏"});const bm=document.getElementById("anim-panel"),wE=document.getElementById("anim-no-data"),EE=document.getElementById("anim-content"),Sm=document.getElementById("anim-clip-list"),lh=document.getElementById("seg-list"),to=document.getElementById("seg-clip-src"),wm=document.getElementById("seg-name-input"),TE=document.getElementById("seg-start-input"),Pu=document.getElementById("seg-end-input");function yo(){const r=L.getSelectedId();if(!r){bm.classList.add("hidden");return}bm.classList.remove("hidden");const e=L.hasAnimations(r);if(wE.classList.toggle("hidden",e),EE.classList.toggle("hidden",!e),!e)return;const t=L.getAnimationClips(r);Sm.innerHTML="",t.forEach(i=>{const s=L.getAnimationFrameCount(r,i),a=document.createElement("li");a.style.cssText="padding:3px 6px;cursor:pointer;border-radius:3px;font-size:11px;display:flex;justify-content:space-between",a.innerHTML=`<span>${i}</span><span style="font-size:9px;color:#6c7086">${s}f</span>`,a.addEventListener("click",()=>{var d;const o=L.getObjectFPS(r)||30;Pd=i,it=null,Pi=null,document.getElementById("tl-speed-control").style.display="none",Ue.playbackSpeed=1,Ue.setTotalFrames(s),Ue.setFPS(o),Ue.setCurrentFrame(0),Ue.setTracks([{type:"animation",name:i,clips:[{startFrame:0,endFrame:s,name:i,color:"#89b4fa"}]},{type:"vfx",name:"VFX",clips:[]},{type:"audio",name:"Audio",clips:[]}]);const l=L.getMixer(r),c=(d=L.getObjectAnimationClips(r))==null?void 0:d.find(h=>h.name===i);if(l&&c){l.stopAllAction();const h=l.clipAction(c);h.reset(),h.paused=!0,h.enabled=!0,h.setEffectiveWeight(1),h.play(),h.time=0,l.update(0),Pi=h}}),a.addEventListener("mouseenter",()=>a.style.background="#313244"),a.addEventListener("mouseleave",()=>a.style.background=""),Sm.appendChild(a)}),to.innerHTML="",t.forEach(i=>{const s=document.createElement("option");s.value=i,s.textContent=i,to.appendChild(s)}),t.length>0&&(Pu.value=String(L.getAnimationFrameCount(r,t[0])));const n=L.getObjectSegments(r);lh.innerHTML="",n.forEach((i,s)=>{const a=document.createElement("li");a.style.cssText="padding:3px 6px;cursor:pointer;border-radius:3px;font-size:11px;display:flex;align-items:center;border-left:2px solid #a6e3a1;margin-left:4px",a.innerHTML=`<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="來源: ${i.clipName}">▸ ${i.name} [${i.startFrame}-${i.endFrame}]${i.speed&&i.speed!==1?` ×${i.speed}`:""} <span style="font-size:8px;color:#6c7086">← ${i.clipName}</span></span><button style="width:16px;height:16px;padding:0;border:none;background:none;color:#f38ba8;font-size:10px;cursor:pointer;flex-shrink:0;margin-left:4px" data-idx="${s}">✕</button>`,a.addEventListener("click",o=>{var m;if(o.target.tagName==="BUTTON")return;lh.querySelectorAll("li").forEach(x=>x.style.background=""),a.style.background="#313244";const c=i.endFrame-i.startFrame,d=L.getObjectFPS(r)||30;Pd=null,it={name:i.name,clipName:i.clipName,startFrame:i.startFrame,endFrame:i.endFrame},Pi=null;const h=document.getElementById("tl-speed-control"),u=document.getElementById("tl-seg-speed");h.style.display="inline-flex",u.value=String(i.speed??1),u.__segIdx=s,Ue.playbackSpeed=i.speed??1;const f=(i.vfxEvents||[]).map(x=>({frame:x.frame,presetId:x.presetId,label:x.presetId.replace(/_/g," "),color:"#ff8800",offset:x.offset,rotation:x.rotation,scale:x.scale??1,followParent:x.followParent})),p=(i.combatEvents||[]).map(x=>({frame:x.frame,presetId:"combat",label:x.label||`Hit@${x.frame}`,color:"#e64553"}));Ue.setTotalFrames(c),Ue.setFPS(d),Ue.setCurrentFrame(0),Ue.setTracks([{type:"animation",name:i.name,clips:[{startFrame:0,endFrame:c,name:i.name,color:"#a6e3a1"}]},{type:"combat",name:"Combat",clips:[],markers:p},{type:"vfx",name:"VFX",clips:[],markers:f},{type:"audio",name:"Audio",clips:[]}]);const y=L.getMixer(r),g=(m=L.getObjectAnimationClips(r))==null?void 0:m.find(x=>x.name===i.clipName);if(y&&g){y.stopAllAction();const x=y.clipAction(g);x.reset(),x.paused=!0,x.enabled=!0,x.setEffectiveWeight(1),x.timeScale=i.speed??1,x.play(),x.time=i.startFrame/d,y.update(0),Pi=x}}),a.querySelector("button").addEventListener("click",()=>{L.removeSegment(r,s),yo()}),lh.appendChild(a)})}to.addEventListener("change",()=>{const r=L.getSelectedId();r&&(Pu.value=String(L.getAnimationFrameCount(r,to.value)))});document.getElementById("seg-add-btn").addEventListener("click",()=>{const r=L.getSelectedId();if(!r)return;const e=wm.value.trim(),t=to.value,n=parseInt(TE.value),i=parseInt(Pu.value);if(!e||!t){alert("請填寫名稱與選擇動作來源");return}if(n>=i){alert("起始幀必須小於結尾幀");return}L.addSegment(r,{name:e,clipName:t,startFrame:n,endFrame:i}),wm.value="",yo(),ju()});document.getElementById("tl-seg-speed").addEventListener("change",()=>{const r=L.getSelectedId();if(!r)return;const e=document.getElementById("tl-seg-speed"),t=e.__segIdx;if(t===void 0)return;const n=L.getObjectSegments(r);if(t>=0&&t<n.length){const i=parseFloat(e.value)||1;n[t].speed=i!==1?i:void 0,Ue.playbackSpeed=i,Pi&&(Pi.timeScale=i),yo()}});const ch=document.getElementById("extra-anim-input");ch.addEventListener("change",async()=>{var t;const r=L.getSelectedId(),e=(t=ch.files)==null?void 0:t[0];!r||!e||(await L.loadExtraAnimation(r,e),ch.value="",yo(),ju())});const Ru=document.getElementById("behavior-walk"),Iu=document.getElementById("behavior-idle"),Lu=document.getElementById("behavior-speed"),Fu=document.getElementById("behavior-walk-enabled"),Du=document.getElementById("behavior-idle-enabled"),Ou=document.getElementById("behavior-is-player"),Uu=document.getElementById("combat-hp"),Nu=document.getElementById("combat-attack-seg"),Bu=document.getElementById("combat-hit-seg"),zu=document.getElementById("combat-death-seg"),ku=document.getElementById("combat-aggressive"),Vu=document.getElementById("combat-aggro-range"),Hu=document.getElementById("combat-team"),Gu=document.getElementById("combat-target-0"),Wu=document.getElementById("combat-target-1"),Xu=document.getElementById("combat-target-2"),Bl=document.getElementById("multi-attack-list"),AE=document.getElementById("multi-attack-add"),Kl=document.getElementById("combat-attack-strategy");function di(r){return r===" "?"Space":r==="shift"?"Shift":r==="control"?"Ctrl":r==="alt"?"Alt":r.startsWith("arrow")?r.replace("arrow","↑↓←→".charAt(["up","down","left","right"].indexOf(r.slice(5)))||r.slice(5)):r.toUpperCase()}function Xg(r){const e=new Set,t=Bl.children;for(let i=0;i<t.length;i++){if(i===r)continue;const s=t[i].querySelector('[data-field="key"]');s!=null&&s.dataset.keyValue&&e.add(s.dataset.keyValue)}const n=document.getElementById("dash-key-input");return n!=null&&n.dataset.keyValue&&e.add(n.dataset.keyValue),e}function CE(r,e){const t=document.createElement("input");return t.type="text",t.readOnly=!0,t.value=di(r),t.dataset.keyValue=r,t.dataset.field="key",t.style.cssText="width:44px; font-size:10px; text-align:center; cursor:pointer; background:#2a2a4a; border:1px solid #555; border-radius:3px; color:#fff;",t.title="點擊後按鍵綁定",t.addEventListener("focus",()=>{t.value="⌨ ...",t.style.borderColor="#7fe7dd"}),t.addEventListener("keydown",n=>{n.preventDefault(),n.stopPropagation();const i=n.key.toLowerCase();if(Xg(e).has(i)){t.style.borderColor="#f44",t.value=`⚠ ${di(i)} 已用`,setTimeout(()=>{t.value=di(t.dataset.keyValue||""),t.style.borderColor="#555",t.blur()},1e3);return}t.dataset.keyValue=i,t.value=di(i),t.style.borderColor="#555",t.blur(),la()}),t.addEventListener("blur",()=>{t.value==="⌨ ..."&&(t.value=di(t.dataset.keyValue||"")),t.style.borderColor="#555"}),t}function jg(r,e){if(Bl.innerHTML="",!r||r.length===0)return;const t=e||[];for(let n=0;n<r.length;n++){const i=r[n],s=document.createElement("div");s.style.cssText="display:flex; align-items:center; gap:3px; margin-bottom:2px; font-size:10px;";const a=document.createElement("span");a.style.cssText="color:#aaa; width:14px;",a.textContent=String(n+1),s.appendChild(a);const o=CE(i.key,n);s.appendChild(o);const l=document.createElement("select");l.dataset.field="segment",l.style.cssText="flex:1; font-size:10px;",l.innerHTML=`<option value="">（未指定）</option>${t.filter(h=>h.value).map(h=>`<option value="${h.value}" ${h.value===i.segment?"selected":""}>${h.label}</option>`).join("")}`,l.addEventListener("change",()=>la()),s.appendChild(l);const c=document.createElement("input");c.type="number",c.dataset.field="cooldown",c.value=String(i.cooldown),c.step="0.1",c.min="0",c.style.cssText="width:36px; font-size:10px;",c.title="冷卻(秒)",c.addEventListener("change",()=>la()),s.appendChild(c);const d=document.createElement("button");d.style.cssText="font-size:9px; padding:0 3px; color:#f44; cursor:pointer; background:none; border:1px solid #f44; border-radius:2px;",d.textContent="×",d.addEventListener("click",()=>{s.remove(),la()}),s.appendChild(d),Bl.appendChild(s)}}function wd(){const r=[],e=Bl.children;for(let t=0;t<e.length;t++){const n=e[t],i=n.querySelector('[data-field="key"]'),s=(i==null?void 0:i.dataset.keyValue)||"j",a=n.querySelector('[data-field="segment"]').value,o=parseFloat(n.querySelector('[data-field="cooldown"]').value)||1;a&&r.push({id:`atk_${t}`,key:s,segment:a,cooldown:o})}return r}function la(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);if(!(e!=null&&e.behavior))return;const t=wd();e.behavior.attacks=t.length>0?t:void 0,e.behavior.attackStrategy=Kl.value||"random"}AE.addEventListener("click",()=>{const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);if(!e)return;e.behavior||(e.behavior={});const t=e.behavior.attacks||[],n=new Set(t.map(c=>c.key)),s=["j","k","l","u","i","o"," "].find(c=>!n.has(c))||"j";t.push({id:`atk_${t.length}`,key:s,segment:"",cooldown:1}),e.behavior.attacks=t;const a=L.getObjectSegments(r),o=L.getAnimationClips(r),l=[{value:"",label:"（未指定）"}];a.forEach(c=>l.push({value:`seg:${c.name}`,label:`▸ ${c.name} [${c.startFrame}-${c.endFrame}]`})),o.forEach(c=>l.push({value:`clip:${c}`,label:`♪ ${c}`})),jg(t,l)});Kl.addEventListener("change",la);const Pr=document.getElementById("dash-enabled"),Yg=document.getElementById("dash-fields"),Lt=document.getElementById("dash-key-input"),Ql=document.getElementById("dash-distance"),ec=document.getElementById("dash-duration"),tc=document.getElementById("dash-cooldown"),no=document.getElementById("dash-segment"),nc=document.getElementById("dash-invincible"),ic=document.getElementById("dash-phase-through");Lt.dataset.keyValue="shift";Pr.addEventListener("change",()=>{Yg.style.display=Pr.checked?"":"none",os()});Lt.addEventListener("focus",()=>{Lt.value="⌨ ...",Lt.style.borderColor="#7fe7dd"});Lt.addEventListener("keydown",r=>{r.preventDefault(),r.stopPropagation();const e=r.key.toLowerCase();if(Xg().has(e)){Lt.style.borderColor="#f44",Lt.value=`⚠ ${di(e)} 已用`,setTimeout(()=>{Lt.value=di(Lt.dataset.keyValue||"shift"),Lt.style.borderColor="#555",Lt.blur()},1e3);return}Lt.dataset.keyValue=e,Lt.value=di(e),Lt.style.borderColor="#555",Lt.blur(),os()});Lt.addEventListener("blur",()=>{Lt.value==="⌨ ..."&&(Lt.value=di(Lt.dataset.keyValue||"shift")),Lt.style.borderColor="#555"});Ql.addEventListener("change",os);ec.addEventListener("change",os);tc.addEventListener("change",os);no.addEventListener("change",os);nc.addEventListener("change",os);ic.addEventListener("change",os);function os(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);e!=null&&e.behavior&&(e.behavior.dashEnabled=Pr.checked,e.behavior.dashKey=Lt.dataset.keyValue||"shift",e.behavior.dashDistance=parseFloat(Ql.value)||120,e.behavior.dashDuration=parseFloat(ec.value)||.2,e.behavior.dashCooldown=parseFloat(tc.value)||1.5,e.behavior.dashSegment=no.value||void 0,e.behavior.dashInvincible=nc.checked,e.behavior.dashPhaseThrough=ic.checked)}function PE(r,e){const t=r==null?void 0:r.behavior;Pr.checked=(t==null?void 0:t.dashEnabled)??!1,Yg.style.display=Pr.checked?"":"none",Lt.dataset.keyValue=(t==null?void 0:t.dashKey)??"shift",Lt.value=di((t==null?void 0:t.dashKey)??"shift"),Ql.value=String((t==null?void 0:t.dashDistance)??120),ec.value=String((t==null?void 0:t.dashDuration)??.2),tc.value=String((t==null?void 0:t.dashCooldown)??1.5),nc.checked=(t==null?void 0:t.dashInvincible)??!0,ic.checked=(t==null?void 0:t.dashPhaseThrough)??!0,no.innerHTML="",e.forEach(n=>{const i=document.createElement("option");i.value=n.value,i.textContent=n.label,n.value===((t==null?void 0:t.dashSegment)||"")&&(i.selected=!0),no.appendChild(i)})}function ju(){var d,h,u,f,p,y,g,m,x,_,v,w,S,T,P,M,E,I,D,B,G,H,V,z;const r=L.getSelectedId();if(!r)return;L.hasAnimations(r);const e=L.getMeta(r),t=document.getElementById("behavior-enabled"),n=document.getElementById("combat-enabled");if(t){const X=!!(e!=null&&e.behavior&&(e.behavior.walkSegment||e.behavior.idleSegment||e.behavior.isPlayer));t.checked=X,(d=document.getElementById("behavior-panel-wrap"))==null||d.classList.toggle("disabled",!X),X&&((h=document.getElementById("behavior-body"))==null||h.classList.add("open"),(u=document.getElementById("behavior-arrow"))==null||u.classList.add("open"))}if(n){const X=!!(e!=null&&e.behavior&&(e.behavior.hp||e.behavior.attackDamage||e.behavior.isAggressive));n.checked=X,(f=document.getElementById("combat-panel-wrap"))==null||f.classList.toggle("disabled",!X),X&&((p=document.getElementById("combat-body"))==null||p.classList.add("open"),(y=document.getElementById("combat-arrow"))==null||y.classList.add("open"))}const i=L.getMeta(r),s=L.getObjectSegments(r),a=L.getAnimationClips(r),o=[{value:"",label:"（未指定）"}];s.forEach(X=>o.push({value:`seg:${X.name}`,label:`▸ ${X.name} [${X.startFrame}-${X.endFrame}]`})),a.forEach(X=>o.push({value:`clip:${X}`,label:`♪ ${X}`}));const l=(X,K)=>{X.innerHTML="",o.forEach(te=>{const ne=document.createElement("option");ne.value=te.value,ne.textContent=te.label,te.value===K&&(ne.selected=!0),X.appendChild(ne)})};l(Ru,((g=i==null?void 0:i.behavior)==null?void 0:g.walkSegment)||""),l(Iu,((m=i==null?void 0:i.behavior)==null?void 0:m.idleSegment)||""),Lu.value=String(((x=i==null?void 0:i.behavior)==null?void 0:x.speed)??40),Fu.checked=((_=i==null?void 0:i.behavior)==null?void 0:_.enableWalk)!==!1,Du.checked=((v=i==null?void 0:i.behavior)==null?void 0:v.enableIdle)!==!1,Ou.checked=((w=i==null?void 0:i.behavior)==null?void 0:w.isPlayer)??!1,Uu.value=String(((S=i==null?void 0:i.behavior)==null?void 0:S.hp)??100),ku.checked=((T=i==null?void 0:i.behavior)==null?void 0:T.isAggressive)??!1,Vu.value=String(((P=i==null?void 0:i.behavior)==null?void 0:P.aggroRange)??150),Hu.value=String(((M=i==null?void 0:i.behavior)==null?void 0:M.team)??((E=i==null?void 0:i.behavior)!=null&&E.isPlayer?0:1));const c=((I=i==null?void 0:i.behavior)==null?void 0:I.canAttackTeams)??((D=i==null?void 0:i.behavior)!=null&&D.isPlayer?[1]:[0]);Gu.checked=c.includes(0),Wu.checked=c.includes(1),Xu.checked=c.includes(2),l(Nu,((B=i==null?void 0:i.behavior)==null?void 0:B.attackSegment)||""),l(Bu,((G=i==null?void 0:i.behavior)==null?void 0:G.hitSegment)||""),l(zu,((H=i==null?void 0:i.behavior)==null?void 0:H.deathSegment)||""),jg((V=i==null?void 0:i.behavior)==null?void 0:V.attacks,o),Kl.value=((z=i==null?void 0:i.behavior)==null?void 0:z.attackStrategy)||"random",PE(i,o)}function cn(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);e&&(e.behavior={walkSegment:Ru.value||void 0,idleSegment:Iu.value||void 0,speed:parseFloat(Lu.value)||40,enableWalk:Fu.checked,enableIdle:Du.checked,isPlayer:Ou.checked,hp:parseInt(Uu.value)||100,attackSegment:Nu.value||void 0,hitSegment:Bu.value||void 0,deathSegment:zu.value||void 0,isAggressive:ku.checked,aggroRange:parseInt(Vu.value)||150,team:parseInt(Hu.value),canAttackTeams:[...Gu.checked?[0]:[],...Wu.checked?[1]:[],...Xu.checked?[2]:[]],attacks:wd().length>0?wd():void 0,attackStrategy:Kl.value||"random",dashEnabled:Pr.checked,dashKey:Lt.dataset.keyValue||"shift",dashDistance:parseFloat(Ql.value)||120,dashDuration:parseFloat(ec.value)||.2,dashCooldown:parseFloat(tc.value)||1.5,dashSegment:no.value||void 0,dashInvincible:nc.checked,dashPhaseThrough:ic.checked})}Ru.addEventListener("change",cn);Iu.addEventListener("change",cn);Lu.addEventListener("change",cn);Fu.addEventListener("change",cn);Du.addEventListener("change",cn);Ou.addEventListener("change",cn);Uu.addEventListener("change",cn);Nu.addEventListener("change",cn);Bu.addEventListener("change",cn);zu.addEventListener("change",cn);ku.addEventListener("change",cn);Vu.addEventListener("change",cn);Hu.addEventListener("change",cn);Gu.addEventListener("change",cn);Wu.addEventListener("change",cn);Xu.addEventListener("change",cn);document.getElementById("combat-toggle-vis").addEventListener("click",()=>{const r=!L.isAttackRangeVisible();L.setAttackRangeVisibility(r),document.getElementById("combat-toggle-vis").textContent=r?"👁 攻擊範圍顯示/隱藏":"👁‍🗨 攻擊範圍已隱藏"});const xs=document.getElementById("material-slots");function qg(r){xs.innerHTML="";const e=L.getMaterialSlots(r);if(e.length===0){xs.innerHTML='<p class="hint">無材質</p>';return}e.forEach(t=>{const n=document.createElement("div");n.className="mat-slot";const i=[t.hasMap?"🎨":"⬜",t.hasNormalMap?"🗺️":"⬜",t.hasRoughnessMap?"📐":"⬜"].join("");n.innerHTML=`
      <div class="mat-slot-header">
        <span class="mat-slot-name">${t.name}</span>
        <span class="mat-slot-mesh">${t.meshName}</span>
      </div>
      <div class="mat-slot-status">${i} <span class="hint">Diff/Norm/Rough</span></div>
      <div class="mat-slot-actions">
        <label class="btn-mini">Diffuse<input type="file" accept=".png,.jpg,.jpeg,.webp,.tga" data-slot="${t.index}" data-map="map" /></label>
        <label class="btn-mini">Normal<input type="file" accept=".png,.jpg,.jpeg,.webp,.tga" data-slot="${t.index}" data-map="normalMap" /></label>
        <label class="btn-mini">Rough<input type="file" accept=".png,.jpg,.jpeg,.webp,.tga" data-slot="${t.index}" data-map="roughnessMap" /></label>
      </div>
      <div class="mat-slot-tiling">
        <div class="input-row">
          <label>色調</label>
          <input type="color" class="mat-color" data-slot="${t.index}" value="${t.color}" />
          <label>亮度</label>
          <input type="range" class="mat-brightness" data-slot="${t.index}" min="0.5" max="2" step="0.05" value="${t.brightness.toFixed(2)}" style="width:60px" />
        </div>
        <div class="input-row">
          <label>Tile</label>
          <input type="number" class="tiling-x" data-slot="${t.index}" step="0.1" min="0.01" value="${t.tiling[0].toFixed(2)}" />
          <input type="number" class="tiling-y" data-slot="${t.index}" step="0.1" min="0.01" value="${t.tiling[1].toFixed(2)}" />
        </div>
        <div class="input-row">
          <label>Offset</label>
          <input type="number" class="offset-x" data-slot="${t.index}" step="0.05" value="${t.offset[0].toFixed(2)}" />
          <input type="number" class="offset-y" data-slot="${t.index}" step="0.05" value="${t.offset[1].toFixed(2)}" />
        </div>
      </div>
    `,xs.appendChild(n)}),xs.querySelectorAll('input[type="file"]').forEach(t=>{t.addEventListener("change",async n=>{var c;const i=n.target;let s=(c=i.files)==null?void 0:c[0];if(!s)return;s.name.toLowerCase().endsWith(".tga")&&(s=await s1(s));const a=parseInt(i.dataset.slot),o=i.dataset.map,l=L.getSelectedId();l&&(L.applyTexture(l,s,o,a),qg(l))})}),xs.querySelectorAll(".tiling-x, .tiling-y, .offset-x, .offset-y").forEach(t=>{t.addEventListener("change",n=>{const i=n.target,s=parseInt(i.dataset.slot),a=L.getSelectedId();if(!a)return;const o=i.closest(".mat-slot"),l=parseFloat(o.querySelector(`.tiling-x[data-slot="${s}"]`).value)||1,c=parseFloat(o.querySelector(`.tiling-y[data-slot="${s}"]`).value)||1,d=parseFloat(o.querySelector(`.offset-x[data-slot="${s}"]`).value)||0,h=parseFloat(o.querySelector(`.offset-y[data-slot="${s}"]`).value)||0;L.setTiling(a,s,[l,c],[d,h])})}),xs.querySelectorAll(".mat-color").forEach(t=>{t.addEventListener("input",n=>{const i=n.target,s=parseInt(i.dataset.slot),a=L.getSelectedId();a&&L.setMaterialColor(a,s,i.value)})}),xs.querySelectorAll(".mat-brightness").forEach(t=>{t.addEventListener("input",n=>{const i=n.target,s=parseInt(i.dataset.slot),a=L.getSelectedId();a&&L.setMaterialBrightness(a,s,parseFloat(i.value))})})}const dl=document.getElementById("asset-list");function Br(){dl.innerHTML="";const r=L.getAssetLibrary();if(r.length===0){dl.innerHTML='<p class="hint">尚無素材，載入 FBX 後自動加入</p>';return}r.forEach(e=>{const t=document.createElement("li");t.innerHTML=`
      <span class="asset-name">📦 ${e.name}</span>
      <button class="btn-mini asset-spawn" data-id="${e.assetId}">＋放置</button>
    `,dl.appendChild(t)}),dl.querySelectorAll(".asset-spawn").forEach(e=>{e.addEventListener("click",async t=>{const n=t.currentTarget.dataset.id;await L.spawnFromLibrary(n),Os(),Nr()})})}const ca=document.getElementById("ed-ambient"),Ed=document.getElementById("ed-ambient-color"),ha=document.getElementById("ed-sun"),Td=document.getElementById("ed-sun-color");ca.addEventListener("input",()=>{L.setAmbient(parseFloat(ca.value),Ed.value),document.getElementById("ed-ambient-val").textContent=parseFloat(ca.value).toFixed(2)});Ed.addEventListener("input",()=>L.setAmbient(parseFloat(ca.value),Ed.value));ha.addEventListener("input",()=>{L.setSun(parseFloat(ha.value),Td.value),document.getElementById("ed-sun-val").textContent=parseFloat(ha.value).toFixed(2)});Td.addEventListener("input",()=>L.setSun(parseFloat(ha.value),Td.value));let es=null;async function RE(){go("儲存中...");const r=document.getElementById("scene-name").value.trim()||"untitled";if("showSaveFilePicker"in window){let e;try{const t={suggestedName:`${r}.scene.json`,types:[{description:"Scene File",accept:{"application/octet-stream":[".json",".gz"]}}]};es&&(t.startIn=es),e=await window.showSaveFilePicker(t),es=e}catch(t){if(t.name==="AbortError"){kn();return}e=null}if(e)try{const t=await L.exportBundle(r),n=await e.createWritable();await n.write(t),await n.close(),kn(),bn("✅ 場景已儲存");return}catch(t){kn(),console.error("[Save] Write failed:",t),alert("寫入失敗: "+t.message);return}}try{const e=await L.exportBundle(r),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`${r}.scene.json`,n.click(),URL.revokeObjectURL(t),bn("✅ 場景已下載")}catch(e){alert("存檔失敗: "+e.message)}}async function IE(){if(go("載入場景中..."),"showOpenFilePicker"in window)try{const r={types:[{description:"Scene File",accept:{"application/octet-stream":[".json",".gz"]}}]};es&&(r.startIn=es);const[e]=await window.showOpenFilePicker(r);es=e;const t=await e.getFile();await Zg(t);return}catch(r){if(r.name==="AbortError"){kn();return}}Ml.click()}async function Zg(r){try{const{loaded:e,total:t}=await L.importBundle(r),n=L.exportScene("");document.getElementById("scene-name").value=n.name||"",ca.value=String(n.ambientIntensity),ha.value=String(n.sunIntensity),document.getElementById("ed-ambient-val").textContent=n.ambientIntensity.toFixed(2),document.getElementById("ed-sun-val").textContent=n.sunIntensity.toFixed(2),e<t&&alert(`場景載入：${e}/${t} 個模型成功。
部分模型資料可能損壞。`),ei(),Br(),L.clearAllAttackRangeHelpers(),kn(),bn(`✅ 載入完成：${e} 個物件`)}catch(e){kn(),alert("場景載入失敗: "+e.message),console.error(e)}}document.getElementById("save-scene-btn").addEventListener("click",()=>RE());document.getElementById("load-scene-btn").addEventListener("click",()=>IE());document.getElementById("export-game-btn").addEventListener("click",async()=>{const r=document.getElementById("scene-name").value.trim()||"untitled";if(go("匯出遊戲中..."),"showDirectoryPicker"in window){try{const e={mode:"readwrite"};es&&(e.startIn=es);const t=await window.showDirectoryPicker(e),{sceneJson:n,prefabs:i,textureFiles:s,modelFiles:a}=await L.exportForGame(r),o=await t.getDirectoryHandle("prefabs",{create:!0}),l=await t.getDirectoryHandle("textures",{create:!0}),c=await t.getDirectoryHandle("models",{create:!0}),h=await(await t.getFileHandle(`${r}.scene.json`,{create:!0})).createWritable();await h.write(n),await h.close();for(const u of i){const f=u.path.replace("prefabs/",""),y=await(await o.getFileHandle(f,{create:!0})).createWritable();await y.write(u.json),await y.close()}for(const u of s){const f=u.path.replace("textures/",""),y=await(await l.getFileHandle(f,{create:!0})).createWritable();await y.write(u.blob),await y.close()}for(const u of a){const f=u.path.replace("models/",""),y=await(await c.getFileHandle(f,{create:!0})).createWritable();await y.write(u.blob),await y.close()}alert(`匯出完成！
📄 場景: ${r}.scene.json
🧩 Prefab: ${i.length} 個
🖼️ 貼圖: ${s.length} 個
📦 模型: ${a.length} 個`)}catch(e){if(e.name==="AbortError"){kn();return}alert("匯出失敗: "+e.message)}kn()}else{const{sceneJson:e,prefabs:t,textureFiles:n,modelFiles:i}=await L.exportForGame(r),s=(a,o)=>{const l=typeof a=="string"?new Blob([a],{type:"application/json"}):a,c=URL.createObjectURL(l),d=document.createElement("a");d.href=c,d.download=o,d.click(),URL.revokeObjectURL(c)};s(e,`${r}.scene.json`);for(const a of t)s(a.json,a.path.replace("prefabs/",""));for(const a of n)s(a.blob,a.path.replace("textures/",""));for(const a of i)s(a.blob,a.path.replace("models/",""));kn(),alert(`已下載所有檔案。請依以下結構放置：
├── ${r}.scene.json
├── prefabs/  (${t.length} 個 .prefab.json)
├── textures/ (${n.length} 個圖片)
└── models/   (${i.length} 個 .fbx)`)}});const Ml=document.getElementById("load-scene-input");Ml.addEventListener("change",async()=>{var e;go("載入場景中...");const r=(e=Ml.files)==null?void 0:e[0];if(!r){kn();return}await Zg(r),Ml.value=""});const hh=document.getElementById("import-prefab-input");hh.addEventListener("change",async()=>{var e;const r=(e=hh.files)==null?void 0:e[0];if(r){try{await L.importPrefabFromFile(r)&&(Oi(),Br(),alert("✅ Prefab 匯入成功！"))}catch(t){alert("Prefab 匯入失敗: "+t.message)}hh.value=""}});const rr=document.getElementById("prefab-list");function Oi(){rr.innerHTML="";const r=L.getPrefabList();if(r.length===0){rr.innerHTML='<p class="hint">選取物件後點「存為 Prefab」</p>';return}r.forEach(e=>{const t=document.createElement("li");t.innerHTML=`
      <div class="prefab-info">
        <span>💎 ${e.name}</span>
        <span class="prefab-model">${e.model}</span>
      </div>
      <div class="prefab-actions">
        <button class="btn-mini prefab-spawn" data-id="${e.id}">＋放置</button>
        <button class="btn-mini prefab-edit" data-id="${e.id}">✏️</button>
        <button class="btn-mini prefab-del" data-id="${e.id}" style="color:#f38ba8">✕</button>
      </div>
    `,rr.appendChild(t)}),rr.querySelectorAll(".prefab-spawn").forEach(e=>{e.addEventListener("click",async t=>{const n=t.currentTarget.dataset.id;await L.spawnFromPrefab(n),ei()})}),rr.querySelectorAll(".prefab-edit").forEach(e=>{e.addEventListener("click",async t=>{const n=t.currentTarget.dataset.id,i=L.findObjectByPrefabId(n);if(i){L.select(i),ei();return}await L.spawnFromPrefab(n),ei()})}),rr.querySelectorAll(".prefab-del").forEach(e=>{e.addEventListener("click",t=>{const n=t.currentTarget.dataset.id;confirm("確定刪除此 Prefab？")&&(L.deletePrefab(n),Oi())})})}L.onPrefabChange=()=>{Oi()};Os();Nr();cu();Br();Oi();L.onAssetLibraryChange=()=>{Br()};document.getElementById("save-prefab-btn").addEventListener("click",async()=>{console.log("[Prefab] Save button clicked");const r=L.getSelectedId();if(!r){alert("請先選取一個物件");return}const e=L.getMeta(r);if(!e){alert("物件資料不存在");return}const t=e.name,n=L.saveToPrefab(r,t);if(!n){alert("❌ Prefab 建立失敗");return}const i=await L.exportPrefabToFile(n);if(!i){alert("❌ Prefab 資料匯出失敗");return}if("showSaveFilePicker"in window)try{const l=await(await window.showSaveFilePicker({suggestedName:`${t}.prefab.json`,types:[{description:"Prefab File",accept:{"application/json":[".json"]}}]})).createWritable();await l.write(i),await l.close(),Oi();return}catch(o){if(o.name==="AbortError")return;console.warn("File picker failed, using download fallback",o)}const s=URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=`${t}.prefab.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(s),Oi()});const LE=document.getElementById("update-prefab-btn");LE.addEventListener("click",()=>{const r=L.getSelectedId();if(!r){alert("請先選取一個物件");return}const e=L.getMeta(r);if(!e)return;const t=L.findPrefabIdByModel(e.modelPath);t?(L.startEditPrefab(t),L.finishEditPrefab(r),Oi(),bn("✅ Prefab 已更新")):L.saveToPrefab(r,e.name)&&(Oi(),bn("✅ 已建立新 Prefab"))});function bn(r){const e=document.getElementById("editor-toast");e&&e.remove();const t=document.createElement("div");t.id="editor-toast",t.textContent=r,t.style.cssText=`
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.85); color: #fff; padding: 14px 28px;
    border-radius: 8px; font-size: 14px; font-weight: 600;
    pointer-events: none; z-index: 9999;
    animation: toastFade 1.5s ease forwards;
  `,document.body.appendChild(t),setTimeout(()=>t.remove(),1500)}const Ad=document.getElementById("play-btn"),Cd=document.getElementById("stop-btn"),zl=document.getElementById("debug-btn");let Ms=!1;Ad.addEventListener("click",()=>{L.getAllMeta().filter(r=>r.modelPath!=="__camera__"),L.getObjects(),L.getObjectAnimationsMap(),L.getObjectFPSMap(),L.deselect(),L.stopAllAnimations(),Fn.hide(),L.getOrbitControls().enabled=!1,L.setEditorHelpersVisible(!1),L.setInputLocked(!0),L.getTransformControls().detach(),L.clearAllAttackRangeHelpers(),L.getSceneCameraObject(),L.getCameraFollowTarget(),Nl.start(),hf(),Ad.classList.add("hidden"),Cd.classList.remove("hidden"),zl.classList.remove("hidden"),document.getElementById("left-panel").style.display="none",document.getElementById("right-panel").style.display="none",document.getElementById("timeline-panel").style.display="none",window.dispatchEvent(new Event("resize")),bn("▶ 遊戲執行中 (WASD 移動)")});Cd.addEventListener("click",()=>{Nl.stop(),L.getOrbitControls().enabled=!0,L.setEditorHelpersVisible(!0),L.setInputLocked(!1),Ms=!1,qu=!1,Yu.style.display="none",Cd.classList.add("hidden"),zl.classList.add("hidden"),Ad.classList.remove("hidden"),document.getElementById("left-panel").style.display="",document.getElementById("right-panel").style.display="",document.getElementById("timeline-panel").style.display="",window.dispatchEvent(new Event("resize")),ei(),bn("⏹ 已停止")});zl.addEventListener("click",()=>{Ms=!Ms,L.setDebugHelpersVisible(Ms),qu=Ms,Yu.style.display=Ms?"block":"none",zl.textContent=Ms?"🐛 Debug ON":"🐛 Debug"});const Yu=document.getElementById("fps-counter");let dh=0,uh=performance.now(),qu=!1;function FE(){dh++;const r=performance.now();if(r-uh>=500){const e=Math.round(dh/((r-uh)/1e3));Yu.textContent=`FPS: ${e}`,dh=0,uh=r}}L.onUpdate=r=>{Nl.isActive()&&(Nl.update(r),qu&&FE()),ni.update(r),Fn.update()};document.getElementById("export-standalone-btn").addEventListener("click",async()=>{var t;const r=document.getElementById("scene-name").value.trim()||"game";let e="";if("showDirectoryPicker"in window)try{const n=await window.showDirectoryPicker({mode:"readwrite"}),i=prompt(`已選擇輸出資料夾。
請貼上該資料夾的完整路徑（例如 D:\\MyGame）：

（因為瀏覽器安全限制，無法自動取得路徑）`,"");i&&(e=i.trim())}catch(n){if(n.name==="AbortError")return}e||(e=prompt("請輸入 EXE 輸出路徑（留空則輸出到專案的 release/ 資料夾）：","")||""),go(`正在打包 EXE...
（vite build + neu build，約 30 秒）`);try{const n=await L.exportBundle(r);let i;const s=new Uint8Array(await n.slice(0,2).arrayBuffer());if(s[0]===31&&s[1]===139&&"DecompressionStream"in window){const l=new window.DecompressionStream("gzip");i=await new Response(n.stream().pipeThrough(l)).text()}else i=await n.text();const o=await(await fetch("/__build_exe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sceneBundle:i,outputDir:e||void 0})})).json();if(kn(),o.success){const l=o.path||"release/";bn("✅ EXE 已產出"),alert(`打包完成！

📁 ${l}/DouQi_Game-win_x64.exe
📁 ${l}/resources.neu

兩個檔案放在一起即可執行遊戲。`)}else alert("打包失敗: "+o.error)}catch(n){if(kn(),(t=n.message)!=null&&t.includes("Failed to fetch")){alert(`⚠️ 無法連線 Vite dev server。

請確認 npm run dev 正在執行，或手動執行「打包遊戲.bat」。`);try{const i=await L.exportBundle(r),s=new Uint8Array(await i.slice(0,2).arrayBuffer());let a;if(s[0]===31&&s[1]===139&&"DecompressionStream"in window){const o=new window.DecompressionStream("gzip");a=await new Response(i.stream().pipeThrough(o)).text()}else a=await i.text();await fetch("/__save_bundle",{method:"POST",headers:{"Content-Type":"application/json"},body:a})}catch{}}else alert("打包失敗: "+n.message)}});let Pd=null,it=null,Pi=null,bl=0;Ue.onFrameChange=r=>{const e=L.getSelectedId();if(!e||!Pi)return;const t=L.getObjectFPS(e)||30;if(it){const n=(it.startFrame+r)/t;Pi.time=n;const i=L.getMixer(e);i&&i.update(0)}else if(Pd){Pi.time=r/t;const n=L.getMixer(e);n&&n.update(0)}if(Ue.isPlaying()&&it){const n=Ue.getMarkers(2);for(const i of n)if(bl<i.frame&&r>=i.frame){const s=L.getObjects().get(e);if(s){const a=i.offset||[0,50,30],l=new C(a[0],a[1],a[2]).applyMatrix4(s.matrixWorld);let c;if(i.rotation){const d=new Vt(He.degToRad(i.rotation[0]),He.degToRad(i.rotation[1]),He.degToRad(i.rotation[2]));c=new C(0,0,1).applyEuler(d),c.applyQuaternion(s.quaternion)}else{const d=s.rotation.y;c=new C(Math.sin(d),0,Math.cos(d))}ni.spawn(i.presetId,l,c,i.scale??1)}}if(it){const i=L.getSelectedId();if(i){const a=L.getObjectSegments(i).find(o=>o.name===it.name&&o.clipName===it.clipName&&o.startFrame===it.startFrame&&o.endFrame===it.endFrame);if(a!=null&&a.combatEvents)for(const o of a.combatEvents){if(!o.showIndicator)continue;it.startFrame;const l=0;bl<=l&&r>l&&L.getObjects().get(i)}}}}bl=r};Ue.onPlayStateChange=r=>{r&&(bl=Ue.getCurrentFrame())};Ue.onMarkerAdd=(r,e)=>{var i;if(!L.getSelectedId())return;const n=(i=Ue.tracks)==null?void 0:i[r];(n==null?void 0:n.type)==="combat"?(Ue.addMarker(r,{frame:e,presetId:"combat",label:`Hit@${e}`,color:"#e64553"}),sc(Ue.getMarkers(r))):Ue.addMarker(r,{frame:e,presetId:"hit_spark",label:"打擊火花",color:"#ff8800",scale:1})};Ue.onMarkerChanged=(r,e)=>{var i;if(!L.getSelectedId()||!it)return;const n=(i=Ue.tracks)==null?void 0:i[r];(n==null?void 0:n.type)==="combat"?sc(e):_o(e)};const da=document.getElementById("tl-marker-props"),ui=document.getElementById("tl-marker-preset"),Rd=document.getElementById("tl-marker-scale"),DE=document.getElementById("tl-marker-frame-label"),OE=document.getElementById("tl-marker-delete");function UE(){const r=ui.value;ui.innerHTML="";const e={命中特效:[],攻擊特效:[],其他:[]};for(const[t,n]of Object.entries(Sd))t.startsWith("hit_")?e.命中特效.push({id:t,name:n.name}):t.startsWith("attack_")?e.攻擊特效.push({id:t,name:n.name}):e.其他.push({id:t,name:n.name});for(const[t,n]of Object.entries(e)){if(n.length===0)continue;const i=document.createElement("optgroup");i.label=t;for(const s of n){const a=document.createElement("option");a.value=s.id,a.textContent=s.name,i.appendChild(a)}ui.appendChild(i)}if(Vn.size>0){const t=document.createElement("optgroup");t.label="⭐ 自製特效";for(const[n,i]of Vn){const s=document.createElement("option");s.value=n,s.textContent=i.name,t.appendChild(s)}ui.appendChild(t)}r&&(ui.value=r)}const _r=document.getElementById("tl-combat-props"),Zu=document.getElementById("tl-combat-damage"),Ju=document.getElementById("tl-combat-range"),$u=document.getElementById("tl-combat-angle"),Ku=document.getElementById("tl-combat-cooldown"),Qu=document.getElementById("tl-combat-kb-force"),ef=document.getElementById("tl-combat-kb-up"),io=document.getElementById("tl-combat-shape"),tf=document.getElementById("tl-combat-offset"),so=document.getElementById("tl-combat-width"),Jg=document.getElementById("tl-combat-width-label"),nf=document.getElementById("tl-combat-indicator"),NE=document.getElementById("tl-combat-frame-label"),BE=document.getElementById("tl-combat-delete");let ts=-1;Ue.onMarkerSelected=r=>{if(!r){da.classList.add("hidden"),_r.classList.add("hidden"),Fn.hide(),ts=-1,L.clearAllAttackRangeHelpers();const t=L.getSelectedId();if(t){const n=L.getObjects().get(t);n&&L.getTransformControls().attach(n)}return}if(r.presetId==="combat"){da.classList.add("hidden"),_r.classList.remove("hidden"),Fn.hide();const t=L.getSelectedId();if(t&&it){const i=L.getObjectSegments(t).find(s=>s.name===it.name&&s.clipName===it.clipName&&s.startFrame===it.startFrame&&s.endFrame===it.endFrame);if(i!=null&&i.combatEvents){const s=i.combatEvents.findIndex(a=>a.frame===r.frame);if(ts=s,s>=0){const a=i.combatEvents[s];NE.textContent=`幀: ${a.frame}`,Zu.value=String(a.damage),Ju.value=String(a.range),$u.value=String(a.angle),Ku.value=String(a.cooldown),Qu.value=String(a.knockbackForce??0),ef.value=String(a.knockbackUp??0),io.value=a.shape||"cone",tf.value=String(a.forwardOffset??0),so.value=String(a.width??60),nf.checked=a.showIndicator??!1;const o=(a.shape||"cone")==="rectangle";so.style.display=o?"":"none",Jg.style.display=o?"":"none";const l=L.getMeta(t);l&&(l.behavior||(l.behavior={}),l.behavior.attackRange=a.range,l.behavior.attackAngle=a.shape==="circle"?360:a.angle,L.updateAttackRangeHelper(t,a.shape||"cone",a.forwardOffset,a.width))}}}}else{_r.classList.add("hidden"),da.classList.remove("hidden"),UE(),ui.value=r.presetId,Rd.value=String(r.scale??1),document.getElementById("tl-marker-follow").checked=r.followParent??!1,DE.textContent=`Frame: ${r.frame}`;const t=L.getSelectedId();if(t){const n=L.getObjects().get(t);if(n){const i=r.offset||[0,50,30],s=r.rotation||[0,0,0];Fn.show(n,i,s)}}}};function xi(){var o;const r=L.getSelectedId();if(!r||!it||ts<0)return;const t=L.getObjectSegments(r).find(l=>l.name===it.name&&l.clipName===it.clipName&&l.startFrame===it.startFrame&&l.endFrame===it.endFrame);if(!((o=t==null?void 0:t.combatEvents)!=null&&o[ts]))return;const n=t.combatEvents[ts];n.damage=parseInt(Zu.value)||10,n.range=parseInt(Ju.value)||30,n.angle=parseInt($u.value)||120,n.cooldown=parseFloat(Ku.value)||1,n.shape=io.value||void 0,n.forwardOffset=parseFloat(tf.value)||void 0,n.width=io.value==="rectangle"?parseFloat(so.value)||60:void 0,n.showIndicator=nf.checked?!0:void 0;const i=parseFloat(Qu.value)||0,s=parseFloat(ef.value)||0;n.knockbackForce=i>0?i:void 0,n.knockbackUp=s>0?s:void 0,n.knockback=void 0;const a=L.getMeta(r);a&&(a.behavior||(a.behavior={}),a.behavior.attackRange=n.range,a.behavior.attackAngle=n.shape==="circle"?360:n.angle,L.updateAttackRangeHelper(r,n.shape||"cone",n.forwardOffset,n.width))}Zu.addEventListener("change",xi);Ju.addEventListener("change",xi);$u.addEventListener("change",xi);Ku.addEventListener("change",xi);Qu.addEventListener("change",xi);ef.addEventListener("change",xi);io.addEventListener("change",()=>{const r=io.value==="rectangle";so.style.display=r?"":"none",Jg.style.display=r?"":"none",xi()});tf.addEventListener("change",xi);so.addEventListener("change",xi);nf.addEventListener("change",xi);BE.addEventListener("click",()=>{const r=Ue.selectedMarker;if(r){Ue.removeMarker(r.trackIdx,r.markerIdx),_r.classList.add("hidden"),ts=-1;const e=L.getSelectedId();if(e&&it){const n=L.getObjectSegments(e).find(i=>i.name===it.name&&i.clipName===it.clipName&&i.startFrame===it.startFrame&&i.endFrame===it.endFrame);n!=null&&n.combatEvents&&sc(Ue.getMarkers(1))}}});Fn.onChange=(r,e)=>{const t=Ue.getSelectedMarker();if(!t)return;t.offset=r,t.rotation=e;const n=Ue.getMarkers(2);_o(n)};ui.addEventListener("change",()=>{const r=Ue.getSelectedMarker();if(!r)return;r.presetId=ui.value,r.label=ui.options[ui.selectedIndex].textContent||r.presetId,r.color="#ff8800";const e=Ue.getMarkers(2);_o(e),Ue.setTracks(Ue.tracks)});Rd.addEventListener("change",()=>{const r=Ue.getSelectedMarker();if(!r)return;r.scale=parseFloat(Rd.value)||1;const e=Ue.getMarkers(2);_o(e)});document.getElementById("tl-marker-follow").addEventListener("change",()=>{const r=Ue.getSelectedMarker();if(!r)return;r.followParent=document.getElementById("tl-marker-follow").checked;const e=Ue.getMarkers(2);_o(e)});OE.addEventListener("click",()=>{const r=Ue.selectedMarker;r&&(Ue.removeMarker(r.trackIdx,r.markerIdx),Fn.hide())});const $g=document.getElementById("tl-marker-mode-translate"),Kg=document.getElementById("tl-marker-mode-rotate");function Qg(){const r=Fn.getMode();$g.style.background=r==="translate"?"#45475a":"none",Kg.style.background=r==="rotate"?"#45475a":"none"}$g.addEventListener("click",()=>{Fn.setMode("translate"),Qg()});Kg.addEventListener("click",()=>{Fn.setMode("rotate"),Qg()});function _o(r){const e=L.getSelectedId();if(!e||!it)return;const n=L.getObjectSegments(e).find(i=>i.name===it.name&&i.clipName===it.clipName&&i.startFrame===it.startFrame&&i.endFrame===it.endFrame);n&&(n.vfxEvents=r.map(i=>({frame:i.frame,presetId:i.presetId,offset:i.offset,rotation:i.rotation,scale:i.scale,followParent:i.followParent||void 0})))}function sc(r){const e=L.getSelectedId();if(!e||!it)return;const n=L.getObjectSegments(e).find(i=>i.name===it.name&&i.clipName===it.clipName&&i.startFrame===it.startFrame&&i.endFrame===it.endFrame);n&&(n.combatEvents=r.map(i=>{var a;const s=(a=n.combatEvents)==null?void 0:a.find(o=>o.frame===i.frame);return{frame:i.frame,damage:(s==null?void 0:s.damage)??10,range:(s==null?void 0:s.range)??30,angle:(s==null?void 0:s.angle)??120,cooldown:(s==null?void 0:s.cooldown)??1,shape:s==null?void 0:s.shape,forwardOffset:s==null?void 0:s.forwardOffset,width:s==null?void 0:s.width,showIndicator:s==null?void 0:s.showIndicator,knockbackForce:s==null?void 0:s.knockbackForce,knockbackUp:s==null?void 0:s.knockbackUp,label:i.label||`Hit@${i.frame}`}}))}const fh=L.onSelect;L.onSelect=r=>{fh==null||fh(r),da.classList.add("hidden"),_r.classList.add("hidden"),Fn.hide(),L.clearAllAttackRangeHelpers(),ts=-1,document.getElementById("tl-speed-control").style.display="none",r?kE(r):(Ue.setTracks([]),Ue.setTotalFrames(120))};function zE(r){if(!r.vfxEvents)return;const e=r.vfxEvents.filter(t=>t.usage==="hit");if(e.length!==0){r.combatEvents||(r.combatEvents=[]);for(const t of e)r.combatEvents.some(n=>n.frame===t.frame)||r.combatEvents.push({frame:t.frame,damage:10,range:30,angle:120,cooldown:1,label:`Hit@${t.frame}`}),delete t.usage}}function kE(r){const e=L.getObjectSegments(r);L.getAnimationClips(r);const t=L.getObjectFPS(r)||30;for(const o of e)zE(o);Ue.setFPS(t);let n=60;for(const o of e)n=Math.max(n,o.endFrame);const i=L.getObjectAnimationClips(r);if(i)for(const o of i)n=Math.max(n,Math.round(o.duration*t));Ue.setTotalFrames(n);const s=[],a=e.map((o,l)=>({startFrame:o.startFrame,endFrame:o.endFrame,name:o.name,color:["#89b4fa","#f9e2af","#a6e3a1","#f38ba8","#cba6f7"][l%5]}));s.push({type:"animation",name:"Animation",clips:a}),s.push({type:"vfx",name:"VFX",clips:[]}),s.push({type:"audio",name:"Audio",clips:[]}),Ue.setTracks(s)}const e0=document.getElementById("add-camera-btn"),qi=document.getElementById("camera-preview-panel"),ul=document.getElementById("camera-preview-canvas"),VE=document.getElementById("camera-preview-close"),HE=document.getElementById("camera-panel"),Id=document.getElementById("cam-fov"),kl=document.getElementById("cam-near"),Vl=document.getElementById("cam-far"),ro=document.getElementById("cam-follow-enabled"),t0=document.getElementById("cam-follow-settings"),Hl=document.getElementById("cam-follow-target"),sf=document.getElementById("cam-follow-ox"),rf=document.getElementById("cam-follow-oy"),af=document.getElementById("cam-follow-oz"),of=document.getElementById("cam-look-ox"),lf=document.getElementById("cam-look-oy"),cf=document.getElementById("cam-look-oz");e0.addEventListener("click",()=>{if(L.hasCameraObject()){const r=L.getCameraObjectId();r&&L.select(r)}else L.addCameraObject(),ei()});function GE(){if(qi.classList.remove("hidden"),!L.getSceneCameraObject())return;const r=ul.getBoundingClientRect();ul.width=r.width*window.devicePixelRatio,ul.height=r.height*window.devicePixelRatio,L.setupCameraObjectPreview(ul)}function hf(){qi.classList.add("hidden"),L.disposeCameraObjectPreview()}VE.addEventListener("click",hf);function WE(){const r=L.getSelectedId(),e=r!==null&&L.isCameraObject(r);HE.classList.toggle("hidden",!e);const t=document.getElementById("material-slots").parentElement,n=t.nextElementSibling,i=n==null?void 0:n.nextElementSibling;if(e){if(t.classList.add("hidden"),n&&n.classList.add("hidden"),i){const f=i.querySelector(".action-row:last-child");f&&(f.style.display="none")}}else if(r&&(t.classList.remove("hidden"),n&&n.classList.remove("hidden"),i)){const f=i.querySelector(".action-row:last-child");f&&(f.style.display="")}if(!e)return;Id.value=String(L.getCameraFov()),kl.value=String(L.getCameraNear()),Vl.value=String(L.getCameraFar());const s=L.getCameraAspect(),a=document.getElementById("cam-aspect"),o=document.getElementById("cam-aspect-custom");let l=!1;for(const f of Array.from(a.options))if(f.value!=="custom"&&Math.abs(parseFloat(f.value)-s)<.02){a.value=f.value,l=!0;break}if(l)o.style.display="none";else{a.value="custom",o.style.display="";const f=Math.round(s*1080);document.getElementById("cam-aspect-w").value=String(f),document.getElementById("cam-aspect-h").value="1080"}const c=L.getCameraFollowTarget();ro.checked=c!==null,t0.classList.toggle("hidden",!ro.checked),Hl.innerHTML="",L.getAllMeta().filter(f=>f.modelPath!=="__camera__").forEach(f=>{const p=document.createElement("option");p.value=f.name,p.textContent=f.name,f.name===c&&(p.selected=!0),Hl.appendChild(p)});const h=L.getCameraFollowOffset();sf.value=String(h[0]),rf.value=String(h[1]),af.value=String(h[2]);const u=L.getCameraLookOffset();of.value=String(u[0]),lf.value=String(u[1]),cf.value=String(u[2])}function ls(){ro.checked?(L.setCameraFollowTarget(Hl.value||null),L.setCameraFollowOffset([parseFloat(sf.value)||0,parseFloat(rf.value)||250,parseFloat(af.value)||350]),L.setCameraLookOffset([parseFloat(of.value)||0,parseFloat(lf.value)||30,parseFloat(cf.value)||0])):L.setCameraFollowTarget(null),t0.classList.toggle("hidden",!ro.checked)}Id.addEventListener("change",()=>{L.setCameraFov(parseFloat(Id.value)||60)});const n0=document.getElementById("cam-aspect"),Em=document.getElementById("cam-aspect-custom"),i0=document.getElementById("cam-aspect-w"),s0=document.getElementById("cam-aspect-h");function df(){const r=n0.value;if(r==="custom"){Em.style.display="";const e=parseInt(i0.value)||1920,t=parseInt(s0.value)||1080;L.setCameraAspect(e/t)}else Em.style.display="none",L.setCameraAspect(parseFloat(r))}n0.addEventListener("change",df);i0.addEventListener("change",df);s0.addEventListener("change",df);kl.addEventListener("change",()=>{L.setCameraNearFar(parseFloat(kl.value)||1,parseFloat(Vl.value)||5e3)});Vl.addEventListener("change",()=>{L.setCameraNearFar(parseFloat(kl.value)||1,parseFloat(Vl.value)||5e3)});ro.addEventListener("change",ls);Hl.addEventListener("change",ls);sf.addEventListener("change",ls);rf.addEventListener("change",ls);af.addEventListener("change",ls);of.addEventListener("change",ls);lf.addEventListener("change",ls);cf.addEventListener("change",ls);L.onCameraObjectChange=()=>{Os(),e0.textContent=L.hasCameraObject()?"🎥 選取攝影機":"🎥 攝影機"};let uf=!1,r0=0,a0=0;const XE=document.getElementById("camera-preview-header");XE.addEventListener("mousedown",r=>{uf=!0;const e=qi.getBoundingClientRect();r0=r.clientX-e.left,a0=r.clientY-e.top,r.preventDefault()});document.addEventListener("mousemove",r=>{if(!uf)return;const t=qi.parentElement.getBoundingClientRect(),n=r.clientX-t.left-r0,i=r.clientY-t.top-a0;qi.style.left=Math.max(0,n)+"px",qi.style.top=Math.max(0,i)+"px",qi.style.right="auto",qi.style.bottom="auto"});document.addEventListener("mouseup",()=>{uf=!1});const ff=document.getElementById("vfx-editor-btn"),o0=document.getElementById("vfx-editor-panel"),jE=document.getElementById("vfx-editor-close"),l0=document.getElementById("inspector");let pf=!1,ua=null;const c0="douqi_vfx_custom_presets";let Vn=new Map;(function(){try{const e=localStorage.getItem(c0);if(e){const t=JSON.parse(e);for(const[n,i]of t)Vn.set(n,i),ni.registerPreset(n,i)}}catch{}})();function Gl(){const r=Array.from(Vn.entries());localStorage.setItem(c0,JSON.stringify(r))}function YE(){pf=!0,ff.classList.add("active"),l0.classList.add("hidden"),o0.classList.remove("hidden"),ao()}function h0(){pf=!1,ff.classList.remove("active"),o0.classList.add("hidden"),l0.classList.remove("hidden"),u0(),Nr()}ff.addEventListener("click",()=>{pf?h0():YE()});jE.addEventListener("click",h0);const ns=document.getElementById("vfx-ed-preset-list");function ao(){ns.innerHTML='<option value="">— 新特效 —</option>';const r=ni.getAllPresets();for(const e of r){const t=document.createElement("option");t.value=e.id,t.textContent=`${e.name} (${e.id})`,ns.appendChild(t)}for(const[e,t]of Vn){if(r.find(i=>i.id===e))continue;const n=document.createElement("option");n.value=e,n.textContent=`⭐ ${t.name} (${e})`,ns.appendChild(n)}}document.getElementById("vfx-ed-load-preset").addEventListener("click",()=>{const r=ns.value;if(!r){d0();return}const e=Vn.get(r)||ni.getPreset(r);if(!e)return;const t=e.particles||e;mf(r,e.name,t)});function mf(r,e,t){var n,i,s;document.getElementById("vfx-ed-name").value=e,document.getElementById("vfx-ed-count").value=String(t.count??15),document.getElementById("vfx-ed-size").value=String(t.size??12),document.getElementById("vfx-ed-size-end").value=String(t.sizeEnd??2),document.getElementById("vfx-ed-speed").value=String(t.speed??150),document.getElementById("vfx-ed-speed-var").value=String(t.speedVariance??60),document.getElementById("vfx-ed-life").value=String(t.lifetime??.35),document.getElementById("vfx-ed-life-var").value=String(t.lifetimeVariance??.1),document.getElementById("vfx-ed-color").value=t.color??"#4488ff",document.getElementById("vfx-ed-color-end").value=t.colorEnd??"#2244aa",document.getElementById("vfx-ed-opacity").value=String(t.opacity??1),document.getElementById("vfx-ed-opacity-end").value=String(t.opacityEnd??0),document.getElementById("vfx-ed-gravity").value=String(t.gravity??200),document.getElementById("vfx-ed-spread").value=String(t.spread??120),document.getElementById("vfx-ed-dir-x").value=String(((n=t.direction)==null?void 0:n[0])??0),document.getElementById("vfx-ed-dir-y").value=String(((i=t.direction)==null?void 0:i[1])??1),document.getElementById("vfx-ed-dir-z").value=String(((s=t.direction)==null?void 0:s[2])??0),document.getElementById("vfx-ed-texture").value=t.texture??"circle",document.getElementById("vfx-ed-render-mode").value=t.renderMode??"billboard",document.getElementById("vfx-ed-length-factor").value=String(t.lengthFactor??3),document.getElementById("vfx-ed-trail-length").value=String(t.trailLength??10),document.getElementById("vfx-ed-emitter-shape").value=t.emitterShape??"point",document.getElementById("vfx-ed-emitter-radius").value=String(t.emitterRadius??1),document.getElementById("vfx-ed-orbital").value=String(t.orbitalForce??0),document.getElementById("vfx-ed-drag").value=String(t.drag??0),document.getElementById("vfx-ed-emission-mode").value=t.emissionMode??"burst",document.getElementById("vfx-ed-emission-rate").value=String(t.emissionRate??20),document.getElementById("vfx-ed-duration").value=String(t.duration??1),ns.value=r}function d0(){mf("","新特效",{count:15,size:12,sizeEnd:2,speed:150,speedVariance:60,lifetime:.35,lifetimeVariance:.1,color:"#4488ff",colorEnd:"#2244aa",opacity:1,opacityEnd:0,gravity:200,spread:120,direction:[0,0,1],texture:"circle",renderMode:"billboard",lengthFactor:3,trailLength:10,emitterShape:"point",emitterRadius:1,orbitalForce:0,drag:0,emissionMode:"burst",emissionRate:20,duration:1})}function Wl(){return{name:document.getElementById("vfx-ed-name").value||"新特效",particles:{count:parseInt(document.getElementById("vfx-ed-count").value)||15,size:parseFloat(document.getElementById("vfx-ed-size").value)||12,sizeEnd:parseFloat(document.getElementById("vfx-ed-size-end").value)||2,speed:parseFloat(document.getElementById("vfx-ed-speed").value)||150,speedVariance:parseFloat(document.getElementById("vfx-ed-speed-var").value)||60,lifetime:parseFloat(document.getElementById("vfx-ed-life").value)||.35,lifetimeVariance:parseFloat(document.getElementById("vfx-ed-life-var").value)||.1,color:document.getElementById("vfx-ed-color").value,colorEnd:document.getElementById("vfx-ed-color-end").value,opacity:parseFloat(document.getElementById("vfx-ed-opacity").value)??1,opacityEnd:parseFloat(document.getElementById("vfx-ed-opacity-end").value)??0,gravity:parseFloat(document.getElementById("vfx-ed-gravity").value)||0,spread:parseFloat(document.getElementById("vfx-ed-spread").value)||120,direction:[parseFloat(document.getElementById("vfx-ed-dir-x").value)||0,parseFloat(document.getElementById("vfx-ed-dir-y").value)||1,parseFloat(document.getElementById("vfx-ed-dir-z").value)||0],texture:document.getElementById("vfx-ed-texture").value||"circle",renderMode:document.getElementById("vfx-ed-render-mode").value||"billboard",lengthFactor:parseFloat(document.getElementById("vfx-ed-length-factor").value)||3,trailLength:parseFloat(document.getElementById("vfx-ed-trail-length").value)||10,emitterShape:document.getElementById("vfx-ed-emitter-shape").value||"point",emitterRadius:parseFloat(document.getElementById("vfx-ed-emitter-radius").value)||1,orbitalForce:parseFloat(document.getElementById("vfx-ed-orbital").value)||0,drag:parseFloat(document.getElementById("vfx-ed-drag").value)||0,emissionMode:document.getElementById("vfx-ed-emission-mode").value||"burst",emissionRate:parseFloat(document.getElementById("vfx-ed-emission-rate").value)||20,duration:parseFloat(document.getElementById("vfx-ed-duration").value)||1}}}document.getElementById("vfx-ed-preview").addEventListener("click",()=>{const{particles:r}=Wl(),e=new C(0,50,0),t=new C(r.direction[0],r.direction[1],r.direction[2]).normalize();ni.spawnFromConfig(r,e,t.lengthSq()>0?t:void 0)});function u0(){ua&&(clearInterval(ua),ua=null,document.getElementById("vfx-ed-loop").style.background="#555")}document.getElementById("vfx-ed-loop").addEventListener("click",()=>{if(ua)u0();else{const r=document.getElementById("vfx-ed-loop");r.style.background="#45a049",ua=setInterval(()=>{const{particles:i}=Wl(),s=new C(0,50,0),a=new C(i.direction[0],i.direction[1],i.direction[2]).normalize();ni.spawnFromConfig(i,s,a.lengthSq()>0?a:void 0)},1e3);const{particles:e}=Wl(),t=new C(0,50,0),n=new C(e.direction[0],e.direction[1],e.direction[2]).normalize();ni.spawnFromConfig(e,t,n.lengthSq()>0?n:void 0)}});document.getElementById("vfx-ed-save").addEventListener("click",async()=>{const r=Wl(),e=r.name||"新特效",t=JSON.stringify({id:e,name:r.name,particles:r.particles},null,2),n=new Blob([t],{type:"application/json"});if("showSaveFilePicker"in window)try{const s=await(await window.showSaveFilePicker({suggestedName:`${e}.vfx.json`,types:[{description:"VFX Preset",accept:{"application/json":[".vfx.json",".json"]}}]})).createWritable();await s.write(n),await s.close(),Vn.set(e,r),ni.registerPreset(e,r),Gl(),ao(),ns.value=e,bn(`✅ 特效已存檔：${e}.vfx.json`)}catch(i){i.name!=="AbortError"&&alert("存檔失敗："+i.message)}else{const i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download=`${e}.vfx.json`,s.click(),URL.revokeObjectURL(i),Vn.set(e,r),ni.registerPreset(e,r),Gl(),ao(),ns.value=e,bn(`✅ 特效已下載：${e}.vfx.json`)}});const Sl=document.getElementById("vfx-ed-file-input");document.getElementById("vfx-ed-load-file").addEventListener("click",()=>{Sl.click()});Sl.addEventListener("change",async()=>{var e;const r=(e=Sl.files)==null?void 0:e[0];if(r){try{const t=await r.text(),n=JSON.parse(t),i=n.id||n.name||r.name.replace(/\.vfx\.json$|\.json$/,""),s={name:n.name||i,particles:n.particles};Vn.set(i,s),ni.registerPreset(i,s),Gl(),ao(),mf(i,s.name,s.particles),bn(`✅ 已載入特效：${s.name}`)}catch{alert("載入失敗：檔案格式不正確")}Sl.value=""}});document.getElementById("vfx-ed-delete").addEventListener("click",()=>{var e;const r=ns.value;if(r){if(!Vn.has(r)){alert("內建特效無法刪除");return}confirm(`確定要刪除「${(e=Vn.get(r))==null?void 0:e.name}」嗎？`)&&(Vn.delete(r),Gl(),ao(),d0(),bn(`🗑️ 已刪除特效：${r}`))}});const gf=document.getElementById("st-tag"),f0=document.getElementById("st-spawn-config"),p0=document.getElementById("st-item-config"),yf=document.getElementById("st-zombie-type"),_f=document.getElementById("st-wave"),xf=document.getElementById("st-count"),vf=document.getElementById("st-interval"),Mf=document.getElementById("st-max-alive"),bf=document.getElementById("st-item-type"),Sf=document.getElementById("st-item-radius"),wf=document.getElementById("st-item-respawn");function qE(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);if(!e)return;const t=e.spinningTopTag||"none";gf.value=t,f0.style.display=t==="spawnPoint"?"":"none",p0.style.display=t==="itemZone"?"":"none",e.spawnConfig&&(yf.value=e.spawnConfig.zombieType||"zombie_small",_f.value=String(e.spawnConfig.wave??1),xf.value=String(e.spawnConfig.count??1),vf.value=String(e.spawnConfig.interval??2),Mf.value=String(e.spawnConfig.maxAlive??5)),e.itemZoneConfig&&(bf.value=e.itemZoneConfig.itemType||"coin",Sf.value=String(e.itemZoneConfig.radius??30),wf.value=String(e.itemZoneConfig.respawnTime??10)),rc(r,e)}function ZE(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);if(!e)return;const t=gf.value;e.spinningTopTag=t==="none"?void 0:t,f0.style.display=t==="spawnPoint"?"":"none",p0.style.display=t==="itemZone"?"":"none",t==="spawnPoint"&&!e.spawnConfig&&(e.spawnConfig={zombieType:"zombie_small",wave:1,count:1,interval:2,maxAlive:5}),t==="itemZone"&&!e.itemZoneConfig&&(e.itemZoneConfig={itemType:"coin",radius:30,respawnTime:10}),rc(r,e)}function xo(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);e&&(e.spawnConfig={zombieType:yf.value,wave:parseInt(_f.value)||1,count:parseInt(xf.value)||1,interval:parseFloat(vf.value)||2,maxAlive:parseInt(Mf.value)||5},rc(r,e))}function Ef(){const r=L.getSelectedId();if(!r)return;const e=L.getMeta(r);e&&(e.itemZoneConfig={itemType:bf.value,radius:parseFloat(Sf.value)||30,respawnTime:parseFloat(wf.value)||10},rc(r,e))}function rc(r,e){var i,s;const t=L.getObjects().get(r)||null,n=!!(e.modelPath&&e.modelPath!=="__empty__"&&e.modelPath!=="__camera__");ME.update(r,t,e.spinningTopTag,{zombieType:(i=e.spawnConfig)==null?void 0:i.zombieType,itemRadius:(s=e.itemZoneConfig)==null?void 0:s.radius,hasModel:n,boundaryRadius:e.scale?Math.max(e.scale[0],e.scale[2])*50:300})}gf.addEventListener("change",ZE);yf.addEventListener("change",xo);_f.addEventListener("change",xo);xf.addEventListener("change",xo);vf.addEventListener("change",xo);Mf.addEventListener("change",xo);bf.addEventListener("change",Ef);Sf.addEventListener("change",Ef);wf.addEventListener("change",Ef);window.__refreshSTPanel=qE;async function JE(){const r=L.getAllMeta(),e=document.getElementById("scene-name").value||"untitled",t=r.find(g=>g.spinningTopTag==="boundary"),n=t?Math.max(Math.abs(t.scale[0]),Math.abs(t.scale[2]))*50:480,i=t?t.position:[960,540,0],s={type:"capsule",bounds:{shape:"capsule",capsuleLeftX:540,capsuleRightX:1380,capsuleRadius:n,centerY:i[1]||540,center:i},canvas:{width:1920,height:1080}},a=[{id:"spawn_p1",position:[129,885,0],label:"P1 (左下)"},{id:"spawn_p2",position:[1791,885,0],label:"P2 (右下)"},{id:"spawn_p3",position:[129,199,0],label:"P3 (左上)"},{id:"spawn_p4",position:[1791,199,0],label:"P4 (右上)"}],o=[{id:"pad_zone_1",position:[360,840,0],note:"左側發射台"},{id:"pad_zone_2",position:[1560,240,0],note:"右側發射台"},{id:"pad_zone_3",position:[960,540,0],note:"中央發射台"}],l=r.filter(g=>g.spinningTopTag==="spawnPoint"&&g.spawnConfig).map(g=>({id:g.id,position:g.position,rotation:g.rotation,zombieType:g.spawnConfig.zombieType,spawnConfig:{wave:g.spawnConfig.wave,count:g.spawnConfig.count,interval:g.spawnConfig.interval,maxAlive:g.spawnConfig.maxAlive}})),c=r.filter(g=>g.spinningTopTag==="obstacle").map(g=>{var m,x,_,v;return{id:g.id,position:g.position,size:[((x=(m=g.collider)==null?void 0:m.sizeOverride)==null?void 0:x[0])??g.scale[0]*100,((v=(_=g.collider)==null?void 0:_.sizeOverride)==null?void 0:v[2])??g.scale[2]*100],rotation:g.rotation[1]||0,durability:5}}),d={mode:c.length>0?"fixed":"random",count:c.length>0?c.length:3,sizeRange:{minW:75,maxW:115,minH:75,maxH:115},constraints:{minDistFromSpawn:350,minDistFromLaunchPad:220,minDistBetween:100,mustBeInsideArena:!0,arenaMargin:40},fixed:c},h=r.filter(g=>g.spinningTopTag==="itemZone"&&g.itemZoneConfig).map(g=>({id:g.id,position:g.position,radius:g.itemZoneConfig.radius,itemType:g.itemZoneConfig.itemType,respawnTime:g.itemZoneConfig.respawnTime})),u={position:[960,540,0],zoom:1,followTarget:"center"},f={version:1,name:e,description:`場景「${e}」由編輯器匯出`,arena:s,playerSpawns:a,launchPadZones:o,obstacles:d,spawnPoints:l,itemZones:h,camera:u},p=JSON.stringify(f,null,2),y=new Blob([p],{type:"application/json"});if("showSaveFilePicker"in window)try{const m=await(await window.showSaveFilePicker({suggestedName:`${e}.spinningtop.json`,types:[{description:"SpinningTop Scene",accept:{"application/json":[".json"]}}]})).createWritable();await m.write(y),await m.close(),bn(`✅ SpinningTop 場景已匯出：${e}`)}catch(g){g.name!=="AbortError"&&alert("匯出失敗："+g.message)}else{const g=URL.createObjectURL(y),m=document.createElement("a");m.href=g,m.download=`${e}.spinningtop.json`,m.click(),URL.revokeObjectURL(g),bn(`✅ SpinningTop 場景已下載：${e}`)}}document.getElementById("export-spinningtop-btn").addEventListener("click",JE);
