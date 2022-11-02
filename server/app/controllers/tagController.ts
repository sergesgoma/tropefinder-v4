import { Request, Response, json } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tagController = {
  tagPage: async (req: Request, res: Response) => {
    const { search } = req.query;
    let usingSplit = String(search).split(",");

    usingSplit.pop();
    const results = usingSplit.map((element: any) => {
      return element.trim();
    });
    const sessionAuth = req.session.isAuth;

    const books = await prisma.Book.findMany({
      where: {
        tag: {
          hasEvery: results,
        },
      },
      orderBy: [
        {
          numGdRating: "desc",
        },
        {
          gdRating: "desc",
        },
      ],
    });
    res.json({ search, books, sessionAuth });
  },
  searchEngine: async (req: Request, res: Response) => {
    // filtered tropes put in a variable
    const tropes = await prisma.Tropes.findMany({ select: { trope: true } });
    const data = tropes.map(function (trope: any) {
      return trope["trope"];
    });
    res.json(data);
  },
  tagsPage: async (req: Request, res: Response) => {
    const { tag } = req.params;
    const sessionAuth = req.session.isAuth;
    try {
      const books = await prisma.Book.findMany({
        where: {
          tag: {
            has: tag.toLowerCase(),
          },
        },
        orderBy: [
          {
            numGdRating: "desc",
          },
          {
            gdRating: "desc",
          },
        ],
      });
      res.json({ books, tag, sessionAuth });
    } catch (err) {
      console.log(err);
    }
  },
  authorPage: async (req: Request, res: Response) => {
    const { author } = req.params;
    const sessionAuth = req.session.isAuth;
    try {
      const books = await prisma.Book.findMany({
        where: {
          author: {
            contains: author,
            mode: "insensitive",
          },
        },
        orderBy: [
          {
            numGdRating: "desc",
          },
          {
            gdRating: "desc",
          },
        ],
      });
      res.json({ books, author, sessionAuth });
    } catch (err) {
      console.log(err);
    }
  },
  seriesPage: async (req: Request, res: Response) => {
    const { series } = req.params;
    const sessionAuth = req.session.isAuth;
    try {
      const books = await prisma.Book.findMany({
        where: {
          seriesName: {
            contains: series,
            mode: "insensitive",
          },
        },
        orderBy: {
          numSeries: "asc",
        },
      });
      res.json({ books, series, sessionAuth });
    } catch (err) {
      console.log(err);
    }
  },
  genrePage: async (req: Request, res: Response) => {
    const { genre } = req.params;
    const sessionAuth = req.session.isAuth;
    try {
      const books = await prisma.Book.findMany({
        where: {
          genres: {
            has: genre,
          },
        },
      });
      res.json({ books, genre, sessionAuth });
    } catch (err) {
      console.log(err);
    }
  },
  tropeList: async (req: Request, res: Response) => {
    try {
      const sessionAuth = req.session.isAuth;
      const tropes = await prisma.Tropes.findMany({
        select: { trope: true },
        orderBy: {
          trope: "asc",
        },
      });

      res.json({ sessionAuth, tropes });
    } catch (err) {
      console.log(err);
      res.render("error");
    }
  },
};
