import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {/* Ação que vai fazer abrir o menu lateral atraves de um botão com um ícone */}
                <Button>
                    <ShoppingCart />
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                {/* Aqui fica o cabeçalho desse menu lateral*/}
                <SheetHeader className="pb-0">
                    <SheetTitle>Carrinho</SheetTitle>
                    <SheetDescription className="sr-only">
                        "Este é o seu carrinho de compras, onde você pode revisar os itens antes de finalizar a compra."
                    </SheetDescription>
                </SheetHeader>
                
                {/* E aqui começa o conteúdo desse menu */}
                <div className="px-4">
                    {/* Itens que foram adicionado ao carrinho */}
                    <div className="flex flex-col gap-4 mb-3">
                        ...
                    </div>

                    <Separator className="my-4" />

                    {/* Valor da compra */}
                    <div className="flex justify-between items-center text-xs">
                        <div>Subtotal</div>
                        <div>...</div>
                    </div>

                    <Separator className="my-4" />

                    {/* Botão para finalizar compra */}
                    <div className="text-center">
                        <Button>Fizalizar Compra</Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}