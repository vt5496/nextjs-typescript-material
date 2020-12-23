import {useRouter} from "next/router";

export default function Post() {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <h1>Post</h1>
            <h2>By id: {router.query.id}</h2>
            <h2>Title: {router.query.id}</h2>
            <h2>By id: {router.query.id}</h2>
        </>
    )
}