import { Controller, Dependencies, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
@Dependencies(AppService)
export class AppController {
    constructor(appService) {
        this.appService = appService;
    }

    @Get("/get-takenet-repos")
    getTakenetRepos() {
        return this.appService.getTekenetRepos();
    }
}

