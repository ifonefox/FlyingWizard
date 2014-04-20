#pragma strict
var x_v:float;
var y_v:float;
var z_v:float;
function Start () {

}
function Set_vel(vel:Vector3){
	x_v+=vel[0];
	y_v+=vel[1];
	z_v+=vel[2];
}
function Update () {
	transform.position.x = transform.position.x + x_v;
	transform.position.y = transform.position.y + y_v;
	transform.position.z = transform.position.z + z_v;
}