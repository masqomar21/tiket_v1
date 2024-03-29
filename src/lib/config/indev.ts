/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import dotenv from 'dotenv'

// dotenv.config()

export const CONFIG = {
  appName: process.env.APP_NAME,
  appVersion: process.env.APP_VERSION,
  appMode: process.env.APP_MODE || 'dev',
  appLog: (Boolean(process.env.APP_LOG)) || false,
  port: process.env.APP_PORT,
  host: process.env.APP_HOST || 'localhost',
  secret: {
    keyEncryption: process.env.SECRET_KEY_ENCRYIPTION,
    passwordEncryption: process.env.SECRET_PASSWORD_ENCRYPTION,
    secretToken: process.env.SECRET_TOKEN,
    secreReferstToken: process.env.SECRET_REFRESS_TOKEN,
    secretEmailVerivcation: process.env.SECRET_EMAIL_VERIVICATION
  },
  maximumUploadFile: process.env.MAXIMUM_UPLOAD_FILE || 1024,
  dataBase: {
    development: {
      url: process.env.DATABASE_URL,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    },
    testing: {
      url: process.env.DATABASE_URL,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    },
    production: {
      url: process.env.DATABASE_URL,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_PRODUCTION,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    }
  },
  smtp: {
    host: process.env.VERIFICATION_HOST,
    port: process.env.VERIFICATION_PORT,
    email: process.env.VERIFICATION_EMIAL,
    password: process.env.VERIFICATION_EMIAL_PASSWORD
  }
}
