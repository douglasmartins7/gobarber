Passos para a execução

1. Precisa baixar um software para testar sua api
   ou postman: https://www.getpostman.com/
   ou insomnia: https://insomnia.rest/
2. Instalar o yarn o npm(dependency management)
3. Baixar os pacotes com o comando "yarn" ou o "npm install"
4. Subir o container com o banco relacional postgres. Com o comando:
   "docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres"
5. Subir o container com banco não relacional MONGODB. Com o comando:
   "docker run --name mongobarber -p 27017:27017 -d -t mongo"
   Para testar se esta funcionando acesse a url: localhost:27017 e deve exibir a mensagem
   "It looks like you are trying to access MongoDB over HTTP on the native driver port."
6. Subir o container do redis para fila(queue) com o comando:
   "docker run --name redisbarber -p 6379:6379 -d -t redis:alpine"
7.
8.
