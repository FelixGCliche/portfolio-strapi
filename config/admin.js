module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb7dfd561eedd461bdb93fb23feb3d5e'),
  },
});
