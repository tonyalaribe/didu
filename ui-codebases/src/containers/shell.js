import m from "mithril";
import Slideout from "slideout";
import { Data } from "../models/data.js";
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
			<div class="pa2 tc shadow-4 fixed w-100 bg-dark-gray z-3">
				<div class="dib fl">
					<a class="dib toggle-button">
						<img src="/assets/img/hamburger-menu.svg" class="w2" />
					</a>
				</div>
				<div class="dib pa2">
					<a class="link white" oncreate={m.route.link} href="/">
						DIDU
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
					<div class="pt4 pb2 mt3" />
					{children}
				</section>
			</section>
		);
	}
};
