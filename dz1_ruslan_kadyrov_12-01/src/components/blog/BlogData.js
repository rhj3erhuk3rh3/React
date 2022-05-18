import React from "react";
import { BlogNews } from "./BlogNews";
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';


function BlogData() {

    const data = [
        {
            title:  'Новости',
            body:  'EuroNews'
        },
        {
            title:  'Важные Посты',
            body:    'Содержание'
        },
        {
            title:  'Здоровье',
            body: 'Полезные статьи'
        },
        {
            title:    'Путешествия',
            body: 'Туризм и Отдых в Кыргызстане'
        },
        {
            title:  'Транспорт',
            body: 'Услуги Транспорта'
        },
        {
            title:  'Недвижимость',
            body: 'Риэлторские услуги'
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