#pragma strict
var laserSpeed: int;

function Start () {

	laserSpeed = 20;
}

function Update () {
	//laser speed
	transform.Translate(Vector3.up*-laserSpeed*Time.deltaTime);
}

//When laser is out of camera site it becomes invisible
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(Other:Collider)
	{	
		if (Other.gameObject.tag=="asteroid")
		{
			Destroy(this.gameObject);
			Destroy(Other.gameObject);
			SpaceshipController.score++;
		}
}		