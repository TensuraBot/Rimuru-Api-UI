export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.siputzx.my.id/api/r/blue-archive');
    const contentType = response.headers.get("content-type");

    if (response.ok && contentType && contentType.includes("image")) {
      const buffer = await response.arrayBuffer();
      res.setHeader("Content-Type", contentType);
      res.send(Buffer.from(buffer));
    } else {
      res.status(500).json({ error: "Gagal ambil gambar." });
    }
  } catch (err) {
    res.status(500).json({ error: "Proxy error", detail: err.message });
  }
}
