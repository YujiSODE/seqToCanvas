/*seqToCanvas
* index_main.js
*===================================================================
*	Copyright (c) 2021 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
*/
(()=>{
	let slf=window.document,cId='outputCvs',C=slf.getElementById(cId),
		SS=capturingCanvas(C,slf.getElementById('downloadDiv')),text='',
		outputType=slf.getElementById('seqToCanvas_type'),outputIndex=0,
		OUTPUT=(txt)=>{
			//=== output type: 'Line', output index 0 ===
			if(!(outputIndex!=0)){
				seqToCanvas.fromText(cId,txt);
			}
			//=== output type: 'Arc', output index 1 ===
			if(!(outputIndex!=1)){
				seqToCanvas_arc.fromText(cId,txt);
			}
			//=== output type: 'Dot', output index 2 ===
			if(!(outputIndex!=2)){
				seqToCanvas_dot.fromText(cId,txt);
			}
		};
	//
	//form event
	slf.getElementById('seqToCanvasForm').addEventListener('change',()=>{
		//
		text=slf.getElementById('textInput').value;
		text=!text?'\x00':text;
		//
		C.width=slf.getElementById('cWidth').value;
		C.height=slf.getElementById('cHeight').value;
		//
		OUTPUT(text);
	},false);
	//
	//clearing text input
	slf.getElementById('clearB').addEventListener('click',()=>{
		slf.getElementById('textInput').value='';
		C.width=slf.getElementById('cWidth').value;
		C.height=slf.getElementById('cHeight').value;
	},false);
	//
	//changing output type
	slf.getElementById('changeB').addEventListener('click',()=>{
		//
		//output types
		let typeList=['Line','Arc','Dot'],L=typeList.length,idx=(+outputIndex)+1;
		//
		idx=idx<L?idx:0;
		outputIndex=idx;
		outputType.textContent=typeList[idx];
		//
		text=slf.getElementById('textInput').value;
		text=!text?'\x00':text;
		//
		C.width=slf.getElementById('cWidth').value;
		C.height=slf.getElementById('cHeight').value;
		//
		OUTPUT(text);
	},false);
	//
	//capturing canvas
	slf.getElementById('captureB').addEventListener('click',SS,false);
})();
