import { useState } from "react";

const MoviesList = () => {
    const allMovies = [
        "The Sandlot", "Pulp Fiction", "Soul Surfer", 
        "Saving Private Ryan", "Black Mass", "Slapshot", "Friday Night Lights"
    ];

    const allSummaries = [
        "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.",
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "Bethany Hamilton, a professional surfer, loses her left arm in a shark attack. Unwilling to pay attention to the gravity of her situation, Bethany decides to get back into the ocean and surf again.",
        "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "The true story of Whitey Bulger, the brother of a state senator and the most infamous violent criminal in the history of South Boston, who became an FBI informant to take down a Mafia family invading his turf.",
        "A failing ice hockey team finds success with outrageously violent hockey goonery.",
        "Based on H.G. Bissinger's book, which profiled the economically depressed town of Odessa, Texas and their heroic high school football team, The Permian High Panthers."
    ];

    const sportsMovies = ["The Sandlot", "Soul Surfer", "Slapshot", "Friday Night Lights"];
    
    const sportsSummaries = [
        "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.",
        "Bethany Hamilton, a professional surfer, loses her left arm in a shark attack. Unwilling to pay attention to the gravity of her situation, Bethany decides to get back into the ocean and surf again.",
        "A failing ice hockey team finds success with outrageously violent hockey goonery.",
        "Based on H.G. Bissinger's book, which profiled the economically depressed town of Odessa, Texas and their heroic high school football team, The Permian High Panthers."
    ];

    const [movies, setMovies] = useState(allMovies);
    const [summaries, setSummaries] = useState(allSummaries);
    const [selected, setSelected] = useState(-1);

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
        setSummaries(summaries.filter((_, i) => i !== index));
    };

    const displaySportsMovies = () => {
        setMovies(sportsMovies);
        setSummaries(sportsSummaries);
    };

    const displayAllMovies = () => {
        setMovies(allMovies);
        setSummaries(allSummaries);
    };

    return (
        <div className="display-movies">
            <h3>Movies</h3>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie}
                        <button onClick={() => setSelected(index)}>
                            View Summary
                        </button>
                        <button onClick={() => removeMovie(index)}>
                            Remove Movie
                        </button>
                    </li>
                ))}
                {selected !== -1 && (
                    <p>{summaries[selected]}</p>
                )}
            </ul>
            <button onClick={displaySportsMovies}>
                Display Sports Movies
            </button>
            <button onClick={displayAllMovies}>
                Display All Movies
            </button>
        </div>
    );
};

export default MoviesList;