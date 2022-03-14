import ky from "ky";
import { init } from "@/mock";

const spaceId = process.env.VUE_APP_NEWT_SPACEID || undefined;
const app = process.env.VUE_APP_NEWT_APP || undefined;
const apiKey = process.env.VUE_APP_NEWT_API_KEY || undefined;

const prefix = `https://${spaceId}.cdn.newt.so/v1/${app}`;
const headers = {
  Authorization: `Bearer ${apiKey}`,
};

interface Params {
  [key: string]: unknown;
}

// https://developers.newt.so/apis/cdn#section/Collection-Resources
interface Response {
  skip: number;
  limit: number;
  total: number;
  items: unknown[];
}

export class Client {
  constructor() {
    init();
  }
  async get(path: string, params?: Params): Promise<Response> {
    if (!spaceId || !app) {
      throw new Error("Undefined enviroment valiables");
    }
    return ky.get(`${prefix}/${path}`, { headers, json: params }).json();
  }
}
