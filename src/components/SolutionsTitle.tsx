export default function SolutionsTitle(props: { title: string, subtitle: string, className?: string }) {
    return (
        <div className={`solutions-title ${props.className ? props.className : ""}`}>
            {/* eslint-disable-next-line */}
            <img
                src="/img/product-manufacturers-title.png"
                alt=""
            />
            <div className="container">
                <h1>{props.title}<br />
                    <span>
                        {props.subtitle}
                    </span>
                </h1>
            </div>
        </div>
    )
}