import "dotenv/config";

const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
  refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,
  resetPasswordExpirationMinutes:
    process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
  verifyEmailExpirationMinutes: process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
};

export default authConfig;
