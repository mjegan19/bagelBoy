const UserModel = require("../../../models/user")

const userResolver = {
  Query: {
    user: (parent, args) => {
      return UserModel.findById(args.id);
    },
    users: (parent, args) => {
      return UserModel.find();
    }
  },

  Mutation: {
    addUser: (parent, args) => {
      console.log(args.input);
      let user = new UserModel(args.input);
      return user.save();
    },
    editUser: async (parent, args) => {
      try {
        console.log(args.input.id);
        return await UserModel.findByIdAndUpdate(
          args.input.id,
          args.input,
          { new: true }
        );
      } catch (error) {
        return error;
      }
    },
    deleteUser: async (parent, args) => {
      try {
        return await UserModel.findByIdAndRemove(args.id);
      } catch (error){
        return error;
      }
    }
  }
}

module.exports = userResolver;