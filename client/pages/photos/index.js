import { useRouter } from "next/dist/client/router";


export default function PhotoPage() {
    const { query } = useRouter();
    const page = parseInt(query.page);
    return (
        <div>

        </div>
    )
}