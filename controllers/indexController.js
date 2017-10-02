const controller = function(){}

controller.index = function(req, res, next) {
  res.render('index', { title: 'Cube  game' });
}
module.exports = controller;