import { storiesOf, moduleMetadata } from "@storybook/angular";
import { KitButtonComponent } from "./kit-button.component";

storiesOf("KitButton", module)
	.addDecorator(
		moduleMetadata({
			declarations: [KitButtonComponent],
		})
	)
	.add("Default", () => ({
		template: `<kit-button>Default button</kit-button>`,
	}))
	.add("Disabled", () => ({
		template: `<kit-button [disabled]="true">Default button</kit-button>`,
	}));
