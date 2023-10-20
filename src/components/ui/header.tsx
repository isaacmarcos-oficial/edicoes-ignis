import { MenuIcon, ShoppingCartIcon } from "lucide-react"
import { Button } from "./button"
import { Card, CardContent } from "./card"

export const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]" >
      <Button size="icon" variant="outline" >
        <MenuIcon />
      </Button>

      <h1 className="font-semibold text-lg"><span>Edições</span> Ignis</h1>

      <Button size="icon" variant="outline" >
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}