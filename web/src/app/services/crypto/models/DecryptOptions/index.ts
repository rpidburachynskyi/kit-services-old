import { IXORDecrypt } from "./IXORDecrypt";
import { IRSADecrypt } from "./IRSADecrypt";

export type IDecryptOptions = IXORDecrypt | IRSADecrypt;
