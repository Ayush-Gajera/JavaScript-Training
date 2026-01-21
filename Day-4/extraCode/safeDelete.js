const databaseProduct = {
  id: "P101",
  title: "Wireless Mouse",
  costPrice: 450,
  sellingPrice: 800,
  adminNotes: "Supplier: Alpha Electronics",
  stock: 25
};
//you must remove the costPrice and adminNotes before sending it to the UI.

const {id,title,sellingPrice,stock}=databaseProduct;

console.log(id, title, sellingPrice,stock);
