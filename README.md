

# 모두의 문화생활 웹 어플리케이션

"모두의 문화생활"은 경기도 내 문화 프로그램 정보를 쉽게 검색하고 접할 수 있도록 도와주는 어플리케이션입니다. 이 어플리케이션을 사용하면 사용자들은 위치, 관심 분야, 날짜 등을 기반으로 경기도 내의 다양한 문화 프로그램 정보를 손쉽게 찾을 수 있습니다.

<img src="https://github.com/user-attachments/assets/0412fa95-06c9-47ea-aaa1-a3e006102bfe" alt="아키텍처" width="600">

## 기획 배경

우리는 경기도에 거주하면서 지역의 다양한 문화 활동에 관심을 가지고 있습니다. 하지만 이러한 문화 활동들에 대한 정보는 흩어져 있고, 종종 접근하기 어렵다는 문제점을 발견했습니다. 이 어플리케이션은 이러한 문제를 해결하여 지역 주민들이 쉽게 문화 활동에 참여하고 즐길 수 있도록 하기 위해 기획되었습니다.

---

## 주요 기능 및 서비스

- **필터링 및 검색 기능**: 사용자는 원하는 날짜, 시간, 비용, 분야, 프로그램 형태 등으로 프로그램을 검색하고 필터링할 수 있습니다.
- **프로그램의 상세 정보 제공**: 선택한 프로그램에 대한 상세 정보를 제공하고, 예매 또는 신청할 수 있도록 합니다.
- **다양한 문화 소식 제공**: 행사 정보뿐만 아니라 문화재단 및 여러 문화기관의 공지사항 및 소식을 제공하여 사용자들이 최신 소식을 받아볼 수 있도록 합니다.
- **관심있는 프로그램 모아보기**: 사용자는 관심 있는 프로그램을 모아서 볼 수 있도록 합니다.
- **후기 작성 및 공유 기능**: 참여한 프로그램에 대한 후기를 작성하고 공유할 수 있는 기능을 제공하여 사용자들 간에 정보를 공유할 수 있도록 합니다.
- **길찾기 기능**: 사용자는 검색한 문화행사에 참여하기 위한 길찾기 기능을 이용할 수 있습니다. **딥 링크**를 통해 이용이 가능하게 구현할 계획입니다.

## 아키텍처

아래는 본 프로젝트의 아키텍처 다이어그램입니다:

### 람다 상세 아키텍처

- #### search-list  
  <img src="https://github.com/user-attachments/assets/2c0bc73e-8c31-44db-abaf-638968044237" alt="search-list" width="600">

- #### searchresult-lambda  
  <img src="https://github.com/user-attachments/assets/e3b1a6d8-b359-47ce-a05f-13fe81b16a49" alt="searchresult-lambda" width="600">

- #### search-buttom  
  <img src="https://github.com/user-attachments/assets/3f019d9f-f836-46eb-b4f3-a2e6651e2e31" alt="search-buttom" width="600">

- #### notice-lambda  
  <img src="https://github.com/user-attachments/assets/2f56bd1f-0665-4ae7-ab98-7db03cd1686f" alt="notice-lambda" width="600">

---

## 사용된 공공데이터

이 프로젝트에서는 다음과 같은 공공데이터를 활용하였습니다:

1. [경기도 문화 행사 현황](https://www.data.go.kr/data/15117057/openapi.do)
2. [경기문화재단 문화행사 현황](https://www.data.go.kr/data/15059089/openapi.do)
3. [경기문화재단 문화 공고/소식 현황](https://www.data.go.kr/data/15059026/openapi.do)
4. [경기도_소식 현황](https://www.data.go.kr/data/15117059/openapi.do)

---

## 기대 효과

"모두의 문화생활" 어플은 경기도 지역의 다양한 문화 프로그램에 대한 정보를 한 곳에서 제공하여 사용자들이 편리하게 참여할 수 있도록 도와줍니다. 이를 통해 지역 문화 활동에 대한 관심과 참여를 촉진하며, 지역 경제에도 긍정적인 영향을 미칠 것으로 기대합니다.

---

## 프로젝트 실행 방법

1. 레포지토리를 클론합니다.
2. 프로젝트 폴더로 이동하여 필요한 의존성을 설치합니다.
3. 어플리케이션을 실행합니다.
4. 서버를 실행할 때는 터미널 창에 다음 명령어를 입력하세요:
   ```bash
   nodemon server.js
   ```

더 자세한 내용은 프로젝트의 [Wiki](https://github.com/yourusername/yourproject/wiki)를 참조하세요.
