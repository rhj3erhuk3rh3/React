import React from "react";
import classes from './lesson1.module.css';


function AddContentLessonOne() {

    function Title(props) {
        return (
          <h1> Hello World {props.city} is the capital of {props.country} </h1>
        )
      }
      
      
      function Header() {
        return (
          <ul className={classes.head} >
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        )
      }
      function User(props) {
        return (
          <ul className={classes.user} >
            <li>Меня зовут {props.name} </li>
            <li>Моя фамилия {props.username} </li>
            <li>мой возраст {props.age} </li>
          </ul>
        )
      }
      
      // домашнее задание №1
      function Footer(props) {
        return (
          <>
          <div className={classes.footer} >
            <ul>
              <li> Пункт №1 {props.list1} </li>
              <li> Пункт №1 {props.list2} </li>
              <li> Пункт №2 {props.list3} </li>
              <li> Пункт №3 {props.list4} </li>
            </ul>
          </div>
            </>
        )
      }
      

    return (
        <>
            <Header />
      
            <Title city="Bishkek" country="Kyrgyzstan" />
            <Title city="Alma-Ata" country="Kazakhstan" />

            <User name="Leanne" username="Bret" age="22"/>
            <User name="Ervin Howell" username="Antonette" age="32"/>
            <User name="Clementine" username="Samantha" age="45"/>
            <User name="Patricia" username="Karianne" age="17" />
            <hr />
            <Footer list1="Установка" list2="Основные понятия" list3="Расширенные руководства" list4="Ссылка на API"/>
            <Footer list1="Переполнение стека" list2="Дискуссионные форумы" list3="Чат Reactiflux" list4="Сообщество разработчиков"/>
            <Footer list1="Facebook" list2="Twitter" list3="instagram" list4="youtube"/>
      

        </>
    )
}

export default AddContentLessonOne;


