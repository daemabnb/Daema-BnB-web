import basedApi from './basedApi';

interface RegisterShareItemResponse {
  urls: string[];
}
export const registerShareItem = (
  itemName: string,
  images: string[],
  itemDescription: string,
  itemPrice: number,
  deadline: number,
  period: number,
  isPublic: boolean,
  token: string,
) =>
  basedApi.post<RegisterShareItemResponse>(
    'share',
    {
      itemName,
      itemDescription,
      itemPrice,
      deadline,
      period,
      isPublic,
      images,
    },
    {
      headers: {
        token,
      },
    },
  );
