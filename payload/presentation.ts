import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'Indiego 서비스 프레젠테이션',
      subTitle: 'Indiego 서비스 주요 기능 소개 및 개인 기술 발표',
      at: '2022-02',
      descriptions: [
        {
          content: '발표 영상 : ',
          postHref: 'https://www.youtube.com/watch?v=mAVOHrJuX6Y',
        },
      ],
    },
  ],
};

export default presentation;
