export const getAllowedOrigins = (): string[] => {
  let origins: string =
    process.env.CORS_ALLOWED_ORIGINS || 'http://localhost:3098';
  origins = origins
    .split('\n')
    .join('')
    .split('\r')
    .join('')
    .split(' ')
    .join('');
  return origins.split(',');
};
