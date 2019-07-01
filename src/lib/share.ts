import basedApi from './basedApi';

interface RegisterShareItemResponse {
  urls: string[];
}
export const registerShareItem = async (
  itemName: string,
  images: string[],
  itemDescription: string,
  itemPrice: number,
  deadline: number,
  period: number,
  isPublic: boolean,
  token: string,
) => {
  const { data, status } = await basedApi.post<RegisterShareItemResponse>(
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
  return { data, status };
};
