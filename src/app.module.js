import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OctokitModule } from "./octokit/octokit.module";

@Module({
    imports: [OctokitModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

