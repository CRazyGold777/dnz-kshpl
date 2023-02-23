create TABLE users(
	id SERIAL PRIMARY KEY,
	login VARCHAR(50),
	password VARCHAR(50),
	status VARCHAR(10)
);

create TABLE notion(
	id SERIAL PRIMARY KEY,
	date DATE,
	title VARCHAR(255),
	text TEXT
);

create TABLE news(
	id SERIAL PRIMARY KEY,
	link VARCHAR(20),
	title VARCHAR(255),
	img VARCHAR(255),
	subText VARCHAR(255),
	date DATE,
	text TEXT,
	dopImg TEXT
);