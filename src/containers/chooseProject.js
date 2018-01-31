import m from "mithril";
import cn from "classnames";
import { Data } from "../models/data.js";

export var ListItem = {
	view: function(vnode) {
		console.log(vnode);
		let { active, project } = vnode.attrs;
		return (
			<a
				class="db white-80 link "
				oncreate={m.route.link}
				href={`/question_page/${project.project_id}`}
			>
				<div class="bt bb b--white">
					<div
						class={cn("w-70 dib  pa4 ", {
							"bg-gray": !active,
							"bg-dark-red": active
						})}
					>
						<span>{project.project_name} </span>
						<div class="pt2">Section: {project.section?project.section:"none"}</div>
					</div>
					<span
						class={cn("dark-red  absolute frx pt4 ", {
							dn: !active,
							dib: active
						})}
						style="margin-left: -2px;"
					>
						▶
					</span>

					<div class="w-30 dib pv4 tc">
						<span>Statut: {parseFloat(project.overall_progress).toFixed(2) * 100}%</span>
					</div>
				</div>
			</a>
		);
	}
};

export var ChooseProject = {
	oncreate: function() {
		Data.GetProjects();
	},
	view: function() {
		return (
			<section>
				<div class="bg-white pa0 tc">
					<span class="dark-gray pa2 bg-white f6 dib br2">
						PROJECTS
					</span>
				</div>
				<section>
					{Data.Projects.map(
						(project, i) =>
								<ListItem project={project} key={i} />

					)}
				</section>
			</section>
		);
	}
};
