import pg from 'pg'

const config = {
	user: 'postgres',
	host: 'localhost',
	database: 'dnz-kshpl',
	password: 'root',
	port: 5432,
};

const client = new pg.Client(config);

client.connect(err => {
	if (err) {
		throw err;
	} else {
		console.log("connect ok");
	}
})

export const queryToDB = (query) => {
	try {
		return client.query(query)
	} catch (error) {
		return error
	}
}