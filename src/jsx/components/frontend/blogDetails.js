import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogServices from '../../../services/BlogServices';

function BlogDetail() {
  const { slug } = useParams(); // Get slug from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(slug);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const formattedSlug = slug.replace(/-/g, " "); // Convert hyphens back to spaces
        console.log("Formatted Slug:", formattedSlug);

        const response = await BlogServices.getBlogBySlug(formattedSlug);
        if (response?.data) {
          setBlog(response.data);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        setError('Error loading blog details');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);




  return (
    <>
      {/* Page Header */}
      <section className="cs_page_heading cs_center cs_bg_filed">
        <div className="container">
          <div className="cs_page_heading_in">
            <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">
              Blog Details
            </h1>
            <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className="fa-solid fa-house" />
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Blog Details</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Blog Details */}
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-8">
            <div className="cs_post_details cs_style_1 cs_heading_font">
              <div className="cs_post_thumbnail cs_radius_10">
                <img
                  src={blog?.image || 'assets/img/default.jpg'}
                  alt={blog?.title || 'Blog Image'}
                />
              </div>
              <ul className="cs_post_meta cs_fs_14 cs_accent_color cs_mp0">
                <li>
                  <i className="fa-solid fa-calendar" />
                  {new Date(blog?.createdAt).toLocaleDateString() || 'N/A'}
                </li>
                <li>
                  <i className="fa-solid fa-bookmark" />
                  {blog?.category || 'Uncategorized'}
                </li>
                <li>
                  <i className="fa-solid fa-message" />
                  {blog?.comments?.length || 0} Comments
                </li>
              </ul>
              <hr />
              <div className="cs_height_24 cs_height_lg_20" />
              <p>{blog?.content || 'No content available.'}</p>

              {/* Additional Images */}
              <div className="row">
                {blog?.extraImages?.map((img, index) => (
                  <div key={index} className="col-lg-6 cs_radius_10">
                    <img src={img} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="cs_tag_list cs_type_1 cs_fs_14 cs_heading_font cs_accent_color">
                {blog?.tags?.map((tag, index) => (
                  <a key={index} href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </>
  );
}

export default BlogDetail;
