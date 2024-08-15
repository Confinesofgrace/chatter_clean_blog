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
                const fetchedArticles = Array.from(items).map(item => {
                    const imageElement = item.querySelector('image');
                    const image = imageElement ? imageElement.textContent : '';

                    return {
                        title: item.querySelector('title').textContent,
                        link: item.querySelector('link').textContent,
                        description: item.querySelector('description').textContent,
                        image: image, // Extract the image URL
                    };
                });
                
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
                <div key={index} style={{ marginBottom: '20px', }}>
                    <h2 style={{marginBottom:'10px'}}>{article.title}</h2>
                    
                    {article.image && (
                        <img 
                            src={article.image} 
                            alt="Article" 
                            style={{ 
                                width: '150px', 
                                height: 'auto', 
                                marginBottom: '10px' 
                            }} 
                        />
                    )}
                    <p dangerouslySetInnerHTML={{ __html: article.description }} ></p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer"><b>Read more</b></a>
                </div>
            ))}
        </div>
    );
}

export default ArticlePreview;
