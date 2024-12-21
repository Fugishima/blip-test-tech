import {
    Injectable,
    InternalServerErrorException,
    Logger,
} from "@nestjs/common";
import { Octokit } from "octokit";

@Injectable()
export class OctokitService {
    #octokit;
    #logger;

    constructor() {
        this.#octokit = new Octokit({
            auth: process.env.PERSONAL_ACCESS_TOKEN,
        });

        this.#logger = new Logger(OctokitService.name);
    }

    async filterByLanguage(repos, language) {
        return repos.data.filter(repo => repo.language === language);
    }

    async getRepos(owner, type, language, per_page) {
        try {
            /*
             * Por conta da filtragem por language não ser estrita
             * acaba vindo um repositorio onde a language é null.
             * A solução que optei foi trazer 6 repositórios e filtrar
             * o repositório com language null
             */
            this.#logger.log("Request getRepos to octokit...");
            const repos = await this.#octokit.request(
                "GET /orgs/{owner}/repos",
                {
                    owner,
                    type,
                    language,
                    per_page,
                },
            );
            this.#logger.log("Success");

            return this.filterByLanguage(repos, language);
        } catch (error) {
            this.#logger.error(error);
            throw new InternalServerErrorException("Internal Server Error", {
                description: "Unable to communicate with the octokit API",
                cause: error,
            });
        }
    }
}

