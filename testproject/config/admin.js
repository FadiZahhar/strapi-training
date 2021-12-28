module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c39ca74cd29868761f65b664f16db473'),
  },
});
