const RatingModel = require('../../../models/rating');

const ratingResolver = {
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
      console.log(args.input);
      let rating = new RatingModel(args.input);
      return rating.save();
    },
    editRating: async (parent, args) => {
      try {
        console.log(args.input.id);
        return await RatingModel.findByIdAndUpdate(
          args.input.id,
          args.input,
          { new: true }
        );
      } catch (error) {
        return error;
      }
    },
    deleteRating: async (parent, args) => {
      try {
        return await RatingModel.findByIdAndRemove(args.id);
      } catch (error) {
        return error;
      }
    }
  }
}

module.exports = ratingResolver;