import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'SEB Main Project (Indiego)',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: 'Codestates',
      descriptions: [
        {
          content: 'Project Github Repo',
          href: 'https://github.com/codestates-seb/seb41_main_020',
        },
        {
          content: '지역 인디 공연문화를 위한 공연 예약 및 커뮤니티 서비스',
          href: 'http://indiego.site',
          weight: 'MEDIUM',
        },
        {
          content: '프론트엔드 UI 디자인',
          href:
            'https://www.figma.com/file/MmudrwCeax3p5blRCt6bHK/Untitled?node-id=0%3A1&t=GYOryeOUW3O6JhQW-0',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Figma를 이용해 웹서비스의 전체 적인 컨셉과 UI 작성' }],
        },
        {
          content: 'Main 페이지',
          weight: 'MEDIUM',
          href: 'http://indiego.site',
          descriptions: [
            {
              content:
                '자동, 무한 스크롤 캐러셀 컴포넌트를 직접 구현해 우리 지역 인기, 최신 공연 확인',
            },
            {
              content: '서울 약도를 활용한 컴포넌트를 직접 구현해 원하는 지역의 공연 리스트 조회',
            },
            {
              content: '캘린더 컴포넌트를 직접 구현해 원하는 날짜의 공연 리스트 조회',
            },
          ],
        },
        {
          content: '사용자 검색 UI',
          weight: 'MEDIUM',
          href: 'http://indiego.site/tickets',
          descriptions: [
            { content: '검색 바 컴포넌트 와 필터 컴포넌트 등을 이용해 사용자 검색 UI 작성' },
          ],
        },
        {
          content: '카카오맵 API를 통해 공연 위치 검색 UI',
          weight: 'MEDIUM',
          href: 'http://indiego.site/search',
          descriptions: [
            {
              content:
                '카카오맵 API 와 DOM을 활용한 커스텀 오버레이 작성을 이용해 사용자 지도 검색 UI 작성',
            },
          ],
        },
      ],
    },
    {
      title: 'SEB Pre Project',
      startedAt: '2022-12',
      endedAt: '2022-12',
      where: 'Codestates',
      descriptions: [
        { content: 'Project Github Repo', href: 'https://github.com/codestates-seb/seb41_pre_037' },
        {
          content: '스택오버플로우 (Stackoverflow) 클론 코딩',
          href: 'http://stackoverflowpre.p-e.kr/',
          weight: 'MEDIUM',
        },
        { content: '메인 페이지의 게시글 검색 및 조회 구현', weight: 'MEDIUM' },
        { content: 'Users, Tags 페이지의 검색 및 조회 구현', weight: 'MEDIUM' },
        { content: '페이지네이션 컴포넌트 구현', weight: 'MEDIUM' },
        {
          content: 'Sign Up 페이지의 유효성 검사 및 구글 OAuth 2.0 회원 가입 구현',
          weight: 'MEDIUM',
        },
      ],
    },
  ],
};

export default project;
