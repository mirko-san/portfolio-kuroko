import fetchMock from "fetch-mock";

import { Profile } from "./types/profile";

const profile: Profile = {
  name: "name",
  email: "exampel.com",
  detail: "detail",
  twitterUrl: "https://twitter.com/example",
  instagramUrl: "https://instagram.com/example",
  scheduleText: "scheduleText",
};

export const init = () => {
  fetchMock.config.overwriteRoutes = false;
  fetchMock.config.fallbackToNetwork = true;
  fetchMock.get("express:/profile", {
    status: 200,
    body: {
      ...profile,
    },
  });
};
