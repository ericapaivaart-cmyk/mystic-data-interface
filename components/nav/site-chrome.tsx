"use client"

import { useState, type ReactNode } from "react"
import { SiteHeader } from "./site-header"
import { PageMenu } from "./page-menu"
import { UserMenu } from "./user-menu"

export function SiteChrome({ children }: { children: ReactNode }) {
  const [pageOpen, setPageOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)

  function openUser() {
    setPageOpen(false)
    setUserOpen(true)
  }

  return (
    <>
      <SiteHeader onOpenPageMenu={() => setPageOpen(true)} />
      <div className="pt-[100px]">{children}</div>
      <PageMenu
        open={pageOpen}
        onClose={() => setPageOpen(false)}
        onOpenUser={openUser}
      />
      <UserMenu open={userOpen} onClose={() => setUserOpen(false)} />
    </>
  )
}
