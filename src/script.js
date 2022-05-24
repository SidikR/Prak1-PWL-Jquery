$(document).ready(function() {
    let produk = [{
            nama: "Jet Tempur",
            jumlah: 10,
        },
        {
            nama: "Rudal Nuklir Rusia",
            jumlah: 1,
        },
        {
            nama: "Keramik Kayu",
            jumlah: 6,
        },
        {
            nama: "Rog NVidia",
            jumlah: 5,
        },
        {
            nama: "Rudal Hipersonik",
            jumlah: 3,
        },
    ];
    let pesan = "";
    let total = 1;
    let produk2 = ["Jet Tempur", "Rudal Nuklir Rusia", "Keramik Kayu", "Rog NVidia", "Rudal Hipersonik"];

    $("#produk" + total).on("change", function() {
        $("#button-tambah").show();
    });
    $("#button-tambah").on("click", function() {
        let index_jumlah = produk.findIndex((element) => element.nama === $("#produk" + total).val());
        if ($("#jumlah" + total).val() <= produk[index_jumlah].jumlah) {
            pesan += "<li>" + $("#produk" + total).val() + " (" + $("#jumlah" + total).val() + ")</li>";
            produk2.splice(produk2.indexOf($("#produk" + total).val()), 1);
            total++;
            if (produk2.length > 0) {
                let isi = `<div class="col-md-5"><label for="produk${total}" class="form-label">Produk</label><select name='produk${total}' id='produk${total}' class="form-select" required><option value="">Pilih Produk</option>`;
                produk2.forEach((element) => {
                    isi += `<option>${element}</option>`;
                });
                isi += `</select></div><div class="col-md-5"><label for='jumlah${total} class="form-label"'>Jumlah</label><input class="form-control" id='jumlah${total}' type='number' required /><div>`;
                $(this).before(isi);
            }
            if (produk2.length <= 1) {
                $("#button-tambah").hide();
            }
        } else {
            alert(`Maaf Maksimal Pemesanan ${$("#produk" + total).val()} yaitu ${produk[index_jumlah].jumlah} `);
        }
    });
    $("#button-pesan").on("click", function() {
        let index_jumlah = produk.findIndex((element) => element.nama === $("#produk" + total).val());
        if ($("#jumlah" + total).val() <= produk[index_jumlah].jumlah) {
            pesan += "<li>" + $("#produk" + total).val() + " (" + $("#jumlah" + total).val() + ")</li>";
            $(".pemesan").html(`<h2 class="card-title">${$("#nama").val()}</h2><br><ul>${pesan}</ul>`);
        } else {
            alert(`Maaf Maksimal Pemesanan ${$("#produk" + total).val()} yaitu ${produk[index_jumlah].jumlah} `);
        }
    });
});