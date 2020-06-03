import { RegularExpressionExampleTypes } from './examples';

export interface RegularExpressionService {
    name: string;
    path: string;
    examples: RegularExpressionExampleTypes[]
}