// luas
function luasPersegi() {

    const sisi = document.getElementById('persegi').value
    const luas = sisi * sisi

    document.getElementsByClassName('value-sisi')[0].innerHTML = sisi
    document.getElementsByClassName('value-sisi')[1].innerHTML = sisi
    document.getElementById('luas-persegi').innerHTML = luas
}

const tombolHitungLuas = document.getElementById("hitung-luas")
const tampilHitungLuas = document.getElementById("show")

tombolHitungLuas.addEventListener("click", function () {
    tampilHitungLuas.classList.remove("show")
})

const tombolResetLuas = document.getElementById("reset-luas")
const resetHitungLuas = document.getElementById("persegi")

tombolResetLuas.addEventListener("click", function () {
    tampilHitungLuas.classList.add("show")
    resetHitungLuas.value = ""
})


// keliling
function kelilingPersegi() {

    const sisi = document.getElementById('persegi2').value
    const keliling = 4 * sisi

    document.getElementsByClassName('value-sisi2')[0].innerHTML = sisi
    document.getElementById('keliling-persegi').innerHTML = keliling
}


const tombolHitungKeliling = document.getElementById("hitung-keliling")
const tampilHitungKeliling = document.getElementById("show2")

tombolHitungKeliling.addEventListener("click", function () {
    tampilHitungKeliling.classList.remove("show")
})

const tombolResetKeliling = document.getElementById("reset-keliling")
const resetHitungKeliling = document.getElementById("persegi2")

tombolResetKeliling.addEventListener("click", function () {
    tampilHitungKeliling.classList.add("show")
    resetHitungKeliling.value = ""
})




