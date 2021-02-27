/*seqToCanvas
* seqToCanvas_dot.js
*===================================================================
*	Copyright (c) 2021 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
* Tool to convert text or hexadecimal sequence into canvas image as generative art.
*
* === Synopsis ===
* - `seqToCanvas_dot(srcCanvasId,seq);`
* - `seqToCanvas_dot.fromText(srcCanvasId,text);`
*
*  	--- Parameters ---
*  	- srcCanvasId: id of target canvas element
*  	- seq: a hexadecimal number sequence
*  	- text: a string
*
* `seqToCanvas_dot` converts hexadecimal sequence into canvas image.
* `seqToCanvas_dot.fromText` converts string into canvas image.
*===================================================================
*/
//
//it converts hexadecimal sequence into canvas image
function seqToCanvas_dot(srcCanvasId,seq){
	// - srcCanvasId: id of target canvas element
	// - seq: a hexadecimal sequence
	//===
	//
	seq=seq.toLowerCase();
	//
	let slf=window,ctx=slf.document.getElementById(srcCanvasId).getContext('2d'),
		W=ctx.canvas.width,H=ctx.canvas.height,
		dW=Math.floor(W/15),dH=Math.floor(H/15),
		el0=0,el1=0,el2=0,el3=0,el4=0,
		arr=seq.split(''),L=arr.length,
		/* === background color === */
		L0=seq.length,
		L0_mid=Math.floor(L0*0.5),
		L0_25=Math.floor(L0_mid*0.5),
		L0_75=Math.floor(L0_mid*1.5),
		/* dotted line path*/
		dottedLine=()=>{},
		/* half width of dotted line */
		dtl50W=Math.floor(dW),
		/* PI values */
		PI=Math.PI,PI2=PI/2,PI3=PI/3,PI4=PI/4,
		PI5=PI/5.0,PI6=PI/6,PI7=PI/7,PI8=PI/8,
		PI9=PI/9,PI10=PI/10,PI11=PI/11,PI12=PI/12,
		PI13=PI/13,PI14=PI/14,PI15=PI/15,
		/* function that returns half width of a dotted line path based on cosine value */
		cosF=()=>{},
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
	//
	//function that adds dotted line path to the current path
	dottedLine=(x0,y0,w50)=>{
		// - x0 and y0: relative midpoint coordinates of a dotted line path
		// - w50: half width of a dotted line path in pixels
		//     *definition*: w50 = (line length -1)/2
			/*
			*	[... -+-+-+-+-+- ...]
			*	[... 01010101010 ...]
			*	[<- w50 ->|<- w50 ->]
			*	          P0:(x0,y0)
			*/
		//
		let i=0,X=x0-0.5,Y=y0-0.5;
		//
		ctx.rect(X*dW,Y*dH,1,1);
		//
		while(i<w50*0.5){
			//
			//X+2
			ctx.rect(X*dW+2.0*(i+1),Y*dH,1,1);
			//
			//X-2
			ctx.rect(X*dW-2.0*(i+1),Y*dH,1,1);
			//
			i+=1;
		}
	};
	//-------------------------------------------------------
	//
	//function that returns half width of a dotted line path based on cosine value
	cosF=(w,theta)=>{
		// - w: width
		// - theta: angle in radians
		return (1.0+Math.cos(+theta))*w/2;
	};
	//-------------------------------------------------------
	//
	G[0]=(e1,e2,e3,e4)=>{
		//dot: dotted line size is constant
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#00${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,dtl50W);
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//-------------------------------------------------------
	//
	G[1]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#11${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[2]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#22${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI2));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[3]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#33${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI3));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[4]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#44${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI4));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[5]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#55${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI5));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[6]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#66${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI6));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[7]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#77${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI7));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[8]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#88${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI8));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G[9]=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#99${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI9));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G['a']=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#aa${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI10));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G['b']=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#bb${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI11));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G['c']=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#cc${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI12));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G['d']=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#dd${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI13));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G['e']=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#ee${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI14));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
	};
	//
	G['f']=(e1,e2,e3,e4)=>{
		//dot
		//(e1,e2) -> (e3,e4)
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			i=0,x0=E1,y0=E2,
			N=Math.abs(E4-E2),
			dx=E3-E1,dy=E4-E2;
		//
		N=Math.ceil(N!=0?N*dH:Number.EPSILON*dH);
		//
		ctx.beginPath();
		ctx.fillStyle=`#ff${e1}${e2}${e3}${e4}`;
		//
		while(i<N){
			dottedLine(x0+i*dx/N,y0+i*dy/N,cosF(dtl50W,i*PI15));
			i+=1;
		}
		//
		ctx.fill();
		E1=E2=E3=E4=i=x0=y0=null;
		N=dx=dy=null;
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
	slf=ctx=W=H=dW=dH=X0=Y0=el0=el1=el2=el3=el4=arr=L=L0=L0_mid=L0_25=L0_75=dottedLine=dtl50W=PI=PI2=PI3=PI4=PI5=PI6=PI7=PI8=PI9=PI10=PI11=PI12=PI13=PI14=PI15=cosF=G=null;
};
//
//it converts string into canvas image
seqToCanvas_dot.fromText=(srcCanvasId,text)=>{
	// - srcCanvasId: id of target canvas element
	// - text: a string
	//===
	let i=0,l=text.length,seq='';
	while(i<l){
		seq+=text.codePointAt(i).toString(16);
		i+=1;
	}
	//
	seqToCanvas_dot(srcCanvasId,seq);
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
