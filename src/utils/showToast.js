import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showSucess(msg) {
  toast.success(msg, {
    position: "top-right",
  });
}

export function showError(msg) {
  toast.error(msg, {
    position: "top-right",
  });
}
