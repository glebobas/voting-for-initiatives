const React = require('react');
const Layout = require('./Layout');

function AddInit({ username }) {
  return (
    <Layout username={username}>
      <div style={{
        width: '940px', margin: '0 auto', padding: '0 0 180px', paddingLeft: '10px', paddingRight: '10px',
      }}
      >
        <section style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <div style={{
            float: 'left', width: '620px', fontSize: '14px', lineHeight: '21px', color: '#2d2d2d',
          }}
          >
            <h1 style={{
              lineHeight: '30px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px', marginTop: '20px',
            }}
            >
              Публикация инициативы
            </h1>
            <div style={{
              border: '0', fontSize: '100%', font: 'inherit', verticalAlign: 'baseline', margin: '0', padding: '0',
            }}
            >
              <div />
              <p style={{
                border: '0', fontSize: '100%', font: 'inherit', verticalAlign: 'baseline', margin: '0', padding: '0', padding: '0 0 21px',
              }}
              >
                Форма подачи инициативы заполнена на&nbsp,
                <strong>60%</strong>
              </p>
              <div style={{
                background: '#fff', border: '1px solid #a2a2a2', width: '618px', margin: '0 0 16px', position: 'relative', '-webkit-border-radius': '12px', '-moz-border-radius': '12px', borderRadius: '12px',
              }}
              >
                <div className="progress">
                  <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>50%</div>
                </div>
              </div>
              <div>
                <div
                  className="alert alert-success"
                  role="alert"
                  style={{
                    padding: '8px 35px 8px 14px', marginBottom: '20px', color: '#c09853', textShadow: '0 1px 0 rgb(255 255 255 / 50%)', backgroundColor: '#fcf8e3', border: '1px solid #fbeed5', '-webkit-border-radius': '4px', '-moz-border-radius': '4px', borderRadius: '4px',
                  }}
                >
                  <span>Указанная Вами информация сохраняется в автоматическим режиме при изменении данных инициативы или каждые 30 секунд. При потере доступа к сети Интернет, Вы всегда сможете открыть черновик инициативы в разделе Моя активность/Черновики.</span>
                </div>
              </div>
              <form>
                <h3 style={{
                  margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Введите название инициативы
                </h3>
                <input
                  className="form-control"
                  type="text"
                  style={{
                    background: '#fff', height: '18px', border: '1px solid #D1DAE4', padding: '4px 15px 5px', color: '#6B6565', font: '14px/18px Trebuchet M, Arial, sansSerif', outline: '0', position: 'relative', '-webkit-border-radius': '8px', '-moz-border-radius': '8px', borderRadius: '8px', '-moz-box-shadow': '0px 1px 1px 0px #D9D9D9 inset', '-webkit-box-shadow': '0px 1px 1px 0px #d9d9d9 inset', boxShadow: '0px 1px 1px 0px #d9d9d9 inset', padding: '0 0 21px', marginBottom: '15px',
                  }}
                />
                <h3 style={{
                  fontSize: '16px', margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Определение категории инициативы
                </h3>
                <ul style={{
                  listStyle: 'none', border: '0', font: 'inherit', verticalAlign: 'baseline', margin: '0', padding: '0', marginBottom: '20px',
                }}
                >
                  <li>
                    <input type="checkbox" />
&nbsp;Транспорт и дороги
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Природные ресурсы и экология
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Инфраструктура города
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Жилые дома и дворы
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Безопасность
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Бизнес
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Потребители и сервис
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Чиновники и гос. услуги
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Население и миграция
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Избирательное право
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Экономика и финансы
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Здравоохранение
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Образование и наука
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Уголовный кодекс
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Государственное управление
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;ЖКХ, УК, ТСЖ
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Государственная поддержка
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Труд и занятость
                  </li>
                  <li>
                    <input type="checkbox" />
&nbsp;Социальная защита
                  </li>
                </ul>
                <h3 style={{
                  margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Описание проблемы
                </h3>
                <textarea
                  className="form-control"
                  style={{
                    width: '598px', height: '238px', overflow: 'auto', resize: 'none', padding: '3px 5px 4px 15px', marginBottom: '20px',
                  }}
                />
                <h3 style={{
                  margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Добавить файлы
                </h3>
                <span style={{ position: 'absolute', marginTop: '-22px', fontSize: '10px' }}>не более 10 страниц, форматы: doc, docx, pdf, rtf, odt</span>
                <div style={{
                  border: '0', fontSize: '100%', font: 'inherit', verticalAlign: 'baseline', margin: '0', padding: '0',
                }}
                >
                  <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', direction: 'ltr' }}>
                      <div>
                        <div style={{
                          background: 'url(//static.roi.ru/themes/frontend/style/clip.png) no-repeat 14px 11px', padding: '12px 0 46px 33px', fontSize: '14px', lineHeight: '18px', color: '#404040',
                        }}
                        >
                          <p>Чтобы добавить файл перетащите его на эту область</p>
                          <a href="#">или выберите файлы на компьютере...</a>
                        </div>
                      </div>
                    </div>
                    <input
                      className="form-control"
                      type="file"
                      style={{
                        position: 'absolute', right: '0px', top: '0px', fontFamily: 'Arial', fontSize: '118px', margin: '0px', padding: '0px', cursor: 'pointer', opacity: '0', height: '65px',
                      }}
                    />
                  </div>
                </div>
                <h3 style={{
                  margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Фото изображения
                </h3>
                <span style={{ position: 'absolute', marginTop: '-22px', fontSize: '10px' }}>не более 5 Mb, форматы: jpeg, jpg, pdf, rtf, odt.</span>
                <div style={{
                  border: '0', fontSize: '100%', font: 'inherit', verticalAlign: 'baseline', margin: '0', padding: '0',
                }}
                >
                  <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', direction: 'ltr' }}>
                      <div>
                        <div style={{
                          background: 'url(//static.roi.ru/themes/frontend/style/clip.png) no-repeat 14px 11px', padding: '12px 0 46px 33px', fontSize: '14px', lineHeight: '18px', color: '#404040',
                        }}
                        >
                          <p>Чтобы добавить файл перетащите его на эту область</p>
                          <a href="#">или выберите файлы на компьютере...</a>
                        </div>
                      </div>
                    </div>
                    <input
                      className="form-control"
                      type="file"
                      style={{
                        position: 'absolute', right: '0px', top: '0px', fontFamily: 'Arial', fontSize: '118px', margin: '0px', padding: '0px', cursor: 'pointer', opacity: '0', height: '64px',
                      }}
                    />
                  </div>
                </div>
                <h3 style={{
                  margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Выберите уровень инициативы
                </h3>
                <select
                  className="form-select"
                  style={{
                    background: '#fff', border: '1px solid #D1DAE4', padding: '4px 15px 5px', color: '#6B6565', font: "14px/18px 'Trebuchet MS', Arial, sans-serif", outline: '0', position: 'relative', '-webkit-border-radius': '8px', '-moz-border-radius': '8px', borderRadius: '8px', '-moz-box-shadow': '0px 1px 1px 0px #D9D9D9 inset', '-webkit-box-shadow': '0px 1px 1px 0px #d9d9d9 inset', boxShadow: '0px 1px 1px 0px #d9d9d9 inset', marginBottom: '20px', width: '300px',
                  }}
                >
                  <optgroup label="This is a group">
                    <option value="12" selected="">This is item 1</option>
                    <option value="13">This is item 2</option>
                    <option value="14">This is item 3</option>
                  </optgroup>
                </select>
                <h3 style={{
                  margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Решение
                </h3>
                <textarea className="form-control" style={{ width: '598px', height: '238px', marginBottom: '20px' }} />
                <h3 style={{
                  margin: '0 0 6px', color: '#403C39', fontSize: '24px', fontWeight: 'bold', padding: '0 0 19px',
                }}
                >
                  Практический результат
                </h3>
                <textarea className="form-control" style={{ width: '598px', height: '238px', marginBottom: '20px' }} />
                <div>
                  <div className="d-flex justify-content-center"><button className="btn btn-primary" type="button">Отправить</button></div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

module.exports = AddInit;
