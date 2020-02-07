const resolvers = {
  Query: {
    async getAllUsers(root, args, { models }) {
      return models.User.findAll();
    },
    async getUser(root, { id }, { models }) {
      return models.User.findByPk(id);
    },
    async getAllPosts(root, args, { models }) {
      return models.Post.findAll();
    },
    async getPost(root, { id }, { models }) {
      return models.Post.findByPk(id);
    }
  },
  Mutation: {
    async createUser(root, { firstName, lastName, email }, { models }) {
      return models.User.create({
        firstName,
        lastName,
        email
      });
    },
    async editUser(root, { id, firstName, lastName, email }, { models }) {
      await models.User.update(
        {
          firstName,
          lastName,
          email
        },
        { where: { id: id } }
      );
      return models.User.findByPk(id);
    },
    async deleteUser(root, { id }, { models }) {
      await models.User.destroy({ where: { id: id } });
      return { message: "User Succefully Deleted!" };
    },
    async createPost(root, { title, description, userId }, { models }) {
      return models.Post.create({
        title,
        description,
        userId
      });
    },
    async editPost(root, { id, title, description }, { models }) {
      await models.Post.update(
        {
          title,
          description
        },
        { where: { id: id } }
      );
      return models.Post.findByPk(id);
    },
    async deletePost(root, { id }, { models }) {
      await models.Post.destroy({ where: { id: id } });
      return { message: "Post Succefully Deleted!" };
    }
  }
};
module.exports = resolvers;
