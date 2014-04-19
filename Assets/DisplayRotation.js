#pragma strict
/*int fix = function (a:int){
	while (a<0){
		a=a+360;
	}
	while (a>=360){
		a=a-360;
	}
	return a;
}*/
function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.Label (Rect (10, 10, 100, 20), ("x: "+transform.eulerAngles.x.ToString()));
	GUI.Label (Rect (10, 30, 100, 20), ("y: "+transform.eulerAngles.y.ToString()));
	GUI.Label (Rect (10, 50, 100, 20), ("z: "+transform.eulerAngles.z.ToString()));
}