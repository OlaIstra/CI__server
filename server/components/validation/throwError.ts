interface ThrowErrorArgs {
    code: number;
    message: string;
    data?: unknown;
}

export default ({ code, message, data = [] }: ThrowErrorArgs) => {
    const error: any = new Error(message);
    error.statusCode = code;
    error.data = data;
    throw error;
};
