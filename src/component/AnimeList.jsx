const AnimeList = ({ results }) => {
  return (
    <div className="anime_container">
      {results.map(({ title, image_url, score, url }, i) => (
        <div key={i} className="anime_card">
          <div className="img_container">
            <img src={image_url} alt={title} />
          </div>
          <div>
            <p>{title}</p>
            <p>score: {score}</p>
            <p className="know_more">
              <a href={url} rel="noreferrer" target="_blank">
                Know More
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
