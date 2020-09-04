export interface Book {
  id: string;
  title: string;
  description: string;
  publisher: string;
  printType: string;
  publishedDate: string;
  thumbnail: string;
  smallThumbnail: string;
  authors: String[];
  categories: String[];
  isFavorite: boolean;
  saleInfo: Object;
  accessInfo: Object;
}
