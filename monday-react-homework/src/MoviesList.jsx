import { useState } from "react";

const MoviesList = () => {
    const [movies, setMovies] = useState([
        "The Sandlot", "Pulp Fiction", "Soul Surfer", 
    "Saving Private Ryan", "Black Mass", "Slapshot", "Friday Night Lights"
    ])

    const [summaries, setSummaries] = useState([
        "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.",
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "Bethany Hamilton, a professional surfer, loses her left arm in a shark attack. Unwilling to pay attention to the gravity of her situation, Bethany decides to get back into the ocean and surf again.",
        "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "The true story of Whitey Bulger, the brother of a state senator and the most infamous violent criminal in the history of South Boston, who became an FBI informant to take down a Mafia family invading his turf.",
        "A failing ice hockey team finds success with outrageously violent hockey goonery.",
        "Based on H.G. Bissinger's book, which profiled the economically depressed town of Odessa, Texas and their heroic high school football team, The Permian High Panthers."
    ]);

    const [selected, setSelected] = useState(-1);

    return (
        <div className="display-movies">
            <ul>
                {movies.map((movie, index) =>
            <li onClick={() => setSelected(index)} key={index}>{movie}</li>)}
            </ul>
        </div>
    );
};


export default MoviesList;