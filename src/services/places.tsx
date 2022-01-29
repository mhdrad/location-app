import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Place = {
  name: string;
  type: string;
  latitude: number;
  longitude: number;
};

export const placesApi = createApi({
  reducerPath: "placesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/data/" }),
  endpoints: (builder) => ({
    getPlaces: builder.query<Place[], { latitude: unknown; longitude: number }>(
      {
        query: () => "places.json",
      }
    ),
  }),
});

export const { useGetPlacesQuery } = placesApi;
