import {
  ncsoft,
  kakaotech,
  css,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  zustand,
  fastapi,
  express,
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
];

const projects = [
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
      "https://www.notion.so/Gaussian-Splatting-Web-Viewer-19126c839d63806bacdecc4c029b9c23",
  },
  {
    name: "Sumda",
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
      "https://www.notion.so/Shin-e6d892b2ee764c9baea009534e606ee3",
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
    source_code_link: "https://tinspham.dev/",
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
    source_code_link: "https://kingstonedanang.com/",
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
    source_code_link: "https://noor-cf.web.app/",
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
    source_code_link: "https://noor-kombucha.web.app/",
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
    source_code_link: "https://cafe-sang.web.app/",
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
    source_code_link: "https://covid-tracker-dksgsd.surge.sh/",
  },
];

export { services, technologies, experiences, projects };
