import { DencryptMethods } from './DencryptMethods.enum';

export interface iDencryptParams {
    key: string,
    method: DencryptMethods
}