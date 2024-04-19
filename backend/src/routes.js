import { Router } from "express";
import pool from "./db.js";
import { authorize } from "./middlewares/authorize.js";
import { generateToken } from "./generateToken.js";
const routes = Router();

routes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { rows } = await pool.query(
      "SELECT id FROM public.users where email = $1 and password = $2",
      [email, password]
    );
    const token = `JWT ${generateToken(rows[0])}`;
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

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

      // muda o status para 1

      return res.status(201).json({ id: insert.rows[0].id });
    } catch (error) {
      console.log(error);
      return res.status(404);
    }
  }
);

routes.post(
  "/documents/:document_id/description/:description_id/review",
  authorize,
  async (req, res) => {
    const { document_id, description_id } = req.params;
    const { vote } = req.body;

    if (vote === 1) {
      // Caso aprove:
      try {
        // Muda status do document para 2 (catalogado)
        const documents = await pool.query(
          "UPDATE public.documents set status = $1 where id = $2 returning reward_points",
          [2, document_id]
        );
        const { reward_points } = documents.rows[0];

        const { user_id } = req.user;

        const users = await pool.query(
          // Incrementa a pontuacao do user com os pontos do document
          "UPDATE public.users set points = points + $1 where id = $2 returning points",
          [reward_points, user_id]
        );
        res.json({ user_points: users.rows[0].points });
      } catch (error) {
        console.log(error);
        res.status(404);
      }
    } else if (vote === 0) {
      // Caso negue:
      // Muda o status para 0
      // Deleta a avaliacao
    }
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
