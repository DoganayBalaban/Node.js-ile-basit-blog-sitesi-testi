const express = require("express");
const router = express.Router();

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

router.use("/blogs/:blogid", function(req, res) {
    res.render("users/blog-details");
});

router.use("/blogs", function(req, res) {
    res.render("users/blogs", data);
});

router.use("/", function(req, res) {
    res.render("users/index", data);
});

module.exports = router;