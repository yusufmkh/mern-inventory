module.exports = {
  mongoURI: process.env.ATLAS_URI || "YOUR_MONGO_URI",
  sessionSecret: process.env.SESSION_SECRET || "SECRET_WORD"
};