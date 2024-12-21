const { AppController } = require("./app.controller");

describe("AppController", () => {
    let appController;
    let appService;

    beforeEach(() => {
        appService = {
            getTekenetRepos: jest.fn(),
        };

        appController = new AppController(appService);
    });

    it("should be defined", () => {
        expect(appController).toBeDefined();
    });

    it("should return the result of appService.getTekenetRepos", async () => {
        const mockRepos = [
            { id: 1, name: "repo1" },
            { id: 2, name: "repo2" },
        ];

        appService.getTekenetRepos.mockResolvedValue(mockRepos);

        const result = await appController.getTakenetRepos();

        expect(result).toEqual(mockRepos);
        expect(appService.getTekenetRepos).toHaveBeenCalled();
    });
});

