import { iSubservice } from './subservice.model';

export interface iService {
    name: string;
    description: string;
    path: string;
    subservices: iSubservice[]
}