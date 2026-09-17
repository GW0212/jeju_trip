JEJU TRIP · GitHub Pages 최종 안정화본 v28
==============================================

폴더 구조
---------
index.html
css/style.css
js/app.js
data/routes.json
images/
  pass-benefits/*.webp
  favicon-*.png
favicon.ico
site.webmanifest
README.txt

업로드 방법
-----------
1. ZIP 압축을 풉니다.
2. 압축 해제 후 보이는 index.html / css / js / data / images 등을
   GitHub Pages 배포 폴더(root 또는 docs)에 그대로 업로드합니다.
3. GitHub > Settings > Pages에서 배포 브랜치/폴더를 지정합니다.
4. 배포 후 이전 CSS/JS가 보이면 강력 새로고침(Ctrl+Shift+R)을 한 번 해주세요.

주요 기능
---------
- 먹거리 / 놀거리 / 카페 / 상세 일정 / 패스 혜택 5개 탭
- 장소 카드 및 상세 일정의 해당 장소 행 전체를 네이버 지도 링크로 사용
- 상세 일정 DAY 1~3 전환
- 상세 일정 지도는 항상 노출되며 상세 리스트도 항상 표시
- 지도 마커 번호와 실제 상세 일정 번호 일치
- 시작점 초록색 / 마지막 지점 진한 빨간색 / 중간 지점 감귤색
- 지도 마우스 휠 확대/축소 및 모바일 핀치 줌
- OpenFreeMap + MapLibre 기반 실제 지도
- 일정 좌표/즉시 표시용 경로 데이터는 data/routes.json 및 JS에 고정
- OSRM 실제 도로 경로는 브라우저에서 추가 확인 후 30일간 localStorage 캐시
- OSRM이 실패해도 기본 일정 동선과 지도/마커는 즉시 표시
- 브이패스(빨강) / 제주투어패스(파랑) 배지
- 패스 혜택 이미지 WebP 최적화 및 lazy loading
- 반응형 모바일 레이아웃 / Safe Area / prefers-reduced-motion 대응
- 맨 위로 이동 버튼

외부 서비스
-----------
지도는 네트워크 연결이 필요합니다.
- MapLibre GL JS: unpkg CDN
- 지도 스타일/타일: OpenFreeMap
- 지도 데이터: OpenStreetMap
- 실제 도로 경로 보정: OSRM 공개 라우팅 서버
- 장소 바로가기: NAVER 지도/플레이스

참고
----
- OpenFreeMap/OSRM이 일시적으로 느리거나 응답하지 않아도
  일정 좌표 기반 기본 경로와 일정 리스트는 계속 사용할 수 있습니다.
- 패스 혜택 합계는 패스 구매비를 차감한 순이익이 아니라
  현재 일정에서 확인 가능한 혜택 가치의 합계입니다.
- 돈키쥬쥬 / 링로드 / 글로시말차는 안정적인 직접 NAVER 장소 URL을
  확인하지 못해 NAVER 검색 링크를 유지했습니다.

최종 일정 반영 v32
------------------
- 하늘여행 행글라이더체험장: 놀거리/패스 혜택에서 삭제
- 본초족욕: 놀거리/상세 일정/패스 혜택에서 삭제
- DAY 2 6번: 바인스테이 숙소 복귀로 변경
- DAY 2/3 지도 경로 데이터도 동일하게 갱신

지도 조작 v33
------------
- 데스크톱: 마우스 드래그 이동 / 휠 확대·축소
- 모바일: 한 손가락 드래그 이동 / 두 손가락 핀치 확대·축소
- DAY 탭 재진입 시 지도 interaction 상태를 자동 재활성화
