import slugify from "slugify";

const toSlug = (fileName: string): string =>
  slugify(fileName.replace(".svg", ""), {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });

export default toSlug;
