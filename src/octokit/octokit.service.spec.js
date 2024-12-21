const { OctokitService } = require("./octokit.service");
const { InternalServerErrorException } = require("@nestjs/common");
const { Octokit } = require("octokit");

jest.mock("octokit", () => {
    return {
        Octokit: jest.fn().mockImplementation(() => ({
            request: jest.fn().mockResolvedValue({
                data: [
                    { language: "JavaScript", name: "repo1" },
                    { language: "Python", name: "repo2" },
                    { language: null, name: "repo3" },
                ],
            }),
        })),
    };
});

describe("OctokitService", () => {
    let octokitService;

    beforeEach(() => {
        octokitService = new OctokitService();
    });

    it("should be defined", () => {
        expect(octokitService).toBeDefined();
    });

    describe("getRepos", () => {
        it("should call octokit.request and return filtered repositories", async () => {
            const owner = "nestjs";
            const type = "public";
            const language = "JavaScript";
            const per_page = 6;

            const repos = await octokitService.getRepos(
                owner,
                type,
                language,
                per_page,
            );

            expect(repos).toEqual([{ language: "JavaScript", name: "repo1" }]);
        });

        it("should handle errors and throw an InternalServerErrorException", async () => {
            Octokit.mockImplementationOnce(() => ({
                request: jest
                    .fn()
                    .mockRejectedValue(new Error("Request failed")),
            }));

            const owner = "nestjs";
            const type = "public";
            const language = "JavaScript";
            const per_page = 6;

            try {
                await octokitService.getRepos(owner, type, language, per_page);
            } catch (error) {
                expect(error).toBeInstanceOf(InternalServerErrorException);
                expect(error.message).toBe("Internal Server Error");
                expect(error.getResponse()).toEqual({
                    description: "Unable to communicate with the octokit API",
                });
            }
        });
    });

    describe("filterByLanguage", () => {
        it("should filter repositories by the given language", async () => {
            const repos = {
                data: [
                    { language: "JavaScript", name: "repo1" },
                    { language: "Python", name: "repo2" },
                    { language: null, name: "repo3" },
                ],
            };
            const filteredRepos = await octokitService.filterByLanguage(
                repos,
                "JavaScript",
            );

            expect(filteredRepos).toEqual([
                { language: "JavaScript", name: "repo1" },
            ]);
        });
    });
});

