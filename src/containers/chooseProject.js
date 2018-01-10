import m from "mithril";
import cn from "classnames";

export var ListItem = {
	view: function(vnode) {
		console.log(vnode);
		let { active } = vnode.attrs;
		return (
			<a class="db white-80 link " oncreate={m.route.link} href="/question_page">
				<div class="bt bb b--white">
					<div
						class={cn("w-70 dib  pa4 ", {
							"bg-gray": !active,
							"bg-dark-red": active
						})}
					>
						<span>Nouvelle voie</span>
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
						<span>Statut: 85%</span>
					</div>
				</div>
			</a>
		);
	}
};

export var ChooseProject = {
	view: function() {
		return (
			<section>
				<div class="bg-light-blue pa4 tc">
					<span class="dark-gray pa2 bg-white f6 dib br2">
						ROUTE ZONE: YOPOUGON
					</span>
				</div>
				<section>
					<ListItem />
					<ListItem active />
					<ListItem />
					<ListItem />
				</section>
			</section>
		);
	}
};
