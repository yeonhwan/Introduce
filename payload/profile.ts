import { faEnvelope, faPhone, faPen } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/me.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '박연환',
    small: '(FE)',
  },
  contact: [
    {
      title: 'yeonhwan619@gmail.com',
      link: 'mailto:yeonhwan619@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-2789-5862',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/yeonhwan',
      link: 'https://github.com/yeonhwan?tab=repositories',
      icon: faGithub,
    },
    {
      title: '960619_',
      link: 'https://www.instagram.com/960619_/',
      icon: faInstagram,
    },
    {
      title: 'yeonhwan619',
      link: 'https://velog.io/@yeonhwan619',
      icon: faPen,
    },
  ],
  notice: {
    title: 'email 또는 휴대전화 메시지로 연락주시면 최대한 당일 연락드리겠습니다.',
    icon: faBell,
  },
};

export default profile;
