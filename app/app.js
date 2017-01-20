var app = require('express')();
var reload = require('reload');

app.set('port', process.env.PORT || 80);
app.set('view engine','pug');
app.set('views', 'app/views');
//
app.use(require('./routes/index'));


var server = app.listen(app.get('port'), function(){
  console.log(`Listening on port ${app.get('port')}`);
});

reload(server,app);
