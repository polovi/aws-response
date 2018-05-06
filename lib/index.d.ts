export declare const Response: (status: number, body?: string | object, headers?: {
    [key: string]: string;
} | undefined) => {
    statusCode: number;
    body: string;
    headers: {
        [key: string]: string;
    } | undefined;
};
