import favicon from '../asset/macbook.png';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '반갑습니다! 박연환의 자소서입니다.';
const description = '반갑습니다! 박연환의 자소서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'preview image',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Yeonhwan',
        lastName: 'Park',
        username: 'yeonhwan',
        gender: 'male',
      },
    },
  },
};
