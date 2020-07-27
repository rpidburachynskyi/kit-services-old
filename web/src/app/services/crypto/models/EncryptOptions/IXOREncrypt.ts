import { CryptoMethods } from "../CryptoMethods.enum";

export interface IXOREncrypt {
	method: CryptoMethods.XOR;
	key: string;
}
