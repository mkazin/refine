import axios, { AxiosInstance } from "axios";
import { DataProvider } from "@refinedev/core";

const axiosInstance = axios.create();

export const dataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance,
): Omit<
  Required<DataProvider>,
  "createMany" | "updateMany" | "deleteMany"
> => ({
  getList: async ({ resource, metaData, pagination }) => {
    let url = `${apiUrl}/${resource}?per_page=${pagination?.pageSize || 10}`;

    if (pagination?.current) {
      url = `${url}&page=${pagination?.current}`;
    }

    const { data } = await httpClient.get(url);

    return {
      data,
      total: 200, // Total count is not available in Github API

      /**
       * If the API supports it, you can define `cursor` this way.
       *
       * return {
       *  data
       *  total: 200,
       *  cursor: {
       *     next: data.meta.nextCursor,
       *     prev: data.meta.prevCursor,
       *  }
       * }
       */
    };
  },

  getMany: async () => {
    throw new Error("Not implemented");
  },

  create: async () => {
    throw new Error("Not implemented");
  },

  update: async () => {
    throw new Error("Not implemented");
  },

  getOne: async () => {
    throw new Error("Not implemented");
  },

  deleteOne: async () => {
    throw new Error("Not implemented");
  },

  getApiUrl: () => {
    return apiUrl;
  },

  custom: async () => {
    throw new Error("Not implemented");
  },
});
