#pragma strict

var x:float;
var y:float;
var pic:Texture2D;
//theme for menu style
var theme:GUISkin;


function Start () {

}

function Update () {
	
}

function OnGUI()
{
	x = Screen.width/2;
	y = Screen.height/2;
	
	
	//to cusomize the style of the label
	GUI.skin = theme;
	
	//Add Texture 2D in Menu
	GUI.Label(Rect(x-510,y-270,pic.width,pic.height),pic);
	
	//GUI.Label(Rect(x-85,y-10,300,25),"Welcome to THE UNIVERSE");

	if(GUI.Button(Rect(x-50,y+100,100,25),"New Game"))
	{
		//new game was pressed
		//scene 1...the main screen scene
		Application.LoadLevel(1);
	}
	

}