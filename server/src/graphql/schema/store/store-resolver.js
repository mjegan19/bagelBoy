const StoreModel = require('../../../models/store');
const RatingModel = require('../../../models/rating');


const storeResolver = {
  StoreType: {
    ratings : (parent, args) => {
      return RatingModel.find({ store: parent._id})
    }
  },
  Query: {
    store: (parent, args) => {
      return StoreModel.findById(args.id);
    },
    stores: (parent, args) => {
      return StoreModel.find();
    }
  },

  Mutation: {
    addStore: (parent, args) => {
      console.log(args.input);
      let store = new StoreModel(args.input);
      return store.save();
    },
    editStore: async (parent, args) => {
      try {
        console.log(args.input.id);
        return await StoreModel.findByIdAndUpdate(
          args.input.id,
          args.input,
          { new: true }
        );
      } catch (error) {
        return error;
      }
    },
    deleteStore: async (parent, args) => {
      try {
        return await StoreModel.findByIdAndRemove(args.id);
      } catch (error) {
        return error;
      }
    }
  }
}

module.exports = storeResolver;