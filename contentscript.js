document.addEventListener("keydown",function(event){
	
	if(event.key == "Backspace"){
		var focusObj = document.activeElement;
		
		if( (focusObj instanceof HTMLInputElement) && (focusObj.type == "text" || focusObj.type == "password" ) ){
			return;
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