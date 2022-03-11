const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang-Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

let getInfoPenjualan = (data) => {
  if (!data) return "Error: Parameter can't be null";
  if (typeof data != "object") return "Error: Invalid data type";

  let modal = 0;
  let income = 0;
  let bestSellerCount = 0;
  let bestSeller = "";
  let bestWritter = "";

  for (let i in data) {
    if (
      typeof data[i].namaProduk != "string" ||
      typeof data[i].penulis != "string" ||
      typeof data[i].totalTerjual != "number" ||
      typeof data[i].hargaBeli != "number" ||
      typeof data[i].hargaJual != "number" ||
      typeof data[i].sisaStok != "number"
    )
      return "Error: Invalid data type";
    modal += data[i].hargaBeli * (data[i].sisaStok + data[i].totalTerjual);
    income += data[i].totalTerjual * data[i].hargaJual;
    if (data[i].totalTerjual > bestSellerCount) {
      bestSellerCount = data[i].totalTerjual;
      bestSeller = data[i].namaProduk;
      bestWritter = data[i].penulis;
    }
  }

  return {
    totalKeuntungan: "Rp." + (income - modal).toLocaleString("de-DE"),
    totalModal: "Rp." + modal.toLocaleString("de-DE"),
    persentaseKeuntungan: (((income - modal) / modal) * 100).toFixed(1) + "%",
    produkBukuTerlaris: bestSeller,
    penulisTerlaris: bestWritter,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
