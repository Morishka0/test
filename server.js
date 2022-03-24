import jsonServer from "json-server";
import fs from "fs";
import jwt from "jsonwebtoken";
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();
const database = JSON.parse(fs.readFileSync("./database.json")).users;
const expiresIn = "1h";
const SECRET_KEY = "Takeoff Staff";

server.use(jsonServer.bodyParser);
server.use(middlewares);

const createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

server.post("/login", (request, response) => {
  const { login } = request.body;
  const token = createToken({ login });
  response.json(token);
});

server.get("/profile", (request, response) => {
  const verifiedToken = verifyToken(
    request.headers.authorization.split(" ")[1]
  );
  const user = database.find((user) => user.login === verifiedToken.login);
  response.json(user);
});

server.use(router);
server.listen(3000);
