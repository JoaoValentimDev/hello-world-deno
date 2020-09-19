# HELLO WORLD EM DENO 

Esse projeto mostra de maneira simplificada um "Hello World" no **deno**. 

## O que é deno?

**Deno** é um ambiente de execução **runtime** de códigos JavaScript e TypeScript. Foi criado com o mesmo intuito do Node.js, porém, com algumas diferenças bastante notórias, como na parte de segurança e permissão.

Por padrão o Node.js tem livre acesso a seu sistema com todas as permissões. Já o **deno**  possui um nível elevado de segurança, ou seja, você deve dizer ao que ele pode ter acesso.

Alem da segurança ele também não usa um gerenciador de pacotes, como é o caso do Node.js com o **npm**. Todos os módulos e pacotes são obtidos por meio da URL de seu repositório na web.

Além de tudo isso ele é **cross-platform**, ou seja, ele roda no Linux, Mac  e Windows e é totalmente grátis.

## Como instalar o deno?

1.  Windows (PowerShell)

    ```pow
   iwr https://deno.land/x/install/install.ps1 -useb | iex
    ```

2.  Mac e Linux

    ```sh
   $ curl -fsSL https://deno.land/x/install/install.sh | sh
    ```

3.  Homebrew (Mac)

   ```sh
   $ brew install deno
   ```

4.  [Chocolatey](https://chocolatey.org/packages/deno) (Windows)

    ```pow
   choco install deno
    ```

## Ferramentas

Neste projeto foram utilizadas as seguintes tecnologias:

- **Deno** instalado
- Editor de texto :Bloco de Notas, Visual Studio Code, ou outro de sua preferência;
- Navegador Web.



# Execução do projeto

Para executar o projeto siga os seguintes passos:

1. Clone o repositório usando o comando **git** para um local de sua escolha:

   ```sh
    $ git clone https://github.com/JoaoValentimDev/hello-world-deno.git
   ```

2. Entre na pasta do projeto:

   ```sh
   $ cd hello-world-deno/
   ```

3. Execute no seu terminal/cmd o comando **deno** seguido de **run** eo nome do arquivo JavaScript:

   ```sh
   $ deno run ./hello.js
   ```

4. Após o comando ser executado, a seguinte mensagem aparecerá no seu console:

   ```sh
   Servidor rodando na porta 3000...
   ```

5. Deixe o terminal/prompt aberto e abra seu navegador de Internet. Na sequência, digite na barra de pesquisa "localhost:3000" e tecle ***Enter***.

   [![img](https://camo.githubusercontent.com/f34ebada9309fde4cc3838ea263daa214524afa1/68747470733a2f2f666c6176696f636f7065732e636f6d2f646f636b65722d6e6f64652d636f6e7461696e65722d6578616d706c652f53637265656e25323053686f74253230323032302d30372d3035253230617425323031312e33302e33332e706e67)](https://camo.githubusercontent.com/f34ebada9309fde4cc3838ea263daa214524afa1/68747470733a2f2f666c6176696f636f7065732e636f6d2f646f636b65722d6e6f64652d636f6e7461696e65722d6578616d706c652f53637265656e25323053686f74253230323032302d30372d3035253230617425323031312e33302e33332e706e67)

   Finalmente, aparecerá a frase na sua tela.



## Arquivo "hello.js"

Em nosso arquivo "hello.js" temos os seguintes comandos:

```js
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
```

Esses serão responsáveis por exibir nosso "Hello World" em tela.
