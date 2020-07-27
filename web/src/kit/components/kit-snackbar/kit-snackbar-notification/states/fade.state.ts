import {
	state,
	style,
	transition,
	animate,
	keyframes,
} from "@angular/animations";

export const fadeState = [
	state(
		"fade",
		style({
			opacity: 1,
		})
	),
	transition("void => fade", [
		style({
			opacity: 0,
		}),
		animate("100ms"),
	]),
	transition("fade => void", [
		animate(
			"100ms",
			keyframes([
				style({
					opacity: 1,
				}),
				style({
					opacity: 0,
				}),
			])
		),
	]),
];
