import { toast } from "react-toastify";
export class Alert {
  constructor(message) {
    this.message = message;
  }
  error() {
    toast.error(this.message);
  }

  success() {
    toast.success(this.message);
  }

  warn() {
    toast.warning(this.message);
  }
}
