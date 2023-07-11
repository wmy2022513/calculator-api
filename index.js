import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.get("/sum", function (request, reply) {
  const a = parseInt(request.query["a"]);
  const b = parseInt(request.query["b"]);
  reply.send({result: a + b});
});

fastify.get("/mul", function (request, reply) {
  const a = parseInt(request.query["a"]);
  const b = parseInt(request.query["b"]);
  reply.send({result: a * b});
});

// Run the server!
fastify.listen({port: 3000, host: '0.0.0.0'}, function (err, address) {
    //need to add host to specify if server not listening to 0.0.0.0
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
