import requests from "./httpService";

const BlogService = {

    getBlog : async () =>{
        return requests.get(`/blog`);
    },
    updateBlog : async (id,body) =>{
        return requests.patch(`/blog/${id}`,body);
    },

    createBlog : async (body) =>{
   
        return requests.post(`/blog`,body);
    },
    deleteBlog : async (id) =>{
        return requests.delete(`/blog/${id}`);
    }
    , 
    

}

export default BlogService;