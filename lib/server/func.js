export class CommonResponse {
    constructor(success, status, message, data = null,metadata=null) {
      this.success = success; // true or false
      this.status = status; // dynamic status code or string
      this.message = message; // A descriptive message
      this.paginate=metadata;
      this.data = data; // Any additional data (optional)
    }
  
    static success(status, message, data = null,metadata=null) {
      return new CommonResponse(true, status, message, data,metadata);
    }
  
    static error(status, message, data = null) {
      return new CommonResponse(false, status, message, data);
    }
  }