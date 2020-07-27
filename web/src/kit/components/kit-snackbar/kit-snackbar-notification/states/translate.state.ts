import {
	state,
	style,
	transition,
	animate,
	keyframes,
} from "@angular/animations";

export const translateState = [
	state(
		"translate",
		style({
			transform: "translateY(0px)",
		})
	),
	transition("void => translate", [
		style({
			transform: "translateY(100px)",
			opacity: 0,
		}),
		animate("100ms"),
	]),
	transition("translate => void", [
		animate(
			"100ms",
			keyframes([
				style({
					transform: "translateY(0)",
					opacity: 1,
				}),
				style({
					transform: "translateY(100px)",
					opacity: 0,
				}),
			])
		),
	]),
];
