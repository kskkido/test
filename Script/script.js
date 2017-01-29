var msg = "<div class = \"header\"><a id=\"close\" href=\"#\">Close X<a/></div>"
msg += "<p class=\"popUp\">This pop up is a test</p>" 

function popup () {
	var elPopup = document.createElement('div');
	elPopup.setAttribute("id", "pop");
	elPopup.appendChild(msg);
	document.body.appendChild(elPopup);
}

function closePop (e) {
	document.body.removeChild(e.target.parentNode.parentNode)
}

window.addEventListener('load', popup, false)



var elClose = document.getElementById('close');
elClose.addEventListener('click',closePop,false);

function addWarningMsg (el, length) {
	var msg = document.createTextNode("Input must be atleast " + length + " characters long")
	el.appendChild(msg)
}

function checkMinLength(e, minLength) {
	var elTarget = e.target
	if (elTarget.value.length < minLength);
		addWarningMsg(elTarget, minLength);
}

var elUser = document.getElementById('username')
elUser.addEventListener("blur", function(e){checkMinLength(e, 5)},false)



var sx,sy,px,py,cx,cy
sx = document.getElementById('sx')
sy = document.getElementById('sy')
px = document.getElementById('px')
py = document.getElementById('py')
cx = document.getElementById('cx')
cy = document.getElementById('cy')

function screenPos (e) {
sx.value = e.screenX;
sy.value = e.screenY;
px.value = e.pageX;
py.value = e.pageY;
cx.value = e.clientX;
cy.value = e.clientY;
}



var elBody = document.getElementsByTagName('body')[0]
elBody.addEventListener("mousemove", screenPos, false)

var elTextArea = document.getElementById("freeWrite")
var elCharLeft = document.getElementById("charleft")
function lettersLeft (e) {
	var textentered, counter, lastinput;
	textentered = elBody.value
	counter = (150-textentered.length)
	elCharLeft.textContent = counter
	lastinput = document.getElementById("ascii");
	lastinput.textContent = e.keyCode;
}
elTextArea.addEventListener('keypress', lettersLeft, false)



var elAgreement = document.getElementById("agreements")
var elAgreementHint = document.getElementById("agreementHint")
function agreement (e) {
	if(!elAgreement)
		elAgreementHint.innerHTML = "You must agree to our terms!"
		e.preventDefault()
}
var elForm = document.getElementById("signupForm")
elForm.addEventListener("submit", agreement, false)



