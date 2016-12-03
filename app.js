// modulos
  const express =  require('express');
  const app = express();

  require('./config/express')(app, express);
  require('./route/routes')(app);

  //app.use();
  app.listen(3000);
