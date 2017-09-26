var navigatorMessageMap = {
	'mac': 'macos',
	'iphone': 'macos',
	'win': 'windows'
};

var platform = navigator.platform.toLowerCase(); //win32

for (var key in navigatorMessageMap) {  //mac; iphone; win
	key = key.toLowerCase();  
	var version = navigatorMessageMap[key];  //macos; macos; windows

	if (platform.indexOf(key) >= 0){   //-1, -1, 0
		message = document.getElementsByClassName('download-message'); // 2 divs
		for (var i = 0; i <= message.length; i++){
			if (message[i].getAttribute("data-version") !== version){
				message[i].style.display = "none";
			}
		}
		//
	}
}