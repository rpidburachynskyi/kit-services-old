import { CryptoMethods } from "../CryptoMethods.enum";

export interface IRSAEncrypt {
	method: CryptoMethods.RSA;
	p: number;
	q: number;
}
