import m from "mithril";
import { Menu } from "../models/menu.js";
import Slideout from "slideout";

import cn from "classnames";

export var Head = {
	oncreate: function() {
		// console.log(Menu.slideout)
		// if(!Menu.slideout){
		//   Menu.slideout = new Slideout({
		//     panel: document.getElementById("panel"),
		//     menu: document.getElementById("menu"),
		//     padding: 256,
		//     tolerance: 70
		//   })
		//
		//   Menu.slideout.enableTouch();
		//   document.querySelector('.toggle-button').addEventListener('click', function() {
		//     Menu.slideout.toggle();
		//   });
		// }
	},
	view: function({ attrs }) {
		console.log(attrs);
		return (
			<div class="pa2 tc shadow-4">
				<div class="dib fl">
					<a class="dib toggle-button">
						<img src="/assets/img/hamburger-menu.svg" class="w2" />
					</a>
				</div>
				<div class="dib pa2">
					<a class="link white" oncreate={m.route.link} href="/">
						did u
					</a>
				</div>
				<div class="dib pa2 fr ">i</div>
			</div>
		);
	}
};

export var SideBar = {
	view: function() {
		return (
			<main id="menu" class="bg-dark-gray vh-100 white dn">
				<header>
					<h2>Panel</h2>
				</header>
			</main>
		);
	}
};
export var Foot = {
	view: function() {
		return (
			<div class="fixed bottom-0 w-100 red bg-dark-gray shadow-4 bt b--white-50">
				<div class="dib w-33 pa3 tc br b--white-50 tc">
					<img src="/assets/img/check.svg" class="w2 dib" />
					<span class="db">Ajouter</span>
				</div>
				<div class="dib w-33 pa3 tc  br b--white-50 tc">
					<img src="/assets/img/plus.svg" class="w2 dib" />
					<span class="db">Sauver</span>
				</div>
				<div class="dib w-33 pa3 tc tc">
					<img src="/assets/img/close.svg" class="w2 dib" />
					<span class="db">Annuler</span>
				</div>
			</div>
		);
	}
};

export var Shell = {
	view: function({ state, children }) {
		return (
			<section>
				<SideBar />
				<section
					id="panel"
					class="white-90 bg-dark-gray vh-100 overflow-scroll bl b--light-gray"
				>
					<Head />
					{children}
					<Foot />
				</section>
			</section>
		);
	}
};
