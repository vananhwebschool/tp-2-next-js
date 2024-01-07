export default function LayoutCommon({children}) {

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="/games.svg" alt="hangman"/></figure>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}