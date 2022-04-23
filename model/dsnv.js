function Danhsachnhanvien() {
  this.arr = [];

  // them nv
  this.themNV = function (nv) {
    this.arr.push(nv);
  };

  // tim vi tri NV
  this.timViTriNV = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  // xoa nv
  this._xoaNV = function (taiKhoan) {
    index = this.timViTriNV(taiKhoan);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  // // sua nv

  this._suaNV = function (taiKhoan) {
    //Tim vi tri dua vao tai khoan nv
    var index = this.timViTriNV(taiKhoan);

    if (index !== -1) {
      //Lấy object sinhVien trong arr dựa vào index
      var nhanVien = this.arr[index];
      return nhanVien;
    }

    return null;
  };

  // cap nhat nv
  this.capnhatNV = function (nhanVien) {
    var index = this.timViTriNV(nhanVien.taiKhoan);

    if (index !== -1) {
      this.arr[index] = nhanVien;
    }
  };

  // tim kiem nv
  this.timkiemNV = function (keyword) {
    /**
     * 0. mangTimKiem = []
     * 1. Duyet mang this.arr
     * 2. Neu sinhVien.tenSV trung voi keyword
     *    => Push sinhVien vao mangTimKiem
     * 3. tra ve mangTimKiem
     */
    var mangTimKiem = [];

    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (
        nhanVien.xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      ) {
        mangTimKiem.push(nhanVien);
      }
    }

    return mangTimKiem;
  };
}
