const request = require("supertest");
const baseURL = "http://localhost:3000";

describe("School API", () => {
  const newSchool = {
    id: Math.floor(Math.random() * (100 - 10 + 1) + 10),
    name: "school - test - 1",
  };
  beforeAll(async () => {
    // set up the school
    await request(baseURL).post("/api/school/").send(newSchool);
  });
  afterAll(async () => {
    await request(baseURL).delete(`/api/school/${newSchool.id}`);
  });
  it("should return 200", async () => {
    const response = await request(baseURL).get("/api/school/");
    expect(response.statusCode).toBe(200);
  });
  it("should return schools", async () => {
    const response = await request(baseURL).get("/api/school/");
    expect(response.body.data.length >= 1).toBe(true);
  });
  it("should add an school", async () => {
    const response = await request(baseURL)
      .post("/api/school/")
      .send(newSchool);
    expect(response.statusCode).toBe(201);
    expect(response.body.data).toBe("Successfully added");
  });
  it("should delete one school", async () => {
    const response = await request(baseURL).delete(
      `/api/school/${newSchool.id}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBe("Successfully deleted");
  });

  it("should update school if it exists", async () => {
    const response = await request(baseURL).put(`/api/school/`).send({
      id: newSchool.id,
      name: "school - test - updated -val",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.data).toBe("Successfully updated");
  });
});
