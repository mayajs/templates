import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import { SampleServices } from "./sample.service";

@Controller()
export class SampleController {
  constructor(private services: SampleServices) {}

  @Post()
  async createUsers({ body }: MayaJsContext): Promise<any> {
    // Create a Users
    return { message: "From UsersController POST route", body };
  }

  @Get()
  async readUsers(): Promise<any> {
    // Read all Users list
    return `<h2>TEST</h2>`;
  }

  @Get("/:id")
  async readUsersByID({ params }: MayaJsContext): Promise<any> {
    // Read Users by ID from list
    return { message: "From UsersController GET route with params ID", params };
  }

  @Put("/:id")
  async replaceUsers({ body, params }: MayaJsContext): Promise<any> {
    // Replace Users from list
    return { message: "From UsersController PUT route", body, params };
  }

  @Patch("/:id")
  async updateUsers({ body, params }: MayaJsContext): Promise<any> {
    // Update Users from list
    return { message: "From UsersController PATCH route", body, params };
  }

  @Delete("/:id")
  async deleteUsers({ params }: MayaJsContext): Promise<any> {
    // Delete Users from list
    return { message: "From UsersController DELETE route", params };
  }
}
