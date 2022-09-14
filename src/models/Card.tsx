const { v4: uuidV4 } = require("uuid");

export type Card = {
  id: String;
  front: String;
  back: String;
};

export const createCard = (front: String, back: String) => {
  return { id: uuidV4(), front: front, back: back };
};
