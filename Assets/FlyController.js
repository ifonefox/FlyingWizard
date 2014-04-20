#pragma strict
var size : int = 12;
var body_reference:GameObject;
var hand_reference:GameObject;
var feet_reference:GameObject;
var alt_body_reference:GameObject;
var acceleration:float;
var maxSpeed:float;
var force:float;
var turnSpeed:float;

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
function vector(){
	var body2:Vector3 = body_reference.transform.position;
	var hand2:Vector3 = hand_reference.transform.position;
	return Vector3(body2[0]-hand2[0],body2[1]-hand2[1],body2[2]-hand2[2]);
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
/*	GUI.Label (Rect (200, 30, 100, 20), ("v_rotation:"+get_v_rotation().ToString()),style);
	GUI.Label (Rect (200, 70, 100, 20), ("h_rotation:"+get_h_rotation().ToString()),style);
*/
}

function Start () {

}

function Update () {
	//VIRTICAL FLYING
	var virt:float = get_v_rotation();
	var hori:float = get_h_rotation();
	var current:Vector3 = vector();
	if (virt>90){
		//Activate flying
		//rigidbody.AddForce(Vector3(current[0],-1*current[1],current[2]) * force * Time.deltaTime);
		var y_force:float = Mathf.Abs((virt-90)/90);
		var t:float = Time.deltaTime;
		rigidbody.AddForce(Vector3(0,y_force,0)*force);
		//if you want straffing:
		var x_force:float = hori;
		//x-axis = cosine, z=sin
		rigidbody.AddForce(Vector3(Mathf.Cos(x_force),0,Mathf.Sin(x_force))*force);
		//If you want turning
/*		var x_force:float = -1*(hori-105)/55;
		transform.rotation.y = transform.rotation.y + x_force*turnSpeed;
*/	}
	var wind:int = Mathf.Round(GetComponent(Rigidbody).velocity.magnitude);

}