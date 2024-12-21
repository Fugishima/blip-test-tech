import { Test } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
    let app;

    beforeEach(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/get-takenet-repos (GET)", () => {
        return request(app.getHttpServer())
            .get("/get-takenet-repos")
            .expect(200);
    });
});

