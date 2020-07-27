import { CryptoMethods } from "../CryptoMethods.enum";

export interface IRSADecrypt {
	method: CryptoMethods.RSA;
	p: number;
	q: number;
}
