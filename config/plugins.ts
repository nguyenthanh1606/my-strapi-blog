module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "NewHRcVxSD2YKKb77VWKig=="),
    },
  },
});
