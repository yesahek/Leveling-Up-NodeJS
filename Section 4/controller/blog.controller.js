const Blog = require('../models/blog.model');
//Blog Creator......
const createBlog = async (req, res) => {
    try {
        await Blog.create(req.body);
        res.send({ success: true, message: 'Blog created successfuly' });
    } catch (error) {
        res.send({ error: true, message: error.details });
    }
};

//Blog Getor.........
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (error) {
        res.end({ error: true, message: error.message });
    }
};

module.exports = {
    createBlog,
    getBlogs,
};