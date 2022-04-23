// tao doi tuong dsnv tu lop doi tuong dsnv
var dsnv = new Danhsachnhanvien();
// tao doi tuong validation tu lop doi tuong validation
var validation = new Validation();

function getEle(id) {
  return document.getElementById(id);
}

//  luu thong tin
getLocalStorage();

// lay thong tin nv
function LaythongtinNV() {
  // dom toi cac the input lay value
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCB = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;

  // flat
  var isValid = true;

  // // validation taikhoanNV
  isValid =
    validation.kiemTrarong(taiKhoan, "tbTKNV", "Vui lòng không để trống") &&
    validation.kiemTradodaikitu(
      taiKhoan,
      "tbTKNV",
      "Tài khoản phải dài tối đa 4 - 6 ký số",
      4,
      6
    );
  // validation hoten
  isValid &=
    validation.kiemTrarong(hoTen, "tbTen", "Vui lòng không để trống") &&
    validation.kiemTraChuoikitu(
      hoTen,
      "tbTen",
      "Vui lòng không không nhập số trong tên!"
    );
  // validation email
  isValid &=
    validation.kiemTrarong(email, "tbEmail", "Vui lòng không để trống") &&
    validation.kiemTraEmail(email, "tbEmail", "Email ko hợp lệ!");

  // validation matkhau

  isValid &=
    validation.kiemTrarong(matKhau, "tbMatKhau", "Vui lòng không để trống") &&
    validation.kiemTradodaikitu(
      matKhau,
      "tbMatKhau",
      "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)",
      6,
      10
    ) &&
    validation.kiemTraMatKhau(
      matKhau,
      "tbMatKhau",
      "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)",
      6,
      10
    );

  // validation luongcb

  isValid &= validation.kiemTrarong(
    luongCB,
    "tbLuongCB",
    " Lương cơ bản 1 000 000 - 20 000 000, không để trống"
  );

  // validation gio lam

  isValid &= validation.kiemTrarong(
    gioLam,
    "tbGiolam",
    " Số giờ làm trong tháng 80 - 200 giờ, không để trống"
  );

  // validation
  isValid &= validation.kiemTrarong(
    ngayLam,
    "tbNgay",
    "Ngày tháng năm không hợp lệ"
  );

  // check form
  if (!isValid) return null;

  //   tao doi tuong nhan  vien tu lop doi tuong nhan vien
  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    gioLam
  );
  nhanVien.tinhtongLuong();
  nhanVien.xepLoaiNV();

  return nhanVien;
}

// them nv

getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = LaythongtinNV();
  //   them nhan vien
  if (nhanVien) {
    dsnv.themNV(nhanVien);
    // tao bang
    taoBang(dsnv.arr);
    // luu thong tin
    setLocalStorage();
  }
});

// tao bang
function taoBang(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    content += `
    <tr>
	<td>${nhanVien.taiKhoan}</td>
	<td>${nhanVien.hoTen}</td>
	<td>${nhanVien.email}</td>
	<td>${nhanVien.ngayLam}</td>
	<td>${nhanVien.chucVu}</td>
	<td>${nhanVien.tongLuong}</td>
	<td>${nhanVien.xepLoai}</td>
  <td>
  <button data-toggle="modal" data-target="#myModal" class="btn btn-info" onclick="suaNV('${nhanVien.taiKhoan}')">Sửa</button>
  <button class="btn btn-danger" onclick="xoaNV('${nhanVien.taiKhoan}')">Xoá</button>
</td>
    </tr>
`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

// xoa NV
function xoaNV(taiKhoan) {
  dsnv._xoaNV(taiKhoan);
  taoBang(dsnv.arr);
  setLocalStorage();
}

// sua nv
function suaNV(taiKhoan) {
  //Lấy thông tin chi tiết nhanvien
  var nhanVien = dsnv._suaNV(taiKhoan);

  if (nhanVien) {
    //Show thông tin của sinhVien ra bên ngoài từng thẻ input
    getEle("tknv").value = nhanVien.taiKhoan;
    //disabled tk NV
    getEle("tknv").disabled = true;
    getEle("name").value = nhanVien.hoTen;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.matKhau;
    getEle("datepicker").value = nhanVien.ngayLam;
    getEle("luongCB").value = nhanVien.luongCB;
    getEle("chucvu").value = nhanVien.chucVu;
    getEle("gioLam").value = nhanVien.gioLam;

    // tat them ng dung
    getEle("btnThemNV").style.display = "none";
  }
}

// cap nhat nv

getEle("btnCapNhat").addEventListener("click", function () {
  //Lấy lại những thông tin mới nhất từ các thẻ input
  var nhanVien = LaythongtinNV();
  console.log(dsnv.arr);
  dsnv.capnhatNV(nhanVien);
  console.log(dsnv.arr);
  taoBang(dsnv.arr);
  setLocalStorage();
});

// tim kiem nv
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var mangTimKiem = dsnv.timkiemNV(keyword);
  taoBang(mangTimKiem);
});

// giu thong tin
function setLocalStorage() {
  // chuyen data tu json qua string
  var dataString = JSON.stringify(dsnv.arr);

  //   luu xuong localStorage
  localStorage.setItem("DSNV", dataString);
}
// day thong tin da luu len
function getLocalStorage() {
  var data = localStorage.getItem("DSNV");

  if (data) {
    //   chuyen data tu string thanh json
    var dataJson = JSON.parse(data);
    dsnv.arr = dataJson;
    taoBang(dsnv.arr);
  }
}
