const { data } = require("../../DB/data");
//יצירה של מוצר חדש
const CreateNewProduct = (req, res) => {
  const newProduct = req.body;
  data.push(newProduct);
  console.log(data);
  res.send(`הוספתי לך מוצר  חדש בהצלחה`);
};

//מציאת יוזר ספציפי

const getProductByID = (req, res) => {
  const _id = req.params.id;
  const FINDid = data.find((pro) => pro.id === _id);
  if (!FINDid) {
    return res.send("not find");
  } else {
    return res.send(FINDid);
  }
};

//יבוא של כל היוזרים

const getAllProducts = (req, res) => {
  res.send(data);
};

//עדכון מוצר קיים בעמצעות איי די

const updateProductByID = (req, res) => {
  const id = req.params.id;
  const productUpdate = req.body;
  const dataIndex = data.findIndex((user) => user.id === id);
  if (undefined === -1) {
    return res.status(404).send("משתמש לא נמצא");
  }
  data[dataIndex] = productUpdate;
  res.send(data);
};

//מחיקת מוצר
const productDeletion = (req, res) => {
  const productId = req.params.id;
  const index = data.findIndex((product) => product.id === productId);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  data.splice(index, 1);
  res.send("Product deleted successfully");
};

// הוספת כמות

const SubtractionProductQuantityBy1ByID = (req, res) => {
  const productId = parseInt(req.params.id);

  const product = data.find((product) => data.id === productId);

  if (!data) {
    return res.status(404).send("Product not found");
  }

  data.quantity = (data.quantity || 0) + 1;

  res.send("Quantity added successfully");
};

// הפחתת כמות
const lessProductQuantityBy1ByID = (req, res) => {
  const productId = parseInt(req.params.id);

  const product = data.find((product) => data.id === productId);

  if (!data) {
    return res.status(404).send("Product not found");
  }

  if (data.quantity && data.quantity > 0) {
    data.quantity -= 1;
  }

  res.send("Quantity lessed successfully");
};

//יצוא פונקציות
module.exports = {
  getAllProducts,
  CreateNewProduct,
  getProductByID,
  updateProductByID,
  productDeletion,
  SubtractionProductQuantityBy1ByID,
  lessProductQuantityBy1ByID,
};
