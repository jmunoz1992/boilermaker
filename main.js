'use strict';

const db = require('./server/db/index.js');
const app = require('./server/index.js');
const PORT = process.env.PORT || 6969;

db.sync()
  .then(() => {
    console.log('The postgres server is up and running - maybe you should go catch it!');
		app.listen(PORT, (err) => {
		  if (err) throw err;
		  console.log(`Your server kindly awaits your attention on port ${PORT}`);
	  });
	})
	.catch(console.error);
