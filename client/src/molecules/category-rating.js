import RatingIndicator from '../atoms/rating-indicator';

export default function CategoryRating({ name, rating, ...attributes }) {
    return (
        <div {...attributes}>
            <dt>{ name }</dt>
            <dd><RatingIndicator rating={rating} /></dd>
        </div>
    )
}
