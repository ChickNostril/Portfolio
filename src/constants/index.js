import {
  eakorea,
  ncsoft,
  kakaotech,
  css,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  vuejs,
  redux,
  tailwind,
  threejs,
  typescript,
  zustand,
  fastapi,
  express,
  fo4book,
  alpaca,
  gsViewer,
  faViewer,
  sumda,
  autoRigger,
  pokemon,
  community,
  starbucks,
  hackerton,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "Typescript",
    icon: typescript,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Vue",
    icon: vuejs,
  },
  {
    title: "Zustand",
    icon: zustand,
  },
  {
    title: "Three",
    icon: threejs,
  },
  {
    title: "Express",
    icon: express,
  },
  {
    title: "fastAPI",
    icon: fastapi,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Software Engineering",
    company_name: "EA Korea",
    icon: eakorea,
    iconBg: "#ffffff",
    date: "Jun 2026 - Present",
    points: [
      "FO4BOOK 프로젝트의 Web SE 직무를 수행하며 FIFA Online 4 게임 운영 및 관리를 위한 사내 웹 서비스 개발 및 유지보수 담당",
      "Vue 2와 Vuetify 기반 계정 관리, 데이터 조회 및 검색, 시즌 보상, Featureset 관리 등 게임 운영 기능 개발",
      "게임 Static Data 및 다국어 데이터 연동 (i18n Key) 및 XLSX/JSON 기반 Import/Export 기능 구현해 게임 데이터 관리 환경 구축",
      "대규모 게임 데이터 효율적으로 조회하고 관리할 수 있도록 데이터 테이블, 검색 및 필터링 등 운영 기능 개발",
      "Node.js 기반의 스크립트를 활용하여 Static Data 다운로드 및 데이터 처리 자동화 환경 구축",
      "게임 운영 과정에서 발생하는 다양한 요구사항을 분석하고 Frontend 기능 개발 및 유지보수를 수행하며 안정적인 서비스 운영 지원",
      "Vue 2 기반 기존 서비스의 구조와 공통 컴포넌트를 분석하고 기존 코드베이스에 맞춰 기능을 확장하며 실무 개발 역량 강화"
    ],
  },
  {
    title: "Front-end Engineering",
    company_name: "NCSOFT",
    icon: ncsoft,
    iconBg: "#103464",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Graphics AI Neural Rendering 팀의 Frontend-Engineering 직무를 수행하며 다양한 프로젝트에서 프론트엔드 개발 업무를 담당",
      "각 프로젝트에서 최신 웹 기술과 실시간 시각화 기술을 활용하여 안정적이고 최적화된 웹 환경 구축",
      "프론트엔드 및 백엔드 구현, 상태 관리, 데이터 처리, 실시간 시각화 경험을 통해 개발 역량 강화",
      "협업과 문제 해결 능력을 바탕으로 팀 내 다양한 기술적 요구사항을 충족시키며 실무에서의 기여",
      "React와 Three.js를 활용하여 사용자 친화적인 3D 인터페이스와 효율적인 UI/UX 설계",
      "FastAPI와 React를 통해 데이터 처리와 UI 간 원활한 통신 구현",
      "AWS S3와 GPU 서버와의 통신을 통한 파일 업로드 및 복잡한 처리 지원",
    ],
  },
  {
    title: "Full-stack & Cloud Engineering",
    company_name: "KakaoTech Bootcamp Cloud Native Jeju",
    icon: kakaotech,
    iconBg: "#ffce03",
    date: "Apr 2024 - Oct 2024",
    points: [
      "클라우드 기반 실무형 개발자 양성을 목표로 한 KakaoTech Cloud Native Jeju 과정 수료",
      "4개월간의 자기주도 학습을 통해 프론트엔드 및 백엔드, 클라우드 핵심 기술 심화 학습",
      "제주 오프라인 과정에서 프론트엔드·백엔드 협업 기반의 팀 프로젝트 진행으로, 실무 중심 개발 프로세스 경험",
      "클라우드 환경에서의 개발 및 배포 경험을 통해 CI/CD, Docker, AWS 환경에 대한 실전 감각 습득",
      "협업을 위한 Git 기반 버전 관리, Notion & Figma를 활용한 기획·디자인 커뮤니케이션 역량 향상",
    ],
  },
];

