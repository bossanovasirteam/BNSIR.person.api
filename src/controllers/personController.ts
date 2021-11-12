import {
  Body,
  Controller,
  Get,
  Route,
  Response,
  Res,
  TsoaResponse
} from "tsoa";
import { ErrorResponse } from "../models/errorResponse";


@Route("/person")
export class PersonController extends Controller {
  @Response<ErrorResponse>(400, "Bad Request")
  @Get("/")
  public async relationships(): Promise<string> {
    return "Hello World!";
  }
}