import title from './title.module.scss'

export const Title = () => {
    return (
        <section className={title.title}>
            <h1 className={title.h1}>Как бизнесу сохранять IT-кадры на фоне кризиса</h1>
            <p className={title.text}>Инструменты, которые могут использовать компании для удержания сотрудников</p>
            <div className={title.box}>
                <div className={title.box_hidden}></div>
                <button className={title.button} type='button'>
                    <span>Подробнее</span>
                </button>
            </div>
            <ul className={title.slider_box}>
                <li className={`${title.slider} ${title.slider_active}`}></li>
                <li className={title.slider}></li>
                <li className={title.slider}></li>
            </ul>
        </section>
    )
}