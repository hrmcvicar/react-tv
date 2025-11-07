import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
//import EpisodeDetails from episodedetails

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  //why extra {} around show?
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p>Select a show to decide what to watch!</p>;

    //<section className="show-details">
    //<h2>Show Details</h2>

    //</section>
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
