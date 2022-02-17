import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { SampleController } from "./controllers/sample/sample.controller";
import { SampleServices } from "./controllers/sample/sample.service";
import { SqlModule } from "@mayajs/sql";
import SqlOptions from "./databases/sql";

@Module({
  declarations: [AppController, SampleController],
  imports: [SqlModule.forRoot(SqlOptions), RouterModule.forRoot(routes)],
  providers: [SampleServices],
  bootstrap: AppController,
})
export class AppModule {}
