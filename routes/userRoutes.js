import express from "express";

const router = express.Router();

import { loginUser } from "../controller/login.controller.js";
import { userRegistration } from "../controller/register.controller.js";
import { postMovies, updateMovie, deleteMovie, allMoviesList } from "../controller/movie.controller.js"
import { authorizedRoutes, movieOwener } from "../auth/user.auth.js";
// User login end points
router.post("/login", loginUser);

// User register end points
router.post("/register", userRegistration);

//Logged in user able to post movies
router.post("/addMovie", authorizedRoutes, postMovies);

//Logged in user updates his movie
router.put("/:id",authorizedRoutes, movieOwener, updateMovie);

//Logged in User deletes his movie
router.delete("/:id",authorizedRoutes, movieOwener, deleteMovie)

//Logges in user gets all movies
router.get("/findMovies", authorizedRoutes, allMoviesList)
export default router;

