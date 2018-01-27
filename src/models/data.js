import m from "mithril";

const ROOT = `http://www.diduapp.com/m`;

export var Data = {
	Projects: [],
	Tasks: [],
	CurrentTaskIndex: 0,
	TotalTaskItems: 0,
	TaskAnswers: {},
	GetProjects: function() {
		return m
			.request({
				method: "GET",
				url: `${ROOT}/projects.php`
			})
			.then(function(response) {
				console.table(response);
				Data.Projects = response;
			});
	},
	GetTasks: function(project_id) {
		console.log(project_id);
		return m
			.request({
				method: "GET",
				url: `${ROOT}/tasks.php?project_id=${project_id}`
			})
			.then(function(response) {
				console.log(response);
				console.table(response);
				Data.Tasks = response;
				// Data.TaskAnswers = {};
			});
	},
	TasksSaveAnswer: function(project_id) {
		console.log(Data.CurrentTaskIndex);
		Data.CurrentTaskIndex++;
		console.log(Data.CurrentTaskIndex);
		if (Data.CurrentTaskIndex >= Data.TotalTaskItems) {
			m.route.set(`/question_page/${project_id}/completed`);
		}
		m.redraw();
	},
	TaskSetBoolAnswer: function(task_id, answer) {
		if (Data.TaskAnswers[task_id]) {
			Data.TaskAnswers[task_id].yes_or_no = answer;
		} else {
			Data.TaskAnswers[task_id] = {
				yes_or_no: answer
			};
		}

		console.log(Data.TaskAnswers);
		m.redraw();
	},
	TaskSetCustomAnswer: function(data, ans) {
		let task_id = data.task_id;
		let answer = parseFloat(ans);
		if (Data.TaskAnswers[task_id]) {
			Data.TaskAnswers[task_id].progress = answer;
		} else {
			Data.TaskAnswers[task_id] = {
				progress: answer
			};
		}

		Data.TaskAnswers[task_id].current_cumulative_value =
			parseFloat(data.current_cumulative_value) + parseFloat(answer);
		Data.TaskAnswers[task_id].progress_rate =
			parseFloat(data.current_cumulative_value) / parseFloat(data.target_value);

		console.log(Data.TaskAnswers);
		m.redraw();
	},

	TaskSetUploadedImage: function(task_id, image) {
		if (Data.TaskAnswers[task_id]) {
			Data.TaskAnswers[task_id].image = image;
		} else {
			Data.TaskAnswers[task_id] = {
				image: image
			};
		}

		console.log(Data.TaskAnswers);
		m.redraw();
	},
	GetTaskAnswer: function(task_id) {
		if (Data.TaskAnswers[task_id]) {
			return Data.TaskAnswers[task_id];
		} else {
			return {};
		}
	},
	GetProjectStatus: function() {
		let total_percentages = 0;
		if (Object.keys(Data.TaskAnswers).length > 0) {
			total_percentages = Object.values(Data.TaskAnswers).reduce(
				(previous, data) => {
					console.log(previous);
					console.log(previous, data);
					return (previous += data.progress_rate);
				},
				0
			);
		}

		console.log(total_percentages);
		console.log(parseFloat(Object.values(Data.TaskAnswers).length));
		return parseInt(total_percentages / Data.TotalTaskItems, 10);
	}
};
