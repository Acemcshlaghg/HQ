firebase.initializeApp(firebaseConfig);

var tasks = firebase.database().ref().child("Tasks");

tasks.once("value", function(snapshot) {
	snapshot.forEach(function(child) {
		var currentTask = document.createElement("a");
		currentTask.innerHTML = child.key;
		currentTask.href = "https://www.google.com/";
		currentTask.target = "blank";
		document.getElementById("tasks").appendChild(currentTask);
		console.log(child.key);
	});
});
window.alert("JS Working");

function addTask() {
	var taskName = document.getElementById("textInput").value; //text in input box
	if (!(taskName === "")) {
		var taskInfo = {
			url: "https://www.google.com/",
			thirdVal: "thirdVal"
		};
		tasks.child(taskName).set(taskInfo);

		document.getElementById("textInput").value = "";
		var newTask = document.createElement("a");
		newTask.innerHTML = taskName;
		newTask.href = "https://www.google.com/";
		newTask.target = "blank";
		document.getElementById("tasks").appendChild(newTask);
	}
}