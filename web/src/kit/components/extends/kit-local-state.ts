import { Input } from "@angular/core";

function write(localId: string, id: string, data: any) {
	if (!localId || localId === "") return;

	if (typeof id !== "string") throw new Error("id must be a string");
	localStorage.setItem(`${localId}_${id}`, JSON.stringify(data));
}

function read(localId: string, id: string, _default: any): any {
	if (!localId || localId === "") return _default;

	if (typeof id !== "string") throw new Error("id must be a string");

	const item = localStorage.getItem(`${localId}_${id}`);
	if (item) return JSON.parse(item);
	return _default;
}

export class KitLocalState {
	@Input("localId") localId: string = "";

	constructor() {}

	localRead(id: string, _default: any): any {
		return read(this.localId, id, _default);
	}

	localWrite(id: string, data: any) {
		write(this.localId, id, data);
	}
}