const projects = [
  {
    name: "FO4BOOK",
    description:
      "FIFA Online 4의 게임 운영 및 데이터 관리를 위한 사내 웹 서비스의 Frontend 개발 및 유지보수",
    tags: [
      {
        name: "Vue 2",
      },
      {
        name: "Vuetify",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Node.js / Express",
      },
      {
        name: "P4V",
      },
    ],
    image: fo4book,
    source_code_link:
      "https://app.notion.com/p/FO4BOOK-3d626c839d63808cb12ce5ba5cd3dd6a?source=copy_link",
  },
  {
    name: "Alpaca",
    description:
      "AI 기반 Jira 업무, 일정, 리포트 자동화 및 Slack 알림 기능을 제공하는 사내 업무 협업 관리 도구 개발 및 유지보수",
    tags: [
      {
        name: "Python",
      },
      {
        name: "OpenAI GPT-3.5",
      },
      {
        name: "JIRA API",
      },
      {
        name: "Docker",
      },
      {
        name: "Slack API",
      },
    ],
    image: alpaca,
    source_code_link:
      "https://app.notion.com/p/Alpaca-3d626c839d638033bbecd37e6ae3b0c3?source=copy_link",
  },
  {
    name: "Gaussian Splatter Viewer",
    description:
      "3D Gaussian Splatting 기술을 활용한 웹 기반 3D 데이터 시각화 애플리케이션 개발",
    tags: [
      {
        name: "React",
      },
      {
        name: "TypeScript",
      },
      {
        name: "ThreeJS/R3F",
      },
      {
        name: "Sass",
      },
      {
        name: "fastAPI",
      },
      {
        name: "Uvicorn",
      },
      {
        name: "AWS S3",
      },
    ],
    image: gsViewer,
    source_code_link:
      "https://app.notion.com/p/Gaussian-Splatting-Web-Viewer-1d526c839d638079a18bfd6c1bdaed98?source=copy_link",
  },
  {
    name: "FA-WebViewer",
    description: "사내 시연용 페이셜 애니메이션 웹 뷰어 개발",
    tags: [
      {
        name: "React",
      },
      {
        name: "TypeScript",
      },
      {
        name: "ThreeJS/R3F",
      },
      {
        name: "Sass",
      },
      {
        name: "fastAPI",
      },
      {
        name: "Uvicorn",
      },
    ],
    image: faViewer,
    source_code_link:
      "https://app.notion.com/p/Fa-Web-Viewer-1d526c839d6380e7a084de9c7e735a33?source=copy_link",
  },
  {
    name: "Auto Rigging Tool",
    description: "3D 리깅 웹 페이지 프론트엔드 개발",
    tags: [
      {
        name: "React",
      },
      {
        name: "TypeScript",
      },
      {
        name: "ThreeJS/R3F",
      },
      {
        name: "Sass",
      },
      {
        name: "fastAPI",
      },
      { name: "Uvicorn" },
    ],
    image: autoRigger,
    source_code_link:
      "https://app.notion.com/p/Auto-Rigger-Tool-1d526c839d6380a8a2edeeb7d863f046?source=copy_link",
  },
  {
    name: "숨쉬는 다람쥐 Sumda",
    description:
      "공공 데이터 API를 활용해 실시간 날씨와 대기질 정보 제공 및 다람쥐 육성 게이미피케이션 기능을 포함한 웹 서비스",
    tags: [
      {
        name: "React",
      },
      {
        name: "TypeScript",
      },
      {
        name: "CSS",
      },
      {
        name: "Zustand",
      },
    ],
    image: sumda,
    source_code_link:
      "https://app.notion.com/p/Sumda-1d526c839d6380da8bf4fefa9742bf71?source=copy_link",
  },
  {
    name: "Community",
    description:
      "Express와 MySQL로 게시판 사이트를 구현하여 백엔드와 데이터베이스 연동을 구현한 카카오테크 부트캠프 과정정 프로젝트",
    tags: [
      {
        name: "React",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Express",
      },
      {
        name: "MySQL",
      },
    ],
    image: community,
    source_code_link:
      "https://app.notion.com/p/Community-1d526c839d6380eb9d99e02c748ecea2?source=copy_link",
  },
  {
    name: "Pokemon",
    description:
      "React와 Styled-components로 도감 구현 및 Firebase로 OAuth 로그인 및 배포를 완료한 개인 프로젝트",
    tags: [
      {
        name: "React",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Styled Components",
      },
      {
        name: "Firebase",
      },
    ],
    image: pokemon,
    source_code_link:
      "https://app.notion.com/p/Pokemon-1d526c839d63801f9f15ff8c22d9f07e?source=copy_link",
  },
  {
    name: "Starbucks Clone Coding",
    description:
      "스타벅스 홈페이지를 클론하여 웹 디자인, 게시판, 회원 관리 기능을 구현한 프로젝트",
    tags: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "PHP",
      },
      {
        name: "phpmyadmin",
      },
    ],
    image: starbucks,
    source_code_link:
      "https://app.notion.com/p/Starbucks-1d526c839d6380d8bbfacf80ce958ad3?source=copy_link",
  },
  {
    name: "Hackerton",
    description:
      "카카오테크 부트캠프 해커톤에서 제주 관광객을 위한 AI 기반으로 맞춤형 장소 추천을 제공하는 대화형 시스템",
    tags: [
      {
        name: "React",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Zustand",
      },
      {
        name: "Open API",
      },
    ],
    image: hackerton,
    source_code_link:
      "https://app.notion.com/p/Hackerton-1d526c839d63803d8f88c3886529f8fe?source=copy_link",
  },
];

export { services, technologies, experiences, projects };
