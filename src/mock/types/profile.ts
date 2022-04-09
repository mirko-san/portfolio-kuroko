export interface Profile {
  name: string;
  iconImage: {
    _id?: string;
    src: string;
  };
  email: string;
  detail: string;
  twitterUrl: string;
  instagramUrl: string;
  pixivUrl: string;
  scheduleText: string;
}
