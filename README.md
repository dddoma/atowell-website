# 아토웰의원 웹사이트

Next.js + GitHub + Vercel. 진료 안내와 환자용 의료정보를 분리합니다.

## 실행과 검사

pnpm install --frozen-lockfile
pnpm build
pnpm lint
pnpm start
node scripts/check-site.mjs

검사 대상은 기본 http://localhost:3000 입니다. CHECK_BASE_URL로 변경하며 Preview 검사는 EXPECT_NOINDEX=1을 설정할 수 있습니다.

## 데이터·검색 정보

- data/clinic.ts: 병원 정보, 의료진 이력, 진료시간, 가격과 가격 갱신일.
- data/navigation.ts: 공통 메뉴와 공개 진료 경로.
- lib/site.ts: 현재 대표 URL. 도메인 전환 승인 전 atowell.kr로 변경하지 않습니다.
- lib/metadata.ts: 페이지별 title, description, canonical, Open Graph. Vercel Preview에는 noindex.
- app/sitemap.ts: 공개 진료 경로만 포함. 의료정보 준비 페이지 제외.

## 게시

작업 브랜치 → Draft PR → Vercel Preview 검토 → 원장 승인 → main 병합 순서입니다. main 변경은 Production 자동 배포를 유발할 수 있으므로 승인 없이 병합하지 않습니다.

의료정보 초안은 app/public 밖에 둡니다. noindex만으로 초안을 보호하지 않습니다. 실제 원장 검수와 참고문헌 확인 후 작성자·검토자·실제 검토일·수정일을 명시하여 공개 경로에 추가합니다. 현재 의료정보 글은 없습니다. 가격 변경일을 의학적 검토일로 사용하지 않습니다.

점검 결과와 검토할 정보는 REVIEW.md를 확인하세요.
