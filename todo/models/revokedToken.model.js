const mongoose = require("mongoose");

const revokedTokenSchema = new mongoose.Schema(
  {
    token: String,
  },
  { timestamps: true }
);

const revokedToken = mongoose.model("revoked-tokens", revokedTokenSchema);

module.exports = revokedToken;
