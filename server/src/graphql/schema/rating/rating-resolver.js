const RatingModel = require('../../../models/rating');
const StoreModel = require('../../../models/store');

const ratingResolver = {
  RatingType: {
    store_relate: (parent, args) => {
      console.log("Rating Type");
      return StoreModel.findById(parent.store);
    }
  },
  Query: {
    rating: (parent, args) => {
      return RatingModel.findById(args.id);
    },
    ratings: (parent, args) => {
      return RatingModel.find();
    }
  },

  Mutation: {
    addRating: (parent, args) => {
      console.log("Hitting Endpoint");
      let rating = new RatingModel(args.input);
      return rating.save();
    },
    editRating: async (parent, args) => {
      try {
        console.log(args.input._id);
        return await RatingModel.findByIdAndUpdate(
          args.input._id,
          args.input,
          { new: true }
        );
      } catch (error) {
        return error;
      }
    },
    deleteRating: async (parent, args) => {
      try {
        console.log("Hitting Delete Endpoint");
        return await RatingModel.findByIdAndRemove(args.id);
      } catch (error) {
        return error;
      }
    }
  }
}

module.exports = ratingResolver;