#pragma strict
//to control speed of spaceship
var speed:int;

var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;
 

function Start () {

}

function Update () {

	speed = 5;
	
	//boosts spaceship speed if spacebar is pressed
	if(Input.GetKey(KeyCode.Space))
	{
		speed = 20;
	}

	//spaceship moves up and down
	transform.Translate(Vector3.down*speed*Time.deltaTime*Input.GetAxis("Vertical"));
	//rotating spaceship
	transform.Rotate(Vector3.forward*-100*Time.deltaTime*Input.GetAxis("Horizontal"));
	
	
	
	if(transform.position.x > (BorderController.rightmost-1))
	{
		transform.position.x = (BorderController.leftmost+1);
	}
	
	if(transform.position.x < (BorderController.leftmost+1))
	{
		transform.position.x = (BorderController.rightmost-1);
	}
	
	if(transform.position.y > (BorderController.topmost-1))
	{
		transform.position.y = (BorderController.bottommost+1);
	}
	
	if(transform.position.y < (BorderController.bottommost+1))
	{
		transform.position.y = (BorderController.topmost-1);
	}










}