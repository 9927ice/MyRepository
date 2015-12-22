/**
 * 
 */

var isMobile = {
        Android: function () {
            return /Android/i.test(navigator.userAgent);
        },
        isX86: function () {
            if (navigator.platform.indexOf("Linux i686")+1)
                return 1;
            return 0;
        },
        BlackBerry: function () {
            return /BlackBerry/i.test(navigator.userAgent);
        },
        iOS: function () {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent);
        },
        Windows: function () {
            return /IEMobile/i.test(navigator.userAgent);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
 };

function onclickBtn(){
	if ( isMobile.Android() ) {
		window.android.onMessage(getInputText());
	}
	else if ( isMobile.iOS() ) {
		location.href = 'ios:';
	}
	else {
		alert('Not Implement');
	}
};

function getInputText(){
	var inputText = '<h3>Msg From <label style="color:red;">Remote</label> HTML: <label style="color:red;">' + document.getElementById('inputText').value + '</label></h3>';
	return inputText ;
}

function commandFromJava( msg ){
	document.getElementById('labeltag').innerHTML = 'Msg From <label style="color:blue;">Local</label> HTML: <label style="color:blue;">' + msg + '</label>';
};