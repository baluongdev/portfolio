"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const WelcomePage = () => {
    type Post = {
        id: number;
        title: string;
        content: string;
    };
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://api.localhost/api/posts") // đổi URL thành API Laravel của bạn
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setPosts(data.data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">
                Chào mừng bạn đến với kênh của mình nhé!
            </h1>
            {/* <p className="mb-6">Hãy khám phá thêm về mình nhé!</p> */}
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mb-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.content}</p>
                    </li>
                ))}
            </ul>
            <Link href="/portfolio">
                <p className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                    Đến trang Portfolio
                </p>
            </Link>
        </div>
    );
};

export default WelcomePage;
