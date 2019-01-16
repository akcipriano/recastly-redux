var searchYouTube = ({key, query, max = 5}, callback) => {
  console.log('searchYouTube', key, query);
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(error => {
      console.log(error);
      // responseJSON.error.errors.forEach((err) =>
      //   console.error(err)
      // );
    });
};

export default searchYouTube;
