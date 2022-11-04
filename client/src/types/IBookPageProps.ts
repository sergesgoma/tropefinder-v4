import IBook from "./IBook";

interface IBookPageProps {
  book: IBook[];
  title?: string;
  toggleState?: number;
}

export default IBookPageProps;