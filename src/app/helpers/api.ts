/* eslint-disable import/no-anonymous-default-export */

import axiosClient from "@/lib/axios";

import { Note } from "../@types/note";

export default () => {
  return {
    fetchNotes: async (userId: string) => {
      const response = await axiosClient.request({
        url: `/notes?user_id=${userId}`,
        method: "GET",
      });
      return response.data;
    },
    createNote: async (note: Note) => {
      const response = await axiosClient.request({
        url: "/notes",
        method: "POST",
        data: note,
      });
      return response.data;
    },
    updateNote: async (note: Note) => {
      const response = await axiosClient.request({
        url: `/notes/${note.id}`,
        method: "PUT",
        data: note,
      });
      return response.data;
    },
    deleteNote: async (note: Note) => {
      const response = await axiosClient.request({
        url: `/notes/${note.id}`,
        method: "DELETE",
      });
      return response;
    },
    createUser: async () => {
      const response = await axiosClient.request({
        url: "/users",
        method: "POST",
      });
      return response.data.data;
    },
    searchNote: async (query: string) => {
      const response = await axiosClient.request({
        url: `/notes/search?q=${query}`,
        method: "GET",
      });
      return response.data;
    },
  };
};
