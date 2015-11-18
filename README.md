# cse5335-hkh0606-2

1) What is your external data source used to populate your Heroku data sources?

I have used http://www.filltext.com/ to generate the json file that contains 150 elements.

2) What are the Heroku toolbelt commands to execute the scripts?

The following commands are used to query the database. 150 elements of data has already been pushed.

node postgresql_prompt_fname.js (Query on non-primary id)

node postgresql_prompt_id.js (Query on primary id)

node mongo_prompt_fname.js (Query on non-primary id)

node mongo_prompt_id.js (Query on primary id)

node redis_fname.js (Query on non-primary id)

node redis_pkey.js (Query on primary id)

The following commands were used to push data to the database

node postgresql_load.js

node mongo.js

node redis.js


3) What aspect of the implementation did you find easy, if any, and why?

I found it easy to load data into the addons created on heroku.

4)What aspect of the implementation did you find hard, if any, and why?

Retrieving data from redis was hard as it stored data in key/value pairs.
