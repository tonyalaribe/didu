import m from "mithril";
import { Shell } from "./containers/shell.js";
import { ChooseProject } from "./containers/chooseProject.js";
import { QuestionPage } from "./containers/questionPage.js";
import { Completed } from "./containers/completed.js";

var root = document.getElementById("appContainer");

m.route.prefix("");

m.route(root, "/", {
	"/": {
		view: ({attrs}) => (
			<Shell>
				<ChooseProject {...attrs}/>
			</Shell>
		)
	},
  "/question_page/:project_id": {
		view: ({attrs}) => (
			<Shell>
				<QuestionPage {...attrs}/>
			</Shell>
		)
	},
  "/question_page/:project_id/completed": {
		view: ({attrs}) => (
			<Shell>
				<Completed {...attrs}/>
			</Shell>
		)
	}
});
