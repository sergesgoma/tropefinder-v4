import express from "express";
import { isAuth } from "./middlewares/isAuth";
import { authController } from "./controllers/authController";
import { bookController } from "./controllers/bookController";
import { tagController } from "./controllers/tagController";
import { reviewController } from "./controllers/reviewController";

const router = express.Router();

// HOMEPAGE
router.get("/home", bookController.homePage);

// SEARCH ENGINE
router.get("/tag", tagController.tagPage);
router.get("/search", tagController.searchEngine);

// TAG, AUTHOR, GENRE, SERIES PAGES
router.get("/tags/:tag", tagController.tagsPage);
router.get("/author/:author", tagController.authorPage);
router.get("/genre/:genre", tagController.genrePage);
router.get("/series/:series", tagController.seriesPage);

// BOOK PAGE
router.get("/book/:book_id/:title", bookController.bookPage);

// LOGIN PAGES
router.get("/login", authController.loginPage);
router.post("/login", authController.logIn);

// LOGOUT
router.post("/logout", authController.logOut);

// SIGNUP PAGES
router.get("/signup", authController.signupPage);
router.post("/signup", authController.signUp);

// CRUD REVIEW PAGES
router.get(
  "/book/:book_id/:title/write-review",
  isAuth,
  reviewController.addReviewPage
);
router.post("/book/:book_id/:title/", reviewController.addReview);
router.get(
  "/book/:book_id/:title/:review_id/edit-review",
  isAuth,
  reviewController.editReviewPage
);
router.post(
  "/book/:book_id/:title/:review_id/edit-review",
  reviewController.editReview
);
router.get(
  "/book/:book_id/:title/:review_id/delete-review",
  reviewController.deleteReview
);

// WISHLIST PAGES
router.get("/wishlist", isAuth, bookController.wishlistPage);
router.get("/wishlist/:book_id", isAuth, bookController.addWishlistPage);
router.post("/wishlist/:book_id", isAuth, bookController.addWishlist);
router.get("/wishlist/:book_id/delete", bookController.deleteWishlist);

// TROPE & BOOK LIST
router.get("/all-tropes", tagController.tropeList);
router.get("/books", bookController.bookList);

export { router };
