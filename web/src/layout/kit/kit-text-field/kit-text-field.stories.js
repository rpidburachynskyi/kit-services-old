import { storiesOf, moduleMetadata } from '@storybook/angular';
import { KitModule } from '../../kit.module';


storiesOf('KitTextField', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                KitModule,
            ],
        })
    )
    .add("Default", () => ({
        template: `
        <kit-text-field>
        </kit-text-field>`
    }))
    .add("Password", () => ({
        template: `
        <kit-text-field [password]="true">
        </kit-text-field>`
    }));