import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 상단 헤더 영역 
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(), // 왼쪽 제목
    Component.Spacer(),    // 중간 여백 (메뉴들을 오른쪽으로 밀어줌)
    Component.Search(),    // 검색
    Component.Darkmode(),  // 다크모드
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/jackyzha0/quartz",
      "About": "/About",   // 이미지처럼 메뉴를 추가하고 싶을 때 사용
    },
  }),
}

// 메인 콘텐츠 레이아웃 (그래프가 주인공)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(), // 'Second Brain' 같은 큰 제목
    
    // 👇 pageBody에 있던 그래프를 beforeBody 안으로 올렸습니다! 👇
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: -1,         // 모든 노드를 한 번에 보여줌
        repelForce: 2.0,   // 시원하게 퍼지게 설정
        centerForce: 0.5,
        enableWaitAnimation: true,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        repelForce: 2.0,
        centerForce: 0.5,
      },
    }),
    // 👆 여기까지 👆
  ],
  left: [],  // 사이드바 완전히 비우기
  right: [], 
}

// 리스트 페이지 레이아웃도 동일하게 적용
export const defaultListPageLayout: PageLayout = defaultContentPageLayout



/*
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
*/