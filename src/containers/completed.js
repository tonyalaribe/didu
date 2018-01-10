import m from "mithril";

export var Completed = {
	view: function() {
		return (
			<section>
				<div class="bg-light-blue pa4 tc">
					<span class="dark-gray pa2 bg-white f6 dib br2">
						VOIE 4-1
					</span>
				</div>
				<section>
					<div class="pa4 bg-dark-gray bt bb b--white tc f2 dark-red">
						<span>STATUT: 85%</span>
					</div>
					<a class="db link  pa4 bg-dark-red bt bb b--white tc ">
						<span>Envoie des données collectées</span>
					</a>
					<a class="db link pa4 bg-gray bt bb b--white tc ">
						<span>Modifier les résponses</span>
					</a>
				</section>
			</section>
		);
	}
};
