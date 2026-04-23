import { Logo } from "@/components/ui/logo";
import { redirect } from "next/navigation";

const Page = () => {

    redirect('/home')

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Logo size={80} />
        </div>
    )
}

export default Page;