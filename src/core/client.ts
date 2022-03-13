import ky from "ky";

const prefix = "http://httpbin.org/headers";
const headers = {};

interface Params {
  [key: string]: unknown;
}

export class Client {
  async get(path: string, params?: Params): Promise<unknown> {
    return ky.get(`${prefix}`, { headers, json: params }).json();
  }
}
