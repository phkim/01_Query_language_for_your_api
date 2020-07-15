import { users } from "../db"

export default {
  Post: {
    author: async (_, args) => {
      let resultAuthor = null;

      try {

        //console.dir(_);

        switch (_.id) {
          case 1:
          case 2:
            resultAuthor = users[0]
            break;
          case 3:
          case 4:
          case 5:
            resultAuthor = users[1]
            break;
        }
      } catch (e) {
        console.log("Post.author resolver exception: " + e);
      }

      return resultAuthor;
    }
  }
}