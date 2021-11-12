import * as dotenv from "dotenv";
dotenv.config();
import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";
import { ValidateError } from "tsoa";
import { ErrorResponse } from "./src/models/errorResponse";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./build/routes";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

export const app = express();
const swaggerDoc = require('./swagger.json');

app.use(cors({origin: '*'}));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});

app.use(function errorHandler(
  err: any,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    return res.status(400).json(<ErrorResponse>{
      message: "Bad Request",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json(<ErrorResponse>{
      message: "Internal Server Error"
    });
  }

  next();
});
