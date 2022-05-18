import React from "react";
import { BlogNews } from "./BlogNews";
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';


function BlogData() {

    const data = [
        {
            title: 'Новости Euronews',
            body: 'Содержимое EURONEWS'
        },
        {
            title: 'Важные Посты',
            body: 'Содержимое важных постов'
        },
        {
            title: 'Здоровье',
            body: 'Полезные статьи'
        },
        {
            title: 'Путешествия',
            body: 'Туризм и Отдых в 2022 году'
        },
        {
            title: 'Транспорт',
            body: 'Содержимое - Транспорт'
        },
        {
            title: 'Недвижимость',
            body: 'Цены на Недвижимость'
        },
    ]


    return (
        <div>
            <Header />

            {data.map((item, i) => <BlogNews key={i} item_data={item} />)}

            <Footer />

        </div>
    )
}

export default BlogData;