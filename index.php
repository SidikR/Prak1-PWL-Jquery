<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PrakPWL-JQuery-119140096</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="src/jquery-3.6.0.js"></script>
    <script src="src/script.js"></script>
</head>

<body>
    <h1 id="judul" class="card-title">Pemesanan Produk</h1>
    <hr />
    <div class="pemesan"></div>
    <div class="data">
        <h4 class="card-title">Data</h4>
        <form action="" onsubmit="return false" class="row g-3">
            <div class="col-12">
                <label for="nama" class="form-label">Nama</label>
                <input id="nama" type="text" class="form-control" required />
            </div>
            <label class="form-label">Pilih Produk</label>
            <div class="col-md-5">
                <label for="produk1" class="form-label">Produk</label>
                <select name="produk1" id="produk1" class="form-select" required>
            <option value="">Pilih Produk</option>
            <option value="Jet Tempur">Jet Tempur</option>
            <option value="Rudal Nuklir Rusia">Rudal Nuklir Rusia</option>
            <option value="Keramik Kayu">Keramik Kayu</option>
            <option value="Rog NVidia">Rog NVidia</option>
            <option value="Rudal Hipersonik">Rudal Hipersonik</option>
          </select>
            </div>
            <div class="col-md-5">
                <label for="jumlah1" class="form-label">Jumlah</label>
                <input id="jumlah1" type="number" class="form-control" required />
            </div>
            <button class="btn btn-info" id="button-tambah" style="display: none">Tambah Produk</button><br />
            <button class="btn btn-primary" id="button-pesan">Pesan</button>
        </form>
    </div>
</body>

</html>