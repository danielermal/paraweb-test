import card from './card.module.scss'

export const Card = ({data}) => {

    const toLink = () => {
        window.open(`${data.url}`, '_blank');
    }

    return (
        <article className={card.card} onClick={toLink}>
            <span className={card.date}>{data.publishedAt}</span>
            <h2 className={card.title}>{data.title}</h2>
            <div className={card.text_box}></div>
            <p className={card.text}>{data.description}</p>
            <span className={card.author}>{data.author}</span>
        </article>
    )
}