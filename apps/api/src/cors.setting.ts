export const CorsSetting = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
  allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
};
