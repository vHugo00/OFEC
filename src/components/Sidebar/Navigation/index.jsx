import {
  Home,
  SquareStack,
  CheckSquare,
} from 'lucide-react'

import { NavItem } from './NavItem'
import { Store } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="flex flex-col gap-0.5">
      <NavItem icon={Home} title="Inicio" href='/' />
      <NavItem icon={Store} title="Loja" href="/store" />
      <NavItem icon={SquareStack} title="Eventos" href='/events' />
      <NavItem icon={CheckSquare} title="Desafios" href='/challengs' />

    </nav>
  )
}
