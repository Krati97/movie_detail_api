import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: String,

    description: String,

    genere: String,

    publisher: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
    
  });
  
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;