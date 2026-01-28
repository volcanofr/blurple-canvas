export interface Pagination<T> {
  total: number;
  page: number;
  size: number;
  entries: T[];
}
