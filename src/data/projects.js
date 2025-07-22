// 프로젝트 데이터 중앙 관리
export const projects = [
  // Data Engineering Projects
  {
    id: 'airflow',
    category: 'DE',
    title: 'Airflow ETL Project',
    description: '다양한 도시에 대한 온도, 인구 및 이민 통계와 함꼐 DA, DS, 다른 연구원들에게 제공할만한 ETL 파이프라인을 구축',
    image: 'project/DE/airflow_project.png',
    modalComponent: 'Dairflow',
    modalPath: '../modal/DE/airflow_project'
  },
  {
    id: 'kafka',
    category: 'DE',
    title: 'Java ClickStream Analysis for Kafka, Flink',
    description: 'JAVA를 사용해 Log Data를 만들어 실시간 클릭 데이터를 대시보드로 넘기는 Pipeline 프로젝트',
    image: 'project/DE/kafka.png',
    modalComponent: 'DKafka',
    modalPath: '../modal/DE/kafka'
  },
  {
    id: 'sparkml',
    category: 'DE',
    title: 'Artist Recommendation System (Spark ML)',
    description: 'Spark Mllib를 활용해 Music Artist Recommendation System',
    image: 'project/DE/spark_ml.png',
    modalComponent: 'Sparkml',
    modalPath: '../modal/DE/spark_ml'
  },
  {
    id: 'donone',
    category: 'DE',
    title: 'ETL PIPELINE PROJECT (AIRFLOW)',
    description: '실제 쇼핑몰 데이터 Airflow를 활용해 Pipeline으로 처리한 프로젝트 입니다.',
    image: 'project/DE/donone.png',
    modalComponent: 'Donone',
    modalPath: '../modal/DE/donone'
  },
  {
    id: 'sparksql',
    category: 'DE',
    title: 'SPARK SQL PROJECT',
    description: 'Spark Sql를 활용한 Data Analysis & DB ',
    image: 'project/DE/spark_sql.png',
    modalComponent: 'DSparkSQL',
    modalPath: '../modal/DE/spark_sql'
  },
  {
    id: 'startupsplace',
    category: 'DE',
    title: 'StartupsPlace Project',
    description: '키워드 하나로 찾는 신규 창업자를 위한 창업 관련 DATA & DashBorad 개발',
    image: 'project/DE/startupsplace.png',
    modalComponent: 'Startupsplace',
    modalPath: '../modal/BACK/startupsplace'
  },

  // Data Analysis Projects
  {
    id: 'yelp',
    category: 'DA',
    title: 'Yelp Review Recommendation',
    description: 'Yelp의 Review Data를 활용해 각 식당의들은 개선방안을 추천해주는 분석입니다.',
    image: 'project/DA/yelp_review.png',
    modalComponent: 'Yelp',
    modalPath: '../modal/DA/yelp_review'
  },
  {
    id: 'delivery',
    category: 'DA',
    title: 'Delivery Predicting System',
    description: 'E-commerce 배송 Data를 활용한 정시 배송 예측 시스템 입니다.',
    image: 'project/DA/delivery_pred.png',
    modalComponent: 'Delivery',
    modalPath: '../modal/DA/delivery_pred'
  },
  {
    id: 'kobert',
    category: 'DA',
    title: 'NLP PROJECT (Deep learning)',
    description: 'Bert를 활용한 가사 감성 분석 & 시각화',
    image: 'project/DA/kobert.png',
    modalComponent: 'Kobert',
    modalPath: '../modal/DA/kobert_class'
  },
  {
    id: 'in_hospital',
    category: 'DA',
    title: 'In Hospital Mortality Prediction',
    description: 'MIMIC-III 데이터를 사용해 중환자실에 입원한 심부전 환자들의 사망 여부 예측 프로젝트',
    image: 'project/DA/in_hospital.png',
    modalComponent: 'Inhospotal',
    modalPath: '../modal/DA/in_hospital'
  },
  {
    id: 'vgame',
    category: 'DA',
    title: 'GAME DATA ANALYSIS',
    description: '1970년 부터 2016년까지의 전 세계 게임 판매량 데이터를 분석',
    image: 'project/DA/vgame.png',
    modalComponent: 'Vgame2',
    modalPath: '../modal/DA/vgame2'
  },

  // Backend Projects
  {
    id: 'firststep',
    category: 'BACK',
    title: 'FLASK PIPELINE PROJECT',
    description: '키워드 기반 여행지 추천 프로젝트 입니다.',
    image: 'project/BACK/firststep.png',
    modalComponent: 'DFirststep',
    modalPath: '../modal/BACK/firststep'
  },
  {
    id: 'donone_back',
    category: 'BACK',
    title: 'ETL PIPELINE PROJECT (AIRFLOW)',
    description: '실제 쇼핑몰 데이터 Airflow를 활용해 Pipeline으로 처리한 프로젝트 입니다.',
    image: 'project/DE/donone.png',
    modalComponent: 'Donone',
    modalPath: '../modal/DE/donone'
  },
  {
    id: 'startupsplace_back',
    category: 'BACK',
    title: 'StartupsPlace Project',
    description: '키워드 하나로 찾는 신규 창업자를 위한 창업 관련 DATA & DashBorad 개발',
    image: 'project/DE/startupsplace.png',
    modalComponent: 'Startupsplace',
    modalPath: '../modal/BACK/startupsplace'
  }
];

// 카테고리별 프로젝트 필터링 함수
export function getProjectsByCategory(category) {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
}

// ID로 프로젝트 찾기
export function getProjectById(id) {
  return projects.find(project => project.id === id);
}