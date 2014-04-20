using UnityEngine;
using System;
using System.Collections;
using System.IO.Ports;


public class ArduinoFan : MonoBehaviour {
	public SerialPort sp;
	// Use this for initialization
	void Start () {
		sp = new SerialPort( "COM3", 9600, Parity.None, 8, StopBits.One);
 
      sp.Open();
 
      sp.ReadTimeout = 50;
	}
	
	// Update is called once per frame
	void Update () {
		//int wind = Mathf.Round(GetComponent(Rigidbody).velocity.magnitude);
		double wind = Math.Round(gameObject.GetComponent<Rigidbody>().velocity.magnitude);
		byte b = Convert.ToByte(wind);
		var bytelist = new byte[1];
		bytelist[0]=b;
		sp.Write(bytelist,0,1);
	}
}
