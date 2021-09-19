interface ErrorResponse {
  message: string
  statusCode?: number
}

class ErrorResponse extends Error {
  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export default ErrorResponse
