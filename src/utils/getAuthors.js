export const getAuthors = (srcAuthors) => {
  if (!srcAuthors) return;
  let authors = "";
  srcAuthors.forEach((author, index) => {
    authors += author;
    if (srcAuthors.length > 1 && index !== srcAuthors.length - 1) {
      authors += ", ";
    }
  });
  return authors;
};
