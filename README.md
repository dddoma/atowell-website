# 아토웰의원 Next.js Starter

## 목적
- 병원 소개 + 진료 안내 + 공개 비급여 가격
- 피부질환/비만 의료정보 라이브러리 확장
- Google/Bing/AI 검색이 읽기 쉬운 정적 HTML, metadata, sitemap, robots, JSON-LD
- 가격과 병원 정보는 `data/clinic.ts` 한 곳에서 관리

## 시작
```bash
npm install
npm run dev
```
브라우저에서 http://localhost:3000

## GitHub → Vercel
1. GitHub에 새 저장소 생성
2. 이 폴더를 push
3. Vercel에서 Add New Project → GitHub 저장소 Import
4. Next.js가 자동 감지되면 Deploy
5. Preview URL에서 검토 후 atowell.kr 도메인 연결

## 원장님이 AI에게 시킬 수 있는 수정 예
- "data/clinic.ts에서 마운자로 5mg 가격을 390000원으로 수정하고 날짜도 오늘로 바꿔. 관련 화면이 모두 같은 데이터를 쓰는지 확인해."
- "피부 의료정보에 아토피피부염 글을 하나 추가하되, 공개 전 draft 상태로 만들어. 참고문헌/검토일/검토자 필드를 포함해."
- "모든 MedicalWebPage의 구조화 데이터를 검사하고 누락된 reviewedBy/dateModified를 추가해."

## 주의
- 의료정보는 AI가 초안을 만들더라도 의료진 검토 후 공개하세요.
- 환자 개인정보/진료기록은 이 공개 저장소와 사이트에 넣지 마세요.
- 의료광고 관련 표현과 비급여 표시는 실제 운영 시 관련 법령·지침에 맞게 최종 검토하세요.
