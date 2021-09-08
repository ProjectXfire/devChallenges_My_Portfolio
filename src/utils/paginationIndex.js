import { itemsPerPage } from "./variables";

export const indexPage = (currentPage) => {
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  return {
    start: indexFirstItem,
    end: indexLastItem,
  };
};
