import { storiesOf, moduleMetadata } from '@storybook/angular';
import { KitModule } from '../../kit.module';


storiesOf('KitCombobox', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                KitModule,
            ],
        })
    )
    .add("Default", () => ({
        template: `
        <kit-combobox [ngModel]="'encrypt'">
                <kit-combobox-option value="encrypt" text="Encrypt"></kit-combobox-option>
                <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
        </kit-combobox>`
    }))
    .add("With groups", () => ({
        template: `
        <kit-combobox [ngModel]="'encrypt'">
            <kit-combobox-option-group>
                <kit-combobox-option value="encrypt" text="Encrypt">
                    <kit-icon iconLabel="simple-arrow" size="small"></kit-icon>
                </kit-combobox-option>
                <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
            </kit-combobox-option-group>
            <kit-combobox-option-group>
                <kit-combobox-option value="encrypt" text="Encrypt"></kit-combobox-option>
                <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
            </kit-combobox-option-group>
        </kit-combobox>`
    }))
    .add("With groups and titles", () => ({
        template: `
        <kit-combobox [ngModel]="'encrypt'">
            <kit-combobox-option-group title="First title">
                <kit-combobox-option value="encrypt" text="Encrypt"></kit-combobox-option>
                <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
            </kit-combobox-option-group>
            <kit-combobox-option-group>
                <kit-combobox-option value="encrypt" text="Encrypt"></kit-combobox-option>
                <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
            </kit-combobox-option-group>
            <kit-combobox-option-group title="Secodn title">
                <kit-combobox-option value="encrypt" text="Encrypt"></kit-combobox-option>
                <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
            </kit-combobox-option-group>
        </kit-combobox>`
    }))
    .add("Long combobox", () => ({
        template: `
        <kit-combobox [ngModel]="'encrypt'">
            ${
            `
                <kit-combobox-option-group title="First title">
                    <kit-combobox-option value="encrypt" text="Encrypt"></kit-combobox-option>
                    <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                    <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
                </kit-combobox-option-group>
                <kit-combobox-option-group>
                    <kit-combobox-option value="encrypt" text="Encrypt"></kit-combobox-option>
                    <kit-combobox-option value="decrypt" text="Decrypt"></kit-combobox-option>
                    <kit-combobox-option value="rencrypt" text="Rencrypt"></kit-combobox-option>
                </kit-combobox-option-group>
            `.repeat(10)
            }
        </kit-combobox>`
    }));