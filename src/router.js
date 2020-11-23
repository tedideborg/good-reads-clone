import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import MyBooks from "./pages/MyBooks";
import BookShelves from "./pages/BookShelves";
import BookDetails from "./pages/BookDetails";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/profile", component: MyProfile },
    { path: "/mybooks", component: MyBooks },
    { path: "/bookshelves", component: BookShelves },
    { path: "/book/:bookId", component: BookDetails, props: true },
  ],
});

export default router;
