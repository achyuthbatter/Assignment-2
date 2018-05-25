module.exports.theBestMovie = function(req, res){
  res.render('movies', { title: 'My Best Favourite Movie' });
};

module.exports.theWorstMovie = function(req,res){
    res.render('movies', { title: 'My Least Favourite Movie' });
};
