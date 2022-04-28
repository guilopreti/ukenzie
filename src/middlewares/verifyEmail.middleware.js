import database from "../database";

const verifyEmailMiddleware = async (request, response, next) => {
  const { email } = request.body;

  try {
    const resp = await database.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (resp.rows.length) {
      return response.status(401).json({ message: "Email is already in use" });
    }

    next();
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export default verifyEmailMiddleware;
