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
      <NavItem icon={Home} title="Inicio" />
      <NavItem icon={Store} title="Loja" />
      <NavItem icon={SquareStack} title="Eventos" />
      <NavItem icon={CheckSquare} title="Desafios" />

    </nav>
  )
}
