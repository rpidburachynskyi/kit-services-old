import { storiesOf, moduleMetadata } from '@storybook/angular';
import { KitModule } from './../../kit.module';

const content = `
    <p>1111111111111111111111111111111111111</p>
    <p>111111111111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
`;

storiesOf('KitExpansionPanel', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                KitModule
            ]
        })
    )
    .add("Default", () => ({
        template: `
        <kit-expansion-panel title="My expansion panel">
            ${content}
        </kit-expansion-panel>`
    }))
    .add("Without scroll", () => ({
        template: `
        <kit-expansion-panel title="My expansion panel" [scroll]='false'>
            ${content}
        </kit-expansion-panel>`
    }))
    .add("Disabled", () => ({
        template: `
        <kit-expansion-panel title="My expansion panel" [disabled]="true">
            ${content}
        </kit-expansion-panel>`
    }));