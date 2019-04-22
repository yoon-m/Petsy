import React from 'react';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
    render() {
        return (
            <>
                <div className='blog-container'>
                    <div className='blog-header'>
                        <a href="/#/about"><h2>Fresh from the blog</h2></a>
                        <a href='/#/about'><p>Read the blog</p></a>
                    </div>

                    <div className='blog-posts-container'>
                        <div className='blogs'>
                            <a href='/#/about' className='blog-links'><img src={'https://s3.amazonaws.com/aa-petsy-public/blogPlaceholder.jpg'} />
                            <p className='blog-category'>FEATURED SHOPS</p>
                            <h3 className='blog-title1'>Curated Vintage Home Decor From Horses for Courses</h3>
                            <h3 className='blog-title2'>Curated Vintage Home Decor From Horses for Courses</h3>
                            <p className='blog-content'>Authentic mid-century statement pieces and one-of-a-kind
                                    finishing touches abound in this chic, German-based shop.</p></a>
                        </div>

                        <div className='blogs'>
                            <a href='/#/about' className='blog-links'><img src={'https://s3.amazonaws.com/aa-petsy-public/blogPlaceholder2.jpg'} />
                            <p className='blog-category'>SHOPPING GUIDES</p>
                            <h3 className='blog-title1'>A pet lover's guide to animal hats</h3>
                            <h3 className='blog-title2'>A pet lover's guide to animal hats</h3>
                            <p className='blog-content'>Authentic mid-century statement pieces and one-of-a-kind
                                finishing touches abound in this chic, German-based shop.</p></a>
                        </div>

                        <div className='blogs'>
                            <a href='/#/about' className='blog-links'><img src={'https://s3.amazonaws.com/aa-petsy-public/blogPlaceholder3.jpg'} />
                            <p className='blog-category'>INSPIRATION</p>
                            <h3 className='blog-title1'>Curated Vintage Home Decor From Horses for Courses</h3>
                            <h3 className='blog-title2'>Curated Vintage Home Decor From Horses for Courses</h3>
                            <p className='blog-content'>Authentic mid-century statement pieces and one-of-a-kind
                                finishing touches abound in this chic, German-based shop.</p></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Blog;