document.addEventListener("keydown",function(event){
	console.log(event.key);
	if(event.key == "Backspace"){
		var focusObj = document.activeElement;
		console.log(focusObj);
		if( (focusObj instanceof HTMLInputElement) && (focusObj.type == "number" || focusObj.type == "text" || focusObj.type == "password" || focusObj.type == "search" || focusObj.type == "email" || focusObj.type == "tel" || focusObj.type == "url") ){
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