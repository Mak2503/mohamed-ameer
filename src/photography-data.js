function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../public/assets/personal", false, /\.(png|jpe?g|svg)$/)
);

export const photographyData = [
  {
    id: "001",
    imageUrl: images[12],
    header: "Photos",
    year: "2017 - 2023",
    descColor: "#0f141e",
    projectImages: images,
    link: "",
    description: "",
  },
];
