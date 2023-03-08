const express = require("express");
const { connect } = require("../data/db");
const router = express.Router();
const db = require("../data/db");

const data = {
    title: "Popüler Kurslar",
    categories: ["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamaları"],
    blogs: [
        {
            blogid  : 1,
            baslik  : "Komple Uygulamalı Web Geliştirme",
            aciklama: "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
            resim   : "1.jpg",
            anasayfa: true,
            onay    : true
        },
        {
            blogid  : 2,
            baslik  : "Node.js",
            aciklama: "Öğreniyorum.",
            resim   : "2.jpg",
            anasayfa: true,
            onay    : true
        },
        {
            blogid  : 3,
            baslik  : "HTML,CSS,JS",
            aciklama: "Nasıl Kullanılır?",
            resim   : "3.jpeg",
            anasayfa: true,
            onay    : true
        },
        {
            blogid  : 3,
            baslik  : "--------",
            aciklama: "--------",
            resim   : "3.jpeg",
            anasayfa: true,
            onay    : true
        },
    ]
}

router.use("/blogs/category/:categoryid",async function(req, res){
    const id = req.params.categoryid;
    try{
        const [blogs,] = await db.execute("select * from blog where categoryid =?",[id])
        const [categories,] = await db.execute("select * from category")
        res.render("users/blogs", {
            title      : "Tüm Kurslar",
            blogs      : blogs,
            categories : categories,
            selectedCategory:id
        });
    }
    catch(err){
        console.log(err)
    }
})

router.use("/blogs/:blogid", async function(req, res) {
    const id = req.params.blogid;
    try{
        const [blogs,] = await db.execute("select * from blog where blogid =?",[id])
        if(blog[0]){
            return res.render("users/blog-details",{
                title:blogs[0].baslik,
                blog: blogs[0]
            });
        }
        res.redirect("/");
    }
    catch(err){
        console.log(err);
    }


    
});

router.use("/blogs", async function(req, res) {
    try{
        const [blogs,] = await db.execute("select * from blog where onay = 1")
        const [categories,] = await db.execute("select * from category")
        res.render("users/blogs", {
            title      : "Tüm Kurslar",
            blogs      : blogs,
            categories : categories,
            selectedCategory:null
        });
    }
    catch(err){
        console.log(err)
    }
});

router.use("/",  async function(req, res) {
    try{
        const [blogs,] = await db.execute("select * from blog where onay = 1 and anasayfa = 1")
        const [categories,] = await db.execute("select * from category")
        res.render("users/index", {
            title      : "Popüler Kurslar",
            blogs      : blogs,
            categories : categories,
            selectedCategory:null

        });
    }
    catch(err){
        console.log(err)
    }
});

module.exports = router;