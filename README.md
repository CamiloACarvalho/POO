# POO

Estudos referentes a Programação Orientada a Objetos


📋 **Checklist para instalção do NODE com TypeScript**

**Passo 1:** Configuração Inicial
- ✔️ **Inicialize o projeto Node**
    ```s
      npm init -y
    ```
**Passo 2:** Instalação do TypeScript
- ✔️ **Na pasta raiz do projeto instale o TypeScript com o seguinte comando no terminal:**
    ```s
      npm install -D ts-node@10.9.1 typescript@4.4
    ```
**Passo 3:** Configuração do tsconfig.json
- ✔️ **3.1 Ainda na pasta raiz digite no terminal o comando:**
    ```s
      npx tsc --init
    ```
- ✔️ **3.2 Abra o arquivo tsconfig.json e insira as seguintes configurações:**

  *Observação: Apague todo o conteúdo do arquivo `tsconfig.json` e cole o código abaixo:*

    ```json
    {
      "compilerOptions": {
        "target": "es2016",                                 
        "module": "commonjs",
        "rootDir": "./",
        "outDir": "./dist",
        "preserveConstEnums": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
      }
    }  
    ``` 
**Passo 4:** Instalando o NODE.js
- ✔️ **Por fim instale o pacote NPM com as definições para NODE.js mais atualizadas na raiz do projeto com o seguinte comando no terminal:**
    ```s
      npm install -D @types/node@latest
    ```
**Passo 5:** Criando gitignore
- ✔️ **5.1 Crie o arquivo `.gitignore` na raiz do projeto com o seguinte comando no terminal:**
    ```s
      touch .gitignore
    ```
- ✔️ **5.2 Agora abra o arquivo e escreva `node_modules` dentro desse arquivo**
    