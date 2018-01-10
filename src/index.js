import m from "mithril";
import { Shell } from "./containers/shell.js";
import { ChooseProject } from "./containers/chooseProject.js";
import { QuestionPage } from "./containers/questionPage.js";
import { Completed } from "./containers/completed.js";

var root = document.getElementById("appContainer");

m.route.prefix("");

m.route(root, "/", {
	"/": {
		view: () => (
			<Shell>
				<ChooseProject />
			</Shell>
		)
	},
  "/question_page": {
		view: () => (
			<Shell>
				<QuestionPage />
			</Shell>
		)
	},
  "/completed": {
		view: () => (
			<Shell>
				<Completed />
			</Shell>
		)
	}
});
