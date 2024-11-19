class ApiResponse extends Response {
  constructor(statesCode, data, message = "Success") {
    this.statesCode = statesCode;
    this.data = data;
    this.message = message;
    this.success = statesCode < 400;
  }
}
