const resolvers = {
  Query: {
    async getAllUsers(root, args, { models }) {
      return models.User.findAll();
    },
    async getUser(root, { id }, { models }) {
      return models.User.findByPk(id);
    }
  }
};
module.exports = resolvers;
