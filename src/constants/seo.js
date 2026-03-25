const image =
  "https://res.cloudinary.com/dkoe20rzl/image/upload/v1692130992/cover.png";
const creator = "0xdaruby";
const author = creator;

export const url = (slug) => {
  return `https://github.com/0xdaruby${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "0xdaruby - Web Developer",
    description:
      "I enjoy building functional webpages.",
  },
};
