const express = require("express");
const app = express();
const PORT = 8000;

let details = [
  { name: "jigmi", id: 1 },
  { name: "Phurba", id: 2 },
  { name: "susma", id: 3 },
  { name: "tenzin", id: 4 },
];

// app.get("/details", (req, res) => {
//   res.send(details);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// // to get single details Id
// app.get("/details/:id", (req, res) => {
//   console.log(req.params);
//   const id = Number(req.params.id);
//   res.status(500).json(details.find((detail) => detail.id === id));
// });

//show error if the limit is crossed
app.get("/details/:id", (req, res) => {
  console.log(req.params);
  const id = Number(req.params.id);
 const detail = details.find((detail) => detail.id === id);

 if (!detail){
  res
  .status(404)
  .json({ message: `a detail with the id of ${id} was not found`})

 } else {
    res.status(200).jason(detail);
 }
  });
 