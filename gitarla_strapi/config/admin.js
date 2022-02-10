module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13af9714a4e275c532b3ad3f5a505c42'),
  },
});
