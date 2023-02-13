import { ISkill } from '../component/skill/ISkill';

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'HTML / CSS',
      level: 3,
    },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node',
      level: 2,
    },
    {
      title: 'Express',
      level: 2,
    },
    {
      title: 'Mongoose',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MongoDB',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Photoshop',
    },
    {
      title: 'Figma',
    },
    {
      title: 'MS Office',
    },
    {
      title: 'Linux',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, backend, database, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
