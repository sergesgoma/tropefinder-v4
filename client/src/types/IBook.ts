export default interface IBook {
  id: number;
  book_id: number;
  title: string;
  author: string;
  img: string;
  gdRating: number;
  series: string;
  seriesName: string;
  numSeries: string;
  numGdRating: number;
  numGdReview: string;
  format: string;
  firstPublished: string;
  yearOfPublication: string;
  language: string;
  awards: string[];
  tag: string[];
  genres: string[];
  summary: string;
}
