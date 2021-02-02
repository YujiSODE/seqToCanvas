/*seqToCanvas
* seqToCanvas.js
*===================================================================
*	Copyright (c) 2021 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
* Tool to convert text or hexadecimal sequence into canvas image as generative art.
*
* === Synopsis ===
* - `seqToCanvas(srcCanvasId,seq);`
* - `seqToCanvas.fromText(srcCanvasId,text);`
*
*  	--- Parameters ---
*  	- srcCanvasId: id of target canvas element
*  	- seq: a hexadecimal number sequence
*  	- text: a string
*
* `seqToCanvas` converts hexadecimal sequence into canvas image.
* `seqToCanvas.fromText` converts string into canvas image.
*===================================================================
*/
//
//it converts hexadecimal sequence into canvas image
function seqToCanvas(srcCanvasId,seq){
	// - srcCanvasId: id of target canvas element
	// - seq: a hexadecimal sequence
	//===
	//
	seq=seq.toLowerCase();
	//
	let slf=window,ctx=slf.document.getElementById(srcCanvasId).getContext('2d'),
		W=ctx.canvas.width,H=ctx.canvas.height,
		dW=Math.floor(W/15),dH=Math.floor(H/15),
		X0=0.0,Y0=0.0,
		el0=0,el1=0,el2=0,el3=0,el4=0,
		arr=seq.split(''),L=arr.length,
		/* === background color === */
		L0=seq.length,
		L0_mid=Math.floor(L0*0.5),
		L0_25=Math.floor(L0_mid*0.5),
		L0_75=Math.floor(L0_mid*1.5),
		/* === methods group: G === */
		G={
			0:()=>{},1:()=>{},2:()=>{},3:()=>{},4:()=>{},
			5:()=>{},6:()=>{},7:()=>{},8:()=>{},9:()=>{},
			a:()=>{},b:()=>{},c:()=>{},d:()=>{},e:()=>{},
			f:()=>{}
		};
	//
	dW=dW<1?1:dW;
	dH=dH<1?1:dH;
	//
	//background color
	ctx.fillStyle=`#${seq[L0_25]}${seq[L0_mid]}${seq[L0_75]}`;
	ctx.fillRect(0,0,W,H);
	//
	//-------------------------------------------------------
	G[0]=(e1,e2,e3,e4)=>{
		//line
		//(e1,e2) -> (e3,e4), and then (X0,Y0) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#00${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(E1*dW,E2*dH);
		ctx.lineTo(E3*dW,E4*dH);
		//
		X0=E3*dW;
		Y0=E4*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G[1]=(e1,e2,e3,e4)=>{
		//line
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (+,+)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#11${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.lineTo(X0+(E1+E3)*0.5*dW,Y0+(E2+E4)*0.5*dH);
		//
		X0+=(E1+E3)*0.5*dW;
		Y0+=(E2+E4)*0.5*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G[2]=(e1,e2,e3,e4)=>{
		//line
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (-,+)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#22${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.lineTo(X0-(E1+E3)*0.5*dW,Y0+(E2+E4)*0.5*dH);
		//
		X0+=-(E1+E3)*0.5*dW;
		Y0+=(E2+E4)*0.5*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G[3]=(e1,e2,e3,e4)=>{
		//line
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (+,-)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#33${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.lineTo(X0+(E1+E3)*0.5*dW,Y0-(E2+E4)*0.5*dH);
		//
		X0+=(E1+E3)*0.5*dW;
		Y0+=-(E2+E4)*0.5*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G[4]=(e1,e2,e3,e4)=>{
		//line
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (-,-)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#44${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.lineTo(X0-(E1+E3)*0.5*dW,Y0-(E2+E4)*0.5*dH);
		//
		X0+=-(E1+E3)*0.5*dW;
		Y0+=-(E2+E4)*0.5*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//-------------------------------------------------------
	//
	G[5]=(e1,e2,e3,e4)=>{
		//rectangular chain
		//(e1,e2) -> (e3,e4), and then (X0,Y0) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x=E1*dW,y=E2*dH,
			max=Math.max(E1,E2,E3,E4);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#55${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		while(i<max){
			ctx.rect(x,y,E3*dW/max,E4*dH/max);
			x+=E3*dW/max;
			y+=E4*dH/max;
			i+=1;
		}
		X0=x;
		Y0=y;
		//
		ctx.stroke();
		E1=E2=E3=E4=i=x=y=max=null;
	};
	//
	G[6]=(e1,e2,e3,e4)=>{
		//rectangular chain
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (+,+)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x=X0,y=Y0,
			max=Math.max(E1,E2,E3,E4);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#66${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		while(i<max){
			ctx.rect(x,y,(E1+E3)*0.5*dW/max,(E2+E4)*0.5*dH/max);
			x+=(E1+E3)*0.5*dW/max;
			y+=(E2+E4)*0.5*dH/max;
			i+=1;
		}
		X0=x;
		Y0=y;
		//
		ctx.stroke();
		E1=E2=E3=E4=i=x=y=max=null;
	};
	//
	G[7]=(e1,e2,e3,e4)=>{
		//rectangular chain
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (-,+)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x=X0,y=Y0,
			max=Math.max(E1,E2,E3,E4);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#77${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		while(i<max){
			ctx.rect(x,y,-(E1+E3)*0.5*dW/max,(E2+E4)*0.5*dH/max);
			x+=-(E1+E3)*0.5*dW/max;
			y+=(E2+E4)*0.5*dH/max;
			i+=1;
		}
		X0=x;
		Y0=y;
		//
		ctx.stroke();
		E1=E2=E3=E4=i=x=y=max=null;
	};
	//
	G[8]=(e1,e2,e3,e4)=>{
		//rectangular chain
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (+,-)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x=X0,y=Y0,
			max=Math.max(E1,E2,E3,E4);
		//
		ctx.beginPath();
			//ctx.strokeStyle=`#8${e1}${e2}`;
		ctx.strokeStyle=`#88${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		while(i<max){
			ctx.rect(x,y,(E1+E3)*0.5*dW/max,-(E2+E4)*0.5*dH/max);
			x+=(E1+E3)*0.5*dW/max;
			y+=-(E2+E4)*0.5*dH/max;
			i+=1;
		}
		X0=x;
		Y0=y;
		//
		ctx.stroke();
		E1=E2=E3=E4=i=x=y=max=null;
	};
	//
	G[9]=(e1,e2,e3,e4)=>{
		//rectangular chain
		//(X0,Y0) -> (X0+dX,Y0+dY)
		//(dX,dY) = (-,-)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x=X0,y=Y0,
			max=Math.max(E1,E2,E3,E4);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#99${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		while(i<max){
			ctx.rect(x,y,-(E1+E3)*0.5*dW/max,-(E2+E4)*0.5*dH/max);
			x+=-(E1+E3)*0.5*dW/max;
			y+=-(E2+E4)*0.5*dH/max;
			i+=1;
		}
		X0=x;
		Y0=y;
		//
		ctx.stroke();
		E1=E2=E3=E4=i=x=y=max=null;
	};
	//-------------------------------------------------------
	//
	G['a']=(e1,e2,e3,e4)=>{
		//quadratic Bézier curve
		//(e1,e2) -> (e3-e1,e4-e2) -> (e3,e4), and then (X0,Y0) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#aa${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(E1*dW,E2*dH);
		ctx.quadraticCurveTo((E3-E1)*dW,(E4-E2)*dH,E3*dW,E4*dH);
		//
		X0=E3*dW;
		Y0=E4*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G['b']=(e1,e2,e3,e4)=>{
		//quadratic Bézier curve
		//(X0,Y0) -> (X0+e1,Y0+e2) -> (X0+dX,Y0+dY)
		//(dX,dY) = (+,+)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#bb${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.quadraticCurveTo(X0+E1*dW,Y0+E2*dH,X0+E3*dW,Y0+E4*dH);
		//
		X0+=E3*dW;
		Y0+=E4*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G['c']=(e1,e2,e3,e4)=>{
		//quadratic Bézier curve
		//(X0,Y0) -> (X0+e1,Y0+e2) -> (X0+dX,Y0+dY)
		//(dX,dY) = (-,+)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#cc${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.quadraticCurveTo(X0+E1*dW,Y0+E2*dH,X0-E3*dW,Y0+E4*dH);
		//
		X0+=-E3*dW;
		Y0+=E4*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G['d']=(e1,e2,e3,e4)=>{
		//quadratic Bézier curve
		//(X0,Y0) -> (X0+e1,Y0+e2) -> (X0+dX,Y0+dY)
		//(dX,dY) = (+,-)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#dd${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.quadraticCurveTo(X0+E1*dW,Y0+E2*dH,X0+E3*dW,Y0-E4*dH);
		//
		X0+=E3*dW;
		Y0+=-E4*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//
	G['e']=(e1,e2,e3,e4)=>{
		//quadratic Bézier curve
		//(X0,Y0) -> (X0+e1,Y0+e2) -> (X0+dX,Y0+dY)
		//(dX,dY) = (-,-)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#ee${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.quadraticCurveTo(X0+E1*dW,Y0+E2*dH,X0-E3*dW,Y0-E4*dH);
		//
		X0+=-E3*dW;
		Y0+=-E4*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//-------------------------------------------------------
	//
	G['f']=(e1,e2,e3,e4)=>{
		//rectangular area
		//(e1,e2) -> (e1+e3,e2+e4), and then (X0,Y0) -> (e1+(e3)/2,e2+(e4)/2)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16);
		//
		ctx.beginPath();
		ctx.strokeStyle=`#ff${e1}${e2}${e3}${e4}`;
		ctx.lineWidth=1.0;
		//
		ctx.moveTo(X0,Y0);
		ctx.rect(E1*dW,E2*dH,E3*dW,E4*dH);
		//
		X0=(E1+E3*0.5)*dW;
		Y0=(E2+E4*0.5)*dH;
		//
		ctx.stroke();
		E1=E2=E3=E4=null;
	};
	//-------------------------------------------------------
	//
	//L is arr.length
	while(L>0){
		el0=arr.shift();
		el0=!el0?0:el0;
		el1=arr.shift();
		el1=!el1?0:el1;
		el2=arr.shift();
		el2=!el2?0:el2;
		el3=arr.shift();
		el3=!el3?0:el3;
		el4=arr.shift();
		el4=!el4?0:el4;
		//
		G[el0](el1,el2,el3,el4);
		//
		L=arr.length
	}
	//
	slf=ctx=W=H=dW=dH=X0=Y0=el0=el1=el2=el3=el4=arr=L=L0=L0_mid=L0_25=L0_75=G=null;
};
//
//it converts string into canvas image
seqToCanvas.fromText=(srcCanvasId,text)=>{
	// - srcCanvasId: id of target canvas element
	// - text: a string
	//===
	let i=0,l=text.length,seq='';
	while(i<l){
		seq+=text.codePointAt(i).toString(16);
		i+=1;
	}
	//
	seqToCanvas(srcCanvasId,seq);
	i=l=seq=null;
};
//===================================================================
/*
* *** LICENSE ***
* MIT License
*
* Copyright (c) 2021 Yuji Sode
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
