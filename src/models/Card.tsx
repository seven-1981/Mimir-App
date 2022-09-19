const { v4: uuidV4 } = require("uuid");

export type Card = {
  id: string;
  front: string;
  back: string;
};

export const createCard = (front: string, back: string) => {
  return { id: uuidV4(), front: front, back: back };
};
