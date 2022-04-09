import fetchMock from "fetch-mock";

import { Profile } from "./types/profile";
import { Work } from "./types/work";

const profile: Profile = {
  name: "name",
  iconImage: {
    src: "https://via.placeholder.com/500",
  },
  email: "exampel.com",
  detail: "detail",
  twitterUrl: "https://twitter.com/example",
  instagramUrl: "https://www.instagram.com/example",
  pixivUrl: "https://www.pixiv.net/users/example",
  scheduleText: "scheduleText",
};

const works: Work[] = [
  {
    title: "example title",
    date: "2019-01-01T00:00:00.000Z",
    image: {
      src: "https://via.placeholder.com/1500",
    },
    thumbnailImage: {
      src: "https://via.placeholder.com/500",
    },
  },
  {
    title: "example title",
    date: "2020-01-01T00:00:00.000Z",
    image: {
      src: "https://via.placeholder.com/1500",
    },
    thumbnailImage: {
      src: "https://via.placeholder.com/500",
    },
    url: "https://example.com/example",
  },
];

export const init = () => {
  fetchMock.config.overwriteRoutes = false;
  fetchMock.config.fallbackToNetwork = true;
  fetchMock.get("end:profile", {
    status: 200,
    body: {
      skip: 0,
      limit: 100,
      total: 1,
      items: [profile],
    },
  });
  fetchMock.get("end:work", {
    status: 200,
    body: {
      skip: 0,
      limit: 2,
      total: 4,
      items: works,
    },
  });
};
