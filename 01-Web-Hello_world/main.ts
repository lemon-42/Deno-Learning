const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

// Iterates incoming connections to the server
// For each user that will connect to the server, we gave him this function to eat. 
for await (const incomingConnexion of server) {
  serveHttp(incomingConnexion);
}


async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const body = `Hello world`;
    requestEvent.respondWith(
      new Response(body, {
        status: 200,
      }),
    );
  }
}