import axios from 'axios';

export const modifyItemImage = (url: string, image: File) =>
  axios.put(url, new Blob([image], { type: image.type }), {
    headers: {
      'Content-Type': image.type,
    },
  });
