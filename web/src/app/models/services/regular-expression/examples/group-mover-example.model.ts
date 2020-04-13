export interface GroupMoverExample {
    name?: string;
    description?: string;
    regularExpression: string;
    value: string;
    resultEach: string;
    resultGlobal: string;
    resultArguments?: string;
    type: "each" | "global" | "args"
}