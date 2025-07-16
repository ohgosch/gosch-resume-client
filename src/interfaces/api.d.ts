export interface IPaginateApiResponse<T> extends IApiResponse<T> {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface IApiResponse<T> {
  data: T;
}
