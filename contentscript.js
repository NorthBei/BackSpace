var input_types = ["text","password","number","search","url","email","tel","date","month","week","time","datetime-local"];

document.addEventListener("keydown",function(event){
	
	if(event.key == "Backspace"){
		var focusObj = document.activeElement;
		
		if(focusObj instanceof HTMLInputElement){
			for(var i = 0;i<input_types.length ;i++){
				if(focusObj.type == input_types[i]){
					return;
				}
			}
		}
		
		var cursor = window.getComputedStyle(focusObj, null).getPropertyValue("cursor");
		
		if( (focusObj instanceof HTMLTextAreaElement) || (cursor == "text") || (focusObj.isContentEditable) ){
			return;
		}
		
		event.preventDefault();
		event.stopPropagation();
		window.history.back();
	}
},true);