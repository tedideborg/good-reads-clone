import { createStore } from "vuex";

import UserConfig from "../configs/userConfig.json";

const store = createStore({
  state() {
    return {
      books: [],
      userBooks: [],
      bookshelves: [],
      user: UserConfig,
      bookDetails: {},
    };
  },
  mutations: {
    addBooks(state, payload) {
      state.books = payload;
    },
    addBook(state, payload) {
      state.userBooks.push(payload);
    },
    addBookshelf(state, payload) {
      state.bookshelves.push({ [payload]: [] });
    },
    addBookDetails(state, payload) {
      state.bookDetails = payload;
    },
  },
  actions: {
    async getBooks(context, payload) {
      const responce = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${payload}`
      );
      const responceData = await responce.json();
      const books = [];
      for (let i = 0; i < responceData.items.length; i++) {
        const book = responceData.items[i];
        books.push({
          img:
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail,
          title: book.volumeInfo.title,
          desc: book.volumeInfo.description,
          author:
            book.volumeInfo.authors &&
            book.volumeInfo.authors[0] &&
            book.volumeInfo.authors[0],
          rating: book.volumeInfo.averageRating,
          id: book.id,
        });
      }
      context.commit("addBooks", books);
    },
    async getBookDetails(context, payload) {
      const responce = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${payload}`
      );
      const responceData = await responce.json();
      const book = responceData.volumeInfo;
      context.commit("addBookDetails", book);
    },
    addBook(context, book) {
      context.commit("addBook", book);
    },
    addBookhelf(context, bookshelf) {
      context.commit("addBookshelf", bookshelf);
    },
  },
  getters: {
    books(state) {
      return state.books;
    },
    userBooks(state) {
      return state.userBooks;
    },
    bookshelves(state) {
      return state.bookshelves;
    },
    user(state) {
      return state.user;
    },
    bookDetails(state) {
      return state.bookDetails;
    },
  },
});

export default store;
