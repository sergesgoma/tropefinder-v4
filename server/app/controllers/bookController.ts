import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookController = {
  homePage: async (req: Request, res: Response) => {
    const sessionAuth = req.session.isAuth;
    const booksCount = await prisma.book.count();
    const skip = Math.floor(Math.random() * booksCount);

    const books = await prisma.book.findMany({
      skip: skip,
      take: 4,
      orderBy: {
        id: "desc",
      },
    });

    res.json({ books });
  },
  bookPage: async (req: Request, res: Response) => {
    const { title } = req.params;
    const { book_id } = req.params;

    try {
      const tropes = await prisma.tropes.findMany({
        select: { trope: true },
      });
      const filteredTropes = tropes.map(function (trope: any) {
        return trope["trope"];
      });
      const { username, user_id } = req.session;
      const sessionAuth = req.session.isAuth;

      const books = await prisma.book.findMany({
        where: { book_id: Number(book_id), title: title },
      });
      const reviews = await prisma.reviews.findMany({
        where: { book_id: Number(book_id) },
      });
      const avgStars = await prisma.reviews.aggregate({
        _avg: { stars: true },
        where: {
          book_id: Number(book_id),
        },
      });
      // const isWished = await prisma.wishlist.findMany({
      //   where: {
      //     book_id: Number(book_id),
      //     user_id: Number(user_id),
      //   },
      // });
      const bookGenre = await prisma.book.findMany({
        where: { book_id: Number(book_id) },
        select: {
          genres: true,
          tag: true,
        },
      });
      const oneGenre = bookGenre[0].genres;
      const oneTag = bookGenre[0].tag;
      function removeDuplicates(data: any) {
        return data.filter(
          (value: any, index: number) => data.indexOf(value) === index
        );
      }
      const tags = removeDuplicates(oneTag);
      const genre = removeDuplicates(oneGenre);
      const filteredTag = tags.filter((item: any) =>
        filteredTropes.includes(item)
      );
      const items = genre.splice(0, 3);

      const recs = await prisma.book.findMany({
        where: {
          genres: {
            hasEvery: items,
          },
          tag: {
            hasSome: filteredTag,
          },
        },
        take: 25,
      });
      recs.sort(function () {
        return 0.5 - Math.random();
      });

      res.json({
        books,
        title,
        reviews,
        genre,
        tags,
        recs,
        book_id,
        user_id,
        username,
        sessionAuth,
        avgStars,
        // isWished,
        filteredTropes,
      });
    } catch (err) {
      console.log(err);
    }
  },
  wishlistPage: async (req: Request, res: Response) => {
    const sessionAuth = req.session.isAuth;
    try {
      const { user_id, username } = req.session;
      // const book = await prisma.wishlist.findMany({
      //   where: {
      //     user_id: Number(user_id),
      //   },
      //   include: {
      //     book: true,
      //   },
      // });
      res.json({
        sessionAuth,
        user_id,
        // book,
        username,
      });
    } catch (err) {
      console.log(err);
      res.render("error");
    }
  },
  addWishlist: async (req: Request, res: Response, next: NextFunction) => {
    const { user_id } = req.session;
    const { book_id } = req.params;
    try {
      const wishlist = await prisma.wishlist.create({
        data: {
          book_id: parseInt(book_id),
          user_id: Number(user_id),
        },
      });

      res.redirect("/wishlist");
    } catch (err) {
      console.log(err);
    }
  },
  addWishlistPage: async (req: Request, res: Response, next: NextFunction) => {
    next();
    res.redirect("/wishlist");
  },
  deleteWishlist: async (req: Request, res: Response) => {
    const { book_id } = req.params;
    const { user_id } = req.session;
    try {
      const deleteWishlist = await prisma.wishlist.deleteMany({
        where: { book_id: parseInt(book_id), user_id: Number(user_id) },
      });
      res.redirect("/wishlist");
    } catch (err) {
      console.log(err);
    }
  },
  bookList: async (req: Request, res: Response) => {
    try {
      const sessionAuth = req.session.isAuth;
      const books = await prisma.book.findMany({
        orderBy: {
          book_id: "asc",
        },
      });
      res.json({ sessionAuth, books });
    } catch (err) {
      console.log(err);
      res.render("error");
    }
  },
};
