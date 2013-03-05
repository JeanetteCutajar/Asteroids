#pragma strict
//to control speed of spaceship
var speed:int;

var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;

var laserBeam:Rigidbody;

var lives:int;
static var score: int;


function Start () {

	lives = 3;

}

function Update () {

	speed = 5;
	
	
	if (Input.GetKeyDown(KeyCode.L))
	{
		Instantiate(laserBeam,transform.position,transform.rotation); 
	}
	
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
// show score and lives
function OnGUI ()
	{
		GUI.Label(Rect(0,30,200,30),"Lives: "+lives);
		GUI.Label(Rect(0,50,200,30),"Score: "+score);
	}

function OnTriggerEnter(Other:Collider)
	{	
		if (Other.gameObject.tag=="asteroid")
		{
			lives--;
		}
		
		if(lives==0)//if spaceship collides with asteroid with 0 lives, spaceship dies. 
		{
			Destroy(this.gameObject);
		}
	}
