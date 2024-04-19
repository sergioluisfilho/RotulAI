import { Router } from "express";
import pool from "./db.js";
import { authorize } from "./middlewares/authorize.js";

const routes = Router();

routes.get("/documents", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM public.documents", []);
    res.json({ documents: rows });
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

// routes.get("/documents/:id", async (req, res) => {
//   const { user_id } = req.user;
//   const { document_id } = req.params;
//   res.json({ user_id, document_id });
// });

routes.post(
  "/documents/:document_id/description",
  authorize,
  async (req, res) => {
    try {
      const { title, date, content, indexes } = req.body;
      const { user_id } = req.user;
      const document_id = parseInt(req.params.document_id);
      console.table({
        title,
        date,
        content,
        indexes,
        user_id,
        document_id,
      });
      const insert = await pool.query(
        "INSERT INTO public.descriptions (title, date, content, indexes, user_id, document_id) VALUES ($1, $2, $3, $4, $5, $6) returning id",
        [title, date, content, indexes, user_id, document_id]
      );
      console.log(insert);
      return res.status(201).json({ id: insert.rows[0].id });
    } catch (error) {
      console.log(error);
      return res.status(404);
    }
  }
);

routes.post(
  "/documents/:document_id/description/:description_id/review",
  async (req, res) => {
    res.send();
  }
);

routes.get("/profile/", authorize, async (req, res) => {
  try {
    const { user_id } = req.user;
    const { rows } = await pool.query(
      "SELECT id, name, points, email FROM public.users where id = $1",
      [user_id]
    );
    res.json({ user: rows[0] });
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

routes.get("/rewards", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM public.rewards", []);
    res.json({ rewards: rows });
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

export default routes;
