import Movie from "../models/movieModel.js";

//Function to post movie
export const postMovies = async (req, res) => {
  const movieDetail = req.body;
  try {
        const {title, description, genere} = movieDetail  
        const createdMovie = await Movie.create({
        title: title,
        description: description,
        genere: genere,
        publisher: req.user._id
        }, function(err,newMovie){
          if(err){
            console.log(err)
          } else {
            newMovie.publisher = req.user._id
            newMovie.save();
          }
        });
        res.status(201).json({msg: "Movie posted successfully!"})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Function to Update Movie by id
export const updateMovie = async (req, res) => {
  const movieupdateDetail = req.body;
  try {
    const { title, description, genere} = movieupdateDetail;
    const updateMovie = await Movie.findOneAndUpdate(
        {_id: req.params.id, },
        {
            $set: {  
                title: title,
                description: description,
                genere: genere,
            }
        },{
            upsert: true
        }        
    );
    res.status(200).json({msg: `Movie Updates successfully`})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Function to delete movie by id
export const deleteMovie = async (req, res) => {
    try{
        Movie.deleteOne({
            _id: req.params.id
        },function (err) {
            if (err) return handleError(err);
          })
        res.status(200).json({msg: "Movie deleted successfully!"})
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}


//Function to get all movies
 export const allMoviesList =  (req,res) => {
   try{
    const listAllMovies =  Movie.find({}, {_id:0, title:1, description: 1, genere: 1}, async(err,result) => {
      if (err) {
        return handleError(err);
      } else {
        res.status(200).json({ result })
      }
    })
   } catch(err){
    res.status(500).json({ message: err.message });
   }
 }