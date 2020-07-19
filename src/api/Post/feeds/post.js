export default {
  Post: {
    id: async (_, args) => {
      return _.id;
    },
    title: async (_, args) => {
      return _.title;
    },
    content: async (_, args) => {
      return _.content;
    },
    publishedAt: async (_, args) => {
      return _.publishedAt;
    },
    author: async (_, args) => {
      return _.author;
    }
  }
}