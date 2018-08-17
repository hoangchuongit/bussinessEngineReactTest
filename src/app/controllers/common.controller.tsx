import * as toastr from "toastr";

export function success(res) {
    return res;
};

export function error(err) {
   console.log(err);
   toastr.error('error', 'điền ngu nên nó lỗi');
};