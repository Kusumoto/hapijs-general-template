'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.register(require('inert'), (err) => {

	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply('Hello, world!');
		}
	});

	server.route({
		method: 'GET',
		path: '/js/{filename}',
		handler: function (request, reply) {
			reply.file('js/' + request.params.filename);
		}
	});

	server.route({
		method: 'GET',
		path: '/css/{filename}',
		handler: function (request, reply) {
			reply.file('css/' + request.params.filename);
		}
	});

	server.route({
		method: 'GET',
		path: '/images/{filename}',
		handler: function (request, reply) {
			reply.file('images/' + request.params.filename);
		}
	});

	server.start(() => {
		console.log('Server running at:', server.info.uri);
	});

});