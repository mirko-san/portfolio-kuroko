export interface Work {
  id: string;
  title: string;
  date: string;
  image: {
    _id?: string;
    src: string;
  };
  thumbnailImage: {
    _id?: string;
    src: string;
  };
  url?: string;
}
