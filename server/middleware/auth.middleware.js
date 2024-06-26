import JWT from "jsonwebtoken";

//protected route

export const requireSignIn = async (req, res, next) =>  {
  try {
      const token = req.header('Authorization');
      console.log( req.headers.Authorization)
      if (!token) {
          return res.status(401).json({ error: 'Unauthorized - Token not provided' });
      }
      console.log(token)
      JWT.verify(token,process.env.JWT_SECRET,(err, user) => {
          if (err) {
              return res.status(403).json({ error: 'Forbidden - Invalid token' });
          }
          req.user = user;
          next();
      });
  }
  catch (error) {
    console.log(error)
      res.status(500).send({
          message: "Internal Server Error",
          error: error.message,
      })
  }
}