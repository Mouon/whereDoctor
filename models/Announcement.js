const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  INST_NM: String,
  TITLE_NM: String,
  CLASS_NM: String,
  URL_NM: String,
  ADDR: String,
  TM: String,
  EXPN: String,
  TELNO: String,
  MNGT_NM: String,
  HMPG_NM: String,
  PARTCPTN_WRITR_NM: String,
  IMAGE_URL_NM: String,
  BGNG_DE: String,
  END_DE: String
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
