import { Router } from "express";

const routes = Router();

routes.get("/documents", async (req, res) => {
  res.send();
});

routes.get("/documents/:id", async (req, res) => {
  res.send();
});

routes.post("/documents/:id/description", async (req, res) => {
  res.send();
});

routes.post(
  "/documents/:document_id/description/:description_id/review",
  async (req, res) => {
    res.send();
  }
);

routes.get("/profile", async (req, res) => {
  res.send();
});

routes.get("/rewards", async (req, res) => {
  res.send();
});

export default routes;
