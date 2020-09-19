// importação de serve (criar servidor) 
import { serve } from 'https://deno.land/std/http/server.ts';

// mensagem para mostrar que nosso server está rodando
console.log("Servidor rodando na porta 3000");

// criando server
const server = serve({
    port: 3000
});

// recebendo nossas requisições
for await (const req of server) {
    req.respond({
        body : "Hello World!"
    });
}

