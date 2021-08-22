import React from 'react'
import {Modal} from 'react-bootstrap'


export const ModalInfo = ({show, onHide}) => {

  return (
    <Modal
      size="lg"
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Краткое описание проекта (World Clocks)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        NavBar имеет кнопку "Описание проекта" (открывает текущее окно),
        выбор количества часов от 1 до X (поменять можно в переменных,
        по умолчанию до 24), а также смена времени по умолчанию (локальной машины
        или GMT). Часовой пояс локальной машины можно сменить в переменных.
        Каждые часы показывают время выбранного города (а точнее скорректированное
        время от локальной машины/GMT на часовой пояс (в последнем случае это
        реальное время в выбранном городе)). По клику на другой город
        сразу меняется время на соответствующее. Изначально отображаются 2 часов
        со временем первого города из базы данных. В эту версию добавлен сервер
        с MongoDB с часовыми поясами, взятыми с файла timezones.json (запрос
        на сервер через REST API (к стеку добавлены "express", "axios", "mongoDB").
        Фронтенд делает запрос на сервер при запуске приложения, также запрос можно
        проверить напрямую по адресу '
        <a href="http://localhost:5000/api/city" target="_blank">
            http://localhost:5000/api/city</a>'
      </Modal.Body>
    </Modal>
  )
}

