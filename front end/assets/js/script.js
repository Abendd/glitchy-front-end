onSubmit = (event) =>{
	let email = document.getElementById("Email").value;
	let url = document.getElementById("ur").value;
	fetch('https://tranquil-cliffs-88305.herokuapp.com/register',{
		method:'POST',
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({
			email:email,
			url:url
		})
	})
	.then(response=> response.json())
	.then(response=>{
		console.log(response);
		window.location.href = "https://get-glitchy.herokuapp.com/thanks1.html";
	})
	

}
