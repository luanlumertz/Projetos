import { TweetItem } from "@/components/tweet/tweet-item"
import { GeneralHeader } from "@/components/ui/general-header"
import { SearchInput } from "@/components/ui/search-input"
import { tweet } from "@/data/tweet"
import { redirect } from "next/navigation"

type Props = {
    searchParams: {
        q: string | undefined
    }
}

const Page = async ({ searchParams }: Props) => {
    const { q } = await searchParams;

    if (!q || q.trim() === '') redirect('/');

    return (
        <div>
            <GeneralHeader backHref="/">
                <SearchInput defaultValue={q} /> 
            </GeneralHeader>
            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweet} />
                {/* <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} /> */}
            </div>
        </div>
    )
}

export default Page;