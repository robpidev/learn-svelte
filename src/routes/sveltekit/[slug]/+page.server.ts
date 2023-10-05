import { posts } from "../data";
//
// export function load({ setHeaders }) {
//   setHeaders ({
//     'Content-type': 'text/plain'
//   })
// }


export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  return { post }
}
