import m from "mithril";

export var QuestionPage = {
	view: function() {
		return (
			<section>
				<div class="bg-light-blue pa4 tc">
					<span class="dark-gray pa2 bg-white f6 dib br2">
						ROUTE ZONE: YOPOUGON
					</span>
				</div>
				<section>
					<div class="pa4 bg-dark-gray bt bb b--white tc">
						<span>Nouvelle voie</span>
					</div>
					<div class="dark-gray tc">
						<div class=" dib w-50  pa4 bg-light-gray  br b--dark-gray">
							<span>Nouvelle voie</span>
						</div>
						<div class=" dib w-50  pa4 bg-light-gray  br b--dark-gray">
							<span>Nouvelle voie</span>
						</div>
					</div>
					<div class="pa4 bg-dark-gray bt bb b--white tc">
						<span>5000m2</span>
					</div>
				</section>
			</section>
		);
	}
};
