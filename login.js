const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// function validate(){
// 	var username = document.querySelector('#username').value;
// 	var password = document.querySelector('#password').value;
// 	if (username == "admin" && password == "123456") {
// 		alert("Success");
// 		window.location.replace("new URL");   
// 	}
// 	else if (username == "" && password == ""){
// 		alert("Enter the username and password");
// 	}
// 	else if (username == "admin" && password == ""){
// 		alert("Enter the password");
// 	}
// 	else if (username == "" && password == "123456"){
// 		alert("Enter the username");
// 	}
// 	else{
// 		alert("The username or password is wrong");
// 		return;
// 	};
// }

function validate(){
    if(   document.getElementById("username").value == "admin"
    && document.getElementById("password").value == "123" ){
        // alert( "validation succeeded" );
        window.open("tabs.html");
    }
    else{
        alert( "validation failed" );
    }
}
const autoOpenAlink = (url = `tabs.html`) => {
    window.open(url, "open testing page in the same tab page");
}
