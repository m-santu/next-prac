import CardScelaton from "../components/CardScelaton";

export default function ProductsPageLoading() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2" >
                {[...Array(6)].map((product, ind) => <CardScelaton/>)}
            </div>
        </>
    )
}
