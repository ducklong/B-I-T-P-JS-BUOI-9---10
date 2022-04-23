function Validation() {
  this.kiemTrarong = function (value, errorID, mess) {
    if (value === "") {
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }

    getEle(errorID).innerHTML = "";
    getEle(errorID).style.display = "none";
    return true;
  };

  this.kiemTradodaikitu = function (value, errorID, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      // hople
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // ko hop le
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraChuoikitu = function (value, errorID, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      // hop le
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // ko hop le
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraChuoiso = function (value, errorID, mess) {
    var letter = /^[0-9]+$/;
    if (value.match(letter) && value.match(letter)) {
      // hop le
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // ko hop le
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function (value, errorID, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      // hop le
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // ko hop le
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
  this.kiemTraMatKhau = function (value, errorID, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(letter)) {
      // hop le
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // ko hop le
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTrangaythang = function (value, errorID, mess) {
    var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (value.match(letter)) {
      // hop le
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // ko hop le
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
}
