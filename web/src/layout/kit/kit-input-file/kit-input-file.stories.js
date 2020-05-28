import { storiesOf, moduleMetadata } from '@storybook/angular';
import { KitModule } from '../../kit.module';


storiesOf('KitInputFile', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                KitModule,
            ],
        })
    )
    .add("Default", () => ({
        template: `
        <kit-input-file>
        </kit-input-file>`
    }));