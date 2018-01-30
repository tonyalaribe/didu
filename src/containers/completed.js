import m from "mithril";
import { Data } from "../models/data.js";

export var Completed = {
	oncreate: function() {},
	view: function({ attrs }) {
		let status = Data.GetProjectStatus();
		let { project_id } = attrs;
		return (
			<section>
				<div class="bg-white pa0 tc">
					<span class="dark-gray pa2 bg-white f6 dib br2">Upload</span>
				</div>
				<section>
					<div class="pa4 bg-dark-gray bt bb b--white tc f2 dark-red">
						<span>STATUT: {status ? status*100 : 0}%</span>
					</div>
					<a
						class="db link  pa4 bg-dark-red bt bb b--white tc mv2"
						onclick={() => {
							Data.UploadResults(project_id);
						}}
					>
						<span>Envoie des données collectées</span>
					</a>
					<a class="dn link pa4 bg-gray bt bb b--white tc ">
						<span>Modifier les résponses</span>
					</a>
					<a
						class="db link pa4 bg-gray bt bb b--white tc mv2 white-90"
						oncreate={m.route.link}
						href="/"
					>
						<span>Back to List</span>
					</a>
				</section>
			</section>
		);
	}
};
