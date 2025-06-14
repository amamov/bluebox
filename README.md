# bluebox

## Getting started

### Docker 환경에서 실행

1. **Docker Desktop 실행**

   - Windows에서는 반드시 Docker Desktop을 먼저 실행하세요.
   - 트레이(시계 옆)에 고래 아이콘이 떠야 하며, "Docker Desktop is running" 상태여야 합니다.
   - Docker가 실행 중이지 않으면 모든 docker-compose 명령이 실패합니다.

2. **프로젝트 실행**

   - 아래 명령어로 프론트엔드와 백엔드 개발 환경을 모두 실행할 수 있습니다.
     ```sh
     docker-compose up --build
     ```
   - 컨테이너가 정상적으로 실행되면:
     - 프론트엔드: http://localhost:3000
     - 백엔드: http://localhost:8000

3. **실시간 로그 확인**
   - 모든 서비스 로그를 한 번에:
     ```sh
     docker-compose logs -f
     ```
   - 프론트엔드만:
     ```sh
     docker-compose logs -f frontend
     ```
   - 백엔드만:
     ```sh
     docker-compose logs -f backend
     ```

> 코드 변경 시 컨테이너가 자동으로 변경사항을 반영합니다.
> (단, 의존성 파일(package.json, requirements.txt) 변경 시에는 컨테이너 재빌드 필요)

---

### 수동 실행 방법

1. `frontend` 위치에서 `npm i`(최초 한 번)
2. `npm run dev` : 개발용 로컬 서버 실행 (프론트엔드)
3. `backend` 위치에서 `python -m venv venv` -> `venv` 가상환경 실행 -> `pip install -r requirements.txt` (최초 한 번)
4. `python main.py` : 개발용 로컬 서버 실행 (백엔드)
