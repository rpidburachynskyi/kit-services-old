import { CryptoMethods } from "./CryptoMethods.enum";

export interface iCryptoOptions {
	key: string;
	method: CryptoMethods;
}
