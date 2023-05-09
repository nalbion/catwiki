export default function RatingIndicator({ rating, ...attributes }) {
    return (
        <div title={rating} {...attributes}>{ ['', '*', '**', '***', '****', '*****'][rating] }</div>
    )
}
