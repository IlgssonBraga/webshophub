FROM node:21

# Cria o diretório de trabalho na imagem
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json /app/

# Instala as dependências
RUN npm install

# Copia todos os arquivos do diretório local para o diretório de trabalho na imagem
COPY . /app/

# COPY entrypoint.sh .
# Expõe a porta 3333
EXPOSE 3333

# Torna o script de entrada executável
# RUN chmod +x entrypoint.sh

# # Comando para iniciar a aplicação quando o contêiner for executado
CMD ["npm","run","dev"]
# # CMD ["./entrypoint.sh"]