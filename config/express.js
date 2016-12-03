
const expresshdd = require('express-handlebars');
  module.exports = (app, express)=> {
    app.engine('handlebars', expresshdd({ defaultLayout: 'moin'}));
    app.set('view engine', 'handlebars');
    app.use(express.static(__dirname + '/../public'));


  //Utilización del middleware
  // app.use(function (req, res, next) {
  //   console.log('Time:', Date.now());
  //   next();
  // });

}
