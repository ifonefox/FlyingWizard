#pragma strict
var size : int = 12;
var body_reference:GameObject;
var hand_reference:GameObject;
var feet_reference:GameObject;
var alt_body_reference:GameObject;
var acceleration:float;
var maxSpeed:float;
function fix_degrees (a:float) {
	while (a<0){
		a=a+360;
	}
	while (a>360){
		a=a-360;
	}
	return a;
}
function get_v_rotation(){
	var body:Vector3 = body_reference.transform.position;
	var hand:Vector3 = hand_reference.transform.position;
	var feet:Vector3 = feet_reference.transform.position;
	var body_hand:Vector3 = Vector3(body[0]-hand[0],body[1]-hand[1],body[2]-hand[2]);
	var body_feet:Vector3 = Vector3(body[0]-feet[0],body[1]-feet[1],body[2]-feet[2]);
	return Vector3.Angle(body_hand,body_feet);
}
function get_h_rotation(){
	var body1:Vector3 = body_reference.transform.position;
	var hand1:Vector3 = hand_reference.transform.position;
	var alt:Vector3 = alt_body_reference.transform.position;
	var body_hand1:Vector3 = Vector3(body1[0]-hand1[0],body1[1]-hand1[1],body1[2]-hand1[2]);
	var body_alt:Vector3 = Vector3(body1[0]-alt[0],body1[1]-alt[1],body1[2]-alt[2]);
	return Vector3.Angle(body_hand1,body_alt);
}
function OnGUI () {
	/*var x:float = transform.eulerAngles.x;
	var style:GUIStyle = GUIStyle();
	style.fontSize = size;
	var floor_x:int = Mathf.Floor(x);
	if (fix(floor_x)<360  && fix(floor_x)>270){
    	GUI.Box(Rect(0,0,100,100),"YES",style);
	}
    else{
    	GUI.Box(Rect(0,0,100,100),"NO",style);
    }
	GUI.Label (Rect (200, 30, 100, 20), ("x: "+x.ToString()),style);*/
	var style:GUIStyle = GUIStyle();
	style.fontSize = size;
	GUI.Label (Rect (200, 30, 100, 20), ("v_rotation:"+get_v_rotation().ToString()),style);
	GUI.Label (Rect (200, 70, 100, 20), ("h_rotation:"+get_h_rotation().ToString()),style);

}

function Start () {

}

function Update () {
	/*var y:float = transform.eulerAngles.y;
	var floor_y:int = Mathf.Floor(y);
	if (floor_y<100 && floor_y != 0){
		if (body.rigidbody.velocity.y<maxSpeed){
			body.rigidbody.velocity+=new Vector3(0,1,0);
		}
	}
    else{
    	
    }*/
}