import IBook from "./IBook";

interface IBookPageProps {
  book: IBook[];
  title?: string;
  bookid?:number;
  toggleState?: number;
}

export default IBookPageProps;