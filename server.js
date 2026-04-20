const express = require("express");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

AWS.config.update({
  region: "ap-southeast-1",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// ===============================
// ✅ TABLE NAMES
// ===============================
const TABLE_AKTIVITAS = "aktivitas_pembelajaran";
const TABLE_SENSOR = "esp32_sensor_data";


// ===============================
// ✅ GET DATA AKTIVITAS
// ===============================
app.get("/aktivitas", async (req, res) => {
  try {
    const data = await dynamodb.scan({
      TableName: TABLE_AKTIVITAS
    }).promise();

    res.json(data.Items);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ===============================
// ✅ GET DATA SENSOR (REAL-TIME)
// ===============================
app.get("/sensor", async (req, res) => {
  try {
    const data = await dynamodb.scan({
      TableName: TABLE_SENSOR
    }).promise();

    if (!data.Items || data.Items.length === 0) {
      return res.json({});
    }

    // 🔥 AMBIL DATA TERBARU BERDASARKAN TIMESTAMP
    const latest = data.Items.sort((a, b) => b.ts - a.ts)[0];

    res.json(latest);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ===============================
// ✅ POST DATA AKTIVITAS
// ===============================
app.post("/aktivitas", async (req, res) => {
  const { id, judul_aktivitas, tanggal, deskripsi, kategori } = req.body;

  try {
    await dynamodb.put({
      TableName: TABLE_AKTIVITAS,
      Item: { id, judul_aktivitas, tanggal, deskripsi, kategori },
    }).promise();

    res.json({ message: "Data berhasil ditambahkan" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ===============================
app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});