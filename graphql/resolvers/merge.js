const Show = require('../../models/show')


const transformShow = show => {
    return {
        ...show._doc,
        _id: show.id
    };
};

  
const transformEpisode = episode => {
    return {
        ...episode._doc,
        _id: episode.id
    };
};
  