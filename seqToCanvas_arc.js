/*seqToCanvas
* seqToCanvas_arc.js
*===================================================================
*	Copyright (c) 2021 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
* Tool to convert text or hexadecimal sequence into canvas image as generative art.
*
* === Synopsis ===
* - `seqToCanvas_arc(srcCanvasId,seq);`
* - `seqToCanvas_arc.fromText(srcCanvasId,text);`
*
*  	--- Parameters ---
*  	- srcCanvasId: id of target canvas element
*  	- seq: a hexadecimal number sequence
*  	- text: a string
*
* `seqToCanvas_arc` converts hexadecimal sequence into canvas image.
* `seqToCanvas_arc.fromText` converts string into canvas image.
*===================================================================
*/
//
//it converts hexadecimal sequence into canvas image
function seqToCanvas_arc(srcCanvasId,seq){
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
		/* === path === */
		/* PATH takes integer values from -1 to 14 */
		PATH=-1,PATH_color='#000',
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
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=0;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#00${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[1]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=1;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#11${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[2]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=2;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#22${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[3]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=3;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#33${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[4]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=4;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#44${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//-------------------------------------------------------
	//
	G[5]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=5;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#55${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[6]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=6;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#66${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[7]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=7;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#77${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[8]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=8;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#88${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G[9]=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=9;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#99${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//-------------------------------------------------------
	//
	G['a']=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=10;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#aa${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G['b']=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=11;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#bb${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G['c']=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=12;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#cc${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G['d']=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=13;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#dd${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//
	G['e']=(e1,e2,e3,e4)=>{
		//arc path
		//
		//1) first control point: (Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)
		//2) second control point: (Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)
		//3) radius: r = (e1+e2+e3+e4)/8
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			r=(E1+E2+E3+E4)*0.125*dW,
			index=14;
		//
		r=r>0?r:0.5;
		//
		//when there is no path
		if(PATH<0){
			PATH=index;
			PATH_color=`#ee${e1}${e2}${e3}${e4}`;
			//
			ctx.beginPath();
			//
			ctx.moveTo(E1*dW,E2*dH);
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
		//when there is opened path
		}else if(PATH<index||!(PATH%(index+1)!=0)){
			//=== closing the current path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			//
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}else{
			//=== adding a path ===
			ctx.arcTo((E1+E3)*0.5*dW,(E2+E4)*0.5*dH,(E1+E3)*0.25*dW,(E2+E4)*0.25*dH,r);
			PATH=index;
		}
		//
		E1=E2=E3=E4=r=index=null;
	};
	//-------------------------------------------------------
	//
	G['f']=(e1,e2,e3,e4)=>{
		//elliptical arc
		//
		//1) center: (Xc, Yc) = (e1, e2)
		//2) semi-major axis: rX = (e1+e3)/2
		//3) semi-minor axis: rY = (e2+e4)/2
		//4) rotation: Math.atan(dy/dx) where dx = e3-e1 and dy = e4-e2
		//
		//this method closes the current path
		//
		let E1=+parseInt(e1,16),
			E2=+parseInt(e2,16),
			E3=+parseInt(e3,16),
			E4=+parseInt(e4,16),
			rX=(E1+E3)*0.5*dW,
			rY=(E2+E4)*0.5*dH,
			dx=(E3-E1)*dW,
			dy=(E4-E2)*dH;
		//
		rX=rX>0?rX:0.5*dW;
		rY=rY>0?rY:0.5*dH;
		dx=dx!=0?dx:Number.EPSILON;
		dy=dy!=0?dy:Number.EPSILON;
		//
		//when there is opened path
		if(PATH>-1){
			//=== closing the current path ===
			ctx.closePath();
			ctx.fillStyle=PATH_color;
			ctx.fill();
			//
			PATH=-1;
		}
		//
		ctx.fillStyle=`#ff${e1}${e2}${e3}${e4}55`;
		//
		ctx.beginPath();
		ctx.ellipse(E1*dW,E2*dH,rX,rY,Math.atan(dy/dx),0,2*Math.PI);
		ctx.fill();
		//
		//reset path
		PATH=-1;
		PATH_color='#000f',
		//
		E1=E2=E3=E4=rX=rY=dx=dy=null;
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
	//when there is opened path
	if(PATH>-1){
		//=== closing the current path ===
		ctx.closePath();
		ctx.fillStyle=PATH_color+'55';
		ctx.fill();
	}
	//
	//reset path
	PATH=-1;
	PATH_color='#000f',
	slf=ctx=W=H=dW=dH=X0=Y0=el0=el1=el2=el3=el4=arr=L=PATH=PATH_color=L0=L0_mid=L0_25=L0_75=G=null;
};
//
//it converts string into canvas image
seqToCanvas_arc.fromText=(srcCanvasId,text)=>{
	// - srcCanvasId: id of target canvas element
	// - text: a string
	//===
	let i=0,l=text.length,seq='';
	while(i<l){
		seq+=text.codePointAt(i).toString(16);
		i+=1;
	}
	//
	seqToCanvas_arc(srcCanvasId,seq);
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
