import React from "react";
import Style from "../css/PricePage.module.css";

const PricePage = () => {
  return (
    <div className={Style.PricePage}>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-lg-10 ">
            <div
              classname={Style.title}
              style={{
                backgroundColor: "rgb(253, 253, 253)",
                border: "1px solid rgb(20, 7, 7)",
                padding: "15px 19px",
              }}
            >
              <h2>Изучение языка в различных форматах: </h2>
              <p>
                5 раз в неделю - 3 дня посвящены изучению грамматики, а 2 дня -
                разговорному английскому в формате "talking club". Также
                предлагается вариант обучения 3 раза в неделю, где все 3 дня
                уделяются грамматике, без включения разговорного английского.
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-5 d-flex justify-content-center">
          <div>
            <div className="col-lg-12 d-flex justify-content-center">
              <div>
                <h3 className="text-center">Общий английский</h3>

                <table className={Style.Pricetable}>
                  <tr>
                    <th>Формат обучения</th>
                    <th>Стоимость</th>
                    <th>Продолжительность</th>
                  </tr>
                  <tr>
                    <td>Обучение в группе (5 раз в неделю)</td>
                    <td>3000/месяц</td>
                    <td>1 уровень 2,5 месяца</td>
                  </tr>
                  <tr>
                    <td>Обучение в группе (3 раза в неделю)</td>
                    <td>2500/месяц</td>
                    <td>1 уровень 2,5 месяца</td>
                  </tr>
                  <tr>
                    <td>Индивидуальное обучение</td>
                    <td>800/занятие</td>
                    <td>Оговаривается индивидуально</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-lg-12 mt-5 d-flex justify-content-center">
              <div>
                <h3 className="text-center">Технический английский </h3>

                <table className={Style.Pricetable}>
                  <tr>
                    <th>Курсы</th>
                    <th>Формат обучения</th>

                    <th>Стоимость</th>
                  </tr>
                  <tr>
                    <td>IT</td>
                    <td>Обучение в группе (3 раза в неделю)</td>
                    <td>4000/месяц</td>
                  </tr>
                  <tr>
                    <td>Инженерный</td>
                    <td>Обучение в группе (3 раза в неделю)</td>
                    <td>4000/месяц</td>
                  </tr>
                  <tr>
                    <td>Индивидуальное обучение</td>
                    <td>Оговаривается индивидуально</td>
                    <td>1200/занятие</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricePage;
