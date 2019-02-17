module.exports = (app, options) => {
  app.get('/', (req, res, next) => {
	const coll=  options.db.collection('test');
	coll.find({}, function(err, docs) {
		docs.forEach(function(err, doc) {
		  if(doc) {
			res.write(JSON.stringify(doc) + "\n");
		  }
		  else {
			res.end();
		  }
		})
	})	  
  })
  
  app.post('/user', (req, res, next) => {
	  options.db.collection('test').insertOne({
        Employeeid: req.body.id,
        EmployeeName: req.body.name
    });
      res.sendStatus(200);
    })
}