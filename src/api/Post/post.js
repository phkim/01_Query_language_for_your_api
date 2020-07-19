import { users } from "../db"

export default {
  Post: {
    author: async (_, args) => {
      let resultAuthor = null;

      try {
        //console.log(_.authorId);

        resultAuthor = users.find(user => user.id == _.authorId);

        console.log(resultAuthor);

      } catch (e) {
        console.log("Post.author resolver exception: " + e);
      }

      return resultAuthor;
    }
  }
}