document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "3DGS at CVPR",
            content: "3D Gaussian Splatting (3DGS) is an exciting development in the field of computer vision, showcased at CVPR 2024. \n\n" +
                     "SuGaR: Surface-Aligned Gaussian Splatting for Efficient 3D Mesh Reconstruction and High-Quality Mesh Rendering, CVPR 2024. \n\n" +
                     "GaussianShader: 3D Gaussian Splatting with Shading Functions for Reflective Surfaces, CVPR 2024. \n\n" +
                     "pixelSplat: 3D Gaussian Splats from Image Pairs for Scalable Generalizable 3D Reconstruction, CVPR 2024.",
            image: "https://raw.githubusercontent.com/pdaicode/awesome-3dgs/master/images/cvpr2024.png",
            category: "Research"
        },
        {
            title: "AI Arts and VFX",
            content: "Check out this amazing video on AI Arts and VFX.",
            video: "https://youtu.be/mPUBdd8IuYc",
            category: "Research"
        },
        {
            title: "Llama 3.1",
            content: "Details coming soon...",
            category: "News"
        }
    ];

    const researchPostsElement = document.getElementById('research-posts');
    const newsPostsElement = document.getElementById('news-posts');
    const blogContentElement = document.getElementById('blog-content');

    const appendPost = (post, container) => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            ${post.image ? `<img src="${post.image}" alt="${post.title}" style="width:100px;height:auto;">` : ''}
            <a href="blog.html?title=${encodeURIComponent(post.title)}">Read more</a>
        `;
        container.appendChild(postElement);
    };

    posts.forEach(post => {
        if (post.category === "Research") {
            appendPost(post, researchPostsElement);
        } else if (post.category === "News") {
            appendPost(post, newsPostsElement);
        }
    });

    if (blogContentElement) {
        const urlParams = new URLSearchParams(window.location.search);
        const postTitle = urlParams.get('title');
        if (postTitle) {
            const post = posts.find(p => p.title === postTitle);
            if (post) {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content.replace(/\n/g, '<br>')}</p>
                    ${post.image ? `<img src="${post.image}" alt="${post.title}" style="width:100%;height:auto;">` : ''}
                    ${post.video ? `<iframe width="560" height="315" src="${post.video}" frameborder="0" allowfullscreen></iframe>` : ''}
                `;
                blogContentElement.appendChild(postElement);
            } else {
                blogContentElement.innerHTML = '<p>Post not found.</p>';
            }
        } else {
            posts.forEach(post => {
                appendPost(post, blogContentElement);
            });
        }
    }
});
