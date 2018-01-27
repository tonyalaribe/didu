import m from "mithril";
import { Data } from "../models/data.js";

export var Foot = {
	view: function({attrs}) {
		return (
			<div class="fixed bottom-0 w-100 red bg-dark-gray shadow-4 bt b--white-50">
				<a
					class="dib link w-33 pa3 tc br b--white-50 tc"
					onclick={()=>Data.TasksSaveAnswer(attrs.project_id)}
				>
					<img src="/assets/img/check.svg" class="w2 dib" />
					<span class="db">Ajouter</span>
				</a>
				<a class="link dib w-33 pa3 tc  br b--white-50 tc">
					<img src="/assets/img/plus.svg" class="w2 dib" />
					<span class="db">Sauver</span>
				</a>
				<a class="link dib w-33 pa3 tc tc">
					<img src="/assets/img/close.svg" class="w2 dib" />
					<span class="db">Annuler</span>
				</a>
			</div>
		);
	}
};

export var QuestionPage = {
	oncreate: function({ attrs }) {
		// console.log(vnode)
		console.log(attrs);
		Data.GetTasks(attrs.project_id);
	},
	processFile: function(e, task_id) {
		console.log(e);
		let file = e.target.files[0];
		console.log(file.name);
		if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
			var reader = new FileReader();

			reader.addEventListener(
				"load",
				function() {
					// var image = new Image();
					// image.height = 100;
					// image.title = file.name;
					// image.src = this.result;
					// preview.appendChild( image );

					Data.TaskSetUploadedImage(task_id, this.result);
				},
				false
			);

			reader.readAsDataURL(file);
		}
	},
	view: function({attrs}) {
		let filteredData = Data.Tasks.filter(v => v.question == "1");
		Data.TotalTaskItems = filteredData.length;

		return (
			<section class="vh-100">
				<section
					style={
						"width:" +
						filteredData.length * 100 +
						"%; margin-left:-" +
						Data.CurrentTaskIndex * 100 +
						"%"
					}
				>
					{filteredData.map(function(data, i) {
						return (
							<section
								key={i}
								class="dib pb6"
								style={"width:" + 100 / filteredData.length + "%"}
							>
								<div class="bg-light-blue pa4 tc">
									<span class="dark-gray pa2 bg-white f6 dib br2">
										ROUTE ZONE: YOPOUGON
									</span>
								</div>
								<section>
									<div class="pa4 bg-dark-gray bt bb b--white tc">
										<span>{data.fr_description}</span>
									</div>
									<div class="dark-gray tc bg-light-gray cf">
										<input
											type="radio"
											name="yes_or_no"
											value="yes"
											class="dn toggle-check"
											id={"yes" + data.task_id}
											onchange={m.withAttr(
												"checked",
												v =>
													v
														? Data.TaskSetBoolAnswer(data.task_id, true)
														: Data.TaskSetBoolAnswer(data.task_id, false)
											)}
										/>
										<label
											class=" dib w-50 fl  pv4 bg-light-gray  br b--dark-gray  toggle-check"
											for={"yes" + data.task_id}
											style="width:49.4%"
										>
											<span>Oui</span>
										</label>
										<input
											type="radio"
											name="yes_or_no"
											value="no"
											class="dn toggle-check"
											id={"no" + data.task_id}
											onchange={m.withAttr(
												"checked",
												v =>
													v
														? Data.TaskSetBoolAnswer(data.task_id, false)
														: Data.TaskSetBoolAnswer(data.task_id, true)
											)}
										/>
										<label
											class=" dib w-50 fl  pv4 bg-light-gray  br b--dark-gray  toggle-check"
											for={"no" + data.task_id}
											style="width:49.4%"
										>
											<span>Non</span>
										</label>
									</div>
									<div>
										<input
											type="number"
											class="pa4 bg-dark-gray bt bb b--white tc w-100 white-90"
											placeholder="progress today eg. 5000"
											onchange={m.withAttr("value", v =>
												Data.TaskSetCustomAnswer(data, v)
											)}
										/>
									</div>
									<div>
										<label
											class="bg-near-white dib w-100 grow shadow-4 tc pa3"
											for={"img" + data.task_id}
										>
											<img src="/assets/img/upload.svg" class="w2 dib v-mid" />
											<span class="dib navy v-mid">Upload Image</span>
										</label>
										<input
											type="file"
											id={"img" + data.task_id}
											class="dn"
											onchange={e => QuestionPage.processFile(e, data.task_id)}
										/>
									</div>
									<div class="pa2 tc">
										<img
											src={
												Data.TaskAnswers[data.task_id]
													? Data.TaskAnswers[data.task_id].image
													: ""
											}
											class="w5 dib"
										/>
									</div>
								</section>
							</section>
						);
					})}
				</section>
				<Foot project_id={attrs.project_id}/>
			</section>
		);
	}
};
