#pragma strict

var good : Texture2D;
var bad: Texture2D;
function fix (a:float) {
	while (a<0){
		a=a+360;
	}
	while (a>360){
		a=a-360;
	}
	return a;
}

/*function OnGUI () {
	var g = new GUIStyle();
	 var trueTex = trueTex:Texture2D;
	if (true)
		trueTex = good;
	else
		trueTex = bad;
	GUI.Label (Rect (0,0,100,50), trueTex);
}*/

function Start () {

}

function Update () {

}