'use client'
import Markdown from 'react-markdown'
import '@/app/markdown.css'
import YouTube from 'react-youtube'

export default function ProjectPage() {
  const document = `
  # 리그오브레전드 전적 검색 사이트 - GGWP
  ## 팀원 소개
  ### 신준혁 - GitHub 리포지터리 관리, 백엔드, 프론트엔드
  ### 김승언 - Community 페이지 제공
  ### 유혁준 - Leaderboard 페이지 제공
  ### 박서진 - 프론트엔드
  ## 데모 영상`
  return (
    <div className="container mx-auto min-h-screen">
      <div className="mx-3 markdown-body">
        <Markdown>{document}</Markdown>
        <YouTube videoId="RJ1ita6JrMo" />
      </div>
    </div>
  )
}
