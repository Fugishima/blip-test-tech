import { Injectable } from "@nestjs/common";
import { OctokitService } from "./octokit/octokit.service";

@Injectable()
export class AppService {
    #octokitService;

    constructor() {
        this.#octokitService = new OctokitService();
    }

    getTekenetRepos() {
        return this.#octokitService.getRepos("takenet", "public", "C#", 6);
    }
}

