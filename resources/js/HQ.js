firebase.initializeApp(firebaseConfig);

var tasks = firebase.database().ref().child("Tasks");

tasks.once("value", function(snapshot) {
	var taskNumber = 0;
	snapshot.forEach(function(child) {

		var taskRowDiv = document.createElement("div");
		taskRowDiv.id = "taskDiv" + taskNumber;
		taskRowDiv.class = "taskRow";

		var currentTask = document.createElement("a");
		currentTask.innerHTML = child.key;
		currentTask.href = "https://www.google.com/";
		currentTask.target = "blank";
		taskRowDiv.appendChild(currentTask);

		var removeButton = document.createElement("button");
		removeButton.innerHTML = "Remove";
		removeButton.class = "removeTaskButton";
		//	removeButton.onClick = "removeTaskButtonClicked(this)";
		removeButton.addEventListener("click", "removeTaskButtonClicked()");
		taskRowDiv.appendChild(removeButton);

		document.getElementById("tasks").appendChild(taskRowDiv);
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

function removeTaskButtonClicked() {
	console.log("working");
}