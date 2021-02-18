/*seqToCanvas
* index_main_arc.js
*===================================================================
*	Copyright (c) 2021 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
*/
(()=>{
	var slf=window.document,cId='outputCvs',C=slf.getElementById(cId),
		SS=capturingCanvas(C,slf.getElementById('downloadDiv')),text='';
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
		seqToCanvas_arc.fromText(cId,text);
	},false);
	//
	//capturing canvas
	slf.getElementById('captureB').addEventListener('click',SS,false);
	//
	//clearing text input
	slf.getElementById('clearB').addEventListener('click',()=>{
		slf.getElementById('textInput').value='';
		C.width=slf.getElementById('cWidth').value;
		C.height=slf.getElementById('cHeight').value;
	},false);
})();
