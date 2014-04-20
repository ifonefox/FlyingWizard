#pragma strict

var body_reference:GameObject;
var hand_reference:GameObject;
var feet_reference:GameObject;
var wand_obj:GameObject;
var ready:System.Boolean = false;
var fireball:GameObject;
function get_v_rotation(){
	var body:Vector3 = body_reference.transform.position;
	var hand:Vector3 = hand_reference.transform.position;
	var feet:Vector3 = feet_reference.transform.position;
	var body_hand:Vector3 = Vector3(body[0]-hand[0],body[1]-hand[1],body[2]-hand[2]);
	var body_feet:Vector3 = Vector3(body[0]-feet[0],body[1]-feet[1],body[2]-feet[2]);
	return Vector3.Angle(body_hand,body_feet);
}
function Start () {
}

function Update () {
	if (get_v_rotation()>90) {
		ready=true;
	} else{
		if (ready) {
			var ball:GameObject = Instantiate (fireball, wand_obj.transform.position, Quaternion.identity) as GameObject;
			ball.SendMessage("set_vel",GetComponent(Rigidbody).velocity);
			ready=false;
		};
	}
}
