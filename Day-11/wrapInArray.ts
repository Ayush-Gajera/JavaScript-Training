/*Assignment 1
Create a generic function called wrapInArray that accepts any value and returns it inside an
array.
Create a generic interface PaginatedResponse<T> with properties:
items: T[]
total: number*/
function wrapInArray<T>(data: T): [T] {
  return [data];
}
const input = 20;
wrapInArray(input);

type PaginatedResponse<T> = {
  items: T[];
  total: number;
};
async function getPaginatedData<T>(url: string,page: number,limit: number,):Promise<PaginatedResponse<T>> {
  const response = await fetch(`${url}?page=${page}&limit=${limit}`);
  const data = await response.json();
  return {
    items: data.items,
    total: data.total,
  };
}