import React, { useEffect, useState } from 'react';

function ArticlePreview() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://rss.app/feeds/VGqfI9muYR8aJub8.xml');
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'application/xml');
                
                const items = xml.querySelectorAll('item');
                const fetchedArticles = Array.from(items).map(item => ({
                    title: item.querySelector('title').textContent,
                    link: item.querySelector('link').textContent,
                    description: item.querySelector('description').textContent,
                }));
                
                setArticles(fetchedArticles);
            } catch (error) {
                console.error("Error fetching RSS feed:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            {articles.map((article, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h2>{article.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: article.description }}></p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
}

export default ArticlePreview;
