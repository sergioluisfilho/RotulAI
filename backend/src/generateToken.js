import jwt from "jsonwebtoken";
const SECRET = "oaufgh;oasiudhf0w9euf-0efipdijewnkafLefhc-0f0h-0f0h-1";
export const generateToken = (payload) => {
  return jwt.sign(
    {
      data: payload,
    },
    SECRET,
    { expiresIn: 60 * 60 * 24 } // 1 day
  );
};
