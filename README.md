## 35-COLLABORATION-WEB-LOTTE_CINEMA

35기 AND SOPT 합동 세미나 모바일 웹 2팀 - 롯데시네마 레포지토리 🍿

---

<br>

### FE developer 👩🏻‍💻👨🏻‍💻

|                                                  김고은 [GitHub](https://github.com/gonn-i)                                                  |                                                 김한서 [GitHub](https://github.com/seueooo)                                                  |                                              이진혁 [GitHub](https://github.com/constantly-dev)                                              |                                              최정완 [GitHub](https://github.com/look-back-luca)                                              |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/gonn-i/post/c95e22ea-8ba1-417a-9cab-e153272ad6ef/image.png" alt="김고은" width="150" height="150"> | <img src="https://velog.velcdn.com/images/gonn-i/post/6b2a3029-cdc1-437b-af49-1661f1f40ea8/image.png" alt="김한서" width="150" height="150"> | <img src="https://velog.velcdn.com/images/gonn-i/post/f92e8946-2204-46db-a400-c869d1344261/image.png" alt="이진혁" width="150" height="150"> | <img src="https://velog.velcdn.com/images/gonn-i/post/3f107d8b-0e5f-47e2-812f-1b1c696cc2a8/image.png" alt="최정완" width="150" height="150"> |
|                                                                시간선택 VIEW                                                                 |                                                                좌석선택 VIEW                                                                 |                                               상영관선택 VIEW <br>정보확인 및 인원선택<br>VIEW                                               |                                                                  메인 VIEW                                                                   |

---

### ⚙️ 기술스택

<table align="center">
  <tr>
    <th>Library</th>
    <td>
      <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    </td>
  </tr>
  <tr>
    <th>Programming Language</th>
    <td>
                              <img src="https://img.shields.io/badge/typeScript-61DAFB?style=for-the-badge&logo=typescript&logoColor=white">
    </td>
  </tr>
  <tr>
    <th>Styling</th>
    <td>
                        <img src="https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white">
    </td>
  </tr>
  <tr>
    <th>Data Fetching </th>
    <td>
                  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
                        <img src="https://img.shields.io/badge/react Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
    </td>
  </tr>
    <tr>
    <th>Formatting </th>
    <td>
<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
      <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
      <img src="https://img.shields.io/badge/stylelint-333333?style=for-the-badge&logo=stylelint&logoColor=white">
    </td>
  </tr>
   <tr>
    <th>Package Manager</th>
    <td>
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
    </td>
  </tr>
  <tr>
    <th>Bundler</th>
    <td>
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
    </td>
  </tr>
  <tr>
    <th>Collaboration Tools</th>
    <td>
            <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
            <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
                  <img src="https://img.shields.io/badge/Figma-000000?style=for-the-badge&logo=Figma&logoColor=white">
    </td>
  </tr>
</table>

---

### 📂 프로젝트 구조

```plaintext
|-- 📁 .github
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
  |-- 📁 apis
  |-- 📁 assets
  |-- 📁 components
		  |-- 📁 commons
		  |-- 📁 페이지1
		  |-- 📁 페이지2
  |-- 📁 constants
  |-- 📁 hooks
  |-- 📁 pages
  |-- 📁 styles
  |-- 📁 types
  |-- 📁 utils
  |-- 📁 Router
|-- .env
|-- .eslintignore
|-- .eslintrc.json
|-- .gitignore
|-- .prettierignore
|-- .prettierrc
|-- .stylelintrc.json
|-- index.html
|-- package.json
|-- svg.d.ts
|-- README.md
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- yarn.lock
```

---

### 🤙 커밋컨벤션

| 커밋 유형  | 의미                                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| `Init`     | 초기 세팅시에만 사용 (패키지 설치, eslint/ prettier 작성)                             |
| `Feat`     | 새로운 기능 추가 (새로운 구현)                                                        |
| `Design`   | CSS 등 사용자 UI 디자인 변경                                                          |
| `Fix`      | 버그 수정                                                                             |
| `Docs`     | 문서 추가, 수정, 삭제                                                                 |
| `Style`    | 스타일만 변경 (코드 수정 X) <br> 예외) 들여쓰기 등 포매팅, 세미콜론 수정은 Style 가능 |
| `Refactor` | 코드 리팩토링                                                                         |
| `Comment`  | 필요한 주석 추가 및 변경                                                              |
| `Rename`   | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우                                   |
| `Remove`   | 파일을 삭제하는 작업만 수행한 경우                                                    |
| `!HOTFIX`  | 급하게 치명적인 버그를 고쳐야 하는 경우                                               |
| `Test`     | 테스트 코드, 리팩토링 테스트 코드 추가                                                |
| `Chore`    | (코드의 수정 없이) 그 외 기타 수정                                                    |

---

### 그외의 컨벤션

[롯데시네마 컨벤션 모음 zip 🍿🎬](https://quark-dianella-5e6.notion.site/1368a514965e80c2a325ef16bbd642b0?pvs=4)
