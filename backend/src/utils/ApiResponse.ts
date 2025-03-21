
export type ApiResponseOptions<T> = {
  statusCode: number;
  message?: string;
  data?: T | null;
};

export class ApiResponse<T> {
  public statusCode: number;
  public success: boolean;
  public message: string;
  public data: T | null;

  constructor({
    statusCode,
    message = "Success",
    data = null,
  }: ApiResponseOptions<T>) {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}
