import { GET_COLLECTIONS, GET_SECTIONS } from "./directory.types";

export const getCollections = () => ({
  type: GET_COLLECTIONS,
});
export const getSections = () => ({
  type: GET_SECTIONS,
});
