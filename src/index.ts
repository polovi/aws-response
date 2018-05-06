export const Response = (status: number, body: string | object = '', headers?: { [key: string]: string }) => ({
  statusCode: status,
  body: typeof body === 'object' ? JSON.stringify(body) : body,
  headers,
})
