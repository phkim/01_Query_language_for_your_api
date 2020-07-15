import posts from "../db"

export default {
  User: {
    posts: async (_, args) => {
      let resultPosts;
      try {
        resultPosts = posts.filter(post => {
          switch (_.id) {
            case 1:
              if (post.id == 1
                || post.id == 2
                || post.id == 3) {
                return true;
              } else {
                return false;
              }
              break;
            case 2:
              if (post.id == 4
                || post.id == 5
                || post.id == 6) {
                return true;
              } else {
                return false;
              }
              break;
            default:
              return false;
              break;
          }
        })

      } catch (e) {
        console.log("posts resolver exception: " + e);
      }

      return resultPosts;
    }
  }
}