module.exports = (app, options) => {
  app.get('/', (req, res, next) => {
	  const db = options.db;
	    console.log('database2', db);
	const coll=  db.collection('test');
	coll.find({}, function(err, docs) {
		docs.each(function(err, doc) {
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
	  const db = options.db;
	  db.collection('test').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });
      res.send(200)
    })
}