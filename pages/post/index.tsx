import Link from 'next/link'

export default function Post() {
    type Post = {
        id: number,
        title: string,
        body: string
    }
    class PostCreator {
        id:number;
        title: string;
        body: string;

        constructor(id:number, title:string, body:string) {
            this.id = id;
            this.title = title;
            this.body = body
        }
    }
    const posts: Post[] = [
        new PostCreator(1,'first', 'first'),
        new PostCreator(2,'second', 'first'),
        new PostCreator(3,'third', 'first'),
    ]
    return (
        <>
           <h1>Post</h1>
            {posts.map((post:Post)=>{
                return (
                    <Link href={`post/${post.id}`} >
                        <a>Post</a>
                    </Link>
                )
            })}
        </>
    )
}