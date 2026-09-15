import React, { useState, useEffect } from "react";
type Post = {
  id: number;
  title: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Component එක Mount වෙද්දී එක පාරක් පමණක් Run වේ

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data: Post[]) => {
        setPosts(data);
        setLoading(false); // Data ඇවිත් ඉවර වූ පසු Loading එක අයින් කරයි
      });
  }, []); // ⚠️ Empty Dependency Array

  if (loading) {
    return <p>Loading Posts....!</p>;
  }
  return (
    <div className="p-10">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

/*අපිට හමුවන Real-World Dynamic States 3:


Real API එකක් එක්ක වැඩ කරද්දී හැමවෙලේම UI එකේ States 3ක් පාලනය කරන්න වෙනවා:
Loading State: Data එනකම් User ට පෙන්නන UI එක (loading === true).
Data State: Data ආවාට පසු පෙන්වන UI එක.
Error State: Network / Server අවුලක් වුණොත් පෙන්වන Alert එක.
*/
