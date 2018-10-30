const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const PORT = process.env.PORT || 4000;

app.use('/graphql', expressGraphQL({
	schema: schema,
	graphiql: true
}));

app.listen(PORT, () => {
	console.log('Listening on port', PORT);
})