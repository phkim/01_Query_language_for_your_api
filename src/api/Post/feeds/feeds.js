import posts from "../../db";

export default {
  Query: {
    feeds: async (_, args) => {
      try {
        //console.dir(posts);
      } catch (e) {
        console.log(e);
      }

      return posts;
    }
  }
}