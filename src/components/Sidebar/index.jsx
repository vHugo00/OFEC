import { LifeBuoy, Cog, } from 'lucide-react'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { Navigation } from './Navigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { NavItem } from './Navigation/NavItem'
import * as Collapsible from '@radix-ui/react-collapsible'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        asChild
        forceMount
        className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <div className="flex flex-1 flex-col gap-6">

          <Navigation />

          <div className="mt-auto flex flex-col gap-6">
            <nav className="flex flex-col gap-1">
              <NavItem icon={LifeBuoy} title="Suporte" />
              <NavItem icon={Cog} title="Configurações" />
            </nav>

            <UsedSpaceWidget />
            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
