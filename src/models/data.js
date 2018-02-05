import m from "mithril";

const ROOT = `https://m.diduapp.com`;

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
				url: `${ROOT}/api/projects.php`
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
				url: `${ROOT}/api/tasks.php?project_id=${project_id}`
			})
			.then(function(response) {
				console.log(response);
				console.table(response);
				Data.Tasks = response;
				Data.CurrentTaskIndex = 0;
				Data.TaskAnswers = {};
				m.redraw();

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
	TasksSave: function(project_id) {
		m.route.set(`/question_page/${project_id}/completed`);
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

		Data.TaskAnswers[task_id].target_value = data.target_value;

		Data.TaskAnswers[task_id].current_cumulative_value =
			parseInt(data.current_cumulative_value, 10) + parseInt(answer, 10);

		Data.TaskAnswers[task_id].progress_rate =
			Data.TaskAnswers[task_id].current_cumulative_value /
			parseFloat(data.target_value);

		console.log(
			"cumulative val: " +
				data.current_cumulative_value +
				" + target_value: " +
				data.target_value
		);
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
					// console.log(previous, data);
					return (previous += data.progress_rate);
				},
				0
			);
		}

		return parseFloat(total_percentages) / Data.TotalTaskItems;
	},
	UploadResults: function(project_id) {
		console.log({
			ProjectID: project_id,
			TaskAnswers: Data.TaskAnswers,
			OverallProgress: Data.GetProjectStatus()
		});
		console.log(
			JSON.stringify({
				ProjectID: project_id,
				TaskAnswers: Data.TaskAnswers,
				OverallProgress: Data.GetProjectStatus()
			})
		);
		return m
			.request({
				method: "POST",
				url: `${ROOT}/api/update_tasks.php`,
				data: {
					ProjectID: project_id,
					TaskAnswers: Data.TaskAnswers,
					OverallProgress: Data.GetProjectStatus()
				}
			})
			.then(function(response) {
				Data.Projects = response;
			})
			.catch(() => m.route.set("/"));
	}
};
