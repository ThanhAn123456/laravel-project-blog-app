import { api } from "..";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: (page = 1) => ({
        url: `/posts`,
        method: "GET",
        params: {
          page: page,
        },
      }),
      providesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetAllPostQuery, useGetPostQuery } = postApi;