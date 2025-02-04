import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "../../store/slice/auth";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      const csrfToken = document.head.querySelector(
        'meta[name="csrf-token"]'
      ) as HTMLMetaElement;
      if (csrfToken) {
        headers.set("X-CSRF-TOKEN", csrfToken.content);
      }

      return headers;
    },
  }),
  tagTypes: ["Category", "Product", "User"],
  endpoints: () => ({}),
});
