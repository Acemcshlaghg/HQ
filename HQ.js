firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var fbRef = database.ref();
var tasks = fbRef.child("Tasks");

for (var key in Object.keys(tasks)) {
	document.write(key);
}
window.alert("JS Working");

function addTask() {
	var task = {
		name: document.getElementById("textInput").value,
		url: "https://www.google.com/"
	};
	var taskName = tasks.child(task.name).set(task.url);
	document.getElementById("textInput").value = "";
	/*var newTask = document.createElement("a");
	newTask.innerHTML = task;
	newTask.href = "https://www.google.com/";
	newTask.target = "blank";
	document.getElementById("tasks").appendChild(newTask);*/
}