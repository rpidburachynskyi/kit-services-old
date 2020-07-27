import { CryptoMethods } from "../CryptoMethods.enum";

export interface IXORDecrypt {
	method: CryptoMethods.XOR;
	key: string;
}
