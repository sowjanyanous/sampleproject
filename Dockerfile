# FROM node:18-slim
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
#EXPOSE 80
# CMD ["npm", "start"]


# Use Amazon ECR Public version of Node 18 (no rate limits)
FROM public.ecr.aws/docker/library/node:18-slim

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]
