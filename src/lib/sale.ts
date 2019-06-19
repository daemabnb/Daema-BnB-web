import basedApi from './basedApi';

interface RegisterSaleItemResponse {
  urls: string[];
}
export const registerSaleItem = (
  itemName: string,
  images: string[],
  itemDescription: string,
  itemPrice: number,
  token: string,
) =>
  basedApi.post<RegisterSaleItemResponse>(
    'sale',
    {
      itemName,
      images,
      itemDescription,
      itemPrice,
    },
    {
      headers: {
        token,
      },
    },
  );
