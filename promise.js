const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async function (emosi) {
  try {
    let coba1 = await promiseTheaterIXX();
    let coba2 = await promiseTheaterVGC();

    let result = [...coba1, ...coba2];
    let jumlahEmosi = result.filter((el, index) => {
      if (el.hasil === emosi) {
        return true;
      }
    });

    return jumlahEmosi.length;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
