# Change Log 
## [Unreleased]

## [2.0 beta] - 2021-02-19
## Changed
- [`index_main.js`] lines 43-63:  
  Changes to use 2 or more codes to draw  
  >` 	//`  
  >` 	//changing output type`  
  >` 	slf.getElementById('changeB').addEventListener('click',()=>{`  
  >` 		//`  
  >` 		//output types`  
  >` 		let typeList=['Line','Arc'],L=0,idx=(+outputIndex)+1;`  
  >` 		//`  
  >` 		L=typeList.length;`  
  >` 		//`  
  >` 		idx=idx<L?idx:0;`  
  >` 		outputIndex=idx;`  
  >` 		outputType.textContent=typeList[idx];`  
  >` 		//`  
  >` 		text=slf.getElementById('textInput').value;`  
  >` 		text=!text?'\x00':text;`  
  >` 		//`  
  >` 		C.width=slf.getElementById('cWidth').value;`  
  >` 		C.height=slf.getElementById('cHeight').value;`  
  >` 		//`  
  >` 		OUTPUT(text);`  
  >` 	},false);`

- [`index_main.js`] line 34:  
  Changes to use 2 or more codes to draw  
  >` 		OUTPUT(text);`

- [`index_main.js`] lines 11-23:  
  Changes to use 2 or more codes to draw  
  >` 	let slf=window.document,cId='outputCvs',C=slf.getElementById(cId),`  
  >` 		SS=capturingCanvas(C,slf.getElementById('downloadDiv')),text='',`  
  >` 		outputType=slf.getElementById('seqToCanvas_type'),outputIndex=0,`  
  >` 		OUTPUT=(txt)=>{`  
  >` 			//=== output type: 'Line', output index 0 ===`  
  >` 			if(!(outputIndex!=0)){`  
  >` 				seqToCanvas.fromText(cId,txt);`  
  >` 			}`  
  >` 			//=== output type: 'Arc', output index 1 ===`  
  >` 			if(!(outputIndex!=1)){`  
  >` 				seqToCanvas_arc.fromText(cId,txt);`  
  >` 			}`  
  >` 		};`

- [`index.html`] lines 57-58:  
  Changes to use 2 or more codes to draw  
  >` 		<!-- button to change output type -->`  
  >` 		<button id='changeB'>Change output type</button>`

- [`index.html`] line 29:  
  Changes to use 2 or more codes to draw  
  >` 		<h1>seqToCanvas [type:<code id='seqToCanvas_type'>Line</code>]</h1>`

## Added
- [`index.html`] line 26:
  >` 		<script type='text/javascript' src='seqToCanvas_arc.js'></script>`

## [2.0 beta] - 2021-02-18
## Fixed
- [`algorithm.md`] lines 28-29:
  >`     If it satisfies condition `f0<f||!(f0%(f+1)!=0)`, it closes the current path. `  
  >`     `f` is the current method which is called after methhod `f0`.  `

## Added
- [`algorithm.md`] lines 14-31: description of `seqToCanvas_arc.js`
- [`index_main_arc.js`]: html interface script for `seqToCanvas_arc.js`
- [`index_arc.html`]: html interface for `seqToCanvas_arc.js`
- [`seqToCanvas_arc.js`]: main script using arc

## Released: [1.01] - 2021-02-18
## [1.01] - 2021-02-18
## Changed
- [`README.md`] line 14:
  >` ### [Algorithm](algorithm.md)`

## Added
- [`algorithm.md`]: description of algorithm

## [1.01] - 2021-02-16
## Added
- [`README.md`] lines 14-17:
  >`### Algorithm`  
  >`Main algorithm is composed of 16 internal methods to draw on a canvas element.  `  
  >`These methods take the form of function: `f(e1, e2, e3, e4)` where `f, e1, e2, e3` and `e4` are single hexadecimal digits.`  
  >

## Released: [1.0] - 2021-02-10
## [1.0] - 2021-02-09
## Changed
- [`index.html`] lines 31-32:

  >		This tool describes another aspect of text.<br>
  >		<a href='https://github.com/YujiSODE/seqToCanvas/wiki'>Examples</a></p>


## [1.0] - 2021-02-08
## Added
- [`README.md`] line 4:
  >`Wiki: https://github.com/YujiSODE/seqToCanvas/wiki  `

## Released: [0.11 beta] - 2021-02-07
## [0.11 beta] - 2021-02-06
## Added
- [`README.md`] line 8:
  >`![img20210206_seqToCanvas](https://user-images.githubusercontent.com/19919184/107120194-81cac280-68cf-11eb-9a7c-37eea0ab5645.png)`

## Changed
- [`README.md`] line 1:
  >` # ![seqToCanvas_js_v011beta_16x16](seqToCanvas_icon.png)seqToCanvas`

## Added
- [`seqToCanvas_icon.png`]: icon for `index.html`

## Fixed and Added
- [`index.html`] lines 2-8:  
  >`<html lang='en'>`  
  >`	<head>`  
  >`		<meta charset='utf-8'>`  
  >`		<!-- icon: seqToCanvas.js [0.11 beta] -->`  
  >`		<link rel='icon' href='seqToCanvas_icon.png'>`  
  >`		<meta name='author' content='Yuji Sode'>`  
  >`		<meta name='description' content='Tool to convert text or hexadecimal sequence into canvas image as generative art.'>`  

## [0.11 beta] - 2021-02-05
## Fixed
- [`seqToCanvas.js`] line 459:  
  removed  
  >` 		ctx.moveTo(X0,Y0);`

## Released: [0.1 beta] - 2021-02-02
## [0.1 beta] - 2021-02-02
