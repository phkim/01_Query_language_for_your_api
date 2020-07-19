import posts from "../../db";

export default {
  Query: {
    feeds: async (_, args) => {
      try {
        console.log(posts);
      } catch (e) {
        console.log(e);
      }

      return posts;
    }
  }
}