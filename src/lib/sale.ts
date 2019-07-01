import basedApi from './basedApi';

interface RegisterSaleItemResponse {
  urls: string[];
}
export const registerSaleItem = async (
  itemName: string,
  images: string[],
  itemDescription: string,
  itemPrice: number,
  token: string,
) => {
  const { data, status } = await basedApi.post<RegisterSaleItemResponse>(
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
  return { data, status };
};
